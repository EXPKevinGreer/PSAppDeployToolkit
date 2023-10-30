"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[3947],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9422:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(8957),l=(a(9496),a(9613));const i={id:"Remove-MSIApplications",title:"Remove-MSIApplications",description:'Help page for the "Remove-MSIApplications" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},r=void 0,o={unversionedId:"reference/functions/Remove-MSIApplications",id:"reference/functions/Remove-MSIApplications",title:"Remove-MSIApplications",description:'Help page for the "Remove-MSIApplications" command',source:"@site/docs/reference/functions/Remove-MSIApplications.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Remove-MSIApplications",permalink:"/docs/reference/functions/Remove-MSIApplications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Remove-MSIApplications",title:"Remove-MSIApplications",description:'Help page for the "Remove-MSIApplications" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Remove-InvalidFileNameChars",permalink:"/docs/reference/functions/Remove-InvalidFileNameChars"},next:{title:"Remove-RegistryKey",permalink:"/docs/reference/functions/Remove-RegistryKey"}},s={},p=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"EXAMPLE 4",id:"example-4",level:3},{value:"EXAMPLE 5",id:"example-5",level:3},{value:"EXAMPLE 6",id:"example-6",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Name",id:"-name",level:3},{value:"-Exact",id:"-exact",level:3},{value:"-WildCard",id:"-wildcard",level:3},{value:"-Parameters",id:"-parameters",level:3},{value:"-AddParameters",id:"-addparameters",level:3},{value:"-FilterApplication",id:"-filterapplication",level:3},{value:"-ExcludeFromUninstall",id:"-excludefromuninstall",level:3},{value:"-IncludeUpdatesAndHotfixes",id:"-includeupdatesandhotfixes",level:3},{value:"-LoggingOptions",id:"-loggingoptions",level:3},{value:"-private:LogName",id:"-privatelogname",level:3},{value:"-PassThru",id:"-passthru",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"PSObject",id:"psobject",level:3},{value:"Returns an object with the following properties:",id:"returns-an-object-with-the-following-properties",level:3},{value:"- ExitCode",id:"--exitcode",level:3},{value:"- StdOut",id:"--stdout",level:3},{value:"- StdErr",id:"--stderr",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Removes all MSI applications matching the specified application name."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Remove-MSIApplications [-Name] <String> [-Exact] [-WildCard] [[-Parameters] <String>]\n [[-AddParameters] <String>] [[-FilterApplication] <Array>] [[-ExcludeFromUninstall] <Array>]\n [-IncludeUpdatesAndHotfixes] [[-LoggingOptions] <String>] [[-private:LogName] <String>] [-PassThru]\n [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,'Removes all MSI applications matching the specified application name.\nEnumerates the registry for installed applications matching the specified application name and uninstalls that application using the product code, provided the uninstall string matches "msiexec".'),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Remove-MSIApplications -Name 'Adobe Flash'\n")),(0,l.kt)("p",null,'Removes all versions of software that match the name "Adobe Flash"'),(0,l.kt)("h3",{id:"example-2"},"EXAMPLE 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Remove-MSIApplications -Name 'Adobe'\n")),(0,l.kt)("p",null,'Removes all versions of software that match the name "Adobe"'),(0,l.kt)("h3",{id:"example-3"},"EXAMPLE 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Remove-MSIApplications -Name 'Java 8 Update' -FilterApplication @(\n")),(0,l.kt)("p",null,"@('Is64BitApplication', $false, 'Exact'),\n@('Publisher', 'Oracle Corporation', 'Exact')\n)"),(0,l.kt)("p",null,'Removes all versions of software that match the name "Java 8 Update" where the software is 32-bits and the publisher is "Oracle Corporation".'),(0,l.kt)("h3",{id:"example-4"},"EXAMPLE 4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Remove-MSIApplications -Name 'Java 8 Update' -FilterApplication @(, @('Publisher', 'Oracle Corporation', 'Exact')) -ExcludeFromUninstall @(, @('DisplayName', 'Java 8 Update 45', 'Contains'))\n")),(0,l.kt)("p",null,'Removes all versions of software that match the name "Java 8 Update" and also have "Oracle Corporation" as the Publisher; however, it does not uninstall "Java 8 Update 45" of the software.\nNOTE: If only specifying a single row in the two-dimensional arrays, the array must have the extra parentheses and leading comma as in this example.'),(0,l.kt)("h3",{id:"example-5"},"EXAMPLE 5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Remove-MSIApplications -Name 'Java 8 Update' -ExcludeFromUninstall @(, @('DisplayName', 'Java 8 Update 45', 'Contains'))\n")),(0,l.kt)("p",null,'Removes all versions of software that match the name "Java 8 Update"; however, it does not uninstall "Java 8 Update 45" of the software.\nNOTE: If only specifying a single row in the two-dimensional array, the array must have the extra parentheses and leading comma as in this example.'),(0,l.kt)("h3",{id:"example-6"},"EXAMPLE 6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Remove-MSIApplications -Name 'Java 8 Update' -ExcludeFromUninstall @(\n")),(0,l.kt)("p",null,"@('Is64BitApplication', $true, 'Exact'),\n@('DisplayName', 'Java 8 Update 45', 'Exact'),\n@('DisplayName', 'Java 8 Update 4*', 'WildCard'),\n@('DisplayName', 'Java \\d Update \\d","{","3","}","', 'RegEx'),\n@('DisplayName', 'Java 8 Update', 'Contains'))"),(0,l.kt)("p",null,'Removes all versions of software that match the name "Java 8 Update"; however, it does not uninstall 64-bit versions of the software, Update 45 of the software, or any Update that starts with 4.'),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-name"},"-Name"),(0,l.kt)("p",null,"The name of the application to uninstall.\nPerforms a contains match on the application display name by default."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-exact"},"-Exact"),(0,l.kt)("p",null,"Specifies that the named application must be matched using the exact name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-wildcard"},"-WildCard"),(0,l.kt)("p",null,"Specifies that the named application must be matched using a wildcard search."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-parameters"},"-Parameters"),(0,l.kt)("p",null,'Overrides the default parameters specified in the XML configuration file.\nUninstall default is: "REBOOT=ReallySuppress /QN".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases: Arguments\n\nRequired: False\nPosition: 2\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-addparameters"},"-AddParameters"),(0,l.kt)("p",null,'Adds to the default parameters specified in the XML configuration file.\nUninstall default is: "REBOOT=ReallySuppress /QN".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 3\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-filterapplication"},"-FilterApplication"),(0,l.kt)("p",null,"Two-dimensional array that contains one or more (property, value, match-type) sets that should be used to filter the list of results returned by Get-InstalledApplication to only those that should be uninstalled.\nProperties that can be filtered upon: ProductCode, DisplayName, DisplayVersion, UninstallString, InstallSource, InstallLocation, InstallDate, Publisher, Is64BitApplication"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Array\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 4\nDefault value: @(@())\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-excludefromuninstall"},"-ExcludeFromUninstall"),(0,l.kt)("p",null,"Two-dimensional array that contains one or more (property, value, match-type) sets that should be excluded from uninstall if found.\nProperties that can be excluded: ProductCode, DisplayName, DisplayVersion, UninstallString, InstallSource, InstallLocation, InstallDate, Publisher, Is64BitApplication"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Array\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 5\nDefault value: @(@())\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-includeupdatesandhotfixes"},"-IncludeUpdatesAndHotfixes"),(0,l.kt)("p",null,"Include matches against updates and hotfixes in results."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-loggingoptions"},"-LoggingOptions"),(0,l.kt)("p",null,'Overrides the default logging options specified in the XML configuration file.\nDefault options are: "/L*v".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 6\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-privatelogname"},"-private:LogName"),(0,l.kt)("p",null,"{","{"," Fill private:LogName Description ","}","}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases: LogName\n\nRequired: False\nPosition: 7\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-passthru"},"-PassThru"),(0,l.kt)("p",null,"Returns ExitCode, STDOut, and STDErr output from the process."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-continueonerror"},"-ContinueOnError"),(0,l.kt)("p",null,"Continue if an error occured while trying to start the processes.\nDefault: $true."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 8\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h3",{id:"none"},"None"),(0,l.kt)("h3",{id:"you-cannot-pipe-objects-to-this-function"},"You cannot pipe objects to this function."),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"psobject"},"PSObject"),(0,l.kt)("h3",{id:"returns-an-object-with-the-following-properties"},"Returns an object with the following properties:"),(0,l.kt)("h3",{id:"--exitcode"},"- ExitCode"),(0,l.kt)("h3",{id:"--stdout"},"- StdOut"),(0,l.kt)("h3",{id:"--stderr"},"- StdErr"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"More reading on how to create arrays if having trouble with -FilterApplication or -ExcludeFromUninstall parameter: ",(0,l.kt)("a",{parentName:"p",href:"http://blogs.msdn.com/b/powershell/archive/2007/01/23/array-literals-in-powershell.aspx"},"http://blogs.msdn.com/b/powershell/archive/2007/01/23/array-literals-in-powershell.aspx")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}u.isMDXComponent=!0}}]);