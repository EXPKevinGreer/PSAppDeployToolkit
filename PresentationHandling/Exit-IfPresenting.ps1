function Exit-IfPresenting {
    <#
    .SYNOPSIS
    This function checks for the presence of a presentation (Microsoft Teams or PowerPoint).
    If a presentation is detected, it exits the script.

    .DESCRIPTION
    The Exit-IfPresenting function is used to determine if a presentation is currently running.
    It checks for the presence of either Microsoft Teams or PowerPoint. If either of these
    applications is running, the function sets a flag, logs the detection, and exits the
    script with a specified exit code (70000). This function is useful in scenarios where you
    want to prevent a script from running while a presentation is active.

    .PARAMETER None
    This function does not accept any parameters.

    .EXAMPLE
    PS C:\> Exit-IfPresenting

    This example checks for the presence of a presentation. If a presentation is detected, the script exits with exit code 70000.

    .NOTES

    .LINK
    https://psappdeploytoolkit.com
    #>

    [CmdletBinding()]
    param (
    )

    begin {
        ## Get the name of this function and write header
        $CmdletName = $PSCmdlet.MyInvocation.MyCommand.Name
        Write-FunctionHeaderOrFooter -CmdletName $CmdletName -CmdletBoundParameters $PSBoundParameters -Header
    }

    process {
        try {
            if ((Test-PowerPoint) -or (Test-MSTeams) -or (Test-Zoom)) {
                $presentationDetected = $True
                Write-Log "Presentation detected - exit script [$presentationDetected]" -Source $CmdletName
                Write-Log "Exit with exit code [70000]" -Source $CmdletName
                exit-script -ExitCode 70000
            }
        }
        Catch {
            Write-Log -Message "Failed to run. `r`n$(Resolve-Error)" -Severity 3 -Source $CmdletName
        }
    }

    end {
        Write-FunctionHeaderOrFooter -CmdletName $CmdletName -Footer
    }
}