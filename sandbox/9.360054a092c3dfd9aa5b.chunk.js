webpackJsonp([9],{"+0JD":function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("3j3K"),i=l("JcPS"),o=l("dheS"),a=l("fK+I"),u=l("2Je8"),r=l("NVOs"),c=l("Fzro"),d=l("sAde"),s=l("5oXY"),p=l("vumo"),g=l("fAE3"),f=l("fx3K"),m=l("9bQZ");l.d(t,"TrackModuleNgFactory",function(){return b});var b=e["ɵcmf"](i.a,[],function(n){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[o.a,a.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[e.LOCALE_ID]),e["ɵmpd"](4608,r.a,r.a,[]),e["ɵmpd"](4608,c.a,c.a,[]),e["ɵmpd"](4608,c.b,c.c,[]),e["ɵmpd"](5120,c.d,c.e,[]),e["ɵmpd"](4608,c.f,c.f,[c.a,c.b,c.d]),e["ɵmpd"](4608,c.g,c.h,[]),e["ɵmpd"](5120,c.i,c.j,[c.f,c.g]),e["ɵmpd"](4608,c.k,c.k,[]),e["ɵmpd"](4608,c.l,c.m,[c.k,c.b]),e["ɵmpd"](5120,c.n,c.o,[c.l,c.g]),e["ɵmpd"](4608,d.a,d.a,[c.i]),e["ɵmpd"](512,u.CommonModule,u.CommonModule,[]),e["ɵmpd"](512,r.b,r.b,[]),e["ɵmpd"](512,r.c,r.c,[]),e["ɵmpd"](512,c.p,c.p,[]),e["ɵmpd"](512,c.q,c.q,[]),e["ɵmpd"](512,s.RouterModule,s.RouterModule,[[2,s["ɵa"]],[2,s.Router]]),e["ɵmpd"](512,p.a,p.a,[]),e["ɵmpd"](512,g.a,g.a,[]),e["ɵmpd"](512,i.a,i.a,[]),e["ɵmpd"](1024,s.ROUTES,function(){return[[{path:"",component:f.a,data:{breadcrumb:"Track"},children:[{path:":id",component:m.a,data:{breadcrumb:"Track detail"}}]}]]},[])])})},"9bQZ":function(n,t,l){"use strict";var e=l("5oXY"),i=l("sAde"),o=l("zbEK"),a=l("2Je8");l.d(t,"a",function(){return u});var u=function(){function n(n,t,l,e){this._musicService=n,this._router=t,this._spotifyService=l,this._location=e}return n.prototype.ngOnInit=function(){var n=this;this._router.params.forEach(function(t){n.id=t.id,n._musicService.getAudioDetail(n.id).subscribe(function(t){n.audio=t[0],n.mapSpotifyData()},function(n){},function(){})}),window.scroll(0,0)},n.prototype.mapSpotifyData=function(){var n=this;this._spotifyService.getSpotifyData(this.audio.spotifyTrackID).subscribe(function(t){n.audio.albumArt=t.album.images[0].url,n.audio.source=t.preview_url,n.audio.isPlaying=!1,n.audio.artist=t.artists[0].name},function(n){},function(){})},n.prototype.onAudioPlayerStateChange=function(n,t){this.audio.isPlaying=n.isPlaying},n.prototype.goBack=function(){this._location.back()},n.ctorParameters=function(){return[{type:i.a},{type:e.ActivatedRoute},{type:o.a},{type:a.Location}]},n}()},A7PH:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=['input[type=range][_ngcontent-%COMP%]{-webkit-appearance:none;width:82%;padding:25px 0 0;background:transparent}input[type=range][_ngcontent-%COMP%]:focus{outline:none}input[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track{width:100%;height:2px;cursor:pointer;-webkit-box-shadow:0 0 0 #000,0 0 0 #0d0d0d;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:#89869a;border-radius:1px;border:0 solid #010101}input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{height:12px;width:12px;border-color:transparent;border-radius:12px;background:#f6f5fd;cursor:pointer;-webkit-appearance:none;margin-top:-5px}input[type=range][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track{background:#89869a}input[type=range][_ngcontent-%COMP%]::-moz-range-track{width:100%;height:2px;cursor:pointer;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:#89869a;border-radius:1px;border:0 solid #010101}input[type=range][_ngcontent-%COMP%]::-moz-range-thumb{box-shadow:0 0 1px #000,0 0 0 #0d0d0d;height:12px;width:12px;border-radius:12px;background:#f6f5fd;cursor:pointer}input[type=range][_ngcontent-%COMP%]::-ms-track{width:100%;height:3px;cursor:pointer;background:transparent;border-color:transparent;color:transparent}input[type=range][_ngcontent-%COMP%]::-ms-fill-lower{background:#575757}input[type=range][_ngcontent-%COMP%]::-ms-fill-lower, input[type=range][_ngcontent-%COMP%]::-ms-fill-upper{border:0 solid #010101;border-radius:2px;box-shadow:0 0 0 #000,0 0 0 #0d0d0d}input[type=range][_ngcontent-%COMP%]::-ms-fill-upper{background:#646464}input[type=range][_ngcontent-%COMP%]::-ms-thumb{box-shadow:0 0 1px #000,0 0 0 #0d0d0d;height:12px;width:12px;border-radius:12px;background:#f6f5fd;cursor:pointer;height:1px}input[type=range][_ngcontent-%COMP%]:focus::-ms-fill-lower{background:#646464}input[type=range][_ngcontent-%COMP%]:focus::-ms-fill-upper{background:#717171}.play[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:url("/sites/g/files/g2000007056/themes/site/sandbox/assets/i/track-play.png") no-repeat 50% transparent}.pause[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .play[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%;display:inline-block;position:absolute;top:0;left:0;cursor:pointer;text-indent:-9999px}.pause[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:url("/sites/g/files/g2000007056/themes/site/sandbox/assets/i/pause.png") no-repeat 50% transparent}span[_ngcontent-%COMP%]{float:right;font-size:12px;margin-top:20px}.playing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.playing[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]{display:block}.player[_ngcontent-%COMP%]{display:none}.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(27,33,78,.78)}.playing[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:before{background:transparent}.thumbnail[_ngcontent-%COMP%]{position:relative;line-height:0}.playing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #fff}.thumbnail[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(27,33,78,.78)}.playing[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:before{background:transparent}img[_ngcontent-%COMP%]{min-height:152px}.track-detail.music-player[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:74%;height:auto}.music-player.track-detail[_ngcontent-%COMP%]{max-width:550px;width:100%;display:block;margin:0 auto;background-image:url("/sites/g/files/g2000007056/themes/site/sandbox/assets/i/player_bg.png");background-repeat:repeat-x;background-size:auto 100%;border-radius:10px;border:1px solid #000;overflow:hidden;box-sizing:border-box;-webkit-box-sizing:border-box}.music-player.track-detail[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-box-sizing:border-box;padding:0 2% 0 1%}.track-detail.music-player[_ngcontent-%COMP%] > div.thumbnail[_ngcontent-%COMP%]{width:25%;height:auto;line-height:0}.track-detail.music-player[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]{width:100%;padding:0;background:transparent}.track-detail.music-player[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:1px;border:0 none}.track-detail.music-player[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;margin-top:9px;display:block;float:none;color:#fff}.track-detail.music-player[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{font-size:19px;margin:0;line-height:1}.track-detail.music-player[_ngcontent-%COMP%]   span.artist[_ngcontent-%COMP%]{font-size:12px;margin-top:0;margin-bottom:4px;color:#969696}@media only screen and (max-width:767px){.music-player.track-detail[_ngcontent-%COMP%]{max-width:350px}.track-detail.music-player[_ngcontent-%COMP%] > div.thumbnail[_ngcontent-%COMP%]{width:100px}.track-detail.music-player[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:calc(100% - 106px);height:auto}.track-detail.music-player[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{font-size:14px}}']},DsXO:function(n,t,l){"use strict";function e(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0,i=n.component;if("click"===t){e=!1!==i.play()&&e}return e},null,null)),(n()(),s["ɵted"](-1,null,[" Play"]))],null,null)}function i(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0,i=n.component;if("click"===t){e=!1!==i.pause()&&e}return e},null,null)),(n()(),s["ɵted"](-1,null,["Pause "]))],null,null)}function o(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,12,"div",[["class","thumbnail"]],null,null,null,null,null)),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵeld"](3,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵeld"](5,0,null,null,2,"div",[["class","play"]],null,null,null,null,null)),(n()(),s["ɵand"](16777216,null,null,1,null,e)),s["ɵdid"](7,16384,null,0,p.NgIf,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵeld"](9,0,null,null,2,"div",[["class","pause"]],null,null,null,null,null)),(n()(),s["ɵand"](16777216,null,null,1,null,i)),s["ɵdid"](11,16384,null,0,p.NgIf,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](-1,null,["\n  "]))],function(n,t){var l=t.component;n(t,7,0,!l.isPlaying),n(t,11,0,l.isPlaying)},function(n,t){n(t,3,0,t.component.albumart)})}function a(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,0,"span",[["class","title"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.component.title)})}function u(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,0,"span",[["class","artist"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.component.artist)})}function r(n){return s["ɵvid"](0,[s["ɵpid"](0,p.DecimalPipe,[s.LOCALE_ID]),(n()(),s["ɵeld"](1,0,null,null,18,"div",[],[[2,"playing",null],[8,"className",0]],null,null,null,null)),(n()(),s["ɵted"](-1,null,["\n  "])),(n()(),s["ɵand"](16777216,null,null,1,null,o)),s["ɵdid"](4,16384,null,0,p.NgIf,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](-1,null,["\n  "])),(n()(),s["ɵeld"](6,0,null,null,12,"div",[["class","player"]],null,null,null,null,null)),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵand"](16777216,null,null,1,null,a)),s["ɵdid"](9,16384,null,0,p.NgIf,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵand"](16777216,null,null,1,null,u)),s["ɵdid"](12,16384,null,0,p.NgIf,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵeld"](14,0,null,null,0,"input",[["max","30"],["step",".001"],["type","range"]],[[8,"value",0]],[[null,"input"]],function(n,t,l){var e=!0,i=n.component;if("input"===t){e=!1!==i.seek(l)&&e}return e},null,null)),(n()(),s["ɵted"](-1,null,["\n    "])),(n()(),s["ɵeld"](16,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),s["ɵted"](17,null,[" 0:",""])),s["ɵppd"](18,2),(n()(),s["ɵted"](-1,null,["\n"]))],function(n,t){var l=t.component;n(t,4,0,l.albumart),n(t,9,0,l.title),n(t,12,0,l.artist)},function(n,t){var l=t.component;n(t,1,0,l.isPlaying,s["ɵinlineInterpolate"](1,"music-player ",l.customClass,"")),n(t,14,0,l.currentTime),n(t,17,0,s["ɵunv"](t,17,0,n(t,18,0,s["ɵnov"](t,0),l.currentTime%60,"2.0-0")))})}function c(n){return s["ɵvid"](0,[(n()(),s["ɵeld"](0,0,null,null,1,"app-custom-audio",[],null,null,null,r,m)),s["ɵdid"](1,638976,null,0,g.a,[],null,null)],function(n,t){n(t,1,0)},null)}var d=l("A7PH"),s=l("3j3K"),p=l("2Je8"),g=l("giiR");l.d(t,"b",function(){return m}),t.a=r;var f=[d.a],m=s["ɵcrt"]({encapsulation:0,styles:f,data:{}});s["ɵccf"]("app-custom-audio",g.a,c,{src:"src",albumart:"albumart",forcestop:"forcestop",customClass:"customClass",artist:"artist",title:"title"},{playerStateChange:"playerStateChange"},[])},JcPS:function(n,t,l){"use strict";var e=l("fx3K"),i=l("9bQZ");l.d(t,"a",function(){return o});var o=(e.a,i.a,function(){function n(){}return n}())},T71k:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=['h2[_ngcontent-%COMP%]{color:#807c9c;font-weight:600;text-align:left;padding:7px 0 35px}.lyrics[_ngcontent-%COMP%]{color:#181717;font-size:15px;text-align:center;margin-top:2%;-webkit-animation-name:zoomIn;animation-name:zoomIn;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@media only screen and (max-width:767px){h2[_ngcontent-%COMP%]{text-align:center;font-size:20px;padding:0}.lyrics[_ngcontent-%COMP%]{font-size:14px}.arrow[_ngcontent-%COMP%]{position:fixed;display:inline-block;margin:0;top:14px;z-index:9}.arrow[_ngcontent-%COMP%]:after, .arrow[_ngcontent-%COMP%]:before{content:"";border-color:transparent;border-style:solid;position:absolute}.arrow-left[_ngcontent-%COMP%]:before{border:none;background-color:#fff;height:5px;width:20px;top:9px;left:24px}.arrow-left[_ngcontent-%COMP%]:after{left:0;top:0;border-width:12px;border-right-color:#fff}}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}.animated-background[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#f6f7f8;background:-webkit-gradient(linear,left top,right top,color-stop(8%,#eee),color-stop(18%,#ddd),color-stop(33%,#eee));background:linear-gradient(90deg,#eee 8%,#ddd 18%,#eee 33%);background-size:800px 104px;height:200px;position:relative}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}']},dheS:function(n,t,l){"use strict";function e(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a["ɵdid"](1,212992,null,0,u.RouterOutlet,[u.ChildrenOutletContexts,a.ViewContainerRef,a.ComponentFactoryResolver,[8,null],a.ChangeDetectorRef],null,null)],function(n,t){n(t,1,0)},null)}function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,0,null,null,1,"app-track",[],null,null,null,e,d)),a["ɵdid"](1,49152,null,0,r.a,[],null,null)],null,null)}var o=l("ekGz"),a=l("3j3K"),u=l("5oXY"),r=l("fx3K");l.d(t,"a",function(){return s});var c=[o.a],d=a["ɵcrt"]({encapsulation:0,styles:c,data:{}}),s=a["ɵccf"]("app-track",r.a,i,{},{},[])},ekGz:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=[""]},fAE3:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(){}return n}()},"fK+I":function(n,t,l){"use strict";function e(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,3,"div",[["class","audio-detail g-layout shimmer"]],null,null,null,null,null)),(n()(),c["ɵted"](-1,null,["  \n  "])),(n()(),c["ɵeld"](2,0,null,null,0,"div",[["class","lyrics animated-background"]],null,null,null,null,null)),(n()(),c["ɵted"](-1,null,["\n"]))],null,null)}function i(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,2,"app-custom-audio",[],null,[[null,"playerStateChange"]],function(n,t,l){var e=!0,i=n.component;if("playerStateChange"===t){e=!1!==i.onAudioPlayerStateChange(l,i.i)&&e}return e},d.a,d.b)),c["ɵdid"](1,638976,null,0,s.a,[],{src:[0,"src"],albumart:[1,"albumart"],forcestop:[2,"forcestop"],customClass:[3,"customClass"],artist:[4,"artist"],title:[5,"title"]},{playerStateChange:"playerStateChange"}),(n()(),c["ɵted"](-1,null,["\n  "]))],function(n,t){var l=t.component;n(t,1,0,l.audio.source,l.audio.albumArt,!l.audio.isPlaying,"track-detail",l.audio.artist,l.audio.trackname)},null)}function o(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,8,"div",[["class","audio-detail g-layout"]],null,null,null,null,null)),(n()(),c["ɵted"](-1,null,["  \n  "])),(n()(),c["ɵeld"](2,0,null,null,0,"h2",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),c["ɵted"](-1,null,["\n  "])),(n()(),c["ɵand"](16777216,null,null,1,null,i)),c["ɵdid"](5,16384,null,0,p.NgIf,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),c["ɵted"](-1,null,["\n  "])),(n()(),c["ɵeld"](7,0,null,null,0,"div",[["class","lyrics"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),c["ɵted"](-1,null,["\n"]))],function(n,t){n(t,5,0,t.component.audio.source)},function(n,t){var l=t.component;n(t,2,0,l.audio.trackname+" LYRICS"),n(t,7,0,l.audio.lyrics)})}function a(n){return c["ɵvid"](0,[(n()(),c["ɵted"](-1,null,["\n"])),(n()(),c["ɵand"](16777216,null,null,1,null,e)),c["ɵdid"](2,16384,null,0,p.NgIf,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),c["ɵted"](-1,null,["\n"])),(n()(),c["ɵted"](-1,null,["\n"])),(n()(),c["ɵeld"](5,0,null,null,0,"span",[["class","arrow arrow-left"]],null,[[null,"click"]],function(n,t,l){var e=!0,i=n.component;if("click"===t){e=!1!==i.goBack()&&e}return e},null,null)),(n()(),c["ɵted"](-1,null,["\n"])),(n()(),c["ɵand"](16777216,null,null,1,null,o)),c["ɵdid"](8,16384,null,0,p.NgIf,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,2,0,!l.audio),n(t,8,0,l.audio)},null)}function u(n){return c["ɵvid"](0,[(n()(),c["ɵeld"](0,0,null,null,1,"app-track-detail",[],null,null,null,a,y)),c["ɵdid"](1,114688,null,0,g.a,[f.a,m.ActivatedRoute,b.a,p.Location],null,null)],function(n,t){n(t,1,0)},null)}var r=l("T71k"),c=l("3j3K"),d=l("DsXO"),s=l("giiR"),p=l("2Je8"),g=l("9bQZ"),f=l("sAde"),m=l("5oXY"),b=l("zbEK");l.d(t,"a",function(){return C});var h=[r.a],y=c["ɵcrt"]({encapsulation:0,styles:h,data:{animation:[{type:7,name:"zoomInn",definitions:[{type:1,expr:":enter",animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:"0",transform:"scale3d(.3, .3, .3)",offset:0},offset:null},{type:6,styles:{opacity:"1",offset:.5},offset:null}]},timings:"5s"}],options:null}],options:{}}]}}),C=c["ɵccf"]("app-track-detail",g.a,u,{audio:"audio"},{},[])},fx3K:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(){}return n.ctorParameters=function(){return[]},n}()},giiR:function(n,t,l){"use strict";var e=l("3j3K");l.d(t,"a",function(){return i});var i=function(){function n(){this.forcestop=!1,this.playerStateChange=new e.EventEmitter,this.customClass="",this.currentTime=0,this.isPlaying=!1}return n.prototype.togglePlay=function(){this.isPlaying=!this.isPlaying,this.playerStateChange.emit({isPlaying:this.isPlaying})},n.prototype.ngOnChanges=function(){this.isPlaying=!this.forcestop,!this.isPlaying&&this.audio&&this.audio.pause()},n.prototype.play=function(){this.audio.play(),this.togglePlay()},n.prototype.pause=function(){this.audio.pause(),this.isPlaying=!this.isPlaying},n.prototype.seek=function(n){this.audio.currentTime=n.target.value},n.prototype.ngOnInit=function(){var n=this;this.audio=new Audio(this.src),this.audio.ontimeupdate=function(){n.currentTime=n.audio.currentTime},this.audio.onended=function(){n.isPlaying=!n.isPlaying}},n.ctorParameters=function(){return[]},n}()}});