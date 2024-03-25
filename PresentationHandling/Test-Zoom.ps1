Function Test-Zoom {
    <#
.SYNOPSIS
    Tests if Zoom is running and in presentation mode.

.DESCRIPTION
    The Test-Zoom function checks if Zoom is running and in presentation mode. If Zoom is running, the function will detect if it is in presentation mode.

.PARAMETER None
    This function does not accept any parameters.

.EXAMPLE
    PS C:\> Test-Zoom
    This example tests if Zoom is running and in presentation mode.

.NOTES
    This function requires administrative privileges to run. It also requires the Get-Process cmdlet to be installed on the system.

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
            #Region: Test if Zoom is running ($IsZoomRunning, $ProcessName)
            Write-Log -Message 'Checking if Zoom is in presentation mode...' -Source $CmdletName

            Try {
                $RegexProcessName = '^zoom'
                $ZoomProcess = Get-Process -ErrorAction 'Stop' | Where-Object { $_.ProcessName -match $RegexProcessName }
                If ($ZoomProcess) {
                    $IsZoomRunning = $true
                    $ProcessName = ($ZoomProcess.ProcessName | Select-Object -Unique) -join ', '
                    Write-Log -Message 'Zoom application is running.' -Source $CmdletName
                }
                Else {
                    $IsZoomRunning = $false
                    Write-Log -Message 'Zoom application is not running.' -Source $CmdletName
                }
            }
            Catch {
                Throw "Failed to check if Zoom is running. `r`n$(Resolve-Error)"
            }
            #EndRegion

            $IsZoomPresenting = $false
            If ($IsZoomRunning) {
                ## Detect if Zoom is in Presentation Mode
                $PossibleWindowTitle = @(
                    'Screen Sharing Meeting Controls'
                )

                #Region: Check if a Zoom window matches the possible window titles
                $ZoomWindow = Get-WindowTitle -GetAllWindowTitles | Where-Object { $_.ParentProcess -match $RegexProcessName }
                foreach ($Window in $ZoomWindow) {
                    $MatchedWindowTitle = $Window.WindowTitle -match ($PossibleWindowTitle -join '|')
                    if ($MatchedWindowTitle) {
                        $IsZoomPresenting = $true
                        Write-Log -Message "Detected that Zoom process [$ProcessName] has a window with a title that matches [$($matches.values)]." -Source $CmdletName
                        Write-Log -Message "This is an indication that Zoom is in Presentation Mode." -Source $CmdletName
                        Continue
                    }
                }
                #EndRegion

            }

            Write-Log -Message "Zoom presentation detected [$IsZoomPresenting]" -Source $CmdletName
        }
        Catch {
            $IsZoomPresenting = $null
            Write-Log -Message "Failed check to see if Zoom is in presentation mode. `r`n$(Resolve-Error)" -Severity 3 -Source $CmdletName
        }

        Return $IsZoomPresenting
    }
    End {
        Write-FunctionHeaderOrFooter -CmdletName $CmdletName -Footer
    }
}
#endregion