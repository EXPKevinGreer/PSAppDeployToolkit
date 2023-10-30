"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[1483],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=l,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(8957),l=(r(9496),r(9613));const o={id:"Get-UserProfiles",title:"Get-UserProfiles",description:'Help page for the "Get-UserProfiles" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},a=void 0,i={unversionedId:"reference/functions/Get-UserProfiles",id:"reference/functions/Get-UserProfiles",title:"Get-UserProfiles",description:'Help page for the "Get-UserProfiles" command',source:"@site/docs/reference/functions/Get-UserProfiles.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Get-UserProfiles",permalink:"/docs/reference/functions/Get-UserProfiles",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Get-UserProfiles",title:"Get-UserProfiles",description:'Help page for the "Get-UserProfiles" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Get-UniversalDate",permalink:"/docs/reference/functions/Get-UniversalDate"},next:{title:"Get-WindowTitle",permalink:"/docs/reference/functions/Get-WindowTitle"}},s={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-ExcludeNTAccount",id:"-excludentaccount",level:3},{value:"-ExcludeSystemProfiles",id:"-excludesystemprofiles",level:3},{value:"-ExcludeDefaultUser",id:"-excludedefaultuser",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"PSObject. Returns a PSObject with the following properties: NTAccount, SID, ProfilePath",id:"psobject-returns-a-psobject-with-the-following-properties-ntaccount-sid-profilepath",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Get the User Profile Path, User Account Sid, and the User Account Name for all users that log onto the machine and also the Default User (which does not log on)."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-UserProfiles [[-ExcludeNTAccount] <String[]>] [[-ExcludeSystemProfiles] <Boolean>] [-ExcludeDefaultUser]\n [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Get the User Profile Path, User Account Sid, and the User Account Name for all users that log onto the machine and also the Default User (which does  not log on)."),(0,l.kt)("p",null,"Please note that the NTAccount property may be empty for some user profiles but the SID and ProfilePath properties will always be populated."),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-UserProfiles\n")),(0,l.kt)("p",null,"Returns the following properties for each user profile on the system: NTAccount, SID, ProfilePath"),(0,l.kt)("h3",{id:"example-2"},"EXAMPLE 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-UserProfiles -ExcludeNTAccount 'CONTOSO\\Robot','CONTOSO\\ntadmin'\n")),(0,l.kt)("h3",{id:"example-3"},"EXAMPLE 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"[String[]]$ProfilePaths = Get-UserProfiles | Select-Object -ExpandProperty 'ProfilePath'\n")),(0,l.kt)("p",null,"Returns the user profile path for each user on the system.\nThis information can then be used to make modifications under the user profile on the filesystem."),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-excludentaccount"},"-ExcludeNTAccount"),(0,l.kt)("p",null,"Specify NT account names in Domain\\Username format to exclude from the list of user profiles."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-excludesystemprofiles"},"-ExcludeSystemProfiles"),(0,l.kt)("p",null,"Exclude system profiles: SYSTEM, LOCAL SERVICE, NETWORK SERVICE.\nDefault is: $true."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-excludedefaultuser"},"-ExcludeDefaultUser"),(0,l.kt)("p",null,"Exclude the Default User.\nDefault is: $false."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h3",{id:"none"},"None"),(0,l.kt)("h3",{id:"you-cannot-pipe-objects-to-this-function"},"You cannot pipe objects to this function."),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"psobject-returns-a-psobject-with-the-following-properties-ntaccount-sid-profilepath"},"PSObject. Returns a PSObject with the following properties: NTAccount, SID, ProfilePath"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}d.isMDXComponent=!0}}]);