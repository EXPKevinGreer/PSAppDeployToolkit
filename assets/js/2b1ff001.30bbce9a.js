"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[1062],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(8957),o=(n(9496),n(9613));const i={id:"Set-PinnedApplication",title:"Set-PinnedApplication",description:'Help page for the "Set-PinnedApplication" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},a=void 0,l={unversionedId:"reference/functions/Set-PinnedApplication",id:"reference/functions/Set-PinnedApplication",title:"Set-PinnedApplication",description:'Help page for the "Set-PinnedApplication" command',source:"@site/docs/reference/functions/Set-PinnedApplication.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Set-PinnedApplication",permalink:"/docs/reference/functions/Set-PinnedApplication",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Set-PinnedApplication",title:"Set-PinnedApplication",description:'Help page for the "Set-PinnedApplication" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Set-MsiProperty",permalink:"/docs/reference/functions/Set-MsiProperty"},next:{title:"Set-RegistryKey",permalink:"/docs/reference/functions/Set-RegistryKey"}},p={},s=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Action",id:"-action",level:3},{value:"-FilePath",id:"-filepath",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none-1",level:3},{value:"This function does not generate any output.",id:"this-function-does-not-generate-any-output",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,"Pins or unpins a shortcut to the start menu or task bar."),(0,o.kt)("h2",{id:"syntax"},"SYNTAX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-PinnedApplication [-Action] <String> [-FilePath] <String> [<CommonParameters>]\n")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"Pins or unpins a shortcut to the start menu or task bar."),(0,o.kt)("p",null,"This should typically be run in the user context, as pinned items are stored in the user profile."),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-PinnedApplication -Action 'PinToStartMenu' -FilePath \"$envProgramFilesX86\\IBM\\Lotus\\Notes\\notes.exe\"\n")),(0,o.kt)("h3",{id:"example-2"},"EXAMPLE 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-PinnedApplication -Action 'UnpinFromTaskbar' -FilePath \"$envProgramFilesX86\\IBM\\Lotus\\Notes\\notes.exe\"\n")),(0,o.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,o.kt)("h3",{id:"-action"},"-Action"),(0,o.kt)("p",null,"Action to be performed.\nOptions: 'PinToStartMenu','UnpinFromStartMenu','PinToTaskbar','UnpinFromTaskbar'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-filepath"},"-FilePath"),(0,o.kt)("p",null,"Path to the shortcut file to be pinned or unpinned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 2\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,o.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,o.kt)("h2",{id:"inputs"},"INPUTS"),(0,o.kt)("h3",{id:"none"},"None"),(0,o.kt)("h3",{id:"you-cannot-pipe-objects-to-this-function"},"You cannot pipe objects to this function."),(0,o.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,o.kt)("h3",{id:"none-1"},"None"),(0,o.kt)("h3",{id:"this-function-does-not-generate-any-output"},"This function does not generate any output."),(0,o.kt)("h2",{id:"notes"},"NOTES"),(0,o.kt)("p",null,"Windows 10 logic borrowed from Stuart Pearson (",(0,o.kt)("a",{parentName:"p",href:"https://pinto10blog.wordpress.com/2016/09/10/pinto10/"},"https://pinto10blog.wordpress.com/2016/09/10/pinto10/"),")"),(0,o.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}d.isMDXComponent=!0}}]);