webpackJsonp([2],{"1R6s":function(n,t,e){"use strict";var o=e("EhR1"),i=e("Lxbn");e.d(t,"a",function(){return l});var l=(o.a,i.a,function(){function n(){}return n}())},EhR1:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o=function(){function n(){}return n}()},IuNr:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o=['.landing-list[_ngcontent-%COMP%]{display:block;padding-bottom:40px}.landing-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}.g-layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .landing-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3c3c3c;text-transform:uppercase;font-weight:600}.g-layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:adobe-garamond-pro;text-align:left;font-size:30px;line-height:1.2;padding:0;display:inline-block;margin-top:0}.videoPanelCon[_ngcontent-%COMP%]{padding:0;background:#c7c7c7}@media only screen and (min-width:768px){.videoPanelCon[_ngcontent-%COMP%]{padding-bottom:40px;padding-top:75px}}.videos[_ngcontent-%COMP%]{font-weight:600}app-video-block[_ngcontent-%COMP%]{display:inline-block;width:100%}@media only screen and (min-width:768px){app-video-block[_ngcontent-%COMP%]{margin-top:69px}}@media only screen and (min-width:768px) and (max-width:1023px){margin-top:69px}@media only screen and (max-width:767px){margin-top:69px}span#youtubeFollow[_ngcontent-%COMP%]{display:none;line-height:0;float:right}@media only screen and (min-width:768px){span#youtubeFollow[_ngcontent-%COMP%]{display:inline-block}}.video-banner[_ngcontent-%COMP%]{height:100px;overflow:hidden}@media only screen and (min-width:768px){.video-banner[_ngcontent-%COMP%]{height:245px}}.video-banner[_ngcontent-%COMP%]{position:relative}@media only screen and (max-width:767px){.video-banner[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:auto}}.video-banner[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{position:absolute;top:120px;left:200px;width:auto;height:auto;display:inline-block;color:#fff;font-weight:700;opacity:.5;font-size:62px;line-height:1;text-align:left;text-transform:uppercase}@media only screen and (max-width:767px){.video-banner[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{top:0;right:0;bottom:0;left:0;line-height:100px;font-size:40px;text-align:center}}.video-banner[_ngcontent-%COMP%]   span.background-image[_ngcontent-%COMP%]{line-height:0;display:inline-block;width:100%;background-size:auto 100%;background-repeat:repeat-x;background-image:url("/sites/g/files/g2000007451/themes/site/sandbox/assets/i/Video-banner-New.jpg")}@media only screen and (max-width:767px){.video-banner[_ngcontent-%COMP%]   span.background-image[_ngcontent-%COMP%]{height:100px}}.video-banner[_ngcontent-%COMP%]   span.background-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{visibility:hidden;height:100%;width:auto}.video-banner[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;width:auto;height:auto;background-color:#c8c8c8;opacity:.55}.video-banner[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.ytfollow-wrapper[_ngcontent-%COMP%]{padding:15px 0;text-align:center;border-top:1px solid;border-bottom:1px solid;display:table;width:100%;margin-top:25px;margin-bottom:20px}@media only screen and (min-width:768px){.ytfollow-wrapper[_ngcontent-%COMP%]{display:none}}.ytfollow-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;text-align:right}@media only screen and (min-width:768px){.ytfollow-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}.ytfollow[_ngcontent-%COMP%]{display:table-cell;position:relative}@media only screen and (min-width:768px){.ytfollow[_ngcontent-%COMP%]{position:absolute;top:65px;left:10px;width:auto;height:auto}}.quotes[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:768px){.quotes[_ngcontent-%COMP%]{position:absolute;top:52%;right:3%;width:auto;height:auto;display:inline-block;z-index:9;font-size:21px;color:#fff;line-height:1.4;text-transform:uppercase;letter-spacing:2px;text-align:right}.quotes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{font-style:italic;font-size:16px;letter-spacing:1px}}@media only screen and (min-width:768px){.exclusive[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{padding-top:68px}.landing-list[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{padding-top:0;padding-bottom:44px}.videoPanelCon[_ngcontent-%COMP%] + .g-layout[_ngcontent-%COMP%]{padding-top:60px;position:relative}}@media only screen and (max-width:767px){h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{float:right}ul.videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:12px}}']},Lxbn:function(n,t,e){"use strict";var o=e("5oXY"),i=e("+rAa");e.d(t,"a",function(){return l});var l=function(){function n(n){this.route=n}return n.prototype.ngAfterViewInit=function(){},n.prototype.ngOnInit=function(){window.scroll(0,0);var n=document.getElementsByTagName("body")[0];i.a.addClass(n,"Videopage")},n.prototype.ngOnDestroy=function(){var n=document.getElementsByTagName("body")[0];i.a.removeClass(n,"Videopage")},n.prototype.onYtEvent=function(n){"subscribe"==n.eventType||n.eventType,window.console&&window.console.log("YT event: ",n)},n.ctorParameters=function(){return[{type:o.ActivatedRoute}]},n}()},QVPo:function(n,t,e){"use strict";function o(n){return a["ɵvid"](0,[(n()(),a["ɵted"](-1,null,["\n"])),(n()(),a["ɵeld"](1,0,null,null,11,"div",[["class","landing-list"]],null,null,null,null,null)),(n()(),a["ɵted"](-1,null,["\n\t"])),(n()(),a["ɵted"](-1,null,["\n\t"])),(n()(),a["ɵeld"](4,0,null,null,6,"div",[["class","g-layout"]],null,null,null,null,null)),(n()(),a["ɵted"](-1,null,["\n\t\t"])),(n()(),a["ɵted"](-1,null,["\n\t\t"])),(n()(),a["ɵeld"](7,0,null,null,1,"app-video-block",[],null,null,null,d.a,d.b)),a["ɵdid"](8,638976,null,0,c.a,[r.a,u.Router,s.DomSanitizer],{cols:[0,"cols"],detailPath:[1,"detailPath"],category:[2,"category"],customClass:[3,"customClass"]},null),(n()(),a["ɵted"](-1,null,["\n\t\t"])),(n()(),a["ɵted"](-1,null,["\n\t"])),(n()(),a["ɵted"](-1,null,["\n\t"])),(n()(),a["ɵted"](-1,null,["\n"]))],function(n,t){n(t,8,0,"grid-2_xs-1",t.component.path,"Official","listPanel")},null)}function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,0,null,null,1,"app-video-list",[],null,null,null,o,m)),a["ɵdid"](1,4440064,null,0,p.a,[u.ActivatedRoute],null,null)],function(n,t){n(t,1,0)},null)}var l=e("IuNr"),a=e("3j3K"),d=e("b26/"),c=e("m+EY"),r=e("irhF"),u=e("5oXY"),s=e("Qbdm"),p=e("Lxbn");e.d(t,"a",function(){return h});var g=[l.a],m=a["ɵcrt"]({encapsulation:0,styles:g,data:{}}),h=a["ɵccf"]("app-video-list",p.a,i,{},{},[])},"R/1V":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("3j3K"),i=e("1R6s"),l=e("z0BH"),a=e("QVPo"),d=e("2Je8"),c=e("NVOs"),r=e("Fzro"),u=e("irhF"),s=e("5oXY"),p=e("Dkvd"),g=e("vumo"),m=e("2WJ5"),h=e("fAE3"),f=e("EhR1"),x=e("Lxbn");e.d(t,"VideoModuleNgFactory",function(){return C});var C=o["ɵcmf"](i.a,[],function(n){return o["ɵmod"]([o["ɵmpd"](512,o.ComponentFactoryResolver,o["ɵCodegenComponentFactoryResolver"],[[8,[l.a,a.a]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["ɵmpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[o.LOCALE_ID]),o["ɵmpd"](4608,c.a,c.a,[]),o["ɵmpd"](4608,r.a,r.a,[]),o["ɵmpd"](4608,r.b,r.c,[]),o["ɵmpd"](5120,r.d,r.e,[]),o["ɵmpd"](4608,r.f,r.f,[r.a,r.b,r.d]),o["ɵmpd"](4608,r.g,r.h,[]),o["ɵmpd"](5120,r.i,r.j,[r.f,r.g]),o["ɵmpd"](4608,r.k,r.k,[]),o["ɵmpd"](4608,r.l,r.m,[r.k,r.b]),o["ɵmpd"](5120,r.n,r.o,[r.l,r.g]),o["ɵmpd"](4608,u.a,u.a,[r.i]),o["ɵmpd"](512,d.CommonModule,d.CommonModule,[]),o["ɵmpd"](512,c.b,c.b,[]),o["ɵmpd"](512,c.c,c.c,[]),o["ɵmpd"](512,r.p,r.p,[]),o["ɵmpd"](512,r.q,r.q,[]),o["ɵmpd"](512,s.RouterModule,s.RouterModule,[[2,s["ɵa"]],[2,s.Router]]),o["ɵmpd"](512,p.c,p.c,[[2,p.a]]),o["ɵmpd"](512,g.a,g.a,[]),o["ɵmpd"](512,m.e,m.e,[[2,m.c]]),o["ɵmpd"](512,h.a,h.a,[]),o["ɵmpd"](512,i.a,i.a,[]),o["ɵmpd"](1024,s.ROUTES,function(){return[[{path:"",component:f.a,data:{breadcrumb:"Video"},children:[{path:"",component:x.a,data:{breadcrumb:""}}]}]]},[])])})},ReYO:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o=["h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{display:inline-block;text-transform:uppercase}"]},"b26/":function(n,t,e){"use strict";function o(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,3,"div",[["class","video_wrapper"]],null,null,null,null,null)),(n()(),u["ɵted"](-1,null,["\n        "])),(n()(),u["ɵeld"](2,0,null,null,0,"div",[["id","videoIframe"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),u["ɵted"](-1,null,["        \n      "]))],null,function(n,t){n(t,2,0,t.component.safeHtml)})}function i(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,0,"h3",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.title)})}function l(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,4,"h4",[],null,null,null,null,null)),(n()(),u["ɵted"](-1,null,["\n          "])),(n()(),u["ɵeld"](2,0,null,null,1,"span",[["class","fa"]],null,null,null,null,null)),(n()(),u["ɵted"](-1,null,[""])),(n()(),u["ɵted"](-1,null,["\n          play\n        "]))],null,null)}function a(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,16,"li",[["class","col"]],[[2,"selected",null]],[[null,"click"]],function(n,t,e){var o=!0,i=n.component;if("click"===t){o=!1!==i.setVideo(n.context.index)&&o}return o},null,null)),(n()(),u["ɵted"](-1,null,["\n      "])),(n()(),u["ɵeld"](2,0,null,null,0,"div",[["class","thumbnail"],["id","thumnail"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),u["ɵted"](-1,null,["        \n      "])),(n()(),u["ɵand"](16777216,null,null,1,null,o)),u["ɵdid"](5,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["ɵted"](-1,null,["\n      "])),(n()(),u["ɵeld"](7,0,null,null,7,"div",[["class","videoTitle"]],null,null,null,null,null)),(n()(),u["ɵted"](-1,null,["\n        "])),(n()(),u["ɵand"](16777216,null,null,1,null,i)),u["ɵdid"](10,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["ɵted"](-1,null,["\n        "])),(n()(),u["ɵand"](16777216,null,null,1,null,l)),u["ɵdid"](13,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["ɵted"](-1,null,["\n      "])),(n()(),u["ɵted"](-1,null,["\n      "])),(n()(),u["ɵted"](-1,null,["\n    "]))],function(n,t){var e=t.component;n(t,5,0,t.context.index==e.videoIndex&&null!=t.context.index&&null!=e.videoIndex&&void 0!=t.context.index&&void 0!=e.videoIndex),n(t,10,0,!e.minimal),n(t,13,0,!e.minimal)},function(n,t){var e=t.component;n(t,0,0,t.context.index==e.videoIndex),n(t,2,0,t.context.$implicit.thumbnail)})}function d(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,6,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),u["ɵted"](-1,null,["\n  "])),(n()(),u["ɵeld"](2,0,null,null,3,"ul",[],[[8,"className",0]],null,null,null,null)),(n()(),u["ɵted"](-1,null,["\n    "])),(n()(),u["ɵand"](16777216,null,null,1,null,a)),u["ɵdid"](5,802816,null,0,s.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),u["ɵted"](-1,null,["\n"])),(n()(),u["ɵted"](-1,null,["\n"]))],function(n,t){n(t,5,0,t.component.videos)},function(n,t){var e=t.component;n(t,0,0,u["ɵinlineInterpolate"](1,"video block ",e.customClass,"")),n(t,2,0,u["ɵinlineInterpolate"](1,"videos ",e.cols,""))})}function c(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,1,"app-video-block",[],null,null,null,d,x)),u["ɵdid"](1,638976,null,0,p.a,[g.a,m.Router,h.DomSanitizer],null,null)],function(n,t){n(t,1,0)},null)}var r=e("tq5f"),u=e("3j3K"),s=e("2Je8"),p=e("m+EY"),g=e("irhF"),m=e("5oXY"),h=e("Qbdm");e.d(t,"b",function(){return x}),t.a=d;var f=[r.a],x=u["ɵcrt"]({encapsulation:0,styles:f,data:{}});u["ɵccf"]("app-video-block",p.a,c,{count:"count",cols:"cols",detailPath:"detailPath",category:"category",customClass:"customClass",headerText:"headerText",minimal:"minimal",frontpage:"frontpage",videopath:"id",tag:"tag"},{afterItemSelect:"afterItemSelect"},[])},fAE3:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o=function(){function n(){}return n}()},"m+EY":function(n,t,e){"use strict";var o=e("3j3K"),i=e("5oXY"),l=e("+rAa"),a=e("irhF"),d=e("Qbdm");e.d(t,"a",function(){return c});var c=function(){function n(n,t,e){this._videoService=n,this._router=t,this.sanitizer=e,this.detailPath="/video",this.minimal=!1,this.frontpage=!1,this.loading=!1,this.videoIndex=null,this.tag="",this.afterItemSelect=new o.EventEmitter}return n.prototype.getVideos=function(){var n=this;return this.selectedVideo=void 0,this.videos=[],this._videoService.getVideos(this.tag,this.category,this.videopath).subscribe(function(t){n.videos=t},function(n){},function(){}),this.videos},n.prototype.gotoDetail=function(n){var t;this.selectedVideo=n,t=l.a.getSlug(this.selectedVideo.path);var e=["/video",t];this._router.navigate(e),this.afterItemSelect.emit({id:t})},n.prototype.setVideo=function(n){if(null!=n&&void 0!=n){this.videoIndex=n;var t=document.createElement("div"),e=document.createElement("div");t.innerHTML=this.videos[n].field_video.toString();var o=t.querySelectorAll("iframe")[0];e.appendChild(o.cloneNode(!1)),this.safeHtml=this.sanitizer.bypassSecurityTrustHtml(e.innerHTML)}},n.prototype.loadVideo=function(n){},n.prototype.ngOnInit=function(){this.videos=this.getVideos(),this.cols||(this.cols="grid-5_xs-1")},n.prototype.ngOnChanges=function(){this.videos=this.getVideos()},n.ctorParameters=function(){return[{type:a.a},{type:i.Router},{type:d.DomSanitizer}]},n}()},tq5f:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o=['.thumbnail[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;font-size:0;position:relative}.thumbnail[_ngcontent-%COMP%]:empty{height:0;padding-top:56%;width:100%;max-height:1px}.thumbnail[_ngcontent-%COMP%]:hover:after{position:absolute;top:calc(50% - 24px);left:calc(50% - 22.5px);width:45px;height:48px;background:url("/sites/g/files/g2000007451/themes/site/sandbox/assets/i/play.png") no-repeat 0 0 transparent;display:inline-block;cursor:pointer}.thumbnail[_ngcontent-%COMP%]:hover:before{position:absolute;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,78%,.78)}.play_button[_ngcontent-%COMP%]{display:none}.created[_ngcontent-%COMP%]{font-family:adobe-garamond-pro;font-style:italic;font-size:19px;font-style:normal;text-transform:uppercase;font-weight:600;color:#3c3c3c}@media only screen and (max-width:767px){.created[_ngcontent-%COMP%]{font-size:12px;padding-bottom:20px}}div[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{font-size:30px;font-size:22px;padding:0;display:inline-block}h2[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{font-family:adobe-garamond-pro;text-align:left;font-weight:600;line-height:1.2;text-transform:uppercase;color:#3c3c3c}h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{font-size:30px;font-size:11px}@media only screen and (max-width:767px){h2[_ngcontent-%COMP%]{padding-bottom:20px}h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{float:right}}.col[_ngcontent-%COMP%]{padding-bottom:0;margin-bottom:0}.category-block[_ngcontent-%COMP%]{padding-bottom:60px}.category-block[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-top:0;padding-bottom:60px}@media only screen and (max-width:767px){.category-block[_ngcontent-%COMP%]{padding-bottom:0}.category-block[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:20px}}@mediaonly screen and (max-width:767px){.g-layout[_ngcontent-%COMP%] + h2[_ngcontent-%COMP%]{font-size:20px}}@mediaonly screen and (min-width:768px){.related[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:inline-block}.related[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3c3c3c;font-size:14px;text-transform:uppercase;font-weight:600}}ul.videos[_ngcontent-%COMP%]{list-style-type:none;padding:0;font-weight:600;display:inline-block;width:100%;margin:0;height:calc(100vh - 268px);position:relative}@media only screen and (min-width:768px){ul.videos[_ngcontent-%COMP%]{height:calc(100vh - 130px)}}ul.videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:5px;cursor:pointer;font-size:31.52px;color:#f3f3f3;font-weight:400;line-height:1.8;text-transform:capitalize;text-align:center}@media only screen and (max-width:767px){ul.videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:12px}}@media only screen and (min-width:768px) and (max-width:1023px){ul.videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}}ul.videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after{content:"";background:url(http://houndmouth.wmg-gardens.com/sites/g/files/g2000007451/files/VideoDivider.png);display:block;height:2px;width:190px;background-size:contain;margin:4px auto}ul.videos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#f3f3f3;text-transform:lowercase;font-style:italic;font-weight:400;font-size:16px;text-align:center;letter-spacing:1.5px;cursor:pointer}@media only screen and (max-width:767px){ul.videos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:12px;margin-top:10px}}@media only screen and (min-width:768px) and (max-width:1023px){ul.videos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:12px}}ul.videos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span.fa[_ngcontent-%COMP%]{font-size:0;margin-right:5px;background:url(/sites/g/files/g2000007451/themes/site/sandbox/assets/i/play.png) no-repeat 0 0 transparent;width:14px;height:14px;background-size:contain;display:inline-block;vertical-align:middle;margin-bottom:1px}@media only screen and (max-width:767px){ul.videos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span.fa[_ngcontent-%COMP%]{width:10px;height:10px}}@media only screen and (min-width:768px) and (max-width:1023px){ul.videos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span.fa[_ngcontent-%COMP%]{width:14px;height:14px}}ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0;position:absolute;cursor:pointer;width:100%;height:100%;max-width:100%}@media only screen and (min-width:768px){ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{padding-right:0}ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";background:#000;opacity:.5;position:absolute;left:0;top:0;width:100%;height:100%;z-index:0}}@media only screen and (max-width:1023px){ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:auto}}@media only screen and (max-width:767px){ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";background:#000;opacity:.5;position:absolute;left:0;top:0;width:100%;height:100%;z-index:0}ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}}ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;cursor:pointer}ul.videos[_ngcontent-%COMP%]   li.col.selected[_ngcontent-%COMP%]:after{display:none}.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}ul.videos[_ngcontent-%COMP%]   .videoTitle[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%)translateY(-50%);transform:translateX(-50%)translateY(-50%);z-index:1}.video_wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0}#videoIframe[_ngcontent-%COMP%], .video_wrapper[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%]{width:100%;height:100%}div#videoIframe[_ngcontent-%COMP%], li.selected[_ngcontent-%COMP%]   .videoTitle[_ngcontent-%COMP%]{display:none}.col.selected[_ngcontent-%COMP%]   div#videoIframe[_ngcontent-%COMP%]{display:block}']},z0BH:function(n,t,e){"use strict";function o(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a["ɵdid"](1,212992,null,0,d.RouterOutlet,[d.ChildrenOutletContexts,a.ViewContainerRef,a.ComponentFactoryResolver,[8,null],a.ChangeDetectorRef],null,null),(n()(),a["ɵted"](-1,null,["     "]))],function(n,t){n(t,1,0)},null)}function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,0,null,null,2,"app-video",[],null,null,null,o,p)),a["ɵprd"](4608,null,c.a,c.a,[r.i]),a["ɵdid"](2,49152,null,0,u.a,[],null,null)],null,null)}var l=e("ReYO"),a=e("3j3K"),d=e("5oXY"),c=e("irhF"),r=e("Fzro"),u=e("EhR1");e.d(t,"a",function(){return g});var s=[l.a],p=a["ɵcrt"]({encapsulation:0,styles:s,data:{}}),g=a["ɵccf"]("app-video",u.a,i,{},{},[])}});