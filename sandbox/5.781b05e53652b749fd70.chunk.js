webpackJsonp([5],{"2Lye":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=["@media only screen and (max-width:767px){.landing-list.g-layout[_ngcontent-%COMP%]{padding-top:0}div#fixed-nav[_ngcontent-%COMP%]   nav.show[_ngcontent-%COMP%]{position:relative;top:0;padding-left:0;background-color:transparent}}.album-list[_ngcontent-%COMP%]{margin:60px auto;background:rgba(0,0,0,.7);padding:30px}@media only screen and (max-width:767px){.album-list[_ngcontent-%COMP%]{max-width:90%;margin-top:0;padding:10px}}.album-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font-size:27.6px;text-transform:uppercase;font-family:Montserrat,sans-serif;padding:0 0 20px}@media only screen and (max-width:767px){.album-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding-bottom:10px}}.album-list[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]{margin:10px 0;line-height:1.3em;text-align:left;font-size:12px;font-family:Noto Serif,Times New Roman,Serif}"]},"3HE1":function(n,l,t){"use strict";function e(n){return o["ɵvid"](0,[(n()(),o["ɵeld"](0,0,null,null,15,"li",[["class","col"]],[[2,"selected",null]],null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n        "])),(n()(),o["ɵeld"](2,0,null,null,12,"div",[["class","content"]],null,null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n          "])),(n()(),o["ɵeld"](4,0,null,null,9,"div",[["class","album-details-wrapper"]],null,null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n            "])),(n()(),o["ɵeld"](6,0,null,null,1,"div",[["class","lyricspage-album album-image"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n            "])),(n()(),o["ɵted"](-1,null,["\n            "])),(n()(),o["ɵeld"](9,0,null,null,0,"div",[["class","lyricspage-album-list album-title"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n            "])),(n()(),o["ɵeld"](11,0,null,null,1,"app-lyrics-trackdetail",[],null,[["window","resize"]],function(n,l,t){var e=!0;if("window:resize"===l){e=!1!==o["ɵnov"](n,12).onResize(t)&&e}return e},r.b,r.c)),o["ɵdid"](12,638976,null,0,c.a,[s.a,d.ActivatedRoute,m.DomSanitizer,o.ElementRef,d.Router],{albumId:[0,"albumId"]},null),(n()(),o["ɵted"](-1,null,["\n          "])),(n()(),o["ɵted"](-1,null,["\n        "])),(n()(),o["ɵted"](-1,null,["\n      "]))],function(n,l){n(l,12,0,l.context.$implicit.nid)},function(n,l){var t=l.component;n(l,0,0,l.context.$implicit===t.selectedAlbum),n(l,6,0,l.context.$implicit.albumArt),n(l,9,0,l.context.$implicit.title)})}function i(n){return o["ɵvid"](0,[(n()(),o["ɵeld"](0,0,null,null,7,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](2,0,null,null,4,"ul",[],[[8,"className",0]],null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n      "])),(n()(),o["ɵand"](16777216,null,null,1,null,e)),o["ɵdid"](5,802816,null,0,f.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵted"](-1,null,["\n"])),(n()(),o["ɵted"](-1,null,["\n  "]))],function(n,l){n(l,5,0,l.component.albums)},function(n,l){var t=l.component;n(l,0,0,o["ɵinlineInterpolate"](1,"album list ",t.customClass,"")),n(l,2,0,o["ɵinlineInterpolate"](1,"album ",t.cols,""))})}function u(n){return o["ɵvid"](0,[(n()(),o["ɵeld"](0,0,null,null,1,"app-lyrics-block",[],null,null,null,i,b)),o["ɵdid"](1,114688,null,0,p.a,[s.a,d.Router,m.DomSanitizer],null,null)],function(n,l){n(l,1,0)},null)}var a=t("Zclz"),o=t("3j3K"),r=t("P3fh"),c=t("WbA/"),s=t("sAde"),d=t("5oXY"),m=t("Qbdm"),f=t("2Je8"),p=t("9bWK");t.d(l,"c",function(){return b}),l.b=i,t.d(l,"a",function(){return h});var g=[a.a],b=o["ɵcrt"]({encapsulation:0,styles:g,data:{}}),h=o["ɵccf"]("app-lyrics-block",p.a,u,{count:"count",cols:"cols",detailPath:"detailPath",customClass:"customClass"},{},[])},"9bWK":function(n,l,t){"use strict";var e=t("5oXY"),i=t("+rAa"),u=t("sAde"),a=t("Qbdm");t.d(l,"a",function(){return o});var o=function(){function n(n,l,t){this._musicService=n,this._router=l,this.sanitizer=t,this.detailPath="/album",this.viewAlbum=!1}return n.prototype.getAlbum=function(){var n=this;return this.albums=[],this._musicService.getAlbumBlock().subscribe(function(l){n.albums=l},function(n){},function(){}),this.albums},n.prototype.toggleAlbum=function(n){this.selectedAlbum=n,this.viewAlbum=!this.viewAlbum},n.prototype.getEmbed=function(n){return this.sanitizer.bypassSecurityTrustHtml(n.toString())},n.prototype.gotoDetail=function(n){var l=this;this.selectedAlbum=n,i.a.getSlug(this.selectedAlbum.path),this.viewAlbum=!this.viewAlbum,this._musicService.getAlbumEmdeds(n.nid).subscribe(function(n){l.embedList=n,l.visibleEmbed=l.embedList[0].service;for(var t=0;t<l.embedList.length;t++)"spotify"===l.embedList[t].service.toLocaleLowerCase()&&l.displayEmbed(l.embedList[t],t),l.embedList[t].safeHtml=l.sanitizer.bypassSecurityTrustHtml(l.embedList[t].embed.toString())})},n.prototype.displayEmbed=function(n,l){this.visibleEmbed=n.service,this.selectedIndex=l},n.prototype.ngOnInit=function(){this.getAlbum(),this.cols||(this.cols="grid-5_xs-1")},n.ctorParameters=function(){return[{type:u.a},{type:e.Router},{type:a.DomSanitizer}]},n}()},J6a1:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=['@media only screen and (max-width:767px){.landing-list.g-layout[_ngcontent-%COMP%]{padding-top:0}div#fixed-nav[_ngcontent-%COMP%]   nav.show[_ngcontent-%COMP%]{position:relative;top:0;padding-left:0;background-color:transparent}}.lyrics-trackdetail[_ngcontent-%COMP%]   a.links[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-style:italic;font-size:12px;font-family:Noto Serif,Times New Roman,Serif;cursor:pointer;text-transform:capitalize}.lyrics-trackdetail[_ngcontent-%COMP%]   a.links[_ngcontent-%COMP%]:hover{text-decoration:underline}.lyrics-trackdetail[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{margin:5px 0}a.lyrics-close[_ngcontent-%COMP%]:hover{opacity:.8}div.body[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;width:50%;max-height:400px;max-width:460px;margin:0 auto;padding:10px 0;z-index:101;text-align:left;border:1px solid #ececec;background:#000;color:#fff;overflow-y:auto;transition:width .5s,margin-left .5s;-webkit-transition:width .5s,margin-left .5s;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@media only screen and (min-width:1440px){div.body[_ngcontent-%COMP%]{max-height:calc(100vh - 50%)}}@media only screen and (max-width:767px){div.body[_ngcontent-%COMP%]{width:80%;max-height:calc(100vh - 100px);overflow-y:scroll}}a.lyrics-close[_ngcontent-%COMP%]{float:right;white-space:nowrap;width:auto;height:auto;cursor:pointer;position:absolute;top:10px;right:10px;padding:0;font-size:20px;font-weight:700;color:#fff}div.body[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{width:100%}div.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:400;color:#fff;margin:0 0 20px;text-transform:uppercase;font-family:Montserrat,sans-serif;font-size:16.7px;padding:0;text-align:left}.lyrics[_ngcontent-%COMP%]{font-family:Noto Serif,Times New Roman,serif;font-size:12px}#overlay[_ngcontent-%COMP%]{background-color:#000;position:fixed;width:100%;height:100%;filter:alpha(opacity=40);opacity:.4;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";left:0;top:0;z-index:15;transition:all .5s;-webkit-transition:all .5s}']},NHWj:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("3j3K"),i=t("mWat"),u=t("Y7Zs"),a=t("n194"),o=t("3HE1"),r=t("P3fh"),c=t("2Je8"),s=t("NVOs"),d=t("Fzro"),m=t("Q/6D"),f=t("5oXY"),p=t("Dkvd"),g=t("vumo"),b=t("fAE3"),h=t("jkRH"),v=t("hMNz"),y=t("9bWK"),C=t("WbA/");t.d(l,"LyricsModuleNgFactory",function(){return x});var x=e["ɵcmf"](i.a,[],function(n){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[u.a,a.a,o.a,r.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[e.LOCALE_ID]),e["ɵmpd"](4608,s.a,s.a,[]),e["ɵmpd"](4608,d.a,d.a,[]),e["ɵmpd"](4608,d.b,d.c,[]),e["ɵmpd"](5120,d.d,d.e,[]),e["ɵmpd"](4608,d.f,d.f,[d.a,d.b,d.d]),e["ɵmpd"](4608,d.g,d.h,[]),e["ɵmpd"](5120,d.i,d.j,[d.f,d.g]),e["ɵmpd"](4608,d.k,d.k,[]),e["ɵmpd"](4608,d.l,d.m,[d.k,d.b]),e["ɵmpd"](5120,d.n,d.o,[d.l,d.g]),e["ɵmpd"](4608,m.a,m.a,[d.i]),e["ɵmpd"](512,c.CommonModule,c.CommonModule,[]),e["ɵmpd"](512,s.b,s.b,[]),e["ɵmpd"](512,s.c,s.c,[]),e["ɵmpd"](512,d.p,d.p,[]),e["ɵmpd"](512,d.q,d.q,[]),e["ɵmpd"](512,f.RouterModule,f.RouterModule,[[2,f["ɵa"]],[2,f.Router]]),e["ɵmpd"](512,p.c,p.c,[[2,p.a]]),e["ɵmpd"](512,g.a,g.a,[]),e["ɵmpd"](512,b.a,b.a,[]),e["ɵmpd"](512,i.a,i.a,[]),e["ɵmpd"](1024,f.ROUTES,function(){return[[{path:"",component:h.a,data:{breadcrumb:"Lyrics"},children:[{path:"",component:v.a,data:{breadcrumb:"Lyrics List"}},{path:"",component:y.a,data:{breadcrumb:"Lyrics Block"}},{path:"",component:C.a,data:{breadcrumb:"Lyrics Track Detail"}}]}]]},[])])})},P3fh:function(n,l,t){"use strict";function e(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,0,null,null,3,"div",[["class","detailpage track"]],null,null,null,null,null)),(n()(),d["ɵted"](-1,null,["\n                "])),(n()(),d["ɵeld"](2,0,null,null,0,"a",[["class","links"]],[[8,"innerHTML",1]],[[null,"click"]],function(n,l,t){var e=!0,i=n.component;if("click"===l){e=!1!==i.getLyrics(n.context.$implicit.path)&&e}return e},null,null)),(n()(),d["ɵted"](-1,null,["\n            "]))],null,function(n,l){n(l,2,0,l.context.$implicit.title)})}function i(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,0,null,null,7,"div",[["class","detailpage tracks"]],null,null,null,null,null)),(n()(),d["ɵted"](-1,null,["\n        "])),(n()(),d["ɵeld"](2,0,null,null,4,"div",[["class","detailpage track-list"]],null,null,null,null,null)),(n()(),d["ɵted"](-1,null,["\n            "])),(n()(),d["ɵand"](16777216,null,null,1,null,e)),d["ɵdid"](5,802816,null,0,m.NgForOf,[d.ViewContainerRef,d.TemplateRef,d.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),d["ɵted"](-1,null,["\n        "])),(n()(),d["ɵted"](-1,null,["\n    "]))],function(n,l){n(l,5,0,l.component.trackList)},null)}function u(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,0,null,null,0,"div",[["id","overlay"]],null,[[null,"click"]],function(n,l,t){var e=!0,i=n.component;if("click"===l){e=!1!==i.toggleTrack()&&e}return e},null,null))],null,null)}function a(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,0,null,null,5,"div",[["class","audio-detail g-layout"]],null,null,null,null,null)),(n()(),d["ɵted"](-1,null,[" \n        "])),(n()(),d["ɵeld"](2,0,null,null,0,"h2",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),d["ɵted"](-1,null,["\n        "])),(n()(),d["ɵeld"](4,0,null,null,0,"div",[["class","lyrics"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),d["ɵted"](-1,null,["\n    "]))],null,function(n,l){var t=l.component;n(l,2,0,t.audio.trackname),n(l,4,0,t.audio.lyrics)})}function o(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,0,null,null,7,"div",[["class","body"]],null,null,null,null,null)),(n()(),d["ɵted"](-1,null,["\n    "])),(n()(),d["ɵeld"](2,0,null,null,1,"a",[["class","lyrics-close"]],null,[[null,"click"]],function(n,l,t){var e=!0,i=n.component;if("click"===l){e=!1!==i.toggleTrack()&&e}return e},null,null)),(n()(),d["ɵted"](-1,null,["X"])),(n()(),d["ɵted"](-1,null,["\n    "])),(n()(),d["ɵand"](16777216,null,null,1,null,a)),d["ɵdid"](6,16384,null,0,m.NgIf,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),d["ɵted"](-1,null,["\n"]))],function(n,l){n(l,6,0,l.component.audio)},null)}function r(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,0,null,null,4,"div",[["class","lyrics-trackdetail wrapper"]],null,null,null,null,null)),(n()(),d["ɵted"](-1,null,["\n    "])),(n()(),d["ɵand"](16777216,null,null,1,null,i)),d["ɵdid"](3,16384,null,0,m.NgIf,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),d["ɵted"](-1,null,["\n"])),(n()(),d["ɵted"](-1,null,["\n"])),(n()(),d["ɵand"](16777216,null,null,1,null,u)),d["ɵdid"](7,16384,null,0,m.NgIf,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),d["ɵted"](-1,null,["\n"])),(n()(),d["ɵand"](16777216,null,null,1,null,o)),d["ɵdid"](10,16384,null,0,m.NgIf,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0,t.trackList),n(l,7,0,t.viewTrack),n(l,10,0,t.viewTrack)},null)}function c(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,0,null,null,1,"app-lyrics-trackdetail",[],null,[["window","resize"]],function(n,l,t){var e=!0;if("window:resize"===l){e=!1!==d["ɵnov"](n,1).onResize(t)&&e}return e},r,v)),d["ɵdid"](1,638976,null,0,f.a,[p.a,g.ActivatedRoute,b.DomSanitizer,d.ElementRef,g.Router],null,null)],function(n,l){n(l,1,0)},null)}var s=t("J6a1"),d=t("3j3K"),m=t("2Je8"),f=t("WbA/"),p=t("sAde"),g=t("5oXY"),b=t("Qbdm");t.d(l,"c",function(){return v}),l.b=r,t.d(l,"a",function(){return y});var h=[s.a],v=d["ɵcrt"]({encapsulation:0,styles:h,data:{}}),y=d["ɵccf"]("app-lyrics-trackdetail",f.a,c,{albumId:"albumId",chooseTemplate:"chooseTemplate",audio:"audio"},{},[])},WMZS:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},"WbA/":function(n,l,t){"use strict";var e=t("3j3K"),i=t("sAde"),u=t("+rAa"),a=t("5oXY"),o=t("Qbdm");t.d(l,"a",function(){return r});var r=function(){function n(n,l,t,e,i){this._musicService=n,this.route=l,this.sanitizer=t,this._el=e,this._router=i,this.showSideDrawer=!1,this.callCount=0,this.initDone=!1,this.isMobile=!1,this.shouldStick=!1,this.removeSticky=!1,this.animationCustomState="moveRight",this.customClassName="app-music-detail",this.stickyActive=!1,this.viewTrack=!1}return n.prototype.ngOnInit=function(){this.callAlbumDetail(),this.initDone=!0,window.innerWidth<768&&(this.isMobile=!0)},n.prototype.callAlbumDetail=function(){var n=this;this._musicService.getAlbumDetail(this.albumId).subscribe(function(l){n.album=l[0],n.album.albumArt=u.a.getImageSrc(n.album.albumArt),n.albumId.length<1&&(n.albumId=n.album.nid),n.getTrackDetails()},function(n){},function(){}),window.scroll(0,0)},n.prototype.getTrackDetails=function(){var n=this;this._musicService.getAudioList(this.albumId).subscribe(function(l){n.trackList=l})},n.prototype.getLyrics=function(n){var l=this;this.selectedTrackPath=n,this._musicService.getAudioDetail(this.selectedTrackPath).subscribe(function(n){l.audio=n[0]},function(n){},function(){}),setTimeout(function(){l.viewTrack=!l.viewTrack},1e3)},n.prototype.ngOnChanges=function(){this.initDone&&this.callAlbumDetail()},n.prototype.toggleTrack=function(){this.viewTrack=!this.viewTrack},n.prototype.onResize=function(n){n.target.innerWidth<767?this.isMobile=!0:this.isMobile=!1},n.ctorParameters=function(){return[{type:i.a},{type:a.ActivatedRoute},{type:o.DomSanitizer},{type:e.ElementRef},{type:a.Router}]},n}()},Y7Zs:function(n,l,t){"use strict";function e(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a["ɵdid"](1,212992,null,0,o.RouterOutlet,[o.ChildrenOutletContexts,a.ViewContainerRef,a.ComponentFactoryResolver,[8,null],a.ChangeDetectorRef],null,null)],function(n,l){n(l,1,0)},null)}function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,0,null,null,1,"app-lyrics",[],null,null,null,e,s)),a["ɵdid"](1,114688,null,0,r.a,[],null,null)],function(n,l){n(l,1,0)},null)}var u=t("WMZS"),a=t("3j3K"),o=t("5oXY"),r=t("jkRH");t.d(l,"a",function(){return d});var c=[u.a],s=a["ɵcrt"]({encapsulation:0,styles:c,data:{}}),d=a["ɵccf"]("app-lyrics",r.a,i,{},{},[])},Zclz:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=["@media only screen and (max-width:767px){.landing-list.g-layout[_ngcontent-%COMP%]{padding-top:0}div#fixed-nav[_ngcontent-%COMP%]   nav.show[_ngcontent-%COMP%]{position:relative;top:0;padding-left:0;background-color:transparent}}.album.list.listPanel[_ngcontent-%COMP%]{margin:20px 0 0}.album.list.listPanel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;display:block}.album.list.listPanel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:23.5%;margin:0 -4px 2% 2%;display:inline-block;vertical-align:top;min-height:300px;height:auto;padding:1%;text-align:center;border:2px solid #666;-webkit-box-flex:0;-ms-flex:none;flex:none;max-width:25%}@media (max-width:767px){.album.list.listPanel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;max-width:100%;margin:0 0 2%}}@media (min-width:768px) and (max-width:1024px) and (orientation:portrait){.album.list.listPanel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:49%;max-width:49%}.album.list.listPanel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd){margin-left:0}}.album.list.listPanel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4n+1){margin-left:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .album-image[_ngcontent-%COMP%]{margin-bottom:10px;width:100%}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .album-title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:20.4px;text-transform:uppercase;margin-bottom:20px}"]},fAE3:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},hMNz:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){this.bannerClass="lyrics-banner"}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}()},jkRH:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}()},mWat:function(n,l,t){"use strict";var e=t("jkRH"),i=t("hMNz"),u=t("9bWK"),a=t("WbA/");t.d(l,"a",function(){return o});var o=(e.a,i.a,u.a,a.a,function(){function n(){}return n}())},n194:function(n,l,t){"use strict";function e(n){return o["ɵvid"](0,[(n()(),o["ɵeld"](0,0,null,null,0,"div",[],[[8,"className",0]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,0,0,o["ɵinlineInterpolate"](1,"",t.bannerClass," banner-bg"))})}function i(n){return o["ɵvid"](0,[(n()(),o["ɵted"](-1,null,["\n"])),(n()(),o["ɵeld"](1,0,null,null,11,"div",[["class","g-layout album-list"]],null,null,null,null,null)),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](3,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o["ɵted"](-1,null,["LYRICS"])),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](6,0,null,null,1,"div",[["class","info-text"]],null,null,null,null,null)),(n()(),o["ɵted"](-1,null,["Click a track name below to expand the lyrics."])),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵted"](-1,null,["\n    "])),(n()(),o["ɵeld"](10,0,null,null,1,"app-lyrics-block",[],null,null,null,r.b,r.c)),o["ɵdid"](11,114688,null,0,c.a,[s.a,d.Router,m.DomSanitizer],{count:[0,"count"],cols:[1,"cols"],customClass:[2,"customClass"]},null),(n()(),o["ɵted"](-1,null,["\n"])),(n()(),o["ɵted"](-1,null,["\n"])),(n()(),o["ɵand"](16777216,null,null,1,null,e)),o["ɵdid"](15,16384,null,0,f.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,11,0,9,"grid-4_xs-3","listPanel"),n(l,15,0,t.bannerClass)},null)}function u(n){return o["ɵvid"](0,[(n()(),o["ɵeld"](0,0,null,null,1,"app-lyrics-list",[],null,null,null,i,b)),o["ɵdid"](1,114688,null,0,p.a,[],null,null)],function(n,l){n(l,1,0)},null)}var a=t("2Lye"),o=t("3j3K"),r=t("3HE1"),c=t("9bWK"),s=t("sAde"),d=t("5oXY"),m=t("Qbdm"),f=t("2Je8"),p=t("hMNz");t.d(l,"a",function(){return h});var g=[a.a],b=o["ɵcrt"]({encapsulation:0,styles:g,data:{}}),h=o["ɵccf"]("app-lyrics-list",p.a,u,{},{},[])}});