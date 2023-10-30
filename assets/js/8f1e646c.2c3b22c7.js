"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[1738],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||r;return n?l.createElement(d,i(i({ref:t},p),{},{components:n})):l.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=n(8957),a=(n(9496),n(9613));const r={id:"Write-Log",title:"Write-Log",description:'Help page for the "Write-Log" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},i=void 0,o={unversionedId:"reference/functions/Write-Log",id:"reference/functions/Write-Log",title:"Write-Log",description:'Help page for the "Write-Log" command',source:"@site/docs/reference/functions/Write-Log.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Write-Log",permalink:"/docs/reference/functions/Write-Log",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Write-Log",title:"Write-Log",description:'Help page for the "Write-Log" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Write-FunctionHeaderOrFooter",permalink:"/docs/reference/functions/Write-FunctionHeaderOrFooter"}},s={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Message",id:"-message",level:3},{value:"-Severity",id:"-severity",level:3},{value:"-Source",id:"-source",level:3},{value:"-ScriptSection",id:"-scriptsection",level:3},{value:"-LogType",id:"-logtype",level:3},{value:"-LogFileDirectory",id:"-logfiledirectory",level:3},{value:"-LogFileName",id:"-logfilename",level:3},{value:"-MaxLogFileSizeMB",id:"-maxlogfilesizemb",level:3},{value:"-WriteHost",id:"-writehost",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"-PassThru",id:"-passthru",level:3},{value:"-DebugMessage",id:"-debugmessage",level:3},{value:"-LogDebugMessage",id:"-logdebugmessage",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"System.String",id:"systemstring",level:3},{value:"The message to write to the log file or output to the console.",id:"the-message-to-write-to-the-log-file-or-output-to-the-console",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none",level:3},{value:"This function does not generate any output.",id:"this-function-does-not-generate-any-output",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,"Write messages to a log file in CMTrace.exe compatible format or Legacy text file format."),(0,a.kt)("h2",{id:"syntax"},"SYNTAX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Write-Log [-Message] <String[]> [[-Severity] <Int16>] [[-Source] <String>] [[-ScriptSection] <String>]\n [[-LogType] <String>] [[-LogFileDirectory] <String>] [[-LogFileName] <String>] [[-MaxLogFileSizeMB] <Decimal>]\n [[-WriteHost] <Boolean>] [[-ContinueOnError] <Boolean>] [-PassThru] [-DebugMessage]\n [[-LogDebugMessage] <Boolean>] [<CommonParameters>]\n")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Write messages to a log file in CMTrace.exe compatible format or Legacy text file format and optionally display in the console."),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Write-Log -Message \"Installing patch MS15-031\" -Source 'Add-Patch' -LogType 'CMTrace'\n")),(0,a.kt)("h3",{id:"example-2"},"EXAMPLE 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Write-Log -Message \"Script is running on Windows 8\" -Source 'Test-ValidOS' -LogType 'Legacy'\n")),(0,a.kt)("h3",{id:"example-3"},"EXAMPLE 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'Write-Log -Message "Log only message" -WriteHost $false\n')),(0,a.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,a.kt)("h3",{id:"-message"},"-Message"),(0,a.kt)("p",null,"The message to write to the log file or output to the console."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: (All)\nAliases: Text\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-severity"},"-Severity"),(0,a.kt)("p",null,"Defines message type.\nWhen writing to console or CMTrace.exe log format, it allows highlighting of message type.\nOptions: 1 = Information (default), 2 = Warning (highlighted in yellow), 3 = Error (highlighted in red)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int16\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: 1\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-source"},"-Source"),(0,a.kt)("p",null,"The source of the message being logged."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 3\n        Default value: $([String]$parentFunctionName = [IO.Path]::GetFileNameWithoutExtension((Get-Variable -Name 'MyInvocation' -Scope 1 -ErrorAction 'SilentlyContinue').Value.MyCommand.Name); If ($parentFunctionName) {\n                $parentFunctionName\n            }\n            Else {\n                'Unknown'\n            })\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-scriptsection"},"-ScriptSection"),(0,a.kt)("p",null,"The heading for the portion of the script that is being executed.\nDefault is: $script:installPhase."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 4\nDefault value: $script:installPhase\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-logtype"},"-LogType"),(0,a.kt)("p",null,"Choose whether to write a CMTrace.exe compatible log file or a Legacy text log file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 5\nDefault value: $configToolkitLogStyle\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-logfiledirectory"},"-LogFileDirectory"),(0,a.kt)("p",null,"Set the directory where the log file will be saved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 6\n        Default value: $(If ($configToolkitCompressLogs) {\n                $logTempFolder\n            }\n            Else {\n                $configToolkitLogDir\n            })\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-logfilename"},"-LogFileName"),(0,a.kt)("p",null,"Set the name of the log file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 7\nDefault value: $logName\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-maxlogfilesizemb"},"-MaxLogFileSizeMB"),(0,a.kt)("p",null,"Maximum file size limit for log file in megabytes (MB).\nDefault is 10 MB."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Decimal\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 8\nDefault value: $configToolkitLogMaxSize\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-writehost"},"-WriteHost"),(0,a.kt)("p",null,"Write the log message to the console."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 9\nDefault value: $configToolkitLogWriteToHost\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-continueonerror"},"-ContinueOnError"),(0,a.kt)("p",null,"Suppress writing log message to console on failure to write message to log file.\nDefault is: $true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 10\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-passthru"},"-PassThru"),(0,a.kt)("p",null,"Return the message that was passed to the function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 11\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-debugmessage"},"-DebugMessage"),(0,a.kt)("p",null,"Specifies that the message is a debug message.\nDebug messages only get logged if -LogDebugMessage is set to $true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 12\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-logdebugmessage"},"-LogDebugMessage"),(0,a.kt)("p",null,"Debug messages only get logged if this parameter is set to $true in the config XML file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 13\nDefault value: $configToolkitLogDebugMessage\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,a.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,a.kt)("h2",{id:"inputs"},"INPUTS"),(0,a.kt)("h3",{id:"systemstring"},"System.String"),(0,a.kt)("h3",{id:"the-message-to-write-to-the-log-file-or-output-to-the-console"},"The message to write to the log file or output to the console."),(0,a.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,a.kt)("h3",{id:"none"},"None"),(0,a.kt)("h3",{id:"this-function-does-not-generate-any-output"},"This function does not generate any output."),(0,a.kt)("h2",{id:"notes"},"NOTES"),(0,a.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}g.isMDXComponent=!0}}]);