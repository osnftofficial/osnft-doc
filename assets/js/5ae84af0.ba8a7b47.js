"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:3},l="Tokenomics",a={unversionedId:"tokenomics",id:"tokenomics",title:"Tokenomics",description:"The whole OSNFT DAPP ecosystem is powered by OSD coin. It is a utility token which is used at different places for providing different services.",source:"@site/docs/tokenomics.md",sourceDirName:".",slug:"/tokenomics",permalink:"/tokenomics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tokenomics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Burn",permalink:"/nftomics/burn"},next:{title:"Components",permalink:"/category/components"}},s={},u=[{value:"Use",id:"use",level:2},{value:"Mint NFT",id:"mint-nft",level:3},{value:"Burn NFT",id:"burn-nft",level:3},{value:"Sell priority",id:"sell-priority",level:3},{value:"Cancel sell",id:"cancel-sell",level:3},{value:"Referral reward",id:"referral-reward",level:3},{value:"Quiz game",id:"quiz-game",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tokenomics"},"Tokenomics"),(0,i.kt)("p",null,"The whole OSNFT DAPP ecosystem is powered by ",(0,i.kt)("strong",{parentName:"p"},"OSD coin"),". It is a utility token which is used at different places for providing different services."),(0,i.kt)("p",null,"The total supply of OSD coin is - 1 Billion."),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("p",null,"OSD coin is used for following services - "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mint NFT "),(0,i.kt)("li",{parentName:"ul"},"Burn NFT"),(0,i.kt)("li",{parentName:"ul"},"Sell priority"),(0,i.kt)("li",{parentName:"ul"},"Cancel sell"),(0,i.kt)("li",{parentName:"ul"},"Referral reward - limited time "),(0,i.kt)("li",{parentName:"ul"},"Quiz game")),(0,i.kt)("p",null,"The usage are not limited to these services only. With time more features will be added in ecosytem and thus more usage."),(0,i.kt)("h3",{id:"mint-nft"},"Mint NFT"),(0,i.kt)("p",null,"OSD coin is needed to mint the NFT. The value of OSD coin is calculated based on star and fork count of the project called as ",(0,i.kt)("inlineCode",{parentName:"p"},"worthOfProject"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"worthOfProject")," can not be greater than 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'function worthOfProject(uint256 starCount,uint256 forkCount) public view returns (uint256) {\n    uint256 value = (_starConstant * starCount) +\n        (_forkConstant * forkCount);\n    require(value > 0, "require_worth_above_zero");\n    // worth can not be more than one token\n    return value > _oneToken ? _oneToken : value;\n}\n\n')),(0,i.kt)("p",null,"The OSD coin is burnt in minting of the project decreasing the totalSupply of the OSD coin."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is similar to burning fuel for reaching the destination from the source.")),(0,i.kt)("h3",{id:"burn-nft"},"Burn NFT"),(0,i.kt)("p",null,"Similar to minting NFT - the OSD coin worthOfProject is burned for burning NFT."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is similar to burning fuel for reaching back to source from the destination. Although you are at same point the work was done.")),(0,i.kt)("h3",{id:"sell-priority"},"Sell priority"),(0,i.kt)("p",null,"Sell priority can be used to change the ordering of the the sell in marketplace. You can specify sell priority and NFT with highest priority will be shown in marketplace for sell. The investors who are quickly buying and selling can use this facility to better invest."),(0,i.kt)("p",null,"The OSD amount is directly proportional to the ",(0,i.kt)("inlineCode",{parentName:"p"},"sellPriority")," value and calculated by following formulla -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"_sellPriorityConstant = 1000000000000000; // 10^15 - allows sell Priority to be 1000 in one OSD\nsellPriority * _sellPriorityConstant\n")),(0,i.kt)("h3",{id:"cancel-sell"},"Cancel sell"),(0,i.kt)("p",null,"Cancelling sell is very common and it creates kind of bad environment in the whole ecosystem. In order to prohibit this marketplace take ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1")," OSD to cancel sell."),(0,i.kt)("h3",{id:"referral-reward"},"Referral reward"),(0,i.kt)("p",null,"A referral reward is given to users whose referral project is successfully minted within expiry time. The reward is 1 OSD (might change) and it will be runing for limited time."),(0,i.kt)("h3",{id:"quiz-game"},"Quiz game"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Quiz game is supposed to increase awareness about the project and reward to users.")),(0,i.kt)("p",null,"In order to interact with users - the creators can run quiz games and reward them with OSD. There can be many quiz games but currently in ROADMAP is - "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Asking questions and right answerer will ge the reward. This help creators increase the awareness of the project.")))}p.isMDXComponent=!0}}]);