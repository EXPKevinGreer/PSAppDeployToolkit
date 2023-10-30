"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[1379],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(8957),a=(n(9496),n(9613));const l={id:"Get-SchedulerTask",title:"Get-SchedulerTask",description:'Help page for the "Get-SchedulerTask" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},o=void 0,i={unversionedId:"reference/functions/Get-SchedulerTask",id:"reference/functions/Get-SchedulerTask",title:"Get-SchedulerTask",description:'Help page for the "Get-SchedulerTask" command',source:"@site/docs/reference/functions/Get-SchedulerTask.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Get-SchedulerTask",permalink:"/docs/reference/functions/Get-SchedulerTask",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Get-SchedulerTask",title:"Get-SchedulerTask",description:'Help page for the "Get-SchedulerTask" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Get-RunningProcesses",permalink:"/docs/reference/functions/Get-RunningProcesses"},next:{title:"Get-ServiceStartMode",permalink:"/docs/reference/functions/Get-ServiceStartMode"}},s={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-TaskName",id:"-taskname",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"PSOjbect. This function returns a PSObject with all scheduled task properties.",id:"psojbect-this-function-returns-a-psobject-with-all-scheduled-task-properties",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,"Retrieve all details for scheduled tasks on the local computer."),(0,a.kt)("h2",{id:"syntax"},"SYNTAX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-SchedulerTask [[-TaskName] <String>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Retrieve all details for scheduled tasks on the local computer using schtasks.exe.\nAll property names have spaces and colons removed."),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-SchedulerTask\n")),(0,a.kt)("p",null,"To display a list of all scheduled task properties."),(0,a.kt)("h3",{id:"example-2"},"EXAMPLE 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-SchedulerTask | Out-GridView\n")),(0,a.kt)("p",null,"To display a grid view of all scheduled task properties."),(0,a.kt)("h3",{id:"example-3"},"EXAMPLE 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-SchedulerTask | Select-Object -Property TaskName\n")),(0,a.kt)("p",null,"To display a list of all scheduled task names."),(0,a.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,a.kt)("h3",{id:"-taskname"},"-TaskName"),(0,a.kt)("p",null,"Specify the name of the scheduled task to retrieve details for.\nUses regex match to find scheduled task."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-continueonerror"},"-ContinueOnError"),(0,a.kt)("p",null,"Continue if an error is encountered.\nDefault: $true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,a.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,a.kt)("h2",{id:"inputs"},"INPUTS"),(0,a.kt)("h3",{id:"none"},"None"),(0,a.kt)("h3",{id:"you-cannot-pipe-objects-to-this-function"},"You cannot pipe objects to this function."),(0,a.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,a.kt)("h3",{id:"psojbect-this-function-returns-a-psobject-with-all-scheduled-task-properties"},"PSOjbect. This function returns a PSObject with all scheduled task properties."),(0,a.kt)("h2",{id:"notes"},"NOTES"),(0,a.kt)("p",null,"This function has an alias: Get-ScheduledTask if Get-ScheduledTask is not defined"),(0,a.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}d.isMDXComponent=!0}}]);