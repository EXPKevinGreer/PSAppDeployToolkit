"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[3921],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(8957),o=(n(9496),n(9613));const i={id:"Invoke-HKCURegistrySettingsForAllUsers",title:"Invoke-HKCURegistrySettingsForAllUsers",description:'Help page for the "Invoke-HKCURegistrySettingsForAllUsers" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},s=void 0,l={unversionedId:"reference/functions/Invoke-HKCURegistrySettingsForAllUsers",id:"reference/functions/Invoke-HKCURegistrySettingsForAllUsers",title:"Invoke-HKCURegistrySettingsForAllUsers",description:'Help page for the "Invoke-HKCURegistrySettingsForAllUsers" command',source:"@site/docs/reference/functions/Invoke-HKCURegistrySettingsForAllUsers.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Invoke-HKCURegistrySettingsForAllUsers",permalink:"/docs/reference/functions/Invoke-HKCURegistrySettingsForAllUsers",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Invoke-HKCURegistrySettingsForAllUsers",title:"Invoke-HKCURegistrySettingsForAllUsers",description:'Help page for the "Invoke-HKCURegistrySettingsForAllUsers" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Install-SCCMSoftwareUpdates",permalink:"/docs/reference/functions/Install-SCCMSoftwareUpdates"},next:{title:"Invoke-ObjectMethod",permalink:"/docs/reference/functions/Invoke-ObjectMethod"}},a={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"-UserProfiles",id:"-userprofiles",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none-1",level:3},{value:"This function does not generate any output.",id:"this-function-does-not-generate-any-output",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,"Set current user registry settings for all current users and any new users in the future."),(0,o.kt)("h2",{id:"syntax"},"SYNTAX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-HKCURegistrySettingsForAllUsers [-RegistrySettings] <ScriptBlock> [[-UserProfiles] <PSObject[]>]\n [<CommonParameters>]\n")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"Set HKCU registry settings for all current and future users by loading their NTUSER.dat registry hive file, and making the modifications."),(0,o.kt)("p",null,"This function will modify HKCU settings for all users even when executed under the SYSTEM account."),(0,o.kt)("p",null,"To ensure new users in the future get the registry edits, the Default User registry hive used to provision the registry for new users is modified."),(0,o.kt)("p",null,"This function can be used as an alternative to using ActiveSetup for registry settings."),(0,o.kt)("p",null,"The advantage of using this function over ActiveSetup is that a user does not have to log off and log back on before the changes take effect."),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"[ScriptBlock]$HKCURegistrySettings = {\n    ```\n\nSet-RegistryKey -Key 'HKCU\\Software\\Microsoft\\Office\\14.0\\Common' -Name 'qmenable' -Value 0 -Type DWord -SID $UserProfile.SID\n\nSet-RegistryKey -Key 'HKCU\\Software\\Microsoft\\Office\\14.0\\Common' -Name 'updatereliabilitydata' -Value 1 -Type DWord -SID $UserProfile.SID\n\\}\n\nInvoke-HKCURegistrySettingsForAllUsers -RegistrySettings $HKCURegistrySettings\n\n## PARAMETERS\n\n### -RegistrySettings\n\nScript block which contains HKCU registry settings which should be modified for all users on the system.\nMust specify the -SID parameter for all HKCU settings.\n\n```yaml\nType: ScriptBlock\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-userprofiles"},"-UserProfiles"),(0,o.kt)("p",null,"Specify the user profiles to modify HKCU registry settings for.\nDefault is all user profiles except for system profiles."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: PSObject[]\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: (Get-UserProfiles)\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,o.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,o.kt)("h2",{id:"inputs"},"INPUTS"),(0,o.kt)("h3",{id:"none"},"None"),(0,o.kt)("h3",{id:"you-cannot-pipe-objects-to-this-function"},"You cannot pipe objects to this function."),(0,o.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,o.kt)("h3",{id:"none-1"},"None"),(0,o.kt)("h3",{id:"this-function-does-not-generate-any-output"},"This function does not generate any output."),(0,o.kt)("h2",{id:"notes"},"NOTES"),(0,o.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}f.isMDXComponent=!0}}]);