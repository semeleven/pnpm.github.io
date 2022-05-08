"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6202],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(2848),r=t(9213),l=(t(9496),t(9613)),o=["components"],i={id:"installation",title:"Instalaci\xf3n"},p=void 0,s={unversionedId:"installation",id:"version-7.x/installation",title:"Instalaci\xf3n",description:"Usando la instalaci\xf3n autonoma",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/es/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"installation",title:"Instalaci\xf3n"},sidebar:"version-7.x/docs",previous:{title:"Motivaci\xf3n",permalink:"/es/motivation"},next:{title:"pnpm CLI",permalink:"/es/pnpm-cli"}},m={},d=[{value:"Usando la instalaci\xf3n autonoma",id:"usando-la-instalaci\xf3n-autonoma",level:2},{value:"Usando Corepack",id:"usando-corepack",level:2},{value:"Usando pnpm",id:"usando-pnpm",level:2},{value:"Usando Homebrew",id:"usando-homebrew",level:2},{value:"Usando Scoop",id:"usando-scoop",level:2},{value:"Compatibilidad",id:"compatibilidad",level:2},{value:"Resoluci\xf3n de problemas",id:"resoluci\xf3n-de-problemas",level:2},{value:"Desinstalando pnpm",id:"desinstalando-pnpm",level:2}],u={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usando-la-instalaci\xf3n-autonoma"},"Usando la instalaci\xf3n autonoma"),(0,l.kt)("p",null,"En sistemas POSIX, puede instalar pnpm incluso si no tiene instalado Node.js, utilizando el siguiente script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"Si no tiene curl instalado, puede usar wget:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"En Windows (PowerShell):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,l.kt)("p",null,"Puede usar ",(0,l.kt)("a",{parentName:"p",href:"/es/cli/env"},"pnpm env")," para instalar Node.js."),(0,l.kt)("h2",{id:"usando-corepack"},"Usando Corepack"),(0,l.kt)("p",null,"Desde la v16.13, Node.js est\xe1 distribuyendo ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," para administrar administradores de paquetes. Esta es una funci\xf3n experimental, por lo que debe habilitarla ejecutando:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,l.kt)("p",null,"Esto instalar\xe1 autom\xe1ticamente pnpm en su sistema. Sin embargo, probablemente no sea la \xfaltima versi\xf3n de pnpm. To upgrade it, check what is the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"latest pnpm version")," and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,l.kt)("h2",{id:"usando-pnpm"},"Usando pnpm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,l.kt)("h2",{id:"usando-homebrew"},"Usando Homebrew"),(0,l.kt)("p",null,"Si tiene instalado el administrador de paquetes, puede instalar pnpm usando el siguiente comando:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,l.kt)("h2",{id:"usando-scoop"},"Usando Scoop"),(0,l.kt)("p",null,"Si tiene Scoop instalado, puede instalar pnpm usando el siguiente comando:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,l.kt)("a",{parentName:"p",href:"/es/continuous-integration"},"Continuous Integration"),"."))),(0,l.kt)("h2",{id:"compatibilidad"},"Compatibilidad"),(0,l.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"resoluci\xf3n-de-problemas"},"Resoluci\xf3n de problemas"),(0,l.kt)("p",null,"Si pnpm est\xe1 roto y no puede solucionarlo reinstalando, es posible que deba eliminarlo manualmente del PATH."),(0,l.kt)("p",null,"Supongamos que tiene el siguiente error al ejecutar ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,l.kt)("p",null,"Primero, intente encontrar la ubicaci\xf3n de pnpm ejecutando: ",(0,l.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Si est\xe1 en Windows, ejecute este comando en Git Bash. Obtendr\xe1 la ubicaci\xf3n del comando pnpm, por ejemplo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,l.kt)("p",null,"Ahora que sabe d\xf3nde est\xe1 la CLI de pnpm, abra ese directorio y elimine los archivos relacionados con pnpm (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc.). Una vez hecho esto, instale pnpm nuevamente y deber\xeda funcionar como se esperaba."),(0,l.kt)("h2",{id:"desinstalando-pnpm"},"Desinstalando pnpm"),(0,l.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it has written to your disk, see ",(0,l.kt)("a",{parentName:"p",href:"/es/uninstall"},"Uninstalling pnpm"),"."))}c.isMDXComponent=!0}}]);