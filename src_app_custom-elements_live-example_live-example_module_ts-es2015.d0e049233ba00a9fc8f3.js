(self.webpackChunkangular_cn=self.webpackChunkangular_cn||[]).push([["src_app_custom-elements_live-example_live-example_module_ts"],{8948:function(t,e,n){"use strict";n.r(e),n.d(e,{LiveExampleModule:function(){return Z}});var i=n(1116),s=n(1374),o=n(5366);function a(t,e){const n="string"==typeof e?e:e.find(e=>t.hasOwnProperty(e.toLowerCase()));return void 0===n?void 0:t[n.toLowerCase()]}function c(t,e=!1){return void 0===t?e:"false"!==t.trim()}const r=["content"];function l(t,e){if(1&t&&(o.TgZ(0,"p"),o._uU(1," \u4f60\u8fd8\u53ef\u4ee5 "),o.TgZ(2,"a",8),o._uU(3,"\u4e0b\u8f7d\u8fd9\u4e2a\u4f8b\u5b50"),o.qZA(),o._uU(4,"\u3002 "),o.qZA()),2&t){const t=o.oxw(2);o.xp6(2),o.Q6J("href",t.zip,o.LSH)}}function u(t,e){if(1&t&&(o.TgZ(0,"span"),o.TgZ(1,"div",5),o._UZ(2,"aio-embedded-stackblitz",6),o.qZA(),o.YNc(3,l,5,1,"p",7),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.s9C("title",t.title),o.xp6(1),o.Q6J("src",t.stackblitz),o.xp6(1),o.Q6J("ngIf",t.enableDownload)}}function p(t,e){if(1&t&&(o.TgZ(0,"span"),o.TgZ(1,"a",9),o._uU(2),o.qZA(),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.s9C("title",t.title),o.Q6J("href",t.zip,o.LSH),o.xp6(1),o.Oqu(t.title)}}function f(t,e){if(1&t&&(o.TgZ(0,"span"),o._uU(1," / "),o.TgZ(2,"a",8),o._uU(3,"\u4e0b\u8f7d\u8303\u4f8b"),o.qZA(),o.qZA()),2&t){const t=o.oxw(2);o.xp6(2),o.Q6J("href",t.zip,o.LSH)}}function d(t,e){if(1&t&&(o.TgZ(0,"span"),o.TgZ(1,"a",10),o._uU(2),o.qZA(),o.YNc(3,f,4,1,"span",7),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.s9C("title",t.title),o.Q6J("href",t.stackblitz,o.LSH),o.xp6(1),o.Oqu(t.title),o.xp6(1),o.Q6J("ngIf",t.enableDownload)}}const m=["*"],g=["iframe"],h=s.bL+"live-examples/",w=s.bL+"zips/";let b=(()=>{class t{constructor(t,e){const n=function(t){const e=t instanceof o.SBq?t.nativeElement.attributes:t.attributes,n={};for(const i of e)n[i.name.toLowerCase()]=i.value;return n}(t),i=this.getExampleDir(n,e.path(!1)),s=this.getStackblitzName(n);this.mode=this.getMode(n),this.enableDownload=this.getEnableDownload(n),this.stackblitz=this.getStackblitz(i,s,"embedded"===this.mode),this.zip=this.getZip(i,s),this.title=this.getTitle(n)}ngAfterContentInit(){const t=this.content.nativeElement.textContent.trim();t&&(this.title=t)}getEnableDownload(t){return!c(a(t,"noDownload"))}getExampleDir(t,e){let n=a(t,"name");if(!n){const t=e.match(/[^/?#]+(?=\/?(?:\?|#|$))/);n=t?t[0]:"index"}return n.trim()}getMode(t){const e=c(a(t,"downloadOnly")),n=c(a(t,"embedded"));return e?"downloadOnly":n?"embedded":"default"}getStackblitz(t,e,n){return`${h}${t}/${e}stackblitz.html${n?"?ctl=1":""}`}getStackblitzName(t){const e=(a(t,"stackblitz")||"").trim();return e&&`${e}.`}getTitle(t){return(a(t,"title")||"\u73b0\u573a\u6f14\u7ec3").trim()}getZip(t,e){const n=t.split("/")[0];return`${w}${t}/${e}${n}.zip`}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(i.Ye))},t.\u0275cmp=o.Xpm({type:t,selectors:[["live-example"]],viewQuery:function(t,e){if(1&t&&o.Gf(r,7),2&t){let t;o.iGM(t=o.CRH())&&(e.content=t.first)}},ngContentSelectors:m,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","\u4e0b\u8f7d\u8303\u4f8b",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(t,e){1&t&&(o.F$t(),o.TgZ(0,"span",0,1),o.Hsn(2),o.qZA(),o.TgZ(3,"span",2),o.YNc(4,u,4,3,"span",3),o.YNc(5,p,3,3,"span",3),o.YNc(6,d,4,4,"span",4),o.qZA()),2&t&&(o.xp6(3),o.Q6J("ngSwitch",e.mode),o.xp6(1),o.Q6J("ngSwitchCase","embedded"),o.xp6(1),o.Q6J("ngSwitchCase","downloadOnly"))},directives:function(){return[i.RF,i.n9,i.ED,x,i.O5]},encapsulation:2}),t})(),x=(()=>{class t{ngAfterViewInit(){this.iframe&&(this.iframe.nativeElement.src=this.src)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(t,e){if(1&t&&o.Gf(g,7),2&t){let t;o.iGM(t=o.CRH())&&(e.iframe=t.first)}},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(t,e){1&t&&o._UZ(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%]{min-height:400px}"]}),t})(),Z=(()=>{class t{constructor(){this.customElementComponent=b}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.ez]]}),t})()}}]);
//# sourceMappingURL=src_app_custom-elements_live-example_live-example_module_ts-es2015.d0e049233ba00a9fc8f3.js.map