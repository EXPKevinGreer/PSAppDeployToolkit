"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[9215],{9613:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(9496);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(o),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return o?n.createElement(m,r(r({ref:t},d),{},{components:o})):n.createElement(m,r({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7278:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=o(8957),a=(o(9496),o(9613));const l={sidebar_position:2,title:"\ud83d\ude80 Downloading",description:"How to download a copy of PSAppDeployToolkit.",hide_title:!0,slug:"/getting-started/download",tags:["Getting Started","Download"]},r=void 0,i={unversionedId:"getting-started/downloading",id:"getting-started/downloading",title:"\ud83d\ude80 Downloading",description:"How to download a copy of PSAppDeployToolkit.",source:"@site/docs/getting-started/downloading.mdx",sourceDirName:"getting-started",slug:"/getting-started/download",permalink:"/docs/getting-started/download",draft:!1,tags:[{label:"Getting Started",permalink:"/docs/tags/getting-started"},{label:"Download",permalink:"/docs/tags/download"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83d\ude80 Downloading",description:"How to download a copy of PSAppDeployToolkit.",hide_title:!0,slug:"/getting-started/download",tags:["Getting Started","Download"]},sidebar:"documentation",previous:{title:"\u2699\ufe0f Requirements",permalink:"/docs/getting-started/requirements"},next:{title:"\ud83e\udeaa Licensing",permalink:"/docs/getting-started/licensing"}},s={},p=[{value:"Downloading PSAppDeployToolkit",id:"downloading-psappdeploytoolkit",level:2},{value:"Why is PSAppDeployToolkit not a PowerShell module?",id:"why-is-psappdeploytoolkit-not-a-powershell-module",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"downloading-psappdeploytoolkit"},"Downloading PSAppDeployToolkit"),(0,a.kt)("p",null,"PSAppDeployToolkit is provided as a self-contained Zip file archive, which contains the logic-engine and supporting PSFunctions for you to leverage, as well as a standardised deployment template.  You can paste the following PowerShell code into a PowerShell console window to automatically download and extract the latest version of PSAppDeployToolkit to your user profile's Downloads folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'## Download the latest release of PSAppDeployToolkit from GitHub\n$githubRepository = "psappdeploytoolkit/psappdeploytoolkit"\n$filenamePatternMatch = "PSAppDeployToolkit*.zip"\n$psadtReleaseUri = "https://api.github.com/repos/$githubRepository/releases/latest"\n$psadtDownloadUri = ((Invoke-RestMethod -Method GET -Uri $psadtReleaseUri).assets | Where-Object name -like $filenamePatternMatch ).browser_download_url\n$zipExtractionPath = Join-Path $env:USERPROFILE "Downloads" "PSAppDeployToolkit"\n$zipTempDownloadPath = Join-Path -Path $([System.IO.Path]::GetTempPath()) -ChildPath $(Split-Path -Path $psadtDownloadUri -Leaf)\n\n## Download to a temporary folder\nInvoke-WebRequest -Uri $psadtDownloadUri -Out $zipTempDownloadPath\n## Remove any Zone.Identifier alternate data streams to unblock the file (if required)\nUnblock-File -Path $zipTempDownloadPath\n## Extract the contents of the zip file to a subfolder under the current user\'s Downloads folder\nExpand-Archive -Path $zipTempDownloadPath -DestinationPath $zipExtractionPath -Force\n\nWrite-Host ("File: {0} extracted to Path: {1}" -f $psadtDownloadUri, $zipExtractionPath) -ForegroundColor Yellow\n')),(0,a.kt)("p",null,"Alternatively, you can download and extract yourself from here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/PSAppDeployToolkit/PSAppDeployToolkit/releases/latest"},"PSAppDeployToolkit Latest Release"),".")),(0,a.kt)("p",null,"Once extracted, you will see a file and folder structure similar to the one outlined on the next page."),(0,a.kt)("h2",{id:"why-is-psappdeploytoolkit-not-a-powershell-module"},"Why is PSAppDeployToolkit not a PowerShell module?"),(0,a.kt)("p",null,"PSAppDeployToolkit is not a PowerShell module, and this was a very deliberate decision made early on. For a number of reasons, we wanted to avoid the need to install PSAppDeployToolkit on the target system. :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PSAppDeployToolkit is a PowerShell-based logic engine that is used to drive application deployments en-masse in an enterprise environment. "),(0,a.kt)("li",{parentName:"ul"},"PowerShell modules are installed on the endpoint and can be scoped to the Current User or Local Machine, either for Windows PowerShell or PowerShell Core.  ")),(0,a.kt)("p",null,"If PSAppDeployToolkit was decoupled from the deployment script and instead, installed & updated as a module we would immediately run into a number of issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Before deploying any application in a production environment, you should always test against a handful of endpoints, fix any issues encountered and repeat the process until the deployment script has been thoroughly tested to ensure no bugs, typos etc. Most larg environments require a Change Mangement process to be followed with testing and validation results. "),(0,a.kt)("li",{parentName:"ul"},"A change in PSADT module version, either automated or manually initiated, would invalidate testing of any previous software deployment script."),(0,a.kt)("li",{parentName:"ul"},"The version of the PSADT module installed on the endpoint might not be the same as the version used to create and test the deployment package. This means your testing is unliekly to be 100% reliably against what is actually deployed in your environment."),(0,a.kt)("li",{parentName:"ul"},"Depending on how the module was deployed and whether it is currently in-use, the standard Remove-Module and Update-Module commands can fail."),(0,a.kt)("li",{parentName:"ul"},"A change in module version would introduce the requirement of ensuring all PSFunction and Parameter names, as well as their expect output did not change between versions, tying our hands for certain types of easy enhancements and fixes.")),(0,a.kt)("p",null,"For these reasons, we recommmend that you use the PSAppDeployToolkit standalone package provided on GitHub, and not rely on the module that is currently listed on the PowerShell Gallery."))}c.isMDXComponent=!0}}]);