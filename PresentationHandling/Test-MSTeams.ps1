Function Test-MSTeams {
    <#
    .SYNOPSIS
        Checks if Microsoft Teams is currently sharing screen/application.

    .DESCRIPTION
        The Test-MSTeams function checks if Microsoft Teams is running and if it is currently in a screen sharing or application sharing mode. It examines the running Teams processes and their associated windows to determine the sharing status.

    .PARAMETER None
        This function does not accept any parameters.

    .EXAMPLE
        PS C:\> Test-MSTeams
        This command checks if Microsoft Teams is running and if it is in screen/application sharing mode. The output will be a boolean value indicating the sharing status.

    .EXAMPLE
        PS C:\> $isSharing = Test-MSTeams
        This command assigns the result of the Test-MSTeams function to the variable $isSharing. If Teams is sharing, $isSharing will be $true; otherwise, it will be $false.

    .INPUTS
        None. This function does not accept any input.

    .OUTPUTS
        Boolean. The function returns $true if Teams is in presentation mode, otherwise it returns $false.

    .NOTES
        IMPORTANT NOTE: If Microsoft alters how Teams names its windows in upcoming updates, this function may be impacted and may require adjustments to maintain its functionality.

        The function relies on specific window titles to determine if Teams is in presentation mode. These titles may change with different versions of Teams or with different language settings.

    	Tested with the below versions of MS Teams

        Microsoft Teams Meeting Add-in for Microsoft Office
        - 1.23.35502 [24033.811.2738.2546(preview)]
        - 1.24.05401 [24060.2610.2771.7995(preview)]

        Teams Machine-Wide Installer
        - 1.6.0.11166

    .LINK
        https://psappdeploytoolkit.com

    #>

    [CmdletBinding()]
    Param (
    )

    Begin {
        ## Get the name of this function and write header
        $CmdletName = $PSCmdlet.MyInvocation.MyCommand.Name
        Write-FunctionHeaderOrFooter -CmdletName $CmdletName -CmdletBoundParameters $PSBoundParameters -Header
    }
    Process {
        Try {
            #Region: Test if Teams is running($IsTeamsRunning, $ProcessName)
            Write-Log -Message 'Checking if Teams is in presentation mode...' -Source $CmdletName

            $RegexProcessName = '^msteams$|^Teams$|^ms-teams'
            $TeamsProcess = Get-Process -ErrorAction 'Stop' | Where-Object { $_.ProcessName -match $RegexProcessName }
            If ($TeamsProcess) {
                $IsTeamsRunning = $true
                $ProcessName = ($TeamsProcess.ProcessName | Select-Object -Unique) -join ', '
                Write-Log -Message "Teams application is running [$ProcessName]." -Source $CmdletName
            }
            Else {
                $IsTeamsRunning = $false
                Write-Log -Message 'Teams application is not running.' -Source $CmdletName
            }
            #EndRegion


            $IsTeamsPresenting = $false
            If ($IsTeamsRunning) {

                #Get all window titles for Teams processes
                $TeamsWindow = Get-WindowTitle -GetAllWindowTitles | Where-Object { $_.ParentProcess -match $RegexProcessName }

                #Region: Check if a Teams window matches the possible window titles
                foreach ($Window in $TeamsWindow) {
                    Write-Log -Message "WindowTitle: $($Window.WindowTitle)`n`n$($Window | Out-String)" -Source $CmdletName
                    $PossibleWindowTitle = @(
                        'Microsoft Teams Call in progress',
                        'Sharing control bar'
                    )
                    $MatchedWindowTitle = $Window.WindowTitle -match ($PossibleWindowTitle -join '|')
                    if ($MatchedWindowTitle) {
                        $IsTeamsPresenting = $true
                        Write-Log -Message "Detected that Teams process [$($Window.ParentProcess)] has a window with a title that matches [$($matches.values)]." -Source $CmdletName
                        Write-Log -Message "This is an indication that Teams is in Presentation Mode." -Source $CmdletName
                        Write-Log -Message "For logging purposes continue recording any remaining matching window titles." -Source $CmdletName
                        $IsTeamsPresenting = $true
                    }
                }
                #EndRegion

                #Region: Check if a Teams window has the same title as another Teams window
                #In a version of teams, a presentation was determined when there were multiple windows with the same title.
                $PresentingWindow = $TeamsWindow | Group-Object -Property 'WindowTitle' | Where-Object Count -GT 1
                if (-not $IsTeamsPresenting) {
                    if ($PresentingWindow) {
                        $IsTeamsPresenting = $true

                        Write-Log -Message "Detected that Teams process [$(($PresentingWindow.group.ParentProcess | Select-Object -Unique) -join ',')] has $($PresentingWindow.Count) windows with a title of [$($PresentingWindow.Name)]." -Source $CmdletName
                        Write-Log -Message "This is an indication that Teams is in Presentation Mode." -Source $CmdletName
                    }
                }
                #EndRegion

            } #If ($IsTeamsRunning)

            Write-Log -Message "Teams presentation detected [$IsTeamsPresenting]" -Source $CmdletName
        }
        Catch {
            Write-Log -Message "Failed check to see if Teams is sharing screen/application. `r`n$(Resolve-Error)" -Severity 3 -Source $CmdletName
        }

        Return $IsTeamsPresenting
    }

    End {
        Write-FunctionHeaderOrFooter -CmdletName $CmdletName -Footer
    }
}