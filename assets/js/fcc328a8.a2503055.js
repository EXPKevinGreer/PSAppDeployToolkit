"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[3210],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(8957),l=(n(9496),n(9613));const r={id:"Test-IsMutexAvailable",title:"Test-IsMutexAvailable",description:'Help page for the "Test-IsMutexAvailable" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},i=void 0,o={unversionedId:"reference/functions/Test-IsMutexAvailable",id:"reference/functions/Test-IsMutexAvailable",title:"Test-IsMutexAvailable",description:'Help page for the "Test-IsMutexAvailable" command',source:"@site/docs/reference/functions/Test-IsMutexAvailable.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Test-IsMutexAvailable",permalink:"/docs/reference/functions/Test-IsMutexAvailable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Test-IsMutexAvailable",title:"Test-IsMutexAvailable",description:'Help page for the "Test-IsMutexAvailable" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Test-Battery",permalink:"/docs/reference/functions/Test-Battery"},next:{title:"Test-MSUpdates",permalink:"/docs/reference/functions/Test-MSUpdates"}},s={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-MutexName",id:"-mutexname",level:3},{value:"-MutexWaitTimeInMilliseconds",id:"-mutexwaittimeinmilliseconds",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Boolean",id:"systemboolean",level:3},{value:"Returns $true if the current thread acquires an exclusive lock on the named mutex, $false otherwise.",id:"returns-true-if-the-current-thread-acquires-an-exclusive-lock-on-the-named-mutex-false-otherwise",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Wait, up to a timeout value, to check if current thread is able to acquire an exclusive lock on a system mutex."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Test-IsMutexAvailable [-MutexName] <String> [[-MutexWaitTimeInMilliseconds] <Int32>] [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"A mutex can be used to serialize applications and prevent multiple instances from being opened at the same time.\nWait, up to a timeout (default is 1 millisecond), for the mutex to become available for an exclusive lock."),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"EXAMPLE 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Test-IsMutexAvailable -MutexName 'Global\\_MSIExecute' -MutexWaitTimeInMilliseconds 500\n")),(0,l.kt)("h3",{id:"example-2"},"EXAMPLE 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Test-IsMutexAvailable -MutexName 'Global\\_MSIExecute' -MutexWaitTimeInMilliseconds (New-TimeSpan -Minutes 5).TotalMilliseconds\n")),(0,l.kt)("h3",{id:"example-3"},"EXAMPLE 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Test-IsMutexAvailable -MutexName 'Global\\_MSIExecute' -MutexWaitTimeInMilliseconds (New-TimeSpan -Seconds 60).TotalMilliseconds\n")),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-mutexname"},"-MutexName"),(0,l.kt)("p",null,"The name of the system mutex."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-mutexwaittimeinmilliseconds"},"-MutexWaitTimeInMilliseconds"),(0,l.kt)("p",null,"{","{"," Fill MutexWaitTimeInMilliseconds Description ","}","}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: 1\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h3",{id:"none"},"None"),(0,l.kt)("h3",{id:"you-cannot-pipe-objects-to-this-function"},"You cannot pipe objects to this function."),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"systemboolean"},"System.Boolean"),(0,l.kt)("h3",{id:"returns-true-if-the-current-thread-acquires-an-exclusive-lock-on-the-named-mutex-false-otherwise"},"Returns $true if the current thread acquires an exclusive lock on the named mutex, $false otherwise."),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"This is an internal script function and should typically not be called directly."),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/aa372909(VS.85).asp"},"http://msdn.microsoft.com/en-us/library/aa372909(VS.85).asp")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://psappdeploytoolkit.com"},"https://psappdeploytoolkit.com")))}m.isMDXComponent=!0}}]);