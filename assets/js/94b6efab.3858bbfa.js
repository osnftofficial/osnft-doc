"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="NFT",l={unversionedId:"components/nft",id:"components/nft",title:"NFT",description:"NFT stands for non fungible tokens. It represents digital record of different art on blockchain.",source:"@site/docs/components/nft.md",sourceDirName:"components",slug:"/components/nft",permalink:"/components/nft",draft:!1,editUrl:"https://github.com/osnftofficial/osnft-doc/tree/main/docs/components/nft.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/category/components"},next:{title:"Approver",permalink:"/components/approver"}},c={},s=[{value:"Identification",id:"identification",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Validation",id:"validation",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nft"},"NFT"),(0,a.kt)("p",null,"NFT stands for non fungible tokens. It represents digital record of different art on blockchain. "),(0,a.kt)("p",null,"OSNFT stands for OpenSource NFT. It represents opensource project as art."),(0,a.kt)("p",null,"The NFT contract is deployed at "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mainnet (Polygon) - 0xf8c8c9315c9A0434B7077AB519F0Ed1A8E0CC749"),(0,a.kt)("li",{parentName:"ul"},"Testnet (Mumbai) - 0x8CE6cB2982339c11f4643fDA2d4448A424AA5847")),(0,a.kt)("h2",{id:"identification"},"Identification"),(0,a.kt)("p",null,"Each NFT is represented by a tokenId which is hash of project URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'const tokenId = hash("github.com/ujjwalguptaofficial/mahaljs");\n')),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("p",null,"The NFT contract stores minimum information which are needed for identifying the NFT and owner. Following information are stored on chain - "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NFT id"),(0,a.kt)("li",{parentName:"ul"},"NFT ownership "),(0,a.kt)("li",{parentName:"ul"},"Share of NFT"),(0,a.kt)("li",{parentName:"ul"},"Percentage cut"),(0,a.kt)("li",{parentName:"ul"},"creator of NFT")),(0,a.kt)("p",null,"The meta data is stored in centralized database and Repo providers like github is considered as source of truth. Thus actual meta data stay with your project repo providers."),(0,a.kt)("p",null,"The meta data is dynamic means attributes like stars, fork etc are updated with time and thus it should be also updated on nft. The project owner can update the meta data from the UI."),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,"Users might abuse the system by minting any url as a project or by minting the same project with different url."),(0,a.kt)("p",null,"That is why we have approving mechanism. Each NFT mint is validated by adminstrator using ",(0,a.kt)("a",{parentName:"p",href:"/components/approver"},"approver contract"),". It guarantess that each project has been validated and only valid projects are minted."),(0,a.kt)("p",null,"The NFT emits an event which can be used to know what project is being minted and attribute. This allows anyone to verify and making everything trustable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ProjectMint(\n    string indexed projectUrl,\n    NFT_TYPE nftType,\n    uint32 share\n);\n")))}d.isMDXComponent=!0}}]);