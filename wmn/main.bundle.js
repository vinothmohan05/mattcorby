webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/+home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".newsPanel{\r\n    background: url(/assets/i/bg_news.jpg) no-repeat;\r\n    background-size: cover;\r\n    background-color: #0d0e1c\r\n}\r\n.videoPanel {background: url(\"/assets/i/bg_videos.jpg\") no-repeat;background-size: cover; background-position: center center;}\r\n.photoPanel {background-color: #1d1e20;}\r\n.tourPanel {background-color:#e4e4e4;}\r\n.tourPanel.tour-in {\r\n    background-color: #0d0e1c;\r\n    transition: background-color 3s cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n.merchPanel {background-color:#0d0e1c;display: block;}\r\n.homePanelCon .buttonWrapper {text-align: center;padding-bottom: 50px; padding-top: 80px;}\r\n.musicPanel {\r\n    color: #1d1e20;\r\n    background: #e4e4e4;\r\n}\r\n.homePanelCon.mailinglistPanel{\r\n    padding-bottom: 20px;\r\n}\r\nbody.showSideDrawer{\r\n    overflow: hidden;\r\n}\r\n.tourPanel .homepage {\r\n    background-color: #0d0e1c;  \r\n}\r\n.tourPanel .g-layout{\r\n\tposition: relative;\r\n   padding-top: 20px;\r\n   \r\n}\r\n\r\n.videoPanel .g-layout {\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.homePanelCon.photoPanel .g-layout {\r\n    width: 100%;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n.heroBlock a {\r\n    cursor: pointer;\r\n}\r\n.homepage-tour-track {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 60px;\r\n}\r\n.musicPanel h2{\r\n    padding-top: 40px;\r\n    padding-bottom: 62px;\r\n    color: #1b214e;\r\n    letter-spacing: 2px;\r\n}\r\n.music-content h2 {\r\n    padding: 0;\r\n    font-size: 19px;\r\n}\r\n.players > div{\r\n    display: inline-block;\r\n    padding-right: 60px;\r\n}\r\n.players div:last-child{\r\n    padding-right: 0;\r\n}\r\n.players span {\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n.spotify div{\r\n    background: url(\"/assets/i/spotify.png\") no-repeat;\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n.apple div{\r\n    background: url(\"/assets/i/apple.png\") no-repeat;\r\n    height: 40px;\r\n    width: 35px;\r\n}\r\n.youtube div{\r\n    background: url(\"/assets/i/youtube.png\") no-repeat;\r\n    height: 28px;\r\n    width: 42px;\r\n}\r\n.soundcloud div{\r\n    background: url(\"/assets/i/soundcloud.png\") no-repeat;\r\n    height: 28px;\r\n    width: 62px;\r\n}\r\n.players {\r\n    text-align: center;\r\n    padding-top: 35px;\r\n}\r\n\r\n.players div div {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.homePanelCon.musicPanel .button:hover {\r\n    background: #1d1e20;\r\n    color: #fff;\r\n}\r\n.homePanelCon.videoPanel .buttonWrapper{\r\n    padding-top: 50px;\r\n}\r\ndiv#smartHeader b {\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n}\r\n@media only screen and (max-width: 767px) {    \r\n    .homePanelCon .buttonWrapper{    \r\n        padding-bottom: 7%;\r\n        padding-top: 7%;\r\n    }\r\n    .homePanelCon.videoPanel .buttonWrapper{\r\n        padding-top: 7%;\r\n    }\r\n    .homePanelCon.newsPanel .g-layout{\r\n        padding: 20px 0;\r\n    }\r\n    .homepage-tour-track {\r\n        right: auto;\r\n        top: auto;\r\n        text-align: center;\r\n        bottom: 65px;\r\n        width: 100%;\r\n        left: 0;\r\n    }\r\n    .musicPanel h2{\r\n        padding-top: 10px;\r\n        padding-bottom: 20px;\r\n    }\r\n    .players > div{\r\n        padding-right: 20px;\r\n    }\r\n}\r\n\r\n/*Hero block stylings*/\r\n.heroBlock .sitelogo{\r\n    max-width: 425px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    visibility: hidden;\r\n}\r\n.heroBlock{\r\n    text-align: center;\r\n    display: table-cell;\r\n    height: calc(100vh - 153px);\r\n    width: 1000000px;\r\n    vertical-align: middle;\r\n    max-width: 100%;\r\n   \r\n}\r\n.scrollArtistPostionWrapper {\r\n    position: absolute;\r\n    bottom: 120px;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    z-index: 9999;\r\n}\r\n.scrollOuterwrpper {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n    z-index: 2;\r\n    \r\n\t\r\n}\r\n/* .HerovideoblockOuterWrapper {\r\n    position: relative;\r\n} */\r\n\r\n#myVideo{\r\n    display: block;\r\n    width: 100%;\r\n    z-index: -1;\r\n    position: fixed;\r\n    height: auto;\r\n    background-color: #000000;\r\n    min-height: 100%;\r\n    left:0;\r\n    transform: translateX(0%);\r\n    -webkit-transform: -webkit-translateX(0%);\r\n    \r\n}\r\n\r\n.herovideoBlock {\r\n    position: relative;\r\n    overflow: hidden;    \r\n    height: 100vh;\r\n    display: table;\r\n}\r\n.videoHeader{\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 0;\r\n    padding-top: 56.25%;\r\n    line-height: 0;\r\n}\r\nvideo{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.scrolltoArtist {\r\n    padding: 0px;\r\n    display: block;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n}\r\n\r\n.scrolltoArtist a {\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    \r\n  .heroBlock{\r\n    width: 100%;\r\n    padding-top:0;\r\n  }\r\n  .heroBlock   .sitelogo{\r\n    max-width: 250px;\r\n    background-size: 100%;\r\n    min-height: 79vh;\r\n  }\r\n  .heroBlock h1 {\r\n    font-size: 60px;\r\n    margin-bottom: 15px;\r\n    line-height: 70px;\r\n  }\r\n  .scrolltoArtist{\r\n      padding: 10px 0 0px 0;\r\n  }\r\n  .button{\r\n    padding: 12px 62px;\r\n  }\r\n.herovideoBlock {\r\n    position: relative;\r\n    overflow: hidden;\r\n    width:100%;\r\n    } \r\n}\r\n@media only screen and (max-width: 1200px) {\r\n    \r\n}\r\n/*\r\n@media only screen and (min-width: 1001px) and (max-width: 1500px) {\r\n    #myVideo{\r\n        min-height: 100vh;\r\n        min-width: 100%;\r\n    }\r\n}\r\n*/\r\n@media only screen and (max-width: 1000px) {\r\n    /* #myVideo{\r\n     height: 100vh;\r\n     width: auto;\r\n    } */\r\n    div#smartHeader {\r\n        display: none;\r\n    }\r\n}\r\n@media only screen and (max-width: 1024px) {\r\n    #myVideo{\r\n        display: none;\r\n    }\r\n    .scrollArtistPostionWrapper {\r\n        position: absolute;\r\n        bottom: 40px;\r\n        left: 50%;\r\n        -webkit-transform: translateX(-50%);\r\n        transform: translateX(-50%);\r\n        \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"HerovideoblockOuterWrapper\">\r\n    <div class=\"homePanelCon herovideoBlock\">\r\n        <div id=\"myVideo\" [style.width]=\"videoStyle.width\" [style.height]=\"videoStyle.height\" [style.top]=\"videoStyle.top\" [style.left]=\"videoStyle.left\">\r\n            <div class=\"videoHeader\">\r\n                <!--<video muted=\"true\" volume=\"0\" class=\"initial_video\" autoplay loop muted>\r\n                    <source id=\"video-src\" src=\"http://brightcove.vo.llnwd.net/e1/uds/pd/340485632/340485632_4817584832001_4817498778001.mp4\"\r\n                        type=\"video/mp4\"> Your browser does not support the video tag.\r\n                </video>-->\r\n\r\n                <video loop=\"\" muted=\"\" autoplay=\"\" id=\"myVideo\" class=\"initial_video\">\r\n                    <source id=\"video-src\" src=\"http://d2cstorage-a.akamaihd.net/wmn/WMN/WMNSizzle_BlackOverlay.mp4\" type=\"video/mp4\">\r\n                </video>\r\n                <!--video loop=\"\" muted=\"\" autoplay=\"\" id=\"myVideo\" class=\"initial_video\">\r\n                    <source id=\"video-src\" src=\"http://d2cstorage-a.akamaihd.net/wmn/WMN/WMNWebsiteSizzle-Draft.mp4\" type=\"video/mp4\">\r\n                </video-->\r\n            </div>\r\n        </div>\r\n        <div class=\"heroBlock\">\r\n            <span class=\"sitelogo\"></span>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"scrollOuterwrpper\">\r\n        <div class=\"scrollArtistPostionWrapper\">\r\n            <div class=\"scrolltoArtist\">\r\n                <a class=\"btt\" pageScroll href=\"#artist\" [pageScrollOffset]=\"30\" [pageScrollDuration]=\"2000\" [pageScrollEasing]=\"ease\">Artists</a>\r\n                <i class=\"fa fa-angle-down bounce\" aria-hidden=\"true\" pageScroll href=\"#artist\" [pageScrollOffset]=\"30\" [pageScrollDuration]=\"2000\" [pageScrollEasing]=\"ease\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"smartHeader\">\r\n    <span>EVEN MORE <a [routerLink]=\"['/'+smartHeader]\"><b>{{smartHeader}} &#x27A1;</b></a></span>\r\n</div>\r\n\r\n<div class=\"homePanelCon artistsPanel\">\r\n    <div class=\"artists-home\" id=\"artist\">\r\n        <app-artist-landing [count]=\"7\" [customClass]=\"'home-artist'\" [artistHomView]=\"true\"></app-artist-landing>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"homePanelCon featuredArtistPanel\">\r\n    <app-featuredartist [count]=\"1\"></app-featuredartist>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__("../../../../../src/app/animations/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(document) {
        var _this = this;
        this.document = document;
        this.artistTourFadeIn = "hidden";
        this.tourButtonAnimate = "out";
        this.smartHeader = "tour";
        this.delayedButtonFade = "out";
        this.smartHeaderConfig = { "tourPanel": "tour", "herovideoBlock": "tour", "musicPanel": "music", "videoPanel": "video", "photoPanel": "photo", "newsPanel": "news" };
        this.videoStyle = {
            height: "auto",
            width: "1366px",
            top: "0px",
            left: "0px",
        };
        setTimeout(function () {
            _this.artistTourFadeIn = "in";
        }, 2000);
        /*
        setTimeout(() => {
          this.artistTourFadeIn = "in";
        },1000);
        */
        setTimeout(function () {
            _this.tourButtonAnimate = "in";
        }, 2500);
        __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__["b" /* PageScrollConfig */].defaultEasingLogic = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0)
                    return b;
                if (t === d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }
    HomeComponent.prototype.updateOnScroll = function (event) {
        /*Smart Header script*/
        //scroll { target: HTMLDocument → /, isTrusted: true, view: Window → /, detail: 0, layerX: 0, layerY: 0, pageX: 0, pageY: 3420, which: 0, rangeOffset: 0, cancelBubble: false }
        var section = document.getElementsByClassName('homePanelCon');
        var nav_height = document.getElementById("fixed-nav").offsetHeight;
        for (var i = 0; i < section.length; i++) {
            var sectionTop = section[i].offsetTop - nav_height;
            var sectionBottom = sectionTop + section[i].offsetHeight;
            var scrollTop_1 = event.pageY | document.body.scrollTop;
            if (scrollTop_1 >= sectionTop && scrollTop_1 <= sectionBottom) {
                this.smartHeader = this.smartHeaderConfig[section[i].classList[1]];
                this.delayedButtonFade = "out";
                this.delayedButtonFade = "in";
            }
        }
        var scrollTop = event.pageY | document.body.scrollTop;
        //console.log(scrollTop);
        /*Fade in Animations on scroll*/
        if (scrollTop >= 300) {
            this.artistTourFadeIn = "out2";
        }
        else if (scrollTop >= 150) {
            this.artistTourFadeIn = "out1";
        }
        else {
            this.artistTourFadeIn = "in";
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var element = document.getElementById('myVideo');
        element.muted = "muted";
        this.resizeVideo();
    };
    HomeComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        var body = document.getElementsByTagName('body')[0].classList.add("home");
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0].classList.remove("home");
    };
    HomeComponent.prototype.getTicketsClick = function () {
        window.scroll(0, document.getElementById("tour").offsetTop);
    };
    HomeComponent.prototype.resizeVideo = function () {
        var wwidth = window.innerWidth;
        var wheight = window.innerHeight;
        var ratio = (720 / 1280) * 100;
        var calculatedSystemWidth = ((1280 / 720) * wheight);
        if (calculatedSystemWidth < wwidth) {
            calculatedSystemWidth = wwidth;
        }
        this.videoStyle.width = calculatedSystemWidth + "px";
    };
    HomeComponent.prototype.onLoad = function (event) {
        this.resizeVideo();
    };
    HomeComponent.prototype.onResize = function (event) {
        this.resizeVideo();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "updateOnScroll", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/+home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+home/home.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_animations__["b" /* fadeIn */], __WEBPACK_IMPORTED_MODULE_1__animations_animations__["c" /* tourButton */], __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* delayedButtonFade */]],
            host: {
                '(window:resize)': 'onResize($event)',
                '(window:onload)': 'onLoad($event)'
            }
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/+mailing-list/mailing-list-block/mailing-list-block-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailingListData; });
var MailingListData = /** @class */ (function () {
    //public  artists_subscribed:String[]=[];
    function MailingListData(geoip, autoreply, newsletterId, secondaryId, Datasource, global_optin, artists_subscribed) {
        if (geoip === void 0) { geoip = 'true'; }
        if (autoreply === void 0) { autoreply = 'yes'; }
        if (newsletterId === void 0) { newsletterId = '14073863'; }
        if (secondaryId === void 0) { secondaryId = '14073863'; }
        if (Datasource === void 0) { Datasource = '[Artist_Name]_website_newsletter_optin'; }
        if (global_optin === void 0) { global_optin = null; }
        if (artists_subscribed === void 0) { artists_subscribed = []; }
        this.geoip = geoip;
        this.autoreply = autoreply;
        this.newsletterId = newsletterId;
        this.secondaryId = secondaryId;
        this.Datasource = Datasource;
        this.global_optin = global_optin;
        this.artists_subscribed = artists_subscribed;
        this.dobDay = "";
        this.dobMonth = "";
        this.labelListId = '6389157';
    }
    return MailingListData;
}());

//# sourceMappingURL=mailing-list-block-data.js.map

/***/ }),

/***/ "../../../../../src/app/+mailing-list/mailing-list-block/mailing-list-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.form-group input.ng-valid[required],\r\n.form-group input.ng-valid.required,\r\n.form-group select.ng-valid[required],\r\n.form-group select.ng-valid.required {\r\n    border-bottom: 1px solid #1564a9;\r\n}\r\n.form-group input.ng-invalid:not(form),\r\n.form-group select.ng-invalid:not(form) {\r\n    border-bottom: 1px solid #ff0000;\r\n    /* red */\r\n}\r\n.form-group input.ng-pristine.ng-invalid:not(form),\r\n.form-group select.ng-pristine.ng-invalid:not(form) {\r\n    border: none;\r\n    border-bottom: 1px solid #1564a9;\r\n}\r\n\r\n.mailing-list-outer-wrapper .firstFormWrapper,\r\n.mailing-list-outer-wrapper .secondFormOuterWrapper {\r\n    max-width: 550px;\r\n    margin: 0 auto;\r\n}\r\n.firstForm {\r\n    font-size: 0;\r\n}\r\n.mailing-Artist .mailing-list-copy{\r\n font-size: 16px;\r\n}\r\n.mailing-list-copy,\r\n.mailing-list-second-form-copy,\r\n.second-form-success-copy,\r\n.thirdForm .heading {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    line-height: 40px;\r\n    padding-bottom: 40px;\r\n    letter-spacing: 1px;\r\n}\r\n.second-form-success-copy{\r\n    \r\n    padding: 40px 0px !important; \r\n}\r\n.welcome-msg {\r\n    text-align: center;\r\n    font-size: 18px;\r\n}\r\n\r\n.welcome-msg span {\r\n    font-family: gothambold;\r\n}\r\n.mailing-list-copy span {\r\n    font-weight: bold;\r\n}\r\n.tour-list-block .mailing-list-copy {\r\n    font-size: 22px;\r\n    line-height: 1.2;\r\n}\r\n.form-group {\r\n    display: inline-block;\r\n    width: 83%;\r\n}\r\n.secondForm .form-group {\r\n    width: 100%;\r\n}\r\n.form-group label {\r\n    font-size: 19px;\r\n    padding-bottom: 10px;\r\n    display: block;\r\n}\r\n.form-group input,\r\n.form-group select {\r\n    border: none;\r\n    background-color: transparent;\r\n    font-size: 18px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    color: #fff;\r\n    -webkit-text-fill-color: #fff;\r\n    height: 50px;\r\n    text-transform: uppercase;\r\n    font-weight: 100;\r\n    width: 100%;\r\n    border-radius: 0;\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    text-indent: 10px;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n    padding:0;\r\n    \r\n}\r\ninput#email {\r\n    padding-right: 10px;\r\n}\r\n.firstFormWrapper {\r\n    position: relative;\r\n}\r\noption {\r\n    background-color: #000;\r\n}\r\n.form-group.email .alert.alert-danger {\r\n    position: absolute;\r\n    top: -14px;\r\n}\r\n.thirdForm ul {\r\n    -webkit-column-count: 5;\r\n    column-count: 5;\r\n    -moz-column-count: 5;\r\n    -webkit-column-gap: 0px;\r\n    column-gap: 0px;\r\n    padding-bottom: 60px;\r\n  \r\n}\r\n.thirdForm {\r\n    width:100%;\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n    padding-top: 60px;\r\n}\r\n  \r\n\r\n.mailing-list-outer-wrapper.mailing-footer-block .form-group {\r\n    display: inline-block;\r\n    width: 75%;\r\n    box-sizing: border-box;\r\n}\r\n.mailing-list-outer-wrapper.mailing-footer-block .firstForm .submit {\r\n    width: 25%;\r\n}\r\n.mailing-list-outer-wrapper.mailing-footer-block .mailing-list-outer-wrapper .firstFormWrapper,\r\n.mailing-list-outer-wrapper.mailing-footer-block .mailing-list-outer-wrapper .secondFormOuterWrapper {\r\n    max-width: 400px;\r\n    text-align: left;\r\n    box-sizing: border-box;\r\n}\r\n.form-group input:-webkit-autofill,\r\n.form-group select:-webkit-autofill {\r\n    -webkit-box-shadow: inset 0 0 0px 9999px #000;\r\n    background-color: #000;\r\n}\r\n.secondForm .second.formInputWrap .form-group.birthdate label {\r\n    display: inline-block;\r\n    width: 50%;\r\n    text-align: right;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n/* .secondForm .second.formInputWrap .birthdayWrapp select {\r\n    text-align-last: right;\r\n    direction: rtl;\r\n} */\r\n.secondForm .second.formInputWrap .birthdayWrapp {\r\n    display: inline-block;\r\n    width: 50%;\r\n    box-sizing: border-box;\r\n}\r\n.secondForm .second.formInputWrap .birthdayWrapp {\r\n    font-size: 0;\r\n}\r\n.form-group #dobDay {\r\n    display: inline-block;\r\n    width: 49.5%;\r\n    box-sizing: border-box;\r\n    text-align-last: left;\r\n    direction: ltr;\r\n    padding-left:10px;\r\n}\r\n.form-group #dobMonth {\r\n    display: inline-block;\r\n    width: 49.5%;\r\n    box-sizing: border-box;\r\n    text-indent: 0;\r\n    text-align-last: right;\r\n    direction: rtl;\r\n    padding-right:10px;\r\n}\r\n.form-group.birthdate span {\r\n    display: inline-block;\r\n    width: 1%;\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\r\n.form-group.birthdate label {\r\n    color: #777777;\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n}\r\n.form-group #dobDay {\r\n    margin-right: 0%;\r\n}\r\n.form-group.birthdate {\r\n    font-size: 0;\r\n}\r\n.submit {\r\n    border: none;\r\n    background: transparent;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    color: #e4e4e4;\r\n    line-height: 0;\r\n    height: 50px;\r\n    text-transform: uppercase;\r\n    width: 100%;\r\n    border-radius: 4px;\r\n    vertical-align: top;\r\n    cursor: pointer;\r\n    border-bottom: 1px solid #1563a8;\r\n    outline: none;\r\n    border-radius: 0;\r\n    padding:0;\r\n}\r\n.submit:hover {\r\n    color: #1563a8;\r\n}\r\n.thirdForm label {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    line-height: 28px;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n.thirdForm  li.disabled ,.thirdForm li.noid   {\r\n    pointer-events: none;\r\n    opacity: .5;\r\n   \r\n}\r\n\r\n.thirdForm  li.disabled label {\r\n color:#1563a8;\r\n   \r\n}\r\n\r\n\r\n\r\n.thirdForm .submit,\r\n.secondForm .submit {\r\n    border: 1px solid #1563a8;\r\n    color:#fff;\r\n    background:#1563a8;;\r\n}\r\n.thirdForm .submit:hover{\r\n    background:#fff;\r\n    border: 1px solid #fff;\r\n    color:#1563a8;\r\n}\r\n.thirdForm .buttonWrapp,\r\n.secondForm .buttonWrapp {\r\n    width: 100%;\r\n    max-width: 260px;\r\n    margin: 0 auto;\r\n}\r\n.terms,\r\n.terms-content {\r\n    color: #777777;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    padding:05px 0;\r\n    line-height: 1.3;\r\n}\r\n.terms-content span ,.terms-content a {\r\n    white-space: pre;\r\n}\r\n.terms {\r\n    padding-top: 11px;\r\n    cursor: pointer;\r\n    color: #777;\r\n    letter-spacing: 1px;\r\n    text-decoration: underline;\r\n    display:inline-block;\r\n    transition: all 1s ease 0s;\r\n    -webkit-transition: all 1s ease 0s;\r\n    -moz-transition: all 1s ease 0s;\r\n    -o-transition: all 1s ease 0s;\r\n    -ms-transition: all 1s ease 0s;\r\n}\r\n.terms:hover{\r\ncolor:#fff;\r\n}\r\n\r\n.terms-content a {\r\n    color:#fff;\r\n}\r\n.terms-content a:hover {\r\n    color:#777;\r\n}\r\n.serverError,\r\n.alert {\r\n    color: red;\r\n    font-size: 10px;\r\n    padding: 14px 0;\r\n    text-align: center;\r\n}\r\n.second.formInputWrap {\r\n    width: 100%;\r\n    display: block;\r\n    font-size: 0;\r\n    border-bottom: 1px solid #1563a8;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.secondForm .second.formInputWrap .form-group.birthdate {\r\n    display: inline-block;\r\n    width: 55%;\r\n    box-sizing: border-box;\r\n}\r\n.secondForm .second.formInputWrap .form-group.zipcode{\r\n    display: inline-block;\r\n    width: 45%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Base for label styling */\r\n\r\n[type=\"checkbox\"]:not(:checked),\r\n[type=\"checkbox\"]:checked {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n[type=\"checkbox\"]:not(:checked) + label,\r\n[type=\"checkbox\"]:checked + label {\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding-left: 25px;\r\n    box-sizing: border-box;\r\n}\r\n[type=\"checkbox\"]:checked + label i, [type=\"checkbox\"]:checked + label  {\r\n   \r\n    color : #1563a8;\r\n   \r\n}\r\n[type=\"checkbox\"]:checked + label i {\r\n    opacity: 1;\r\n    \r\n}\r\n[type=\"checkbox\"]:not(:checked) + label i  {\r\n    opacity:0;\r\n   \r\n}\r\n[type=\"checkbox\"] + label i  {\r\n    position: absolute;\r\n    width:15px;\r\n    left:0;  \r\n    top:6px\r\n}\r\n.thirdForm li.disabled [type=\"checkbox\"]:not(:checked) + label i {\r\n    opacity: 1;\r\n    \r\n}\r\n.welcome-msg {\r\n    line-height: 20px;\r\n}\r\n::-webkit-input-placeholder {\r\n    /* Chrome/Opera/Safari */\r\n    \r\n    color: #e4e4e4;\r\n    -webkit-text-fill-color: #e4e4e4;\r\n    opacity: 1;\r\n}\r\n::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    \r\n    color: #e4e4e4;\r\n    opacity: 1;\r\n}\r\n:-ms-input-placeholder {\r\n    /* IE 10+ */\r\n    \r\n    color: #e4e4e4;\r\n    opacity: 1;\r\n}\r\n:-moz-placeholder {\r\n    /* Firefox 18- */\r\n    \r\n    color: #e4e4e4;\r\n    opacity: 1;\r\n}\r\n\r\n.mailing-list-outer-wrapper.tour-list-block .mailing-list-copy,\r\n.mailing-list-outer-wrapper.tour-list-block .mailing-list-second-form-copy,\r\n.mailing-list-outer-wrapper.tour-list-block .welcome-msg,\r\n.mailing-list-outer-wrapper.tour-list-block .second-form-success-copy,\r\n.mailing-list-outer-wrapper.tour-list-block .terms-content {\r\n    color: #1b214e;\r\n}\r\n\r\n.mailing-list-outer-wrapper.mailing-footer-block  .thirdForm   ul li{\r\n    text-align:left;\r\n}\r\n\r\n.mailing-list-outer-wrapper.mailing-footer-block .welcome-msg.mailing-list-second-form-copy {\r\n    text-align: center !important;\r\n    padding-top: 50px;\r\n}\r\n\r\n\r\n.secondForm .terms-wrapper {\r\n    text-align: center ;\r\n}\r\n.close_wrappersecondform {\r\n    display: none;\r\n}\r\n.close_wrappersecondform.mailing-footer-block {\r\n    display: block;\r\n    position: relative;\r\n}\r\n\r\n.close_wrappersecondform.mailing-footer-block a.closesecondform {\r\n    font-size: 30px;\r\n    color: #fff;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.close_wrappersecondform.mailing-footer-block a.closesecondform:hover {\r\n    color: #1563a8;\r\n}\r\n.secondFormInnerWrapper.Success .close_wrappersecondform.mailing-footer-block {\r\n    display:none;\r\n}\r\n@media only screen and (min-width: 767px) {\r\n    .secondForm .terms-content {\r\n        max-width: 60%;\r\n        margin: 0 auto;\r\n    }\r\n    .mailing-list-outer-wrapper.mailing-footer-block  .secondForm .terms-content {\r\n        max-width: 720px;\r\n        margin: 0 auto;\r\n    }\r\n    \r\n    .mailing-list-outer-wrapper.mailing-footer-block  .secondFormOutterWrapper {\r\n        position: fixed ;\r\n        z-index: 208;\r\n        width: 100% !important;\r\n        height: 100%;\r\n        background: rgba(0, 0, 0, .5);\r\n        opacity: 1;\r\n        transition: all 0.5s;\r\n        top: 0;\r\n        left: 0;\r\n        z-index: 999;\r\n        max-width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    .mailing-list-outer-wrapper.mailing-footer-block .secondFormInnerWrapper {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        background: #000;\r\n        -webkit-transform: translate(-50% , -50%);\r\n                transform: translate(-50% , -50%);\r\n        z-index: 9999;\r\n        width:100%;\r\n        max-width: 95%;\r\n        \r\n       \r\n    }\r\n     /* .mailing-list-outer-wrapper.mailing-footer-block .secondFormInnerWrapper .layout  {\r\n        -webkit-transition: all 3s;\r\n        -moz-transition: all 3s;\r\n        transition: all 3s;\r\n        -webkit-transform: translateY(200%);\r\n        -moz-transform: translateY(200%);\r\n        -ms-transform: translateY(200%);\r\n        transform: translateY(200%);\r\n        opacity: 0;\r\n        \r\n    }\r\n    .mailing-list-outer-wrapper.mailing-footer-block .secondFormInnerWrapper .layout.show {\r\n        -webkit-transform: translateY(0%);\r\n        -moz-transform: translateY(0%);\r\n        -ms-transform: translateY(0%);\r\n        transform: translateY(0%);\r\n        opacity: 1;\r\n       \r\n    } */\r\n     \r\n    .mailing-list-outer-wrapper.mailing-footer-block .secondFormOutterWrapper.Success {\r\n        position: relative ;\r\n    }\r\n    .mailing-list-outer-wrapper.mailing-footer-block .secondFormInnerWrapper.Success {\r\n        position: absolute;\r\n        top: 0% ;\r\n        left: 50% ;\r\n        -webkit-transform: translate(-50% , 0%) ;\r\n                transform: translate(-50% , 0%) ;\r\n        \r\n    }\r\n}\r\n@media only screen and (min-width:768px ) and (max-width: 1024px){\r\n    .thirdForm ul {\r\n        -webkit-column-count: 4;\r\n        column-count: 4;\r\n        -moz-column-count: 4;\r\n        column-gap: 0;\r\n        -moz-column-gap:0 ;\r\n        -webkit-column-gap:0 ;\r\n    \r\n    \r\n    } \r\n    .mailing-list-outer-wrapper.mailing-footer-block .secondFormInnerWrapper.Success .second-form-success-copy {\r\n        padding: 0 !important;\r\n    }\r\n    \r\n    .mailing-list-outer-wrapper.mailing-footer-block .secondFormInnerWrapper.Success {\r\n        \r\n        top: -20px;\r\n     }\r\n}\r\n@media only screen and (max-width: 1024px) {\r\n    .thirdForm label {\r\n        font-size: 14px;\r\n        max-width: 100%;\r\n    }\r\n    \r\n    .mailing-list-outer-wrapper.mailing-footer-block .thirdForm ul {\r\n        position: relative;\r\n        background: transparent;\r\n        bottom: inherit;\r\n        padding: 0;\r\n        margin: 0 auto;\r\n        padding-bottom: 15px;\r\n    }\r\n   \r\n  \r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .terms-wrapper {\r\n        text-align: center;\r\n    }\r\n    .thirdForm ul {\r\n        -webkit-column-count: 1;\r\n        column-count: 1;\r\n        -moz-column-count: 1;\r\n        column-gap: 0;\r\n        -moz-column-gap:0 ;\r\n        -webkit-column-gap:0 ;\r\n        max-width: 80%;\r\n        margin: 0 auto;\r\n        width: 100%;\r\n    \r\n    } \r\n    .thirdForm label {\r\n        font-size: 12px;\r\n    }\r\n    .form-group input,\r\n    .form-group select,\r\n    .form-group.birthdate label,\r\n    .mailing-list-copy,\r\n    .mailing-list-second-form-copy,\r\n    .second-form-success-copy,\r\n    .thirdForm .heading {\r\n        font-size: 12px;\r\n        padding-bottom: 10px;\r\n    }\r\n    .mailing-list-copy:host >>> br,\r\n    .mailing-list-second-form-copy:host >>> br,\r\n    .welcome-msg:host >>> br,\r\n    .second-form-success-copy:host >>> br {\r\n        display: none;\r\n    }\r\n    .mailing-list-copy >>> br,\r\n    .mailing-list-second-form-copy >>> br,\r\n    .welcome-msg >>> br,\r\n    .second-form-success-copy >>> br {\r\n        display: none;\r\n    }\r\n    .firstForm .submit {\r\n        width: 100%;\r\n    }\r\n    .terms-wrapper {\r\n        margin-top: 5%;\r\n    }\r\n    .terms {\r\n        margin-bottom: 15px;\r\n        text-align: center;\r\n    }\r\n    .mailing-list-outer-wrapper.mailing-footer-block {\r\n        display: inline-block;\r\n        width: 100%;\r\n    }\r\n    .mailing-list-outer-wrapper .form-group.email {\r\n        padding-bottom: 17px;\r\n    }\r\n    .mailing-list-outer-wrapper .form-group input {\r\n        text-align: center;\r\n    }\r\n    .mailing-list-outer-wrapper .form-group.email,\r\n    .mailing-list-outer-wrapper .firstForm .submit,\r\n    .mailing-list-outer-wrapper.mailing-footer-block,\r\n    .mailing-list-outer-wrapper .terms-wrapper {\r\n        display: block !important;\r\n        width: 100% !important;\r\n        margin: 0 auto;\r\n        max-width: 270px;\r\n    }\r\n    .mailing-list-outer-wrapper .firstForm .submit {\r\n        border: 1px solid #1563a8;\r\n        text-align: center;\r\n        background-position-x: 166px;\r\n    }\r\n    .mailing-list-outer-wrapper.mailing-nav-block {\r\n        padding: 0 10px;\r\n    }\r\n    .form-group #dobDay , .form-group #dobMonth{\r\n       \r\n        padding-left:5px;\r\n    }\r\n   \r\n    \r\n}\r\n@media only screen and (max-width: 767px) and (orientation: landscape) {\r\n\r\n    .thirdForm ul {\r\n        -webkit-column-count: 2;\r\n        column-count: 2;\r\n        -moz-column-count: 2;\r\n        column-gap: 0;\r\n        -moz-column-gap:0 ;\r\n        -webkit-column-gap:0 ;\r\n        max-width: 300px;\r\n        margin: 0 auto;\r\n        width: 100%;\r\n    \r\n    } \r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+mailing-list/mailing-list-block/mailing-list-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mailing-list-outer-wrapper {{customClass}}\" *ngIf=\"artistname\">\r\n  <div *ngIf=\"!firstFormSuccess\" class=\"firstForm\">\r\n    <div class=\"mailing-list-copy\" #mailingcopy1>\r\n      <ng-content select=\"[mailingListCopy]\"></ng-content>\r\n    </div>\r\n    <div [hidden]=\"!serverError\" class=\"serverError\">Unable to process the request.</div>\r\n    <form (ngSubmit)=\"onSubmit(mailingListForm.form.valid)\" novalidate #mailingListForm=\"ngForm\" autocomplete=\"off\">\r\n      <div class=\"firstFormWrapper\">\r\n        <div class=\"form-group email\">\r\n          <input type=\"text\" minlength=\"4\" class=\"form-control\" id=\"email\" required pattern=\"^[\\w._-]+[+]?[\\w._-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$\"\r\n            [(ngModel)]=\"model.email\" name=\"email\" placeholder=\"E-mail Address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'E-mail Address'\">\r\n          <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\r\n            {{ formErrors.email }}\r\n          </div>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-default submit\">Submit</button>\r\n        <div class=\"terms-wrapper\">\r\n          <div class=\"terms\" (click)=\"termsClick()\">\r\n            <div [hidden]=\"termsShow\">Terms </div>\r\n            <div [hidden]=\"!termsShow\">Hide</div>\r\n          </div>\r\n          <div class=\"terms-content\" [hidden]=\"!termsShow\">\r\n\r\n            By submitting my information above, I acknowledge that I have reviewed and agreed to the <a href=\"/privacy-policy/\"\r\n              target=\"_blank\">Privacy Policy</a> and <a href=\"/terms-of-use\" target=\"_blank\">Terms Of Use</a>,\r\n            and I agree to receive updates and marketing messages from time to time from <span>{{artistname}}</span>.\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"hidden\" name=\"autoreply\" id=\"autoreply\" [(ngModel)]=\"model.autoreply\" />\r\n        <input type=\"hidden\" name=\"newsletterId\" id=\"newsletterId\" [(ngModel)]=\"model.newsletterId\" />\r\n        <input type=\"hidden\" id=\"Datasource\" name=\"Datasource\" [(ngModel)]=\"model.Datasource\" />\r\n        <input type=\"hidden\" id=\"geoip\" name=\"geoip\" [(ngModel)]=\"model.geoip\" />\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div *ngIf=\"firstFormSuccess\" class=\"secondFormOutterWrapper\" [ngClass]=\"{'Success':secondFormSuccess==true }\">\r\n    <div class=\"secondFormInnerWrapper\" [ngClass]=\"{'Success':secondFormSuccess==true , 'show' :firstFormSuccess==true}\">\r\n      <div class=\"layout\" [ngClass]=\"{'Success':secondFormSuccess==true , 'show' :firstFormSuccess==true}\">\r\n        <div class=\"close_wrappersecondform {{customClass}}\">\r\n          <a class=\"closesecondform\" (click)=\"onSubmit(true)\">x</a>\r\n        </div>\r\n        <div *ngIf=\"firstFormSuccess\" class=\"secondForm\">\r\n          <form (ngSubmit)=\"onSubmit(mailingListForm.form.valid)\" novalidate #mailingListForm=\"ngForm\" [hidden]=\"secondFormSuccess\"\r\n            autocomplete=\"off\">\r\n            <div class=\"welcome-msg mailing-list-second-form-copy\"><span>Thank you {{model.email | username : filter}} for subscribing.</span> For customized updates, enter zipcode\r\n              and birthday\r\n            </div>\r\n            <div class=\"secondFormOuterWrapper\">\r\n              <div class=\"second formInputWrap\">\r\n                <div class=\"form-group zipcode\">\r\n                  <!--label for=\"zipcode\">zipCode</label-->\r\n                  <input type=\"text\" class=\"form-control\" id=\"zipcode\" [(ngModel)]=\"model.zipcode\" name=\"zipcode\" placeholder=\"zip Code\">\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group birthdate\">\r\n                  <label for=\"birthdate\">BirthDay</label>\r\n                  <div class=\"birthdayWrapp\">\r\n\r\n\r\n                    <select id=\"dobMonth\" class=\"form-control\" name=\"dobMonth\" [(ngModel)]=\"model.dobMonth\">\r\n\r\n          <option selected value=\"\">MM</option><option value=\"1\">01</option><option value=\"2\">02</option><option value=\"3\">03</option><option value=\"4\">04</option><option value=\"5\">05</option><option value=\"6\">06</option><option value=\"7\">07</option><option value=\"8\">08</option><option value=\"9\">09</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option>\r\n          \r\n          </select>\r\n                    <span>/</span>\r\n                    <select id=\"dobDay\" class=\"form-control\" name=\"dobDay\" [(ngModel)]=\"model.dobDay\">\r\n            <option value=\"\">DD</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option><option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option><option value=\"21\">21</option><option value=\"22\">22</option><option value=\"23\">23</option><option value=\"24\">24</option><option value=\"25\">25</option><option value=\"26\">26</option><option value=\"27\">27</option><option value=\"28\">28</option><option value=\"29\">29</option><option value=\"30\">30</option><option value=\"31\">31</option>\r\n             \r\n          </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--div class=\"form-group\">\r\n          <input type=\"checkbox\" class=\"form-control\" id=\"global_optin\" [(ngModel)]=\"model.global_optin\" name=\"global_optin\" (change)='globalCheckboxChange()'>\r\n          <label for=\"global_optin\">Sign me up to discover more artists like [Artist Name]!</label>\r\n        </div-->\r\n\r\n              <div class=\"form-group\">\r\n                <input type=\"hidden\" name=\"autoreply\" id=\"autoreply\" [(ngModel)]=\"model.autoreply\" />\r\n                <input type=\"hidden\" name=\"newsletterId\" id=\"newsletterId\" [(ngModel)]=\"model.newsletterId\" />\r\n                <!--div *ngIf=\"globalCheck\">\r\n              <input type=\"hidden\" id=\"Datasource\" name=\"Datasource\" [(ngModel)]=\"model.Datasource\" />\r\n            </div-->\r\n                <input type=\"hidden\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div *ngIf=\"firstFormSuccess\" class=\"thirdForm\">\r\n\r\n              <div class=\"heading\">Subscribe to additional WMN artists below (optional):</div>\r\n              <ul>\r\n                <li *ngFor=\"let artist of artists; let i = index\" [ngClass]=\"{'disabled': artist.field_artist_newsletter_id === newsLetterID ,'noid': artist.field_artist_newsletter_id === '' }\">\r\n\r\n                  <input type=\"checkbox\" class=\"form-control\" id=\"{{customClass}}-{{artist.title}}\" [(ngModel)]=\"artists_subscribe[i]\" name=\"artists_checkbox\"\r\n                    (change)='artistCheckboxChange(artist.field_artist_newsletter_id,i )'>\r\n\r\n                  <label for=\"{{customClass}}-{{artist.title}}\"><i class=\"fa fa-minus-square\" aria-hidden=\"true\"></i>{{artist.title}}</label>\r\n\r\n                </li>\r\n              </ul>\r\n              <!--div class=\"form-group\">\r\n              <input type=\"hidden\" name=\"autoreply\" id=\"autoreply\" [(ngModel)]=\"model.autoreply\" />\r\n              <input type=\"hidden\" name=\"newsletterId\" id=\"newsletterId\" [(ngModel)]=\"model.newsletterId\" />\r\n              <input type=\"hidden\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" />\r\n            </div-->\r\n              <div class=\"buttonWrapp\">\r\n                <button type=\"submit\" class=\"btn btn-default submit\">Subscribe ({{artist_subscribed_length}}) </button>\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"terms-wrapper\">\r\n              <div class=\"terms\" (click)=\"termsClick()\">\r\n                <div [hidden]=\"termsShow\">Terms</div>\r\n                <div [hidden]=\"!termsShow\">Hide</div>\r\n              </div>\r\n              <div class=\"terms-content\" [hidden]=\"!termsShow\">\r\n                By submitting my information above, I acknowledge that I have reviewed and agreed to the <a href=\"/privacy-policy/\"\r\n                  target=\"_blank\">Privacy Policy</a> and <a href=\"/terms-of-use\" target=\"_blank\">Terms Of Use</a>,\r\n                and I agree to receive updates and marketing messages from time to time from <span>{{artistname}}</span>.\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div [hidden]=\"!secondFormSuccess\" class=\"second-form-success-copy\">Thank You!</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+mailing-list/mailing-list-block/mailing-list-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailingListBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_mailinglistservice__ = __webpack_require__("../../../../../src/app/shared/mailinglistservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mailing_list_block_data__ = __webpack_require__("../../../../../src/app/+mailing-list/mailing-list-block/mailing-list-block-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artists_artists_services__ = __webpack_require__("../../../../../src/app/artists/artists.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MailingListBlockComponent = /** @class */ (function () {
    function MailingListBlockComponent(mailingListService, _artistService) {
        this.mailingListService = mailingListService;
        this._artistService = _artistService;
        this.footerMlist = false;
        this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.countries = ["United States", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra"];
        this.model = new __WEBPACK_IMPORTED_MODULE_4__mailing_list_block_data__["a" /* MailingListData */]();
        this.artists_subscribe = [];
        this.artists_suscribe_names = [];
        this.artist_subscribed_length = 0;
        this.firstFormSuccess = false;
        this.secondFormSuccess = false;
        // thirdFormSuccess = false;
        this.globalCheck = false;
        this.serverError = false;
        this.termsShow = false;
        this.active = true;
        this.formErrors = {
            'email': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email address is a required field.',
                'minlength': 'Email address is a required field.',
                'pattern': 'Email address is invalid.'
            }
        };
    }
    // refresh() {
    //   this.firstFormSuccess = false;
    //   this.secondFormSuccess = false;
    //   this.thirdFormSuccess = false;
    //   this.globalCheck = false;
    //   this.serverError = false;
    //   this.termsShow = false;
    //    this.model = new MailingListData();
    //   this.formChanged();
    // }
    MailingListBlockComponent.prototype.ngOnChanges = function () {
        this.getnodecount();
        this.getArtists();
    };
    MailingListBlockComponent.prototype.ngOnInit = function () {
        this.getnodecount();
        this.getArtists();
    };
    MailingListBlockComponent.prototype.getArtists = function () {
        var _this = this;
        this.artists = [];
        this._artistService.getArtists().subscribe(function (data) {
            _this.artists = data;
        }, function (err) { return console.error(err); }, function () {
            //console.info("Done")
        });
        return this.artists;
    };
    MailingListBlockComponent.prototype.getnodecount = function () {
        var _this = this;
        this.mailingListService.getArtistcountwithNid().subscribe(function (data) {
            _this.totalArtistwithNewsletter = parseInt(data[0].count);
        }, function (err) { return console.error(err); }, function () {
        });
    };
    MailingListBlockComponent.prototype.sendRequest = function () {
        var _this = this;
        if (!this.firstFormSuccess) {
            this.model.newsletterId = this.newsLetterID;
            this.model.Datasource = this.artistDataSoursce;
        }
        if (this.firstFormSuccess) {
            // console.info("this.artist_subscribed_length"+ this.artist_subscribed_length);
            // console.info("this.totalArtistwithNewsletter"+this.totalArtistwithNewsletter);
            if (this.artist_subscribed_length == this.totalArtistwithNewsletter) {
                this.model.Datasource = "WarnerMusicNashville_ArtistNewsletterOptIn_EmailPage_Website";
            }
        }
        this.mailingListService.sendRequest(JSON.stringify(this.model))
            .subscribe(function (data) {
            if (data.status == 'error') {
                _this.serverError = true;
                _this.model = new __WEBPACK_IMPORTED_MODULE_4__mailing_list_block_data__["a" /* MailingListData */]();
            }
            else if (data.status == 'success') {
                if (_this.firstFormSuccess) {
                    _this.secondFormSuccess = true;
                    if (_this.footerMlist) {
                        var body = document.getElementsByTagName("body")[0];
                        __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].removeClass(body, "secondform-lb-open");
                    }
                    _this.artists_suscribe_names = [];
                    _this.artists_subscribe = [];
                }
                else {
                    _this.model.labelListId = "6389157";
                    if (_this.model.labelListId != _this.newsLetterID) {
                        _this.artist_subscribed_length = 1;
                    }
                    _this.firstFormSuccess = true;
                    _this.email = _this.model.email;
                    _this.model = new __WEBPACK_IMPORTED_MODULE_4__mailing_list_block_data__["a" /* MailingListData */]();
                    _this.model.newsletterId = _this.newsLetterID;
                    _this.model.email = _this.email;
                    _this.model.dobDay = "", _this.model.dobMonth = "";
                    if (_this.footerMlist) {
                        var body = document.getElementsByTagName("body")[0];
                        __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].addClass(body, "secondform-lb-open");
                    }
                }
            }
        }, function (err) {
            console.error(err);
            _this.serverError = true;
        }, function () { return console.log('done'); });
    };
    MailingListBlockComponent.prototype.onSubmit = function (isValid) {
        this.model = this.currentForm.value;
        var form = this.mailingListForm.form;
        if (isValid) {
            this.sendRequest();
        }
        else {
            console.log(form.controls);
            for (var i in form.controls) {
                form.controls[i].markAsTouched();
                form.controls[i].markAsDirty();
                form.controls[i].updateValueAndValidity();
            }
        }
        if (this.footerMlist) {
            var body = document.getElementsByTagName("body")[0];
            __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].removeClass(body, "secondform-lb-open");
        }
        return false;
        /*
        if(this.validateForm()){
          //this.sendRequest();
        }*/
    };
    MailingListBlockComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    MailingListBlockComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.mailingListForm) {
            return;
        }
        this.mailingListForm = this.currentForm;
        if (this.mailingListForm) {
            this.mailingListForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    MailingListBlockComponent.prototype.onValueChanged = function (data) {
        var isError = false;
        if (!this.mailingListForm) {
            return;
        }
        var form = this.mailingListForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                    isError = true;
                }
            }
        }
        //return !isError;
    };
    MailingListBlockComponent.prototype.globalCheckboxChange = function () {
        this.globalCheck = this.model.global_optin ? false : true;
        if (this.globalCheck) {
            this.model.newsletterId = this.model.secondaryId + ',' + this.model.labelListId;
        }
        else {
            this.model.newsletterId = this.model.secondaryId;
        }
    };
    MailingListBlockComponent.prototype.termsClick = function () {
        this.termsShow = this.termsShow ? false : true;
    };
    MailingListBlockComponent.prototype.artistCheckboxChange = function (artistnewsletter, index) {
        if ((this.artists_subscribe[index])) {
            this.artists_suscribe_names.push(artistnewsletter);
            if (this.model.labelListId != this.newsLetterID) {
                this.artist_subscribed_length = this.artists_suscribe_names.length + 1;
            }
            else {
                this.artist_subscribed_length = this.artists_suscribe_names.length;
            }
        }
        else {
            this.deleteElement(artistnewsletter);
            this.artist_subscribed_length = this.artist_subscribed_length - 1;
        }
        this.model.artists_subscribed = this.artists_suscribe_names;
        if (this.model.artists_subscribed) {
            if (this.model.labelListId == this.newsLetterID) {
                this.model.newsletterId = this.model.artists_subscribed.toString() + ',' + this.model.labelListId;
            }
            else {
                this.model.newsletterId = this.model.artists_subscribed.toString() + ',' + this.model.labelListId + ',' + this.newsLetterID;
            }
        }
        else {
            this.model.newsletterId = this.model.labelListId;
        }
    };
    MailingListBlockComponent.prototype.deleteElement = function (artistnewsletter) {
        var index = this.artists_suscribe_names.indexOf(artistnewsletter);
        this.artists_suscribe_names.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MailingListBlockComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MailingListBlockComponent.prototype, "artistname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MailingListBlockComponent.prototype, "artistDataSoursce", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MailingListBlockComponent.prototype, "newsLetterID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MailingListBlockComponent.prototype, "footerMlist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mailingListForm'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
    ], MailingListBlockComponent.prototype, "currentForm", void 0);
    MailingListBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mailing-list-block',
            template: __webpack_require__("../../../../../src/app/+mailing-list/mailing-list-block/mailing-list-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+mailing-list/mailing-list-block/mailing-list-block.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_mailinglistservice__["a" /* MailingListService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_mailinglistservice__["a" /* MailingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_mailinglistservice__["a" /* MailingListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__artists_artists_services__["b" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__artists_artists_services__["b" /* ArtistService */]) === "function" && _c || Object])
    ], MailingListBlockComponent);
    return MailingListBlockComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=mailing-list-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/+music/album-block/album-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n    font-size: 30px;\r\n    text-align: left;\r\n    padding-bottom: 33px;\r\n    padding-top: 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.album li {\r\n    position: relative;\r\n    font-size: 0;\r\n    margin: 0;\r\n    padding-bottom: 50px;\r\n}\r\nh3{\r\n    font-size: 30px;    \r\n    margin: 0;\r\n    line-height: 1;\r\n    padding-bottom: 18px;\r\n}\r\n.body{\r\n    display: none;\r\n    color: #f6f5fd;\r\n    opacity: .72;\r\n    left: 1rem;\r\n    right: 1rem;\r\n    bottom: 50px;\r\n    padding: 20px 20px 20px 25px;\r\n    background: #000000;    \r\n    position: absolute;\r\n}\r\n.content {\r\n    cursor: pointer;\r\n}\r\n.album li:hover .body{\r\n    display: block;\r\n}\r\nspan {\r\n    font-size: 19px;\r\n    font-family: proxima-nova-condensed;\r\n    text-transform: uppercase;\r\n}\r\n.albumArt {\r\n    position: relative;\r\n}\r\nli:hover .albumArt:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(27,33,78,0.78);\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .body{\r\n        position: relative;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: initial;\r\n        background: transparent;\r\n        color: #1b214e;\r\n        display: block;\r\n        padding: 10px 0 0 0;\r\n    }\r\n    h3{\r\n        padding-bottom: 5px;\r\n        font-size: 10px;\r\n    }\r\n    span {\r\n        font-size: 10px;\r\n    }\r\n    .album li {\r\n        padding-bottom: 18px;\r\n    }\r\n    .album-block{\r\n        padding-bottom: 45px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+music/album-block/album-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"album block {{customClass}}\">\r\n  <h2 *ngIf=\"headerText\">{{headerText}}</h2>\r\n  <ul class=\"album {{cols}}\">\r\n    <li class=\"col\" *ngFor=\"let album of albums | slice:0:count\" [class.selected]=\"album === selectedAlbum\">\r\n      <div class=\"content\" (click)=\"gotoDetail(album)\">\r\n      <div class=\"albumArt\" [innerHTML]=\"album.albumArt\"></div>\r\n      <div class=\"body\">\r\n        <h3 [innerHTML]=\"album.title\"></h3>\r\n        <span>{{album.releaseDate}}</span>\r\n      </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+music/album-block/album-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__music_service__ = __webpack_require__("../../../../../src/app/+music/music.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumBlockComponent = /** @class */ (function () {
    function AlbumBlockComponent(_musicService, _router) {
        this._musicService = _musicService;
        this._router = _router;
        this.detailPath = "/album";
    }
    AlbumBlockComponent.prototype.getAlbum = function () {
        var _this = this;
        this.selectedAlbum = undefined;
        this.albums = [];
        this._musicService.getAlbum().subscribe(function (data) { _this.albums = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        return this.albums;
    };
    AlbumBlockComponent.prototype.gotoDetail = function (album) {
        var id;
        this.selectedAlbum = album;
        id = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].getSlug(this.selectedAlbum.path);
        this._router.navigate([this.detailPath + ("/" + id)]);
    };
    AlbumBlockComponent.prototype.ngOnInit = function () {
        this.albums = this.getAlbum();
        if (!this.cols) {
            this.cols = "grid-5_xs-1"; //Have this on the build.
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlbumBlockComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlbumBlockComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AlbumBlockComponent.prototype, "detailPath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AlbumBlockComponent.prototype, "customClass", void 0);
    AlbumBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-album-block',
            template: __webpack_require__("../../../../../src/app/+music/album-block/album-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+music/album-block/album-block.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__music_service__["b" /* MusicService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__music_service__["b" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__music_service__["b" /* MusicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
    ], AlbumBlockComponent);
    return AlbumBlockComponent;
    var _a, _b;
}());

//# sourceMappingURL=album-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/+music/album-detail/album-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-wrapper div {\r\n    width: 236px;\r\n    display: inline-block;\r\n}\r\n.album-detail{\r\n    background: #040514; \r\n    color: #f6f5fd;\r\n}\r\n.left-wrapper,.right-wrapper{\r\n    float: left;\r\n    font-size: 0;\r\n    width: 48%;\r\n}\r\n.left-wrapper{\r\n    text-align: right;\r\n    padding-right: 65px;\r\n    box-sizing: border-box;\r\n}\r\n.right-wrapper{\r\n    width: 52%;\r\n}\r\n.created {\r\n    font-size: 19px;\r\n    padding-bottom: 27px;\r\n    text-transform: uppercase;\r\n    font-family: proxima-nova-condensed,Arial, Helvetica, sans-serif;\r\n    letter-spacing: 2px;\r\n}\r\n.album-detail h2 {\r\n    padding-bottom: 10px;\r\n    text-align: left;\r\n}\r\n.album-detail .g-layout{\r\n    padding-top: 90px;\r\n}\r\n.album-merch-block .g-layout{\r\n    padding-top: 0px;\r\n}\r\n.right-wrapper h2 span {\r\n    font-weight: 600;\r\n}\r\n.button{\r\n    padding: 10px;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n}\r\n.album-merch-block{\r\n    background: #181a33;\r\n    background-image: linear-gradient( -90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%);\r\n}\r\n.album-merch-block h2{\r\n    color: #ffffff;\r\n    text-align: left;\r\n    padding-top: 55px;\r\n    padding-bottom: 40px;\r\n}\r\n.tracks {\r\n    width: 52%;\r\n    float: right;\r\n    padding-top: 76px;\r\n    text-align: left;\r\n}\r\n.track-list {\r\n    padding-top: 28px;\r\n    font-size: 19px;\r\n}\r\n.track-list a{\r\n    color: #f6f5fd;\r\n}\r\n.track-title {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    line-height: 30px;\r\n}\r\n.track-list div {\r\n    padding-bottom: 10px;\r\n}\r\n.track-list span {\r\n    margin-right: 15px;\r\n}\r\n.clear-fix:after{\r\n    clear: both;\r\n    content: \".\";\r\n    display: block;\r\n    height: 0;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n}\r\n.embed-list {\r\n    float: left;\r\n    clear: left;\r\n    width: 48%;\r\n    padding: 80px 65px 0;\r\n    box-sizing: border-box;\r\n}\r\n.embed-list h2{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    padding: 0;\r\n}\r\n.left-wrapper img{\r\n    max-width: 230px;\r\n}\r\n.service span{    \r\n    display: inline-block;\r\n    cursor: pointer;\r\n    text-indent: -9999px;\r\n    margin-right: 25px;\r\n}\r\n.service span:last-child{\r\n    margin-right: 0;\r\n}\r\n.service span.Apple {\r\n    background: url(\"/assets/i/streaming-apple.png\")no-repeat;\r\n    width: 28px;\r\n    height: 31px;\r\n}\r\n.service span.Apple.active{\r\n    background-position: 0px -41px;\r\n}\r\n.service span.Youtube {\r\n    background: url(\"/assets/i/streaming-youtube.png\")no-repeat;\r\n    height: 32px;\r\n    width: 32px;\r\n}\r\n.service span.Youtube.active{\r\n    background-position: 0px -44px;\r\n}\r\n.service span.Soundcloud {\r\n    background: url(\"/assets/i/streaming-soundcloud.png\")no-repeat;\r\n    width: 56px;\r\n    height: 25px;    \r\n    vertical-align: sub;\r\n}\r\n.service span.Soundcloud.active{\r\n    background-position: 0 -25px;\r\n}\r\n.service span.Deezer{\r\n    background: url(\"/assets/i/streaming-deezer.png\")no-repeat;\r\n    width: 57px;\r\n    height: 32px;\r\n}\r\n.service span.Deezer.active{\r\n    background-position: 0px -42px;\r\n}\r\n.service span.Spotify{\r\n    background: url(\"/assets/i/streaming-spotify.png\")no-repeat;\r\n    height: 31px;\r\n    width: 31px;\r\n}\r\n.service span.Spotify.active{\r\n    background-position: 0px -41px;\r\n}\r\n\r\n.service {\r\n    padding: 40px 0 35px 0;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .left-wrapper {\r\n        width: 40%;\r\n        padding-right: 15px;\r\n    }\r\n    .right-wrapper {\r\n        width: 60%;\r\n    }\r\n    .left-wrapper div {\r\n        width: 80%;        \r\n    }\r\n    .album-detail .g-layout {\r\n        padding-top: 45px;\r\n        padding-bottom: 35px;\r\n    }\r\n    .tracks{\r\n        width: 100%;\r\n        padding-top: 45px;\r\n    }\r\n    .right-wrapper h2 {\r\n        font-size: 15px;\r\n        text-align: left;\r\n        margin: 10px 0;\r\n        padding: 0;\r\n    }\r\n    .created{\r\n        font-size: 12px;\r\n    }\r\n    .button{\r\n        font-size: 12px;\r\n    }\r\n    .embed-list{\r\n        width: 100%;\r\n        padding: 65px 0 0 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+music/album-detail/album-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"album\" class=\"album-detail\">\r\n  <app-music-detail [albumId] = \"id\" ></app-music-detail>\r\n  <div class=\"album-merch-block\">\r\n    <div class=\"g-layout\">\r\n      <h2><span [innerHTML]=\"album.title\" ></span> THE ALBUM</h2>\r\n      <app-album-block [detailPath]=\"'/album'\" [customClass]=\"'listPanel'\" [count]=\"3\" [cols]=\"'grid-3_xs-2'\">\r\n      </app-album-block>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+music/album-detail/album-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_service__ = __webpack_require__("../../../../../src/app/+music/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumDetailComponent = /** @class */ (function () {
    function AlbumDetailComponent(_musicService, route, sanitizer) {
        this._musicService = _musicService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.selectedIndex = 0;
        this.showAlbumDesc = true;
        this.showAlbumTrack = true;
        this.initDone = false;
    }
    AlbumDetailComponent.prototype.displayEmbed = function (list, i) {
        this.visibleEmbed = list.service;
        this.selectedIndex = i;
    };
    AlbumDetailComponent.prototype.callAlbumDetail = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
            _this._musicService.getAlbumDetail(params['id']).subscribe(function (data) {
                _this.album = data[0];
                _this.album.albumArt = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].getImageSrc(_this.album.albumArt);
            }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        });
        window.scroll(0, 0);
    };
    AlbumDetailComponent.prototype.ngOnInit = function () {
        this.callAlbumDetail();
        this.initDone = true;
    };
    AlbumDetailComponent.prototype.ngOnChanges = function () {
        if (this.initDone) {
            //this.callNewsDetain();
        }
    };
    AlbumDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-album-detail',
            template: __webpack_require__("../../../../../src/app/+music/album-detail/album-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+music/album-detail/album-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__music_service__["b" /* MusicService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__music_service__["b" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__music_service__["b" /* MusicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=album-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/+music/custom-audio/custom-audio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=range] {\r\n    -webkit-appearance: none;\r\n    width: 82%;\r\n    padding: 25px 0 0 0;\r\n    background: transparent;\r\n}\r\ninput[type=range]:focus {\r\n  outline: none;\r\n}\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 2px;\r\n  cursor: pointer;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  background: #89869a;\r\n  border-radius: 1px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range]::-webkit-slider-thumb {\r\n  height: 12px;\r\n  width: 12px;\r\n  border-color: transparent;\r\n  border-radius: 12px;\r\n  background: #f6f5fd;\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  margin-top: -5px;\r\n}\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n  background: #89869a;\r\n}\r\ninput[type=range]::-moz-range-track {\r\n  width: 100%;\r\n  height: 2px;\r\n  cursor: pointer;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  background: #89869a;\r\n  border-radius: 1px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range]::-moz-range-thumb {\r\n  box-shadow: 0px 0px 1px #000000, 0px 0px 0px #0d0d0d;\r\n  height: 12px;\r\n  width: 12px;\r\n  border-radius: 12px;\r\n  background: #f6f5fd;\r\n  cursor: pointer;\r\n}\r\ninput[type=range]::-ms-track {\r\n  width: 100%;\r\n  height: 3px;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border-color: transparent;\r\n  color: transparent;\r\n}\r\ninput[type=range]::-ms-fill-lower {\r\n  background: #575757;\r\n  border: 0px solid #010101;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\ninput[type=range]::-ms-fill-upper {\r\n  background: #646464;\r\n  border: 0px solid #010101;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\ninput[type=range]::-ms-thumb {\r\n  box-shadow: 0px 0px 1px #000000, 0px 0px 0px #0d0d0d;\r\n  height: 12px;\r\n  width: 12px;\r\n  border-radius: 12px;\r\n  background: #f6f5fd;\r\n  cursor: pointer;\r\n  height: 1px;\r\n}\r\ninput[type=range]:focus::-ms-fill-lower {\r\n  background: #646464;\r\n}\r\ninput[type=range]:focus::-ms-fill-upper {\r\n  background: #717171;\r\n}\r\nspan{\r\n  float: right;\r\n  font-size: 12px;\r\n  margin-top: 20px;\r\n}\r\n.playing span {\r\n    color: #ffffff;\r\n}\r\n.playing .player{\r\n    display: block;    \r\n}\r\n.player{\r\n    display: none;\r\n}\r\n.thumbnail img:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(27,33,78,0.78);\r\n}\r\n.playing .thumbnail img:before{\r\n  background: transparent;\r\n}\r\n.thumbnail {\r\n  position: relative;\r\n  line-height: 0\r\n}\r\n.playing img {\r\n  border: 1px solid #ffffff;\r\n}\r\n.thumbnail:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(27,33,78,0.78);\r\n}\r\n.playing .thumbnail:before{\r\n    background: transparent;\r\n}\r\nimg{\r\n  min-height: 152px;\r\n}\r\n\r\n\r\n.track-detail.music-player > div {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 74%;\r\n    height: auto;\r\n}\r\n.music-player.track-detail {\r\n    max-width: 550px;\r\n    width: 100%;\r\n    display: block;\r\n    margin: 0 auto;\r\n    background-image: url(\"http://25ccm.com/sites/25ccm.com/files/201503/player_bg.png\");\r\n    background-repeat: repeat-x;\r\n    background-size: auto 100%;\r\n    border-radius: 10px;\r\n    border: 1px solid #000;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\r\n.music-player.track-detail .player{\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    padding: 0 2% 0 1%;\r\n}\r\n.track-detail.music-player > div.thumbnail {\r\n    width: 25%;\r\n    height: auto;\r\n    line-height: 0;\r\n}\r\n.track-detail.music-player input[type=range]{\r\n    width: 100%;\r\n    padding: 0 0;\r\n    background: transparent;\r\n}\r\n.track-detail.music-player img{\r\n    min-height: 1px;\r\n    border: 0 none;\r\n}\r\n.track-detail.music-player span {\r\n    font-size: 12px;\r\n    margin-top: 9px;\r\n    display: block;\r\n    float: none;\r\n    color: #fff;\r\n}\r\n.track-detail.music-player span.title {\r\n    font-size: 19px;\r\n    margin: 0;\r\n    line-height: 1;\r\n}\r\n.track-detail.music-player span.artist {\r\n    font-size: 12px;\r\n    margin-top: 0;\r\n    margin-bottom: 4px;\r\n    color: #969696;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .music-player.track-detail{\r\n    max-width: 350px;\r\n  }\r\n  .track-detail.music-player > div.thumbnail {\r\n    width: 100px;\r\n  }\r\n  .track-detail.music-player > div {\r\n    width: calc(100% - 106px);\r\n    height: auto;\r\n  }\r\n  .track-detail.music-player span.title {\r\n    font-size: 14px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+music/custom-audio/custom-audio.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.playing]=\"isPlaying\" class=\"music-player {{customClass}}\">\r\n  <div *ngIf=\"albumart\" class=\"thumbnail\">\r\n    <!--<div [style.background-image]=\"'url('')'\" ></div>-->\r\n    <img [src]=\"albumart\" />\r\n    <div class=\"play\"><a *ngIf=\"!isPlaying\" (click)=\"play()\"> Play</a></div>\r\n    <div class=\"pause\"><a *ngIf=\"isPlaying\" (click)=\"pause()\">Pause </a></div>\r\n  </div>\r\n  <div class=\"player\">\r\n    <span *ngIf=\"title\" [innerHTML]=\"title\" class=\"title\"></span>\r\n    <span *ngIf=\"artist\" [innerHTML]=\"artist\" class=\"artist\"></span>\r\n    <input [value]=\"currentTime\" type=\"range\" max=\"30\" (input)=\"seek($event)\" step=\".001\" />\r\n    <span> 0:{{(currentTime % 60) | number:'2.0-0'}}</span></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+music/custom-audio/custom-audio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomAudioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomAudioComponent = /** @class */ (function () {
    function CustomAudioComponent() {
        this.forcestop = false;
        this.playerStateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.customClass = "";
        this.currentTime = 0;
        this.isPlaying = false;
    }
    CustomAudioComponent.prototype.togglePlay = function () {
        this.isPlaying = !this.isPlaying;
        this.playerStateChange.emit({ isPlaying: this.isPlaying });
    };
    CustomAudioComponent.prototype.ngOnChanges = function () {
        this.isPlaying = !this.forcestop;
        if (!this.isPlaying && this.audio) {
            this.audio.pause();
        }
        //console.log("-----------------------this.forcestop-------------------------");
        //console.log(this.forcestop);
        //console.log("--------------------------------------------------------------");
    };
    CustomAudioComponent.prototype.play = function () {
        this.audio.play();
        //this.forcestop = false;
        /*
        setTimeout(function () {
          this.audio.play();
        }, 150);*/
        this.togglePlay();
    };
    CustomAudioComponent.prototype.pause = function () {
        this.audio.pause();
        //this.forcestop = true;
        //this.togglePlay();
        this.isPlaying = !this.isPlaying;
    };
    CustomAudioComponent.prototype.seek = function (event) {
        this.audio.currentTime = event.target.value;
    };
    CustomAudioComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("Audio - "+this.src);    
        this.audio = new Audio(this.src);
        this.audio.ontimeupdate = (function () {
            _this.currentTime = _this.audio.currentTime;
        });
        this.audio.onended = (function () {
            _this.isPlaying = !_this.isPlaying;
            //this.togglePlay();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CustomAudioComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CustomAudioComponent.prototype, "albumart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CustomAudioComponent.prototype, "forcestop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], CustomAudioComponent.prototype, "playerStateChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CustomAudioComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CustomAudioComponent.prototype, "artist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CustomAudioComponent.prototype, "title", void 0);
    CustomAudioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-custom-audio',
            template: __webpack_require__("../../../../../src/app/+music/custom-audio/custom-audio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+music/custom-audio/custom-audio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomAudioComponent);
    return CustomAudioComponent;
    var _a;
}());

/*http://plnkr.co/edit/82AIzJB0668d8q2Gqa1V
http://plnkr.co/edit/zmwPpaiB7muySAmua9GZ
*/ 
//# sourceMappingURL=custom-audio.component.js.map

/***/ }),

/***/ "../../../../../src/app/+music/music-detail/music-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-wrapper div {\r\n    width: 236px;\r\n    display: inline-block;\r\n}\r\n.album-detail{\r\n    background: #040514; \r\n    color: #f6f5fd;\r\n}\r\n.left-wrapper,.right-wrapper{\r\n    float: left;\r\n    font-size: 0;\r\n    width: 48%;\r\n}\r\n.left-wrapper{\r\n    text-align: right;\r\n    padding-right: 65px;\r\n    box-sizing: border-box;\r\n}\r\n.right-wrapper{\r\n    width: 52%;\r\n}\r\n:host >>> .homepage-album-node {\r\n    max-width: 760px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.created {\r\n    font-size: 19px;\r\n    padding-bottom: 27px;\r\n    text-transform: uppercase;\r\n    font-family: proxima-nova-condensed,Arial, Helvetica, sans-serif;\r\n    letter-spacing: 2px;\r\n}\r\n.album-detail h2 {\r\n    padding-bottom: 10px;\r\n    text-align: left;\r\n}\r\n.album-detail .g-layout{\r\n    padding-top: 90px;\r\n}\r\n.right-wrapper h2 span {\r\n    font-weight: 600;\r\n}\r\n.button{\r\n    padding: 10px;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n}\r\n.tracks {\r\n    width: 52%;\r\n    float: right;\r\n    padding-top: 76px;\r\n    text-align: left;\r\n}\r\n.track-list {\r\n    padding-top: 28px;\r\n    font-size: 19px;\r\n}\r\n.track-list a{\r\n    color: #f6f5fd;\r\n}\r\n.track-title {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    line-height: 30px;\r\n}\r\n.track-list div {\r\n    padding-bottom: 10px;\r\n}\r\n.track-list span {\r\n    margin-right: 15px;\r\n}\r\n.clear-fix:after{\r\n    clear: both;\r\n    content: \".\";\r\n    display: block;\r\n    height: 0;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n}\r\n.embed-list {\r\n    float: left;\r\n    clear: left;\r\n    width: 48%;\r\n    padding: 80px 65px 0;\r\n    box-sizing: border-box;\r\n}\r\n.embed-list h2{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    padding: 0;\r\n}\r\n.left-wrapper img{\r\n    max-width: 230px;\r\n}\r\n.service span{    \r\n    display: inline-block;\r\n    cursor: pointer;\r\n    text-indent: -9999px;\r\n    margin-right: 25px;\r\n}\r\n.service span:last-child{\r\n    margin-right: 0;\r\n}\r\n.service span.Apple {\r\n    background: url(\"/assets/i/streaming-apple.png\")no-repeat;\r\n    width: 28px;\r\n    height: 31px;\r\n}\r\n.service span.Apple.active{\r\n    background-position: 0px -41px;\r\n}\r\n.service span.Youtube {\r\n    background: url(\"/assets/i/streaming-youtube.png\")no-repeat;\r\n    height: 32px;\r\n    width: 32px;\r\n}\r\n.service span.Youtube.active{\r\n    background-position: 0px -44px;\r\n}\r\n.service span.Soundcloud {\r\n    background: url(\"/assets/i/streaming-soundcloud.png\")no-repeat;\r\n    width: 56px;\r\n    height: 25px;    \r\n    vertical-align: sub;\r\n}\r\n.service span.Soundcloud.active{\r\n    background-position: 0 -25px;\r\n}\r\n.service span.Deezer{\r\n    background: url(\"/assets/i/streaming-deezer.png\")no-repeat;\r\n    width: 57px;\r\n    height: 32px;\r\n}\r\n.service span.Deezer.active{\r\n    background-position: 0px -42px;\r\n}\r\n.service span.Spotify{\r\n    background: url(\"/assets/i/streaming-spotify.png\")no-repeat;\r\n    height: 31px;\r\n    width: 31px;\r\n}\r\n.service span.Spotify.active{\r\n    background-position: 0px -41px;\r\n}\r\n\r\n.service {\r\n    padding: 40px 0 35px 0;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .left-wrapper {\r\n        width: 40%;\r\n        padding-right: 15px;\r\n    }    \r\n    .right-wrapper {\r\n        width: 60%;\r\n    }\r\n    .left-wrapper div {\r\n        width: 80%;\r\n    }\r\n    .album-detail .g-layout {\r\n        padding-top: 45px;\r\n        padding-bottom: 35px;\r\n    }\r\n    .tracks{\r\n        width: 100%;\r\n        padding-top: 45px;\r\n    }\r\n    .right-wrapper h2 {\r\n        font-size: 15px;\r\n        text-align: left;\r\n        margin: 10px 0;\r\n        padding: 0;\r\n    }\r\n    .created{\r\n        font-size: 12px;\r\n    }\r\n    .button{\r\n        font-size: 12px;\r\n    }\r\n    .embed-list{\r\n        width: 100%;\r\n        padding: 65px 0 0 0;\r\n    }\r\n}\r\n\r\n.album-description {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.album-description > div {\r\n    width: calc( ( 100% / 2 ) - 3px - 11%);\r\n    display: inline-block;\r\n    height: auto;\r\n    padding: 0;\r\n    vertical-align: top;\r\n    float:none;\r\n}\r\n.album-description > div.left-wrapper {\r\n    margin-right: 11%;\r\n}\r\n.album-description .left-wrapper .album-title, .album-description .left-wrapper .created{\r\n    width: 100%;\r\n}\r\n.album-description .album-title, .album-description .created {\r\n    line-height: 1;\r\n    font-size: 20px;\r\n    text-align: left;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #1b214e;\r\n    letter-spacing: 2px;\r\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\r\n}\r\n.album-description .created{\r\n    font-size: 16px;\r\n    letter-spacing: 0;\r\n    font-weight: 300;\r\n    color: #807c9c;\r\n    font-family: proxima-nova-condensed,Arial, Helvetica, sans-serif;\r\n}\r\n.album-description .album-image {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: auto;\r\n    line-height: 0;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.album-description .album-image img{\r\n    max-width: 100%;\r\n    height: auto;\r\n    width: 100%;   \r\n}\r\n.album-description .album-image .getAlbum{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    display: none;\r\n    text-align: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background-color: rgba(26,32,76,0.60);\r\n}\r\n.album-description .album-image:hover .getAlbum{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.album-description .album-image .getAlbum a{\r\n    display: inline-block;\r\n    height: auto;\r\n    min-height: 1px;\r\n    font-size: 13px;\r\n    letter-spacing: 1.3px;\r\n    line-height: 2.6;\r\n    border: 1px solid #f6f5fd;\r\n    padding: 0 14px;\r\n    background-color: transparent;\r\n    color: #f6f5fd;\r\n    min-width: 148px;\r\n    margin-bottom: 19px;\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\r\n.album-description .album-image .getAlbum a:hover{\r\n    background-color: rgba(246,245,253,0.4);\r\n}\r\n.album-description .album-image .getAlbum a:last-child{\r\n    margin-bottom: 0;\r\n}\r\n.album-description .embed-list h2{\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    padding: 0;\r\n    text-align: left;\r\n    color: #807c9c;\r\n}\r\n.album-description .embed-list .service{\r\n    padding: 16px 0;\r\n}\r\n.album-description .embed-list .service span {\r\n    background: url(\"/assets/i/home-music-stream-icon.png\") no-repeat;\r\n    width: 26px;\r\n    height: 26px;\r\n    vertical-align: middle;\r\n}\r\n.album-description .embed-list .service span.Spotify {\r\n    background-position: 0 -39px;\r\n}\r\n.album-description .embed-list .service span.Spotify:hover {\r\n    background-position: 0 -2px;\r\n}\r\n.album-description .embed-list .service span.Spotify.active {\r\n    background-position: 0 -78px;\r\n}\r\n\r\n.album-description .embed-list .service span.Apple {\r\n    background-position: -49px -39px;\r\n}\r\n.album-description .embed-list .service span.Apple:hover {\r\n    background-position: -49px -2px;\r\n}\r\n.album-description .embed-list .service span.Apple.active {\r\n    background-position: -49px -78px;\r\n}\r\n\r\n.album-description .embed-list .service span.Soundcloud {    \r\n    background-position: -224px -39px;\r\n    width: 48px;\r\n    height: 24px;\r\n}\r\n.album-description .embed-list .service span.Soundcloud:hover {\r\n    background-position: -224px -2px;\r\n}\r\n.album-description .embed-list .service span.Soundcloud.active {\r\n    background-position: -224px -78px;\r\n}\r\n\r\n.album-description .embed-list .service span.Youtube {\r\n    background-position: -175px -39px;\r\n    height: 28px;\r\n}\r\n.album-description .embed-list .service span.Youtube:hover {\r\n    background-position: -175px -2px;\r\n}\r\n.album-description .embed-list .service span.Youtube.active {\r\n    background-position: -175px -78px;\r\n}\r\n\r\n.album-description .embed-list .service span.Deezer {\r\n    background-position: -100px -39px;\r\n    width: 53px;\r\n    height: 26px;\r\n}\r\n.album-description .embed-list .service span.Deezer:hover {    \r\n    background-position: -100px -2px;\r\n}\r\n.album-description .embed-list .service span.Deezer.active {\r\n    background-position: -100px -78px;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .service span{\r\n        margin-right: 4%;\r\n    }\r\n    .album-description > div{    \r\n        width: 100%;\r\n        margin: 0;\r\n    }\r\n    .album-description > div.left-wrapper {\r\n        margin-right: 0;\r\n    }\r\n    .album-description{\r\n        display: block;    \r\n        max-width: 400px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n    :host >>> .iframeWrapper.Spotify iframe{\r\n        width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+music/music-detail/music-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"album\" [ngSwitch]=\"chooseTemplate\" class=\"album-node\">\r\n  <div *ngSwitchCase=\"1\" class=\"homepage-album-node\">\r\n    <div class=\"album-description\">\r\n      <div class=\"left-wrapper\">\r\n        <div class=\"album-title\" [innerHTML]=\"album.title\"></div>\r\n        <div class=\"created\">{{album.releaseDate}}</div>\r\n        <div class=\"album-image\">\r\n          <img [src]=\"album.albumArt\" />\r\n          <div class=\"getAlbum\">\r\n            <a class=\"button album-button\" target=\"_blank\" (click) = \"toggleSideDrawer()\" >GET THE ALBUM</a>\r\n            <a class=\"button viewall-button\" [href]=\"album.path\" target=\"_blank\" >VIEW</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n       <div class=\"embed-list\">\r\n        <h2>HOW DO YOU WANT TO LISTEN?</h2>\r\n        <div class=\"service\">\r\n          <span [ngClass]=\"{active: i===selectedIndex}\" *ngFor=\"let list of embedList,let i=index\" class=\"{{list.service}}\" (click)=\"displayEmbed(list,i)\">{{list.service}}</span>\r\n        </div>\r\n        <div class=\"embed\">\r\n          <div [ngSwitch]=\"visibleEmbed\" *ngFor=\"let list of embedList\">\r\n            <div *ngSwitchCase=\"list.service\" [innerHTML]=\"list.safeHtml\" class=\"iframeWrapper {{list.service}}\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-side-drawer [selectedAudio]=\"selectedAudio\" [count]=\"callCount\" ></app-side-drawer>\r\n  </div>\r\n  <div class=\"g-layout clear-fix\" *ngSwitchDefault>  \r\n    <div class=\"left-wrapper\">\r\n      <img [src]=\"album.albumArt\" />\r\n    </div>\r\n    <div class=\"right-wrapper\">\r\n      <h2><span [innerHTML]=\"album.title\" ></span></h2>\r\n      <div class=\"created\">{{album.releaseDate}}</div>\r\n      <div class=\"getAlbum\"><a class=\"button reverse-button\" (click) = \"toggleSideDrawer()\" target=\"_blank\">GET THE ALBUM</a></div>\r\n    </div>\r\n    <div class=\"embed-list\">\r\n      <h2>HOW DO YOU WANT TO LISTEN?</h2>\r\n      <div class=\"service\">\r\n        <span [ngClass]=\"{active: i===selectedIndex}\" *ngFor=\"let list of embedList,let i=index\" class=\"{{list.service}}\" (click)=\"displayEmbed(list,i)\">{{list.service}}</span>\r\n      </div>\r\n      <div class=\"embed\">\r\n        <div [ngSwitch]=\"visibleEmbed\" *ngFor=\"let list of embedList\">\r\n          <div *ngSwitchCase=\"list.service\" [innerHTML]=\"list.safeHtml\" class=\"iframeWrapper {{list.service}}\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"trackList\" class=\"tracks\" >\r\n      <div class=\"track-title\">SELECT A TRACK BELOW <br> TO VIEW LYRICS </div>\r\n      <div class=\"track-list\">\r\n        <div *ngFor=\"let track of trackList;let i=index\"><span>{{i + 1}}</span><a [routerLink]=\"[track.path]\" [innerHTML]=\"track.trackname\"></a></div>\r\n      </div>\r\n    </div>\r\n    <app-side-drawer [selectedAudio]=\"selectedAudio\" [count]=\"callCount\" ></app-side-drawer>\r\n  </div>  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+music/music-detail/music-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_service__ = __webpack_require__("../../../../../src/app/+music/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MusicDetailComponent = /** @class */ (function () {
    function MusicDetailComponent(_musicService, route, sanitizer) {
        this._musicService = _musicService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.showSideDrawer = false;
        this.selectedIndex = 0;
        this.callCount = 0;
        this.initDone = false;
    }
    MusicDetailComponent.prototype.ngOnInit = function () {
        this.callAlbumDetail();
        this.initDone = true;
    };
    MusicDetailComponent.prototype.callAlbumDetail = function () {
        var _this = this;
        this._musicService.getAlbumDetail(this.albumId).subscribe(function (data) {
            _this.album = data[0];
            _this.album.albumArt = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].getImageSrc(_this.album.albumArt);
            if (_this.albumId.length < 1) {
                _this.albumId = _this.album.nid;
            }
            _this.callEmbed();
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        window.scroll(0, 0);
    };
    MusicDetailComponent.prototype.toggleSideDrawer = function () {
        this.callCount = this.callCount + 1;
        this.assignAlbumToAudio(this.album);
    };
    MusicDetailComponent.prototype.assignAlbumToAudio = function (album) {
        var temp = {
            title: album.title,
            body: "",
            albumArt: album.albumArt,
            nid: album.nid,
            path: album.path,
            albumName: album.title,
            spotifyTrackID: "",
            source: "",
            isPlaying: false,
            albumLink: album.path,
            field_download_links: "",
            field_streaming_links: "",
        };
        if (album && typeof album.field_download_links !== "object" && album.field_download_links !== "") {
            temp.field_download_links = album.field_download_links;
            temp.field_streaming_links = album.field_streaming_links;
        }
        this.selectedAudio = (temp);
    };
    MusicDetailComponent.prototype.sideDrawerClose = function () {
        this.showSideDrawer = false;
    };
    MusicDetailComponent.prototype.callEmbed = function () {
        var _this = this;
        this._musicService.getAudioList(this.albumId).subscribe(function (data) {
            _this.trackList = data;
        });
        this._musicService.getAlbumEmdeds(this.albumId).subscribe(function (data) {
            _this.embedList = data;
            _this.visibleEmbed = _this.embedList[0].service;
            for (var x = 0; x < _this.embedList.length; x++) {
                _this.embedList[x].safeHtml = _this.sanitizer.bypassSecurityTrustHtml(_this.embedList[x].embed.toString());
            }
        });
    };
    MusicDetailComponent.prototype.displayEmbed = function (list, i) {
        this.visibleEmbed = list.service;
        this.selectedIndex = i;
    };
    MusicDetailComponent.prototype.ngOnChanges = function () {
        if (this.initDone) {
            this.callAlbumDetail();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MusicDetailComponent.prototype, "albumId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicDetailComponent.prototype, "chooseTemplate", void 0);
    MusicDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-music-detail',
            template: __webpack_require__("../../../../../src/app/+music/music-detail/music-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+music/music-detail/music-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__music_service__["b" /* MusicService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__music_service__["b" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__music_service__["b" /* MusicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object])
    ], MusicDetailComponent);
    return MusicDetailComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=music-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/+music/music-list/music-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.music-banner {\r\n    height: 245px;  \r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.music-banner span {\r\n    position: absolute;\r\n    display: inline-block;   \r\n    color: #fff;\r\n    font-weight: 700;\r\n    opacity: 0.5;\r\n    top: 120px;\r\n    left: 200px;\r\n    font-size: 62px;\r\n    line-height: 1;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n}\r\n.music-banner:before {\r\n    content: \"\";\r\n    background: #1b214e;\r\n    opacity: 0.55;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.music-banner > img{\r\n    width: 100%;\r\n}\r\n\r\n.music-banner img{\r\n    margin-top: -104px;\r\n}\r\n\r\n.music-banner + .g-layout{\r\n    padding-top: 74px;\r\n}\r\n.album-block h2{\r\n    font-size: 30px;\r\n    text-align: left;\r\n    padding-bottom: 33px;\r\n    padding-top: 0;\r\n    font-weight: 600;\r\n    color: #807c9c;\r\n}\r\n.album-block{\r\n    padding-top: 0;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .music-banner{\r\n        height: 100px;\r\n    }\r\n    .music-banner span {\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        text-align: center;\r\n        line-height: 100px;\r\n        font-size: 40px;\r\n    }\r\n    .music-banner + .g-layout{\r\n        padding-top: 10px;\r\n    }      \r\n    .album-block h2{\r\n        padding-bottom: 23px;\r\n        font-size: 22px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+music/music-list/music-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"music-banner\">\r\n  <img src=\"/assets/i/music-banner.jpg\" typeof=\"foaf:Image\">\r\n  <span>Music</span>\r\n</div>\r\n<div class=\"g-layout\">\r\n\t<app-track-block [count]=\"5\"></app-track-block>\r\n</div>\r\n<div class=\"g-layout album-block\">\r\n\t<h2>Album</h2>\r\n\t<app-album-block [customClass]=\"'listPanel'\" [count]=\"6\" [cols]=\"'grid-3_xs-2'\">\r\n\t</app-album-block>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+music/music-list/music-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicListComponent = /** @class */ (function () {
    function MusicListComponent() {
    }
    MusicListComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    MusicListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-music-list',
            template: __webpack_require__("../../../../../src/app/+music/music-list/music-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+music/music-list/music-list.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], MusicListComponent);
    return MusicListComponent;
}());

//# sourceMappingURL=music-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/+music/music.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+music/music.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-music-list></app-music-list>"

/***/ }),

/***/ "../../../../../src/app/+music/music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = /** @class */ (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    MusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-music',
            template: __webpack_require__("../../../../../src/app/+music/music.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+music/music.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], MusicComponent);
    return MusicComponent;
}());

//# sourceMappingURL=music.component.js.map

/***/ }),

/***/ "../../../../../src/app/+music/music.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MusicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MusicService = /** @class */ (function () {
    function MusicService(http) {
        this.http = http;
    }
    MusicService.prototype.getAudio = function () {
        var url;
        url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].audioListEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MusicService.prototype.getAudioDetail = function (id) {
        var nid = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(id);
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].audioDetailEndpoint;
        return this.http.get(url + '?nid=' + nid)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /* Used to get the list of track for each album */
    MusicService.prototype.getAudioList = function (id) {
        var nid = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(id);
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].audioAlbumListEndpoint;
        return this.http.get(url + '?nid=' + nid)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /* Used to get the list of embeds for each album */
    MusicService.prototype.getAlbumEmdeds = function (id) {
        var nid = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(id);
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].albumEmbedEndpoint;
        return this.http.get(url + '?nid=' + nid)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MusicService.prototype.getAlbum = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].albumListEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MusicService.prototype.getAlbumDetail = function (id) {
        var nid = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(id);
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].albumDetailEndpoint;
        return this.http.get(url + '?nid=' + nid)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MusicService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    MusicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], MusicService);
    return MusicService;
    var _a;
}());

//# sourceMappingURL=music.service.js.map

/***/ }),

/***/ "../../../../../src/app/+music/side-drawer/side-drawer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side_drawer {\r\n    width: 300px;\r\n    height: 100%;\r\n    position: fixed;\r\n    right: -300px;\r\n    top: 0;\r\n    background: #000;\r\n    z-index: 9;\r\n    transition: .25s ease-in-out;    \r\n    color: #f6f5fd;\r\n    overflow-y: scroll;\r\n}\r\n.side_drawer a {\r\n    color: #f6f5fd;\r\n    display: block;\r\n    width: 130px;\r\n    text-indent: -9999px;\r\n    margin: 0 auto;\r\n    height: 43px;\r\n    padding-bottom: 35px;\r\n}\r\n.side_drawer.show{\r\n    right: 0;\r\n}\r\n.sd_overall.show{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    cursor: pointer;\r\n    display: block;\r\n    z-index: 2;\r\n    opacity: 0.2;\r\n    top: 0;\r\n    left: 0;\r\n    background: #1b214e;\r\n}\r\n.sd_overall{\r\n    display: none;\r\n}\r\n.side_drawer .close {\r\n    font-size: 25px;\r\n    color: #f6f5fd;\r\n    float: right;\r\n    padding: 10px 15px 0 0;\r\n    cursor: pointer;\r\n}\r\n.side_drawer .Amazon{\r\n    background: url(\"/assets/i/amazon-sd.png\") no-repeat;\r\n}\r\n.side_drawer .iTunes{\r\n    background: url(\"/assets/i/itunes-sd.png\") no-repeat;\r\n}\r\n\r\n.side_drawer .stream .iTunes{\r\n    background: url(\"/assets/i/itunes_stream-sd.png\") no-repeat;\r\n}\r\n\r\n.side_drawer .Store{\r\n    background: url(\"/assets/i/store-sd.png\") no-repeat;\r\n}\r\n\r\n.side_drawer .Google.Play{\r\n    background: url(\"/assets/i/google_play-sd.png\") no-repeat;\r\n}\r\n.side_drawer .Spotify{\r\n    background: url(\"/assets/i/spotify-sd.png\") no-repeat;\r\n}\r\n.side_drawer .stream .Google.Play{\r\n    background: url(\"/assets/i/google_play_stream-sd.png\") no-repeat;\r\n}\r\n.side_drawer .Tidal{\r\n    background: url(\"/assets/i/tidal-sd.png\") no-repeat;\r\n}\r\n\r\n.download {\r\n    padding-bottom: 20px;\r\n    text-align: center;\r\n    padding-top: 105px;\r\n}\r\n.stream span,.download span {\r\n    text-align: center;\r\n    display: block;\r\n    padding-bottom: 35px;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {    \r\n    li.selected .album-name{\r\n        padding-bottom: 35px;\r\n    }\r\n    .spotifyFollow{\r\n        top: 14px;\r\n        right: 0;\r\n    }\r\n    .side_drawer.show{\r\n        color: #ffffff;\r\n        background: #000000;\r\n    }\r\n    .stream span,.download span {\r\n        font-size: 16px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+music/side-drawer/side-drawer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-side-drawer [selectedAudio]=\"\" [class.show]=\"showSideDrawer\"></app-side-drawer>-->\r\n<div class=\"side_drawer\" [class.show]=\"showSideDrawer\" >\r\n    <span class=\"close\" (click)=\"closeSideDrawer()\">x</span>\r\n    <div>\r\n        <div class=\"download\" *ngIf=\"sidedrawercontent.field_download_links\">\r\n            <span>OWN IT</span>\r\n            <a target=\"_blank\" *ngFor=\"let key of sidedrawercontent.field_download_links\" class=\"{{ key | printobject : 'key' }}\" href=\"{{ key | printobject : 'value' }}\" >{{ key | printobject : \"key\" }}</a>\r\n        </div>\r\n        <div class=\"download\" *ngIf=\"!sidedrawercontent.field_download_links\">\r\n            <span>No Links to Download</span>\r\n        </div>\r\n        <div class=\"stream\" *ngIf=\"sidedrawercontent.field_streaming_links\">\r\n            <span>STREAM IT</span>\r\n            <a target=\"_blank\" *ngFor=\"let key of sidedrawercontent.field_streaming_links\" class=\"{{ key | printobject : 'key' }}\" href=\"{{ key | printobject : 'value' }}\" >{{ key | printobject : \"key\" }}</a>\r\n        </div>\r\n        <div class=\"stream\" *ngIf=\"!sidedrawercontent.field_streaming_links\">\r\n            <span>No Links to Stream</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div (click)=\"closeSideDrawer()\" [class.show]=\"showSideDrawer\" class=\"sd_overall\"></div>"

/***/ }),

/***/ "../../../../../src/app/+music/side-drawer/side-drawer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideDrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_service__ = __webpack_require__("../../../../../src/app/+music/music.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideDrawerComponent = /** @class */ (function () {
    function SideDrawerComponent() {
        this.showSideDrawer = true;
        this.detailPath = "/audio";
        this.onCloseSideDrawer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fieldCollectionservices = new Array();
        this.fieldStreamingServices = new Array();
    }
    SideDrawerComponent.prototype.generateKeyArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    SideDrawerComponent.prototype.modifyFieldCollectionData = function (sidedrawercontent, type) {
        var range = document.createRange();
        range.selectNode(document.body);
        var fragment = range.createContextualFragment(sidedrawercontent);
        var m = fragment.querySelectorAll(".field-collection-item .content div div");
        var downLinksobj = [];
        //console.log("field_download_links ------------------");
        for (var i = 0; i < m.length; i += 4) {
            var obj = {};
            obj[m[i + 1].textContent] = m[i + 3].textContent;
            downLinksobj.push(obj);
        }
        //console.log(downLinksobj);
        for (var i = 0; i < downLinksobj.length; i++) {
            if (type == "download") {
                this.fieldCollectionservices.push(Object.keys(downLinksobj[i]));
            }
            else {
                this.fieldStreamingServices.push(Object.keys(downLinksobj[i]));
            }
        }
        return downLinksobj;
    };
    SideDrawerComponent.prototype.toggleSideDrawer = function (audio) {
        var temp = Object.assign({}, audio);
        if (audio && audio.field_download_links !== undefined && audio.field_download_links !== "") {
            temp.field_download_links = this.modifyFieldCollectionData(temp.field_download_links, "download");
        }
        if (audio && audio.field_streaming_links !== undefined && audio.field_streaming_links !== "") {
            temp.field_streaming_links = this.modifyFieldCollectionData(temp.field_streaming_links, "streaming");
        }
        this.sidedrawercontent = temp;
        /*
        if (audio && audio.field_download_links !== undefined && audio.field_download_links !== "") {
          let temp = audio;
          //console.log(temp);
          temp.field_download_links = this.modifyFieldCollectionData(temp.field_download_links,"download");
          temp.field_streaming_links = this.modifyFieldCollectionData(temp.field_streaming_links,"streaming");
          console.log(temp);
          this.sidedrawercontent = temp;
        }else if(audio && audio.field_download_links !== ""){
          this.sidedrawercontent = audio;
        }else {
          this.sidedrawercontent = null;
        }*/
    };
    SideDrawerComponent.prototype.closeSideDrawer = function () {
        this.removeClassToBody();
        /*
          this.showSideDrawer = false;
          Utils.removeClass(document.getElementsByTagName("body"), "showSideDrawer");
          console.log("close");
          this.selectedAudio =  null;
          this.sidedrawercontent = undefined;
          this.fieldCollectionservices.length = 0;
          this.fieldStreamingServices.length = 0;
         */
        this.showSideDrawer = false;
        this.onCloseSideDrawer.emit(true);
    };
    SideDrawerComponent.prototype.onSelect = function (audio) {
        this.selectedAudio = audio;
    };
    SideDrawerComponent.prototype.ngOnChanges = function () {
        this.toggleSideDrawer(this.selectedAudio);
        /*
        console.log(this.selectedAudio);
        console.log("---------------sidedrawercontent---------------------------");
        console.log(this.sidedrawercontent);
        console.log("changed");
        */
        this.showSideDrawer = true;
        if (this.selectedAudio) {
            this.addClassToBody();
        }
        if (!this.cols) {
            this.cols = "grid-5_xs-1"; //Have this on the build.
        }
    };
    SideDrawerComponent.prototype.ngOnInit = function () {
        this.showSideDrawer = false;
        //this.toggleSideDrawer(this.selectedAudio);    
        if (!this.cols) {
            this.cols = "grid-5_xs-1"; //Have this on the build.
        }
    };
    SideDrawerComponent.prototype.addClassToBody = function () {
        var body = document.getElementsByTagName("body")[0];
        console.log(body);
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].addClass(body, "show-SideDrawer");
    };
    SideDrawerComponent.prototype.removeClassToBody = function () {
        var body = document.getElementsByTagName("body")[0];
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].removeClass(body, "show-SideDrawer");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SideDrawerComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SideDrawerComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SideDrawerComponent.prototype, "detailPath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__music_service__["Audio"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__music_service__["Audio"]) === "function" && _a || Object)
    ], SideDrawerComponent.prototype, "selectedAudio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SideDrawerComponent.prototype, "onCloseSideDrawer", void 0);
    SideDrawerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-drawer',
            template: __webpack_require__("../../../../../src/app/+music/side-drawer/side-drawer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+music/side-drawer/side-drawer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__music_service__["b" /* MusicService */]],
        }),
        __metadata("design:paramtypes", [])
    ], SideDrawerComponent);
    return SideDrawerComponent;
    var _a;
}());

//# sourceMappingURL=side-drawer.component.js.map

/***/ }),

/***/ "../../../../../src/app/+music/spotify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
    }
    /*
      What we have to do this is this:
  
      fetchTrackDetail
  
     
    getTrackDetails(spotifyTrackID:string){
      let audio = {
        audioSrc:"",
        albumArt:""
      }
      this.getSpotifyData(spotifyTrackID)
  
      
    }*/
    SpotifyService.prototype.getSpotifyData = function (spotifyTrackID) {
        var url = "https://api.spotify.com/v1/tracks/" + spotifyTrackID;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SpotifyService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    SpotifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], SpotifyService);
    return SpotifyService;
    var _a;
}());

//# sourceMappingURL=spotify.service.js.map

/***/ }),

/***/ "../../../../../src/app/+music/track-block/track-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "audio {\r\n    display: none;\r\n}\r\n.audio li:hover {\r\n    background-color: #e8e8ef;\r\n    color: #000;\r\n}\r\n.audio{\r\n    position: relative;\r\n}\r\n.audio li.selected {\r\n    background-color: #000;\r\n}\r\n\r\n\r\n.audio li {\r\n    color: #1b214e;\r\n    position: relative;\r\n}\r\n\r\n\r\nli.selected .track-name,li.selected .album-name,li.selected a{ \r\n    color: #ffffff;\r\n}\r\nh2{\r\n    font-size: 30px;\r\n    text-align: left;\r\n    padding-bottom: 33px;\r\n    padding-top: 0;\r\n    font-weight: 600;\r\n    color: #807c9c;\r\n    display: inline-block;\r\n}\r\n.spotifyFollow {\r\n    display: inline-block;\r\n    right: -42px;\r\n    position: absolute;\r\n}\r\n.footer {\r\n    color: #359be9;\r\n    font-size: 14px;\r\n}\r\n\r\n.thumbnail:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.42);\r\n}\r\n.thumbnail{\r\n    position:relative;\r\n    font-size: 0;\r\n    line-height: 0\r\n}\r\n\r\n.block img {\r\n    min-height: 152px;\r\n}\r\n\r\n.fulltrack a {\r\n    display: none;\r\n}\r\nli.selected .fulltrack a {\r\n    display: inline-block;\r\n    padding: 8px 15px;    \r\n    font-size: 14px;\r\n    border: 2px solid #6b6c75;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    border-radius: 2px;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\nli.selected .fulltrack a:hover {\r\n    background-color: #ffffff;\r\n    border-color: #ffffff;\r\n    color: #040514;\r\n    border-radius: 2px;\r\n}\r\n.fulltrack {\r\n    text-align: center;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 767px) {\r\n    h2{\r\n        padding-bottom: 0;\r\n        margin-bottom: 20px;\r\n        font-size: 20px;\r\n    }\r\n    .track-name {\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n    }\r\n    .album-name{\r\n        text-align: center;\r\n        padding-bottom: 0;\r\n    }\r\n    li.selected .album-name{\r\n        padding-bottom: 35px;\r\n    }\r\n    .spotifyFollow{\r\n        top: 14px;\r\n        right: 0;\r\n    }    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+music/track-block/track-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"audio block\">\r\n    <h2>Top Tracks</h2>\r\n    <app-block blockID=\"51\" class=\"spotifyFollow\"></app-block>\r\n    <ul class=\"audio {{cols}}\" *ngIf=\"audio\" >\r\n        <li class=\"col grid\" *ngFor=\"let a of audio; let i = index\" [class.selected]=\"a.isPlaying\">\r\n            <div class=\"item-wrapper col\">\r\n                <!--<div class=\"thumbnail\">\r\n                    <img [src]='a.albumArt' />\r\n                </div>-->\r\n                <div class=\"body\">\r\n                    <app-custom-audio *ngIf=\"a.source\" [src]='a.source' [albumart]='a.albumArt' [forcestop]='!a.isPlaying' (playerStateChange)=\"onAudioPlayerStateChange($event,i )\">\r\n                    </app-custom-audio>\r\n                    <div class=\"track-name\"><a [routerLink]=\"[a.path]\" [innerHTML]=\"a.title\"></a></div>\r\n                    <div class=\"album-name\"><span [innerHTML]=\"a.albumName\" ></span><a href=\"{{a.albumLink}}\">(View)</a></div>\r\n                    <div class=\"fulltrack\">\r\n                        <a (click)=\"toggleSideDrawer(a)\">FULL TRACK</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<app-side-drawer [count] = \"callCount\" [selectedAudio]=\"selectedAudio\" ></app-side-drawer>"

/***/ }),

/***/ "../../../../../src/app/+music/track-block/track-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_service__ = __webpack_require__("../../../../../src/app/+music/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spotify_service__ = __webpack_require__("../../../../../src/app/+music/spotify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackBlockComponent = /** @class */ (function () {
    function TrackBlockComponent(_musicService, _router, _spotifyService) {
        this._musicService = _musicService;
        this._router = _router;
        this._spotifyService = _spotifyService;
        this.detailPath = "/audio";
        this.callCount = 0;
        this.selectedAudio = undefined;
        this.showSideDrawer = false;
        this.fieldCollectionservices = new Array();
        this.fieldStreamingServices = new Array();
    }
    TrackBlockComponent.prototype.getAudio = function () {
        var _this = this;
        this.selectedAudio = undefined;
        this.audio = [];
        this._musicService.getAudio().subscribe(function (data) {
            if (_this.count) {
                _this.audio = data.slice(0, _this.count);
            }
            else {
                _this.audio = data;
            }
            //this.stopAllPlayer();
            _this.mapSpotifyData();
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        return this.audio;
    };
    TrackBlockComponent.prototype.modifyFieldCollectionData = function (sidedrawercontent, type) {
        var range = document.createRange();
        range.selectNode(document.body);
        var fragment = range.createContextualFragment(sidedrawercontent);
        var m = fragment.querySelectorAll(".field-collection-item .content div div");
        var downLinksobj = [];
        for (var i = 0; i < m.length; i += 4) {
            var obj = {};
            obj[m[i + 1].textContent] = m[i + 3].textContent;
            downLinksobj.push(obj);
        }
        for (var i = 0; i < downLinksobj.length; i++) {
            if (type == "download") {
                this.fieldCollectionservices.push(Object.keys(downLinksobj[i]));
            }
            else {
                this.fieldStreamingServices.push(Object.keys(downLinksobj[i]));
            }
        }
        return downLinksobj;
    };
    TrackBlockComponent.prototype.mapSpotifyData = function () {
        var _loop_1 = function (a) {
            this_1._spotifyService.getSpotifyData(a.spotifyTrackID)
                .subscribe(function (data) {
                a.albumArt = data.album.images[0].url;
                a.source = data.preview_url;
                a.isPlaying = false;
            }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.audio; _i < _a.length; _i++) {
            var a = _a[_i];
            _loop_1(a);
        }
    };
    TrackBlockComponent.prototype.gotoDetail = function (audio) {
        /*let id:string;
        this.selectedAudio = audio;
        id = Utils.getSlug(this.selectedAudio.path);
        this._router.navigate([this.detailPath + `/${id}`]);
        */
    };
    TrackBlockComponent.prototype.onAudioPlayerStateChange = function (event, index) {
        //if(event.isPlaying){
        this.stopAllPlayer(event, index);
        this.audio[index].isPlaying = event.isPlaying;
        //}
    };
    TrackBlockComponent.prototype.stopAllPlayer = function (event, index) {
        for (var i = 0; i < this.audio.length; i++) {
            this.audio[i].isPlaying = !event.isPlaying;
        }
    };
    TrackBlockComponent.prototype.toggleSideDrawer = function (audio) {
        this.callCount = this.callCount + 1;
        this.onSelect(audio);
        this.showSideDrawer = true;
    };
    TrackBlockComponent.prototype.sideDrawerClose = function () {
        //this.showSideDrawer = false;
    };
    TrackBlockComponent.prototype.onSelect = function (audio) {
        this.selectedAudio = audio;
    };
    TrackBlockComponent.prototype.ngOnInit = function () {
        this.audio = this.getAudio();
        if (!this.cols) {
            this.cols = "grid-5_xs-1"; //Have this on the build.
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TrackBlockComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TrackBlockComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrackBlockComponent.prototype, "detailPath", void 0);
    TrackBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-track-block',
            template: __webpack_require__("../../../../../src/app/+music/track-block/track-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+music/track-block/track-block.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__music_service__["b" /* MusicService */], __WEBPACK_IMPORTED_MODULE_3__spotify_service__["a" /* SpotifyService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__music_service__["b" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__music_service__["b" /* MusicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__spotify_service__["a" /* SpotifyService */]) === "function" && _c || Object])
    ], TrackBlockComponent);
    return TrackBlockComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=track-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/+music/track-detail/track-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n    color: #807c9c;\r\n    font-weight: 600;\r\n    text-align: left;\r\n    padding: 7px 0 35px 0;\r\n}\r\n.lyrics{\r\n    color: #181717;\r\n    font-size: 15px;\r\n    text-align: center;\r\n    margin-top: 2%;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    h2{\r\n        text-align: center;\r\n        font-size: 20px;\r\n        padding: 0;\r\n    }\r\n    .lyrics{\r\n        font-size: 14px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+music/track-detail/track-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"audio\" class=\"audio-detail g-layout\">  \r\n  <h2 [innerHTML]=\"audio.trackname+' LYRICS'\"></h2>\r\n  <app-custom-audio *ngIf=\"audio.source\" [title]=\"audio.trackname\" [artist]=\"audio.artist\" [customClass] = \"'track-detail'\" [src]='audio.source' [albumart]='audio.albumArt' [forcestop]='!audio.isPlaying' (playerStateChange)=\"onAudioPlayerStateChange($event,i )\">\r\n  </app-custom-audio>\r\n  <div class=\"lyrics\" [innerHTML]=\"audio.lyrics\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+music/track-detail/track-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_service__ = __webpack_require__("../../../../../src/app/+music/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spotify_service__ = __webpack_require__("../../../../../src/app/+music/spotify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackDetailComponent = /** @class */ (function () {
    function TrackDetailComponent(_musicService, _router, _spotifyService) {
        this._musicService = _musicService;
        this._router = _router;
        this._spotifyService = _spotifyService;
    }
    TrackDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params.forEach(function (params) {
            _this.id = params['id'];
            _this._musicService.getAudioDetail(_this.id).subscribe(function (data) {
                _this.audio = data[0];
                _this.mapSpotifyData();
            }, function (err) { return console.log(err); }, function () { return console.log('done'); });
        });
        window.scroll(0, 0);
    };
    TrackDetailComponent.prototype.mapSpotifyData = function () {
        var _this = this;
        this._spotifyService.getSpotifyData(this.audio.spotifyTrackID)
            .subscribe(function (data) {
            _this.audio.albumArt = data.album.images[0].url;
            _this.audio.source = data.preview_url;
            _this.audio.isPlaying = false;
            _this.audio["artist"] = data.artists[0].name;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    TrackDetailComponent.prototype.onAudioPlayerStateChange = function (event, index) {
        //if(event.isPlaying){
        this.audio.isPlaying = event.isPlaying;
        //}
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__music_service__["Audio"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__music_service__["Audio"]) === "function" && _a || Object)
    ], TrackDetailComponent.prototype, "audio", void 0);
    TrackDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-track-detail',
            template: __webpack_require__("../../../../../src/app/+music/track-detail/track-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+music/track-detail/track-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__music_service__["b" /* MusicService */], __WEBPACK_IMPORTED_MODULE_3__spotify_service__["a" /* SpotifyService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__music_service__["b" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__music_service__["b" /* MusicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__spotify_service__["a" /* SpotifyService */]) === "function" && _d || Object])
    ], TrackDetailComponent);
    return TrackDetailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=track-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/+news/artisttagnames.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistTagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistTagService = /** @class */ (function () {
    function ArtistTagService(http) {
        this.http = http;
    }
    ArtistTagService.prototype.getArtistTags = function () {
        var url;
        url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].newsartistTagEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArtistTagService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    ArtistTagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ArtistTagService);
    return ArtistTagService;
    var _a;
}());

//# sourceMappingURL=artisttagnames.service.js.map

/***/ }),

/***/ "../../../../../src/app/+news/filter-PromotedToFrontPage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return promotedToFrontpage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var promotedToFrontpage = /** @class */ (function () {
    function promotedToFrontpage() {
    }
    promotedToFrontpage.prototype.transform = function (value) {
        var filter = "On".toLocaleLowerCase();
        return filter ? value.filter(function (t) { return t.promote.toLocaleLowerCase().indexOf(filter) != -1; }) : value;
    };
    promotedToFrontpage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'promotedToFrontpage'
        })
    ], promotedToFrontpage);
    return promotedToFrontpage;
}());

//# sourceMappingURL=filter-PromotedToFrontPage.js.map

/***/ }),

/***/ "../../../../../src/app/+news/filter-by-artist.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByArtist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByArtist = /** @class */ (function () {
    function FilterByArtist() {
    }
    FilterByArtist.prototype.transform = function (value, args) {
        var filter = args.toLocaleLowerCase();
        if (value != undefined) {
            if (args != "" && args != undefined) {
                var filter_1 = args.toLocaleLowerCase();
                if (filter_1) {
                    value = value.filter(function (t) { return t.tags.toLocaleLowerCase().indexOf(filter_1) != -1; });
                }
                if (value.length > 0) {
                    return value;
                }
            }
        }
    };
    FilterByArtist = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterByArtist'
        })
    ], FilterByArtist);
    return FilterByArtist;
}());

//# sourceMappingURL=filter-by-artist.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/+news/filter-by-newsId.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByNewsID; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByNewsID = /** @class */ (function () {
    function FilterByNewsID() {
    }
    FilterByNewsID.prototype.transform = function (value, args) {
        if (value != undefined) {
            if (args != "" && args != undefined) {
                var filter_1 = args.toLocaleLowerCase();
                return filter_1 ? value.filter(function (t) { return t.nid.toLocaleLowerCase().indexOf(filter_1) == -1; }) : value;
            }
            else {
                return value;
            }
        }
        //return value;
    };
    FilterByNewsID = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'FilterByNewsID'
        })
    ], FilterByNewsID);
    return FilterByNewsID;
}());

//# sourceMappingURL=filter-by-newsId.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/+news/filter-multiple-images.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMultipleImages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterMultipleImages = /** @class */ (function () {
    function FilterMultipleImages() {
    }
    FilterMultipleImages.prototype.transform = function (value) {
        var pathArray = value.split(',');
        return pathArray.pop();
    };
    FilterMultipleImages = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'FilterMultipleImages'
        })
    ], FilterMultipleImages);
    return FilterMultipleImages;
}());

//# sourceMappingURL=filter-multiple-images.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/+news/news-block/news-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.news{\r\n    list-style-type: none;\r\n    padding: 0px;\r\n}\r\n.InThisPost a {\r\n    cursor: pointer;\r\n}\r\nul.news h3 {\r\n    margin-bottom: 0px;\r\n    font-weight: 600;\r\n}\r\n\r\nul.news li {\r\n    padding: 0 15px;\r\n}\r\n\r\n.item-wrapper {\r\n    padding: 0 0 60px 0;\r\n}\r\n\r\n.exclusive-list .item-wrapper{\r\n    padding: 0;\r\n}\r\n\r\n.home-page .item-wrapper{    \r\n    background-color: #111224; \r\n}\r\n.block h2 {\r\n    padding: 0 0 50px 0;\r\n    text-align: left;\r\n    font-weight: 600;\r\n}\r\n\r\n.home-page ul.news .body{\r\n    padding-top: 5px;\r\n    padding-right: 20px;\r\n    padding-left: 20px;    \r\n}\r\n\r\nul.news .body h3 {\r\n    cursor: pointer;\r\n    font-size: 22px;   \r\n    margin: 15px 0;\r\n}\r\nul.news .created {\r\n    font-size:19px;\r\n    margin-top: 30px;\r\n    font-style: normal;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #807c9c;  \r\n    font-family: proxima-nova-condensed;\r\n} \r\n.thumbnail {\r\n    overflow:hidden;\r\n    max-height: 250px;\r\n    cursor: pointer;\r\n    font-size: 0;\r\n    position: relative;\r\n}\r\n\r\n.body{\r\n    font-weight: 400;\r\n}\r\n\r\n.footer {    \r\n    overflow: hidden;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    left: 0px;\r\n    padding: 0px 0 20px 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.readMore {\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-family: \"proxima-nova-condensed\";\r\n    font-size: 17px;\r\n}\r\n.thumbnail:empty {\r\n    height: 0;\r\n    padding-top: 56%;\r\n    width: 100%;\r\n    max-height: 1px;\r\n}\r\n\r\nli:hover .item-wrapper.col .thumbnail:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.75);\r\n}\r\n/*Home page styling starts*/\r\n.home-page .readMore{\r\n    color: #807c9c;\r\n}\r\n.home-page ul.news .created{\r\n    font-size: 14px;\r\n}\r\n.home-page {\r\n    font-size: 14px;\r\n}\r\n.home-page ul.news .body h3 {\r\n    font-size: 16px;\r\n    line-height: 1.2;\r\n    letter-spacing: 1px;\r\n}\r\n/*Home page styling ends*/\r\n\r\n\r\n/*News landing styles starts*/\r\n.photo-list .readMore {\r\n    color: #359be9;\r\n    font-weight: 600;\r\n}\r\n.photo-list .footer{\r\n    padding: 0px 0 15px 0;\r\n}\r\n.photo-list ul.news li{\r\n    padding-bottom: 15px;\r\n}\r\n/*News landing styles ends*/ \r\n.buttonWrapper {\r\n    text-align: center;\r\n    padding-bottom: 30px;\r\n    padding-top: 0;\r\n}\r\n.button{\r\n    border: 1px solid;\r\n    border-radius: 5px;\r\n}\r\n.button:hover{\r\n    color: #fff;\r\n    background: #1b214e;\r\n}\r\ncarousel, news-carousel {\r\n    display: block;\r\n    height: auto;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.news-body /deep/ a{\r\n    color:#359BE9;\r\n    font-weight: 600;\r\n    text-decoration: underline;\r\n}\r\n.news-body /deep/ a:hover{\r\n    text-decoration: none;\r\n    color:#74c8e9;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    carousel, news-carousel {\r\n        padding: 0;\r\n        box-sizing: border-box;\r\n        -webkit-box-sizing: border-box;\r\n        padding-right: 40px;\r\n    }\r\n}\r\n.featured ul.news li {\r\n    width: 100%;\r\n    max-width: 100%;\r\n}\r\n.featured ul.news li .thumbnail {\r\n    width: 43.6%;\r\n    float: left;\r\n    max-height: none;\r\n}\r\n\r\n\r\n/*About News Block Styles */\r\n\r\n.news_block ul.news {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n.news_block ul.news li.col {\r\n    width: 33.33%;\r\n    display: inline-block;\r\n    padding: 0;\r\n    margin-right: 8%;\r\n    position: relative;\r\n}\r\n.block.about-news-list.RecomededReadsContents .news_block ul.news li.col{\r\n    margin-right: 5%;\r\n}\r\n.news_block ul.news li.col:last-child{\r\n    margin-right: 0;\r\n}\r\n.news_block ul.news li.col .item-wrapper.col{\r\n    height: 100%;\r\n}\r\n.news_block ul.news li.col .body {\r\n    margin-top: 15px;\r\n}\r\n.news_block ul.news li.col .body h3 {\r\n    font-size: 16px;\r\n    line-height: 1.6;\r\n    font-family: gothammedium;\r\n    font-weight: normal;\r\n}\r\n\r\n.news_block ul.news li.col  .item-wrapper.col{\r\n    padding-bottom: 100px;\r\n}\r\n.artistNews .view-more-wrapper{\r\n  margin: 40px auto 60px;\r\n}\r\n@media only screen and (max-width: 1023px){\r\n  .block-title-wrapper.newsBlock.left{\r\n    text-align: center;\r\n  }\r\n  .artistNews {\r\n    max-width: 90%;\r\n  } \r\n}\r\n@media only screen and (max-width: 767px){\r\n  .news_block ul.news li.col{\r\n    display: block;\r\n    width: 100%;\r\n    margin: 25px 0;\r\n    margin-bottom: 40px;\r\n  }\r\n  .news_block ul.news{\r\n    display: block;\r\n  }\r\n  .news_block ul.news li.col .body h3{\r\n    font-size: 18px ;\r\n  }\r\n}\r\n/* About News Block Styes ENDS */\r\n\r\n/*News Page Styles*/\r\n.block.news-list .Defaultview ul.news li .body h3{\r\n    font-family: gothammedium;\r\n    font-size: 18px;\r\n    color: #000;\r\n    font-weight: normal;\r\n}\r\n.block.news-list .Defaultview ul.news li .body h3:hover{\r\n    color: #359be9;\r\n}\r\n.news_block .Defaultview ul.news li  .item-wrapper.col{\r\n    padding-bottom: 25px;\r\n}\r\n.block.news-list .Defaultview ul.news li  .item-wrapper.col .ArtistNDateWrapper{\r\n  font-size: 14px;\r\n  font-family: gothambook;\r\n  color: #797979;\r\n  font-weight: normal;\r\n  letter-spacing: 0.5px;\r\n}\r\n.block.news-list .Defaultview ul.news li  .item-wrapper.col .ArtistNDateWrapper .created{\r\n    text-transform: capitalize;\r\n    font-size: 14px;\r\n    font-family: gothambook;\r\n    color: #797979;\r\n    font-weight: normal;\r\n    line-height: 2;\r\n    letter-spacing: 0.5px;\r\n}\r\n.block.news-list .Defaultview ul.news li  .item-wrapper.col .ArtistNDateWrapper .news-artist {\r\n    font-size: 14px;\r\n    color: #797979;\r\n    font-family: gothambook;\r\n    font-weight: normal;\r\n    letter-spacing: 0.5px;\r\n    display: inline-block;\r\n}\r\n.block.news-list .Defaultview ul.news li  .item-wrapper.col{\r\n    position: initial;\r\n}\r\n.block.news-list .featured-news ul.news li .item-wrapper.col .body .news-artist{\r\n    display: inline-block;\r\n    line-height: 3;\r\n}\r\n.block.news-list .featured-news ul.news li .item-wrapper.col .body .news-artist a{\r\n    font-size: 14px;\r\n    color: #359be9;\r\n    text-decoration: underline;\r\n    letter-spacing: 0.5px;\r\n}\r\n.block.news-list .featured-news ul.news li .item-wrapper.col .body .news-artist a:hover{\r\n    color: #fff;\r\n}\r\n.block.news-list .featured-news ul.news li .item-wrapper.col .body .read-more{\r\n    text-transform: uppercase;  \r\n}\r\n.block.news-list .featured-news ul.news li .item-wrapper.col .body .read-more a{\r\n    border: 1px solid #fff;\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    width: 185px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    display: block;\r\n    color: #fff;\r\n    cursor:pointer;\r\n}\r\n.block.news-list .featured-news ul.news li .item-wrapper.col .body .read-more a:hover {\r\n    background: #ffffff;\r\n    color: #1564a8;\r\n}\r\n.block.news-list .featured-news ul.news li .item-wrapper.col .body .read-more, .block.news-list .featured-news ul.news li .item-wrapper.col .body app-social-buttons{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n@media only screen and (min-width:768px){\r\n    div#pager {\r\n        padding: 0 90px 70px;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .block.news-list .featured-news ul.news li{\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    .block.news-list .featured-news ul.news li  .item-wrapper.col{\r\n        max-width: 1366px;\r\n        margin: 0 auto;\r\n        font-size: 0;\r\n        padding: 20px 110px 80px;\r\n    }\r\n    .block.news-list .featured-news ul.news li  .item-wrapper.col .thumbnail, .block.news-list .featured-news ul.news li  .item-wrapper.col .body{\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n    .block.news-list .featured-news ul.news li  .item-wrapper.col .thumbnail{\r\n        max-height: 275px;\r\n        width: 490px;\r\n        margin-right: 75px;\r\n    }\r\n    .block.news-list .featured-news ul.news li .item-wrapper.col .body {\r\n        width: calc(100% - 565px);\r\n        font-size: 14px;\r\n    }\r\n    .block.news-list .featured-news ul.news li .item-wrapper.col .body h3{\r\n        font-family: gothambook;\r\n        font-size: 20px;\r\n        font-weight: normal;\r\n        letter-spacing: 1px;\r\n        margin: 0;\r\n    }\r\n    .block.news-list .featured-news ul.news li .item-wrapper.col .body .created{\r\n        font-family: gothambook;\r\n        font-size: 14px;\r\n        font-weight: normal;\r\n        text-transform: none;\r\n        color: #fff;\r\n        line-height: 1;\r\n        padding-top: 10px;\r\n        letter-spacing: 0.5px;\r\n        margin: 0;\r\n    }\r\n    .block.news-list .Defaultview ul.news{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n        margin: 0;\r\n    }\r\n    .news_block .Defaultview ul.news li  .item-wrapper.col{\r\n        padding-bottom: 75px;\r\n    }\r\n    .block.news-list .Defaultview ul.news li {\r\n        width: calc(25% - 30px);\r\n        display: inline-block;\r\n        margin: 0;\r\n        padding: 0;\r\n        box-sizing: border-box;\r\n        margin: 0 40px 53px 0;\r\n        position: relative;\r\n    }\r\n    .block.news-list .Defaultview ul.news li  .item-wrapper.col .ArtistNDateWrapper{\r\n        position: absolute;\r\n        bottom: 0;\r\n    }\r\n    .block.news-list .featured-news ul.news{\r\n        margin: 0;\r\n    }\r\n}\r\n@media only screen and (min-width:1024px){\r\n    .block.news-list .Defaultview ul.news li:nth-child(4n) {\r\n         margin-right: 0;\r\n    }\r\n}    \r\n@media only screen and (min-width:768px ) and (max-width: 1200px){\r\n     .block.news-list .featured-news ul.news li  .item-wrapper.col{\r\n        max-width: 90%;\r\n        margin: 0 auto;\r\n      \r\n    }\r\n    .block.news-list .featured-news ul.news li  .item-wrapper.col .thumbnail{\r\n        max-height: 250px;\r\n        width: 35%;\r\n        margin-right: 5%;\r\n    }\r\n    .block.news-list .featured-news ul.news li .item-wrapper.col .body {\r\n        width: 60%;\r\n        font-size: 14px;\r\n    }\r\n    .block.news-list .featured-news ul.news li  .item-wrapper.col{\r\n        padding: 20px 0 80px;\r\n    }\r\n}\r\n@media only screen and (min-width:768px ) and (max-width: 1023px){\r\n    .block.news-list .Defaultview ul.news li {\r\n        width: calc(33.3% - 26.6px);\r\n        display: inline-block;\r\n        margin: 0 0 40px 0;\r\n        padding: 0;\r\n        box-sizing: border-box;\r\n        margin-right: 40px;\r\n        position: relative;\r\n    }\r\n    .block.news-list .Defaultview ul.news li:nth-child(3n) {\r\n        margin-right: 0;\r\n    }\r\n    div#pager {\r\n        padding: 0 90px 60px;\r\n    }\r\n}\r\n.pageing {\r\n    padding: 0 ;\r\n    box-sizing: border-box;\r\n    max-width: 1366px;\r\n    margin: 0 auto;\r\n\r\n}\r\n@media only screen and (max-width:1023px ){\r\n    .block.news-list ul.news li .body h3, .block.news-list .Defaultview ul.news li .body h3{\r\n        font-size: 16px;\r\n        padding-top: 10px;\r\n    }\r\n    .block.news-list ul.news li  .item-wrapper.col .ArtistNDateWrapper, .block.news-list ul.news li  .item-wrapper.col .ArtistNDateWrapper .created, .block.news-list ul.news li  .item-wrapper.col .ArtistNDateWrapper .news-artist, div#pager{\r\n        font-size: 15px;\r\n    }\r\n}\r\n@media only screen and (max-width:767px ){\r\n    .pageing {\r\n        padding-bottom: 50px !important;\r\n        text-align: center;\r\n    }\r\n    .item-wrapper {\r\n        padding: 0 0 30px 0; \r\n    }\r\n    .block.about-news-list.RecomededReadsContents .news_block ul.news li.col .body h3{\r\n        font-size: 16px ;\r\n    }\r\n}   \r\n/*News Page Styles ENDs*/\r\n\r\n\r\n/*pager Style*/\r\ndiv#pager {\r\n    background: #ebebeb;\r\n    text-align: right;\r\n}\r\n\r\ndiv#pager li {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n}\r\ndiv#pager li:first-child{\r\n    padding-right:0;\r\n}\r\ndiv#pager li:last-child {\r\n    padding-left: 0;\r\n}\r\n\r\ndiv#pager li a ,div#pager li  {\r\n    color: #000;\r\n    cursor:pointer;\r\n}\r\n\r\ndiv#pager li.navigator.disabled a, div#pager li.active {\r\n    color: grey;\r\n}\r\n.block.news-list ul.news li:hover .item-wrapper.col .thumbnail:before, .about-news-list.RecomededReadsContents ul.news li:hover .item-wrapper.col .thumbnail:before{\r\n    background: rgba(235,235,235,0.75);\r\n}\r\n.block.news-list .featured-news ul.news li .item-wrapper.col .thumbnail:before{\r\n   background: transparent;\r\n}\r\nli:hover .item-wrapper.col .body h3{\r\n    color: #0061ab;\r\n}\r\n.block.news-list ul.news li:hover .item-wrapper.col .body h3{\r\n    color: #0061ab;\r\n}\r\n/*.block.news-list .featured-news ul.news li:hover .item-wrapper.col .body h3{\r\n    color: #fff;\r\n}\r\n.block.news-list .featured-news ul.news li .item-wrapper.col .body h3:hover{\r\n    color: #0061ab;\r\n}\r\n*/\r\n.news_block.artistblockWrapper ul.news li.col{\r\n    width: 32.33%;\r\n    margin-right: 4%;\r\n    max-width: 32.33%;\r\n}\r\n.news_block.artistblockWrapper ul.news li:hover .item-wrapper.col .thumbnail:before{\r\n   /*background: rgba(53, 155, 233, 0.75);*/\r\n   background: rgba(0, 93, 170, 0.75)\r\n}\r\n.news_block.artistblockWrapper ul.news li:hover .item-wrapper.col .body h3,.news_block.artistblockWrapper ul.news li .item-wrapper.col .body h3:hover{\r\n    color: #359be9;\r\n}\r\n.news_block.artistblockWrapper ul.news{\r\n    margin: 0;\r\n}\r\n.page-node-type-artist .layout-content article.contextual-region {\r\n    display: none;\r\n}\r\nspan.artist-name{\r\n    display: inline-block;\r\n}\r\n@media only screen and (max-width:767px){\r\n    .news_block.artistblockWrapper ul.news li.col{\r\n        display: block;\r\n        width: 100%;\r\n        max-width: 100%;\r\n        margin: 25px 0;\r\n        margin-bottom: 40px;\r\n    }    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+news/news-block/news-block.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div #myDiv class=\"block {{customClass}}\">\r\n    <h2 *ngIf=\"headerText\">\r\n        <span [innerHTML]=\"headerText\"></span>\r\n    </h2>\r\n    <div *ngIf=\"!(newsblock || Artistnewsblock)\" class=\"Detailedpage\">\r\n        <!--<div class=\"block news viewport\" [ngSwitch]=\"switchCarouselTemplate\">-->\r\n        <div class=\"block news viewport\">\r\n            <!--<div *ngSwitchCase=\"1\">\r\n                <news-carousel *ngIf=\"newsMobileCarousel\" [blogs]=\"news\"></news-carousel>\r\n                <ul *ngIf=\"!newsMobileCarousel\" class=\"news {{cols}}\">\r\n                    <li class=\"col grid\" *ngFor=\"let n of (news | filterByArtist:field_artist_name) | slice:0:(count + moreNews)\" [class.selected]=\"n === selectedNews\">\r\n                        <div class=\"item-wrapper col\">\r\n                            <div (click)=\"gotoDetail(n)\" class=\"thumbnail\" [innerHTML]=\"n.thumbnail\"></div>\r\n                            <div class=\"body\">\r\n                                <h3 (click)=\"gotoDetail(n)\" [innerHTML]=\"n.title\"></h3>\r\n                                <div *ngIf=\"!minimal\" class=\"created\">{{n.created}}</div>\r\n                                <span>In This Post</span>\r\n                                <div *ngIf=\"!minimal\" class=\"news-artist\" [innerHTML]=\"n.field_tags\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>-->\r\n            <div *ngIf=\"desktopResolution\" (window:resize)=\"onResize($event)\" class=\"featured-news\">\r\n                <ul class=\"news {{cols}}\">\r\n\r\n                    <!--li class=\"\" *ngFor=\"let n of (featuredNews) | slice:0:(1 + moreNews)\" [class.selected]=\"n === selectedNews\"!-->\r\n                    <li class=\"test\" *ngIf=\"test\">\r\n\r\n                        <div class=\"item-wrapper col\">\r\n                            <div (click)=\"gotoDetail(featurednewssingle)\" class=\"thumbnail\" [innerHTML]=\"featurednewssingle.thumbnail|FilterMultipleImages\"></div>\r\n                            <div class=\"body\">\r\n                                <h3 (click)=\"gotoDetail(featurednewssingle)\" [innerHTML]=\"featurednewssingle.title\"></h3>\r\n                                <div *ngIf=\"!minimal\" class=\"created\">{{featurednewssingle.created}}</div>\r\n\r\n                                <div class=\"InThisPost\" *ngIf=\"featurednewssingle.field_tags\">\r\n                                    <span>In This Post</span>\r\n                                    <div *ngIf=\"!minimal\" class=\"news-artist\" [innerHTML]=\"featurednewssingle.field_tags\"></div>\r\n                                </div>\r\n                                <div class=\"readNShare\">\r\n                                    <div *ngIf=\"!minimal\" class=\"read-more\">\r\n                                        <a (click)=\"gotoDetail(featurednewssingle)\">Read article</a>\r\n                                    </div>\r\n                                    <app-social-buttons [pagetitle]=\"featurednewssingle.title\" [link]=\"featurednewssingle.shareLink\" [googlePlus]=\"false\" [mailto]=\"false\"></app-social-buttons>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"desktopResolution && !ifOnlyOneNews\" (window:resize)=\"onResize($event)\" class=\"Defaultview Desk\">\r\n                <ul class=\"news {{cols}}\">\r\n                    <li class=\"\" *ngFor=\"let n of (news) | slice:0:(count + moreNews)\" [class.selected]=\"n === selectedNews\">\r\n\r\n                        <div class=\"item-wrapper col\">\r\n                            <div (click)=\"gotoDetail(n)\" class=\"thumbnail\" [innerHTML]=\"n.thumbnail|FilterMultipleImages\"></div>\r\n                            <div class=\"body\">\r\n                                <h3 (click)=\"gotoDetail(n)\" [innerHTML]=\"n.title\"></h3>\r\n                                <div class=\"ArtistNDateWrapper\">\r\n                                    <div *ngIf=\"!minimal\" class=\"created\">{{n.created}}</div>\r\n                                    <!--div *ngIf=\"!minimal\" class=\"news-body\" [innerHTML]=\"n.body\"></div-->\r\n                                    <div class=\"InThisPost\" *ngIf=\"n.field_tags\">\r\n                                        <span>In This Post</span>\r\n                                        <div *ngIf=\"!minimal\" class=\"news-artist\" [innerHTML]=\"n.field_tags\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div *ngIf=\"mobilereolution\" (window:resize)=\"onResize($event)\" class=\"Defaultview Desk\">\r\n                <ul class=\"news {{cols}}\">\r\n                    <li class=\"\" *ngFor=\"let n of (news) | slice:0:(count + moreNews)\" [class.selected]=\"n === selectedNews\">\r\n                        <div class=\"item-wrapper col\">\r\n                            <div (click)=\"gotoDetail(n)\" class=\"thumbnail\" [innerHTML]=\"n.thumbnail|FilterMultipleImages\"></div>\r\n                            <div class=\"body\">\r\n                                <h3 (click)=\"gotoDetail(n)\" [innerHTML]=\"n.title\"></h3>\r\n                                <div class=\"ArtistNDateWrapper\">\r\n                                    <div *ngIf=\"!minimal\" class=\"created\">{{n.created}}</div>\r\n                                    <!--div *ngIf=\"!minimal\" class=\"news-body\" [innerHTML]=\"n.body\"></div-->\r\n                                    <div class=\"InThisPost\" *ngIf=\"n.field_tags\">\r\n                                        <span>In This Post</span>\r\n                                        <div *ngIf=\"!minimal\" class=\"news-artist\" [innerHTML]=\"n.field_tags\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div *ngIf=\"pager.pages && pager.pages.length>1\" id=\"pager\">\r\n                <div class=\"pageing\">\r\n                    <ul>\r\n                        <li (click)=\"setPage(pager.currentPage - 1)\" class=\"navigator\" [ngClass]=\"{disabled: pager.currentPage === 1}\">\r\n                            <a>\r\n                                Prev</a>\r\n                        </li>\r\n                        <li (click)=\"setPage(1)\" *ngIf=\"pager.currentPage > 6\">1</li>\r\n                        <li *ngIf=\"pager.currentPage > 4\">...</li>\r\n                        <li (click)=\"setPage(page)\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">{{page}}</li>\r\n                        <li *ngIf=\"pager.currentPage < pager.totalPages - 4\">...</li>\r\n                        <li (click)=\"setPage(pager.totalPages)\" *ngIf=\"pager.currentPage < (pager.totalPages - 3) && pager.totalPages > 6\">{{pager.totalPages}}</li>\r\n                        <li (click)=\"setPage(pager.currentPage + 1)\" class=\"navigator\" [ngClass]=\"{disabled: pager.currentPage === pager.totalPages}\">\r\n                            <a>Next</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"news_block\">\r\n        <ul *ngIf=\"newsblock\" class=\"news\">\r\n            <li class=\"col\" *ngFor=\"let n of (news | FilterByNewsID:newsIDFilter)| slice:0:(count + moreNews)\" [class.selected]=\"n === selectedNews\">\r\n                <div class=\"item-wrapper col\">\r\n                    <div (click)=\"gotoDetail(n)\" class=\"thumbnail\" [innerHTML]=\"n.thumbnail|FilterMultipleImages\"></div>\r\n                    <div class=\"body\">\r\n                        <h3 (click)=\"gotoDetail(n)\" [innerHTML]=\"n.title\"></h3>\r\n                        <div class=\"ArtistNDateWrapper\">\r\n                            <div *ngIf=\"!minimal\" class=\"created\">{{n.created}}</div>\r\n                            <div class=\"InThisPost\" *ngIf=\"n.field_tags\">\r\n                                <span>In This Post</span>\r\n                                <div *ngIf=\"!minimal\" class=\"news-artist\" [innerHTML]=\"n.field_tags\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div *ngIf=\"Artistnewsblock\" class=\"news_block artistblockWrapper\">\r\n        <ul class=\"news {{cols}}\">\r\n\r\n            <li class=\"col\" *ngFor=\"let n of (artistblocknews) | slice:0:count\" [class.selected]=\"n === selectedNews\">\r\n\r\n                <div class=\"item-wrapper col\">\r\n                    <div (click)=\"gotoDetail(n)\" class=\"thumbnail\" [innerHTML]=\"n.thumbnail|FilterMultipleImages\"></div>\r\n                    <div class=\"body\">\r\n                        <h3 (click)=\"gotoDetail(n)\" [innerHTML]=\"n.title\"></h3>\r\n                        <div class=\"ArtistNDateWrapper\">\r\n                            <div *ngIf=\"!minimal\" class=\"created\">{{n.created}}</div>\r\n                            <div class=\"InThisPost\" *ngIf=\"n.field_tags\">\r\n                                <span>In This Post</span>\r\n                                <div *ngIf=\"!minimal\" class=\"news-artist\" [innerHTML]=\"n.field_tags\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <div class=\"noNews\" *ngIf=\"artistblocklength == 0 \">\r\n                <div class=\"no-results-behaviour\">No recent updates available for\r\n                    <span class=\"artist-name\">{{ArtistNamePassed}}.</span> Click the link below for more WMN news and updates.</div>\r\n            </div>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+news/news-block/news-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__("../../../../../src/app/+news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pager_service__ = __webpack_require__("../../../../../src/app/shared/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsBlockComponent = /** @class */ (function () {
    function NewsBlockComponent(_newsService, _router, pagerService) {
        this._newsService = _newsService;
        this._router = _router;
        this.pagerService = pagerService;
        this.detailPath = "/news";
        this.minimal = false;
        this.viewMore = false;
        this.featured = false;
        this.newsblock = false;
        this.Artistnewsblock = false;
        this.type = "news";
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.noData = true;
        this.newsMobileCarousel = false;
        //public slicenumber: number = 1;
        this.ifOnlyOneNews = false;
        this.pager = {};
        this.pagedItems = 0;
        this.offset = 0;
        this.firstInit = true;
        this.mobilereolution = false;
        this.desktopResolution = false;
        this.switchCarouselTemplate = 0;
        this.moreNews = 0;
        this.artistblocklength = 0;
        this.field_artist_name = "";
        this.artistname = "";
        this.nextDisable = false;
        this.test = false;
    }
    NewsBlockComponent.prototype.triggerFalseClick = function () {
        var el = this.myDiv.nativeElement;
        el.click();
    };
    NewsBlockComponent.prototype.ngAfterViewInit = function () {
        // this.triggerFalseClick();
    };
    // this.ngZone.run(() => {
    //     console.log("anim complete");
    //     this.rightVisible = false;
    //   });
    NewsBlockComponent.prototype.getNews = function () {
        var _this = this;
        this._newsService.getPagernews(this.firstInit, this.offset, this.field_artist_name, this.featured).subscribe(function (data) {
            _this.news = data;
            if (_this.firstInit || !(_this.artistname == _this.field_artist_name)) {
                _this.pagedItems = data.length;
                setTimeout(function () {
                    _this.setPage(1);
                }, 1000);
                _this.firstInit = false;
                _this._newsService.getFeaturedNews(_this.field_artist_name, _this.featured).subscribe(function (data) {
                    _this.featuredNews = data;
                    _this.featurednewssingle = _this.featuredNews[0];
                    if (_this.featurednewssingle) {
                        //  console.info("featured news"+this.featurednewssingle.title);
                        _this.test = true;
                        // console.info(this.test);
                    }
                }, function (err) { return console.error(err); }, function () {
                    console.log('done');
                    // this.featurednewssingle= this.featuredNews[0];
                    // if(this.featurednewssingle){
                    //     console.info("featured news"+this.featurednewssingle.title);
                    // }
                });
                _this.artistname = _this.field_artist_name;
            }
        }, function (err) { return console.error(err); }, function () {
            // for (let index in this.news) {
            //     console.info(this.news[index].field_tags);
            //      this.news[index].field_tags=Utils.getroutinglink(this.news[index].field_tags);
            //      this.news[index].field_tags.toString;
            //      console.info( this.news[index].field_tags.toString);
            //  }
            //console.info("This nid done"+this.news.length);
            // console.log('done');
            if (_this.news.length <= 2) {
                _this.ifOnlyOneNews = true;
            }
            else {
                _this.ifOnlyOneNews = false;
            }
        });
        return this.news;
    };
    NewsBlockComponent.prototype.gotoDetail = function (news) {
        this.onClose.emit(true);
        var id;
        this.selectedNews = news;
        id = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getSlug(this.selectedNews.path);
        var link = ['/news', id];
        this._router.navigate(link);
    };
    NewsBlockComponent.prototype.gotoArtistDetail = function (artist) {
        var id;
        id = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getanchorhref(artist);
        //console.info("This is genrated URL"+id);
        var link = [id];
        this._router.navigate(link);
    };
    NewsBlockComponent.prototype.fetchNextPage = function () {
        var _this = this;
        this.moreNews = this.moreNews + this.count;
        this._newsService.loadmoreNews(this.moreNews, this.category).subscribe(function (data) {
            _this.news = _this.news.concat(data);
            if (data.length == 0 || data.length < (_this.count + 1)) {
                _this.noData = false;
            }
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    NewsBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.getartistnews();
        if (window.screen.width < 767) {
            this.newsMobileCarousel = true;
        }
        this.news = this.getNews();
        if (!this.cols) {
            this.cols = "grid-4_xs-1"; //Have this on the build.
        }
        if (!this.featured) {
            this.news = this.getNews();
            this._newsService.getNodeCount(this.type, this.field_artist_name).subscribe(function (data) {
                _this.getNews();
                _this.totalNewsItems = parseInt(data[0].count);
            }, function (err) { return console.error(err); }, function () {
            });
        }
        if (window.screen.width < 767) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        else {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    NewsBlockComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.getartistnews();
        window.scroll(0, 0);
        if (!(this.artistname == this.field_artist_name)) {
            this._newsService.getNodeCount(this.type, this.field_artist_name).subscribe(function (data) {
                _this.totalNewsItems = parseInt(data[0].count);
                _this.setPage(1);
            }, function (err) { return console.error(err); }, function () {
            });
        }
    };
    NewsBlockComponent.prototype.getartistnews = function () {
        var _this = this;
        if (this.Artistnewsblock) {
            this._newsService.getArtistNews(this.artistid).subscribe(function (data) {
                _this.artistblocknews = data;
            }, function (err) { return console.error(err); }, function () {
                console.log('done');
                _this.artistblocklength = _this.artistblocknews.length;
            });
        }
    };
    NewsBlockComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 767) {
            this.newsMobileCarousel = true;
        }
        else {
            this.newsMobileCarousel = false;
        }
        if (event.target.innerWidth < 767) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        else {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    NewsBlockComponent.prototype.setPage = function (pageNumber) {
        if (pageNumber < 1 || pageNumber > this.pager.totalPages) {
            return;
        }
        else {
            this.pager = this.pagerService.getPager(this.totalNewsItems, pageNumber, this.pagedItems);
            //  console.info("total page number"+  this.pager.totalPages);
            this.offset = (pageNumber - 1) * this.pagedItems;
            if (!this.firstInit) {
                // if (pageNumber >= 2) {
                //     this.slicenumber = 0;
                // }
                // else {
                //     this.slicenumber = 1;
                // }
                this.getNews();
            }
            if (this.pager.currentPage === this.pager.totalPages) {
                this.nextDisable = true;
            }
            window.scroll(0, 0);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewsBlockComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewsBlockComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsBlockComponent.prototype, "detailPath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsBlockComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsBlockComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewsBlockComponent.prototype, "minimal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsBlockComponent.prototype, "headerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewsBlockComponent.prototype, "viewMore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewsBlockComponent.prototype, "featured", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewsBlockComponent.prototype, "newsblock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewsBlockComponent.prototype, "Artistnewsblock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsBlockComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsBlockComponent.prototype, "ArtistNamePassed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsBlockComponent.prototype, "newsIDFilter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NewsBlockComponent.prototype, "onClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NewsBlockComponent.prototype, "totalNewsItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NewsBlockComponent.prototype, "switchCarouselTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NewsBlockComponent.prototype, "featuredNews", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NewsBlockComponent.prototype, "news", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NewsBlockComponent.prototype, "artistblocknews", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsBlockComponent.prototype, "field_artist_name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsBlockComponent.prototype, "artistid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myDiv'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], NewsBlockComponent.prototype, "myDiv", void 0);
    NewsBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news-block',
            template: __webpack_require__("../../../../../src/app/+news/news-block/news-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+news/news-block/news-block.component.css")],
            host: {
                '(window:resize)': 'onResize($event)'
            },
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_pager_service__["a" /* PagerService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__news_service__["b" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__news_service__["b" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_pager_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_pager_service__["a" /* PagerService */]) === "function" && _d || Object])
    ], NewsBlockComponent);
    return NewsBlockComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=news-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/+news/news-carousel/news-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li.items {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    vertical-align: top;\r\n}\r\nul.item-list.carousel{\r\n    display: inline-block;\r\n    width: 100%;\r\n    overflow: visible;\r\n}\r\n.title a {\r\n    color: #fff;\r\n    line-height: 1.1;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    letter-spacing: 2px;\r\n}\r\n.carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 70px;\r\n    background-color: rgba(29,30,32,0.86);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0 10px;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    cursor: pointer;\r\n    z-index: 2;\r\n    background-image: url(/assets/i/arrows.png);\r\n    background-repeat: no-repeat;\r\n    background-position: calc(70px/2 - 3px) center;\r\n    background-position: -webkit-calc(70px/2 - 3px) center;\r\n    color: transparent;\r\n    text-indent: -999px;\r\n    overflow: hidden;\r\n}\r\n.carousel-nav .carousel-next{\r\n    left: unset;\r\n    right: 0;\r\n    background-position: calc(-104px / 2 + 3px) center;\r\n    background-position: -webkit-calc(-104px / 2 + 3px) center;\r\n}\r\n.carousel-dots {\t\t\t\r\n    bottom: 5%;\r\n    display: inline-block;\r\n    height: auto;\r\n    left: 50%;\r\n    position: absolute;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    -webkit-transform: -webkit-translateX(-50%);\r\n            transform: -webkit-translateX(-50%);\r\n    width: auto;\r\n}\r\nspan.carousel-dot {\r\n    background-color: #ffffff;\r\n    border: 1px solid #ffffff;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    height: 7px;\r\n    margin-right: 10px;\r\n    width: 7px;\r\n}\r\nspan:last-child {\r\n    margin-right: 0;\r\n}\r\nspan.carousel-dot.active {\r\n    background-color: red;\r\n}\r\n.carousel-stage {\r\n    -ms-touch-action: pan-y !important;\r\n        touch-action: pan-y !important;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .thumbnail {\r\n        margin-bottom: 10px;\r\n    }\r\n    .carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n        width: 20px;\r\n        background-position: calc(20px/2 - 3px) center;\r\n        background-position: -webkit-calc(20px/2 - 3px) center;\r\n    }\r\n    .carousel-nav .carousel-next{\r\n        background-position: calc(-154px / 2 + 3px) center;\r\n        background-position: -webkit-calc(-154px / 2 + 3px) center;\r\n    }\r\n    carousel, news-carousel {    \r\n        padding: 0;\r\n        box-sizing: border-box;\r\n        -webkit-box-sizing: border-box;\r\n        padding-right: 40px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+news/news-carousel/news-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel viewport\">\r\n<ul *ngIf=\"createCarousel\" class=\"item-list carousel\" >\r\n    <div class=\"carousel-stage\" [style.width] = \"carouselWidth\" [style.transform] = \"transformNode\" [style.transition] = \"transitionValue\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\r\n        <li class=\"col grid\" *ngFor=\"let n of duplicate; let i = index\" [style.width] = \"elementWidth\" class=\"items item-no-{{i}}\" [class.clone]=\"n.clone\" >\r\n            <div class=\"item-wrapper col\">\r\n                <div (click)=\"gotoDetail(n)\" class=\"thumbnail\" [innerHTML]=\"n.thumbnail\"></div>\r\n                <div class=\"body\">\r\n                    <div *ngIf=\"!minimal\" class=\"created\">{{n.created}}</div>\r\n                    <h3 class=\"title\"><a [routerLink]=\"[n.path]\" (click)=\"gotoDetail(n)\" [innerHTML] = \"n.title\"></a></h3>\r\n                    <div *ngIf=\"!minimal\" [innerHTML]=\"n.body\"></div>                    \r\n                </div>\r\n                <div *ngIf=\"!minimal\" class=\"footer\">                    \r\n                    <div class=\"readMore\" (click)=\"gotoDetail(n)\" >Continue Reading &rarr;</div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </div>\r\n</ul>\r\n<div class=\"carousel-controls\">\r\n    <div class=\"carousel-nav\" [style.display]=\"showNav\">\r\n        <div class=\"carousel-prev\" [style.display]=\"PreviousNav\" (click)=\"previousItem()\" >prev</div>\r\n        <div class=\"carousel-next\" [style.display]=\"NextNav\" (click)=\"nextItem()\" >next</div>\r\n    </div>\r\n    <div class=\"carousel-dots\" [style.display]=\"showDots\">\t\t\t\t\r\n        <span *ngFor=\"let dot of dotCounts; let i = index;\" class=\"carousel-dot\"></span>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+news/news-carousel/news-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsCarouselComponent = /** @class */ (function (_super) {
    __extends(NewsCarouselComponent, _super);
    function NewsCarouselComponent(element) {
        var _this = _super.call(this) || this;
        _this.node = element;
        _this.newspagecarousel = true;
        _this.carouselLength = 4;
        _this.options = {
            itemCount: 1,
            showDots: false,
            showNav: false,
            animationSpeed: 0.5,
            autoplay: false,
            loop: true
        };
        return _this;
    }
    NewsCarouselComponent.prototype.ngOnInit = function () {
    };
    NewsCarouselComponent.prototype.ngOnChanges = function () {
        if (this.blogs.length == this.carouselLength) {
            this.duplicate = this.blogs.slice(0, 4);
            this.init();
            this.newspagecarousel = true;
            this.createCarousel = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NewsCarouselComponent.prototype, "blogs", void 0);
    NewsCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'news-carousel',
            template: __webpack_require__("../../../../../src/app/+news/news-carousel/news-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+news/news-carousel/news-carousel.component.css")],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], NewsCarouselComponent);
    return NewsCarouselComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__["a" /* CarouselComponent */]));

//# sourceMappingURL=news-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/+news/news-detail/news-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    min-height: 0;\r\n}\r\n.block {\r\n color:#1b214e;\r\n font-size: 19px;\r\n}\r\n.g-layout{\r\n    padding: 0;\r\n}\r\n.news_header_block {\r\n    display: block;\r\n    width: 100%;\r\n    background: #000;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\nul.breadcrumb.news-detail {\r\n    text-align: left;\r\n}\r\nul.breadcrumb.news-detail li a{\r\n    color:#fff;\r\n}\r\n.g-layout h2 {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    padding-top: 10px;\r\n    letter-spacing: 2px;\r\n    line-height: 1.2;\r\n    padding-bottom: 30px;\r\n}\r\n.thumbnail /deep/ img {\r\n    max-width: 100%;\r\n    width: auto;\r\n    height: auto;\r\n}\r\nimg {\r\n    width: auto;\r\n}\r\napp-twitter-embed {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-bottom: 20px;\r\n}\r\n.created{\r\n    color: #fff;\r\n    font-size: 19px;\r\n    padding: 40px 0 20px 0;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n}\r\n.block p a{\r\n color:#359BE9;\r\n}\r\n\r\n.g-layout img {\r\n    width:100%;\r\n    height:auto;\r\n}\r\n.button{\r\n    border: 1px solid;\r\n    border-radius: 5px;\r\n}\r\n.button:hover{\r\n    background: #1b214e;\r\n    color: #807c9c;\r\n}\r\n.news-body{\r\n    margin-bottom: 25px;\r\n    line-height: 1.6;\r\n    letter-spacing: 1px;\r\n    font-size: 17px;\r\n}\r\n.news-body /deep/ a{\r\n    color:#359BE9;\r\n    font-weight: 600;\r\n    text-decoration: underline;\r\n}\r\n.news-body /deep/ a:hover{\r\n    text-decoration: none;\r\n    color:#74c8e9;\r\n}\r\n@media screen and (min-width:1024px){\r\n    .content{\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        padding-top:0;\r\n\r\n    }\r\n}\r\n@media screen and (max-width:768px){\r\n    ul.breadcrumb.news-detail {\r\n        text-align: center;\r\n    }\r\n    ul.breadcrumb.news-detail li a {\r\n        font-size: 13px;\r\n    }\r\n}\r\n@media screen and (max-width:768px){\r\n    .side_drawer.show {\r\n        width: 100%;\r\n    }\r\n    .side_drawer {\r\n        right: -100%;\r\n    }\r\n    .side_drawer.show .comment-header {\r\n        position: fixed;\r\n        width: 100%;\r\n        top: 0;\r\n        right: 0;\r\n        left: 0;\r\n        box-sizing: border-box;\r\n    }\r\n    .fly-social-block {\r\n        display: inline-block;\r\n        width: 100%;\r\n        height: auto;\r\n        position: fixed !important;\r\n        bottom: -100px;\r\n        z-index: 8;\r\n        margin: 0;\r\n        left: 0;\r\n        padding: 0 0 10px;\r\n        transition: bottom 0.5s ease;\r\n    }\r\n    .fly-social-block.fixed {\r\n        position: fixed !important;\r\n        bottom: 0;\r\n        -webkit-backface-visibility: hidden;\r\n        backface-visibility: hidden;\r\n        -webkit-overflow-scrolling: touch;\r\n        background-color: rgba(255,255,255,0.5);\r\n    }\r\n}\r\n\r\n/*Flippy*/\r\n\r\n.flippy-news {\r\n    margin-top: 43px;\r\n}\r\n.flippy-news .content > div {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n.flippy-news .content .left-content.thumbnail {\r\n    max-width: 308px;\r\n    width: 100%;\r\n}\r\n.flippy-news .content .right-content {\r\n    width: calc(100% - 308px);\r\n    width: -webkit-calc(100% - 308px);\r\n    padding-left: 5%;\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\r\n.left-content.thumbnail /deep/ img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.flippy-news .created {    \r\n    padding: 0;\r\n}\r\n.flippy-news .content .right-content h2{\r\n    font-size: 20px;\r\n    line-height: 1.2;\r\n    margin: 10px 0;\r\n    padding: 0;\r\n}\r\n.flippy-news .news-body{\r\n    margin-bottom: 10px;\r\n}\r\n.flippy-news .sub-title{\r\n    font-size: 19px;\r\n    border-bottom: 1px solid;\r\n    margin-bottom: 26px;\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding-bottom: 20px;\r\n    line-height: 1;\r\n}\r\n.flippy-news .readMore {\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-family: \"proxima-nova-condensed\";\r\n    font-size: 17px;\r\n    color: #359be9;\r\n    font-weight: 600;\r\n}\r\n@media screen and (max-width:768px){\r\n    .flippy-news .content > div.right-content, .flippy-news .content > div.left-content{\r\n        width: 100%;\r\n        max-width: 100%;\r\n        padding: 0;\r\n        margin-bottom: 10px;\r\n    }\r\n}\r\n\r\n\r\n/*News Detail page Styles*/\r\n\r\n.detail-list .news_header_block ul.breadcrumb.news-detail {\r\n    max-width: 97%;\r\n    margin: 0 auto;\r\n}    \r\n.detail-list .news_header_block ul.breadcrumb.news-detail li a {\r\n    font-size: 16px;\r\n    color: #1564a8;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    font-family: 'gothambook';\r\n    vertical-align: top;\r\n}\r\n.detail-list .news_header_block ul.breadcrumb.news-detail li a span.BBN{\r\n    font-size: 16px;\r\n    color: #15648a;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    font-family: 'gothambook';\r\n    vertical-align: middle;\r\n    line-height: 20px;\r\n}\r\n.detail-list .news_header_block ul.breadcrumb.news-detail li a:hover span.BBN, .detail-list .news_header_block ul.breadcrumb.news-detail li a:hover i::before{\r\n    color: #777777;\r\n    -webkit-text-decoration-skip: objects;\r\n    transition: all 1s ease 0s;\r\n    -webkit-transition: all 1s ease 0s;\r\n    -moz-transition: all 1s ease 0s;\r\n    -o-transition: all 1s ease 0s;\r\n    -ms-transition: all 1s ease 0s;\r\n}\r\n.detail-list .news_header_block ul.breadcrumb.news-detail li a:hover {\r\n  color: #777777;\r\n}\r\n.detail-list .news_header_block .titleWrap{\r\n    max-width: 920px;\r\n    margin: 80px auto 0;\r\n    font-family: gothambook;\r\n    color: #fff;\r\n    font-size: 14px;\r\n}\r\n.detail-list .news_header_block .titleWrap h2{\r\n    font-weight: normal;\r\n    font-size: 20px;\r\n    line-height: 1.6;\r\n    padding: 0 0 20px 0;\r\n}\r\n.detail-list .news_header_block .titleWrap .created{\r\n    font-weight: normal;\r\n    text-transform: none;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    padding: 0 0 15px 0;\r\n}\r\n.detail-list .news_header_block .titleWrap .news-artist {\r\n    display: inline-block;\r\n}\r\n.detail-list .body-thubnail-Wrapper{\r\n    overflow: hidden;\r\n    background: #ebebeb;\r\n}\r\n.detail-list .body-thubnail-Wrapper .news-body{\r\n    max-width: 920px;\r\n    margin: 0 auto;\r\n    color: #000;\r\n    padding: 20px 0 40px;\r\n    font-size: 18px;\r\n     font-family: 'crimson_textroman';\r\n}\r\n\r\n.detail-list .body-thubnail-Wrapper .newscarouselwrapper {\r\n    max-width: 750px;\r\n    margin: 0 auto;\r\n    text-align: CENTER;\r\n    overflow: hidden\r\n}\r\n.detail-list .body-thubnail-Wrapper .newscarouselwrapper  .newssingleImage {\r\n    padding: 60px 0 10px 0;\r\n}\r\n.detail-list .body-thubnail-Wrapper .newscarouselwrapper  .newsImagecouraosel {\r\n    display: block;\r\n    position: relative;\r\n    padding: 60px 0 100px 0;\r\n}\r\n.detail-list  .body-footer-socials{\r\n    max-width: 920px;\r\n    margin: 0 auto;\r\n    background: #000;\r\n    padding: 10px;\r\n    font-size: 0;\r\n    box-sizing: border-box;\r\n}\r\n.detail-list  .body-footer-socials span{\r\n    display: inline-block;\r\n    font-size: 12px;\r\n    color: #ebebeb;\r\n}\r\n.detail-list  .body-footer-socials .relatedArtisttags .relatedArtisttagsContent, .detail-list  .body-footer-socials .relatedArtisttags .relatedArtisttagsContent a{\r\n    display: inline-block;\r\n}\r\n@media only screen and (max-width:1023px){\r\n   .detail-list .body-thubnail-Wrapper .news-body, .detail-list .news_header_block .titleWrap, .detail-list .RecomededReads .RecomededReads-InnerWrapper, .detail-list .body-footer-socials.Mob{\r\n        max-width: 90%;\r\n        margin: 0 auto;\r\n   }\r\n     .detail-list  .social-block {\r\n        display:block !important;\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 50%;\r\n        z-index: 500;\r\n        -webkit-transform: translateX(-50%);\r\n                transform: translateX(-50%);\r\n        opacity: .8;\r\n    }\r\n    \r\n    .detail-list .breadcrumb-layout.news-detail, .detail-list .social-block{\r\n        display: none;\r\n    }\r\n     .detail-list  .body-footer-socials .relatedArtisttags{\r\n         text-align: center;\r\n        display: block;\r\n        width: 100%;\r\n        line-height: 1.5;\r\n        letter-spacing: 1px;\r\n     }\r\n    .detail-list  .body-footer-socials .relatedArtisttags span{\r\n        display: block;\r\n        font-size: 12px;\r\n        line-height: 30px;\r\n    }\r\n    .detail-list  .body-footer-socials .relatedArtisttags .relatedArtisttagsContent{\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width:767px){\r\n    .detail-list .body-thubnail-Wrapper .newscarouselwrapper {\r\n        padding: 30px 0 35px 0;\r\n        max-width: 280px;\r\n        margin: 0 auto;\r\n        text-align: CENTER;\r\n        overflow: visible;\r\n      \r\n    }\r\n    .detail-list .body-thubnail-Wrapper .newscarouselwrapper  .newssingleImage {\r\n    padding: 30px 0 10px 0;\r\n}\r\n    .detail-list .body-thubnail-Wrapper .newscarouselwrapper  .newsImagecouraosel {\r\n        padding: 30px 0 35px 0;\r\n        }\r\n    .detail-list .news_header_block .titleWrap h2,.detail-list .news_header_block .titleWrap,.detail-list .news_header_block .titleWrap .created{\r\n        font-size: 12px;\r\n    }\r\n    .detail-list .body-thubnail-Wrapper .news-body{\r\n         font-size: 16px;\r\n    }\r\n    .detail-list .body-footer-socials.Mob{\r\n        max-width: 100%;\r\n   }\r\n}\r\n\r\n@media only screen and (max-width:767px) and (orientation: landscape){\r\n}\r\n .detail-list .body-thubnail-Wrapper .newscarouselwrapper {\r\n    \r\n        overflow: hidden;\r\n      \r\n    }\r\n\r\n\r\n\r\n\r\n/*News Detail page Styles ENDs*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+news/news-detail/news-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div #newsdetail class=\"NewsdeatilOuterWrapper\">\r\n\t<div class=\"breadcrumb-wrapper news-detail\" *ngIf=\"news\">\r\n\r\n\t\t<div class=\"detail-list\">\r\n\t\t\t<div class=\"g-layout\">\r\n\t\t\t\t<div class=\"content\" *ngIf=\"news\">\r\n\t\t\t\t\t<div class=\"news_header_block\">\r\n\t\t\t\t\t\t<div class=\"g-layout breadcrumb-layout news-detail\">\r\n\t\t\t\t\t\t\t<ul class=\"breadcrumb news-detail\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/news']\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-caret-left\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"BBN\"> Back to news</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"titleWrap\">\r\n\t\t\t\t\t\t\t<h2 [innerHTML]=\"news.title\"></h2>\r\n\t\t\t\t\t\t\t<div class=\"created\">{{news.created}}</div>\r\n\t\t\t\t\t\t\t<div class=\"InThisPost\" *ngIf=\"news.field_tags\">\r\n\t\t\t\t\t\t\t\t<span>In This Post </span>\r\n\t\t\t\t\t\t\t\t<div class=\"news-artist\" [innerHTML]=\"news.field_tags\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"social-block\" *ngIf=\"id\">\r\n\t\t\t\t\t\t\t\t<app-social-buttons [pagetitle]=\"news.title\" [link]=\"news.shareLink\" [googlePlus]=\"false\" [mailto]=\"false\"></app-social-buttons>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"body-thubnail-Wrapper\">\r\n\t\t\t\t\t\t<div class=\"newscarouselwrapper\">\r\n\t\t\t\t\t\t\t<div class=\"newsImagecouraosel\" *ngIf=\"numberOfNewsimage > 1\">\r\n\t\t\t\t\t\t\t\t<news-img-carousel [artistImages]=\"newsImagePath\" [carouseln]=\"numberOfNewsimage\"></news-img-carousel>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"newssingleImage\" *ngIf=\"numberOfNewsimage == 1\">\r\n\t\t\t\t\t\t\t\t<div class=\"thumbnail\" [innerHTML]=\"news.thumbnail\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--app-twitter-embed *ngFor=\"let tweet of twitEmbed\" [tweetId]=\"tweet\"></app-twitter-embed-->\r\n\t\t\t\t\t\t<div *ngFor=\"let shtml of safeHtml\" [innerHTML]=\"shtml\" class=\"news-body\"></div>\r\n\t\t\t\t\t\t<div *ngIf=\"desktopResolution\" (window:resize)=\"onResize($event)\" class=\"body-footer-socials Desk\">\r\n\r\n\t\t\t\t\t\t\t<app-social-buttons [pagetitle]=\"news.title\" [link]=\"news.shareLink\" [googlePlus]=\"false\" [mailto]=\"false\"></app-social-buttons>\r\n\t\t\t\t\t\t\t<div class=\"relatedArtisttags\" *ngIf=\"news.field_tags\">\r\n\t\t\t\t\t\t\t\t<span>more on</span>\r\n\t\t\t\t\t\t\t\t<div class=\"relatedArtisttagsContent\" [innerHTML]=\"news.field_tags\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"mobilereolution && news.field_tags\" (window:resize)=\"onResize($event)\" class=\"body-footer-socials Mob\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"relatedArtisttags\">\r\n\t\t\t\t\t\t\t\t<span>more on</span>\r\n\t\t\t\t\t\t\t\t<div class=\"relatedArtisttagsContent\" [innerHTML]=\"news.field_tags\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!--div class=\"content\">\r\n\t\t\t\t<app-comments-sidedrawer [showSD]=\"showSideDrawer\" [id]=\"id\" (onCloseSideDrawer)=\"toggleSideDrawer()\"></app-comments-sidedrawer>\r\n\t\t\t</div-->\r\n\t\t\t\t<div class=\"RecomededReads\">\r\n\t\t\t\t\t<div class=\"RecomededReads-InnerWrapper\">\r\n\t\t\t\t\t\t<div class=\"block-title-wrapper newsBlock left\">\r\n\t\t\t\t\t\t\t<h2 class=\"block-title newsBlock\">Recommended Reads</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"desktopResolution\" (window:resize)=\"onResize($event)\" class=\"RecomededReadsContents Desk\">\r\n\t\t\t\t\t\t\t<app-news-block (onClose)=\"lightboxClose($event)\" [detailPath]=\"path\" [cols]=\"'grid-4_xs-1'\" [count]=\"4\" [customClass]=\"'about-news-list RecomededReadsContents'\"\r\n\t\t\t\t\t\t\t [newsblock]='true' [newsIDFilter]=\"news.nid\"></app-news-block>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"mobilereolution\" (window:resize)=\"onResize($event)\" class=\"RecomededReadsContents Mob\">\r\n\t\t\t\t\t\t\t<app-news-block (onClose)=\"lightboxClose($event)\" [detailPath]=\"path\" [cols]=\"'grid-3_xs-1'\" [count]=\"3\" [customClass]=\"'about-news-list RecomededReadsContents'\"\r\n\t\t\t\t\t\t\t [newsblock]='true' [newsIDFilter]=\"news.nid\"></app-news-block>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"mobilereolution\" (window:resize)=\"onResize($event)\" class=\"view-more-wrapper Mob\">\r\n\t\t\t\t\t\t\t<a class=\"newsDeatilpage view-more\" href=\"/news\">all news</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flippy-news\" *ngIf=\"nextNews\">\r\n\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t<h2 class=\"sub-title\">\r\n\t\t\t\t\t\t\t<span>next Article</span>\r\n\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t<div class=\"left-content thumbnail\" [innerHTML]=\"nextNews.thumbnail\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"right-content\">\r\n\t\t\t\t\t\t\t<div class=\"created\">{{news.created}}</div>\r\n\t\t\t\t\t\t\t<h2 [innerHTML]=\"nextNews.title\"></h2>\r\n\t\t\t\t\t\t\t<div [innerHTML]=\"nextNews.body\" class=\"news-body\"></div>\r\n\t\t\t\t\t\t\t<div class=\"readMore\" [routerLink]=\"[nextNews.path]\">Continue Reading &rarr;</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+news/news-detail/news-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/+news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent(_newsService, route, el, sanitizer) {
        this._newsService = _newsService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.isMobileMenu = false;
        this.minimal = false;
        this.showSideDrawer = false;
        this.tempId = "";
        this.firstTime = true;
        this.safeHtml = [];
        this.scrollEnd = 0;
        this.shareBlockHeight = 0;
        this.windowHeight = 0;
        this.flySocialHeight = 0;
        this.isFlySocialFixed = false;
        this.loadingDone = false;
        this.twitEmbed = [];
        this.currentNodeIndex = 0;
        this.mobilereolution = false;
        this.desktopResolution = false;
        this.node = el;
    }
    NewsDetailComponent.prototype.triggerFalseClick = function () {
        var el = this.newsdetail.nativeElement;
        el.click();
    };
    NewsDetailComponent.prototype.toggleSideDrawer = function (audio) {
        this.showSideDrawer = !this.showSideDrawer;
    };
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.safeHtml = [];
        if (this.node.nativeElement.clientWidth < 767) {
            this.isMobileMenu = true;
        }
        this.flySocial = this.node.nativeElement.querySelectorAll(".fly-social-block")[0];
        //console.log(this.flySocial);
        this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        //this.shareBlockHeight =  this.flySocial.scrollHeight;
        //this.scrollEnd = this.node.nativeElement.querySelectorAll(".detail-list .content")[0].scrollHeight;
        //console.log(this.flySocial.scrollHeight);
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
            _this._newsService.getNewsDetail(params['id']).subscribe(function (data) {
                _this.news = data[0];
                var fragElem = document.createElement("div");
                _this.newsImagePath = _this.news.thumbnail.split(",");
                _this.numberOfNewsimage = _this.newsImagePath.length;
                fragElem.innerHTML = _this.news.body.toString();
                var iframe = fragElem.querySelectorAll("iframe");
                var blockquote = fragElem.querySelectorAll("blockquote a");
                for (var i = 0; i < blockquote.length; i++) {
                    var src = blockquote[i].getAttribute("href");
                    src = src.substr(src.lastIndexOf("/") + 1, src.length);
                    _this.twitEmbed.push(src);
                }
                //console.info('iframe',fragElem.querySelectorAll("iframe")[0]);
                //conver the iframe dom to string
                for (var i = 0; i < iframe.length; i++) {
                    var el = document.createElement("div");
                    el.appendChild(iframe[i]);
                    _this.safeHtml.push(_this.sanitizer.bypassSecurityTrustHtml(el.innerHTML));
                }
                _this.safeHtml.push(_this.news.body.toString());
                //console.info("Safehtml"+this.safeHtml);
            }, function (err) { return console.error(err); }, function () {
                console.log('done');
                setTimeout(function () {
                    // this.triggerFalseClick();
                }, 1000);
            });
            _this._newsService.getNewsIdList(params['id']).subscribe(function (data) {
                _this.newsList = data;
                var i = 0;
                while (true) {
                    if (_this.newsList[i]) {
                        if (_this.newsList[i]["nid"]) {
                            if (_this.newsList[i]["nid"] == __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].getNID(_this.id)) {
                                _this.currentNodeIndex = i;
                                break;
                            }
                        }
                        i++;
                    }
                    else {
                        break;
                    }
                }
                //console.log('-------------------newsList--------------------------');
                //console.log(this.newsList);
                //console.log(this.currentNodeIndex);
                //console.log(this.previousNodeIndex);
                if (_this.currentNodeIndex == 0) {
                    _this.nextNodeIndex = _this.currentNodeIndex + 1;
                    _this.previousNodeIndex = 0;
                }
                else if (!_this.newsList[_this.currentNodeIndex + 1]) {
                    _this.nextNodeIndex = 0;
                    _this.previousNodeIndex = _this.currentNodeIndex - 1;
                }
                else {
                    _this.nextNodeIndex = _this.currentNodeIndex + 1;
                    _this.previousNodeIndex = _this.currentNodeIndex - 1;
                }
                if (_this.nextNodeIndex != 0) {
                    //this.nextArticle();
                }
                else {
                    _this.nextNews = undefined;
                }
            }, function (err) { return console.error(err); }, function () { return console.log('msgs', _this.newsList); });
        });
        window.scroll(0, 0);
        //this.loadNewsVideo();
        this.tempId = this.id;
        this.firstTime = false;
        if (window.screen.width < 1023) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        else {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    // ngOnChanges() {
    //   window.scroll(0, 0);
    //   if (!this.firstTime) {
    //   }
    // }
    NewsDetailComponent.prototype.lightboxClose = function (closed) {
        if (closed) {
            this.safeHtml = [];
        }
    };
    NewsDetailComponent.prototype.loadNewsVideo = function () {
        var _this = this;
        this._newsService.getNewsIdList(this.id).subscribe(function (data) {
            _this.news = data[0];
            var fragElem = document.createElement("div");
            fragElem.innerHTML = _this.news.body.toString();
            var iframe = fragElem.querySelectorAll("iframe")[0];
            //console.info('iframe',fragElem.querySelectorAll("iframe")[0]);
            /* conver the iframe dom to string */
            var el = document.createElement("div");
            el.appendChild(iframe.cloneNode(false));
            _this.safeHtml = _this.sanitizer.bypassSecurityTrustHtml(el.innerHTML);
            //this.news.body = this.sanitizer.bypassSecurityTrustHtml(this.news.body);
            //console.log("this.safeHtml "+this.safeHtml);
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    NewsDetailComponent.prototype.nextArticle = function () {
        var _this = this;
        this._newsService.getMinifiedNewsDetail("test-" + this.newsList[this.nextNodeIndex]['nid']).subscribe(function (data) { return _this.nextNews = data[0]; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    NewsDetailComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 767) {
            this.isMobileMenu = true;
            this.scrollEnd = this.flySocial.offsetTop;
            this.flySocialHeight = this.flySocial.clientHeight;
        }
        else {
            this.isMobileMenu = false;
            this.isFlySocialFixed = false;
        }
        if (event.target.innerWidth < 1023) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        else {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    // ngAfterViewChecked(): void {
    //   //alert(" alert"+this.myIdentifier.nativeElement.offsetWidth);
    // }
    NewsDetailComponent.prototype.onScroll = function (event) {
        if (this.isMobileMenu) {
            if (!this.loadingDone) {
                this.scrollEnd = this.flySocial.offsetTop;
                this.flySocialHeight = this.flySocial.clientHeight;
                this.isFlySocialFixed = true;
            }
            this.loadingDone = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newsdetail'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], NewsDetailComponent.prototype, "newsdetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__news_service__["News"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__news_service__["News"]) === "function" && _b || Object)
    ], NewsDetailComponent.prototype, "news", void 0);
    NewsDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__("../../../../../src/app/+news/news-detail/news-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+news/news-detail/news-detail.component.css")],
            host: {
                '(window:resize)': 'onResize($event)',
                '(window:scroll)': 'onScroll($event)'
            }
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__news_service__["b" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__news_service__["b" /* NewsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]) === "function" && _f || Object])
    ], NewsDetailComponent);
    return NewsDetailComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=news-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/+news/news-img-carousel/news-img-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li.items {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    \r\n}\r\nul.item-list.carousel{\r\n    display: inline-block;\r\n    width: 100%;\r\n    overflow: visible;\r\n}\r\n.carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 70px;\r\n   opacity: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0 10px;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    cursor: pointer;\r\n    z-index: 2;\r\n    background-image: url(/assets/i/arrows.png);\r\n    background-repeat: no-repeat;\r\n    background-position: calc(70px/2 - 3px) center;\r\n    background-position: -webkit-calc(70px/2 - 3px) center;\r\n    color: transparent;\r\n    text-indent: -999px;\r\n    overflow: hidden;\r\n}\r\n.carousel-nav .carousel-next{\r\n    left: unset;\r\n    right: 0;\r\n    background-position: calc(-104px / 2 + 3px) center;\r\n    background-position: -webkit-calc(-104px / 2 + 3px) center;\r\n}\r\n.carousel-dots {\t\t\t\r\n    bottom: 5%;\r\n    display: inline-block;\r\n    height: auto;\r\n    left: 50%;\r\n    position: absolute;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    -webkit-transform: -webkit-translateX(-50%);\r\n            transform: -webkit-translateX(-50%);\r\n    width: auto;\r\n}\r\nspan.carousel-dot {\r\n    background-color: #a3a3a3;\r\n    border: 1px solid #a3a3a3;\r\n    border-radius: 50%;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    height: 10px;\r\n    margin-right: 20px;\r\n    width: 10px;\r\n}\r\nspan:last-child {\r\n    margin-right: 0;\r\n}\r\nspan.carousel-dot.active {\r\n    background-color: #fff;\r\n     border: 1px solid #fff;\r\n   \r\n}\r\n.carousel-stage .thumbnail{\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 1;\r\n    line-height: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n}\r\n.carousel-stage .thumbnail img{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.carousel-stage .thumbnail img{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.carousel-stage .thumbnail .hover-node{\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n   opacity: 0;\r\n    cursor: -webkit-grab;\r\n}\r\n.carousel-stage .thumbnail:hover .hover-node{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.hover-node span {\r\n    display: inline-block;\r\n    width: 100%;\r\n    line-height: 1.3;\r\n    font-size: 22px;\r\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n}\r\n.hover-node span.main-title::before {\r\n    background-image: url(/assets/i/instagram-image.png);\r\n    background-repeat: no-repeat;\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 26px;\r\n    height: 26px;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n}\r\n.hover-node span.second-title {\r\n    /* font-weight: 300; */\r\n    font-size: 19px;\r\n    margin-bottom: 25px;\r\n}\r\n.hover-node .button {\r\n    border-color: #ffffff;\r\n    font-size: 15px;\r\n    padding: 0;\r\n    color: #ffffff;\r\n    font-weight: 500;\r\n    width: 122px;\r\n    letter-spacing: 2px;\r\n    line-height: 2;\r\n}\r\n.hover-node .button:hover {\r\n    color: #1b214e;\r\n}\r\n.carousel-dots {\r\n    bottom: initial;\r\n    padding-top: 80px;\r\n    display: inline-block;\r\n    height: auto;\r\n    left: 50%;\r\n    position: absolute;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    -webkit-transform: -webkit-translateX(-50%);\r\n    transform: -webkit-translateX(-50%);\r\n    width: auto;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    carousel-stage .thumbnail{\r\n    \r\n        max-width: 98%;\r\n    }\r\n    .carousel-dots {\r\n  \r\n        padding-top: 45px;\r\n    }\r\n    .carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n        width: 20px;\r\n        background-position: calc(20px/2 - 3px) center;\r\n        background-position: -webkit-calc(20px/2 - 3px) center;\r\n    }\r\n    .carousel-nav .carousel-next{\r\n        background-position: calc(-154px / 2 + 3px) center;\r\n        background-position: -webkit-calc(-154px / 2 + 3px) center;\r\n    }\r\n    carousel, app-artists-carousel {    \r\n        padding: 0 40px;\r\n        box-sizing: border-box;\r\n        -webkit-box-sizing: border-box;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+news/news-img-carousel/news-img-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-Outer-wrapper\">\n    <div class=\"carousel viewport\" >\n        <ul *ngIf=\"createCarousel\" class=\"item-list carousel\">\n            <div class=\"carousel-stage\" [style.width]=\"carouselWidth\" [style.transform]=\"transformNode\" [style.transition]=\"transitionValue\"\n                (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n                <li *ngFor=\"let artists of duplicate;let i = index\" [style.width]=\"elementWidth\" class=\"items item-no-{{i}}\" [class.clone]=\"artists.clone\">\n                    <div class=\"thumbnail\"><img [src]=\"artists\" />\n                    </div>\n\n\n\n                </li>\n            </div>\n        </ul>\n        <div class=\"carousel-controls\">\n            <div class=\"carousel-nav\">\n                <div class=\"carousel-prev\" [style.display]=\"PreviousNav\" (click)=\"previousItem()\">prev</div>\n                <div class=\"carousel-next\" [style.display]=\"NextNav\" (click)=\"nextItem()\">next</div>\n            </div>\n            <div class=\"carousel-dots\" [style.display]=\"showDots\">\n                <span *ngFor=\"let dot of dotCounts; let i = index;\" class=\"carousel-dot\" (click)=\"nextnthItem(i)\"></span>\n            </div>\n        </div>\n    </div>\n    <!--div  *ngIf=\"carouseln == 1\">\n        <h1>This is working</h1>\n    </div-->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/+news/news-img-carousel/news-img-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsImgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsImgComponent = /** @class */ (function (_super) {
    __extends(NewsImgComponent, _super);
    function NewsImgComponent(element) {
        var _this = _super.call(this) || this;
        _this.carouselimageURL = "";
        _this.node = element;
        _this.carouselLength = 2;
        _this.newspagecarousel = true;
        _this.options = {
            itemCount: 1,
            showDots: true,
            showNav: false,
            animationSpeed: 0.5,
            autoplay: false,
            loop: true,
            responsive: {
                "767": 1,
                "1200": 1,
                "1400": 1,
                "2700": 1
            }
        };
        return _this;
    }
    NewsImgComponent.prototype.ngOnInit = function () {
    };
    NewsImgComponent.prototype.ngOnChanges = function () {
        var _this = this;
        setInterval(function () {
            _this.loopthecarousel();
        }, 4000);
        this.carouselLength = this.carouseln;
        for (var index in this.artistImages) {
            this.artistImages[index] = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].getImageSrc(this.artistImages[index].toString());
            this.carouselimageURL = this.artistImages[index];
        }
        if (this.artistImages.length == this.carouselLength) {
            this.duplicate = this.artistImages.slice();
            this.init();
            this.createCarousel = true;
        }
        else {
        }
    };
    NewsImgComponent.prototype.loopthecarousel = function () {
        this.nextItem();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NewsImgComponent.prototype, "artistImages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NewsImgComponent.prototype, "carouseln", void 0);
    NewsImgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'news-img-carousel',
            template: __webpack_require__("../../../../../src/app/+news/news-img-carousel/news-img-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+news/news-img-carousel/news-img-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], NewsImgComponent);
    return NewsImgComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__["a" /* CarouselComponent */]));

//# sourceMappingURL=news-img-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/+news/news-list/news-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    width:100%;\r\n    height:auto;\r\n}\r\n.featured-news {\r\n    /*height: 100px;*/\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.featured-news:before {\r\n    content: \"\";\r\n    background: #000000;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.news-banner {\r\n    display: none;\r\n}\r\n.newsCategoryMenu .dropdrownWrapper ul.artists {\r\n    height: 400px;\r\n}\r\n.featured-news span {\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 0;\r\n    color: #fff;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    line-height: 100px;\r\n    font-size: 40px;\r\n    font-weight: 700;\r\n    opacity: 0.5;\r\n}\r\n\r\n.exclusive{\r\n    background: #e0dfeb;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .featured-news {\r\n        /*height: 505px;*/  \r\n    }\r\n    .featured-news img{\r\n        margin-top: -104px;\r\n    }\r\n    .featured-news span {       \r\n        top: 120px;\r\n        left: 200px;\r\n        font-size: 62px;\r\n        line-height: 1;\r\n        text-align: left;\r\n    }\r\n    .latest .g-layout{\r\n        padding-top: 60px;\r\n    }\r\n    .exclusive .g-layout{\r\n        padding-top: 68px;\r\n    }\r\n} \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+news/news-list/news-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"newsCategory\">\r\n    <div class=\"newsCategoryMenu\">\r\n        <div class=\"tab tab1 artist-drop-down-options\">\r\n            <div *ngIf=\"mobilereolution\" class=\"block-title-wrapper newsBlock\">\r\n                <h2 class=\"block-title newsBlock\">News &amp; Updates</h2>\r\n            </div>\r\n            <div class=\"dropdrownWrapper\">\r\n                <div class=\"dropdrown\" (click)=artistDropdown()>filter by Artist\r\n                    <i *ngIf=!dropDown class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\r\n                    <i *ngIf=dropDown class=\"fa fa-caret-up\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <ul class=\"artists {{cols}}\" *ngIf=dropDown [perfect-scrollbar]=\"config\">\r\n                    <li class=\"drowpdownlist\" *ngFor=\"let n of artisttag  |slice:0:(count)\"  [class.selected]=\"n === selectedArtistFromList\">\r\n                     <div class=\"item-wrapper\">\r\n                        <a  (click)=artistDropdownVlaue(n.nid) [innerHTML] = \"n.title\"></a>\r\n                     </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n              \r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n<!--app-featured-news></app-featured-news-->\r\n<div>\r\n  <div class=\"latest\">\r\n    <div class=\"g-layout other\">\r\n      \r\n    <div class=\"artistCategory landing\">\r\n        <app-news-block [field_artist_name]=\"currentDropDownValue\" [detailPath]=\"path\" [count]=\"13\" [customClass]=\"'news-list'\"></app-news-block>\r\n    </div>\r\n\r\n\r\n        <div class=\"livefyreBlockWrapper\">\r\n        <div class=\"block-title-wrapper livefyreBlock right\" *ngIf=\"desktopResolution\" (window:resize)=\"onResize($event)\">\r\n            <h2 class=\"block-title livefyreBlock\">The Latest</h2>\r\n        </div>\r\n        <div class=\"livefyreBlockInnerWrapper\">\r\n            <div class=\"livefyreSideBlock\">\r\n                <div class=\"livefyreSBInWrapper\">\r\n                    <div class=\"livefyreSideHeader\"><span class=\"instaImage\"></span><span class=\"intsaTitle\">WMNashville</span></div>\r\n                    <div class=\"follow-button-wrapper\"><a class=\"follow-botton\" href=\"https://www.instagram.com/wmnashville\" target=\"_blank\">follow for updates</a></div>\r\n                </div>\r\n            </div>\r\n            <app-livefyre-block *ngIf=\"desktopResolution\" (window:resize)=\"onResize($event)\" class=\"aboutLivefyreBlock desktop\" [setLimit]=\"7\"></app-livefyre-block>\r\n            <app-livefyre-block *ngIf=\"mobilereolution\" (window:resize)=\"onResize($event)\" class=\"aboutLivefyreBlock mobile\" [setLimit]=\"11\"></app-livefyre-block>\r\n            <div class=\"view-more-wrapper news-landing\"><a class=\"view-more\" target=\"_blank\" href=\" https://www.instagram.com/wmnashville/\">View All</a></div>\r\n        </div>       \r\n    </div>\r\n\r\n\r\n        \r\n    </div>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+news/news-list/news-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__("../../../../../src/app/+news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artisttagnames_service__ = __webpack_require__("../../../../../src/app/+news/artisttagnames.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(_artisttags, _newsService, _router) {
        this._artisttags = _artisttags;
        this._newsService = _newsService;
        this._router = _router;
        this.detailPath = "/news";
        this.minimal = false;
        this.viewMore = false;
        this.featured = false;
        this.noData = true;
        this.newsMobileCarousel = false;
        this.dropDown = false;
        this.switchCarouselTemplate = 0;
        this.moreNews = 0;
        this.field_artist_name = "";
        this.currentDropDownValue = "";
        this.mobilereolution = false;
        this.desktopResolution = false;
    }
    NewsListComponent.prototype.getNews = function () {
        var _this = this;
        this.selectedNews = undefined;
        this.selectedArtist = undefined;
        this.news = [];
        this._newsService.getNews(this.category, this.featured).subscribe(function (data) {
            _this.news = data;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        return this.news;
    };
    NewsListComponent.prototype.gotoDetail = function (news) {
        var id;
        this.selectedNews = news;
        id = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getSlug(this.selectedNews.path);
        var link = ['/news', id];
        this._router.navigate(link);
    };
    NewsListComponent.prototype.fetchNextPage = function () {
        var _this = this;
        this.moreNews = this.moreNews + this.count;
        this._newsService.loadmoreNews(this.moreNews, this.category).subscribe(function (data) {
            _this.news = _this.news.concat(data);
            if (data.length == 0 || data.length < (_this.count + 1)) {
                _this.noData = false;
            }
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    NewsListComponent.prototype.ngOnInit = function () {
        this.getArtists();
        if (window.screen.width < 767) {
            this.newsMobileCarousel = true;
        }
        this.news = this.getNews();
        if (!this.cols) {
            this.cols = "grid-4_xs-1"; //Have this on the build.
        }
        // if (this.featured) {
        //     this.news = this.getNews();
        // }
        if (window.screen.width < 767) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (window.screen.width > 767) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    NewsListComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 767) {
            this.newsMobileCarousel = true;
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        else {
            this.newsMobileCarousel = false;
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    NewsListComponent.prototype.artistDropdown = function () {
        if (this.dropDown) {
            this.dropDown = false;
        }
        else {
            this.dropDown = true;
        }
    };
    NewsListComponent.prototype.getArtists = function () {
        var _this = this;
        this.artisttag = [];
        this._artisttags.getArtistTags().subscribe(function (data) {
            _this.artisttag = data;
        }, function (err) { return console.error(err); }, function () {
        });
    };
    NewsListComponent.prototype.artistDropdownVlaue = function (title) {
        this.currentDropDownValue = title;
        this.dropDown = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewsListComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewsListComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsListComponent.prototype, "detailPath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsListComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsListComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewsListComponent.prototype, "minimal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsListComponent.prototype, "headerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewsListComponent.prototype, "viewMore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewsListComponent.prototype, "featured", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NewsListComponent.prototype, "switchCarouselTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewsListComponent.prototype, "field_artist_name", void 0);
    NewsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__("../../../../../src/app/+news/news-list/news-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+news/news-list/news-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__artisttagnames_service__["a" /* ArtistTagService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__artisttagnames_service__["a" /* ArtistTagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__artisttagnames_service__["a" /* ArtistTagService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__news_service__["b" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__news_service__["b" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
    ], NewsListComponent);
    return NewsListComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=news-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/+news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/+news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/+news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
        //window.scroll(0, 0);
    };
    NewsComponent.prototype.ngOnChanges = function () {
        window.scroll(0, 0);
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/+news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+news/news.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__news_service__["b" /* NewsService */]]
        })
    ], NewsComponent);
    return NewsComponent;
}());

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/+news/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getNews = function (categoryName, featured) {
        var url;
        if (categoryName == null) {
            url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsListEndpoint;
        }
        else {
            url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsCategoryEndpoint + "/" + categoryName;
        }
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.getArtistNews = function (artistid) {
        var url;
        url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsArtistEndpoint + "?tags=" + artistid;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.getNodeCount = function (type, artistname) {
        if (artistname == "") {
            var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].nodeCount + "?type=" + type;
        }
        else {
            var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].nodeArtisttagCount + "?type=" + type + "&tags=" + artistname;
        }
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.getPagernews = function (firstInit, offsetValue, artistid, featured) {
        var url;
        if (firstInit) {
            url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsListEndpoint + "?tags=" + artistid;
        }
        else {
            url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsListEndpoint + "?tags=" + artistid + "&offset=" + offsetValue;
        }
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.getFeaturedNews = function (artistid, featured) {
        var url;
        url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsFeaturedEndpoint + "?tags=" + artistid;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.getNewsIdList = function (categoryName) {
        var url;
        url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsNidCountEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.loadmoreNews = function (offsetValue, categoryName) {
        var url;
        if (categoryName == null) {
            url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsListEndpoint + "?offset=" + offsetValue;
        }
        else {
            url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsCategoryEndpoint + "/" + categoryName + "?offset=" + offsetValue;
        }
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.getNewsDetail = function (id) {
        var nid = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(id);
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsDetailEndpoint;
        //alert("rewuestsednf");
        return this.http.get(url + '?nid=' + nid)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.getMinifiedNewsDetail = function (id) {
        var nid = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(id);
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].newsDetailMinEndpoint;
        return this.http.get(url + '?nid=' + nid)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], NewsService);
    return NewsService;
    var _a;
}());

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/+tour/filter-by-location.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByLocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByLocation = /** @class */ (function () {
    function FilterByLocation() {
    }
    FilterByLocation.prototype.transform = function (value, args) {
        return args ? value.filter(function (t) { return t.distance && t.distance <= Number(160); }) : value;
    };
    FilterByLocation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterByLocation'
        })
    ], FilterByLocation);
    return FilterByLocation;
}());

//# sourceMappingURL=filter-by-location.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/+tour/filter-country.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterCountry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterCountry = /** @class */ (function () {
    function FilterCountry() {
    }
    FilterCountry.prototype.transform = function (value, args) {
        console.log(args);
        var filter = args.toLocaleLowerCase();
        return filter ? value.filter(function (t) { return t.venue_country.toLocaleLowerCase().indexOf(filter) != -1; }) : value;
        //return value;
    };
    FilterCountry = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterCountry'
        })
    ], FilterCountry);
    return FilterCountry;
}());

//# sourceMappingURL=filter-country.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/+tour/tour-block/tour-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nli > div.col{\r\n    padding: 0;    \r\n}\r\n\r\n[class*=col-] {\r\n    padding-right: 1rem;\r\n    padding-left:1rem;\r\n}\r\n.grid.venue div {\r\n    padding-bottom: 0;\r\n}\r\n.grid.venue div:last-child {\r\n    padding-bottom: 15px;\r\n}\r\n.date {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n.date span {\r\n    font-size: 30px;\r\n    display: block;\r\n    font-weight: 300;\r\n}\r\n.vip-button a,.rsvp-button a,.tickets-button a:hover {\r\n    background-color: transparent;  \r\n    color: #f6f5fd;\r\n    border: 1px solid #f6f5fd;   \r\n}\r\n.vip-button a:hover,.rsvp-button a:hover,.tickets-button a {\r\n    background-color: #f6f5fd;\r\n    color: #1b214e;\r\n    border: 1px solid #f6f5fd;\r\n}\r\n:host.tour-list-block .vip-button a,:host.tour-list-block .rsvp-button a{\r\n    border: 1px solid #1b214e;\r\n    color: #1b214e;\r\n}\r\n:host.tour-list-block .tickets-button a:hover{\r\n    background: transparent;\r\n    color: #1b214e;\r\n    border: 1px solid #1b214e;\r\n}\r\n.vip-button a,.rsvp-button a,.tickets-button a:hover {\r\n    background-color: transparent;\r\n}\r\n:host.tour-list-block .vip-button a:hover,:host.tour-list-block .rsvp-button a:hover,:host.tour-list-block .tickets-button a {\r\n    border: 1px solid #f6f5fd;\r\n    color: #f6f5fd;\r\n    background-color: #1b214e;\r\n}\r\n.tourbt{\r\n    display: inline-block;\r\n    border-radius: 3px;\r\n    text-transform: uppercase; \r\n    line-height: 1;\r\n    font-size: 19px;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    font-weight: 300;\r\n}\r\n.tourbt.more-info {\r\n    padding: 10px;\r\n}\r\n.tickets-button span{\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    color: #807c9c;\r\n    display: block;\r\n    font-style: italic;\r\n    font-weight: 300;\r\n}\r\n.tickets-button .tourbt,:host.tour-list-block .tickets-button .tourbt{\r\n    font-weight: 600;\r\n}\r\n:host.tour-list-block li.grid {\r\n    padding-bottom: 30px;\r\n}\r\n.homepage input{\r\n    display: none;\r\n}\r\n:host.tour-list-block input{\r\n    padding: 3px 20px 6px 8px;\r\n    box-sizing: border-box;\r\n    border: none;    \r\n    border-radius: 5px;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    font-style: italic;\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n:host.tour-list-block .closeBtn{\r\n    position: absolute;\r\n    right: 0;\r\n    top: 11px;\r\n}\r\n:host.tour-list-block .closeBtn:after{\r\n    content: \"X\";\r\n    display: block;\r\n    width: 15px;\r\n    height: 15px;\r\n    position: absolute;\r\n    background-color: #1b214e;\r\n    z-index: 1;\r\n    right: 8px;\r\n    top: 3px;\r\n    bottom: 0;\r\n    margin: auto;\r\n    padding: 3px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    line-height: 1.3;\r\n    text-indent: 1px;\r\n}\r\n\r\n:host.tour-list-block input:not(:valid) ~ .closeBtn {\r\n    display: none;\r\n}\r\n:host.tour-list-block input:not(:valid){\r\n    background: url(/assets/i/searchbutton.png) no-repeat scroll 97% center;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.search {\r\n    position: absolute;\r\n    top: 90px;\r\n    right: 0;\r\n    width: 300px;\r\n}\r\n\r\nspan.no-result {\r\n    width: 100%;\r\n    text-align: center;\r\n    display: inline-block;\r\n    line-height: 1;\r\n    margin-bottom: 10px;\r\n}\r\n.smoothAnimation {\r\n    opacity: 0;    \r\n}\r\n.activeAni {\r\n    animation: showTour 1s ease-in-out 0.2s forwards;\r\n    -webkit-animation: showTour 1s ease-in-out 0.2s forwards;\r\n}\r\n\r\n.map.location {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n    text-align: center;\r\n}\r\n\r\n.map.location img {\r\n    max-width: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    display: inline;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .date {\r\n        font-size: 24px;\r\n    }\r\n    ul.tour-dates li {\r\n        margin-bottom: 30px;\r\n    }\r\n    .date span{\r\n        font-size: 44px;\r\n    }  \r\n    .venue div:last-child {\r\n        margin-left: 0;\r\n    }\r\n    .tickets-button a,.rsvp-button a { \r\n        border-radius: inherit;\r\n    }   \r\n    li div.tickets-button{\r\n        padding-bottom: 5px;\r\n    }\r\n    div {\r\n        font-size: 17px;\r\n        line-height: 1; \r\n    }\r\n    .venue div {\r\n        line-height: 16px;\r\n    }\r\n    .tourbt{\r\n        font-size: 16px;\r\n    }\r\n    :host.tour-list-block li.grid {\r\n        padding-bottom: 40px;\r\n    }\r\n    :host.tour-list-block input{\r\n        position: relative;\r\n        top: 0;\r\n        margin-bottom: 72px;\r\n        width: 100%;\r\n        height: 55px;\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 1023px) {\r\n    .venue div:last-child {\r\n        margin-left: 0;\r\n    }\r\n    .search{\r\n        position: relative;\r\n        width: 100%;\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n    :host.tour-list-block input:not(:valid){\r\n        background: url(/assets/i/searchbutton.png) no-repeat scroll 95% center;\r\n        background-color: #ffffff;\r\n    }\r\n    :host.tour-list-block .closeBtn:after{\r\n        right: 10px;\r\n        top: 32px;\r\n        padding: 12px;\r\n        font-size: 25px;\r\n        line-height: 0.8;\r\n        text-indent: -1px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+tour/tour-block/tour-block.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"tour && tour.length > 0\" class=\"tour-dates\">\r\n    <li class=\"grid tour-node-{{t.nid}}\" *ngFor=\"let t of (tour | filterByLocation:nearDates | tourSearch:searchKey ) | slice:0:count \">\r\n        <div class=\"col-1_sm-3 date\">\r\n            {{t.event_date.split(\" \")[0]}}\r\n            <span>{{t.event_date.split(\" \")[1]}}</span>\r\n        </div>\r\n        <div class=\"col-6_sm-9 grid venue\">\r\n            <div class=\"col-6_sm-12\" [innerHTML]=\"t.venue_place\"></div>\r\n            <div class=\"col-6_sm-12\">{{t.venue_city}}, {{t.venue_state}}</div>\r\n            <div class=\"col-6_sm-12\" push-left=\"off-6\">{{t.venue_country}}</div>\r\n        </div>\r\n        <div class=\"col-5_sm-12 grid\" *ngIf=\"isUpcoming\">\r\n            <div class=\"col-3_sm-3 vip-button\">\r\n                <a data-track=\"tour-vip\" *ngIf=\"t.vip_url\" target=\"_blank\" class=\"tourbt\" href=\"{{t.vip_url}}\">VIP</a>\r\n            </div>\r\n            <div class=\"col-4_sm-4 rsvp-button\">\r\n                <a data-track=\"tour-rsvp\" *ngIf=\"t.rsvp_url\" class=\"tourbt\" target=\"_blank\" href=\"{{t.rsvp_url}}\">RSVP</a>\r\n            </div>\r\n            <div class=\"col-5_sm-5 tickets-button\">\r\n                <a data-track=\"tour-tickets\" class=\"tourbt\" target=\"_blank\" *ngIf=\"t.ticket_status == 'available'\" href=\"{{t.ticket_url}}\">Tickets</a>\r\n                <span *ngIf=\"t.ticket_status == 'unavailable'\">Sold Out!</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-5_sm-12 grid\" *ngIf=\"!isUpcoming\">\r\n            <div class=\"tickets-button detail-path\">\r\n                <a data-track=\"tour-detail-page\" class=\"tourbt more-info\" href=\"{{t.path}}\">More Info</a>\r\n            </div>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<div class=\"map location\" *ngIf=\"nearDates && (tour | filterByLocation:nearDates).length != 0\">\r\n    <img src=\"{{mapImageURL}}\" />\r\n</div>\r\n<div *ngIf=\"nearDates && tour && (tour | filterByLocation:nearDates).length === 0 && !empty\">\r\n    <div class=\"map location\">\r\n        <img src=\"{{mapImageURL}}\" />\r\n    </div>\r\n    <span class=\"no-result\">There are no tour dates available on your locations.</span>\r\n    <app-mailing-list-block [customClass]=\"'tour-list-block'\">\r\n        <div mailingListCopy>Join the mailing list to find out when [Artist Name] will be playing near you.</div>\r\n    </app-mailing-list-block>\r\n</div>\r\n<div *ngIf=\"tour && (tour | filterByLocation:nearDates).length > 0 && (tour | tourSearch:searchKey).length === 0 && !empty\">\r\n    <span class=\"no-result\">There are no locations matching your search.</span>\r\n    <app-mailing-list-block [customClass]=\"'tour-list-block'\">\r\n        <div mailingListCopy>Join the mailing list to find out when [Artist Name] will be playing near you.</div>\r\n    </app-mailing-list-block>\r\n</div>\r\n<div [hidden]=\"!empty\">\r\n    <span class=\"no-result\">No tour dates available.</span>\r\n    <app-mailing-list-block [customClass]=\"'tour-list-block'\">\r\n        <div mailingListCopy>No tour dates available. Find out when [Artist Name] will be playing near you.</div>\r\n    </app-mailing-list-block>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+tour/tour-block/tour-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_service__ = __webpack_require__("../../../../../src/app/+tour/tour.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_service__ = __webpack_require__("../../../../../src/app/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TourBlockComponent = /** @class */ (function () {
    function TourBlockComponent(_tourService, _navigationSource) {
        var _this = this;
        this._tourService = _tourService;
        this._navigationSource = _navigationSource;
        this.enableNoResult = false;
        this.nearDates = false;
        this.isUpcoming = true;
        this.searchKey = "";
        this.countryKey = "";
        this.empty = false;
        this.matchLocation = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].loacationObj;
        localStorage.removeItem(this.isUpcoming ? "upcomingdates" : "pastdate");
        _navigationSource.navigationSource$.subscribe(function (data) {
            console.log("----------------------------geoLocationInfo--------------------------------------");
            //console.log(data);
            _this.matchLocation = data;
            //this.calculateDistance();
            _this.getCurrentLocationMap();
        });
    }
    TourBlockComponent.prototype.getTour = function () {
        var _this = this;
        if (localStorage) {
            this.tour = JSON.parse(localStorage.getItem(this.isUpcoming ? "upcomingdates" : "pastdate"));
            console.log(this.tour);
        }
        if (this.tour && this.tour.length > 1) {
            //if(this.isUpcoming) this.calculateDistance();
            return this.tour;
        }
        this._tourService.getTourContent(!this.isUpcoming).subscribe(function (data) {
            _this.tour = data;
            if (data.length == 0)
                _this.empty = true;
            //if(this.isUpcoming) this.calculateDistance();
            console.log("----------------------------this.tour = data-----------------------------------");
            console.log(_this.tour);
            if (localStorage)
                localStorage.setItem(_this.isUpcoming ? "upcomingdates" : "pastdate", JSON.stringify(_this.tour));
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        return this.tour;
    };
    TourBlockComponent.prototype.calculateDistance = function () {
        var counter = 0;
        while (true && this.matchLocation) {
            if (this.tour[counter] && !this.tour[counter]["distance"]) {
                var distance = this.findShortDistance(this.tour[counter]);
                //console.log("----distance----"+distance);
                this.tour[counter]["distance"] = distance;
                counter++;
            }
            else {
                //counter = counter - 1;
                break;
            }
        }
    };
    TourBlockComponent.prototype.toRadians = function (degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    };
    TourBlockComponent.prototype.findShortDistance_old = function (tourN) {
        var lat2 = Number(tourN["latitude"]);
        var long2 = Number(tourN["longitude"]);
        var R = 6371 * 1000; // metres
        var φ1 = this.toRadians(this.matchLocation["latitude"]);
        var φ2 = this.toRadians(this.matchLocation["longitude"]);
        var Δφ = this.toRadians(lat2 - this.matchLocation["latitude"]);
        var Δλ = this.toRadians(long2 - this.matchLocation["longitude"]);
        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return (R * c) / 1000;
    };
    TourBlockComponent.prototype.findShortDistance = function (tourN) {
        var lat1 = Number(tourN["latitude"]);
        var lon1 = Number(tourN["longitude"]);
        var lat2 = this.matchLocation["latitude"];
        var lon2 = this.matchLocation["longitude"];
        var φ1 = this.toRadians(lat1), φ2 = this.toRadians(lat2), Δλ = this.toRadians(lon2 - lon1), R = 6371e3; // gives d in metres
        var d = Math.acos(Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)) * R;
        return d / 1000;
    };
    TourBlockComponent.prototype.ngOnChanges = function () {
        if (!this.enableNoResult) {
            this.getTour();
            if (this.isUpcoming && this.nearDates)
                this.getCurrentLocationMap();
        }
        else {
            //this.tour = [];
            this.empty = true;
        }
    };
    TourBlockComponent.prototype.ngOnInit = function () {
    };
    TourBlockComponent.prototype.getZoomLevel = function (radius) {
        var scale = radius / 500;
        var zoomLevel = Math.round(16 - Math.log(scale) / Math.log(2));
        return zoomLevel;
    };
    TourBlockComponent.prototype.ngAfterViewInit = function () {
    };
    TourBlockComponent.prototype.getCurrentLocationMap = function () {
        if (!this.mapImageURL && this.matchLocation) {
            var location = 'https://maps.googleapis.com/maps/api/staticmap?size=640x640&center=';
            location = location + this.matchLocation["latitude"] + ',' + this.matchLocation["longitude"];
            location = location + "&style=feature:transit.line|visibility:simplified|color:0xbababa&style=feature:road.highway|element:labels.text.stroke|visibility:on|color:0xb06eba&style=feature:road.highway|element:labels.text.fill|visibility:on|color:0xffffff";
            //tour.filter()
            var ftour = undefined;
            if (this.tour) {
                ftour = this.tour.filter(function (t) { return t["distance"] && t["distance"] <= Number(160); });
                for (var i = 0; i < ftour.length; i++) {
                    location = location + "&markers=color:red|label:E|" + ftour[i]["latitude"] + ',' + ftour[i]["longitude"];
                }
            }
            if (ftour && ftour.length > 0)
                location = location + "&zoom=9";
            else
                location = location + "&zoom=13";
            location = location + "&markers=color:green|label:M|" + this.matchLocation["latitude"] + ',' + this.matchLocation["longitude"];
            location = location + "&key=AIzaSyC0WZPxqif5jYsN02nPGEFyWIKLzYMIfmQ";
            this.mapImageURL = location;
            //console.log("----------------------------getCurrentLocationMap--------------------------------------");
            //console.log(this.mapImageURL);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TourBlockComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TourBlockComponent.prototype, "enableNoResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TourBlockComponent.prototype, "nearDates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TourBlockComponent.prototype, "isUpcoming", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TourBlockComponent.prototype, "searchKey", void 0);
    TourBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tour-block',
            template: __webpack_require__("../../../../../src/app/+tour/tour-block/tour-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+tour/tour-block/tour-block.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__tour_service__["a" /* TourService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tour_service__["a" /* TourService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tour_service__["a" /* TourService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__general_service__["a" /* GeneralService */]) === "function" && _b || Object])
    ], TourBlockComponent);
    return TourBlockComponent;
    var _a, _b;
}());

//# sourceMappingURL=tour-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/+tour/tour-embed/tour-embed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nli > div.col{\r\n    padding: 0;    \r\n}\r\n.tour {\r\n    font-size: 19px;\r\n    font-weight: 600;\r\n}\r\n.tour h2 {\r\n    padding-bottom: 70px;\r\n}\r\n[class*=col-] {\r\n    padding-right: 1rem;\r\n    padding-left:1rem;\r\n}\r\n.grid.venue div {\r\n    padding-bottom: 0;\r\n}\r\n.grid.venue div:last-child {\r\n    padding-bottom: 15px;\r\n}\r\n.tour.homepage input{\r\n    display: none;\r\n}\r\n.tour.tour-list-block input{\r\n    padding: 3px 20px 6px 8px;\r\n    box-sizing: border-box;\r\n    border: none;    \r\n    border-radius: 5px;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    font-style: italic;\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n.tour.tour-list-block .closeBtn{\r\n    position: absolute;\r\n    right: 0;\r\n    top: 11px;\r\n}\r\n.tour.tour-list-block .closeBtn:after{\r\n    content: \"X\";\r\n    display: block;\r\n    width: 15px;\r\n    height: 15px;\r\n    position: absolute;\r\n    background-color: #1b214e;\r\n    z-index: 1;\r\n    right: 8px;\r\n    top: 3px;\r\n    bottom: 0;\r\n    margin: auto;\r\n    padding: 3px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    line-height: 1.3;\r\n    text-indent: 1px;\r\n}\r\n\r\n.tour.tour-list-block input:not(:valid) ~ .closeBtn {\r\n    display: none;\r\n}\r\n.tour.tour-list-block input:not(:valid){\r\n    background: url(/assets/i/searchbutton.png) no-repeat scroll 97% center;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.search {\r\n    position: absolute;\r\n    top: 90px;\r\n    right: 0;\r\n    width: 300px;\r\n}\r\n\r\nspan.no-result {\r\n    width: 100%;\r\n    text-align: center;\r\n    display: inline-block;\r\n    line-height: 1;\r\n    margin-bottom: 20px;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    line-height: 1;\r\n}\r\n@media only screen and (max-width: 1023px) {    \r\n    .search{\r\n        position: relative;\r\n        width: 100%;\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n    .tour.tour-list-block input:not(:valid){\r\n        background: url(/assets/i/searchbutton.png) no-repeat scroll 95% center;\r\n        background-color: #ffffff;\r\n    }\r\n    .tour.tour-list-block .closeBtn:after{\r\n        right: 10px;\r\n        top: 32px;\r\n        padding: 12px;\r\n        font-size: 25px;\r\n        line-height: 0.8;\r\n        text-indent: -1px;\r\n    }\r\n}\r\n\r\n.tab.tour-options, .tab.geo-options {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-bottom: 2%;\r\n    padding: 0 1rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.tab.tour-options ul.item-list li, .tab.tab2.geo-options ul.item-list li{\r\n    display: inline-block;\r\n    text-transform: none;\r\n    margin: 0 10px 0 0;\r\n    line-height: 1;\r\n}\r\n\r\n.tab.tour-options ul.item-list li a {\r\n    display: inline-block;\r\n    font-size: 19px;\r\n    line-height: 1.2;\r\n    color: #1b214e;\r\n    border-bottom: 2px solid transparent;\r\n    cursor: pointer;\r\n}\r\n.tab.tab2.geo-options{\r\n    margin-bottom: 4%;\r\n}\r\n.tab.tab2.geo-options ul.item-list li{\r\n    margin: 0 30px 0 0;\r\n}\r\n.homepage .tab.geo-options{\r\n   display: none;\r\n}\r\n\r\n.tab.geo-options ul.item-list li a, .tab.geo-options ul.item-list li span {\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    letter-spacing: 1px;\r\n    color: #1b214e;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n    display: inline-block;\r\n    line-height: 1.8;\r\n}\r\n.tab.geo-options ul.item-list li .nearme{\r\n    background-image: url(/assets/i/drop-pin.png);\r\n    background-repeat: no-repeat;\r\n    background-position: 0 center;\r\n    padding-left: 25px;\r\n}\r\n.tab.geo-options ul.item-list li span.nearme{\r\n    cursor: default;\r\n    position: relative;\r\n}\r\n.tab.geo-options ul.item-list li span.nearme:after {\r\n    content: \"\";\r\n    height: 3px;\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    background-color: red;\r\n    top: calc(50% - 3px);\r\n    top: -webkit-calc(50% - 3px);\r\n}\r\n.homepage .tab.tour-options ul.item-list li a {\r\n    color: #ffffff;\r\n}\r\n.tab.tour-options ul.item-list li a:hover, .tab.tour-options ul.item-list li a.active:hover, \r\n.tab.geo-options ul.item-list li a:hover{\r\n    color: #359be9;\r\n    border-bottom-color: #359be9;\r\n}\r\n.homepage .tab.tour-options ul.item-list li a:hover, .homepage .tab.tour-options ul.item-list li a.active:hover {\r\n    color: #359be9;\r\n    border-bottom-color: #359be9;\r\n}\r\n.tab.geo-options ul.item-list li a.active{\r\n    opacity: 1;\r\n}\r\n\r\n.tab.tour-options ul.item-list li a.active {\r\n    border-bottom-color: #1b214e;\r\n}\r\n.homepage .tab.tour-options ul.item-list li a.active {\r\n    border-bottom-color: #ffffff;\r\n}\r\n\r\napp-tour-block {\r\n    opacity: 0;    \r\n}\r\napp-tour-block.active {\r\n    animation: showTour 1s ease-in-out 0.2s forwards;\r\n    -webkit-animation: showTour 1s ease-in-out 0.2s forwards;\r\n}\r\n@keyframes showTour {\r\n    from {opacity: 0;}\r\n    to {opacity: 1;}\r\n}\r\n@-webkit-keyframes showTour {\r\n    from {opacity: 0;}\r\n    to {opacity: 1;}\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .tour.tour-list-block input{\r\n        position: relative;\r\n        top: 0;\r\n        margin-bottom: 30px;\r\n        width: 100%;\r\n        height: 55px;\r\n        font-size: 18px;\r\n    }\r\n    span.no-result {        \r\n        margin-bottom: 10px;\r\n        font-size: 20px;\r\n    }\r\n    .tab.tour-options{    \r\n        margin-bottom: 35px;    \r\n        padding: 0; \r\n    }   \r\n}\r\n\r\n@media only screen and (min-width: 1400px) {\r\n    .tab.tour-options{\r\n        margin-bottom: 25px;\r\n    }\r\n    .tab.tab2.geo-options{\r\n        margin-bottom: 40px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+tour/tour-embed/tour-embed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tour block {{customClass}}\">\r\n    <h2 *ngIf=\"headerText\">{{headerText}}</h2>\r\n    <div class=\"search\" [hidden]=\"empty\">\r\n        <input id=\"close\" type=\"text\" #tourSearchInput placeholder=\"Search For City\" required (keyup)=\"0\" />\r\n        <span class=\"closeBtn\" (click)=\"clearInput()\"></span>\r\n    </div>\r\n    <div class=\"tab tab1 tour-options\">\r\n        <ul class=\"item-list\">\r\n            <li><a (click)=\"switchUpcomingTourdates()\" [class.active]=\"isUpcoming\">Upcoming Dates</a></li>\r\n            <li><a (click)=\"switchPastTourdates()\" [class.active]=\"!isUpcoming\" >Past Dates</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"tab tab2 geo-options\" *ngIf=\"isUpcoming\">\r\n        <ul class=\"item-list\">\r\n            <li>\r\n                <a (click)=\"filterDates(false)\" [class.active]=\"!nearDates\">all dates</a>\r\n            </li><li>\r\n                <a *ngIf=\"isLocationEnable\" (click)=\"filterDates(true)\" [class.active]=\"nearDates\" class=\"nearme\" >near me</a>\r\n                <span *ngIf=\"!isLocationEnable\" class=\"nearme disabled\">near me</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"tab tab-container\">\r\n        <app-tour-block *ngIf=\"isUpcoming\" [isUpcoming] = \"true\" class=\"{{customClass}}\" [class.active]=\"isUpcoming\" [searchKey]=\"tourSearchInput.value\" [nearDates]=\"nearDates\"></app-tour-block>\r\n        <app-tour-block *ngIf=\"!isUpcoming\" [isUpcoming] = \"false\" class=\"{{customClass}}\" [class.active]=\"!isUpcoming\" [searchKey]=\"tourSearchInput.value\" ></app-tour-block>\r\n    </div>\r\n    <div class=\"tab tab-container\">\r\n        <div id=\"gmap\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+tour/tour-embed/tour-embed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourEmbedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_service__ = __webpack_require__("../../../../../src/app/+tour/tour.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_service__ = __webpack_require__("../../../../../src/app/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TourEmbedComponent = /** @class */ (function () {
    function TourEmbedComponent(_tourService, _navigationSource) {
        var _this = this;
        this._tourService = _tourService;
        this._navigationSource = _navigationSource;
        this.detailPath = "/tour";
        this.enableNoResult = false;
        this.empty = false;
        this.showFilter = false;
        this.nearDates = false;
        this.isUpcoming = true;
        this.tempisUpcoming = true;
        this.isLocationEnable = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].loacationObj;
        this.subscription = _navigationSource.navigationSource$.subscribe(function (data) {
            console.log("----------------------------geoLocationInfo--------------------------------------");
            console.log(data);
            _this.isLocationEnable = data;
            __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].loacationObj = data;
        });
    }
    TourEmbedComponent.prototype.clearInput = function () {
        var element = document.getElementById("close");
        element.value = "";
    };
    TourEmbedComponent.prototype.filterDates = function (showFilter) {
        this.nearDates = !this.nearDates;
        //this.nearDates = "";
    };
    TourEmbedComponent.prototype.switchUpcomingTourdates = function () {
        this.isUpcoming = true;
    };
    TourEmbedComponent.prototype.switchPastTourdates = function () {
        this.isUpcoming = false;
        this.nearDates = false;
    };
    TourEmbedComponent.prototype.drawMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(44.7658002, -85.624088),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
    };
    TourEmbedComponent.prototype.drawMarkers = function (tour) {
        for (var i = 0; i < tour.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(parseFloat(tour[i]["latitude"]), parseFloat(tour[i]["longitude"])),
                map: this.map
            });
        }
    };
    TourEmbedComponent.prototype.ngOnChanges = function () {
    };
    TourEmbedComponent.prototype.ngOnInit = function () {
        //this.drawMap();    
    };
    TourEmbedComponent.prototype.ngOnDestroy = function () {
        //this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TourEmbedComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TourEmbedComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TourEmbedComponent.prototype, "detailPath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TourEmbedComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TourEmbedComponent.prototype, "headerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TourEmbedComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TourEmbedComponent.prototype, "enableNoResult", void 0);
    TourEmbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tour-embed',
            template: __webpack_require__("../../../../../src/app/+tour/tour-embed/tour-embed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+tour/tour-embed/tour-embed.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tour_service__["a" /* TourService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tour_service__["a" /* TourService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__general_service__["a" /* GeneralService */]) === "function" && _b || Object])
    ], TourEmbedComponent);
    return TourEmbedComponent;
    var _a, _b;
}());

//# sourceMappingURL=tour-embed.component.js.map

/***/ }),

/***/ "../../../../../src/app/+tour/tour-list/tour-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n    text-align: left;\r\n    display: inline-block;\r\n    font-weight: 600;\r\n    padding-top: 60px;\r\n    padding-bottom: 40px;\r\n}\r\n.track-list{\r\n    display: inline-block;\r\n    margin-left: 216px;\r\n}\r\n.all-dates{\r\n    padding-bottom: 60px;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n.all-dates span{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #807c9c;\r\n    display: inline-block;\r\n    line-height: 2;\r\n    padding-left: 28px;\r\n    text-indent: 30px;\r\n    word-spacing: 1px;\r\n}\r\n.all-dates span:before {\r\n    content: \"\";\r\n    background: url(\"/assets/i/location.png\");\r\n    height: 22px;\r\n    width: 18px;\r\n    display: block;\r\n    position: absolute;\r\n    text-indent: 53px;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.tour-banner {\r\n    height: 245px;  \r\n    position: relative;\r\n}\r\n.tour-banner span.title {\r\n    position: absolute;\r\n    display: inline-block;   \r\n    color: #fff;\r\n    font-weight: 700;\r\n    opacity: 0.5;\r\n    top: 120px;\r\n    left: 200px;\r\n    font-size: 62px;\r\n    line-height: 1;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n}\r\n.tour-banner span.background-image{\r\n    line-height: 0;\r\n    display: inline-block;\r\n    width: 100%;\r\n    background-size: auto 100%;\r\n    background-repeat: repeat-x;\r\n}\r\n.tour-banner span.background-image img{\r\n    visibility: hidden;\r\n    height: 100%;\r\n    width: auto;\r\n}\r\n.tour-banner:before {\r\n    content: \"\";\r\n    background: #1b214e;\r\n    opacity: 0.55;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.tour-banner > img{\r\n    width: 100%;\r\n}\r\n.tour-list .g-layout{\r\n   position: relative; \r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .tour-banner {\r\n        height: 100px;\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n    .tour-banner span.background-image{\r\n        height: 100px;\r\n    }\r\n    .tour-banner span.title {       \r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        line-height: 100px;       \r\n        font-size: 40px;\r\n        text-align: center;   \r\n    }\r\n    .tour-banner > img{\r\n        width: auto;\r\n    }\r\n    h2{\r\n        padding-top: 5px;\r\n        font-size: 22px;\r\n        padding-bottom: 8px;\r\n    }\r\n    .track-list {\r\n        position: absolute;\r\n        bottom: 82px;\r\n        text-align: center;\r\n        width: 100%;\r\n        margin: 0;\r\n        display: block;\r\n        left:0;\r\n    }\r\n    .tour-list .g-layout{\r\n        padding-bottom: 45px;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+tour/tour-list/tour-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tour-banner\">\r\n  <span class=\"background-image\" [style.background-image]=\"'url(/assets/i/Tour-banner.jpg)'\"><img src=\"/assets/i/Tour-banner.jpg\" typeof=\"foaf:Image\"></span>\r\n  <span class=\"title\">Tour</span>\r\n</div>\r\n<div class=\"detail-list\">\r\n  <div class=\"tour-list\">\r\n    <div class=\"g-layout\">\r\n      <h2>TOUR DATES</h2>\r\n      <!--<app-block blockID=\"36\" class=\"track-list\"></app-block>-->\r\n      <app-tour-embed [customClass]=\"'tour-list-block'\"></app-tour-embed>\r\n    </div>\r\n  </div>\r\n  <div class=\"TourDetailPage mailinglistPanel internal\">\r\n      <div class=\"g-layout internal\">\r\n          <h2><span>never miss an update</span></h2>\r\n          <div class=\"mailing-list-copy-outer\">Find out when [Artist Name] will be playing near you.</div>\r\n          <app-mailing-list-block [customClass]=\"'TourDetailPage-block'\">\r\n          </app-mailing-list-block>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+tour/tour-list/tour-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TourListComponent = /** @class */ (function () {
    function TourListComponent(route) {
        this.route = route;
        this.showNoResult = false;
    }
    TourListComponent.prototype.ngOnInit = function () {
        /*
        this.route.params.forEach((params: Params) => {
          let noresult = params['noresult'];
          if(noresult.length > 0){
            this.showNoResult = true;
          }
        });*/
        window.scroll(0, 0);
    };
    TourListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tour-list',
            template: __webpack_require__("../../../../../src/app/+tour/tour-list/tour-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+tour/tour-list/tour-list.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object])
    ], TourListComponent);
    return TourListComponent;
    var _a;
}());

//# sourceMappingURL=tour-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/+tour/tour-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TourSearch = /** @class */ (function () {
    function TourSearch() {
    }
    TourSearch.prototype.transform = function (value, args) {
        console.log("this is args");
        console.log(args);
        var filter = args.toLocaleLowerCase();
        return filter ? value.filter(function (t) { return t.venue_city.toLocaleLowerCase().indexOf(filter) != -1; }) : value;
        //return value;
    };
    TourSearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'tourSearch'
        })
    ], TourSearch);
    return TourSearch;
}());

//# sourceMappingURL=tour-search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/+tour/tour.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+tour/tour.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/+tour/tour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_service__ = __webpack_require__("../../../../../src/app/+tour/tour.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TourComponent = /** @class */ (function () {
    function TourComponent() {
    }
    TourComponent.prototype.ngOnInit = function () {
    };
    TourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tour',
            template: __webpack_require__("../../../../../src/app/+tour/tour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+tour/tour.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__tour_service__["a" /* TourService */]]
            /*,
            animations: [
              trigger('flyInOut', [
                state('in', style({transform: 'translateX(0)'})),
                transition('void => *', [
                  animate(300, keyframes([
                    style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                    style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
                    style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
                  ]))
                ]),
                transition('* => void', [
                  animate(300, keyframes([
                    style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
                    style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                    style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
                  ]))
                ])
              ])
            ]*/
        }),
        __metadata("design:paramtypes", [])
    ], TourComponent);
    return TourComponent;
}());

//# sourceMappingURL=tour.component.js.map

/***/ }),

/***/ "../../../../../src/app/+tour/tour.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TourService = /** @class */ (function () {
    function TourService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    TourService.prototype.getTour = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].tourEndpoint + "&callback=JSONP_CALLBACK";
        return this.jsonp.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TourService.prototype.geolocate = function (timezone, cityPrecision, objectVar) {
        var api = "ip-country";
        var domain = 'api.ipinfodb.com';
        var apiKey = ['210163b03ba3bf329a8ede992a24d6364ceff96a397c565f6acb93b753cc30db', '00c0b9e4900011af427a05e45bf07855fd7d801b51947dcef1cec8a5165b8f5d', 'b8169a15f1dfac4e95c07ba3c2c002f3858cef89329305392e21e495ea61063f', 'a4d44d0de8e02cb44ae857a70ba9ec04388f810862a08ad35dbffe4317981357'];
        var randomNumber = Math.round(Math.random());
        var url = "http://" + domain + "/v3/" + api + "/?key=" + apiKey[randomNumber] + "&format=json";
        // console.log(url);
        console.log("----------------------------api.ipinfodb.com----------------------------------- " + randomNumber);
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TourService.prototype.mapTourInfo = function (data) {
        var tourDates = new Array();
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var t = data_1[_i];
            var tourDate = {};
            tourDate.title = t.title;
            tourDate.nid = t.id;
            tourDate.venue_city = t.venue.city;
            tourDate.event_date = new Date(t.datetime);
            tourDate.venue_state = t.venue.region;
            tourDate.venue_country = t.venue.country;
            tourDate.venue_place = t.venue.name;
            tourDate.ticket_url = t.ticket_url;
            tourDate.rsvp_url = t.facebook_rsvp_url;
            tourDate.vip_url = t.custom_url;
            tourDate.ticket_status = t.ticket_status;
            tourDates.push(tourDate);
        }
        return tourDates;
    };
    TourService.prototype.getTourContent = function (past) {
        if (past === void 0) { past = false; }
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].tourEndpoint;
        if (past)
            url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].pastTourEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TourService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    TourService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], TourService);
    return TourService;
    var _a, _b;
}());

//# sourceMappingURL=tour.service.js.map

/***/ }),

/***/ "../../../../../src/app/+tour/tourStorage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TourStorage = /** @class */ (function () {
    function TourStorage(jsonp) {
        this.jsonp = jsonp;
        this.tourCache = {
            "upcomingdates": null
        };
    }
    TourStorage.prototype.saveTourDataInCache = function (key, data) {
        this.tourCache[key] = data;
    };
    TourStorage.prototype.getTourDataFromCache = function (key) {
        return this.tourCache;
    };
    TourStorage.prototype.isStorageIsEmpty = function (key) {
        console.log(key + "---------isStorageIsEmpty-----------");
        console.log((!this.tourCache[key]) + " || " + (this.tourCache[key] == null));
        return !this.tourCache[key] || this.tourCache[key] == null;
    };
    TourStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object])
    ], TourStorage);
    return TourStorage;
    var _a;
}());

//# sourceMappingURL=tourStorage.service.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutWrapper\">\r\n    <app-block [blockID]=\"env.aboutBlockId\" class=\"aboutHeaderBlock\"></app-block>\r\n    <div class=\"livefyreBlockWrapper\">\r\n        <div class=\"block-title-wrapper livefyreBlock right\" *ngIf=\"desktopResolution\" (window:resize)=\"onResize($event)\">\r\n            <h2 class=\"block-title livefyreBlock\">The Latest</h2>\r\n        </div>\r\n        <div class=\"livefyreBlockInnerWrapper\">\r\n            <div class=\"livefyreSideBlock\">\r\n                <div class=\"livefyreSBInWrapper\">\r\n                    <div class=\"livefyreSideHeader\"><span class=\"instaImage\"></span><span class=\"intsaTitle\">WMNashville</span></div>\r\n                    <div class=\"follow-button-wrapper\"><a class=\"follow-botton\" href=\"https://www.instagram.com/wmnashville\" target=\"_blank\">follow for updates</a></div>\r\n                </div>\r\n            </div>\r\n            <app-livefyre-block *ngIf=\"desktopResolution\" (window:resize)=\"onResize($event)\" class=\"aboutLivefyreBlock desktop\" [setLimit]=\"7\"></app-livefyre-block>\r\n            <app-livefyre-block *ngIf=\"mobilereolution\" (window:resize)=\"onResize($event)\" class=\"aboutLivefyreBlock mobile\" [setLimit]=\"11\"></app-livefyre-block>\r\n            <!--div class=\"view-more-wrapper\"><a class=\"view-more\" [routerLink]=\"['/livefyre']\" [routerLinkActive]=\"['active']\">View All</a></div-->\r\n             <div class=\"view-more-wrapper\"><a class=\"view-more\" href=\"https://www.instagram.com/wmnashville/\" target=\"_blank\">View All</a></div>\r\n           \r\n        </div>                                             \r\n    </div>\r\n\r\n    <div class=\"artistNews\">\r\n        <div class=\"block-title-wrapper newsBlock left\">\r\n            <h2 class=\"block-title newsBlock\">UPDATES</h2>\r\n        </div>\r\n        <app-news-block [detailPath]=\"path\" [cols]=\"'grid-3_xs-1'\" [count]=\"3\" [customClass]=\"'about-news-list'\" [newsblock]='true'></app-news-block>\r\n         <div class=\"view-more-wrapper\"><a class=\"newsDeatilpage view-more\" [routerLink]=\"['/news']\" [routerLinkActive]=\"['active']\">View all news</a></div>\r\n    </div>\r\n    <div class=\"Artistcouraosel\">\r\n        <app-artists-carousel *ngIf=\"artists\" [artists]=\"artists\" [carouseln]=\"artistlength\"></app-artists-carousel>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artists_artists_services__ = __webpack_require__("../../../../../src/app/artists/artists.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news_service__ = __webpack_require__("../../../../../src/app/+news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutComponent = /** @class */ (function () {
    function AboutComponent(_artistService, _newsService, _router) {
        this._artistService = _artistService;
        this._newsService = _newsService;
        this._router = _router;
        this.env = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */];
        this.mobilereolution = false;
        this.desktopResolution = false;
    }
    AboutComponent.prototype.getNews = function () {
        var _this = this;
        this.selectedNews = undefined;
        this.news = [];
        this._newsService.getNews("", true).subscribe(function (data) {
            _this.news = data;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        return this.news;
    };
    AboutComponent.prototype.gotoDetail = function (news) {
        var id;
        this.selectedNews = news;
        id = __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* Utils */].getSlug(this.selectedNews.path);
        var link = ['/news', id];
        this._router.navigate(link);
    };
    AboutComponent.prototype.getArtists = function () {
        var _this = this;
        this.artists = [];
        this._artistService.getArtists().subscribe(function (data) {
            _this.artists = data;
        }, function (err) { return console.error(err); }, function () {
            _this.artistlength = _this.artists.length;
        });
        return this.artists;
    };
    AboutComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.getArtists();
        if (window.screen.width < 767) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (window.screen.width > 767) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    AboutComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 767) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (event.target.innerWidth > 767) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__artists_artists_services__["b" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__artists_artists_services__["b" /* ArtistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__news_news_service__["b" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__news_news_service__["b" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/angulartics-omniture/angulartics-omniture.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var angulartics2_1 = __webpack_require__("../../../../angulartics2/dist/core/angulartics2.js");
var config = __webpack_require__("../../../../../src/app/angulartics-omniture/omniture-config.js");


var Angulartics2Omniture = (function () {
    function Angulartics2Omniture(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        //this.angulartics2.settings.pageTracking.trackRelativePath = true;
        //this.angulartics2.settings.pageTracking.autoTrackVirtualPages = false;
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x); });
    }
    Angulartics2Omniture.prototype.pageTrack = function (x) {
        var result = config.OmniturePageConfig(x.path);
        digitalData = {
            settings: {
                reportSuites: result.pageConfig.reportSuites || ""
            },
            page: {
                pageInfo: {
                    pageName: result.pageInfo.pageName || "",
                    server: result.pageConfig.server || "",
                    platform: result.pageConfig.platform || ""
                },
                category: {
                    primaryCategory: result.category.primaryCategory || "",
                    pageType: result.category.pageType || ""
                }
            },
            content: {
                artist: result.pageConfig.artistName || "",
                label: result.pageConfig.label || "",
                sublabel: result.pageConfig.sublabel || ""
            }
        };
        _satellite.pageBottom();
    };
    Angulartics2Omniture.prototype.eventTrack = function (action, properties) {
        /*Extend To Create your own event tracking */
    };
    Angulartics2Omniture.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2Omniture.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2Omniture;
} ());
exports.Angulartics2Omniture = Angulartics2Omniture;


/***/ }),

/***/ "../../../../../src/app/angulartics-omniture/omniture-config.js":
/***/ (function(module, exports) {

exports.OmniturePageConfig = function (path) {

    var regexPattern = {
        video: /\/video/,
        artist: /\/artist/,
        photo: /\/photo/,
        blog: /\/news/,
        album: /\/music/,
        videoDetail: /\/video\//,
        blogDetail: /\/news\//,
        artistDetail: /\/artist\//,
        photoDetail: /\/photo\//,
        albumDetail: /\/album\//,
        videoCategory: /\/video\/category/,
        photoCategory: /\/photo\/category/,
        blogCategory: /\/news\/category/,
        tour: /\/tour/,
        about: /\/about/,
        privacypolicy: /\/privacy-policy/,
        termsofuse: /\/terms-of-use/,
        contact: /\/contact/,
        studiocontactform: /\/studio-contact-form/,
        studios: /\/studios/,
        home: /\//,
    }

    var pageConfig = {
        artistName : "WMNashville",
        platform: "WMNashville",
        reportSuites : "wmg,wmgwbrn,wmgwbrwbrnashvillecom",
        label:"WMN",
        sublabel:"UK"
    }

    var pathPattern, title = "";
    switch (true) {    
        case regexPattern.artistDetail.test(path): pathPattern = "/artistDetail"; title = path.split("/").pop(); break;
        case regexPattern.artist.test(path): pathPattern = "/artist"; break;    
        case regexPattern.tour.test(path): pathPattern = "/tour"; break;
        case regexPattern.about.test(path): pathPattern = "/about"; break;
        case regexPattern.privacypolicy.test(path): pathPattern = "/privacypolicy"; break;
        case regexPattern.termsofuse.test(path): pathPattern = "/termsofuse"; break;
        case regexPattern.contact.test(path): pathPattern = "/contact"; break;
        case regexPattern.studiocontactform.test(path): pathPattern = "/studiocontactform"; break;
        case regexPattern.studios.test(path): pathPattern = "/studios"; break;
        case regexPattern.about.test(path): pathPattern = "/about"; break;

        case regexPattern.videoCategory.test(path): pathPattern = "/videoCategory"; title = path.split("/").pop().split("?").shift(); break;
        case regexPattern.videoDetail.test(path): pathPattern = "/videoDetail"; title = path.split("/").pop(); break;
        case regexPattern.video.test(path): pathPattern = "/video"; break;
        case regexPattern.photoCategory.test(path): pathPattern = "/photoCategory"; title = path.split("/").pop().split("?").shift(); break;
        case regexPattern.photoDetail.test(path): pathPattern = "/photoDetail"; title = path.split("/").pop(); break;
        case regexPattern.photo.test(path): pathPattern = "/photo"; break;
        case regexPattern.blogCategory.test(path): pathPattern = "/blogCategory"; title = path.split("/").pop().split("?").shift(); break;
        case regexPattern.blogDetail.test(path): pathPattern = "/blogDetail"; title = path.split("/").pop(); break;
        case regexPattern.blog.test(path): pathPattern = "/blog"; break;
        case regexPattern.blogDetail.test(path): pathPattern = "/artistDetail"; title = path.split("/").pop(); break;
        case regexPattern.album.test(path): pathPattern = "/album"; break;        
        case regexPattern.home.test(path): pathPattern = "/"; break;
        case regexPattern.album.test(path): pathPattern = "/album"; break;
        case regexPattern.albumDetail.test(path): pathPattern = "/albumDetail"; break;
     
    }

    var page = {
        "/": {
            pageInfo: {
                pageName: pageConfig.artistName+" :HomePage",
                server: pageConfig.artistName+":site"
            },
            category: {
                primaryCategory: pageConfig.artistName+" :Home",
                pageType: "Homepage"
            }
        },
        "/video": {
            pageInfo: {
                pageName: pageConfig.artistName+":Videos",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Videos",
                pageType: "videos:landing"
            }
        },
        "/album": {
            pageInfo: {
                pageName: pageConfig.artistName+":Music",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Music",
                pageType: "music:landing"
            }
        },
        "/videoDetail": {
            pageInfo: {
                pageName: pageConfig.artistName+":Videos:" + title,
            },
            category: {
                primaryCategory: pageConfig.artistName+":Videos",
                pageType: "videos:details"
            }
        },
        "/albumDetail": {
            pageInfo: {
                pageName: pageConfig.artistName+":Videos:" + title,
            },
            category: {
                primaryCategory: pageConfig.artistName+":Videos",
                pageType: "videos:details"
            }
        },
        "/videoCategory": {
            pageInfo: {
                pageName: pageConfig.artistName+":Music:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":Music",
                pageType: "music:album details"
            }
        },
        "/photo": {
            pageInfo: {
                pageName: pageConfig.artistName+":Photos",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Photos",
                pageType: "photos:landing"
            }
        },
        "/photoDetail": {
            pageInfo: {
                pageName: pageConfig.artistName+":Photos:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":Photos",
                pageType: "photos:details"
            }
        },
        "/photoCategory": {
            pageInfo: {
                pageName: pageConfig.artistName+":Photos:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":Photos",
                pageType: "photos:category"
            }
        },
        "/album": {
            pageInfo: {
                pageName: pageConfig.artistName+":Music",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Music",
                pageType: "music:landing"
            }
        },
        "/artist": {
            pageInfo: {
                pageName: pageConfig.artistName+" :Artist",
            },
            category: {
                primaryCategory: pageConfig.artistName+" :Artist",
                pageType: "artist:landing"
            }
        },
        "/artistDetail": {
            pageInfo: {
                pageName: pageConfig.artistName+" :Artist:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+" :Artist",
                pageType: "Artist:details"
            }
        },
        "/music": {
            pageInfo: {
                pageName: pageConfig.artistName+":Music",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Music",
                pageType: "music:landing"
            }
        },
        "/tour": {
            pageInfo: {
                pageName: pageConfig.artistName+":Upcoming Tours",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Tours",
                pageType: "tour:upcoming"
            }
        },
        "/about": {
            pageInfo: {
                pageName: pageConfig.artistName+" :About page",
            },
            category: {
                primaryCategory: pageConfig.artistName+" :About page",
                pageType: "About"
            }
        },
        "/termsofuse": {
            pageInfo: {
                pageName: pageConfig.artistName+" :Terms of use",
            },
            category: {
                primaryCategory: pageConfig.artistName+" :Terms of use",
                pageType: "Termsofuse"
            }
        },
        "/contact": {
            pageInfo: {
                pageName: pageConfig.artistName+" :Contact",
            },
            category: {
                primaryCategory: pageConfig.artistName+" :Contact",
                pageType: "contact"
            }
        },
        "/studiocontactform": {
            pageInfo: {
                pageName: pageConfig.artistName+" :Studio Contact Form",
            },
            category: {
                primaryCategory: pageConfig.artistName+" :Studio Contact Form",
                pageType: "studiocontactform"
            }
        },
        "/studios": {
            pageInfo: {
                pageName: pageConfig.artistName+":studios",
            },
            category: {
                primaryCategory: pageConfig.artistName+" :studios",
                pageType: "studios"
            }
        },
        "/privacypolicy": {
            pageInfo: {
                pageName: pageConfig.artistName+" :Privacy Policy",
            },
            category: {
                primaryCategory: pageConfig.artistName+" :Privacy Policy",
                pageType: "privacypolicy"
            }
        },

        "/blog": {
            pageInfo: {
                pageName: pageConfig.artistName+" :Blog",
            },
            category: {
                primaryCategory: pageConfig.artistName+" :Blog",
                pageType: "blog:landing"
            }
        },
        "/blogDetail": {
            pageInfo: {
                pageName: pageConfig.artistName+" :Blog:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+" :Blog",
                pageType: "blog:details"
            }
        },
        "/blogCategory": {
            pageInfo: {
                pageName: pageConfig.artistName+":Blog:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":Blog",
                pageType: "blog:category"
            }
        },
    }

    var data = page[pathPattern];
    data.pageConfig = pageConfig;
    
    return data;
}

/***/ }),

/***/ "../../../../../src/app/animations/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hoverOverlay */
/* unused harmony export hoverEffectFade */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tourButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delayedButtonFade; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var hoverOverlay = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('hoverOverlay', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
]);
var hoverEffectFade = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('hoverEffectFade', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({})),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({})),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('in <=> out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("1000ms ease-in"))
]);
var fadeIn = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeIn', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out1,', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0.5 })),
    //state('out2,', style({opacity: 0.3,transform:"translateY(15%)"})),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out2,', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0.1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out1 <=> in', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({}), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("0.2s ease-in-out")]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out1 <=> out2', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({}), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("0.5s ease-in-out")]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out2 <=> out1', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({}), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("0.5s ease-in-out")]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('hidden <=> out2', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({}), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("0.2s ease-in-out")]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('hidden => in', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({}), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("1s ease-in-out")])
]);
var tourButton = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('tourButton', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, "margin-bottom": "0px" })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, "margin-bottom": "30px" })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out => in', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({}), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("0.6s ease-in-out")])
]);
var delayedButtonFade = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('delayedButtonFade', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out => in', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({}), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("1s ease-in-out")])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav a {\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  text-transform: none;  \r\n  color: #fff;  \r\n  margin-right: 20px;\r\n  line-height: 1;\r\n  position: relative;\r\n     \r\n}\r\n\r\n \r\n\r\n\r\nnav a:not(.active):hover {\r\n    font-weight: normal;\r\n    \r\n}\r\n.hat {\r\n  padding-top: 30px; \r\n  background-color: #000;\r\n}\r\n.logo-block {\r\n  float: left;\r\n    padding: 10px;\r\n}\r\n.nav-toggle {\r\n  cursor: pointer;\r\n  width: 30px;\r\n  height: 25px;\r\n  z-index: 30;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  position: fixed;\r\n  right: 15px;\r\n  top: 15px;\r\n}\r\n.nav-toggle.show {\r\n    position: fixed;\r\n\r\n}\r\n.nav-toggle.show span {\r\n \r\n    position: fixed;\r\n    left: initial;\r\n}\r\n\r\n\r\n .fixed-nav{\r\n  background:#000;\r\n}\r\nbody.home div#fixed-nav {\r\n    background:transparent;\r\n}\r\n\r\nnav.mobile-menu {\r\n    display: block;\r\n    position: fixed;\r\n    right: -190px;\r\n    top: 0;\r\n    z-index: 29;\r\n    width: 80%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    background-color: #000;\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    overflow: hidden;\r\n    padding: 34px 25px 0;\r\n      transform: translateX(100%);\r\n    -webkit-transform: translateX(100%);\r\n    transition: -webkit-transform 0.4s ease-in-out 0s;\r\n    transition: transform 0.4s ease-in-out 0s;\r\n    transition: transform 0.4s ease-in-out 0s, -webkit-transform 0.4s ease-in-out 0s;\r\n    -webkit-transition: -webkit-transform 0.4s ease-in-out 0s;\r\n   \r\n}\r\nnav.mobile-menu.show {\r\n  visibility: visible;\r\n      right: 0px;\r\n      transform: translateX(0px);\r\n    -webkit-transform: translateX(0px);\r\n  opacity: 0.97;\r\n \r\n}\r\nnav.mobile-menu a {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n    line-height: 1;\r\n    text-align: right;\r\n    font-size: 3.5vh;\r\n    margin: 0;\r\n    margin-top:30px;\r\n}\r\nnav.mobile-menu a:first-child{\r\n  margin-top: 65px;\r\n}\r\nnav a.newsletter {\r\n    cursor:pointer;\r\n}\r\n\r\n@-webkit-keyframes hamburger {\r\n    0%   {\r\n       opacity: 0;\r\n       height: 0;\r\n       width: 0;\r\n    }\r\n    30%  {\r\n      height: 70%;\r\n      width: 70%;\r\n      opacity: 0.1;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      height: 100%;\r\n      width: 100%;\r\n    }\r\n}\r\n@keyframes hamburger {\r\n    0%   {\r\n       opacity: 0;\r\n       height: 0;\r\n       width: 0;\r\n    }\r\n    30%  {\r\n      height: 70%;\r\n      width: 70%;\r\n      opacity: 0.1;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      height: 100%;\r\n      width: 100%;\r\n    }\r\n}\r\n\r\n.merchPanel {background-color:#0d0e1c;display: block;}\r\n\r\n.merchPanel h2 {\r\n  font-size: 30px;\r\n  font-weight: 300;\r\n  color: #fff;\r\n  padding-top: 45px;\r\n  padding-bottom: 56px;\r\n}\r\n.merchPanel .buttonWrapper {\r\n    text-align: center;\r\n}\r\n\r\n.merchPanel .g-layout {\r\n    padding-bottom: 70px;\r\n}\r\nnav.mobileMenu {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    width: 170px;\r\n}\r\n@media only screen and (min-width: 1024px) {\r\n  nav:before {\r\n    left: -100px;\r\n  }\r\n \r\n  nav a {\r\n    font-family: 'gothamlight';\r\n    color: #fff;\r\n    margin-right: 30px;\r\n    font-size: 16px;\r\n    text-transform: capitalize;\r\n    cursor: pointer;\r\n   }\r\n  body.home div#fixed-nav {\r\n    background:transparent;\r\n}\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    nav.mobile-menu a {\r\n      \r\n      line-height: 1;\r\n      font-size: 20px;\r\n     \r\n  }\r\n   nav a.active:after, nav a:hover:after  {\r\n    opacity:0;\r\n  }\r\n  nav a.active{\r\n    color:#1563a8;\r\n  }\r\n  .merchPanel h2 {\r\n    font-size: 24px;\r\n    padding-top: 22px;\r\n    padding-bottom: 40px;\r\n  }\r\n  .merchPanel .g-layout h2 span{\r\n    display: block;\r\n    padding-bottom: 10px;\r\n  }\r\n  /*\r\n  nav.mobile-menu a.news, nav.mobile-menu a.music, nav.mobile-menu a.tour, breadcrumb{\r\n    display:none;\r\n  }*/\r\n  breadcrumb{\r\n    display:none;\r\n  }\r\n  nav.mobileMenu a.news {\r\n    margin-right: 0;\r\n  }\r\n\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .nav-toggle, nav.mobileMenu{\r\n    display:none;\r\n  }\r\n \r\n}\r\n\r\n/* Nav animation */\r\n\r\nul.menu {\r\n  display:inline-block;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  text-align:center;\r\n  position:relative;\r\n  font-size: 0\r\n}\r\nul.menu li {\r\n  display: inline-block;\r\n}\r\n\r\nul.menu a {\r\n  display: block;\r\n  text-decoration: none;\r\n  transition: color .3s;\r\n  font-family: gothamlight;\r\n  color: #fff;\r\n  /* margin-right: 30px; */\r\n  font-size: 16px;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (min-width: 1025px){\r\n  ul.menu:hover li a{\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  ul.menu li:hover a{\r\n      color: rgba(255, 255, 255, 1);\r\n  }\r\n  nav.g-layout{\r\n    padding: 0;\r\n  }\r\n  .target {\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n    position: absolute;\r\n    left:0;\r\n    bottom: -2px;\r\n    height:4px;\r\n    background-color:transparent;\r\n    transition:background-color .3s, left .3s;\r\n  }\r\n  .target:before,\r\n  .target:after{\r\n    content:'';\r\n    position:absolute;\r\n    height:100%;\r\n    /* width:15%;\r\n    background-color:#ededed;  */\r\n  \r\n  }\r\n  .target:before {\r\n    left:0;\r\n  }\r\n  .target:after {\r\n    right:0;\r\n  }\r\n  ul.menu li{\r\n    padding: 25px 0;\r\n  }\r\n  ul.menu li:hover ~ .target, li:nth-child(1).active ~ .target {\r\n    background-color:#1563a8;\r\n    width: 98.563px;\r\n    left: 0;\r\n  }\r\n  ul.menu li:nth-child(2):hover ~ .target, li:nth-child(2).active ~ .target {\r\n    background-color:#1563a8;\r\n    width: 86.141px;\r\n    left:128.563px;\r\n  }\r\n  ul.menu li:nth-child(3):hover ~ .target, li:nth-child(3).active ~ .target {\r\n    background-color:#1563a8;\r\n    width: 43.063px;\r\n    left:244.704px;\r\n  }\r\n  ul.menu li:nth-child(4):hover ~ .target, li:nth-child(4).active ~ .target {\r\n    background-color:#1563a8;\r\n    width: 60.016px;\r\n    left:317.67px;\r\n  }\r\n  ul.menu li:nth-child(5):hover ~ .target, li:nth-child(5).active ~ .target {\r\n    background-color:#1563a8;\r\n    width: 59.078px;\r\n    left:407.783px;\r\n  }\r\n  ul.menu li:nth-child(6):hover ~ .target, li:nth-child(6).active ~ .target {\r\n    background-color:#1563a8;\r\n    width: 49.891px;\r\n    left:496.861px;\r\n  } \r\n  ul.menu li:nth-child(7):hover ~ .target, li:nth-child(7).active ~ .target {\r\n    background-color:#1563a8;\r\n    width: 84.672px;\r\n    left:568.752px;\r\n  } \r\n} \r\n\r\n@media only screen and (min-width: 768px) and (max-width: 1024px){\r\n  .logo-block {\r\n   \r\n      padding: 20px;\r\n  }\r\n  nav ul.menu a.active:after, nav ul.menu a:hover:after  {\r\n    content:\"\";\r\n    position: absolute;\r\n    display: block;\r\n    width:100%;\r\n    height: 4px;\r\n    top:38px;\r\n    background: #1563a8;\r\n    \r\n  } \r\n}\r\n\r\n/* Nav animation Ends */\r\n/*@media only screen and (min-width: 768px) and (max-width: 1024px){\r\n\r\n nav a.active:after, nav a:hover:after  {\r\n  content:\"\";\r\n  position: absolute;\r\n  display: block;\r\n  width:100%;\r\n  height: 4px;\r\n  top:38px;\r\n  background: #1563a8;\r\n\t\r\n} \r\n\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [class.loading]=\"initLoading\" id=\"head2\">\r\n  <div [class.sticky]=\"shouldStick\" [class.blur]=\"isMlistshow\" class=\"fixed-nav\" id=\"fixed-nav\">\r\n    <app-block [blockID]=\"env.logoBlockId\" class=\"logo-block\"></app-block>\r\n    <nav class=\"mobileMenu\">\r\n\r\n    </nav>\r\n    <nav [class.sticky]=\"shouldStick\" class=\"g-layout\" [class.mobile-menu]=\"isMobileMenu\" [class.show]=\"showMenu\" *ngIf=\"isMobileMenu\">\r\n      <a [routerLink]=\"['/about']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n        (click)=\"setTitle( 'About | Warner Music Nashville ' )\">About WMN</a>\r\n      <a (click)=\"setTitle( 'Artist | Warner Music Nashville' )\" [routerLink]=\"['/artist']\" [routerLinkActive]=\"['active']\"\r\n        class=\"artist\">Our Artists</a>\r\n      <a (click)=\"setTitle( 'News | Warner Music Nashville' )\" [routerLink]=\"['/news']\" [routerLinkActive]=\"['active']\"\r\n        class=\"news\">News</a>\r\n      <a href=\" http://www.wmg.com/careers\" target=\"_blank\">Careers</a>\r\n      <a href=\"studios\" target=\"_blank\">Studios</a>\r\n      <a target=\"_blank\"  href=\" http://store.warnermusic.com/warner-music-nashville.html\">Store</a>\r\n      <a (click)=\"setTitle( 'NewsLetter' )\" [routerLinkActive]=\"['active']\" [class.show]=\"isMlistshow\">Newsletter</a>\r\n    </nav>\r\n    <nav [class.sticky]=\"shouldStick\" class=\"g-layout\" [class.mobile-menu]=\"isMobileMenu\" [class.show]=\"showMenu\" *ngIf=\"!isMobileMenu\">\r\n      <ul class=\"menu\">\r\n        <li [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/about']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n            (click)=\"setTitle( 'About | Warner Music Nashville' )\">About WMN</a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['active']\">\r\n          <a (click)=\"setTitle( 'Artist | Warner Music Nashville' )\" [routerLink]=\"['/artist']\" [routerLinkActive]=\"['active']\"\r\n            class=\"artist\">Our Artists</a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['active']\">\r\n          <a (click)=\"setTitle( 'News | Warner Music Nashville' )\" [routerLink]=\"['/news']\" [routerLinkActive]=\"['active']\"\r\n            class=\"news\">News</a>\r\n        </li>\r\n        <li>\r\n          <a href=\" http://www.wmg.com/careers \" target=\"_blank \">Careers</a>\r\n        </li>\r\n        <li>\r\n          <a  href=\"/studios\" target=\"_blank\">Studios</a>\r\n        </li>\r\n        <li>\r\n          <a target=\"_blank\" href=\" http://store.warnermusic.com/warner-music-nashville.html\">Store</a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['active']\">\r\n          <a (click)=\"setTitle( 'NewsLetter' )\"  [routerLinkActive]=\"['active']\" [class.show]=\"isMlistshow\">Newsletter</a>\r\n        </li>\r\n        <span class=\"target\"></span>\r\n      </ul>\r\n    </nav>\r\n    <div id=\"nav-icon3\" class=\"nav-toggle\" [class.show]=\"showMenu\" (click)=\"toggleMenu()\">\r\n      <span> </span>\r\n\r\n    </div>\r\n    <!--app-block [blockID]=\"env.signupBlockId\" class=\"signup-block\"></app-block-->\r\n  </div>\r\n  <!--\r\n  <breadcrumb></breadcrumb>\r\n  -->\r\n  <div class=\"homePanelCon mailinglistPanel\" [class.show]=\"isMlistshow\">\r\n    <div class=\"mailinglistPanel-ImnnerWrapper\">\r\n      <div class=\"g-layout\">\r\n        <div class=\"close_wrapper\">\r\n          <a class=\"close\" (click)=\"closelightbox()\">x</a>\r\n        </div>\r\n\r\n        <app-mailing-list-block [customClass]=\"'mailing-nav-block'\" [artistname]=\"'Warner Music Nashville'\" [newsLetterID]=\"'6389157'\" [artistDataSoursce]=\"'WMNashville_website_newsletter_optin'\">\r\n          <div mailingListCopy>Subscribe to <span>WMN's</span> e-mail list for latest updates, tour announcements, new music and more.</div>\r\n        </app-mailing-list-block>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  <div class=\"footerWrapperBlock\">\r\n    <div class=\"footerinnerwrapper\">\r\n      <div class=\"MobileWrapper\" *ngIf=\"mobilereolution\" (window:resize)=\"onResizefot($event)\">\r\n\r\n        <app-mailing-list-block [customClass]=\"'mailing-footer-block'\" [artistname]=\"'Warner Music Nashville'\" [newsLetterID]=\"'6389157'\" [artistDataSoursce]=\"'WMNashville_website_newsletter_optin'\" [footerMlist]= \"true\">\r\n          <div mailingListCopy>Subscribe to the newsletter list for artist and label news, announcements, events and more.</div>\r\n\r\n        </app-mailing-list-block>\r\n        <app-footer></app-footer>\r\n        <!-- <app-block [blockID]=\"env.footerBlockMobilenew\"></app-block> -->\r\n\r\n      </div>\r\n\r\n      <div class=\"DesktopWrapper\" *ngIf=\"desktopResolution\" (window:resize)=\"onResizefot($event)\">\r\n        <!-- <app-block [blockID]=\"env.footerBlockIdnew\"></app-block> -->\r\n        <app-footer></app-footer>\r\n        <app-mailing-list-block [customClass]=\"'mailing-footer-block'\" [artistname]=\"'Warner Music Nashville'\" [newsLetterID]=\"'6389157'\" [artistDataSoursce]=\"'WMNashville_website_newsletter_optin'\" [footerMlist]= \"true\">\r\n          <div mailingListCopy>Subscribe to the newsletter list for artist and label news, announcements, events and more.</div>\r\n        </app-mailing-list-block>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_animations__ = __webpack_require__("../../../../../src/app/animations/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angulartics2__ = __webpack_require__("../../../../angulartics2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angulartics_omniture_angulartics_omniture__ = __webpack_require__("../../../../../src/app/angulartics-omniture/angulartics-omniture.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angulartics_omniture_angulartics_omniture___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angulartics_omniture_angulartics_omniture__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__general_service__ = __webpack_require__("../../../../../src/app/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppComponent = /** @class */ (function () {
    function AppComponent(router, titleService, el, angulartics2, angulartics2Omniture, _generalService) {
        /*
        router.events.forEach((event) => {
          if(event instanceof NavigationStart) {
            //console.log("-----------------NavigationStart----------------------------------");
            console.log(event);
          }
          if(event instanceof NavigationCancel) {
            console.log("-----------------NavigationCancel----------------------------------");
            console.log(event);
          }
          // NavigationEnd
          // NavigationCancel
          // NavigationError
          // RoutesRecognized
        });*/
        this.router = router;
        this.titleService = titleService;
        this.el = el;
        this._generalService = _generalService;
        this.isMobileMenu = false;
        this.showMenu = false;
        this.breadcrumb = [];
        this.shouldStick = false;
        this.isMlistshow = false;
        this.mobilereolution = false;
        this.desktopResolution = false;
        this.env = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */];
    }
    AppComponent.prototype.makeNavSticky = function (event) {
        var scrollTop = event.pageY | document.body.scrollTop;
        var heightDecider;
        if (this.isMobileMenu) {
            heightDecider = 50;
        }
        else {
            heightDecider = 10;
        }
        if (scrollTop > (window.innerHeight - heightDecider)) {
            this.shouldStick = true;
        }
        else {
            this.shouldStick = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        if (window.screen.width < 1023) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (window.screen.width > 1023) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
        if (__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* Utils */].checkMobile()) {
            this.isMobileMenu = true;
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        }
        ;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.toggleClass(document.getElementsByTagName('body')[0], 'loading');
        document.body.classList.remove("loading");
    };
    AppComponent.prototype.setPosition = function (position) {
        var _this = this;
        console.log(position.coords);
        this._generalService.geolocate(false, false, "visitorGeolocation").subscribe(function (data) {
            //console.log(data);
            var location = {};
            location["latitude"] = position.coords.latitude;
            location["longitude"] = position.coords.longitude;
            location["country"] = data.countryName;
            _this._generalService.tellNavigationSource(location);
            console.log("------------------this._generalService.tellNavigationSource--------------------");
            //if(localStorage) localStorage.setItem("Clocation", JSON.stringify(location));
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        // console.log(position.coords);
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.toggleMenu();
        if (newTitle == "NewsLetter") {
            this.mailinglistcall();
        }
        else {
            this.titleService.setTitle(newTitle);
        }
    };
    AppComponent.prototype.mailinglistcall = function () {
        this.isMlistshow = true;
    };
    AppComponent.prototype.closelightbox = function () {
        this.isMlistshow = false;
    };
    AppComponent.prototype.toggleMenu = function () {
        if (this.isMobileMenu) {
            this.showMenu = !this.showMenu;
        }
    };
    AppComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 767) {
            this.isMobileMenu = true;
        }
        else {
            this.isMobileMenu = this.showMenu = false;
        }
    };
    AppComponent.prototype.onResizefot = function (event) {
        if (event.target.innerWidth < 1023) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (event.target.innerWidth > 1023) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    AppComponent.prototype.toggleClass = function (ele, class1) {
        var classes = ele.className;
        var regex = new RegExp('\\b' + class1 + '\\b');
        var hasOne = classes.match(regex);
        class1 = class1.replace(/\s+/g, '');
        if (hasOne)
            ele.className = classes.replace(regex, '');
        // else
        //   ele.className = classes + class1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "makeNavSticky", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_animations__["a" /* delayedButtonFade */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__general_service__["a" /* GeneralService */]],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angulartics2__["Angulartics2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angulartics2__["Angulartics2"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angulartics_omniture_angulartics_omniture__["Angulartics2Omniture"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angulartics_omniture_angulartics_omniture__["Angulartics2Omniture"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__general_service__["a" /* GeneralService */]) === "function" && _f || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_scrollreveal__ = __webpack_require__("../../../../ng-scrollreveal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__block_block_component__ = __webpack_require__("../../../../../src/app/block/block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__block_block_service__ = __webpack_require__("../../../../../src/app/block/block.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__top_tracks_top_tracks_service__ = __webpack_require__("../../../../../src/app/top-tracks/top-tracks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/+home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tour_tour_component__ = __webpack_require__("../../../../../src/app/+tour/tour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tour_tour_search_pipe__ = __webpack_require__("../../../../../src/app/+tour/tour-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tour_filter_country_pipe__ = __webpack_require__("../../../../../src/app/+tour/filter-country.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tour_filter_by_location_pipe__ = __webpack_require__("../../../../../src/app/+tour/filter-by-location.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__artists_filter_by_type_pipe__ = __webpack_require__("../../../../../src/app/artists/filter-by-type.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__artists_filter_truncate_pipe__ = __webpack_require__("../../../../../src/app/artists/filter-truncate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__news_filter_by_artist_pipe__ = __webpack_require__("../../../../../src/app/+news/filter-by-artist.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__artists_filter_by_name_pipe__ = __webpack_require__("../../../../../src/app/artists/filter-by-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__news_filter_multiple_images_pipe__ = __webpack_require__("../../../../../src/app/+news/filter-multiple-images.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__news_filter_PromotedToFrontPage__ = __webpack_require__("../../../../../src/app/+news/filter-PromotedToFrontPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__news_filter_by_newsId_pipe__ = __webpack_require__("../../../../../src/app/+news/filter-by-newsId.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tour_tour_service__ = __webpack_require__("../../../../../src/app/+tour/tour.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tour_tourStorage_service__ = __webpack_require__("../../../../../src/app/+tour/tourStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tour_tour_block_tour_block_component__ = __webpack_require__("../../../../../src/app/+tour/tour-block/tour-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tour_tour_embed_tour_embed_component__ = __webpack_require__("../../../../../src/app/+tour/tour-embed/tour-embed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tour_tour_list_tour_list_component__ = __webpack_require__("../../../../../src/app/+tour/tour-list/tour-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__news_news_block_news_block_component__ = __webpack_require__("../../../../../src/app/+news/news-block/news-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__news_news_service__ = __webpack_require__("../../../../../src/app/+news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__news_artisttagnames_service__ = __webpack_require__("../../../../../src/app/+news/artisttagnames.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__news_news_component__ = __webpack_require__("../../../../../src/app/+news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__news_news_list_news_list_component__ = __webpack_require__("../../../../../src/app/+news/news-list/news-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__news_news_detail_news_detail_component__ = __webpack_require__("../../../../../src/app/+news/news-detail/news-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__news_news_carousel_news_carousel_component__ = __webpack_require__("../../../../../src/app/+news/news-carousel/news-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__lightbox_lightbox_component__ = __webpack_require__("../../../../../src/app/lightbox/lightbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_social_buttons_social_buttons_component__ = __webpack_require__("../../../../../src/app/shared/social-buttons/social-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_twitterEmbed_twitter_embed_component__ = __webpack_require__("../../../../../src/app/shared/twitterEmbed/twitter-embed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__taxonomy_list_taxonomy_list_component__ = __webpack_require__("../../../../../src/app/taxonomy-list/taxonomy-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__music_music_component__ = __webpack_require__("../../../../../src/app/+music/music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__music_track_block_track_block_component__ = __webpack_require__("../../../../../src/app/+music/track-block/track-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__music_album_block_album_block_component__ = __webpack_require__("../../../../../src/app/+music/album-block/album-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__music_custom_audio_custom_audio_component__ = __webpack_require__("../../../../../src/app/+music/custom-audio/custom-audio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__music_music_list_music_list_component__ = __webpack_require__("../../../../../src/app/+music/music-list/music-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__music_side_drawer_side_drawer_component__ = __webpack_require__("../../../../../src/app/+music/side-drawer/side-drawer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__music_album_detail_album_detail_component__ = __webpack_require__("../../../../../src/app/+music/album-detail/album-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__music_music_detail_music_detail_component__ = __webpack_require__("../../../../../src/app/+music/music-detail/music-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__page_page_component__ = __webpack_require__("../../../../../src/app/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__page_page_service__ = __webpack_require__("../../../../../src/app/page/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__carousel_carousel_directive__ = __webpack_require__("../../../../../src/app/carousel/carousel.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__comments_comments_service__ = __webpack_require__("../../../../../src/app/comments/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__comment_sidedrawer_comments_sidedrawer_component__ = __webpack_require__("../../../../../src/app/comment-sidedrawer/comments-sidedrawer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__mailing_list_mailing_list_block_mailing_list_block_component__ = __webpack_require__("../../../../../src/app/+mailing-list/mailing-list-block/mailing-list-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__shared_username_pipe__ = __webpack_require__("../../../../../src/app/shared/username.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__safe_url_pipe__ = __webpack_require__("../../../../../src/app/safe-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__shared_ValuesPipe_pipe__ = __webpack_require__("../../../../../src/app/shared/ValuesPipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__music_track_detail_track_detail_component__ = __webpack_require__("../../../../../src/app/+music/track-detail/track-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_angulartics2__ = __webpack_require__("../../../../angulartics2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_60_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angulartics_omniture_angulartics_omniture__ = __webpack_require__("../../../../../src/app/angulartics-omniture/angulartics-omniture.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angulartics_omniture_angulartics_omniture___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_61__angulartics_omniture_angulartics_omniture__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__artists_artists_component__ = __webpack_require__("../../../../../src/app/artists/artists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__artists_artist_detail_artist_detail_component__ = __webpack_require__("../../../../../src/app/artists/artist-detail/artist-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__artists_artists_services__ = __webpack_require__("../../../../../src/app/artists/artists.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__artists_featuredartist_service__ = __webpack_require__("../../../../../src/app/artists/featuredartist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__artists_artist_landing_artist_landing_component__ = __webpack_require__("../../../../../src/app/artists/artist-landing/artist-landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__artists_featuredartist_featuredartist_component__ = __webpack_require__("../../../../../src/app/artists/featuredartist/featuredartist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__artists_artist_block_artist_block_component__ = __webpack_require__("../../../../../src/app/artists/artist-block/artist-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__artists_artists_carousel_artists_carousel_component__ = __webpack_require__("../../../../../src/app/artists/artists-carousel/artists-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__news_news_img_carousel_news_img_carousel_component__ = __webpack_require__("../../../../../src/app/+news/news-img-carousel/news-img-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__livefyre_livefyre_component__ = __webpack_require__("../../../../../src/app/livefyre/livefyre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__livefyre_livefyre_block_livefyre_block_component__ = __webpack_require__("../../../../../src/app/livefyre/livefyre-block/livefyre-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__spotify_spotify_component__ = __webpack_require__("../../../../../src/app/spotify/spotify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__artists_artist_tour_artist_tour_component__ = __webpack_require__("../../../../../src/app/artists/artist-tour/artist-tour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__spotify_spotify_carousel_spotify_carousel_component__ = __webpack_require__("../../../../../src/app/spotify/spotify-carousel/spotify-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79_angular2_perfect_scrollbar__ = __webpack_require__("../../../../angular2-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79_angular2_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_79_angular2_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__contactform_contactform_component__ = __webpack_require__("../../../../../src/app/contactform/contactform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__contactform_done_done_component__ = __webpack_require__("../../../../../src/app/contactform/done/done.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__terms_ofuse_terms_ofuse_component__ = __webpack_require__("../../../../../src/app/terms-ofuse/terms-ofuse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__top_tracks_top_tracks_component__ = __webpack_require__("../../../../../src/app/top-tracks/top-tracks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__top_tracks_top_tracks_carousel_top_tracks_carousel_component__ = __webpack_require__("../../../../../src/app/top-tracks/top-tracks-carousel/top-tracks-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__artists_tour_soundkick_tour_soundkick_component__ = __webpack_require__("../../../../../src/app/artists/tour-soundkick/tour-soundkick.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__artists_tour_soundkick_service__ = __webpack_require__("../../../../../src/app/artists/tour-soundkick.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { VideoBlockComponent } from './+video/video-block';
//import { VideoComponent} from './+video/video.component'
//import { VideoListComponent} from './+video/video-list/video-list.component';
//import { VideoDetailBlockComponent} from './+video/video-detail-block/video-detail-block.component';
//import { VideoHomeBlockComponent} from './+video/video-home-block/video-home-block.component';
//import { Video, VideoService } from "./+video/video.service";
//import { VideoDetailComponent } from './+video/video-detail/video-detail.component';
//import { VideoCategoryComponent } from './+video/video-category/video-category.component';


























//import { PhotoBlockComponent } from './+photo/photo-block/photo-block.component';
//import { Photo, PhotoService } from './+photo/photo.service';
//import { PhotoComponent } from './+photo/photo.component';
//import { PhotoListComponent } from './+photo/photo-list/photo-list.component';
//import { PhotoDetailComponent } from './+photo/photo-detail/photo-detail.component';
//import { PhotoCategoryComponent } from './+photo/photo-category/photo-category.component';
//import { PhotoCarouselComponent } from './+photo/photo-carousel/photo-carousel.component';





//import { MerchComponent } from './merch/merch.component';
//import { MerchCarouselComponent } from './merch-carousel/merch-carousel.component';
//import { MerchService } from "./merch/merch.service";












//import { SetClassInView } from 'angular2-set-class-in-view/main';






































var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'swipe': { velocity: 0.4, threshold: 20 },
            'pinch': { enable: false },
            'rotate': { enable: false }
        };
        return _this;
    }
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["HammerGestureConfig"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_29__news_news_block_news_block_component__["a" /* NewsBlockComponent */], __WEBPACK_IMPORTED_MODULE_7__breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */], __WEBPACK_IMPORTED_MODULE_9__block_block_component__["a" /* BlockComponent */], __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_13__tour_tour_component__["a" /* TourComponent */], __WEBPACK_IMPORTED_MODULE_14__tour_tour_search_pipe__["a" /* TourSearch */], __WEBPACK_IMPORTED_MODULE_18__artists_filter_truncate_pipe__["a" /* TruncatePipe */], __WEBPACK_IMPORTED_MODULE_17__artists_filter_by_type_pipe__["a" /* FilterByType */], __WEBPACK_IMPORTED_MODULE_20__artists_filter_by_name_pipe__["a" /* FilterByName */], __WEBPACK_IMPORTED_MODULE_15__tour_filter_country_pipe__["a" /* FilterCountry */], __WEBPACK_IMPORTED_MODULE_16__tour_filter_by_location_pipe__["a" /* FilterByLocation */], __WEBPACK_IMPORTED_MODULE_26__tour_tour_block_tour_block_component__["a" /* TourBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_27__tour_tour_embed_tour_embed_component__["a" /* TourEmbedComponent */], __WEBPACK_IMPORTED_MODULE_29__news_news_block_news_block_component__["a" /* NewsBlockComponent */], __WEBPACK_IMPORTED_MODULE_36__lightbox_lightbox_component__["a" /* LightboxComponent */], __WEBPACK_IMPORTED_MODULE_37__shared_social_buttons_social_buttons_component__["a" /* SocialButtonsComponent */], __WEBPACK_IMPORTED_MODULE_38__shared_twitterEmbed_twitter_embed_component__["a" /* TwitterEmbedComponent */], __WEBPACK_IMPORTED_MODULE_32__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__news_news_list_news_list_component__["a" /* NewsListComponent */], __WEBPACK_IMPORTED_MODULE_23__news_filter_by_newsId_pipe__["a" /* FilterByNewsID */], __WEBPACK_IMPORTED_MODULE_21__news_filter_multiple_images_pipe__["a" /* FilterMultipleImages */], __WEBPACK_IMPORTED_MODULE_19__news_filter_by_artist_pipe__["a" /* FilterByArtist */], __WEBPACK_IMPORTED_MODULE_22__news_filter_PromotedToFrontPage__["a" /* promotedToFrontpage */], __WEBPACK_IMPORTED_MODULE_39__taxonomy_list_taxonomy_list_component__["a" /* TaxonomyListComponent */], __WEBPACK_IMPORTED_MODULE_34__news_news_detail_news_detail_component__["a" /* NewsDetailComponent */], __WEBPACK_IMPORTED_MODULE_28__tour_tour_list_tour_list_component__["a" /* TourListComponent */], __WEBPACK_IMPORTED_MODULE_40__music_music_component__["a" /* MusicComponent */], __WEBPACK_IMPORTED_MODULE_41__music_track_block_track_block_component__["a" /* TrackBlockComponent */], __WEBPACK_IMPORTED_MODULE_42__music_album_block_album_block_component__["a" /* AlbumBlockComponent */], __WEBPACK_IMPORTED_MODULE_47__music_music_detail_music_detail_component__["a" /* MusicDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_43__music_custom_audio_custom_audio_component__["a" /* CustomAudioComponent */], __WEBPACK_IMPORTED_MODULE_44__music_music_list_music_list_component__["a" /* MusicListComponent */], __WEBPACK_IMPORTED_MODULE_45__music_side_drawer_side_drawer_component__["a" /* SideDrawerComponent */], __WEBPACK_IMPORTED_MODULE_46__music_album_detail_album_detail_component__["a" /* AlbumDetailComponent */], __WEBPACK_IMPORTED_MODULE_59__music_track_detail_track_detail_component__["a" /* TrackDetailComponent */], __WEBPACK_IMPORTED_MODULE_48__page_page_component__["a" /* PageComponent */], __WEBPACK_IMPORTED_MODULE_62__pagenotfound_pagenotfound_component__["a" /* pageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_52__comments_comments_component__["a" /* CommentsComponent */], __WEBPACK_IMPORTED_MODULE_54__comment_sidedrawer_comments_sidedrawer_component__["a" /* CommentsSideDrawerComponent */], __WEBPACK_IMPORTED_MODULE_50__carousel_carousel_component__["a" /* CarouselComponent */], __WEBPACK_IMPORTED_MODULE_51__carousel_carousel_directive__["a" /* CarouselDirective */], __WEBPACK_IMPORTED_MODULE_35__news_news_carousel_news_carousel_component__["a" /* NewsCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_55__mailing_list_mailing_list_block_mailing_list_block_component__["a" /* MailingListBlockComponent */], __WEBPACK_IMPORTED_MODULE_56__shared_username_pipe__["a" /* UserNamePipe */], __WEBPACK_IMPORTED_MODULE_57__safe_url_pipe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_58__shared_ValuesPipe_pipe__["a" /* ValuesPipe */], __WEBPACK_IMPORTED_MODULE_63__artists_artists_component__["a" /* ArtistsComponent */], __WEBPACK_IMPORTED_MODULE_64__artists_artist_detail_artist_detail_component__["a" /* ArtistDetailComponent */], __WEBPACK_IMPORTED_MODULE_67__artists_artist_landing_artist_landing_component__["a" /* ArtistLandingComponent */], __WEBPACK_IMPORTED_MODULE_68__artists_featuredartist_featuredartist_component__["a" /* FeaturedartistComponent */], __WEBPACK_IMPORTED_MODULE_69__artists_artist_block_artist_block_component__["a" /* ArtistblockComponent */], __WEBPACK_IMPORTED_MODULE_70__artists_artists_carousel_artists_carousel_component__["a" /* ArtistsCarouselComponent */], __WEBPACK_IMPORTED_MODULE_71__news_news_img_carousel_news_img_carousel_component__["a" /* NewsImgComponent */], __WEBPACK_IMPORTED_MODULE_72__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_74__livefyre_livefyre_block_livefyre_block_component__["a" /* LivefyreBlockComponent */], __WEBPACK_IMPORTED_MODULE_73__livefyre_livefyre_component__["a" /* LivefyreComponent */], __WEBPACK_IMPORTED_MODULE_77__artists_artist_tour_artist_tour_component__["a" /* ArtistTourComponent */], __WEBPACK_IMPORTED_MODULE_76__spotify_spotify_component__["a" /* SpotifyComponent */], __WEBPACK_IMPORTED_MODULE_78__spotify_spotify_carousel_spotify_carousel_component__["a" /* SpotifyCarouselComponent */], __WEBPACK_IMPORTED_MODULE_80__contactform_contactform_component__["a" /* ContactformComponent */], __WEBPACK_IMPORTED_MODULE_81__contactform_done_done_component__["a" /* DoneComponent */], __WEBPACK_IMPORTED_MODULE_82__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */], __WEBPACK_IMPORTED_MODULE_83__terms_ofuse_terms_ofuse_component__["a" /* TermsOfuseComponent */], __WEBPACK_IMPORTED_MODULE_84__contact_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_85__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_86__top_tracks_top_tracks_component__["a" /* TopTracksComponent */], __WEBPACK_IMPORTED_MODULE_87__top_tracks_top_tracks_carousel_top_tracks_carousel_component__["a" /* TopTracksCarouselComponent */], __WEBPACK_IMPORTED_MODULE_88__artists_tour_soundkick_tour_soundkick_component__["a" /* TourSoundkickComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_51__carousel_carousel_directive__["a" /* CarouselDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng_scrollreveal__["a" /* NgsRevealModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_8__app_routes__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_75_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_60_angulartics2__["Angulartics2Module"].forRoot([__WEBPACK_IMPORTED_MODULE_61__angulartics_omniture_angulartics_omniture__["Angulartics2Omniture"]]),
                __WEBPACK_IMPORTED_MODULE_79_angular2_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(PERFECT_SCROLLBAR_CONFIG),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_89__artists_tour_soundkick_service__["a" /* TourSoundkickService */], __WEBPACK_IMPORTED_MODULE_11__top_tracks_top_tracks_service__["a" /* TopTracksService */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["Title"], __WEBPACK_IMPORTED_MODULE_10__block_block_service__["a" /* BlockService */], __WEBPACK_IMPORTED_MODULE_66__artists_featuredartist_service__["a" /* FeaturedArtistService */], __WEBPACK_IMPORTED_MODULE_24__tour_tour_service__["a" /* TourService */], __WEBPACK_IMPORTED_MODULE_65__artists_artists_services__["b" /* ArtistService */], __WEBPACK_IMPORTED_MODULE_25__tour_tourStorage_service__["a" /* TourStorage */], __WEBPACK_IMPORTED_MODULE_30__news_news_service__["b" /* NewsService */], __WEBPACK_IMPORTED_MODULE_49__page_page_service__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_53__comments_comments_service__["a" /* CommentsService */], __WEBPACK_IMPORTED_MODULE_61__angulartics_omniture_angulartics_omniture__["Angulartics2Omniture"], __WEBPACK_IMPORTED_MODULE_31__news_artisttagnames_service__["a" /* ArtistTagService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["HAMMER_GESTURE_CONFIG"],
                    useClass: MyHammerConfig
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_news_component__ = __webpack_require__("../../../../../src/app/+news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news_list_news_list_component__ = __webpack_require__("../../../../../src/app/+news/news-list/news-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news_detail_news_detail_component__ = __webpack_require__("../../../../../src/app/+news/news-detail/news-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__livefyre_livefyre_component__ = __webpack_require__("../../../../../src/app/livefyre/livefyre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/+home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artists_artists_component__ = __webpack_require__("../../../../../src/app/artists/artists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__artists_artist_landing_artist_landing_component__ = __webpack_require__("../../../../../src/app/artists/artist-landing/artist-landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__artists_artist_detail_artist_detail_component__ = __webpack_require__("../../../../../src/app/artists/artist-detail/artist-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__spotify_spotify_component__ = __webpack_require__("../../../../../src/app/spotify/spotify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contactform_contactform_component__ = __webpack_require__("../../../../../src/app/contactform/contactform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contactform_done_done_component__ = __webpack_require__("../../../../../src/app/contactform/done/done.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__terms_ofuse_terms_ofuse_component__ = __webpack_require__("../../../../../src/app/terms-ofuse/terms-ofuse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes

//import { VideoComponent } from './+video/video.component';
//import { VideoListComponent} from './+video/video-list/video-list.component';
//import { VideoDetailComponent} from './+video/video-detail/video-detail.component';
//import { VideoCategoryComponent } from './+video/video-category/video-category.component';



//import {PhotoComponent} from './+photo/photo.component';
//import {PhotoListComponent} from './+photo/photo-list/photo-list.component'; 
//import { PhotoDetailComponent} from './+photo/photo-detail/photo-detail.component';
//import {PhotoCategoryComponent } from './+photo/photo-category/photo-category.component';













var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'home-page',
        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'artist',
        component: __WEBPACK_IMPORTED_MODULE_8__artists_artists_component__["a" /* ArtistsComponent */],
        data: {
            breadcrumb: "Artist"
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_9__artists_artist_landing_artist_landing_component__["a" /* ArtistLandingComponent */],
                data: {
                    breadcrumb: "Artist Landing"
                }
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_10__artists_artist_detail_artist_detail_component__["a" /* ArtistDetailComponent */],
                data: {
                    breadcrumb: "Artist detail"
                }
            }
        ]
    },
    {
        path: 'news',
        component: __WEBPACK_IMPORTED_MODULE_1__news_news_component__["a" /* NewsComponent */],
        data: {
            breadcrumb: "News"
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__news_news_list_news_list_component__["a" /* NewsListComponent */],
                data: {
                    breadcrumb: ""
                }
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_3__news_news_detail_news_detail_component__["a" /* NewsDetailComponent */],
                data: {
                    breadcrumb: "News detail"
                }
            }
        ]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */],
        data: {
            breadcrumb: "About"
        }
    },
    {
        path: 'spotify',
        component: __WEBPACK_IMPORTED_MODULE_11__spotify_spotify_component__["a" /* SpotifyComponent */],
        data: {
            breadcrumb: "Spotify"
        }
    },
    {
        path: 'livefyre',
        component: __WEBPACK_IMPORTED_MODULE_5__livefyre_livefyre_component__["a" /* LivefyreComponent */],
        data: {
            breadcrumb: "Livefyre"
        }
    },
    {
        path: 'spotify',
        component: __WEBPACK_IMPORTED_MODULE_11__spotify_spotify_component__["a" /* SpotifyComponent */],
        data: {
            breadcrumb: "Spotify"
        }
    },
    // {
    //     path:':id',
    //     component : PageComponent,
    //     data: {
    //       breadcrumb: ":label"
    //     }
    // },
    {
        path: 'studio-contact-form',
        component: __WEBPACK_IMPORTED_MODULE_12__contactform_contactform_component__["a" /* ContactformComponent */],
        data: {
            breadcrumb: "studio-contact-form"
        }
    },
    {
        path: 'studio-contact-form/done',
        component: __WEBPACK_IMPORTED_MODULE_13__contactform_done_done_component__["a" /* DoneComponent */],
        data: {
            breadcrumb: "Done"
        }
    },
    {
        path: 'privacy-policy',
        component: __WEBPACK_IMPORTED_MODULE_15__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
        data: {
            breadcrumb: "privacy-policy"
        }
    },
    {
        path: 'terms-of-use',
        component: __WEBPACK_IMPORTED_MODULE_14__terms_ofuse_terms_ofuse_component__["a" /* TermsOfuseComponent */],
        data: {
            breadcrumb: "terms-of-use"
        }
    },
    {
        path: 'terms-of-service',
        component: __WEBPACK_IMPORTED_MODULE_14__terms_ofuse_terms_ofuse_component__["a" /* TermsOfuseComponent */],
        data: {
            breadcrumb: "terms-of-use"
        }
    },
    {
        path: 'terms-service',
        component: __WEBPACK_IMPORTED_MODULE_14__terms_ofuse_terms_ofuse_component__["a" /* TermsOfuseComponent */],
        data: {
            breadcrumb: "terms-of-use"
        }
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__["a" /* ContactComponent */],
        data: {
            breadcrumb: "contact"
        }
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_7__pagenotfound_pagenotfound_component__["a" /* pageNotFoundComponent */],
        data: {
            breadcrumb: ":label"
        }
    },
    {
        path: '**',
        redirectTo: '/404',
        data: {
            breadcrumb: ":label"
        }
    }
];
// - Updated Export
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/artists/artist-block/artist-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".List.view ul {\r\n    height: calc(100vh - 150px);\r\n}\r\n.grid.view ul.artists li{\r\n    width: 50%;\r\n    float: left;\r\n    position: relative;\r\n    margin: 0;\r\n}\r\n.grid.view ul.artists h3 {\r\n    position: absolute;\r\n    bottom: 0;\r\n    text-align: right;\r\n    width: auto;\r\n}\r\n.grid.view ul.artists li h3 a {\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px solid;\r\n}\r\n.grid.view ul.artists .thumbnail {\r\n    font-size: 0;\r\n}\r\n.List.view .artist-detail .item-wrapper h3{\r\n    width: 100%;\r\n    text-align: left;\r\n    padding-left: 2px;\r\n    box-sizing: border-box;\r\n}\r\n.List.view ul.artists.artist-detail{\r\n    height: 300px  !important;\r\n}\r\n@media only screen and (max-width: 767px){\r\n    .List.view .artist-detail .item-wrapper h3{\r\n        font-size: 15px;\r\n        width: 100%;\r\n        text-align: left;\r\n        padding-left: 2px;\r\n        box-sizing: border-box;\r\n        word-wrap: break-word;\r\n    }\r\n    .grid.view ul.artists li {\r\n        display: block;\r\n        width: 100% !important;\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-block/artist-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div #artistblock class=\"block {{customClass}}\" id=\"artistblock\">\r\n\r\n    <div class=\"grid view\" *ngIf=\"!listView\">\r\n        <ul class=\"artists {{cols}}\">\r\n           \r\n                <li class=\"grid\" *ngFor=\"let a of (artists | filterByType:feildtype) |slice:0:(count);let i = index\" [class.selected]=\"a === selectedArtist\">\r\n                    <div class=\"item-wrapper\">\r\n                        <div class=\"thumbnail\" [innerHTML]=\"a.field_banner_image\"></div>\r\n                        <a class=\"titleWrapper\" (click)=\"gotoArtistDetail(a)\">\r\n                            <div class=\"titleInnerWraper\">\r\n                                <span [innerHTML]=\"a.title\"></span>\r\n                            </div>\r\n                        </a>\r\n\r\n                    </div>\r\n\r\n                </li>\r\n                <li class=\"col grid view-more\">\r\n                    <div class=\"view-more view-all-artists\">\r\n                        <a [routerLink]=\"['/artist']\" [routerLinkActive]=\"['active']\">View all artists</a>\r\n                    </div>\r\n                </li>\r\n            \r\n        </ul>\r\n        \r\n        <div class=\"BackToTop\">\r\n\r\n            <i class=\"fa fa-angle-up bounce\" pageScroll href=\"#artistblock\" aria-hidden=\"true\" [pageScrollOffset]=\"3000\" [pageScrollEasing]=\"ease\"></i>\r\n            <a class=\"btt\" pageScroll href=\"#artistblock\" [pageScrollOffset]=\"3000\" [pageScrollEasing]=\"ease\">Back to top</a>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"List view\" *ngIf=\"listView\">\r\n        <ul class=\"artists {{cols}}\" *ngIf=\"!DetaillistView\" [perfect-scrollbar]=\"config\">\r\n            <li class=\"col List testclass\" *ngFor=\"let a of (artists | filterByType:feildtype) |slice:0:(count)\" [class.selected]=\"a === selectedArtist\">\r\n                <div class=\"item-wrapper\">\r\n                    <div class=imagewrapper>\r\n                        <div class=\"thumbnail\" [innerHTML]=\"a.field_banner_image\"></div>\r\n                    </div>\r\n\r\n                    <div class=\"namewrapper\">\r\n                        <h3 (click)=\"gotoArtistDetail(a)\" [innerHTML]=\"a.title\"></h3>\r\n                    </div>\r\n\r\n                    <!--h3 (click)=\"gotoArtistDetail(a)\" [innerHTML]=\"a.title\"></h3-->\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"artists {{cols}} artist-detail\" *ngIf=\"DetaillistView\" [perfect-scrollbar]=\"config\">\r\n            <li class=\"col List\" *ngFor=\"let a of (artists | filterByName:currentArtistName) |slice:0:(count)\" [class.selected]=\"a === selectedArtist\">\r\n                <div class=\"item-wrapper\">\r\n                    <h3 (click)=\"gotoArtistDetail(a)\" [innerHTML]=\"a.title\"></h3>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-block/artist-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistblockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artists_services__ = __webpack_require__("../../../../../src/app/artists/artists.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ArtistblockComponent = /** @class */ (function () {
    function ArtistblockComponent(document, _artistService, _router, elRef, renderer) {
        this.document = document;
        this._artistService = _artistService;
        this._router = _router;
        this.elRef = elRef;
        this.renderer = renderer;
        this.firsttime = 0;
        this.node = null;
        this.artistlength = false;
        this.Homepageview = false;
        this.feildtype = "All";
        this.listView = false;
        this.DetaillistView = false;
        this.carouselview = true;
        this.mouseIn = false;
        __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["b" /* PageScrollConfig */].defaultScrollOffset = -50;
        __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["b" /* PageScrollConfig */].defaultEasingLogic = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0)
                    return b;
                if (t === d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }
    ArtistblockComponent.prototype.triggerFalseClick = function () {
        var el = this.artistblock.nativeElement;
        el.click();
    };
    ArtistblockComponent.prototype.ngAfterViewInit = function () {
        //   this.triggerFalseClick();
    };
    //   @HostListener('mouseenter') onMouseEnter() {
    //    this.elRef.nativeElement.querySelectorAll(".List.view li.col.List.testclass").class = 'active';
    //      this.renderer.setElementStyle(this.elRef.nativeElement.querySelectorAll(".List.view li.col.List.testclass"), 'visibility', "hidden")
    //   }
    //   @HostListener('mouseleave') onMouseLeave() {
    //     this.elRef.nativeElement.querySelectorAll(".List.view li.col.List.testclass").class = 'not-active';
    //   }
    ArtistblockComponent.prototype.backtotop = function () {
        this.document.body.scrollTop = 0;
    };
    ArtistblockComponent.prototype.getArtistHomepage = function () {
        var _this = this;
        this._artistService.getArtistsgridView().subscribe(function (data) {
            _this.artistsrandom = data;
        }, function (err) { return console.error(err); }, function () {
            console.log('done');
            _this._artistService.getArtistStickyContent().subscribe(function (data) {
                _this.artists = data;
            }, function (err) { return console.error(err); }, function () {
                console.log('done');
                _this.artists = _this.artists.concat(_this.artistsrandom);
            });
        });
        return this.artists;
    };
    ArtistblockComponent.prototype.getArtists = function () {
        var _this = this;
        this.selectedArtist = undefined;
        this.artists = [];
        if (!this.Homepageview) {
            this._artistService.getArtists().subscribe(function (data) {
                _this.artists = data;
                if (_this.artists.length > 0) {
                    _this.artistlength = true;
                }
            }, function (err) { return console.error(err); }, function () {
                console.log('done');
            });
        }
        else {
            this.getArtistHomepage();
        }
        return this.artists;
    };
    ArtistblockComponent.prototype.gotoArtistDetail = function (artist) {
        var id;
        this.selectedArtist = artist;
        id = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].getSlug(this.selectedArtist.path);
        var link = ['/artist', id];
        this._router.navigate(link);
    };
    ArtistblockComponent.prototype.ngOnInit = function () {
        this.artists = this.getArtists();
    };
    ArtistblockComponent.prototype.ngOnChanges = function () {
        this.artists = this.getArtists();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ArtistblockComponent.prototype, "artists", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ArtistblockComponent.prototype, "artistlength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistblockComponent.prototype, "Homepageview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistblockComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistblockComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ArtistblockComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistblockComponent.prototype, "feildtype", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistblockComponent.prototype, "listView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistblockComponent.prototype, "DetaillistView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistblockComponent.prototype, "carouselview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ArtistblockComponent.prototype, "currentArtistName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('artistblock'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ArtistblockComponent.prototype, "artistblock", void 0);
    ArtistblockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artistblock',
            template: __webpack_require__("../../../../../src/app/artists/artist-block/artist-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-block/artist-block.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__artists_services__["b" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__artists_services__["b" /* ArtistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object])
    ], ArtistblockComponent);
    return ArtistblockComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=artist-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/artists/artist-detail/artist-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".artistbioWrapper {\r\n    background: #005daa;\r\n}\r\n\r\n.BioWrapper {\r\n    display: block;\r\n    max-width: 984px;\r\n    margin: 0 auto;\r\n}\r\n.detail-list.artist .g-layout {\r\n    padding: 0;\r\n    font-size: 0;\r\n}\r\n\r\n.Social-links li {\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    margin-right: 26px;\r\n}\r\n\r\n.Social-links {\r\n    margin-top: 29px;\r\n    text-align: center;\r\n}\r\n.Social-links i {\r\n    font-size: 26px;\r\n    color: #fff;\r\n}\r\n.Social-links i:hover {\r\n   opacity: .5;\r\n}\r\n.Social-links li:last-child {\r\n    margin-right: 0;\r\n}\r\n.TitleWrapper {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.viewwrapper a {\r\n    color: rgba(255, 255, 255, 0.5);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\r\n    cursor: pointer;\r\n}\r\n.viewwrapper a:hover {\r\n    color: rgba(255, 255, 255, 1);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 1);\r\n}\r\n\r\n.TitleWrapper h2 {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    border-bottom: 1px solid #fff;\r\n    padding: 0;\r\n    line-height:60px;\r\n    font-size: 20px;\r\n    letter-spacing: 3px;\r\n}\r\n.BioWrapper {\r\n    width: 100%;\r\n    font-size: 0;\r\n    padding: 60px 0;\r\n}\r\n\r\n\r\n.BioInnerwrapper {\r\n    width: 25%;\r\n    display: inline-block;\r\n    text-align:left;\r\n}\r\n\r\n .artist-bio {\r\n    width: 75%;\r\n    display: inline-block;\r\n    text-align:left;\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    font-family: 'crimson_textroman';\r\n    line-height: 30px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n\r\n.BioInnerwrapper h2 {\r\n    font-size:16px;\r\n    color: #000;\r\n    padding: 0;\r\n    line-height: 30px;\r\n    text-align: left;\r\n    display: inline-block;\r\n    border-bottom: 1px solid #000;\r\n    padding-bottom: 8px;\r\n}\r\n.BioInnerwrapper span {\r\n    font-size: 14px;\r\n    color: #fff;\r\n    line-height: 20px;\r\n    display: block;\r\n    padding: 10px 0 50px 0;\r\n    text-transform: uppercase;\r\n}\r\n.thumbnail {\r\n    font-size: 0;\r\n}\r\n.ArtistOuterWrapper .tourInnerWrapper div.nocontent{\r\n    color:#777;\r\n    font-size: 13px;\r\n    line-height: 20px;\r\n    padding-bottom: 40px;\r\n}\r\n.ArtistOuterWrapper .tourInnerWrapper div.nocontent span{\r\n    display: inline-block;\r\n}\r\n.ArtistOuterWrapper .mailing-listWrapper span {\r\n    font-family: 'gothambold';\r\n}\r\nul.artists.artist-detail{\r\n    height: 300px;\r\n}\r\n.SpotifyOtterWrappr .nocontent {\r\n    color: #777;\r\n    font-size: 13px;\r\n    line-height: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 767px){\r\n    .SpotifyOtterWrappr .nocontent {\r\n        text-align: center;\r\n    }\r\n    .ArtistInnerWrapper .artistbioWrapper .Social-links, .ArtistInnerWrapper .artistbioWrapper .BioWrapper, .ArtistInnerWrapper .ArtistOuterWrapper{\r\n        max-width: 90%;\r\n        margin: 0 auto;\r\n    }\r\n    .BioWrapper .BioInnerwrapper{\r\n        display: block;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .BioInnerwrapper h2 , .BioInnerwrapper span{\r\n        font-size: 12px;\r\n    }\r\n    .BioInnerwrapper span{\r\n        padding: 10px 0 30px 0;\r\n    }\r\n    .BioWrapper .artist-bio{\r\n        width: 100%;\r\n        display: block;\r\n        font-size: 16px;\r\n        padding-bottom: 50px;\r\n    }\r\n    .Social-links li{\r\n        margin-right: 15px;\r\n    }\r\n    .Social-links li i{\r\n        font-size: 20px;\r\n    }\r\n    .TitleWrapper h2{\r\n        line-height: 1.2;\r\n        padding-bottom: 15px;\r\n        letter-spacing: 1.5px;\r\n        font-size: 18px;\r\n    }\r\n    .ArtistInnerWrapper .artistbioWrapper .Social-links{\r\n        display: block;\r\n        margin: 50px auto 0;\r\n    }\r\n    .BioWrapper{\r\n        padding: 0;\r\n    }\r\n    .BioWrapper .BioInnerwrapper {\r\n        padding-top: 30px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width:768px) and (max-width:1024px){\r\n    .artist-bio {\r\n        width: 70% ;\r\n    }\r\n\r\n    .BioInnerwrapper {\r\n        width: 30% ;\r\n    }\r\n    .BioWrapper {\r\n        max-width: 93% !important;\r\n    }\r\n\r\n}\r\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\r\n\t.ArtistOuterWrapper {\r\n\t\tmax-width: 93% !important;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-detail/artist-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div #artistdetail class=\"detail-list artist\" id=\"head\">\r\n\t<div class=\"g-layout\">\r\n\r\n\t\t<div class=\"content\" *ngIf=\"artist\">\r\n\t\t\t<div class=\"thumbnail-wrapper\">\r\n\t\t\t\t<div class=\"thumbnail-Innerwrapper\">\r\n\t\t\t\t\t<div *ngIf=\"desktopResolution\" class=\"thumbnail\" [ngStyle]=\"detailbannerStyle()\" [innerHTML]=\"artist.field_main_image\"></div>\r\n\t\t\t\t\t<div *ngIf=\"mobilereolution\" class=\"thumbnail\" [innerHTML]=\"artist.field_main_image\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ArtistInnerWrapper\" id=\"artistinnerwrapper\">\r\n\t\t\t\t<div class=\"artistbioWrapper\">\r\n\r\n\r\n\t\t\t\t\t<div class=\"TitleWrapper\" [ngClass]=\"{'dropDownVisible': DropDownWrapper==true}\">\r\n\t\t\t\t\t\t<div class=\"TitleInnerWrapper\">\r\n\t\t\t\t\t\t\t<div class=\"title-Wrapper-inner\">\r\n\t\t\t\t\t\t\t\t<h2 [innerHTML]=\"artist.title\" (click)=\"DropDownWrapper=true\"></h2>\r\n\t\t\t\t\t\t\t\t<i *ngIf=!DropDownWrapper (click)=\"DropDownWrapper=true\" class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t<span *ngIf=DropDownWrapper (click)=\"DropDownWrapper=false\" class=\"fa close\">X</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"DropDownWrapper\" [ngClass]=\"{'show': DropDownWrapper==true}\">\r\n\t\t\t\t\t\t\t\t<app-artistblock [DetaillistView]=\"true\" [currentArtistName]=\"artist.title\" [listView]=\"true\"></app-artistblock>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t<div class=\"Social-links\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li *ngIf=\"artist.field_site_link\">\r\n\t\t\t\t\t\t\t\t<a target=_ blank href=\"{{artist.field_site_link}}\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-link\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li *ngIf=\"artist.field_artist_merch_url\">\r\n\t\t\t\t\t\t\t\t<a target=_ blank href=\"{{artist.field_artist_merch_url}}\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li *ngIf=\"artist.field_facebook\">\r\n\t\t\t\t\t\t\t\t<a target=_ blank href=\"{{artist.field_facebook}}\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li *ngIf=\"artist.field_twitter\">\r\n\t\t\t\t\t\t\t\t<a target=_ blank href=\"{{artist.field_twitter}}\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li *ngIf=\"artist.field_instagram\">\r\n\t\t\t\t\t\t\t\t<a target=_ blank href=\"{{artist.field_instagram}}\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li *ngIf=\"artist.field_itunes_id\">\r\n\t\t\t\t\t\t\t\t<a target=_ blank href=\"{{artist.field_itunes_id}}\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-apple\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li *ngIf=\"artist.field_spotify\">\r\n\t\t\t\t\t\t\t\t<a target=_ blank href=\"{{artist.field_spotify}}\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-spotify\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li *ngIf=\"artist.field_youtube\">\r\n\t\t\t\t\t\t\t\t<a target=_ blank href=\"{{artist.field_youtube}}\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"BioWrapper\">\r\n\t\t\t\t\t\t<div class=\"BioInnerwrapper\">\r\n\t\t\t\t\t\t\t<div class=\"HometownWrapper\" *ngIf=\"artist.field_home_town\">\r\n\t\t\t\t\t\t\t\t<h2>HomeTown</h2>\r\n\t\t\t\t\t\t\t\t<span>{{artist.field_home_town}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"labelwrapper\" *ngIf=\"artist.field_label\">\r\n\t\t\t\t\t\t\t\t<h2>Label</h2>\r\n\t\t\t\t\t\t\t\t<span>{{artist.field_label}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"artist.body\" class=\"artist-bio\">\r\n\t\t\t\t\t\t\t<div class=\"artistContent\" [innerHTML]=\"artist.body|TruncatePipe:stringTruncate\"></div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"readMoreFlag\" class=\"viewwrapper\">\r\n\t\t\t\t\t\t\t\t<a class=\"newsDeatilpage view-more\" (click)=\"readMore()\">Read More...</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"!readMoreFlag\" class=\"viewwrapper\">\r\n\t\t\t\t\t\t\t\t<a class=\"newsDeatilpage view-more\" (click)=\"readLess()\">Read Less</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!--div  [innerHTML]=\"shtml|TruncatePipe:200\" class=\"artist-bio\"></div-->\r\n\t\t\t\t\t\t<!--div *ngFor=\"let shtml of (safeHtml)\" [innerHTML]=\"shtml\" class=\"artist-bio\"></div-->\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"ArtistOuterWrapper\" [ngSwitch]=\"title\" >\r\n\t\t\t\t\t<!-- <div class=toptracks *ngIf=\"artist.field_artist_spotify_id\">\r\n\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<div class=\"spotifyWrapper\" *ngSwitchCase=\"myArtistValue\" >\r\n\t\t\t\t\t\t<div class=\"block-title-wrapper spotify left\">\r\n\t\t\t\t\t\t\t<h2 class=\"block-title spotify\">TOP TRACKS</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"SpotiftSubTitle\">Powered by Spotify</div>\r\n\t\t\t\t\t\t<div class=\"SpotifyOtterWrappr\" *ngIf=\"nospotifyContent\">\r\n\t\t\t\t\t\t\t<app-top-tracks [count]=\"3\" [artistId]=\"artist.field_artist_spotify_id\"></app-top-tracks>\r\n\t\t\t\t\t\t\t<div class=\"follow-button-wrapper\">\r\n\t\t\t\t\t\t\t\t<iframe *ngIf=\"artist.field_artist_spotify_id\" [src]=\"SpotifyIframeURL\" width=\"200\" height=\"25\" scrolling=\"no\" frameborder=\"0\"\r\n\t\t\t\t\t\t\t\t style=\"border:none; overflow:hidden;\" allowtransparency=\"true\"></iframe>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"SpotifyOtterWrappr\" *ngIf=\"!nospotifyContent\">\r\n\t\t\t\t\t\t\t<div class=\"nocontent\">No Tracks Available</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"music-tour-wrapper\">\r\n\t\t\t\t\t\t<!--div id=\"TourDate\">\r\n\t\t\t\t\t\t<a class=\"bit-widget-initializer\" [attr.data-artist-name]=\"artist.field_artist_bit_id\" data-display-local-dates=\"true\" data-display-past-dates=\"false\"\r\n\t\t\t\t\t\t data-auto-style=\"false\" data-text-color=\"#FFFFFF\" data-link-color=\"#2F95DE\" data-popup-background-color=\"#000000\" data-background-color=\"rgba(0,0,0,0)\"\r\n\t\t\t\t\t\t data-display-limit=\"10\" data-link-text-color=\"#FFFFFF\" data-div-id=\"TourDate\" value=\"artist.field_artist_bit_id\"></a>\r\n\t\t\t\t\t</div-->\r\n\t\t\t\t\t\t<div class=\"block-title-wrapper tour left\">\r\n\t\t\t\t\t\t\t<h2 class=\"block-title tour\">TOUR DATES</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"tourdates\" class=\"tourwrapper\" *ngSwitchCase=\"myArtistValue\">\r\n\t\t\t\t\t\t\t<!--div class=\"tourInnerWrapper\" *ngIf=\"artist.songkick_id\">\r\n\t\t\t\t\t\t\t\t<app-tour-soundkick [artistId]=\"artist.songkick_id\" [artistName]=\"artist.title\"></app-tour-soundkick>\r\n\t\t\t\t\t\t\t</div-->\r\n\t\t\t\t\t\t\t  <div class=\"tourInnerWrapper\" *ngIf=\"artist.field_artist_bit_id\">\r\n\t\t\t\t\t\t\t\t<app-artist-tour [customClass]=\"Tour\" [artistname]=\"artist.field_artist_bit_id\"></app-artist-tour>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>  >\r\n\t\t\t\t\t\t\t<!--div class=\"tourInnerWrapper\" *ngIf=\"!artist.songkick_id\"-->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"tourInnerWrapper\" *ngIf=\"!artistBitID\">\r\n\t\t\t\t\t\t\t\t<div class=\"nocontent\">No Upcoming Tour Dates For\r\n\t\t\t\t\t\t\t\t\t<span>{{artist.title}}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mailing-listWrapper\" *ngIf=\"myArtistValue\">\r\n\t\t\t\t\t\t<div class=\"mlistValidityClass\" *ngIf=\"artist.field_artist_newsletter_id\">\r\n\t\t\t\t\t\t\t<app-mailing-list-block [customClass]=\"'mailing-Artist'\" [artistname]=\"artist.title\" [newsLetterID]=\"artist.field_artist_newsletter_id\">\r\n\t\t\t\t\t\t\t\t<div mailingListCopy>Subscribe to\r\n\t\t\t\t\t\t\t\t\t<span>{{artist.title}}'s</span> e-mail list for latest updates, label announcements, new music and more.</div>\r\n\t\t\t\t\t\t\t</app-mailing-list-block>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"artistPage-NewsWrapper\">\r\n\t\t\t\t\t<div class=\"artistNews\">\r\n\t\t\t\t\t\t<div class=\"block-title-wrapper newsBlock left\">\r\n\t\t\t\t\t\t\t<h2 class=\"block-title newsBlock\">UPDATES</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<app-news-block [artistid]=\"artist.nid\" [ArtistNamePassed]=\"artist.title\" [count]=\"3\" [customClass]=\"'about-news-list'\" [Artistnewsblock]=\"'true'\"></app-news-block>\r\n\t\t\t\t\t\t<div class=\"view-more-wrapper\">\r\n\t\t\t\t\t\t\t<a class=\"newsDeatilpage view-more\" [routerLink]=\"['/news']\" [routerLinkActive]=\"['active']\">Read More</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"Artistcouraosel\">\r\n\t\t\t<app-artists-carousel *ngIf=\"artists\" [artists]=\"artists\" [carouseln]=\"artistlength\"></app-artists-carousel>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-detail/artist-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artists_services__ = __webpack_require__("../../../../../src/app/artists/artists.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ArtistDetailComponent = /** @class */ (function () {
    function ArtistDetailComponent(_artistService, route, el, sanitizer, document) {
        this._artistService = _artistService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.document = document;
        this.bitID = "data-artist-name";
        this.isMobileMenu = false;
        this.readMoreFlag = true;
        this.windowHeight = 0;
        this.safeHtml = [];
        this.twitEmbed = [];
        this.tempId = "";
        this.firstTime = true;
        this.DropDownWrapper = false;
        this.stringTruncate = 200;
        this.tourBitId = "";
        this.artistNameChange = true;
        this.cache = 1;
        this.currentNodeIndex = 0;
        this.artistBitID = true;
        this.nospotifyContent = true;
        this.mobilereolution = false;
        this.desktopResolution = false;
        this.node = el;
    }
    ArtistDetailComponent.prototype.triggerFalseClick = function () {
        var el = this.artistdetail.nativeElement;
        el.click();
    };
    ArtistDetailComponent.prototype.ngAfterViewInit = function () {
        // this.triggerFalseClick();
    };
    ArtistDetailComponent.prototype.getArtists = function (artistnid) {
        var _this = this;
        this.artists = [];
        this._artistService.getArtistswithfilter(artistnid).subscribe(function (data) {
            _this.artists = data;
        }, function (err) { return console.error(err); }, function () {
            _this.artistlength = _this.artists.length;
        });
        return this.artists;
    };
    ArtistDetailComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 1023) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (event.target.innerWidth > 1023) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    ArtistDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        if (window.screen.width < 1023) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (window.screen.width > 1023) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
        if (this.node.nativeElement.clientWidth < 767) {
            this.isMobileMenu = true;
        }
        this.flySocial = this.node.nativeElement.querySelectorAll(".fly-social-block")[0];
        this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.route.params.forEach(function (params) {
            _this.title = params['id'];
            _this._artistService.getArtistDetail(params['id']).subscribe(function (data) {
                _this.artist = data[0];
                var fragElem = document.createElement("div");
                fragElem.innerHTML = _this.artist.body.toString();
                _this.safeHtml.pop();
                _this.safeHtml.push(_this.artist.body.toString());
                _this.artistNameChange = true;
                _this.myArtistValue = _this.artist.title;
                _this.DropDownWrapper = false;
                // this.nospotifyContent=true;
            }, function (err) { return console.error(err); }, function () {
                console.log('done');
                // this.triggerFalseClick();
                _this.artistnid = _this.artist.nid;
                _this.getArtists(_this.artistnid);
                _this.stringTruncate = 200;
                if (_this.artist.field_artist_spotify_id) {
                    // console.info(this.artist.field_artist_spotify_id);
                    _this.nospotifyContent = true;
                }
                else {
                    _this.nospotifyContent = false;
                }
                if (_this.artist.body.length > _this.stringTruncate) {
                    _this.readMoreFlag = true;
                }
                else {
                    _this.readMoreFlag = false;
                }
                // if (this.artist.songkick_id == "") {
                if (_this.artist.field_artist_bit_id == "") {
                    _this.artistBitID = false;
                }
                else {
                    _this.artistBitID = true;
                }
                //console.info("After view init");
                if (_this.artistNameChange) {
                    _this.myArtistValue = "";
                    setTimeout(function () {
                        _this.myArtistValue = _this.title;
                    }, 2000);
                }
                _this.SpotifyIframesrc = "https://open.spotify.com/follow/1/?uri=spotify:artist:" + _this.artist.field_artist_spotify_id + "&size=basic&theme=light&show-count=0";
                _this.SpotifyIframeURL = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.SpotifyIframesrc);
            });
        });
        window.scroll(0, 0);
        //this.loadNewsVideo();
        this.tempId = this.id;
        //this.firstTime = false;
    };
    // iframeURL(spotifyID:string){
    //     this.SpotifyIframesrc = "https://open.spotify.com/follow/1/?uri=spotify:artist:" + spotifyID + "&size=basic&theme=light&show-count=0";
    //     this.SpotifyIframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.SpotifyIframesrc);
    //     return this.SpotifyIframeURL;
    // }
    // checkSpotifyLength(spotifyCount: number): void {
    //   if (spotifyCount == 0) {
    //     this.nospotifyContent = false;
    //   }
    //   else{
    //     this.nospotifyContent=true;
    //   }
    // }
    ArtistDetailComponent.prototype.readMore = function () {
        this.stringTruncate = this.artist.body.length;
        this.readMoreFlag = false;
        this.readMoreoffset = this.calculatesroll();
    };
    ArtistDetailComponent.prototype.readLess = function () {
        this.stringTruncate = 200;
        this.readMoreFlag = true;
        window.scroll(0, this.readMoreoffset);
    };
    ArtistDetailComponent.prototype.calculatesroll = function () {
        var scrollTop = document.body.scrollTop;
        return scrollTop;
    };
    ArtistDetailComponent.prototype.updateOnScroll = function (event) {
        var scrollTop = event.pageY | document.body.scrollTop;
        this.pagescrolloffset = scrollTop;
        if (this.pagescrolloffset < 660) {
            this.scrolloffset = this.pagescrolloffset;
            this.scaleoffset = this.scrolloffset;
        }
        if (this.pagescrolloffset > 200) {
            this.scaleoffset = 200;
        }
    };
    ArtistDetailComponent.prototype.detailbannerStyle = function () {
        return {
            'left': '0px', 'top': '0px', 'overflow': 'hidden', 'height': 'calc(100vh - 94px)', 'margin': '0px', 'padding': '0px', 'width': '100%', 'z-index': '-999998', 'position': 'absolute',
            'opacity': (1 - ((this.scrolloffset + 300) / 1000)),
            '-moz-transform': 'translate3d(0px, ' + (this.scaleoffset / 3.5) + 'px, 0px) scale(' + (1 + (this.scaleoffset / 730)) + ',' + (1 + (this.scaleoffset / 730)) + ' )',
            'transform': 'translate3d(0px, ' + (this.scaleoffset / 3.5) + 'px, 0px) scale(' + (1 + (this.scaleoffset / 730)) + ',' + (1 + (this.scaleoffset / 730)) + ' )',
            '-webkit-transform': 'translate3d(0px, ' + (this.scaleoffset / 3.5) + 'px, 0px) scale(' + (1 + (this.scaleoffset / 730)) + ',' + (1 + (this.scaleoffset / 730)) + ' )',
            '-ms-transform': 'translate3d(0px, ' + (this.scaleoffset / 3.5) + 'px, 0px) scale(' + (1 + (this.scaleoffset / 730)) + ',' + (1 + (this.scaleoffset / 730)) + ' )'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__artists_services__["Artist"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__artists_services__["Artist"]) === "function" && _a || Object)
    ], ArtistDetailComponent.prototype, "artist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('artistdetail'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], ArtistDetailComponent.prototype, "artistdetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ArtistDetailComponent.prototype, "updateOnScroll", null);
    ArtistDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist-detail',
            template: __webpack_require__("../../../../../src/app/artists/artist-detail/artist-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-detail/artist-detail.component.css")],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__artists_services__["b" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__artists_services__["b" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"]) === "function" && _f || Object, Object])
    ], ArtistDetailComponent);
    return ArtistDetailComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=artist-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/artists/artist-landing/artist-landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.artists li{\r\n    width: 50%;\r\n    float: left;\r\n    position: relative;\r\n}\r\nul.artists h3 {\r\n    position: absolute;\r\n    bottom: 0;\r\n    text-align: right;\r\n    width: 100%;\r\n    padding-right: 30px;\r\n}\r\nul.artists li h3 a {\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px solid;\r\n}\r\nul.artists .thumbnail {\r\n    font-size: 0;\r\n}\r\n.content {\r\n    padding-top: 55px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-landing/artist-landing.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div #artistlandin class=\"artistlanding\" id=artistblock1>\r\n    <div class=\"artistLandingNav\">\r\n        <div class=\"tab tab1 artist-options\">\r\n                <ul class=\"item-list\">\r\n                    <li><a (click)=\"TabSelected('Artists')\" [ngClass]=\"{'active': setActive=='1'}\" >Artists</a></li>\r\n                    <li><a (click)=\"TabSelected('Comedians')\" [ngClass]=\"{'active': setActive=='2'}\" >Comedians</a></li>\r\n                    <li><a (click)=\"TabSelected('Others')\" [ngClass]=\"{'active': setActive=='3'}\" >Other</a></li>\r\n                    <li><a (click)=\"TabSelected('All')\" [ngClass]=\"{'active': setActive=='4'}\">All</a></li>              \r\n                </ul>\r\n        </div>\r\n        <div class=\"tab tab1 view-options\">\r\n                <ul class=\"item-list\">    \r\n                    <li >\r\n                        <i (click)=\"listview=false\" class=\"fa fa-th-large\" aria-hidden=\"true\" [class.active]=\"!listview\"></i>\r\n                        <a (click)=\"listview=false\" >Grid</a>\r\n                    </li>  \r\n                    <li>\r\n                        <i (click)=\"listview='true'\" class=\"fa fa-th-list\" aria-hidden=\"true\" [class.active]=\"listview\"></i>\r\n                        <a (click)=\"listview='true'\" >list</a>\r\n                    </li>\r\n                </ul>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"tab tab-container Desk\" [ngSwitch]=\"category\" (window:resize)=\"onResize($event)\" *ngIf=\"desktopResolution\">\r\n        <div class=\"category landing\" *ngSwitchCase=\"'Artists'\">\r\n            <app-artistblock [feildtype]=\"'Artists'\" [listView]=\"listview\"></app-artistblock>\r\n        </div>\r\n        <div class=\"category landing\" *ngSwitchCase=\"'Others'\">\r\n            <app-artistblock [feildtype]=\"'Other'\" [listView]=\"listview\"></app-artistblock>\r\n        </div>\r\n        <div class=\"category landing\" *ngSwitchCase=\"'Comedians'\">\r\n            <app-artistblock [feildtype]=\"'Comedians'\" [listView]=\"listview\"></app-artistblock>\r\n        </div>\r\n        <div class=\"category landing\" *ngSwitchCase=\"'All'\">\r\n            <app-artistblock [listView]=\"listview\"></app-artistblock>\r\n        </div>\r\n        <div class=\"category landing\" *ngSwitchDefault>\r\n            <app-artistblock [feildtype]=\"'Artists'\" [listView]=\"listview\" [count]=\"count\"></app-artistblock>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"tab tab-container Desk\" [ngSwitch]=\"category\" (window:resize)=\"onResize($event)\"  *ngIf=\"desktopResolution && artistHomView\">\r\n        <div class=\"sliderOuterWrapper\">\r\n            <div class=\"sliderInnerWrapper {{selectedTab}}\">\r\n                <div class=\"category landing Artists\" [ngClass]=\"{'active': selectedTab=='Artists'}\">\r\n                    <app-artistblock [Homepageview]=\"true\"[feildtype]=\"'Artists'\" [listView]=\"listview\"[count]=\"7\"></app-artistblock>\r\n                </div>\r\n                <!--<div class=\"category landing Comedians\" [ngClass]=\"{'active': selectedTab=='Comedians'}\">\r\n                    <app-artistblock [feildtype]=\"'Comedians'\" [listView]=\"listview\"></app-artistblock>\r\n                </div>\r\n                <div class=\"category landing Others\" [ngClass]=\"{'active': selectedTab=='Others'}\">\r\n                    <app-artistblock [feildtype]=\"'Other'\" [listView]=\"listview\"></app-artistblock>\r\n                </div>\r\n                <div class=\"category landing All\" [ngClass]=\"{'active': selectedTab=='All'}\">\r\n                    <app-artistblock [listView]=\"listview\"></app-artistblock>\r\n                </div>-->\r\n            </div>\r\n        </div> \r\n    </div>\r\n    <div class=\"tab tab-container Desk\" [ngSwitch]=\"category\" (window:resize)=\"onResize($event)\"  *ngIf=\"desktopResolution && !artistHomView\">\r\n        <div class=\"sliderOuterWrapper\">\r\n            <div class=\"sliderInnerWrapper {{selectedTab}}\">\r\n                <div class=\"category landing Artists\" [ngClass]=\"{'active': selectedTab=='Artists'}\">\r\n                    <app-artistblock [feildtype]=\"'Artists'\" [listView]=\"listview\" ></app-artistblock>\r\n                </div>\r\n                <div class=\"category landing Comedians\" [ngClass]=\"{'active': selectedTab=='Comedians'}\">\r\n                    <app-artistblock [feildtype]=\"'Comedians'\" [listView]=\"listview\"></app-artistblock>\r\n                </div>\r\n                <div class=\"category landing Others\" [ngClass]=\"{'active': selectedTab=='Others'}\">\r\n                    <app-artistblock [feildtype]=\"'Other'\" [listView]=\"listview\"></app-artistblock>\r\n                </div>\r\n                <div class=\"category landing All\" [ngClass]=\"{'active': selectedTab=='All'}\">\r\n                    <app-artistblock [listView]=\"listview\"></app-artistblock>\r\n                </div>\r\n            </div>\r\n        </div> \r\n    </div>\r\n    <div class=\"tab tab-container\" [ngSwitch]=\"category\" (window:resize)=\"onResize($event)\"  *ngIf=\"mobileResolution && !artistHomView\">\r\n\r\n \r\n        <!-- <div class=\"sliderOuterWrapper\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\"> -->\r\n            <div class=\"sliderOuterWrapper\" >\r\n            <div class=\"sliderInnerWrapper {{selectedTab}}\">\r\n                <div class=\"category landing Artists\" [ngClass]=\"{'active': selectedTab=='Artists'}\">\r\n                    <app-artistblock [feildtype]=\"'Artists'\" [listView]=\"listview\" ></app-artistblock>\r\n                </div>\r\n                <div class=\"category landing Comedians\" [ngClass]=\"{'active': selectedTab=='Comedians'}\">\r\n                    <app-artistblock [feildtype]=\"'Comedians'\" [listView]=\"listview\"></app-artistblock>\r\n                </div>\r\n                <div class=\"category landing Others\" [ngClass]=\"{'active': selectedTab=='Others'}\">\r\n                    <app-artistblock [feildtype]=\"'Other'\" [listView]=\"listview\"></app-artistblock>\r\n                </div>\r\n                <div class=\"category landing All\" [ngClass]=\"{'active': selectedTab=='All'}\">\r\n                    <app-artistblock [listView]=\"listview\"></app-artistblock>\r\n                </div>\r\n            </div>\r\n        </div> \r\n    </div>\r\n\r\n    <div class=\"tab tab-container\" [ngSwitch]=\"category\" (window:resize)=\"onResize($event)\"  *ngIf=\"mobileResolution && artistHomView\">\r\n\r\n    \r\n        <div class=\"sliderOuterWrapper\">\r\n            <div class=\"sliderInnerWrapper\">\r\n                <div class=\"category landing Artists\">\r\n                    <app-artistblock  [Homepageview]=\"true\" [feildtype]=\"'Artists'\" [listView]=\"listview\" [count]=\"7\"></app-artistblock>\r\n                </div>\r\n            </div>\r\n        </div> \r\n    </div>   \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-landing/artist-landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artists_services__ = __webpack_require__("../../../../../src/app/artists/artists.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistLandingComponent = /** @class */ (function () {
    function ArtistLandingComponent(_artistService, _router) {
        this._artistService = _artistService;
        this._router = _router;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup' };
        this.feildtype = "All";
        this.listview = false;
        this.artistHomView = false;
        this.carouselview = true;
        this.setActive = 1;
        this.selectedTab = "Artists";
        this.mobileResolution = false;
        this.desktopResolution = false;
    }
    ArtistLandingComponent.prototype.triggerFalseClick = function () {
        var el = this.artistlandin.nativeElement;
        el.click();
    };
    ArtistLandingComponent.prototype.ngAfterViewChecked = function () {
        // this.triggerFalseClick();
    };
    ArtistLandingComponent.prototype.getArtists = function () {
        var _this = this;
        this.selectedArtist = undefined;
        this.artists = [];
        this._artistService.getArtists().subscribe(function (data) {
            _this.artists = data;
        }, function (err) { return console.error(err); }, function () {
            console.log('done');
        });
    };
    ArtistLandingComponent.prototype.gotoArtistDetail = function (artist) {
        var id;
        this.selectedArtist = artist;
        id = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getSlug(this.selectedArtist.path);
        var link = ['/artists', id];
        this._router.navigate(link);
    };
    ArtistLandingComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.getArtists();
        if (window.screen.width < 1023) {
            this.mobileResolution = true;
            this.desktopResolution = false;
        }
        else {
            this.desktopResolution = true;
            this.mobileResolution = false;
        }
    };
    ArtistLandingComponent.prototype.TabSelected = function (Clickedcategory) {
        this.category = Clickedcategory;
        switch (Clickedcategory) {
            case 'Artists':
                this.setActive = 1;
                this.selectedTab = "Artists";
                break;
            case 'Comedians':
                this.setActive = 2;
                this.selectedTab = "Comedians";
                break;
            case 'Others':
                this.setActive = 3;
                this.selectedTab = "Others";
                break;
            case 'All':
                this.setActive = 4;
                this.selectedTab = "All";
                break;
        }
        // console.info(this.setActive);
    };
    ArtistLandingComponent.prototype.swipe = function (action) {
        // if (this.setActive > 4 || this.setActive < 1) return;
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        // next
        if (action == this.SWIPE_ACTION.UP) {
        }
        if (action == this.SWIPE_ACTION.RIGHT) {
            if (this.setActive < 2) {
                this.setActive = 4;
            }
            else {
                this.setActive = this.setActive - 1;
            }
            switch (this.setActive) {
                case 1:
                    this.selectedTab = "Artists";
                    break;
                case 2:
                    this.selectedTab = "Comedians";
                    break;
                case 3:
                    this.selectedTab = "Others";
                    break;
                case 4:
                    this.selectedTab = "All";
                    break;
            }
        }
        // previous
        if (action == this.SWIPE_ACTION.LEFT) {
            if (this.setActive > 3) {
                this.setActive = 1;
            }
            else {
                this.setActive = this.setActive + 1;
            }
            switch (this.setActive) {
                case 1:
                    this.selectedTab = "Artists";
                    break;
                case 2:
                    this.selectedTab = "Comedians";
                    break;
                case 3:
                    this.selectedTab = "Others";
                    break;
                case 4:
                    this.selectedTab = "All";
                    break;
            }
        }
        //console.info(this.setActive);
        // toggle avatar visibility
    };
    ArtistLandingComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 1023) {
            this.mobileResolution = true;
            this.desktopResolution = false;
        }
        else {
            this.desktopResolution = true;
            this.mobileResolution = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistLandingComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistLandingComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ArtistLandingComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistLandingComponent.prototype, "feildtype", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistLandingComponent.prototype, "artistHomView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistLandingComponent.prototype, "carouselview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('artistlandin'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ArtistLandingComponent.prototype, "artistlandin", void 0);
    ArtistLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist-landing',
            template: __webpack_require__("../../../../../src/app/artists/artist-landing/artist-landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-landing/artist-landing.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__artists_services__["b" /* ArtistService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__artists_services__["b" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__artists_services__["b" /* ArtistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
    ], ArtistLandingComponent);
    return ArtistLandingComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=artist-landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/artists/artist-tour/artist-tour.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-tour/artist-tour.component.html":
/***/ (function(module, exports) {

module.exports = "<div #artistdetailTour class=\"block {{customClass}}\">\n  <p >This is tour Block {{artistname}}</p>\n  <div id=\"TourDate\">\n\t\t\t\t\t\t<a class=\"bit-widget-initializer\" [attr.data-artist-name]=\"artistname\" data-display-local-dates=\"true\" data-display-past-dates=\"false\"\n\t\t\t\t\t\t data-auto-style=\"false\" data-text-color=\"#FFFFFF\" data-link-color=\"#2F95DE\" data-popup-background-color=\"#000000\" data-background-color=\"rgba(0,0,0,0)\"\n\t\t\t\t\t\t data-display-limit=\"10\" data-link-text-color=\"#FFFFFF\" data-div-id=\"TourDate\" data-display-limit=\"10\" ></a>\n\t\t\t\t\t</div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-tour/artist-tour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistTourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistTourComponent = /** @class */ (function () {
    function ArtistTourComponent() {
        this.firstTime = true;
    }
    ArtistTourComponent.prototype.triggerFalseClick = function () {
        var el = this.artistdetailTour.nativeElement;
        el.click();
    };
    ArtistTourComponent.prototype.ngOnInit = function () {
        var s = document.createElement('script');
        s.src = "https://widget.bandsintown.com/main.min.js";
        s.className = "bandsscript";
        if ((document.getElementsByClassName("bandsscript")[0])) {
            document.getElementsByClassName("bandsscript")[0].remove();
        }
        document.getElementsByTagName("head")[0].appendChild(s);
        // this.triggerFalseClick();
    };
    ArtistTourComponent.prototype.ngOnChanges = function () {
        var s = document.createElement('script');
        s.src = "https://widget.bandsintown.com/main.min.js";
        s.className = "bandsscript";
        if ((document.getElementsByClassName("bandsscript")[0])) {
            document.getElementsByClassName("bandsscript")[0].remove();
        }
        document.getElementsByTagName("head")[0].appendChild(s);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ArtistTourComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ArtistTourComponent.prototype, "artistname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('artistdetailTour'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ArtistTourComponent.prototype, "artistdetailTour", void 0);
    ArtistTourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist-tour',
            template: __webpack_require__("../../../../../src/app/artists/artist-tour/artist-tour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-tour/artist-tour.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtistTourComponent);
    return ArtistTourComponent;
    var _a;
}());

//# sourceMappingURL=artist-tour.component.js.map

/***/ }),

/***/ "../../../../../src/app/artists/artists-carousel/artists-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li.items {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    transition: all 1s ease 0s;\r\n    -webkit-transition: all 1s ease 0s;\r\n    -moz-transition: all 1s ease 0s;\r\n    -o-transition: all 1s ease 0s;\r\n    -ms-transition: all 1s ease 0s;\r\n}\r\nli.items:hover {\r\n    opacity: .4;\r\n    background: #000;\r\n}\r\nul.item-list.carousel{\r\n    display: inline-block;\r\n    width: 100%;\r\n    overflow: visible;\r\n}\r\n.carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 70px;\r\n   opacity: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0 10px;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    cursor: pointer;\r\n    z-index: 2;\r\n    background-image: url(/assets/i/arrows.png);\r\n    background-repeat: no-repeat;\r\n    background-position: calc(70px/2 - 3px) center;\r\n    background-position: -webkit-calc(70px/2 - 3px) center;\r\n    color: transparent;\r\n    text-indent: -999px;\r\n    overflow: hidden;\r\n}\r\n.carousel-nav .carousel-next{\r\n    left: unset;\r\n    right: 0;\r\n    background-position: calc(-104px / 2 + 3px) center;\r\n    background-position: -webkit-calc(-104px / 2 + 3px) center;\r\n}\r\n.carousel-dots {\t\t\t\r\n    bottom: 5%;\r\n    display: inline-block;\r\n    height: auto;\r\n    left: 50%;\r\n    position: absolute;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    -webkit-transform: -webkit-translateX(-50%);\r\n            transform: -webkit-translateX(-50%);\r\n    width: auto;\r\n}\r\nspan.carousel-dot {\r\n    background-color: #ffffff;\r\n    border: 1px solid #ffffff;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    height: 7px;\r\n    margin-right: 10px;\r\n    width: 7px;\r\n}\r\nspan:last-child {\r\n    margin-right: 0;\r\n}\r\nspan.carousel-dot.active {\r\n    background-color: red;\r\n}\r\n.carousel-stage .thumbnail{\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 1;\r\n    line-height: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n.carousel-stage .thumbnail img{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.carousel-stage .thumbnail img{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.carousel-stage .thumbnail .hover-node{\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n   opacity: 0;\r\n    cursor: -webkit-grab;\r\n}\r\n.carousel-stage .thumbnail:hover .hover-node{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.hover-node span {\r\n    display: inline-block;\r\n    width: 100%;\r\n    line-height: 1.3;\r\n    font-size: 22px;\r\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n}\r\n.hover-node span.main-title::before {\r\n    background-image: url(/assets/i/instagram-image.png);\r\n    background-repeat: no-repeat;\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 26px;\r\n    height: 26px;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n}\r\n.hover-node span.second-title {\r\n    /* font-weight: 300; */\r\n    font-size: 19px;\r\n    margin-bottom: 25px;\r\n}\r\n.hover-node .button {\r\n    border-color: #ffffff;\r\n    font-size: 15px;\r\n    padding: 0;\r\n    color: #ffffff;\r\n    font-weight: 500;\r\n    width: 122px;\r\n    letter-spacing: 2px;\r\n    line-height: 2;\r\n}\r\n.hover-node .button:hover {\r\n    color: #1b214e;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .carousel.viewport {\r\n        display: block;\r\n        width: 80%;\r\n        \r\n    }\r\n    .carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n        width: 20px;\r\n        background-position: calc(20px/2 - 3px) center;\r\n        background-position: -webkit-calc(20px/2 - 3px) center;\r\n    }\r\n    .carousel-nav .carousel-next{\r\n        background-position: calc(-154px / 2 + 3px) center;\r\n        background-position: -webkit-calc(-154px / 2 + 3px) center;\r\n    }\r\n    carousel, app-artists-carousel {    \r\n        padding: 0 40px;\r\n        box-sizing: border-box;\r\n        -webkit-box-sizing: border-box;\r\n    }\r\n    \r\n   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artists-carousel/artists-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel viewport\">\n  <ul *ngIf=\"createCarousel\" class=\"item-list carousel\" >\n    <div class=\"carousel-stage\" [style.width] = \"carouselWidth\" [style.transform] = \"transformNode\" [style.transition] = \"transitionValue\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n        <li *ngFor=\"let artists of duplicate;let i = index\" [style.width] = \"elementWidth\" class=\"items item-no-{{i}}\" [class.clone]=\"artists.clone\" >\n            <div class=\"thumbnail\"><a (click)=\"gotoArtistDetail(artists)\"><img [src]=\"artists.field_banner_image\"/></a>\n            </div>\n                    \n            \n            \n        </li>\n    </div>\n</ul>\n<div class=\"carousel-controls\">\n    <div class=\"carousel-nav\" >\n        <div class=\"carousel-prev\" [style.display]=\"PreviousNav\" (click)=\"previousItem()\" >prev</div>\n        <div class=\"carousel-next\" [style.display]=\"NextNav\" (click)=\"nextItem()\" >next</div>\n    </div>\n    <div class=\"carousel-dots\" [style.display]=\"showDots\">\t\t\t\t\n        <span *ngFor=\"let dot of dotCounts; let i = index;\" class=\"carousel-dot\"></span>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artists/artists-carousel/artists-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistsCarouselComponent = /** @class */ (function (_super) {
    __extends(ArtistsCarouselComponent, _super);
    function ArtistsCarouselComponent(element, _router) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.carouselimageURL = "";
        _this.spotifyCarousel = false;
        _this.node = element;
        _this.carouselLength = 0;
        _this.options = {
            itemCount: 3,
            showDots: false,
            showNav: true,
            animationSpeed: 0.5,
            autoplay: false,
            loop: true,
            responsive: {
                "767": 2,
                "1200": 3,
                "1400": 6,
                "2700": 6
            }
        };
        return _this;
    }
    ArtistsCarouselComponent.prototype.ngOnInit = function () {
    };
    ArtistsCarouselComponent.prototype.ngOnChanges = function () {
        this.carouselLength = this.carouseln;
        for (var index in this.artists) {
            this.artists[index].field_banner_image = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].getImageSrc(this.artists[index].field_banner_image.toString());
            this.carouselimageURL = this.artists[index].field_banner_image;
        }
        if (this.artists.length == this.carouselLength) {
            this.duplicate = this.artists.slice();
            this.init();
            this.createCarousel = true;
        }
        else {
        }
    };
    ArtistsCarouselComponent.prototype.gotoArtistDetail = function (artist) {
        var id;
        this.selectedArtist = artist;
        id = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].getSlug(this.selectedArtist.path);
        var link = ['/artist', id];
        this._router.navigate(link);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ArtistsCarouselComponent.prototype, "artists", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ArtistsCarouselComponent.prototype, "carouseln", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ArtistsCarouselComponent.prototype, "spotifyCarousel", void 0);
    ArtistsCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artists-carousel',
            template: __webpack_require__("../../../../../src/app/artists/artists-carousel/artists-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artists-carousel/artists-carousel.component.css")],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
    ], ArtistsCarouselComponent);
    return ArtistsCarouselComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__["a" /* CarouselComponent */]));

//# sourceMappingURL=artists-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/artists/artists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-artists{\r\n    padding-top: 67px;\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artists.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/artists/artists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artists_services__ = __webpack_require__("../../../../../src/app/artists/artists.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ArtistsComponent = /** @class */ (function () {
    function ArtistsComponent() {
    }
    ArtistsComponent.prototype.ngOnInit = function () {
        //window.scroll(0, 0);
    };
    ArtistsComponent.prototype.ngOnChanges = function () {
        window.scroll(0, 0);
    };
    ArtistsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artists',
            template: __webpack_require__("../../../../../src/app/artists/artists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artists.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__artists_services__["b" /* ArtistService */]]
        })
    ], ArtistsComponent);
    return ArtistsComponent;
}());

//# sourceMappingURL=artists.component.js.map

/***/ }),

/***/ "../../../../../src/app/artists/artists.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
    }
    ArtistService.prototype.getArtists = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].artistListingEndpoint;
        //var url: string =  environment.host + environment.artistListingTempEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtistswithfilter = function (artist) {
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].artistListingEndpoint + "?nid=" + artist;
        //var url: string =  environment.host + environment.artistListingTempEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtistsgridView = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].artistGridEndPoint;
        console.log("This is url with cache" + url);
        //var url: string =  environment.host + environment.artistListingTempEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtistStickyContent = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].artistGridStickyEndPoint;
        //console.info("url"+url);
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtistDetail = function (id) {
        var nid = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getTitle(id);
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].artistDetailEndpoint;
        var theurl = url + '?title=' + nid;
        return this.http.get(url + '?title=' + nid)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtistIdList = function (categoryName) {
        var url;
        url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].artistNodeIdList;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    ArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ArtistService);
    return ArtistService;
    var _a;
}());

//# sourceMappingURL=artists.services.js.map

/***/ }),

/***/ "../../../../../src/app/artists/featuredartist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeaturedArtistService = /** @class */ (function () {
    function FeaturedArtistService(http) {
        this.http = http;
    }
    FeaturedArtistService.prototype.getFeaturedArtist = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].featuredArtistEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FeaturedArtistService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    FeaturedArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], FeaturedArtistService);
    return FeaturedArtistService;
    var _a;
}());

//# sourceMappingURL=featuredartist.service.js.map

/***/ }),

/***/ "../../../../../src/app/artists/featuredartist/featuredartist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.outerBodyWrapper{\r\n    width:100%;\r\n    max-width: 1240px;\r\n    margin: 0 auto;\r\n    padding:45px 0;\r\n\r\n}\r\n\r\n.innerBodyWrapper .featuredArtistbio {\r\n    font-size: 20px;\r\n    padding-bottom: 24px;\r\n     font-family: 'crimson_textroman';\r\n     line-height: 30px;\r\n     letter-spacing: 1px;\r\n     font-weight:normal;\r\n    margin-right: 3.5%;\r\n}\r\n\r\n.innerBodyWrapper .featuredArtistpath {\r\n    font-size: 14px;\r\n  \r\n}\r\n.biolearnmorewrapper {\r\n    display: inline-block;\r\n    width:57%;\r\n    vertical-align:top;\r\n    box-sizing: border-box;\r\n}\r\n .featuredArtistname{\r\n    display: inline-block;\r\n    width:43%;\r\n    vertical-align:top;\r\n     padding-right: 40px;\r\n    box-sizing: border-box;\r\n    text-align: right;\r\n}\r\nh2.block-title {\r\n    position: absolute;\r\n    right: 30px;\r\n    top: 0;\r\n}\r\n\r\nul.featuredArtist {\r\n    position: relative;\r\n}\r\n.thumbnail {\r\n    font-size: 0;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .innerBodyWrapper .featuredArtistpath {\r\n        font-size: 11px;\r\n    }\r\n    .tittleWrapper {\r\n            margin: 0 5%;\r\n            padding-bottom: 40px;\r\n            margin: 0 auto;\r\n            max-width: 300px;\r\n            width:90%;\r\n    }\r\n\r\n    ul.featuredArtist h2.block-title {\r\n        right: initial;\r\n    }\r\n\r\n     .biolearnmorewrapper {\r\n       display: block;\r\n        width: 100%;\r\n        padding: 44px 0;\r\n        box-sizing: border-box;\r\n        max-width: 300px;\r\n        margin: 0 auto;\r\n        width:90%;\r\n    }\r\n    ul.featuredArtist h2.block-title{\r\n        opacity: 1;\r\n        position: relative;\r\n    }\r\n    .featuredArtistname{\r\n        display: block;\r\n        width: 100%;\r\n        padding: 0;\r\n        text-align: center;\r\n    }\r\n    .outerBodyWrapper{\r\n        padding:30px 0  0 0;\r\n    }\r\n    .innerBodyWrapper .featuredArtistbio {\r\n    font-size: 18px;\r\n    \r\n    }\r\n}\r\n@media only screen and (min-width:768px ) and (max-width: 1023px){\r\n.outerBodyWrapper{\r\n    width:90%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/featuredartist/featuredartist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block {{customClass}}\">\n\n    <ul class=\"featuredArtist {{cols}}\">\n\n        <li class=\"featuredArtist\" *ngFor=\"let f of featuredArtist | slice:0:(count)\">\n            <div class=\"item-wrapper desktop\" *ngIf=\"desktopResolution\" (window:resize)=\"onResizefot($event)\">\n                <div class=\"block-title-wrapper  right\">\n                    <h2 class=\"block-title\">Featured Artist</h2>\n                </div>\n                <div class=\"thumbnail\" [innerHTML]=\"f.field_image\"></div>\n                <div class=\"innerBodyWrapper\">\n                    <div class=\"outerBodyWrapper\">\n                        <h3 class=\"featuredArtistname\" [innerHTML]=\"f.title\"></h3>\n                        <div class=\"biolearnmorewrapper\">\n                            <div class=\"featuredArtistbio\" [innerHTML]=\"f.body\"></div>\n                            <div class=\"featuredArtistpath\">\n                                    <a class=\"learn-more\" (click)=\"gotoArtistDetail(f)\">Learn More</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item-wrapper mobile\" *ngIf=\"mobilereolution\" (window:resize)=\"onResizefot($event)\">\n\n\n                <div class=\"innerBodyWrapper\">\n                    <div class=\"outerBodyWrapper\">\n                        <div class=\"tittleWrapper\">\n                            <div class=\"block-title-wrapper  left\">\n                                <h2 class=\"block-title\">Featured Artist</h2>\n                            </div>\n                            <h3 class=\"featuredArtistname\" [innerHTML]=\"f.title\"></h3>\n                        </div>\n                        <div class=\"thumbnail\" [innerHTML]=\"f.field_image\"></div>\n                        <div class=\"biolearnmorewrapper\">\n                            <div class=\"featuredArtistbio\" [innerHTML]=\"f.body\"></div>\n                            <div class=\"featuredArtistpath\" [innerHTML]=\"f.field_path\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/featuredartist/featuredartist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedartistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__featuredartist_service__ = __webpack_require__("../../../../../src/app/artists/featuredartist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeaturedartistComponent = /** @class */ (function () {
    function FeaturedartistComponent(_artistService, _router) {
        this._artistService = _artistService;
        this._router = _router;
        this.mobilereolution = false;
        this.desktopResolution = false;
    }
    FeaturedartistComponent.prototype.getFeaturedArtist = function () {
        var _this = this;
        this.featuredArtist = [];
        this._artistService.getFeaturedArtist().subscribe(function (data) {
            _this.featuredArtist = data;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        return this.featuredArtist;
    };
    FeaturedartistComponent.prototype.ngOnInit = function () {
        this.featuredArtist = this.getFeaturedArtist();
        if (window.screen.width < 767) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (window.screen.width > 767) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    FeaturedartistComponent.prototype.onResizefot = function (event) {
        if (event.target.innerWidth < 767) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (event.target.innerWidth > 767) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    FeaturedartistComponent.prototype.gotoArtistDetail = function (artist) {
        var id;
        this.selectedArtist = artist;
        id = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].getSlug(this.selectedArtist.path);
        var link = ['/artist', id];
        this._router.navigate(link);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FeaturedartistComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FeaturedartistComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FeaturedartistComponent.prototype, "customClass", void 0);
    FeaturedartistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-featuredartist',
            template: __webpack_require__("../../../../../src/app/artists/featuredartist/featuredartist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/featuredartist/featuredartist.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__featuredartist_service__["a" /* FeaturedArtistService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__featuredartist_service__["a" /* FeaturedArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__featuredartist_service__["a" /* FeaturedArtistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
    ], FeaturedartistComponent);
    return FeaturedartistComponent;
    var _a, _b;
}());

//# sourceMappingURL=featuredartist.component.js.map

/***/ }),

/***/ "../../../../../src/app/artists/filter-by-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByName = /** @class */ (function () {
    function FilterByName() {
    }
    FilterByName.prototype.transform = function (value, args) {
        if (value != undefined) {
            if (args != "" && args != undefined) {
                var filter_1 = args.toLocaleLowerCase();
                return filter_1 ? value.filter(function (t) { return t.title.toLocaleLowerCase().indexOf(filter_1) == -1; }) : value;
            }
            else {
                return value;
            }
        }
    };
    FilterByName = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterByName'
        })
    ], FilterByName);
    return FilterByName;
}());

//# sourceMappingURL=filter-by-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/artists/filter-by-type.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByType = /** @class */ (function () {
    function FilterByType() {
    }
    FilterByType.prototype.transform = function (value, args) {
        console.log(args);
        var filter = args.toLocaleLowerCase();
        if (args != "All") {
            // return filter ? value.filter(t=> t.field_type.toLocaleLowerCase().indexOf(filter) != -1) : value;
            if (filter) {
                value = value.filter(function (t) { return t.field_type.toLocaleLowerCase().indexOf(filter) != -1; });
            }
            if (value.length > 0) {
                return value;
            }
        }
        else {
            return value;
        }
    };
    FilterByType = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterByType'
        })
    ], FilterByType);
    return FilterByType;
}());

//# sourceMappingURL=filter-by-type.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/artists/filter-truncate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? args : 10;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'TruncatePipe'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

//# sourceMappingURL=filter-truncate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/artists/tour-soundkick.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourSoundkickService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TourSoundkickService = /** @class */ (function () {
    function TourSoundkickService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    TourSoundkickService.prototype.getsongKick = function (artistId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].songkickEndPoint + artistId + "/calendar/managed_performances.json?apikey=heMLjOnXj1zuWDXP&jsoncallback=JSONP_CALLBACK";
        console.log("sound kick" + url);
        return this.jsonp.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TourSoundkickService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    TourSoundkickService.prototype.mapsongKickInfo = function (data) {
        var songKickContents = new Array();
        var dataContent = data.resultsPage.totalEntries;
        if (dataContent != undefined) {
            for (var _i = 0, _a = data.resultsPage.results.performance; _i < _a.length; _i++) {
                var t = _a[_i];
                var songKickContent = {};
                songKickContent.location = t.event.location.city;
                songKickContent.venue = t.event.venue.displayName;
                //Date Feed
                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                var dateSplit = t.event.start.date.split("-");
                var date_instance = new Date(dateSplit[0], parseInt(dateSplit[1], 10) - 1, dateSplit[2]);
                songKickContent.date = date_instance.getDate() < 10 ? "0" + String(date_instance.getDate()) : String(date_instance.getDate());
                songKickContent.month = months[date_instance.getMonth()];
                songKickContent.year = String(date_instance.getFullYear());
                songKickContent.additionalUrl = t.additionalUrl;
                //Ticket feed
                songKickContent.ticketLabel = t.directTicketLabel;
                if (t.directTicketLabel) {
                    if (t.directTicketLabel == "Tickets") {
                        if (t.directTicketLink) {
                            songKickContent.ticketLink = t.directTicketLink;
                        }
                        else {
                            songKickContent.ticketLink = t.event.uri;
                        }
                    }
                    else if (t.directTicketLabel == "SOLD OUT") {
                        songKickContent.ticketLink = 'javascript:void(0)';
                        songKickContent.ticketLabel = "Sold Out";
                    }
                }
                else {
                    songKickContent.ticketLink = t.event.uri;
                    songKickContent.ticketLabel = "Tickets";
                }
                var artist_id = "3181021";
                var featuring_artists = document.createElement('div');
                var flag = false;
                if ((t.event.performance.length > 1) && (t.event.performance.length < 4)) {
                    featuring_artists.innerHTML += 'with ';
                    for (var i = 0; i < t.event.performance.length; i++) {
                        if (t.event.performance[i].artist.id != artist_id) {
                            if ((t.event.performance.length != 2) && flag) {
                                featuring_artists.innerHTML += " and " + t.event.performance[i].displayName;
                            }
                            else {
                                featuring_artists.innerHTML += t.event.performance[i].displayName;
                                flag = true;
                            }
                        }
                    }
                }
                else if (t.event.performance.length > 3) {
                    featuring_artists.innerHTML += 'with ';
                    for (var i = 0; i < 4; i++) {
                        if (t.event.performance[i].artist.id != artist_id) {
                            featuring_artists.innerHTML += t.event.performance[i].displayName;
                            if (i != 3) {
                                featuring_artists.innerHTML += ", ";
                            }
                        }
                    }
                    featuring_artists.innerHTML += ' and more';
                }
                songKickContent.featuredAtrist = featuring_artists.innerHTML;
                /*Additonal Link*/
                var addl_link = document.createElement('a');
                addl_link.className = 'additional_link link_text link_background';
                addl_link.setAttribute('target', '_blank');
                if (t.additionalLabel) {
                    addl_link.innerHTML = t.additionalLabel;
                    addl_link.setAttribute('href', t.additionalUrl);
                }
                else {
                    addl_link.className += ' no-link';
                }
                if (t.additionalLabel == "VIP") {
                    addl_link.setAttribute('data-track', 'songkick-vip');
                }
                else if (t.additionalLabel == "rsvp") {
                    addl_link.setAttribute('data-track', 'songkick-rsvp');
                }
                songKickContent.addl_link = addl_link.outerHTML;
                songKickContents.push(songKickContent);
            }
        }
        else {
        }
        return songKickContents;
    };
    TourSoundkickService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], TourSoundkickService);
    return TourSoundkickService;
    var _a, _b;
}());

//# sourceMappingURL=tour-soundkick.service.js.map

/***/ }),

/***/ "../../../../../src/app/artists/tour-soundkick/tour-soundkick.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tourdates\r\n{\r\n    font-size:20px;\r\n}\r\n\r\n .tourInnerWrapper div.nocontent{\r\n    color:#777;\r\n    font-size: 13px;\r\n    line-height: 20px;\r\n    padding-bottom: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/tour-soundkick/tour-soundkick.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block\" id=\"tourdates\" *ngIf=\"songKickfeed\">\n        <!-- \n          <div id=\"TourDate\">\n                  <div class=\"tourSongkickWrapper\">\n                          <a class=\"songkick-widget\" data-artist-id=\"7775839\" data-page=\"2\" data-date-format=\"mon/dd\" style-background-color=\"transparent\"\n                                  style-text-color=\"#259c9a\" style-link-color=\"transparent \" style-link-text-color=\"#259c9a\">Dan and Shay</a>\n                  </div>\n  \n          </div> -->\n        <div class=\"songKickBlockContents\" *ngIf=\"songKickfeed?.length > 0;\">\n                <div class=\"bit-widget row \">\n                        <!-- <div *ngSwitchCase=\"1\"> -->\n                        <div class=\"songkickFeedContent songkick-container\">\n                                <div class=\"segregator row-{{i}}\" *ngFor=\"let t of songKickfeed | slice:0:setLimit; let i = index\">\n\n                                        <div class=\"widget_row\">\n                                                <div class=\"event_date\">\n                                                        <div class=\"month plain_text\" [innerHTML]=\"t.month\"></div>\n                                                        <div class=\"date plain_text\" [innerHTML]=\"t.date\"></div>\n                                                        <!-- <span>,</span>\n                                                        <div class=\"year plain_text\" [innerHTML]=\"t.year\"></div> -->\n                                                </div>\n                                                <div class=\"event_location\">\n                                                        <div class=\"special-event plain_text\"></div>\n                                                        <div class=\"venue plain_text\" [innerHTML]=\"t.venue\"> </div>\n                                                        <div class=\"location plain_text\" [innerHTML]=\"t.location\"></div>\n                                                </div>\n                                                <div class=\"featuring-artists plain_text\"></div>\n                                                <div class=\"event_links\">\n                                                        <div  class=\"VipLink\">\n                                                                <div *ngIf=\"t.additionalUrl\" [innerHTML]=\"t.addl_link\"></div>\n                                                        </div>\n                                                        <div class=\"ticketLink\">\n                                                                <a class=\"ticket_link link_text link_background\" target=\"_blank\" href={{t.ticketLink}} data-track=\"songkick-tickets\" title={{t.ticketLabel}}>{{t.ticketLabel}}</a>\n\n                                                        </div>\n\n\n                                                </div>\n                                                <!-- <div class=\"no-dates\">No Upcoming Tour Dates</div> -->\n                                        </div>\n\n                                </div>\n                                <a *ngIf=viewAll class=\"view_more link_text link_background\" href=\"javascript:void(0);\" (click)=\"togglesetLimit()\">Show all dates</a>\n                        </div>\n                        <!-- </div> -->\n                        <!-- <div *ngSwitchCase=\"2\">\n                                          <div class=\"songkickFeedContent songkick-container\">                                \n                                                  <div class=\"segregator row-{{i}}\" *ngFor=\"let t of songKickfeed | slice:0; let i = index\">\n                  \n                                                          <div class=\"widget_row\">\n                                                                  <div class=\"event_date\">\n                                                                          <div class=\"month plain_text\" [innerHTML]=\"t.month\"></div>\n                                                                          <div class=\"date plain_text\" [innerHTML]=\"t.date\"></div>\n                                                                          \n                                                                  </div>\n                                                                  <div class=\"event_location\">\n                                                                          <div class=\"special-event plain_text\"></div>\n                                                                          <div class=\"venue plain_text\" [innerHTML]=\"t.venue\"> </div>\n                                                                          <div class=\"location plain_text\" [innerHTML]=\"t.location\"></div>\n                                                                  </div>\n                                                                  <div class=\"featuring-artists plain_text\"></div>\n                                                                  <div class=\"event_links\">\n                                                                          <a class=\"ticket_link link_text link_background\" target=\"_blank\" href={{t.ticketLink}}\n                                                                                  data-track=\"songkick-tickets\" title={{t.ticketLabel}}>{{t.ticketLabel}}</a>\n                                                                      <div [innerHTML]=\"t.addl_link\"></div>\n                                                                  </div>\n                                                                 \n                                                          </div>\n                                                         \n                                                  </div>\n                                                 \n                                          </div>\n                                          </div> -->\n                </div>\n        </div>\n        <div class=\"tourInnerWrapper\" *ngIf=\"totalEntry == 0\">\n                        <div class=\"nocontent\">No Upcoming Tour Dates For\n                                <span>{{artistName}}</span>\n                        </div>\n                </div>\n                \n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/tour-soundkick/tour-soundkick.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourSoundkickComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_soundkick_service__ = __webpack_require__("../../../../../src/app/artists/tour-soundkick.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TourSoundkickComponent = /** @class */ (function () {
    function TourSoundkickComponent(_songKickService) {
        this._songKickService = _songKickService;
        this.notatourpage = false;
        this.setLimit = 10;
        this.viewAll = false;
    }
    TourSoundkickComponent.prototype.togglesetLimit = function () {
        this.setLimit = undefined;
        this.viewAll = false;
    };
    TourSoundkickComponent.prototype.ngOnInit = function () {
    };
    TourSoundkickComponent.prototype.ngOnChanges = function () {
        var _this = this;
        //console.info(this.artistId);
        this._songKickService.getsongKick(this.artistId).subscribe(function (data) {
            _this.songKickfeed = data;
            _this.totalEntry = data.resultsPage.totalEntries;
            if (_this.totalEntry > 0) {
                _this.songKickfeed = _this._songKickService.mapsongKickInfo(_this.songKickfeed);
            }
            if (_this.totalEntry > _this.setLimit) {
                _this.viewAll = true;
            }
            else {
                _this.viewAll = false;
            }
        }, function (err) { return console.error(err); }, function () {
            for (var i = 0; i < _this.songKickfeed.length; i++) {
                // console.info("adtionalURL", this.songKickfeed[i].additionalUrl);
            }
            console.log();
        });
        return this.songKickfeed;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TourSoundkickComponent.prototype, "notatourpage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TourSoundkickComponent.prototype, "setLimit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TourSoundkickComponent.prototype, "viewAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TourSoundkickComponent.prototype, "artistId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TourSoundkickComponent.prototype, "artistName", void 0);
    TourSoundkickComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tour-soundkick',
            template: __webpack_require__("../../../../../src/app/artists/tour-soundkick/tour-soundkick.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/tour-soundkick/tour-soundkick.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__tour_soundkick_service__["a" /* TourSoundkickService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tour_soundkick_service__["a" /* TourSoundkickService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tour_soundkick_service__["a" /* TourSoundkickService */]) === "function" && _a || Object])
    ], TourSoundkickComponent);
    return TourSoundkickComponent;
    var _a;
}());

//# sourceMappingURL=tour-soundkick.component.js.map

/***/ }),

/***/ "../../../../../src/app/block/block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/block/block.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"block\">  \r\n  <div [innerHTML]=\"safeHtml\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/block/block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_service__ = __webpack_require__("../../../../../src/app/block/block.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockComponent = /** @class */ (function () {
    function BlockComponent(_blockService, sanitizer) {
        this._blockService = _blockService;
        this.sanitizer = sanitizer;
    }
    BlockComponent.prototype.getBlock = function () {
        var _this = this;
        this._blockService.getBlock(this.blockID).subscribe(function (data) {
            _this.block = data[0];
            _this.safeHtml = _this.sanitizer.bypassSecurityTrustHtml(_this.block.body.toString());
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    BlockComponent.prototype.ngOnInit = function () {
        this.getBlock();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlockComponent.prototype, "blockID", void 0);
    BlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-block',
            template: __webpack_require__("../../../../../src/app/block/block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/block/block.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__block_service__["a" /* BlockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__block_service__["a" /* BlockService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object])
    ], BlockComponent);
    return BlockComponent;
    var _a, _b;
}());

//# sourceMappingURL=block.component.js.map

/***/ }),

/***/ "../../../../../src/app/block/block.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockService = /** @class */ (function () {
    function BlockService(http) {
        this.http = http;
    }
    BlockService.prototype.getBlock = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].blockEndpoint;
        return this.http.get(url + '?id=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BlockService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    BlockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], BlockService);
    return BlockService;
    var _a;
}());

//# sourceMappingURL=block.service.js.map

/***/ }),

/***/ "../../../../../src/app/breadcrumb/breadcrumb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumb li {\r\n\tcolor: #1b214e;\r\n    display: inline-block;\r\n    padding: 0 0;\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    list-style: none;\r\n    margin-right: 3px;\r\n    line-height: 1;\r\n}\r\n.breadcrumb li a, .breadcrumb li span {\r\n\tcolor: #ffffff;\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    font-size: 12px;\r\n}\r\n.breadcrumb li span {\r\n    vertical-align: middle;\r\n    margin-right: 3px;\r\n    display: inline-block;\r\n    line-height: 13px;\r\n    font-size: 22px;\r\n    height: 16px;\r\n}\r\n.breadcrumb li.hide {\r\n    display: none;\r\n}\r\n.breadcrumb li a:hover {\r\n\tcolor: #359be9\r\n}\r\n.breadcrumb li:last-child {\r\n    border-right: none;\r\n}\r\n.breadcrumb li:last-child a{\r\n    font-weight: 600;\r\n}\r\n.breadcrumb-wrapper{\r\n    display: block;\r\n    width: 100%;\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.g-layout.breadcrumb-layout {\r\n    padding-bottom: 0;\r\n    position: absolute;\r\n    top: 35px;\r\n    /* width: 100%; */\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    left: 50%;\r\n    z-index: 8;\r\n}\r\n.breadcrumb li:before {\r\n    /* content: ' \\BB '; */\r\n    display: none;\r\n}\r\n.breadcrumb-wrapper.root{\r\n    top: 68px;\r\n}\r\n.breadcrumb-wrapper.root .breadcrumb{\r\n    margin: 0 auto;\r\n}\r\n.breadcrumb{\r\n    position: static;\r\n    width: 100%;\r\n    display: block;\r\n    margin: 0 auto 0;\r\n}\r\n.breadcrumb.news_detail li:before, .breadcrumb.photo_detail li:before{\r\n    color: #807c9c\r\n}\r\n.g-layout.breadcrumb-layout.news_detail, .g-layout.breadcrumb-layout.photo_detail, .g-layout.breadcrumb-layout.video_detail, .g-layout.breadcrumb-layout.album_detail{\r\n    top: 0;\r\n    position: static;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n}\r\n.breadcrumb.news_detail li a, .breadcrumb.photo_detail li a, .breadcrumb.news_detail li span, .breadcrumb.photo_detail li span {\r\n    color: #807c9c;\r\n}\r\n.breadcrumb-wrapper.video_detail, .breadcrumb-wrapper.album_detail{\r\n    background-color: #040514;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.rootClassName = "";
        this.breadcrumbs = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //subscribe to the NavigationEnd event
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]; }).subscribe(function (event) {
            //set breadcrumbs
            var root = _this.activatedRoute.root;
            _this.rootClassName = "";
            console.log("-------------------------ActivatedRoute-------------------------------");
            console.log(root);
            _this.breadcrumbs = _this.getBreadcrumbs(root);
            //let breadcrumbs= this.remove_duplicates(this.getBreadcrumbs(root));
        });
    };
    BreadcrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ""; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //get the child routes
        var children = route.children;
        //return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        //iterate over each children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            //verify primary route
            if (child.outlet !== __WEBPACK_IMPORTED_MODULE_1__angular_router__["PRIMARY_OUTLET"]) {
                continue;
            }
            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            //get the route's URL segment
            var routArray = child.snapshot.url.map(function (segment) { return segment.path; });
            var routeURL = routArray.join("/");
            var routeName = routArray[routArray.length - 1];
            //append route URL to URL
            url += "/" + routeURL;
            //console.info('url', url);
            //add breadcrumb
            var label = child.snapshot.data[ROUTE_DATA_BREADCRUMB];
            if (label.indexOf(":path") != -1)
                label = routeName;
            var breadcrumb = {
                label: label,
                params: child.snapshot.params,
                url: url
            };
            var className = breadcrumb.label;
            if (className.length > 1) {
                this.rootClassName = this.rootClassName + " " + className.replace(/ /g, "_");
                this.rootClassName = this.rootClassName.trim().toLocaleLowerCase();
            }
            breadcrumbs.push(breadcrumb);
            //recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        //we should never get here, but just in case
        return breadcrumbs;
    };
    BreadcrumbComponent.prototype.remove_duplicates = function (arr) {
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        arr = [];
        for (var key in obj) {
            arr.push(key);
        }
        return arr;
    };
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "breadcrumb",
            template: "\n  <div class=\"breadcrumb-wrapper {{rootClassName}}\" [class.root] = \"breadcrumbs.length < 1\">  \n    <div class=\"g-layout breadcrumb-layout {{rootClassName}}\">    \n      <ul class=\"breadcrumb {{rootClassName}}\">\n        <li><a [routerLink]=\"['/']\">Home</a></li>\n        <li *ngFor=\"let breadcrumb of breadcrumbs\" [class.hide] = \"breadcrumb.label.length < 1\">\n          <span>&#8250;</span><a [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.label}}</a>\n        </li>\n      </ul>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/breadcrumb/breadcrumb.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
    var _a, _b;
}());

//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselConfig; });
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        this.itemCount = 1;
        this.showDots = true;
        this.showNav = true;
        this.animationSpeed = 0.25;
        this.autoplay = true;
        this.loop = true;
    }
    return CarouselConfig;
}());

//# sourceMappingURL=carousel-config.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.carousel {\r\n    height: auto;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n.carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: auto;\r\n    background-color: rgba(255,255,255,0.5);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0 10px;\r\n    color: #000000;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n    cursor: pointer;\r\n}\r\n.carousel-nav .carousel-next{\r\n    left: unset;\r\n    right: 0;\r\n}\r\nul.carousel li {\r\n    width: calc(100% / 4);\r\n    width: -webkit-calc(100% / 4);\r\n}\r\n.carousel-dots {\r\n    bottom: 5%;\r\n    display: inline-block;\r\n    height: auto;\r\n    left: 50%;\r\n    position: absolute;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    -webkit-transform: -webkit-translateX(-50%);\r\n            transform: -webkit-translateX(-50%);\r\n    width: auto;\r\n}\r\nspan.carousel-dot {\r\n    background-color: #ffffff;\r\n    border: 1px solid #ffffff;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    height: 7px;\r\n    margin-right: 10px;\r\n    width: 7px;\r\n}\r\nspan:last-child {\r\n    margin-right: 0;\r\n}\r\nspan.carousel-dot.active {\r\n    background-color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div>        \r\n<ul class=\"item-list carousel\" [style.width]=\"carouselWidth\" [style.transform] = \"transformNode\" [style.transition] = \"transitionValue\" >\r\n<div class=\"carousel-stage\" #items>\r\n<ng-content></ng-content>\r\n</div>\r\n</ul>\r\n<div class=\"carousel-controls\">\r\n<div class=\"carousel-nav\" [style.display]=\"showNav\">\r\n<div class=\"carousel-prev\" [style.display]=\"PreviousNav\" (click)=\"previousItem()\" >< prev</div>\r\n<div class=\"carousel-next\" [style.display]=\"NextNav\" (click)=\"nextItem()\" >next ></div>\r\n</div>\r\n<div class=\"carousel-dots\" [style.display]=\"showDots\">\t\t\t\t\r\n<span *ngFor=\"let dot of dotCounts; let i = index;\" class=\"carousel-dot\"></span>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_config__ = __webpack_require__("../../../../../src/app/carousel/carousel-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup' };
        this.itemCount = 2;
        this.newspagecarousel = false;
        this.node = null;
        this.nodeCount = 0;
        this.innerWidth = 0;
        this.elementW = 0;
        this.carouselW = 0;
        this.dotCounts = [1];
        this.config = new __WEBPACK_IMPORTED_MODULE_1__carousel_config__["a" /* CarouselConfig */]();
        this.initCount = 0;
        this.isspotify = false;
        this.tempCount = 0;
        this.PreviousNav = "none";
        this.NextNav = "none";
        this.showDots = "none";
        this.showNav = "none";
        this.transformNode = "";
        this.carouselWidth = "";
        this.transformValue = 0;
        this.transitionValue = "";
        this.elementWidth = "";
        this.initOnce = false;
        this.lastItemNum = 0;
        this.resolutionKeys = [];
        this.clientWidth = 0;
        this.responsiveWidth = 0;
        this.options = {};
        this.currentItemNumber = 1;
        this.carouselLength = 20;
        this.createCarousel = false;
    }
    CarouselComponent.prototype.getNodeCounts = function () {
        return this.nodeCount;
    };
    CarouselComponent.prototype.closed = function () { };
    CarouselComponent.prototype.nextItem = function () {
        //console.info("nextItem--");
        var _this = this;
        this.PreviousNav = "";
        this.NextNav = "";
        //this.node.nativeElement.querySelectorAll(".carousel-dots span")[0].className = "carousel-dot";
        this.node.nativeElement.querySelectorAll(".carousel-dots span:nth-child(" + this.currentItemNumber + ")")[0].className = "carousel-dot";
        this.transitionValue = "all " + this.config.animationSpeed + "s ease";
        this.currentItemNumber += 1;
        this.transformValue = -((this.currentItemNumber) * this.elementW);
        if (!this.config.loop) {
            this.transformValue = -((this.currentItemNumber - 1) * this.elementW);
            if (this.currentItemNumber == (this.nodeCount - (this.config.itemCount - 1))) {
                this.NextNav = "none";
                //this.currentItemNumber += -2;
            }
        }
        this.transformNode = "translate3d(" + this.transformValue + "px, 0px, 0px)";
        if (this.currentItemNumber > this.nodeCount && this.config.loop) {
            this.currentItemNumber = (this.currentItemNumber === 0) ? this.nodeCount : 1;
            setTimeout(function () {
                //Do something after the animation.
                _this.transitionValue = "";
                _this.transformValue = -((_this.currentItemNumber) * _this.elementW);
                _this.transformNode = "translate3d(" + _this.transformValue + "px, 0px, 0px)";
            }, (this.config.animationSpeed * 1000));
        }
        this.node.nativeElement.querySelectorAll(".carousel-dots span:nth-child(" + this.currentItemNumber + ")")[0].className = "carousel-dot active";
    };
    CarouselComponent.prototype.nextnthItem = function (i) {
        this.index = i + 1;
        this.node.nativeElement.querySelectorAll(".carousel-dots span:nth-child(" + this.currentItemNumber + ")")[0].className = "carousel-dot";
        this.transitionValue = "all " + this.config.animationSpeed + "s ease";
        this.currentItemNumber = this.index;
        this.transformValue = -((this.currentItemNumber) * this.elementW);
        this.transformNode = "translate3d(" + this.transformValue + "px, 0px, 0px)";
        this.node.nativeElement.querySelectorAll(".carousel-dots span:nth-child(" + this.currentItemNumber + ")")[0].className = "carousel-dot active";
    };
    CarouselComponent.prototype.previousItem = function () {
        var _this = this;
        this.PreviousNav = "";
        this.NextNav = "";
        this.node.nativeElement.querySelectorAll(".carousel-dots span")[0].className = "carousel-dot";
        this.transitionValue = "all " + this.config.animationSpeed + "s ease";
        var cycle = false, delta = -1;
        this.currentItemNumber += -1;
        this.transformValue = -((this.currentItemNumber) * this.elementW);
        if (!this.config.loop) {
            this.transformValue = -((this.currentItemNumber - 1) * this.elementW);
            if (this.currentItemNumber == 1) {
                this.PreviousNav = "none";
                //this.currentItemNumber += -2;
            }
        }
        this.transformNode = "translate3d(" + this.transformValue + "px, 0px, 0px)";
        if (this.currentItemNumber === 0 && this.config.loop) {
            this.currentItemNumber = (this.currentItemNumber === 0) ? this.nodeCount : 1;
            setTimeout(function () {
                //Do something after the animation.
                _this.transitionValue = "";
                _this.transformValue = -(_this.currentItemNumber * _this.elementW);
                _this.transformNode = "translate3d(" + _this.transformValue + "px, 0px, 0px)";
            }, (this.config.animationSpeed * 1000));
        }
        this.node.nativeElement.querySelectorAll(".carousel-dots span:nth-child(" + this.currentItemNumber + ")")[0].className = "carousel-dot active";
    };
    CarouselComponent.prototype.playcarousel = function () { };
    CarouselComponent.prototype.ngAfterContentInit = function () {
        if (!this.initOnce) {
            //this.init();
            this.initOnce = true;
        }
    };
    CarouselComponent.prototype.init = function () {
        //this.resolutionKeys = Object.keys(this.options);
        this.clientWidth = window.screen.width;
        this.overwrites = this.options.responsive;
        //Object.assign(this.overwrites, this.options.responsive);
        Object.assign(this.config, this.options);
        this.getItemCount();
        this.createCarouselItem();
        /*
        if(this.responsiveWidth <= this.clientWidth && !this.overwrites[""+this.clientWidth]){
            
        }*/
    };
    CarouselComponent.prototype.getItemCount = function () {
        if (this.overwrites) {
            var keys = Object.keys(this.overwrites);
            for (var i = 0; i < keys.length; i++) {
                if (this.clientWidth <= parseInt(keys[i])) {
                    this.itemCount = parseInt(this.overwrites["" + keys[i]]);
                    this.responsiveWidth = parseInt(keys[i]);
                    break;
                }
            }
        }
        else {
            this.itemCount = this.config.itemCount;
        }
    };
    CarouselComponent.prototype.createCarouselItem = function () {
        this.innerWidth = this.getViewPort();
        this.transitionValue = "all 0s ease";
        if (this.config.showNav) {
            this.PreviousNav = "";
            this.NextNav = "";
        }
        if (this.config.showDots)
            this.showDots = "";
        if (this.config.showNav)
            this.showNav = "";
        //console.info(this.node.nativeElement);
        this.nodeCount = this.carouselLength;
        if (this.itemCount == 1 && !this.newspagecarousel) {
            this.elementW = ((this.innerWidth) / this.itemCount) * .75;
        }
        this.elementW = (this.innerWidth) / this.itemCount;
        this.carouselW = (this.elementW * this.nodeCount) + this.nodeCount;
        this.carouselWidth = this.carouselW + "px";
        this.elementWidth = (this.elementW) + "px";
        if (this.config.loop) {
            var lastAfter = [];
            var firstBefore = [];
            for (var i = 0; i < this.itemCount; i++) {
                var lastAfternode = Object.assign({}, this.duplicate[i]);
                var firstBeforenode = Object.assign({}, this.duplicate[this.carouselLength - (i + 1)]);
                firstBeforenode["clone"] = lastAfternode["clone"] = true;
                lastAfter.push(lastAfternode);
                firstBefore.push(firstBeforenode);
            }
            //firstBefore.className = lastAfter.className = "items clone";
            var firstBeforeCount = this.itemCount - 1;
            for (var i = 0; i < this.itemCount; i++) {
                this.duplicate.push(lastAfter[i]);
                this.duplicate.splice(i, 0, firstBefore[firstBeforeCount - i]);
                this.duplicate.join();
            }
            //this.carouselW = ( ( this.innerWidth * ( this.nodeCount + 2 ) ) + this.nodeCount );	
            this.currentItemNumber = this.itemCount;
            this.carouselWidth = (this.carouselW + (this.elementW * this.itemCount) + (this.elementW * this.itemCount)) + "px";
            if (this.itemCount == 1) {
                this.transformValue = -(Math.abs(this.transformValue) + (this.elementW * this.itemCount));
            }
            else {
            }
            this.transformValue = -((this.currentItemNumber) * this.elementW);
            this.transformNode = "translate3d(" + this.transformValue + "px, 0px, 0px)";
        }
        this.dotCounts = Array(this.nodeCount).fill(1);
        this.transitionValue = "all " + this.config.animationSpeed + "s ease";
        if (!this.config.loop) {
            this.PreviousNav = "none";
        }
    };
    CarouselComponent.prototype.ngOnInit = function () {
        //console.info("this.photos.length "+this.photos.length);
    };
    CarouselComponent.prototype.getViewPort = function () {
        if (this.isspotify) {
            return this.node.nativeElement.querySelectorAll(".carousel.viewport.spotify")[0].clientWidth;
        }
        else {
            return this.node.nativeElement.querySelectorAll(".carousel.viewport")[0].clientWidth;
        }
    };
    /*
    ngOnChanges() {
        if(this.photos.length == this.carouselLength){
            console.info(this.photos[0]);
            this.init();
            this.createCarousel = true;
        }
    }*/
    CarouselComponent.prototype.onResize = function (event) {
        //this.clientWidth = event.target.innerWidth;
        this.resizeNodes();
    };
    CarouselComponent.prototype.resizeNodes = function () {
        this.innerWidth = this.getViewPort();
        //console.log(this.innerWidth);
        this.transitionValue = "";
        this.elementW = (this.innerWidth) / this.itemCount;
        this.carouselW = (this.elementW * this.nodeCount) + this.nodeCount;
        this.carouselWidth = this.carouselW + "px";
        if (this.config.loop) {
            this.carouselWidth = (this.carouselW + (this.elementW * this.itemCount) + (this.elementW * this.itemCount)) + "px";
        }
        this.elementWidth = (this.elementW) + "px";
        this.transformValue = -((this.currentItemNumber) * this.elementW);
        //this.transitionValue = "all "+this.config.animationSpeed+"s ease";
        this.transformNode = "translate3d(" + this.transformValue + "px, 0px, 0px)";
    };
    CarouselComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (this.currentItemNumber > this.duplicate.length || this.currentItemNumber < 0)
            return;
        var nextIndex = 0;
        // next
        if (action == this.SWIPE_ACTION.UP) {
        }
        if (action == this.SWIPE_ACTION.RIGHT) {
            this.previousItem();
        }
        // previous
        if (action == this.SWIPE_ACTION.LEFT) {
            this.nextItem();
        }
        // toggle avatar visibility
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CarouselComponent.prototype, "initCount", void 0);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'carousel',
            template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Directive decorator
var CarouselDirective = /** @class */ (function () {
    function CarouselDirective(el, renderer) {
        // Use renderer to render the element with styles
        var nodeCount = el.nativeElement.childNodes;
        //console.info(nodeCount);
        //console.info(nodeCount.length);
        //renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
    CarouselDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[carousel]' })
        // Directive class
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
    ], CarouselDirective);
    return CarouselDirective;
    var _a, _b;
}());

//# sourceMappingURL=carousel.directive.js.map

/***/ }),

/***/ "../../../../../src/app/comment-sidedrawer/comments-sidedrawer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*comments side drawer*/\r\n.side_drawer {\r\n    width: 350px;\r\n    height: 100%;\r\n    position: fixed;\r\n    right: -350px;\r\n    top: 0;\r\n    background: #f6f5fd;\r\n    z-index: 9;\r\n    transition: .25s ease-in-out;    \r\n    color: #1b214e;\r\n    overflow-y: scroll;\r\n}\r\n.side_drawer a {\r\n    color: #f6f5fd;\r\n    display: block;\r\n    width: 130px;\r\n    text-indent: -9999px;\r\n    margin: 0 auto;\r\n    height: 43px;\r\n    padding-bottom: 35px;\r\n}\r\n.side_drawer.show{\r\n    right: 0;\r\n}\r\n.sd_overall.show{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    cursor: pointer;\r\n    display: block;\r\n    z-index: 2;\r\n    opacity: 0.2;\r\n    top: 0;\r\n    left: 0;\r\n    background: #1b214e;\r\n}\r\n.sd_overall{\r\n    display: none;\r\n}\r\nh1 {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    display: block;\r\n    margin-top: 20px;\r\n    cursor: pointer;\r\n}\r\n.side_drawer .close {\r\n    font-size: 32px;\r\n    cursor: pointer;\r\n    float: right;\r\n    margin-top: -8px;\r\n}\r\n\r\n.comment-header {\r\n    background: #807c9c;\r\n    padding: 10px 20px;\r\n    color: #ffffff;\r\n}\r\n\r\n.comment-header h2{\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n    letter-spacing: 1.5px;\r\n    line-height: 1;\r\n}\r\nh1.comments {\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n@media screen and (max-width:768px){\r\n    .side_drawer.show {\r\n        width: 100%;\r\n    }\r\n    .comment-box > div#comment-form{\r\n        position: absolute;\r\n        bottom: 0;\r\n        margin: 0;\r\n    }\r\n    .side_drawer {\r\n        right: -100%;\r\n        width: 100%;\r\n    }\r\n    .side_drawer.show .comment-header {\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 0;\r\n        right: 0;\r\n        left: 0;\r\n        box-sizing: border-box;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment-sidedrawer/comments-sidedrawer.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"!comments\" (click)=\"toggleSideDrawer()\" class=\"comments\">Be the first to comment</h1>\r\n<h1 *ngIf=\"comments\" (click)=\"toggleSideDrawer()\" class=\"comments\">{{comments.comment_count}} Comments</h1>\r\n<div [class.show]=\"showSD\" class=\"side_drawer\">\r\n\t<div class=\"comment-header\">\r\n\t\t<h2 *ngIf=\"comments\">{{comments.comment_count}} Comments</h2>\r\n\t\t<h2 *ngIf=\"!comments\">Comments</h2>\r\n    \t<span class=\"close\" (click)=\"toggleSideDrawer()\">x</span>\r\n\t</div>\r\n\t<app-comments [id]=\"id\"></app-comments>\r\n</div>\r\n<div (click)=\"toggleSideDrawer()\" [class.show]=\"showSD\" class=\"sd_overall\"></div>"

/***/ }),

/***/ "../../../../../src/app/comment-sidedrawer/comments-sidedrawer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsSideDrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comments_comments_service__ = __webpack_require__("../../../../../src/app/comments/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsSideDrawerComponent = /** @class */ (function () {
    function CommentsSideDrawerComponent(_commentsService) {
        this._commentsService = _commentsService;
        this.showSD = false;
        this.onCloseSideDrawer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //this.comments = 
    }
    CommentsSideDrawerComponent.prototype.ngOnInit = function () {
        this.checkCommentCount();
    };
    CommentsSideDrawerComponent.prototype.ngOnDestroy = function () {
        this.removeClassToBody();
    };
    CommentsSideDrawerComponent.prototype.ngOnChanges = function () {
        if (this.showSD) {
            this.addClassToBody();
        }
        else {
            this.removeClassToBody();
        }
    };
    CommentsSideDrawerComponent.prototype.checkCommentCount = function () {
        var _this = this;
        this._commentsService.getCommentCount(this.id).subscribe(function (data) {
            _this.comments = data[0];
            console.log(data[0]);
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    CommentsSideDrawerComponent.prototype.toggleSideDrawer = function () {
        this.showSD = !this.showSD;
        this.removeClassToBody();
        this.onCloseSideDrawer.emit(true);
    };
    CommentsSideDrawerComponent.prototype.addClassToBody = function () {
        var body = document.getElementsByTagName("body")[0];
        console.log(body);
        __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].addClass(body, "show-SideDrawer");
    };
    CommentsSideDrawerComponent.prototype.removeClassToBody = function () {
        var body = document.getElementsByTagName("body")[0];
        __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].removeClass(body, "show-SideDrawer");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentsSideDrawerComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommentsSideDrawerComponent.prototype, "showSD", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CommentsSideDrawerComponent.prototype, "onCloseSideDrawer", void 0);
    CommentsSideDrawerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comments-sidedrawer',
            template: __webpack_require__("../../../../../src/app/comment-sidedrawer/comments-sidedrawer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comment-sidedrawer/comments-sidedrawer.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__comments_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comments_comments_service__["a" /* CommentsService */]) === "function" && _a || Object])
    ], CommentsSideDrawerComponent);
    return CommentsSideDrawerComponent;
    var _a;
}());

//# sourceMappingURL=comments-sidedrawer.component.js.map

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.title {\r\n    font-size: 14px;\r\n}\r\nspan.username{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.user {\r\n    vertical-align: top;\r\n    width: 80%;\r\n    line-height: 1.5;\r\n    overflow: hidden;\r\n}\r\n.commentsWrapper {\r\n    padding-bottom: 30px;\r\n    clear: both;\r\n}\r\n.commentsWrapper.indented {\r\n    margin-left: 15px;\r\n}\r\nimg.userpic {\r\n    width: 42px;\r\n    height: 42px;\r\n    float: left;\r\n    margin-right: 8px;\r\n    border-radius: 10px;\r\n}\r\ndiv#comment-form span.logout {\r\n    display: inline-block;\r\n    line-height: 1.2;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    letter-spacing: 1.5px;\r\n    font-size: 15px;\r\n}\r\ndiv#comment-form span.logout a{\r\n    font-weight: 600;\r\n}\r\n\r\nimg.userpic_logged{\r\n    width: 24px;\r\n    height: 24px;\r\n    float: left;\r\n    margin-right: 8px;\r\n}\r\ntextarea#comment {\r\n    padding: 10px;\r\n}\r\n.delete,.reply{\r\n    width: 25px;\r\n    height: 25px;\r\n    cursor: pointer;\r\n}\r\ninput#reply {\r\n    padding-left: 10px;\r\n    font-size: 13px;\r\n    width: 80%;\r\n}\r\n.comment-box{\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.comment-box > div{\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding: 0 20px;\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    margin: 20px 0 0;\r\n}\r\n.comment-box > div#comment-form {\r\n    margin-top: 10px;\r\n    padding: 0 10px;\r\n}\r\nspan.created {\r\n    font-size: 14px;\r\n    line-height: 1;\r\n}\r\n.commentAlter > img, .commentAlter > span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 4px;\r\n}\r\n.logout.commentAlter > img{\r\n    opacity: 0.5;\r\n    cursor: default;\r\n}\r\n@media screen and (max-width:768px){\r\n    div#comments {\r\n        padding: 50px 0 70px 0;\r\n    }\r\n    div#comment-form span.logout {\r\n        width: 100%;\r\n        line-height: 2;\r\n    }\r\n    input#comment {\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        padding: 10px;\r\n    } \r\n}\r\n    \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isMobile\" class=\"comment-box\">\r\n  <div id=\"comment-form\" *ngIf=\"userId\">\r\n    <form (ngSubmit)=\"postComment(comment)\" #commentForm=\"ngForm\">\r\n      <textarea required ref-textarea rows=\"4\" cols=\"30\" id=\"comment\" placeholder=\"Leave Your Comment\" [(ngModel)]=\"comment\" name=\"comment\"></textarea>\r\n      <button type=\"submit\">Post Comment</button>\r\n    </form>\r\n  </div>\r\n  <div id=\"comment-form\" *ngIf=\"!userId\">\r\n    <span class=\"logout\">\r\n      <a class=\"show-login\" href=\"/user/login\">LOGIN</a> or <a class=\"show-register\" href=\"/user/register\">SIGN UP</a> to comment.\r\n    </span>\r\n  </div>\r\n  <div id=\"comments\">\r\n    <div [class.indented]=\"c.thread.indexOf('.')!=-1\" class=\"commentsWrapper\" *ngFor=\"let c of comments\">\r\n      <!--<span class=\"userpic\" [innerHTML]=\"c.user_picture\"></span>-->\r\n      <img class=\"userpic\" [src]=\"c.user_picture\" />\r\n      <div class=\"user\">\r\n        <span class=\"username\" [innerHTML]=\"'@'+c.name\"></span>\r\n        <span class=\"title\" [innerHTML]=\"c.title\"></span>\r\n        <div class=\"commentAlter\" *ngIf=\"userId\">\r\n          <img class=\"delete\" (click)=\"deleteComment(c.cid)\" src=\"/assets/i/delete.svg\">\r\n          <img class=\"reply\" (click)=\"c.collapse = true\" src=\"/assets/i/reply.svg\">\r\n          <span class=\"created\">{{c.changed}}</span>\r\n        </div>\r\n        <div class=\"commentAlter logout\" *ngIf=\"!userId\">\r\n          <img class=\"delete\" src=\"/assets/i/delete.svg\">\r\n          <img class=\"reply\" src=\"/assets/i/reply.svg\">\r\n          <span class=\"created\">{{c.changed}}</span>\r\n        </div>\r\n        <div [hidden]=\"!c.collapse\" class=\"replyForm\">\r\n          <img class=\"userpic_logged\" [src]=\"userImage\" />\r\n          <input required #reply id=\"reply\" placeholder=\"Leave your reply\" name=\"reply\" (keyup.enter)=\"replyComment(reply.value,c.cid)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"isMobile\" id=\"commentsmobile\" class=\"comment-box\">\r\n  <div id=\"comments\">\r\n    <div [class.indented]=\"c.thread.indexOf('.')!=-1\" class=\"commentsWrapper\" *ngFor=\"let c of comments\">\r\n      <!--<span class=\"userpic\" [innerHTML]=\"c.user_picture\"></span>-->\r\n      <img class=\"userpic\" [src]=\"c.user_picture\" />\r\n      <div class=\"user\">\r\n        <span class=\"username\" [innerHTML]=\"'@'+c.name\"></span>\r\n        <span class=\"title\">{{c.title}}</span>\r\n        <div class=\"commentAlter\" *ngIf=\"userId\">\r\n          <img class=\"delete\" (click)=\"deleteComment(c.cid)\" src=\"/assets/i/delete.svg\">\r\n          <img class=\"reply\" (click)=\"c.collapse = true\" src=\"/assets/i/reply.svg\">\r\n          <span class=\"created\">{{c.changed}}</span>\r\n        </div>\r\n        <div class=\"commentAlter logout\" *ngIf=\"!userId\">\r\n          <img class=\"delete\" src=\"/assets/i/delete.svg\">\r\n          <img class=\"reply\" src=\"/assets/i/reply.svg\">\r\n          <span class=\"created\">{{c.changed}}</span>\r\n        </div>\r\n        <div [hidden]=\"!c.collapse\" class=\"replyForm\">\r\n          <img class=\"userpic_logged\" [src]=\"userImage\" />\r\n          <input required #reply id=\"reply\" placeholder=\"Leave your reply\" name=\"reply\" (keyup.enter)=\"replyComment(reply.value,c.cid)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"comment-form\" *ngIf=\"userId\">\r\n    <input required #comment id=\"comment\" placeholder=\"Type comment\" name=\"comment\" (keyup.enter)=\"postComment(comment.value)\">\r\n  </div>\r\n  <div id=\"comment-form\" *ngIf=\"!userId\">\r\n    <span class=\"logout\">\r\n      <a class=\"show-login\" href=\"/user/login\">LOGIN</a> or <a class=\"show-register\" href=\"/user/register\">SIGN UP</a> to comment.\r\n    </span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comments_service__ = __webpack_require__("../../../../../src/app/comments/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(_commentsService, sanitizer) {
        this._commentsService = _commentsService;
        this.sanitizer = sanitizer;
        this.comment = "";
        this.env = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */];
    }
    CommentsComponent.prototype.getComments = function () {
        var _this = this;
        this._commentsService.getComments(this.id).subscribe(function (data) {
            for (var index in data) {
                data[index].user_picture = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getImageSrc(data[index].user_picture.toString());
            }
            ;
            if (window.matchMedia('(max-width: 768px)').matches) {
                _this.comments = data.reverse();
            }
            else {
                _this.comments = data;
            }
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    CommentsComponent.prototype.generateToken = function () {
        var _this = this;
        this._commentsService.generateToken().subscribe(function (data) {
            _this.token = data;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    CommentsComponent.prototype.deleteComment = function (cid) {
        var _this = this;
        this._commentsService.deleteComment(cid, this.token).subscribe(function (data) {
            _this.getComments();
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    CommentsComponent.prototype.replyComment = function (comment, cid) {
        var _this = this;
        if (comment) {
            var commentObj = {
                "_links": {
                    "type": {
                        "href": ""
                    }
                },
                "entity_id": [{ "target_id": "" }],
                "pid": [{ "target_id": "" }],
                "langcode": [{ "value": "en" }],
                "subject": [{ "value": "" }],
                "uid": [{ "target_id": "" }],
                "status": [{ "value": 1 }],
                "entity_type": [{ "value": "node" }],
                "comment_type": [{ "target_id": "comment" }],
                "field_name": [{ "value": "field_comment" }],
                "comment_body": [{ "value": "", "format": "script" }]
            };
            commentObj.comment_body[0].value = comment;
            commentObj.pid[0].target_id = cid;
            commentObj.entity_id[0].target_id = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(this.id);
            commentObj.uid[0].target_id = this.userId;
            this.comment = "";
            this._commentsService.createComment(commentObj, this.token).subscribe(function (data) {
                console.log(JSON.stringify(data));
                _this.getComments();
            }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        }
    };
    CommentsComponent.prototype.postComment = function (comment) {
        var _this = this;
        var commentObj = {
            "_links": {
                "type": {
                    "href": ""
                }
            },
            "entity_id": [{ "target_id": "" }],
            "langcode": [{ "value": "en" }],
            "subject": [{ "value": "" }],
            "uid": [{ "target_id": "" }],
            "status": [{ "value": 1 }],
            "entity_type": [{ "value": "node" }],
            "comment_type": [{ "target_id": "comment" }],
            "field_name": [{ "value": "field_comment" }],
            "comment_body": [{ "value": "", "format": "script" }]
        };
        commentObj.comment_body[0].value = comment;
        commentObj.entity_id[0].target_id = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(this.id);
        commentObj.uid[0].target_id = this.userId;
        this.comment = "";
        this._commentsService.createComment(commentObj, this.token).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.getComments();
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    CommentsComponent.prototype.getUserDetails = function () {
        var _this = this;
        this._commentsService.getLoggedUser().subscribe(function (data) {
            _this.userId = data[0].uid;
            _this.userImage = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getImageSrc(data[0].field_user_picture.toString());
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    CommentsComponent.prototype.ngOnInit = function () {
        this.getComments();
        this.generateToken();
        this.getUserDetails();
        if (window.matchMedia('(max-width: 768px)').matches) {
            this.isMobile = true;
        }
    };
    CommentsComponent.prototype.ngOnChanges = function () {
        this.getComments();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "id", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comments_service__["a" /* CommentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object])
    ], CommentsComponent);
    return CommentsComponent;
    var _a, _b;
}());

//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/comments/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsService = /** @class */ (function () {
    function CommentsService(http) {
        this.http = http;
    }
    CommentsService.prototype.getCommentCount = function (id) {
        var url;
        this.nid = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(id);
        url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + 'rest/comment/count?nid=' + this.nid;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommentsService.prototype.getComments = function (id) {
        var url;
        this.nid = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* Utils */].getNID(id);
        url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + 'rest/comment/news?nid=' + this.nid;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommentsService.prototype.getLoggedUser = function () {
        var url;
        url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + 'rest/user/logged';
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommentsService.prototype.generateToken = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + 'rest/session/token')
            .map(function (res) { return res.text(); })
            .catch(this.handleError);
    };
    CommentsService.prototype.createComment = function (commentObj, token) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/hal+json");
        header.append("X-CSRF-Token", token);
        commentObj._links.type.href = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + "rest/type/comment/comment";
        commentObj._links.type[__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + "relation/comment/comment/entity_id"] = {};
        commentObj._links.type[__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + "relation/comment/comment/entity_id"].href = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + "rest/type/comment/comment/node/" + commentObj.entity_id[0].target_id;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + 'entity/comment?_format=hal_json', JSON.stringify(commentObj), { headers: header })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommentsService.prototype.updateComment = function (cid, token) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/hal+json");
        header.append("X-CSRF-Token", token);
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + '/comment/' + cid + '?_format=hal_json', JSON.stringify({
            "_links": {
                "type": {
                    "href": __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + "rest/type/comment/comment",
                    "http://d8.dd:8083/relation/comment/comment/entity_id": {
                        "href": "http://d8.dd:8083/rest/type/comment/comment/node/1"
                    }
                }
            },
            "subject": [{ "value": "comment angular" }],
            "comment_body": [{ "value": "Body text for the comment." }]
        }), { headers: header });
    };
    CommentsService.prototype.deleteComment = function (cid, token) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/hal+json");
        header.append("X-CSRF-Token", token);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host + 'comment/' + cid + '?_format=hal_json', { headers: header })
            .map(function (res) {
            if (res.status === 204) {
                return {};
            }
        })
            .catch(this.handleError);
    };
    CommentsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    CommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CommentsService);
    return CommentsService;
    var _a;
}());

//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Contentouterwrapper{\r\npadding-top: 100px;\r\nwidth: 100%;\r\nmargin: 0 auto;\r\ntext-align: left;\r\nmax-width: 900px;\r\nfont-size: 16px;\r\n}\r\n\r\n@media only screen and (max-width: 1023px){\r\n    .Contentouterwrapper{\r\n        max-width: 300px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Contentouterwrapper\">\n  <div class=\"contactpageOuterwrapper\" id=\"contactWrapper\">\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/contactform/contactform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contactForms {\r\n    padding-top: 50px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    text-align: left;\r\n    max-width: 900px;\r\n}\r\ninput, select, textarea {\r\n    -webkit-appearance: none;\r\n    border-radius: 0;\r\n    background: #fff;\r\n}\r\n.form-group input, .form-group select{\r\n    height: 20px;\r\n    padding: 0px;\r\n    border: 0px;\r\n}\r\n\r\nselect#intreatedIn {\r\n    \r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAHCAYAAAAF1R1/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJVJREFUeNpiYGBgWATEX4H4Px586////wz4MEN0dLQUFxfXTnwGqaioVBM0CET09/frATW8wmYIKyvrzsuXL7MSZdCDBw8YFBUV07EY9CwmJkaDkCFwg0D4zp07DOzs7MuQDXJxcYkjxhAUg0A4Ly9PFhSwIENYWFjmbdmyhYEsg0DYx8fHH2jQvgULFkgSawgIAwQYAG1RGW+s2tEpAAAAAElFTkSuQmCC);\r\n    background-repeat: no-repeat;\r\n    background-position: center right;\r\n    padding-right: 25px;\r\n}\r\n\r\n.contactForminnerwrapper{\r\n    text-align: left;\r\n}\r\nlabel#error {\r\n    display: none;\r\n}\r\n.contactForms label {\r\n    display: block;\r\n    width: 100%;\r\n    line-height: 20px;\r\n    padding-bottom: 5px;\r\n}\r\n.privacy {\r\n    padding-bottom: 15px;\r\n}\r\nspan.form-required {\r\n    color: red;\r\n}\r\n.contactForms {\r\n    font-size: 16px !important;\r\n    padding-bottom:10px;\r\n}\r\ninput#submit {\r\n    border: 1px solid #fff;\r\n    font-size: 15px;\r\n   \r\n    width: 185px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    display: block;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    backgrounD:transparent;\r\n    text-transform:uppercase;\r\n    -webkit-appearance: none;\r\n    border-radius: 0;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    box-sizing: border-box;\r\n}\r\n.form-group {\r\n    padding-bottom: 20px;\r\n}\r\n.form-group.errorText label#error {\r\n    display:block;\r\n    color:red !important;\r\n    \r\n}\r\n\r\ninput#submit:hover{\r\n    background: #fff;\r\n    color: #1564a8;\r\n}\r\nh1{\r\n    color: #1564a8;   \r\n}\r\ninput.errorText , select.errorText, textarea.errorText  {\r\n    border: 2px solid red;\r\n   \r\n}\r\n\r\n@media only screen and (max-width:1023px){\r\n    input, select, textarea {\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        background-color: #fff;\r\n    }\r\n\r\n    .contactForms {\r\n        width: 90% !important;\r\n        margin: 0 auto;\r\n        box-sizing: border-box;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactform/contactform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contactForms\">\n  <div class=\"contactForminnerwrapper\">\n    <h1>Studio Contact Form\n    </h1>\n\n    <div class=\"form-group Fullname\">\n      <label for=\"fullname\">Full Name <span class=\"form-required\" title=\"This field is required.\">*</span></label>\n      <input type=\"text\"  class=\"form-control required\" id=\"fullname\" name=\"fullname\">\n      <label id=\"error\" for=\"fullname\"> Full Name field is required.</label>\n    </div>\n    <div class=\"form-group select\" id=\"intreatedIn\">\n      <label for=\"intreatedIn\">I'm interested in: <span class=\"form-required\" title=\"This field is required.\">*</span></label>\n      <select id=\"intreatedIn\" name=\"submitted[new_1485884571384]\" class=\"form-select required\"><option value=\"\">-- Select One --</option><option value=\"one\">I am interested in the studio rental rates.</option><option value=\"two\">I am interested in renting studio “A”.  What are the available dates?</option><option value=\"three\">I am interested in renting studio “B”.  What are the available dates?</option></select>\n\n    </div>\n\n\n    <div class=\"form-group textarea\" id=\"\">\n      <label for=\"textarea\">Please provide some detail to help us understand your needs: <span class=\"form-required\" title=\"This field is required.\">*</span></label>\n      <textarea id=\"textarea\" name=\"submitted[new_1486745102603]\" cols=\"60\" rows=\"5\" class=\"form-textarea required\"></textarea>\n      <label id=\"error\" for=\"textarea\"> Please provide some detail to help us understand your needs: field is required.</label>\n\n    </div>\n    <div class=\"form-group email\">\n      <label for=\"email\">E-mail <span class=\"form-required\" title=\"This field is required.\">*</span></label>\n      <input type=\"text\" minlength=\"4\" class=\"form-control required\" id=\"email\" required pattern=\"^[\\w._-]+[+]?[\\w._-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$\"\n        name=\"email\">\n      <label id=\"error\" for=\"email\"> E-mail field is required.</label>\n    </div>\n    <div class=\"form-group phone\">\n      <label for=\"phone\">Phone <span class=\"form-required\" title=\"This field is required.\">*</span></label>\n      <input type=\"text\" id=\"phone\" name=\"phone\" value=\"\" size=\"60\" maxlength=\"128\" class=\"form-text required\">\n      <label id=\"error\" for=\"phone\"> Phone field is required.</label>\n    </div>\n\n    <input type=\"submit\" id=\"submit\" name=\"submit\" value=\"Submit\" class=\"form-submit\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contactform/contactform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactformComponent = /** @class */ (function () {
    function ContactformComponent() {
    }
    ContactformComponent.prototype.ngOnInit = function () {
    };
    ContactformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactform',
            template: __webpack_require__("../../../../../src/app/contactform/contactform.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contactform/contactform.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactformComponent);
    return ContactformComponent;
}());

//# sourceMappingURL=contactform.component.js.map

/***/ }),

/***/ "../../../../../src/app/contactform/done/done.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Studioconformatioonpage {\r\n    padding-top: 100px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    text-align: left;\r\n    max-width: 900px;\r\n    font-size: 16px;\r\n}\r\nh1{\r\n    color: #1564a8;   \r\n}\r\np{\r\n    line-height: 20px;\r\n}\r\n.messageWrapper{\r\n    padding-bottom:25px;\r\n}\r\n.messageWrapper p {\r\n    padding-bottom: 15px;\r\n}\r\n@media only screen and (max-width:1023px){\r\n  \r\n    .Studioconformatioonpage {\r\n        width: 90% !important;\r\n        margin: 0 auto;\r\n        box-sizing: border-box;\r\n        text-align: left;\r\n        font-size: 12px;\r\n    }\r\n    p{\r\n       font-size:10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactform/done/done.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Studioconformatioonpage\">\n  <h1>Studio Contact Form</h1>\n\n  <div class=\"messageWrapper\">\n\n    <p>Thank you for your interest in WARNER BROS. STUDIOS NASHVILLE.</p>\n\n    <p>A studio representative will be in touch soon!</p>\n  </div>\n  <a [routerLink]=\"['/studio-contact-form']\" [routerLinkActive]=\"['active']\" class=\"backtoform\">Go back to the form</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contactform/done/done.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoneComponent = /** @class */ (function () {
    function DoneComponent() {
    }
    DoneComponent.prototype.ngOnInit = function () {
    };
    DoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-done',
            template: __webpack_require__("../../../../../src/app/contactform/done/done.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contactform/done/done.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DoneComponent);
    return DoneComponent;
}());

//# sourceMappingURL=done.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.active {\r\n    color: #777;\r\n}\r\na.btt img {\r\n    cursor: pointer;\r\n}\r\n@media only screen and (min-width:1024px) and (max-width: 1300px){\r\n        .footerNavSoical .nav a {\r\n        \r\n            margin-right: 5px;\r\n        }\r\n        span.social-links li{\r\n            margin-right: 10px;\r\n        }\r\n}\r\n\r\n@media only screen and (max-width: 1023px) {\r\n.copyrightinfo {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-block\" *ngIf=\"desktopResolution\" id=\"container\">\n\t<div class=\"copyrightinfo\">\n\t\t<div class=\"nashvillelogo\">\n\t\t\t<a class=\"btt\" (click)=\"scrolltop()\"><img src=\"http://warnermusicnashvillev2.wmg-gardens.com/sites/g/files/g2000006676/files/2017-08/warner-music-nashville_website-logo.svg\"></a>\n\t\t</div>\n\t\t<div class=\"copy\">\n\t\t\t&copy;<span>2017 Warner Music Nashville</span>\n\t\t\t<span>All Rights Reserved.</span>\n\n\t\t</div>\n\t\t<div class=\"footer-links\">\n\t\t\t<a  target=\"_blank\" href=\"/privacy-policy\">Privacy Policy</a>\n\t\t\t<a  target=\"_blank\" href=\"/terms-of-use\">Terms Of Use</a>\n\t\t\t<a  target=\"_blank\" href=\"/privacy-policy#adchoices\">Ad choices</a>\n\t\t\t<a target=\"_blank\" href=\"http://whymusicmatters.com\">Whymusicmatters.com</a>\n\t\t</div>\n\t</div>\n\t<div class=\"footerNavSoical\">\n\t\t<div class=\"nav\">\n\t\t\t<a (click)=\"setTitle( 'Artist | Warner Music Nashville' )\" [routerLink]=\"['/artist']\" [routerLinkActive]=\"['active']\">Our Artists</a>\n\t\t\t<a (click)=\"setTitle( 'News | Warner Music Nashville' )\" [routerLink]=\"['/news']\" [routerLinkActive]=\"['active']\" class=\"news\">News</a>\n\t\t\t<a target=\"_blank\" href=\"http://store.warnermusic.com/warner-music-nashville.html\">Store</a>\n\t\t\t<a target=\"_blank\" href=\"http://www.wmg.com/careers\">Careers</a>\n\t\t\t<a target=\"_blank\" href=\"/contact\" class=\"\">Contact</a>\n\t\t\t<a target=\"_blank\" href=\"http://resources.warnermusicnashville.com\">Resources</a>\n\t\t</div>\n\t\t<div class=\"follow soicals\">\n\t\t\t<span class=\"follow\">follow WMN</span>\n\t\t\t<span class=\"social-links\">\n\t\t\t\t<li class=\"instagram\">\n\t\t\t\t\t<a class=\"\" href=\"https://www.instagram.com/wmnashville\" target=\"_blank\">Instagram</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"facebook\">\n\t\t\t\t\t<a href=\"https://www.facebook.com/WarnerMusicNashville\" class=\"\" target=\"_blank\">Facebook</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"twitter\">\n\t\t\t\t\t<a class=\"\" href=\"https://twitter.com/WMNashville\" target=\"_blank\">Twitter</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"youtube\">\n\t\t\t\t\t<a href=\"https://www.youtube.com/user/warnermusicnashville\" class=\"\" target=\"_blank\">YouTube</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"spotify\">\n\t\t\t\t\t<a class=\"\" href=\"https://play.spotify.com/user/warnermusicnashville/playlist/0FyuJEgKd8E0wRktzkIBLq?play=true&utm_source=open.spotify.com&utm_medium=open\" target=\"_blank\">Spotify</a>\n\t\t\t\t</li> </span>\n\t\t</div>\n\t</div>\n\n\n</div>\n\n<div class=\"footer-block mobile\" *ngIf=\"mobilereolution\">\n\t<div class=\"footerNavSoical\">\n\t\t<div class=\"follow soicals\">\n\t\t\t<span class=\"followWMN\">follow WMN</span>\n\t\t\t<span class=\"social-links\">\n\t\t\t\t<li class=\"instagram\">\n\t\t\t\t\t<a class=\"\" href=\"https://www.instagram.com/wmnashville\" target=\"_blank\">Instagram</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"facebook\">\n\t\t\t\t\t<a href=\"https://www.facebook.com/WarnerMusicNashville\" class=\"\" target=\"_blank\">Facebook</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"twitter\">\n\t\t\t\t\t<a class=\"\" href=\"https://twitter.com/WMNashville\" target=\"_blank\">Twitter</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"youtube\">\n\t\t\t\t\t<a href=\"https://www.youtube.com/user/warnermusicnashville\" class=\"\" target=\"_blank\">YOUTUBE</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"spotify\">\n\t\t\t\t\t<a class=\"\" href=\"https://play.spotify.com/user/warnermusicnashville/playlist/0FyuJEgKd8E0wRktzkIBLq?play=true&utm_source=open.spotify.com&utm_medium=open\" target=\"_blank\">Spotify</a>\n\t\t\t\t</li> </span>\n\t\t</div>\n\t\t<div class=\"nav\">\n\t\t\t<a (click)=\"setTitle( 'Artist | Warner Music Nashville' )\" [routerLink]=\"['/artist']\" [routerLinkActive]=\"['active']\">Our Artists</a>\n\t\t\t<a (click)=\"setTitle( 'News | Warner Music Nashville' )\" [routerLink]=\"['/news']\" [routerLinkActive]=\"['active']\" class=\"news\">News</a>\n\t\t\t<a target=\"_blank\" href=\"http://store.warnermusic.com/warner-music-nashville.html\">Store</a>\n\t\t\t<a target=\"_blank\" href=\"http://www.wmg.com/careers\">careers</a>\n\t\t\t<a  target=\"_blank\" href=\"/contact\">contact</a>\n\t\t\t<a target=\"_blank\" href=\"http://resources.warnermusicnashville.com\">Resources</a>\n\t\t</div>\n\n\t</div>\n\t<div class=\"copyrightinfo\">\n\t\t<div class=\"logoCoppywrapper\">\n\t\t\t<div class=\"nashvillelogo\">\n\t\t\t\t<a (click)=\"scrolltop()\"><img src=\"http://warnermusicnashvillev2.wmg-gardens.com/sites/g/files/g2000006676/files/2017-08/warner-music-nashville_website-logo_badge.svg\"></a>\n\t\t\t</div>\n\t\t\t<div class=\"copy\">\n\t\t\t\t&copy;<span>2017 Warner Music Nashville</span>\n\t\t\t\t<span>All Rights Reserved.</span>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"footer-links\">\n\t\t\t<a target=\"_blank\" href=\"/privacy-policy\">Privacy Policy</a>\n\t\t\t<a target=\"_blank\" href=\"/terms-of-use\">Terms Of Use</a>\n\t\t\t<a target=\"_blank\" href=\"/privacy-policy#adchoices\">Ad choices</a>\n\t\t\t<a target=\"_blank\" href=\"http://whymusicmatters.com\">Whymusicmatters.com</a>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FooterComponent = /** @class */ (function () {
    function FooterComponent(titleService, _router, pageScrollService, document) {
        this.titleService = titleService;
        this._router = _router;
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.mobilereolution = false;
        this.desktopResolution = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
        if (window.screen.width < 1023) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (window.screen.width > 1023) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    FooterComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 1023) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (event.target.innerWidth > 1023) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    FooterComponent.prototype.onResizefot = function (event) {
        if (event.target.innerWidth < 1023) {
            this.mobilereolution = true;
            this.desktopResolution = false;
        }
        if (event.target.innerWidth > 1023) {
            this.desktopResolution = true;
            this.mobilereolution = false;
        }
    };
    FooterComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    FooterComponent.prototype.scrolltop = function () {
        if (location.pathname == "/") {
            // window.scroll(0,0)  ;
            __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollConfig */].defaultScrollOffset = 50;
            var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["c" /* PageScrollInstance */].simpleInstance(this.document, '#head2');
            this.pageScrollService.start(pageScrollInstance);
        }
        else {
            var link = ['/'];
            this._router.navigate(link);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], FooterComponent.prototype, "container", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
            host: {
                '(window:resize)': 'onResizefot($event)'
            },
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["d" /* PageScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["d" /* PageScrollService */]) === "function" && _d || Object, Object])
    ], FooterComponent);
    return FooterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/general.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralService = /** @class */ (function () {
    function GeneralService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        this.navigationSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Subject */]();
        this.navigationSource$ = this.navigationSource.asObservable();
    }
    GeneralService.prototype.geolocate = function (timezone, cityPrecision, objectVar) {
        var api = "ip-country";
        var domain = 'api.ipinfodb.com';
        var apiKey = ['210163b03ba3bf329a8ede992a24d6364ceff96a397c565f6acb93b753cc30db', '00c0b9e4900011af427a05e45bf07855fd7d801b51947dcef1cec8a5165b8f5d', 'b8169a15f1dfac4e95c07ba3c2c002f3858cef89329305392e21e495ea61063f', 'a4d44d0de8e02cb44ae857a70ba9ec04388f810862a08ad35dbffe4317981357'];
        var randomNumber = Math.round(Math.random());
        var url = "//" + domain + "/v3/" + api + "/?key=" + apiKey[randomNumber] + "&format=json";
        //console.log(url);
        console.log("----------------------------api.ipinfodb.com----------------------------------- " + randomNumber);
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    GeneralService.prototype.tellNavigationSource = function (mission) {
        this.navigationSource.next(mission);
    };
    GeneralService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    GeneralService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], GeneralService);
    return GeneralService;
    var _a, _b;
}());

//# sourceMappingURL=general.service.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/lightbox/lightbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lightbox{\r\n    width: auto;\r\n    height: auto;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 24;\r\n    transform: translateX(-50%) translateY(-50%);\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n    background: #040514;\r\n    color: #f6f5fd;\r\n    z-index: 999;\r\n}\r\n:host /deep/ img {\r\n    max-width: 900px;\r\n    width: auto;\r\n    height: auto;\r\n    max-height: 95vh;\r\n}\r\n.lightbox-bottom {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: auto;    \r\n    padding: 10px 0;\r\n    line-height: 1;\r\n}\r\nspan.lightbox-title {\r\n    line-height: 1.2;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n}\r\n.lightbox-content{\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    position: relative;\r\n    line-height: 0;\r\n    min-width: 600px;\r\n    width: auto;\r\n}\r\n.lightbox-bottom > div, .lightbox-bottom > span {\r\n    width: 100%;    \r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    padding: 0 10px;\r\n}\r\n\r\n.close{\r\n    position: absolute;\r\n    top: 6px;\r\n    right: 6px;\r\n    display: block;\r\n    height: 30px;\r\n    width: 30px;\r\n    font-size: 14px;\r\n    font-family: gothambold;\r\n    cursor: pointer;\r\n    z-index: 5;\r\n    border-radius: 50%;\r\n    border: 1px solid #359be9;\r\n    background-color: #359be9;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    padding: 0;\r\n    color: #ffffff;\r\n}\r\n.close:hover{\r\n    color: #359be9;\r\n    background:#fff;\r\n}\r\n.image{\r\n    text-align: center;\r\n}\r\nh2{\r\n    padding: 12px 0 0 15px;\r\n    margin: 0;\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n    text-align: left;\r\n    width: 70%;\r\n    display: inline-block;\r\n}\r\n.navigator{\r\n    float: none;\r\n    text-align: right;\r\n}\r\n.navigator span {\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n}\r\n.lightbox_overall{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n@media screen and (min-width:768px){\r\n    .lightbox-bottom:before {\r\n        content: \"\";\r\n        width: 1px;\r\n        height: 30px;\r\n        line-height: 1;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n    }\r\n    .lightbox-bottom {    \r\n        position: absolute;\r\n        bottom: 0%;\r\n        background-color: rgba(0,0,0,0.8);    \r\n        transition: bottom 1s ease;\r\n        line-height: 1;\r\n    }\r\n    .lightbox:hover .lightbox-bottom{\r\n        bottom: 0;\r\n    }\r\n    .lightbox-bottom > div, .lightbox-bottom > span {\r\n        width: 160px;  \r\n    }\r\n    .lightbox-bottom > span{\r\n        width: calc( 100% - 161px );\r\n        width: -webkit-calc( 100% - 161px );\r\n    }\r\n}\r\n@media screen and (max-width:767px){\r\n    :host /deep/ img{\r\n        max-width: 100vw;\r\n        width: auto;\r\n        height: auto;\r\n        max-height: 66vh;\r\n    }\r\n    span.lightbox-title{        \r\n        font-size: 14px;        \r\n        margin-bottom: 12px;\r\n    }\r\n    .lightbox-content{    \r\n        min-width: 300px;    \r\n    }\r\n    h2{\r\n        width: 100%;\r\n        padding: 12px;\r\n    }\r\n    .navigator{\r\n        display: block;\r\n        float: none;\r\n        text-align: center;\r\n    }\r\n}  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lightbox/lightbox.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"lightbox\">\r\n    <div class=\"close_wrapper\">\r\n        <a class=\"close\" (click)=\"closed()\">x</a>\r\n    </div>\r\n    <div *ngIf=\"photo\" class=\"lightbox-content\">\r\n        <div class=\"image\" [innerHtml]=\"photo[selectedIndex].field_original\"></div>\r\n        <div class=\"lightbox-bottom\"><span class=\"lightbox-title\">\r\n            <a [routerLink]=\"[photo[selectedIndex].path]\" [innerHtml]=\"photo[selectedIndex].title\"></a><br/>\r\n            <a [routerLink]=\"[photo[selectedIndex].path]\" class=\"comments\" *ngIf=\"showComments\" >\r\n                Comments <span *ngIf=\"comments\">({{comments.comment_count}})</span><span *ngIf=\"!comments\">(0)</span>\r\n            </a>\r\n        </span><div class=\"navigator\">\r\n                <span (click)=\"prevPhoto()\">&lt; Previous | </span><span (click)=\"nextPhoto()\">Next &gt;</span>\r\n            </div>\r\n        </div>\r\n        <app-social-buttons [customClass]=\"'photo-lightbox'\" [link]='photo[selectedIndex].title'></app-social-buttons>\r\n    </div>\r\n    <div *ngIf=\"livefyre\" class=\"lightbox-content-livefyre\">\r\n        <div class=\"image\">\r\n            <img *ngIf=\"livefyre[selectedIndex].type === 'photo'\" src = {{livefyre[selectedIndex].thumbnail_url_large}}/>\r\n            <video controls=\"\" loop=\"\" autoplay=\"true\" src= {{livefyre[selectedIndex].video_url}} *ngIf=\"livefyre[selectedIndex].type === 'video'\"></video>\r\n        </div>\r\n        <div class=\"lightbox-bottom\">\r\n            <!--<span class=\"lightbox-title\">\r\n                <a [routerLink]=\"[livefyre[selectedIndex].path]\" [innerHtml]=\"livefyre[selectedIndex].title\"></a><br/>\r\n                <a [routerLink]=\"[photo[selectedIndex].path]\" class=\"comments\" *ngIf=\"showComments\" >\r\n                    Comments <span *ngIf=\"comments\">({{comments.comment_count}})</span>\r\n                    <span *ngIf=\"!comments\">(0)</span>\r\n                </a>\r\n            </span>-->\r\n            <div class=\"navigator\">\r\n                <span (click)=\"prevPhoto()\">&lt; Previous | </span><span (click)=\"nextPhoto()\">Next &gt;</span>\r\n            </div>\r\n    </div>\r\n</div>\r\n \r\n<div class=\"lightbox_overall\" (click)=\"closed()\"></div>"

/***/ }),

/***/ "../../../../../src/app/lightbox/lightbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_comments_service__ = __webpack_require__("../../../../../src/app/comments/comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightboxComponent = /** @class */ (function () {
    function LightboxComponent(_commentsService) {
        this._commentsService = _commentsService;
        this.showComments = false;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //this.comments = 
    }
    LightboxComponent.prototype.closed = function () {
        this.removeClassToBody();
        this.onClose.emit(true);
    };
    LightboxComponent.prototype.nextPhoto = function () {
        if (this.photo != undefined) {
            if (this.selectedIndex < (this.photo.length - 1)) {
                this.selectedIndex = this.selectedIndex + 1;
            }
            else {
                this.selectedIndex = 0;
            }
            this.showCommentCount();
        }
        if (this.livefyre != undefined) {
            if (this.setLimit != undefined) {
                if ((this.selectedIndex < (this.livefyre.length - 1)) && (this.selectedIndex < (this.setLimit - 1))) {
                    this.selectedIndex = this.selectedIndex + 1;
                }
                else {
                    this.selectedIndex = 0;
                }
            }
            else {
                if ((this.selectedIndex < (this.livefyre.length - 1))) {
                    this.selectedIndex = this.selectedIndex + 1;
                }
                else {
                    this.selectedIndex = 0;
                }
            }
        }
    };
    LightboxComponent.prototype.prevPhoto = function () {
        if (this.photo != undefined) {
            if (this.selectedIndex > 0 && (this.photo.length - 1)) {
                this.selectedIndex = this.selectedIndex - 1;
            }
            else {
                this.selectedIndex = this.photo.length - 1;
            }
            this.showCommentCount();
        }
        if (this.livefyre != undefined) {
            if (this.setLimit != undefined) {
                if (this.selectedIndex > 0 && (this.setLimit - 1)) {
                    this.selectedIndex = this.selectedIndex - 1;
                }
                else {
                    this.selectedIndex = this.setLimit - 1;
                }
            }
            else {
                if (this.selectedIndex > 0 && (this.livefyre.length - 1)) {
                    this.selectedIndex = this.selectedIndex - 1;
                }
                else {
                    this.selectedIndex = this.livefyre.length - 1;
                }
            }
        }
    };
    LightboxComponent.prototype.ngOnInit = function () {
        this.addClassToBody();
    };
    LightboxComponent.prototype.ngOnChanges = function () {
        this.showCommentCount();
    };
    LightboxComponent.prototype.showCommentCount = function () {
        var _this = this;
        if (this.showComments) {
            var id = this.photo[this.selectedIndex].nid;
            this._commentsService.getCommentCount(id).subscribe(function (data) {
                _this.comments = data[0];
                console.log(data[0]);
            }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        }
    };
    LightboxComponent.prototype.addClassToBody = function () {
        var body = document.getElementsByTagName("body")[0];
        console.log(body);
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].addClass(body, "show-photo-lightbox");
    };
    LightboxComponent.prototype.removeClassToBody = function () {
        var body = document.getElementsByTagName("body")[0];
        __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* Utils */].removeClass(body, "show-photo-lightbox");
    };
    LightboxComponent.prototype.ngOnDestroy = function () {
        this.removeClassToBody();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], LightboxComponent.prototype, "photo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], LightboxComponent.prototype, "livefyre", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LightboxComponent.prototype, "showComments", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LightboxComponent.prototype, "onClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LightboxComponent.prototype, "selectedIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LightboxComponent.prototype, "setLimit", void 0);
    LightboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lightbox',
            template: __webpack_require__("../../../../../src/app/lightbox/lightbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lightbox/lightbox.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__comments_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__comments_comments_service__["a" /* CommentsService */]) === "function" && _a || Object])
    ], LightboxComponent);
    return LightboxComponent;
    var _a;
}());

//# sourceMappingURL=lightbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/livefyre/livefyre-block/livefyre-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".livefyreFeedContents.row.row-0.mobrow--1 .livefyreFeedContent {\r\n    margin-top: 0;\r\n}\r\n\r\n.livefyreFeedContents.row {\r\n    position: relative;\r\n    cursor: pointer;\r\n    margin-bottom: 30px;\r\n    overflow: hidden;\r\n}\r\n.livefyreFeedContents.row:last-child{\r\n  margin-bottom: 0;\r\n}\r\n\r\n .livefyreFeedContents.row .livefyreFeedContent .thumbnail .InstaTitleWrapper {\r\n    font-size: 18px;\r\n    text-transform: none;\r\n    pointer-events: none;\r\n    background: rgba(0,0,0,.75);\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    vertical-align: baseline;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    opacity: 0;\r\n    line-height: 1.666;\r\n    font-family: 'gothamlight';\r\n}\r\n\r\n.InstaTitle a {\r\n    color: #fff;\r\n    background: rgba(0,97,171, .5);\r\n}\r\n\r\n .livefyreFeedContents.row .livefyreFeedContent .thumbnail .InstaTitleWrapper .InstaTitle{\r\n    opacity: 0;\r\n    -webkit-transform: translateY(100%);\r\n    transform: translateY(100%);\r\n    transition: all 300ms ease-out 0ms;\r\n }\r\n\r\n\r\n.livefyreFeedContents.row .livefyreFeedContent .thumbnail .InstaTitle {\r\n  position: absolute;\r\n  bottom: 0;\r\n  padding: 2%;\r\n  font-family: gothamlight;\r\n  font-weight: normal;\r\n}\r\n.livefyreFeedContents.row:hover .livefyreFeedContent .thumbnail .InstaTitleWrapper{\r\n    z-index: 9;\r\n    opacity: 1;\r\n}\r\n.livefyreFeedContents.row:hover .livefyreFeedContent .thumbnail .InstaTitleWrapper .InstaTitle{\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0%);\r\n    transform: translateY(0%);\r\n}\r\n\r\n.livefyrePage .LivefyreBlockContents .lightbox span.lightbox-title .navigator{\r\n  width : 151px;\r\n}\r\n.livefyrePage .LivefyreBlockContents .lightbox span.lightbox-title {\r\n  pointer-events: none;\r\n  line-height: 1.2;\r\n}\r\n\r\n@media only screen and (max-width:767px){\r\n  .LivefyreBlockContents{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-flex-wrap: wrap;\r\n    -ms-flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -ms-flex-direction: row;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n    -webkit-align-content: stretch;\r\n    -ms-flex-line-pack: stretch;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n  .livefyreFeedContents.row{\r\n    display: inline-block;\r\n    margin-top: 10px;\r\n    margin-bottom: 0;\r\n    background: #000;\r\n  }\r\n  .livefyreFeedContents.row .livefyreFeedContent{\r\n    margin: 0;\r\n  }\r\n .livefyreFeedContents.row.mobrow-0, .livefyreFeedContents.row.mobrow-1{\r\n    width:calc(50% - 5px);\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n  }\r\n  .livefyreFeedContents.row.mobrow-0, .livefyreFeedContents.row.mobrow-2, .livefyreFeedContents.row.mobrow-3{\r\n    margin-right: 10px;\r\n  }\r\n  .livefyreFeedContents.row.mobrow-1,.livefyreFeedContents.row.mobrow-4{\r\n    margin-right: 0;\r\n  }\r\n   .livefyreFeedContents.row.mobrow-2, .livefyreFeedContents.row.mobrow-3, .livefyreFeedContents.row.mobrow-4{\r\n    width: calc(33.3% - 6.66px);\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n  }\r\n  .livefyreFeedContents.row.row-0.mobrow--1{\r\n    width: 100%;\r\n    display: block;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n  }\r\n  .livefyreFeedContents.row .livefyreFeedContent .thumbnail:hover .InstaTitleWrapper{\r\n      text-align: left;\r\n  }\r\n  .livefyreFeedContents.row.mobrow-2 .livefyreFeedContent .thumbnail:hover .InstaTitleWrapper .InstaTitle, .livefyreFeedContents.row.mobrow-3 .livefyreFeedContent .thumbnail:hover .InstaTitleWrapper .InstaTitle, .livefyreFeedContents.row.mobrow-4 .livefyreFeedContent .thumbnail:hover .InstaTitleWrapper .InstaTitle{\r\n      font-size: 10px;\r\n      bottom: auto;\r\n      top: 0;\r\n      padding: 5px;\r\n  }\r\n  .livefyreFeedContents.row.mobrow-0 .livefyreFeedContent .thumbnail:hover .InstaTitleWrapper .InstaTitle, .livefyreFeedContents.row.mobrow-1 .livefyreFeedContent .thumbnail:hover .InstaTitleWrapper .InstaTitle{\r\n      font-size: 12px;\r\n      bottom: auto;\r\n      top: 0;\r\n      padding: 10px;\r\n  }\r\n} \r\n\r\n.thumbnail img {\r\n  transition: all 500ms ease;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n}\r\n\r\n\r\n.livefyreFeedContents.row:hover .thumbnail img {\r\n  -webkit-transform: scale(1.3);\r\n  transform: scale(1.3);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/livefyre/livefyre-block/livefyre-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"LivefyreBlockContents\">\r\n        <!--div   [ngsReveal]=\"{ reset: false,distance:'100px',duration: 1000 }\" *ngFor=\"let t of liveFyrefeed | slice:0:setLimit; let i = index\" class=\"livefyreFeedContents row row-{{i}} mobrow-{{(i-1)%5}}\"-->\r\n        <div *ngFor=\"let t of liveFyrefeed | slice:0:setLimit; let i = index\" class=\"livefyreFeedContents row row-{{i}} mobrow-{{(i-1)%5}}\">\r\n\r\n                <div class=\"livefyreFeedContent\" *ngIf=\"t.thumbnail_url\">\r\n                        <div class=\"segregator\" id={{t.type}}>\r\n                                <div class=\"thumbnail\" (click)=\"setSelectedImage(liveFyrefeed,i)\">\r\n                                        <div class=\"videoplay\"></div>\r\n                                        <div class=\"InstaTitleWrapper\">\r\n                                                <div class=\"InstaTitle\" [innerHTML]=\"t.title|TruncatePipe:400\"></div>\r\n                                        </div>\r\n                                        <img src= {{t.thumbnail_url}} />\r\n                                </div>\r\n\r\n                                <!--<h2 [innerHTML] = \"i\" ></h2>\r\n                                <h2 [innerHTML] = \"t.content_url\" ></h2>\r\n                                <h2 [innerHTML] = \"t.type\" ></h2>-->\r\n\r\n\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>\r\n<div class=\"lightbox-wrapper\" *ngIf=\"selectedPhoto\">\r\n        <app-lightbox [@overlay]=\"state\" [showComments]=\"false\" (onClose)=\"lightboxClose($event)\" [selectedIndex]=\"selectedIndex\"\r\n                [livefyre]=\"selectedPhoto\" [setLimit]=s etLimit></app-lightbox>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/livefyre/livefyre-block/livefyre-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivefyreBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__livefyre_block_service__ = __webpack_require__("../../../../../src/app/livefyre/livefyre-block/livefyre-block.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LivefyreBlockComponent = /** @class */ (function () {
    function LivefyreBlockComponent(_livefyreService) {
        this._livefyreService = _livefyreService;
    }
    LivefyreBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.selectedPhoto = undefined;
        this._livefyreService.getLivefyre().subscribe(function (data) {
            _this.liveFyrefeed = data;
            //console.log(this.liveFyrefeed);
            _this.liveFyrefeed = _this._livefyreService.maplivefyreInfo(_this.liveFyrefeed);
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        return this.liveFyrefeed;
    };
    LivefyreBlockComponent.prototype.setSelectedImage = function (photo, i) {
        this.selectedPhoto = photo;
        this.selectedIndex = i;
    };
    LivefyreBlockComponent.prototype.onSelect = function (photo) {
        this.selectedPhoto = photo;
    };
    LivefyreBlockComponent.prototype.lightboxClose = function (closed) {
        if (closed) {
            this.selectedPhoto = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LivefyreBlockComponent.prototype, "setLimit", void 0);
    LivefyreBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-livefyre-block',
            template: __webpack_require__("../../../../../src/app/livefyre/livefyre-block/livefyre-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/livefyre/livefyre-block/livefyre-block.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__livefyre_block_service__["a" /* LivefyreService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('overlay', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(1)', opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(0)', opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(0)', opacity: 0 }), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease')]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(1)', opacity: 1 }), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s 0.5s ease')])
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__livefyre_block_service__["a" /* LivefyreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__livefyre_block_service__["a" /* LivefyreService */]) === "function" && _a || Object])
    ], LivefyreBlockComponent);
    return LivefyreBlockComponent;
    var _a;
}());

//# sourceMappingURL=livefyre-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/livefyre/livefyre-block/livefyre-block.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivefyreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Type;
var LivefyreService = /** @class */ (function () {
    function LivefyreService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    LivefyreService.prototype.getLivefyre = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].livefyreEndpoint + "&callback=JSONP_CALLBACK";
        //console.log(url);
        return this.jsonp.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LivefyreService.prototype.maplivefyreInfo = function (data) {
        var LivefyreContents = new Array();
        for (var _i = 0, _a = data.headDocument.content; _i < _a.length; _i++) {
            var t = _a[_i];
            var LivefyreContent = {};
            //LivefyreContent.title = t.content.authorId;
            if (t.content.attachments == undefined) {
                continue;
            }
            else {
                for (var _b = 0, _c = t.content.attachments; _b < _c.length; _b++) {
                    var a = _c[_b];
                    LivefyreContent.title = a.title;
                    LivefyreContent.thumbnail_url = a.thumbnail_url;
                    LivefyreContent.content_url = a.link;
                    LivefyreContent.thumbnail_url_large = a.url;
                    LivefyreContent.type = a.type;
                    if (a.type == "video") {
                        //  LivefyreContent.video_coverImage = a.thumbnail_url;
                        var videoURL = a.html, regexp = new RegExp('src="([^"]+)"');
                        var VideoURL = videoURL.match(regexp);
                        LivefyreContent.video_url = VideoURL[1];
                    }
                }
            }
            LivefyreContents.push(LivefyreContent);
        }
        return LivefyreContents;
    };
    LivefyreService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    LivefyreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], LivefyreService);
    return LivefyreService;
    var _a, _b;
}());

//# sourceMappingURL=livefyre-block.service.js.map

/***/ }),

/***/ "../../../../../src/app/livefyre/livefyre.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/livefyre/livefyre.component.html":
/***/ (function(module, exports) {

module.exports = "<app-livefyre-block class=\"livefyrePage\" [setLimit]= undefined></app-livefyre-block>\n"

/***/ }),

/***/ "../../../../../src/app/livefyre/livefyre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivefyreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LivefyreComponent = /** @class */ (function () {
    function LivefyreComponent() {
    }
    LivefyreComponent.prototype.ngOnInit = function () {
    };
    LivefyreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-livefyre',
            template: __webpack_require__("../../../../../src/app/livefyre/livefyre.component.html"),
            styles: [__webpack_require__("../../../../../src/app/livefyre/livefyre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LivefyreComponent);
    return LivefyreComponent;
}());

//# sourceMappingURL=livefyre.component.js.map

/***/ }),

/***/ "../../../../../src/app/page/page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title{\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n    margin-top: 16px;\r\n    margin-bottom: 20px;\r\n}\r\n.created {\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #807c9c;\r\n    font-family: proxima-nova-condensed;\r\n    margin-bottom: 56px;\r\n}\r\ndiv.cta{\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width:768px){\r\n    .title{\r\n        font-size: 22px;\r\n    }\r\n    .created {\r\n        font-size: 16px;\r\n        margin-bottom: 30px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"page\">\r\n  <div class=\"body\" [innerHTML]=\"safeHtml\" ></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_service__ = __webpack_require__("../../../../../src/app/page/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageComponent = /** @class */ (function () {
    function PageComponent(_pageService, route, sanitizer) {
        this._pageService = _pageService;
        this.route = route;
        this.sanitizer = sanitizer;
    }
    PageComponent.prototype.getPage = function (urlParam) {
        var _this = this;
        this._pageService.getPage().subscribe(function (data) {
            _this.pageArray = data;
            console.log(data);
            _this.page = _this.pageArray.find(function (x) { return x.path === "/" + urlParam; });
            _this.safeHtml = _this.sanitizer.bypassSecurityTrustHtml(_this.page.body.toString());
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.getPage(params['id']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PageComponent.prototype, "urlParam", void 0);
    PageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page',
            template: __webpack_require__("../../../../../src/app/page/page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object])
    ], PageComponent);
    return PageComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "../../../../../src/app/page/page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
    }
    PageService.prototype.getPage = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].pageEndPoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PageService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], PageService);
    return PageService;
    var _a;
}());

//# sourceMappingURL=page.service.js.map

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".PageNotFoundOuterWrapper {\r\n    margin-top: 67px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n      background: #1563a8;\r\n}\r\n\r\n.pageNOtFoundWrapper a {\r\n    font-family: 'gothamlight';\r\n    color: #fff;\r\n    margin: 20px;\r\n    font-size: 16px;\r\n    text-transform: capitalize;\r\n    cursor: pointer;\r\n    line-height: 2.6;\r\n}\r\n\r\n.Home.Nav {\r\n    padding: 10px 0;\r\n}\r\n\r\n.pageNOtFoundWrapper h3 {\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    border-bottom: 1px solid #ffffff;\r\n    font-family: gothambook;\r\n    font-weight: normal;\r\n    line-height: 1.8;\r\n    letter-spacing: 1px;\r\n    padding-bottom: 0px;\r\n    margin: 40px 0;\r\n}\r\nspan {\r\n    font-size: 16px;\r\n}\r\np {\r\n    font-size: 16px;\r\n    line-height: 2.6;\r\n    font-family: gothammedium;\r\n    font-weight: normal;\r\n}\r\n\r\n .pageNOtFoundWrapper  a:hover {\r\n  \r\n   color: #082d4d;\r\n}\r\n\r\n.pageNOtFoundWrapper {\r\n    padding-top: 67px;\r\n    min-height: calc(100vh - 277px);\r\n  \r\n}\r\n\r\n@media only screen and (max-width:767px){\r\n    .pageNOtFoundWrapper {\r\n        width:90%;\r\n        margin: 0 auto;\r\n    \r\n    }\r\n    .Home.Nav {\r\n        max-width: 300px;\r\n        margin:0 auto;\r\n    }\r\n    .pageNOtFoundWrapper a {\r\n        margin: 0;\r\n    }\r\n    span.mobile{\r\n        display: none;\r\n    }\r\n    .pageNOtFoundWrapper {\r\n    padding-top: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"PageNotFoundOuterWrapper\">\r\n<div class=\"pageNOtFoundWrapper\">\r\n  <h3>Page Not Found</h3>\r\n  <p>Oops!</p>\r\n  <p>One of the links below might help you find the page you had in mind:</p>\r\n  <div class=\"Home Nav\">\r\n    <a [routerLink]=\"['/about']\" [routerLinkActive]=\"['active']\" (click)=\"setTitle( 'About' )\" >About WMN</a><span> | </span>\r\n    <a [routerLink]=\"['/artist']\" [routerLinkActive]=\"['active']\"\r\n      class=\"artist\" (click)=\"setTitle( 'Artist' )\">Our Artists</a><span> | </span>\r\n    <a  [routerLink]=\"['/news']\" [routerLinkActive]=\"['active']\"\r\n      class=\"news\" (click)=\"setTitle( 'News' )\">News</a><span class=\"mobile\"> | </span>\r\n    <a href=\" http://www.wmg.com/careers \" target=\"_blank\" >Careers</a><span> | </span>\r\n    <a  href=\"/studios\" target=\"_blank\">Studios</a><span> | </span>\r\n    <a target=\"_blank\" href=\" http://store.warnermusic.com/warner-music-nashville.html\" >Store</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pageNotFoundComponent = /** @class */ (function () {
    function pageNotFoundComponent(titleService) {
        this.titleService = titleService;
    }
    pageNotFoundComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    pageNotFoundComponent.prototype.ngOnChanges = function () {
    };
    pageNotFoundComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    pageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _a || Object])
    ], pageNotFoundComponent);
    return pageNotFoundComponent;
    var _a;
}());

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".privacyWrapper {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 960px;\r\n    padding: 100px 20px;\r\n    font-size: 16px;\r\n    box-sizing: border-box;\r\n   \r\n}\r\n\r\nh1 {\r\n   \r\n    color: #1564a8;\r\n    opacity:1 !important;\r\n}\r\n\r\n\r\n.contentWrapper{\r\n    font-size:13px;\r\n}\r\n\r\n@media only screen and (max-width:1023px){\r\n    .privacyWrapper  {\r\n        margin:  0 auto;\r\n        width: 90% !important;\r\n    }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"privacyWrapper\">\r\n\r\n  <h1>Privacy Policy</h1>\r\n  <div class=\"contentWrapper\">\r\n\r\n    <app-block [blockID]=\"env.Privacypolicy\"></app-block>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
        this.env = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */];
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        if (location.hash == "#adchoices") {
            // setTimeout(() => {
            //   document.getElementById('adchoices').scrollIntoView;
            // }, 2500);
        }
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());

//# sourceMappingURL=privacy-policy.component.js.map

/***/ }),

/***/ "../../../../../src/app/safe-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        if (type === void 0) { type = 'html'; }
        switch (type) {
            case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());

//# sourceMappingURL=safe-url.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/ValuesPipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValuesPipe = /** @class */ (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        // we'll put our functional code in here...
        var keyArr = Object.keys(value), dataArr = [];
        var output = {
            "name": "",
            "value": ""
        };
        var key = keyArr[0];
        output.name = key;
        output.value = value[key];
        if (args == "key") {
            return key;
        }
        else {
            return value[key];
        }
    };
    ValuesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'printobject' })
    ], ValuesPipe);
    return ValuesPipe;
}());

//# sourceMappingURL=ValuesPipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/mailinglistservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MailingListService = /** @class */ (function () {
    function MailingListService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        this.exactTargetSignUpURL = 'http://preview.signup.wmg.com/register?'; // URL to ExactTarget 
    }
    MailingListService.prototype.sendRequest = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var jsonObj = JSON.parse(params);
        function toQueryString(obj) {
            var parts = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
                }
            }
            return parts.join("&");
        }
        var sendRequestURL = this.exactTargetSignUpURL + toQueryString(jsonObj) + '&jsonp=JSONP_CALLBACK';
        return this.jsonp.get(sendRequestURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MailingListService.prototype.extractData = function (res) {
        console.log(res);
        return {};
    };
    MailingListService.prototype.getArtistcountwithNid = function () {
        var url;
        url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].artistNodeCountWithNewsletter;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MailingListService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    MailingListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], MailingListService);
    return MailingListService;
    var _a, _b;
}());

//# sourceMappingURL=mailinglistservice.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.range = function (startPage, endPage) {
        var total = [];
        if (!endPage) {
            endPage = startPage;
            startPage = 0;
        }
        for (var i = startPage; i < endPage; i += 1) {
            total.push(i);
        }
        return total;
    };
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 6) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 6;
            }
            else if (currentPage + 3 >= totalPages) {
                startPage = totalPages - 5;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 2;
                endPage = currentPage + 3;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = this.range(startPage, endPage + 1);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PagerService);
    return PagerService;
}());

//# sourceMappingURL=pager.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/social-buttons/social-buttons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".share{\r\n    position: absolute; \r\n    left: 0;\r\n    top: 205px;\r\n    opacity: 1; \r\n    display: inline-block;\r\n}\r\n.share.photo-detail{\r\n    top: 0;\r\n}\r\n.share div{\r\n    background: transparent url(\"/assets/i/social-icon.png\") no-repeat scroll 0 0;\r\n    clear: both;\r\n    margin: 0 auto;\r\n    width: 2.68em;\r\n    height: 2.68em;\r\n    color: #1b214e;\r\n    display: block;\r\n    text-indent: -9999px;\r\n    cursor: pointer;\r\n    margin-bottom: 14px;\r\n}\r\n.share div:hover{\r\n    background: transparent url(\"/assets/i/social-icon-hover.png\") no-repeat scroll 0 0;\r\n}\r\n.share div {\r\n    clear: both;\r\n    margin: 0 auto;\r\n    color: #1b214e;\r\n    display: block;\r\n    cursor: pointer;\r\n    position: relative;\r\n    height: 2.68em;\r\n    line-height: 2.68em;\r\n}\r\n.share div.fs-fb {\r\n    background-position: 0px -48px;\r\n}\r\n.share div.fs-gp {\r\n    background-position: 0px -96px;\r\n}\r\n.share div.fs-mail{\r\n    background-position: 0px -143px;\r\n}\r\n.news-detail-social {\r\n    left: 60px;\r\n    top: 180px;\r\n}\r\n.share.photo-lightbox{\r\n    left: -62px;\r\n    top: 0;\r\n}\r\n@media only screen and (max-width: 1023px) {\r\n    .share {\r\n        position: relative;\r\n        opacity: 1;\r\n        display: inline-block;\r\n        left: 0px;\r\n        top: 0px;\r\n        text-align: center;\r\n        width: 100%;\r\n        padding-top: 20px;\r\n    }\r\n    .share div {\r\n        clear: both;\r\n        margin: 0 auto;\r\n        width: 2.68em;\r\n        height: 2.68em;\r\n        color: #1b214e;\r\n        display: block;\r\n        text-indent: -9999px;\r\n        cursor: pointer;\r\n        display: inline-block;\r\n        margin-bottom: 0px;\r\n    }\r\n    .share.photo-lightbox{\r\n        left: 0;        \r\n        padding: 20px 0;\r\n        text-align: center;\r\n    }\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .share div{\r\n        margin-right: 10px;\r\n    }\r\n    .share div.fs-mail {\r\n        margin-right: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/social-buttons/social-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"link\" class=\"share {{customClass}}\" >\r\n  <div class=\"fs-fb\" *ngIf=\"facebook\" (click)=\"facebookClick()\">\r\n    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  <div class=\"fs-tw\" *ngIf=\"twitter\" (click)=\"twitterClick()\">\r\n    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  <div class=\"fs-gp\" *ngIf=\"googlePlus\" (click)=\"googlePlusClick()\">\r\n    Google Plus\r\n  </div>\r\n  <div class=\"fs-mail\" *ngIf=\"mailto\" (click)=\"mailtoClick()\">\r\n    Mail To\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/social-buttons/social-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialButtonsComponent = /** @class */ (function () {
    function SocialButtonsComponent() {
        this.facebook = true;
        this.googlePlus = true;
        this.twitter = true;
        this.mailto = true;
        this.windowDim = "width=600,height=450";
        this.location = "";
    }
    SocialButtonsComponent.prototype.facebookClick = function () {
        if (this.link) {
            window.open("http://www.facebook.com/sharer.php?u=" + this.location, "_blank", this.windowDim);
        }
    };
    SocialButtonsComponent.prototype.googlePlusClick = function () {
        if (this.link) {
            window.open("https://plus.google.com/share?url=" + this.location, "_blank", this.windowDim);
        }
    };
    SocialButtonsComponent.prototype.twitterClick = function () {
        if (this.link) {
            window.open("https://twitter.com/intent/tweet?url=" + this.location + "&text=" + this.pagetitle + "&via=WMNashville", "_blank", this.windowDim);
        }
    };
    SocialButtonsComponent.prototype.mailtoClick = function () {
        if (this.link) {
            window.open("mailto:?subject=" + this.location, "_blank", this.windowDim);
        }
    };
    SocialButtonsComponent.prototype.ngOnInit = function () {
        // this.hostURL = "http://" + environment.host + "/";
        //this.location = window.location.href;
        //console.log("window.location.href "+window.location.href);
        this.hostURL = "http://" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].host + "/";
        if (this.link) {
            this.location = this.link;
        }
        else {
            this.location = window.location.href;
        }
    };
    SocialButtonsComponent.prototype.ngOnChanges = function () {
        this.location = window.location.href;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SocialButtonsComponent.prototype, "link", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SocialButtonsComponent.prototype, "facebook", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SocialButtonsComponent.prototype, "googlePlus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SocialButtonsComponent.prototype, "twitter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SocialButtonsComponent.prototype, "mailto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SocialButtonsComponent.prototype, "pagetitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SocialButtonsComponent.prototype, "customClass", void 0);
    SocialButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social-buttons',
            template: __webpack_require__("../../../../../src/app/shared/social-buttons/social-buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/social-buttons/social-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialButtonsComponent);
    return SocialButtonsComponent;
}());

//# sourceMappingURL=social-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/twitterEmbed/twitter-embed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/twitterEmbed/twitter-embed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"twitter-embed\"></div>"

/***/ }),

/***/ "../../../../../src/app/shared/twitterEmbed/twitter-embed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterEmbedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_reference__ = __webpack_require__("../../../../../src/app/shared/window-reference.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterEmbedComponent = /** @class */ (function () {
    function TwitterEmbedComponent(element) {
        this.node = null;
        this.node = element;
    }
    Object.defineProperty(TwitterEmbedComponent.prototype, "setTweetId", {
        set: function (tweetId) {
            var _this = this;
            this.tweetId = tweetId;
            var win = __WEBPACK_IMPORTED_MODULE_1__window_reference__["a" /* WindowReference */].get();
            win.twttr.ready(function () {
                win.twttr.widgets.createTweet(_this.tweetId, _this.node.nativeElement.querySelectorAll(".twitter-embed")[0]);
            });
        },
        enumerable: true,
        configurable: true
    });
    TwitterEmbedComponent.prototype.ngOnInit = function () {
        //console.log("window.location.href "+window.location.href);
    };
    TwitterEmbedComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tweetId'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TwitterEmbedComponent.prototype, "setTweetId", null);
    TwitterEmbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-twitter-embed',
            template: __webpack_require__("../../../../../src/app/shared/twitterEmbed/twitter-embed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/twitterEmbed/twitter-embed.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], TwitterEmbedComponent);
    return TwitterEmbedComponent;
    var _a;
}());

//# sourceMappingURL=twitter-embed.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/username.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserNamePipe = /** @class */ (function () {
    function UserNamePipe() {
    }
    UserNamePipe.prototype.transform = function (email) {
        return email ? email.split('@')[0] : email;
    };
    UserNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'username' })
    ], UserNamePipe);
    return UserNamePipe;
}());

//# sourceMappingURL=username.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/window-reference.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowReference; });
function _window() {
    return window;
}
var WindowReference = /** @class */ (function () {
    function WindowReference() {
    }
    WindowReference.get = function () {
        return _window();
    };
    WindowReference.prototype.ngOnInit = function () {
    };
    WindowReference.prototype.ngOnChanges = function () {
    };
    return WindowReference;
}());

//# sourceMappingURL=window-reference.js.map

/***/ }),

/***/ "../../../../../src/app/spotify/spotify-carousel/spotify-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li.items {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    vertical-align: top;\r\n}\r\nul.item-list.carousel{\r\n    display: inline-block;\r\n    width: 100%;\r\n    overflow: visible;\r\n}\r\n.title a {\r\n    color: #fff;\r\n    line-height: 1.1;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    letter-spacing: 2px;\r\n}\r\n.carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n    position: absolute;\r\n    top: 0%;\r\n    left: -30px;\r\n    height: 100%;\r\n    /*display: flex;*/\r\n    padding: 0 10px;\r\n    /*flex-wrap: wrap;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;*/\r\n    cursor: pointer;\r\n    z-index: 2;\r\n    overflow: hidden;\r\n    color: #fff;\r\n    font-size: 10px;\r\n}\r\n.carousel-nav .carousel-prev i, .carousel-nav .carousel-next i{\r\n    position: absolute;\r\n    top: 25%;\r\n}\r\n.carousel-nav .carousel-prev i{\r\n    right: 0;\r\n}\r\n.carousel-nav .carousel-next i{\r\n    left: 0;\r\n}\r\n.carousel-nav .carousel-next{\r\n    right: -30px;\r\n    left: auto;\r\n}\r\n\r\nspan:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.carousel-stage {\r\n    -ms-touch-action: pan-y !important;\r\n        touch-action: pan-y !important;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .thumbnail {\r\n        margin-bottom: 10px;\r\n    }\r\n    .carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n        display:none;\r\n        \r\n    }\r\n   \r\n    carousel, news-carousel {    \r\n        padding: 0;\r\n        box-sizing: border-box;\r\n        -webkit-box-sizing: border-box;\r\n        padding-right: 40px;\r\n    }\r\n    li.items {\r\n        padding: 0 10px;\r\n        box-sizing: border-box;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spotify/spotify-carousel/spotify-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel viewport spotify\" >\r\n    <ul *ngIf=\"createCarousel\" class=\"item-list carousel\" >\r\n        <div class=\"carousel-stage\" [style.width]=\"carouselWidth\" [style.transform]=\"transformNode\" [style.transition]=\"transitionValue\"\r\n            (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\r\n            <li *ngFor=\"let t of duplicate;let i = index\" [style.width]=\"elementWidth\" class=\"items item-no-{{i}}\" [class.clone]=\"spotify.clone\">\r\n                <app-custom-audio *ngIf=\"t.album\" [src]='t.album' [albumart]='t.thumbnail' [forcestop]='!t.isPlaying' (playerStateChange)=\"onAudioPlayerStateChange($event,i )\">\r\n                </app-custom-audio>\r\n                <div class=\"SpotifyDetailsWrapper\">\r\n                    <div class=\"SpotifyTitleWrapper\">\r\n                        <div class=\"SpotifyTitle\" [innerHTML]=\"t.title\"></div>\r\n                        <div class=\"SpotifyAlbum\" [innerHTML]=\"t.album_name\"></div>\r\n                    </div>\r\n                    <div class=\"SpotifyUrl\">\r\n                        <a target=\"_blank\" href=\"{{t.Spotify_url}}\">Stream on\r\n                            <i class=\"fa fa-spotify\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>    \r\n            </li>\r\n        </div>\r\n    </ul>\r\n    <div class=\"carousel-controls\">\r\n        <div class=\"carousel-nav\">\r\n            <div class=\"carousel-prev\" [style.display]=\"PreviousNav\" (click)=\"previousItem()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></div>\r\n            <div class=\"carousel-next\" [style.display]=\"NextNav\" (click)=\"nextItem()\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></div>\r\n        </div>\r\n        <div class=\"carousel-dots\" [style.display]=\"showDots\">\r\n            <span *ngFor=\"let dot of dotCounts; let i = index;\" class=\"carousel-dot\"></span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/spotify/spotify-carousel/spotify-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpotifyCarouselComponent = /** @class */ (function (_super) {
    __extends(SpotifyCarouselComponent, _super);
    function SpotifyCarouselComponent(element) {
        var _this = _super.call(this) || this;
        _this.carouselimageURL = "";
        _this.carouselWidth = "";
        _this.node = element;
        _this.carouselLength = 3;
        _this.newspagecarousel = false;
        _this.isspotify = true;
        _this.options = {
            itemCount: 1,
            showDots: false,
            showNav: true,
            animationSpeed: 0.5,
            autoplay: false,
            loop: true,
            responsive: {
                "767": 1,
                "1200": 1,
                "1400": 1,
                "2700": 1
            }
        };
        return _this;
    }
    SpotifyCarouselComponent.prototype.ngOnInit = function () {
    };
    SpotifyCarouselComponent.prototype.ngOnChanges = function () {
        this.carouselLength = this.carouseln;
        if (this.spotify.length == this.carouselLength) {
            this.duplicate = this.spotify.slice(0, 3);
            this.carouselLength = this.duplicate.length;
            this.init();
            this.createCarousel = true;
        }
    };
    SpotifyCarouselComponent.prototype.onAudioPlayerStateChange = function (event, index) {
        //if(event.isPlaying){
        this.stopAllPlayer(event, index);
        this.duplicate[index].isPlaying = event.isPlaying;
        //}
    };
    SpotifyCarouselComponent.prototype.stopAllPlayer = function (event, index) {
        for (var i = 0; i < this.duplicate.length; i++) {
            this.duplicate[i].isPlaying = !event.isPlaying;
        }
    };
    SpotifyCarouselComponent.prototype.onResize = function (event) {
        //this.clientWidth = event.target.innerWidth;
        this.resizeNodes();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SpotifyCarouselComponent.prototype, "spotify", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SpotifyCarouselComponent.prototype, "carouseln", void 0);
    SpotifyCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spotify-carousel',
            template: __webpack_require__("../../../../../src/app/spotify/spotify-carousel/spotify-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spotify/spotify-carousel/spotify-carousel.component.css")],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], SpotifyCarouselComponent);
    return SpotifyCarouselComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__["a" /* CarouselComponent */]));

//# sourceMappingURL=spotify-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/spotify/spotify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Spotifycouraosel{\r\n    overflow: hidden;\r\n}\r\n.spotifyOuterWrapper{\r\n    position: relative;\r\n    margin-left: 15px;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .Spotifycouraosel{\r\n        overflow: visible;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n    .spotifyOuterWrapper{\r\n        margin-left: 15px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spotify/spotify.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"spotifyOuterWrapper\" >\r\n        <!--div *ngFor=\"let t of spotifyFeed; let i = index\" class>\r\n               <div class=\"SpotifyTitleWrapper\">\r\n                      <div class=\"SpotifyTitle\" [innerHTML] = \"t.title\"></div>\r\n              </div> \r\n              \r\n                <app-custom-audio *ngIf=\"t.album\" [src]='t.album' [albumart]='t.thumbnail' [forcestop]='!t.isPlaying'>\r\n                </app-custom-audio>\r\n                <div *ngIf=\"spotifyID\" [innerHTML]=spotifyID></div>\r\n             \r\n        </div-->\r\n\r\n\r\n\r\n        <div class=\"Spotifycouraosel\">\r\n\t\t\t<app-spotify-carousel *ngIf=\"spotify\" [spotify]=\"spotify\" [carouseln]=\"spotifylength\"></app-spotify-carousel>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/spotify/spotify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spotify_service__ = __webpack_require__("../../../../../src/app/spotify/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpotifyComponent = /** @class */ (function () {
    function SpotifyComponent(route, _spotifyService, sanitizer) {
        this.route = route;
        this._spotifyService = _spotifyService;
        this.sanitizer = sanitizer;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SpotifyComponent.prototype.ngOnInit = function () {
        this.spotify = this.getSpotify();
    };
    SpotifyComponent.prototype.getSpotify = function () {
        var _this = this;
        this.spotify = [];
        this._spotifyService.getspotifyNew(this.artistname).subscribe(function (data) {
            _this.spotify = data;
            // this.spotifyFeed = this._spotifyService.mapSpotifyInfo(this.spotify);
        }, function (err) { return console.error(err); }, function () {
            //this.spotifylength = this.spotifyFeed.length;
            _this.spotifylength = _this.spotify.length;
            _this.notify.emit(_this.spotifylength);
            console.log('done');
        });
        return this.spotify;
    };
    SpotifyComponent.prototype.ngOnChanges = function () {
        this.spotify = this.getSpotify();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SpotifyComponent.prototype, "spotifyID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SpotifyComponent.prototype, "artistname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], SpotifyComponent.prototype, "notify", void 0);
    SpotifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spotify',
            template: __webpack_require__("../../../../../src/app/spotify/spotify.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spotify/spotify.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__spotify_service__["a" /* SpotifyService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__spotify_service__["a" /* SpotifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _d || Object])
    ], SpotifyComponent);
    return SpotifyComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=spotify.component.js.map

/***/ }),

/***/ "../../../../../src/app/spotify/spotify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
    }
    SpotifyService.prototype.getspotifyNew = function (artistname) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].SpotifyEndpoint + "?tags=" + artistname;
        //var url: string =  environment.host + environment.artistListingTempEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SpotifyService.prototype.getSpotify = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].SpotifyEndpoint;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SpotifyService.prototype.mapSpotifyInfo = function (data) {
        var SpotifyContents = new Array();
        for (var _i = 0, _a = data.header; _i < _a.length; _i++) {
            var t = _a[_i];
            var SpotifyContent = {};
            SpotifyContent.title = t.title;
            SpotifyContent.thumbnail = t.thumbnail;
            SpotifyContent.album = t.album;
            SpotifyContent.Spotify_url = t.Spotify_url;
            SpotifyContent.album_name = t.album_name;
            t.isPlaying = false;
            SpotifyContent.isPlaying = t.isPlaying;
            SpotifyContents.push(SpotifyContent);
        }
        return SpotifyContents;
    };
    SpotifyService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    SpotifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], SpotifyService);
    return SpotifyService;
    var _a;
}());

//# sourceMappingURL=spotify.service.js.map

/***/ }),

/***/ "../../../../../src/app/taxonomy-list/taxonomy-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nul.taxonomy li {\r\n    display: inline-block;\r\n    margin: 0px 4%;\r\n    text-transform: uppercase;\r\n}\r\n\r\nul.taxonomy a {\r\n    color: #807c9c;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n}\r\n\r\nul.taxonomy li:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\nul.taxonomy a.router-link-active{\r\n    color: #1b214e;\r\n    font-weight: bold;\r\n}\r\n\r\n@media screen and (min-width:500px){\r\n    ul.taxonomy li {        \r\n        margin: 0px 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/taxonomy-list/taxonomy-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block\">\r\n  <!--<h2>{{blockTitle}}</h2> Not required in this style-->\r\n  <ul class=\"taxonomy {{cols}}\">\r\n    <li *ngIf=\"defaultLink\">\r\n      <div>\r\n          <a [routerLink]=\"[defaultLink]\">All</a>\r\n      </div>\r\n    </li>\r\n    <li  *ngFor=\"let t of taxonomy\">\r\n      <div>\r\n        <a [routerLink]=\"['/'+path+'/'+t.name]\">{{t.name}}</a>\r\n        </div>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/taxonomy-list/taxonomy-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxonomyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taxonomy_service__ = __webpack_require__("../../../../../src/app/taxonomy-list/taxonomy.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaxonomyListComponent = /** @class */ (function () {
    function TaxonomyListComponent(_taxonomyService) {
        this._taxonomyService = _taxonomyService;
    }
    TaxonomyListComponent.prototype.getTaxonomy = function () {
        var _this = this;
        this.taxonomy = [];
        this._taxonomyService.getTaxonomy(this.name).subscribe(function (data) {
            if (_this.count) {
                _this.taxonomy = data.slice(0, _this.count);
            }
            else {
                _this.taxonomy = data;
            }
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        return this.taxonomy;
    };
    TaxonomyListComponent.prototype.ngOnInit = function () {
        this.taxonomy = this.getTaxonomy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TaxonomyListComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TaxonomyListComponent.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TaxonomyListComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TaxonomyListComponent.prototype, "blockTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TaxonomyListComponent.prototype, "path", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TaxonomyListComponent.prototype, "defaultLink", void 0);
    TaxonomyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-taxonomy-list',
            template: __webpack_require__("../../../../../src/app/taxonomy-list/taxonomy-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/taxonomy-list/taxonomy-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__taxonomy_service__["a" /* TaxonomyService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__taxonomy_service__["a" /* TaxonomyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__taxonomy_service__["a" /* TaxonomyService */]) === "function" && _a || Object])
    ], TaxonomyListComponent);
    return TaxonomyListComponent;
    var _a;
}());

//# sourceMappingURL=taxonomy-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/taxonomy-list/taxonomy.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxonomyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaxonomyService = /** @class */ (function () {
    function TaxonomyService(http) {
        this.http = http;
    }
    TaxonomyService.prototype.getTaxonomy = function (name) {
        // Need to make sure error checking is done. 
        // For now name is mandatory.
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].taxonomyListEndpoint + '/' + name;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TaxonomyService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    TaxonomyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], TaxonomyService);
    return TaxonomyService;
    var _a;
}());

//# sourceMappingURL=taxonomy.service.js.map

/***/ }),

/***/ "../../../../../src/app/terms-ofuse/terms-ofuse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.TermsofUse {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 960px;\r\n    padding-top: 100px;\r\n    font-family: 'gothambook';\r\n    font-size: 16px;\r\n    \r\n\r\n}\r\n\r\n.TermsofUse h1 {\r\n    \r\n    color: #1564a8;\r\n    opacity:1 !important;\r\n}\r\n\r\n\r\n.TermsofUse.contentWrapper{\r\n    font-size:13px;\r\n}\r\n@media only screen and (max-width:1023px){\r\n   .TermsofUse {\r\n        margin:  0 auto;\r\n        width: 90% !important;\r\n    }\r\n}\r\n\r\n\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms-ofuse/terms-ofuse.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"TermsofUse\">\r\n        \r\n          <h1>Terms of Use</h1>\r\n          <div class=\"contentWrapper\">\r\n        \r\n            <app-block [blockID]=\"env.Termsofuse\"></app-block>\r\n          </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/terms-ofuse/terms-ofuse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfuseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsOfuseComponent = /** @class */ (function () {
    function TermsOfuseComponent() {
        this.env = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */];
    }
    TermsOfuseComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    TermsOfuseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms-ofuse',
            template: __webpack_require__("../../../../../src/app/terms-ofuse/terms-ofuse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms-ofuse/terms-ofuse.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsOfuseComponent);
    return TermsOfuseComponent;
}());

//# sourceMappingURL=terms-ofuse.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-tracks/top-tracks-carousel/top-tracks-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null,null],\"sourceMap\":false}!../../../../../src/app/+music/track-block/track-block.component.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null,null],\"sourceMap\":false}!../../../../../src/app/top-tracks/top-tracks.component.css"), "");

// module
exports.push([module.i, "li.items {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    vertical-align: top;\r\n}\r\nul.item-list.carousel{\r\n    display: inline-block;\r\n    width: 100%;\r\n    overflow: visible;\r\n}\r\n.title a {\r\n    color: #fff;\r\n    line-height: 1.1;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    letter-spacing: 2px;\r\n}\r\n.track-name p{\r\n    text-transform: uppercase;\r\n    margin-top: 40px;\r\n}\r\n.album-name p{\r\n    font-style: italic;\r\n    margin: 10px 0 20px;\r\n}\r\n.carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n    position: absolute;\r\n    top: 0%;\r\n    left: -30px;\r\n    height: 100%;\r\n    /*display: flex;*/\r\n    padding: 0 10px;\r\n    /*flex-wrap: wrap;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;*/\r\n    cursor: pointer;\r\n    z-index: 2;\r\n    overflow: hidden;\r\n    color: #fff;\r\n    font-size: 10px;\r\n}\r\n.carousel-nav .carousel-prev i, .carousel-nav .carousel-next i{\r\n    position: absolute;\r\n    top: 25%;\r\n}\r\n.carousel-nav .carousel-prev i{\r\n    right: 0;\r\n}\r\n.carousel-nav .carousel-next i{\r\n    left: 0;\r\n}\r\n.carousel-nav .carousel-next{\r\n    right: -30px;\r\n    left: auto;\r\n}\r\n\r\nspan:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.carousel-stage {\r\n    -ms-touch-action: pan-y !important;\r\n        touch-action: pan-y !important;\r\n}\r\n@media only screen and (min-width: 1024px) {\r\n    .carousel-nav   .carousel-next   i, .carousel-nav  .carousel-prev   i{\r\n        top: 22% ;\r\n    }\r\n }\r\n@media only screen and (max-width: 767px) {\r\n    .thumbnail {\r\n        margin-bottom: 10px;\r\n    }\r\n    .carousel-nav .carousel-prev, .carousel-nav .carousel-next{\r\n        display:none;\r\n        \r\n    }\r\n   \r\n    carousel, news-carousel {    \r\n        padding: 0;\r\n        box-sizing: border-box;\r\n        -webkit-box-sizing: border-box;\r\n        padding-right: 40px;\r\n    }\r\n    li.items {\r\n        padding: 0 10px;\r\n        box-sizing: border-box;\r\n    }\r\n \r\n}\r\n.detailwrapper .track-name {\r\n    min-height: 0px;\r\n}\r\n.detailnnerwrapper {\r\n    min-height: 90px ;\r\n}\r\n@media only screen and (max-width: 1023px) {\r\n    .carousel-nav .carousel-prev i, .carousel-nav .carousel-next i{\r\n        position: absolute;\r\n        top: 19%;\r\n    }\r\n    .track-link a {\r\n        font-size: 10px !important;\r\n    }\r\n    .detailwrapper{\r\n        font-size: 12px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-tracks/top-tracks-carousel/top-tracks-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div #toptrackescarousel class=\"carousel viewport spotify\">\r\n    <ul *ngIf=\"createCarousel\" class=\"item-list carousel\">\r\n        <div class=\"carousel-stage\" [style.width]=\"carouselWidth\" [style.transform]=\"transformNode\" [style.transition]=\"transitionValue\"\r\n            (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\r\n            <li *ngFor=\"let track of duplicate;let i = index\" [style.width]=\"elementWidth\" class=\"items item-no-{{i}}\" [class.clone]=\"Track.clone\">\r\n                <div class=\"item-wrapper \">\r\n                    <div class=\"body\">\r\n                        <div class=\"thumbnail\" id=\"thumbnail-{{i}}\" (click)=\"playAudio(i)\">\r\n                            <img [src]=\"track.albumImage\" alt=\"\">\r\n                            <div id=\"play-{{i}}\" class=\"play\">\r\n                                <a></a>\r\n                            </div>\r\n                            <div id=\"pause-{{i}}\" class=\"pause\">\r\n                                <a></a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"detailwrapper\">\r\n                            <div class=\"detailnnerwrapper\">\r\n                                <div class=\"track-name\" id=\"track-name-{{i}}\">\r\n                                    <p [innerHTML]=\"track.trackName\"></p>\r\n                                </div>\r\n                                <div class=\"album-name\" id=\"album-name-{{i}}\">\r\n                                    <p [innerHTML]=\"track.albumName\"></p>\r\n                                </div>\r\n                            </div>\r\n                            <div>\r\n                                <audio id=\"preview\" id=\"preview-{{i}}\">\r\n                                    <source [src]=\"track.preview\" type=\"audio/mp3\">\r\n                                </audio>\r\n                            </div>\r\n                            <div class=\"track-link\" id=\"track-link-{{i}}\">\r\n                                <a target=\"_blank\" [href]=\"track.trackLink\">Stream on\r\n                        <i class=\"fa fa-spotify\" aria-hidden=\"true\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </div>\r\n    </ul>\r\n    <div class=\"carousel-controls\">\r\n        <div class=\"carousel-nav\">\r\n            <div class=\"carousel-prev\" [style.display]=\"PreviousNav\" (click)=\"previousItem()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></div>\r\n            <div class=\"carousel-next\" [style.display]=\"NextNav\" (click)=\"nextItem()\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></div>\r\n        </div>\r\n        <div class=\"carousel-dots\" [style.display]=\"showDots\">\r\n            <span *ngFor=\"let dot of dotCounts; let i = index;\" class=\"carousel-dot\"></span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/top-tracks/top-tracks-carousel/top-tracks-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopTracksCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopTracksCarouselComponent = /** @class */ (function (_super) {
    __extends(TopTracksCarouselComponent, _super);
    function TopTracksCarouselComponent(element) {
        var _this = _super.call(this) || this;
        _this.carouselimageURL = "";
        _this.buffer = null;
        _this.carouselWidth = "";
        _this.node = element;
        _this.carouselLength = 3;
        _this.newspagecarousel = false;
        _this.isspotify = true;
        _this.options = {
            itemCount: 1,
            showDots: false,
            showNav: true,
            animationSpeed: 0.5,
            autoplay: false,
            loop: true,
            responsive: {
                "767": 1,
                "1200": 1,
                "1400": 1,
                "2700": 1
            }
        };
        return _this;
    }
    TopTracksCarouselComponent.prototype.triggerFalseClick = function () {
        var el = this.toptrackescarousel.nativeElement;
        el.click();
    };
    TopTracksCarouselComponent.prototype.ngAfterViewInit = function () {
        // this.triggerFalseClick();
    };
    TopTracksCarouselComponent.prototype.ngOnInit = function () {
    };
    TopTracksCarouselComponent.prototype.ngOnChanges = function () {
        this.carouselLength = this.Track.length;
        this.duplicate = this.Track.slice(0, 3);
        this.carouselLength = this.duplicate.length;
        this.init();
        this.createCarousel = true;
        //}
    };
    TopTracksCarouselComponent.prototype.onAudioPlayerStateChange = function (event, index) {
        //if(event.isPlaying){
        this.stopAllPlayer(event, index);
        this.duplicate[index].isPlaying = event.isPlaying;
        //}
    };
    TopTracksCarouselComponent.prototype.stopAllPlayer = function (event, index) {
        for (var i = 0; i < this.duplicate.length; i++) {
            this.duplicate[i].isPlaying = !event.isPlaying;
        }
    };
    TopTracksCarouselComponent.prototype.onResize = function (event) {
        //this.clientWidth = event.target.innerWidth;
        this.resizeNodes();
    };
    // playAudio( index) {
    // 	this.player = <HTMLAudioElement>document.getElementById('preview-' + index);
    // 	if (this.player.paused) {
    // 		if (this.buffer != null && this.buffer != this.player) {
    // 			this.bufferIndex = index;
    // 			this.buffer.pause();
    // 			console.log('pause-' + this.bufferIndex);
    // 			this.buffer = null;
    // 		}
    // 		this.player.play();
    // 		this.buffer = this.player;
    // 		document.getElementById('play-' + index).style.display = "none";
    // 		document.getElementById('pause-' + index).style.display = "block";
    // 	}
    // 	else {
    // 		this.player.pause();
    // 		document.getElementById('pause-' + index).style.display = "none";
    // 		document.getElementById('play-' + index).style.display = "block";
    // 		this.buffer = null;
    // 	}
    // }
    TopTracksCarouselComponent.prototype.playAudio = function (index) {
        this.player = document.getElementById('preview-' + index);
        if (this.player.paused) {
            if (this.buffer != null && this.buffer != this.player) {
                this.buffer.pause();
                this.buffer.currentTime = 0;
                console.log(this.buffer == this.player);
                document.getElementById('pause-' + this.bufferIndex).style.display = "none";
                document.getElementById('play-' + this.bufferIndex).style.display = "block";
                this.buffer = null;
                this.bufferIndex = null;
            }
            this.player.play();
            this.buffer = this.player;
            this.bufferIndex = index;
            document.getElementById('play-' + index).style.display = "none";
            document.getElementById('pause-' + index).style.display = "block";
        }
        else {
            this.player.pause();
            this.player.currentTime = 0;
            document.getElementById('pause-' + index).style.display = "none";
            document.getElementById('play-' + index).style.display = "block";
            this.buffer = null;
            this.bufferIndex = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TopTracksCarouselComponent.prototype, "artistId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TopTracksCarouselComponent.prototype, "Track", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TopTracksCarouselComponent.prototype, "carouseln", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toptrackescarousel'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], TopTracksCarouselComponent.prototype, "toptrackescarousel", void 0);
    TopTracksCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top-tracks-carousel',
            template: __webpack_require__("../../../../../src/app/top-tracks/top-tracks-carousel/top-tracks-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/top-tracks/top-tracks-carousel/top-tracks-carousel.component.css")],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
    ], TopTracksCarouselComponent);
    return TopTracksCarouselComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__carousel_carousel_component__["a" /* CarouselComponent */]));

//# sourceMappingURL=top-tracks-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-tracks/top-tracks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null,null],\"sourceMap\":false}!../../../../../src/app/+music/track-block/track-block.component.css"), "");

// module
exports.push([module.i, ".track-link {\r\n    color: #359be9;\r\n    text-decoration: none;\r\n}\r\n\r\n.preview {\r\n    display: block;\r\n}\r\n\r\naudio {\r\n    display: block;\r\n    width: 156px;\r\n}\r\n\r\n.track-link a {\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    letter-spacing: 1px;\r\n    border: 1px solid #1564a8;\r\n    display: block;\r\n    width: 85%;\r\n    margin: 0 auto;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.detailwrapper{\r\n    font-size: 14px;\r\n    text-align: center;\r\n    /*color: rgba(255, 255, 255, 0.78);*/\r\n    color: rgba(242, 242, 242, 0.5);\r\n    font-family: gothambook;\r\n}\r\n\r\n.track-link a:hover {\r\n    background: #1564a8;\r\n}\r\n\r\n\r\n\r\n\r\n.play a {\r\n    /* background: url(../../../assets/i/play.png) no-repeat center center transparent; */\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    cursor: pointer;\r\n    text-indent: -9999px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    background-size: 60px;\r\n}\r\n\r\n.pause {\r\n    /* background: url(../../../assets/i/pause.png) no-repeat center center transparent; */\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    cursor: pointer;\r\n    text-indent: -9999px;\r\n    background-size: 50px;\r\n}\r\n\r\nli.items {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n}\r\n\r\nul.item-list.carousel {\r\n    display: inline-block;\r\n    width: 100%;\r\n    overflow: visible;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nspan.carousel-dot {\r\n    background-color: #ffffff;\r\n    border: 1px solid #ffffff;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    height: 7px;\r\n    margin-right: 10px;\r\n    width: 7px;\r\n}\r\n\r\nspan:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\nspan.carousel-dot.active {\r\n    background-color: red;\r\n}\r\n\r\n.carousel-stage .thumbnail {\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 1;\r\n    line-height: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.carousel-stage .thumbnail img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.carousel-stage .thumbnail img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.carousel-stage .thumbnail .hover-node {\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background-color: rgba(27, 33, 78, 0.88);\r\n    cursor: -webkit-grab;\r\n}\r\n\r\n.carousel-stage .thumbnail:hover .hover-node {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.hover-node span {\r\n    display: inline-block;\r\n    width: 100%;\r\n    line-height: 1.3;\r\n    font-size: 22px;\r\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.hover-node span.main-title::before {\r\n    background-image: url(/assets/i/instagram-image.png);\r\n    background-repeat: no-repeat;\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 26px;\r\n    height: 26px;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n}\r\n\r\n.hover-node span.second-title {\r\n    /* font-weight: 300; */\r\n    font-size: 19px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.hover-node .button {\r\n    border-color: #ffffff;\r\n    font-size: 15px;\r\n    padding: 0;\r\n    color: #ffffff;\r\n    font-weight: 500;\r\n    width: 122px;\r\n    letter-spacing: 2px;\r\n    line-height: 2;\r\n}\r\n\r\n.hover-node .button:hover {\r\n    color: #1b214e;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .carousel-nav .carousel-prev,\r\n    .carousel-nav .carousel-next {\r\n        width: 20px;\r\n        background-position: calc(20px/2 - 3px) center;\r\n        background-position: -webkit-calc(20px/2 - 3px) center;\r\n    }\r\n    .carousel-nav .carousel-next {\r\n        background-position: calc(-154px / 2 + 3px) center;\r\n        background-position: -webkit-calc(-154px / 2 + 3px) center;\r\n    }\r\n    carousel,\r\n    photo-carousel {\r\n        padding: 0 40px;\r\n        box-sizing: border-box;\r\n        -webkit-box-sizing: border-box;\r\n    }\r\n}\r\n\r\n.toptrcakcarousel{\r\n    overflow: hidden;\r\n}\r\n.toptrcakWrapper{\r\n    position: relative;\r\n    margin-left: 15px;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .toptrcakcarousel{\r\n        overflow: visible;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n    .toptrcakWrapper{\r\n        margin-left: 15px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-tracks/top-tracks.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"audio block\">\r\n    <h2>Top Tracks</h2>\r\n    <ul class=\"audio grid-5_xs-1\" *ngIf=\"tracks\">\r\n        <carousel></carousel>\r\n        <li class=\"col grid\" *ngFor=\"let track of tracks; let i = index\">\r\n            <div class=\"item-wrapper col\">\r\n                <div class=\"body\">\r\n                    <div class=\"thumbnail\" id=\"thumbnail-{{i}}\" (click)=\"playAudio(track.preview,i)\">\r\n                        <img [src]=\"track.albumImage\" alt=\"\">\r\n                        <div id=\"play-{{i}}\" class=\"play\">\r\n                            <a></a>\r\n                        </div>\r\n                        <div id=\"pause-{{i}}\" class=\"pause\">\r\n                            <a></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"track-name\" id=\"track-name-{{i}}\">\r\n                        <p [innerHTML]=\"track.trackName\"></p>\r\n                    </div>\r\n                    <div class=\"album-name\" id=\"album-name-{{i}}\">\r\n                        <p [innerHTML]=\"track.albumName\"></p>\r\n                    </div>\r\n                    <div>\r\n                        <audio id=\"preview\" id=\"preview-{{i}}\">\r\n                            <source [src]=\"track.preview\" type=\"audio/mp3\">\r\n                        </audio>\r\n                    </div>\r\n                    <div class=\"track-link\" id=\"track-link-{{i}}\">\r\n                        <a [href]=\"track.trackLink\">FULL TRACK</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div> -->\r\n\r\n\r\n<!--<div class=\"audio block\">\r\n     <h2>top tracks</h2>\r\n  <carousel>\r\n      <li class=\"col grid\" *ngFor=\"let track of tracks; let i = index\">\r\n          <div class=\"item-wrapper col\">\r\n              <div class=\"body\">\r\n                  <div class=\"thumbnail\" id=\"thumbnail-{{i}}\" (click)=\"playAudio(track.preview,i)\">\r\n                      <img [src]=\"track.albumImage\" alt=\"\">\r\n                      <div id=\"play-{{i}}\" class=\"play\">\r\n                          <a></a>\r\n                      </div>\r\n                      <div id=\"pause-{{i}}\" class=\"pause\">\r\n                          <a></a>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"track-name\" id=\"track-name-{{i}}\">\r\n                      <p [innerHTML]=\"track.trackName\"></p>\r\n                  </div>\r\n                  <div class=\"album-name\" id=\"album-name-{{i}}\">\r\n                      <p [innerHTML]=\"track.albumName\"></p>\r\n                  </div>\r\n                  <div>\r\n                      <audio id=\"preview\" id=\"preview-{{i}}\">\r\n                                  <source [src]=\"track.preview\" type=\"audio/mp3\">\r\n                              </audio>\r\n                  </div>\r\n                  <div class=\"track-link\" id=\"track-link-{{i}}\">\r\n                      <a [href]=\"track.trackLink\">FULL TRACK</a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </li>\r\n  </carousel> \r\n</div>-->\r\n<div #toptrackes class=\"toptrcakWrapper\">\r\n\r\n    <div class=\"toptrcakcarousel\">\r\n        <app-top-tracks-carousel *ngIf=\"tracklength\" [artistId]='artistId'[Track]=\"tracks\" [carouseln]=\"3\"></app-top-tracks-carousel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/top-tracks/top-tracks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopTracksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__top_tracks_service__ = __webpack_require__("../../../../../src/app/top-tracks/top-tracks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopTracksComponent = /** @class */ (function (_super) {
    __extends(TopTracksComponent, _super);
    function TopTracksComponent(http, topTracks, element) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.topTracks = topTracks;
        //artistId:string = '0du5cEVh5yTK9QJze8zA0C';
        _this.tracks = [];
        _this.isPlaying = false;
        _this.node = element;
        _this.carouselLength = 5;
        _this.options = {
            itemCount: 1,
            showDots: false,
            showNav: true,
            animationSpeed: 0.5,
            autoplay: false,
            loop: true,
            responsive: {}
        };
        return _this;
    }
    TopTracksComponent.prototype.triggerFalseClick = function () {
        var el = this.toptrackes.nativeElement;
        el.click();
    };
    TopTracksComponent.prototype.ngAfterViewInit = function () {
        // this.triggerFalseClick();
    };
    TopTracksComponent.prototype.getTracks = function () {
        var _this = this;
        this.topTracks.getTopTracks(this.artistId).subscribe(function (data) {
            // var content = data.json().tracks;
            // for(let track of data.json().tracks){
            //   if (this.tracks.length < this.count){
            //     this.tracks.push(track);
            //   }
            // }
            for (var i = 0; i < _this.count; i++) {
                _this.tracks.push({
                    trackName: data.tracks[i].name,
                    trackLink: data.tracks[i].external_urls.spotify,
                    albumName: data.tracks[i].album.name,
                    albumLink: data.tracks[i].album.external_urls.spotify,
                    albumImage: data.tracks[i].album.images[1].url,
                    preview: data.tracks[i].preview_url + '.mp3'
                });
            }
        }, function (err) { return console.error(err); }, function () {
            //this.spotifylength = this.spotifyFeed.length;
            _this.tracklength = _this.tracks.length;
            //this.notify.emit(this.spotifylength);
            console.log('done' + _this.tracklength);
        });
    };
    TopTracksComponent.prototype.playAudio = function (previewLink, index) {
        this.player = document.getElementById('preview-' + index);
        if (this.player.paused) {
            this.player.play();
            document.getElementById('play-' + index).style.display = "none";
            document.getElementById('pause-' + index).style.display = "block";
        }
        else {
            this.player.pause();
            document.getElementById('pause-' + index).style.display = "none";
            document.getElementById('play-' + index).style.display = "block";
        }
    };
    TopTracksComponent.prototype.ngOnInit = function () {
        //this.newMethod();
        this.getTracks();
    };
    TopTracksComponent.prototype.newMethod = function () {
        this.getTracks();
    };
    TopTracksComponent.prototype.ngOnChanges = function () {
        // this.triggerFalseClick();
        //this.newMethod();
        this.getTracks();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TopTracksComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TopTracksComponent.prototype, "artistId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('toptrackes'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], TopTracksComponent.prototype, "toptrackes", void 0);
    TopTracksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-top-tracks',
            template: __webpack_require__("../../../../../src/app/top-tracks/top-tracks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/top-tracks/top-tracks.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__top_tracks_service__["a" /* TopTracksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__top_tracks_service__["a" /* TopTracksService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"]) === "function" && _d || Object])
    ], TopTracksComponent);
    return TopTracksComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_0__carousel_carousel_component__["a" /* CarouselComponent */]));

//# sourceMappingURL=top-tracks.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-tracks/top-tracks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopTracksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopTracksService = /** @class */ (function () {
    function TopTracksService(http) {
        this.http = http;
    }
    TopTracksService.prototype.getTopTracks = function (artistId) {
        var url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].SpotifytoptrackEndpoint + artistId;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.httpError);
    };
    TopTracksService.prototype.httpError = function (error) {
        var errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    TopTracksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], TopTracksService);
    return TopTracksService;
    var _a;
}());

//# sourceMappingURL=top-tracks.service.js.map

/***/ }),

/***/ "../../../../../src/app/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getNID = function (urlSlug) {
        var slugArray = urlSlug.split('-');
        return slugArray.pop();
    };
    Utils.getTitle = function (urlSlug) {
        var index = urlSlug.search("-and-");
        var slugArrayTEmp = urlSlug;
        if (index > 1) {
            slugArrayTEmp = urlSlug.split('and').join('%2B');
        }
        var slugArray = slugArrayTEmp.split('-').join('%20');
        return slugArray;
    };
    Utils.getSlug = function (path) {
        var pathArray = path.split('/');
        return pathArray.pop();
    };
    Utils.getroutinglink = function (path) {
        var finalURL;
        var a = path.split(',');
        //var a = ['<a href="/artist/blake-shelton" hreflang="en">Blake Shelton</a>', '<a href="/artist/dan-shay" hreflang="en">Dan + Shay</a>'];
        a = a.map(function (x) { return x.replace(/"([^"]+(?="))"/g, '$1'); });
        a = a.map(function (x) { return x.replace(/a href=/g, "a [routerLink]=\"\['"); });
        a = a.map(function (x) { return x.replace(/\hreflang/g, "']\"\ hreflang"); });
        a = a.map(function (x) { return x.replace(/hreflang=en/g, ""); });
        finalURL = a;
        return finalURL;
    };
    Utils.getImageSrc = function (imgtag) {
        var imgsrc = "";
        var srcRegex = /src[\s]*=[\s\\]*"([^"]*)"/g;
        var imgSrcAr = srcRegex.exec(imgtag);
        if (imgSrcAr && imgSrcAr[1]) {
            imgsrc = imgSrcAr[1];
        }
        return decodeURIComponent(imgsrc);
    };
    Utils.getHref = function (path) {
        var imgsrc = "";
        var srcRegex = /href[\s]*=[\s\\]*"([^"]*)"/g;
        var imgSrcAr = srcRegex.exec(path);
        if (imgSrcAr && imgSrcAr[1]) {
            imgsrc = imgSrcAr[1];
        }
        return decodeURIComponent(imgsrc);
    };
    Utils.getanchorhref = function (path) {
        var imgsrc = "";
        var srcRegex = /href[\s]*=[\s\\]*"([^"]*)"/g;
        var imgSrcAr = srcRegex.exec(path);
        if (imgSrcAr && imgSrcAr[1]) {
            imgsrc = imgSrcAr[1];
        }
        return decodeURIComponent(imgsrc);
    };
    Utils.getImagesSrc = function (imgtag) {
        var match;
        var imgAr = [];
        var srcRegex = /src[\s]*=[\s\\]*"([^"]*)"/g;
        while (match = srcRegex.exec(imgtag)) {
            imgAr.push(match[1]);
        }
        return imgAr;
    };
    Utils.getArrayofObjects = function (malformedArray) {
        return JSON.parse("[" + malformedArray + "]");
    };
    Utils.addClass = function (el, className) {
        if (el.classList)
            el.classList.add(className);
        else if (!Utils.hasClass(el, className))
            el.className += " " + className;
    };
    Utils.removeClass = function (el, className) {
        if (el.classList)
            el.classList.remove(className);
        else if (Utils.hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    Utils.viewportWidth = function () {
        var node = document.getElementsByTagName("body");
        //console.log(" node[0].clientWidth "+node[0].clientWidth);
        return node[0].clientWidth;
    };
    Utils.checkMobile = function () {
        return Utils.viewportWidth() < 767;
    };
    Utils.checkIpad = function () {
        return Utils.viewportWidth() > 768 && Utils.viewportWidth() < 1024;
    };
    Utils.hasClass = function (el, className) {
        if (el.classList)
            return el.classList.contains(className);
        else
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    host: '/',
    promoteToHomePage: 'promote',
    photoListEndpoint: "rest/content/photo",
    photoListMinimalEndpoint: "rest/content/photo-mini",
    photoDetailEndpoint: "rest/content/photo-detail",
    newsListEndpoint: "rest/content/news",
    newsArtistEndpoint: "rest/content/artistnews",
    newsFeaturedEndpoint: "rest/content/featuredHomeNews",
    //newsListEndpoint:"assets/json/news.json",
    newsDetailEndpoint: "rest/content/news-detail",
    //newsDetailMinEndpoint: "rest/content/news-detail",
    newsDetailMinEndpoint: "rest/content/news-detail-min",
    newsNidCountEndpoint: "rest/content/news-list",
    videoListEndpoint: "rest/content/video",
    merchListEndpoint: "rest/content/merch",
    taxonomyListEndpoint: "rest/taxonomy",
    photoCategoryEndpoint: "rest/content/photo/category",
    videoCategoryEndpoint: "rest/content/video/category",
    //newsCategoryEndpoint:"rest/content/news/category",
    newsCategoryEndpoint: "rest/content/featurednews",
    //songkickEndPoint: "https://api.songkick.com/api/3.0/artists/3181021/calendar/managed_performances.json?apikey=heMLjOnXj1zuWDXP",
    songkickEndPoint: "https://api.songkick.com/api/3.0/artists/",
    //tourEndpoint:"http://api.bandsintown.com/artists/shinedown/events.json?api_version=2.0&extended=true&app_id=music",
    livefyreEndpoint: "http://bootstrap.wmg.fyre.co/bs3/v3.1/wmg.fyre.co/365257/ZGVzaWduZXItYXBwLTE0OTc1MDc3ODk5MDQ=/init",
    testtourEndpoint: "",
    tourEndpoint: "rest/content/tour",
    pastTourEndpoint: "rest/content/tour-past",
    blockEndpoint: "rest/block/all",
    albumListEndpoint: "rest/content/albums",
    audioListEndpoint: "rest/content/audio",
    audioAlbumListEndpoint: "rest/content/tracks-album",
    albumDetailEndpoint: "rest/content/album-detail",
    audioDetailEndpoint: "rest/content/track-detail",
    albumEmbedEndpoint: "rest/content/album-embed",
    artistListingEndpoint: "rest/content/artistlisting",
    artistGridEndPoint: "rest/content/artistlistingRandom?" + (Math.floor((Math.random() * 1000) + 1)),
    artistGridStickyEndPoint: "rest/content/artistlistingsticky",
    artistDetailEndpoint: "rest/content/artistdetail",
    artistNodeIdList: "rest/content/artistnodelist",
    featuredArtistEndpoint: "rest/content/featuredartist",
    artistListingTempEndpoint: "assets/artistlisting.json",
    nodeCount: "rest/node/count",
    nodeArtisttagCount: "rest/node/countArtistfilter",
    pageEndPoint: "rest/page/all",
    newsartistTagEndpoint: "rest/content/artistTags",
    artistNodeCountWithNewsletter: "rest/node/artistWithNewsLetter",
    //SpotifyContentEndpoint:"http://staging.weate.ch.stage1.535e.blackmesh.com/wmn/warnermusicnashvilleSpotify/SpotifySampleJson.json/",
    SpotifytoptrackEndpoint: "http://staging.weate.ch.stage18.535e.blackmesh.com/wmn/warnermusicnashville/spotify/?artist_id=",
    SpotifyEndpoint: "rest/content/spotify",
    footerBlockId: "26",
    navBlockId: "16",
    signupBlockId: "11",
    logoBlockId: "46",
    aboutBlockId: "61",
    footerBlockIdnew: '51',
    Privacypolicy: '91',
    Termsofuse: '96',
    footerBlockMobilenew: '66'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__("../../../../../src/app/index.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null,null],\"sourceMap\":false}!../../../../../src/app/+music/track-block/track-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "audio {\r\n    display: none;\r\n}\r\n.audio li:hover {\r\n    background-color: #e8e8ef;\r\n    color: #000;\r\n}\r\n.audio{\r\n    position: relative;\r\n}\r\n.audio li.selected {\r\n    background-color: #000;\r\n}\r\n\r\n\r\n.audio li {\r\n    color: #1b214e;\r\n    position: relative;\r\n}\r\n\r\n\r\nli.selected .track-name,li.selected .album-name,li.selected a{ \r\n    color: #ffffff;\r\n}\r\nh2{\r\n    font-size: 30px;\r\n    text-align: left;\r\n    padding-bottom: 33px;\r\n    padding-top: 0;\r\n    font-weight: 600;\r\n    color: #807c9c;\r\n    display: inline-block;\r\n}\r\n.spotifyFollow {\r\n    display: inline-block;\r\n    right: -42px;\r\n    position: absolute;\r\n}\r\n.footer {\r\n    color: #359be9;\r\n    font-size: 14px;\r\n}\r\n\r\n.thumbnail:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.42);\r\n}\r\n.thumbnail{\r\n    position:relative;\r\n    font-size: 0;\r\n    line-height: 0\r\n}\r\n\r\n.block img {\r\n    min-height: 152px;\r\n}\r\n\r\n.fulltrack a {\r\n    display: none;\r\n}\r\nli.selected .fulltrack a {\r\n    display: inline-block;\r\n    padding: 8px 15px;    \r\n    font-size: 14px;\r\n    border: 2px solid #6b6c75;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    border-radius: 2px;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\nli.selected .fulltrack a:hover {\r\n    background-color: #ffffff;\r\n    border-color: #ffffff;\r\n    color: #040514;\r\n    border-radius: 2px;\r\n}\r\n.fulltrack {\r\n    text-align: center;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 767px) {\r\n    h2{\r\n        padding-bottom: 0;\r\n        margin-bottom: 20px;\r\n        font-size: 20px;\r\n    }\r\n    .track-name {\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n    }\r\n    .album-name{\r\n        text-align: center;\r\n        padding-bottom: 0;\r\n    }\r\n    li.selected .album-name{\r\n        padding-bottom: 35px;\r\n    }\r\n    .spotifyFollow{\r\n        top: 14px;\r\n        right: 0;\r\n    }    \r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null,null],\"sourceMap\":false}!../../../../../src/app/top-tracks/top-tracks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null,null],\"sourceMap\":false}!../../../../../src/app/+music/track-block/track-block.component.css"), "");

// module
exports.push([module.i, ".track-link {\r\n    color: #359be9;\r\n    text-decoration: none;\r\n}\r\n\r\n.preview {\r\n    display: block;\r\n}\r\n\r\naudio {\r\n    display: block;\r\n    width: 156px;\r\n}\r\n\r\n.track-link a {\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    letter-spacing: 1px;\r\n    border: 1px solid #1564a8;\r\n    display: block;\r\n    width: 85%;\r\n    margin: 0 auto;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.detailwrapper{\r\n    font-size: 14px;\r\n    text-align: center;\r\n    /*color: rgba(255, 255, 255, 0.78);*/\r\n    color: rgba(242, 242, 242, 0.5);\r\n    font-family: gothambook;\r\n}\r\n\r\n.track-link a:hover {\r\n    background: #1564a8;\r\n}\r\n\r\n\r\n\r\n\r\n.play a {\r\n    /* background: url(../../../assets/i/play.png) no-repeat center center transparent; */\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    cursor: pointer;\r\n    text-indent: -9999px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    background-size: 60px;\r\n}\r\n\r\n.pause {\r\n    /* background: url(../../../assets/i/pause.png) no-repeat center center transparent; */\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    cursor: pointer;\r\n    text-indent: -9999px;\r\n    background-size: 50px;\r\n}\r\n\r\nli.items {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n}\r\n\r\nul.item-list.carousel {\r\n    display: inline-block;\r\n    width: 100%;\r\n    overflow: visible;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nspan.carousel-dot {\r\n    background-color: #ffffff;\r\n    border: 1px solid #ffffff;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    height: 7px;\r\n    margin-right: 10px;\r\n    width: 7px;\r\n}\r\n\r\nspan:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\nspan.carousel-dot.active {\r\n    background-color: red;\r\n}\r\n\r\n.carousel-stage .thumbnail {\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 1;\r\n    line-height: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.carousel-stage .thumbnail img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.carousel-stage .thumbnail img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.carousel-stage .thumbnail .hover-node {\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background-color: rgba(27, 33, 78, 0.88);\r\n    cursor: -webkit-grab;\r\n}\r\n\r\n.carousel-stage .thumbnail:hover .hover-node {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.hover-node span {\r\n    display: inline-block;\r\n    width: 100%;\r\n    line-height: 1.3;\r\n    font-size: 22px;\r\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.hover-node span.main-title::before {\r\n    background-image: url(/assets/i/instagram-image.png);\r\n    background-repeat: no-repeat;\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 26px;\r\n    height: 26px;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n}\r\n\r\n.hover-node span.second-title {\r\n    /* font-weight: 300; */\r\n    font-size: 19px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.hover-node .button {\r\n    border-color: #ffffff;\r\n    font-size: 15px;\r\n    padding: 0;\r\n    color: #ffffff;\r\n    font-weight: 500;\r\n    width: 122px;\r\n    letter-spacing: 2px;\r\n    line-height: 2;\r\n}\r\n\r\n.hover-node .button:hover {\r\n    color: #1b214e;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .carousel-nav .carousel-prev,\r\n    .carousel-nav .carousel-next {\r\n        width: 20px;\r\n        background-position: calc(20px/2 - 3px) center;\r\n        background-position: -webkit-calc(20px/2 - 3px) center;\r\n    }\r\n    .carousel-nav .carousel-next {\r\n        background-position: calc(-154px / 2 + 3px) center;\r\n        background-position: -webkit-calc(-154px / 2 + 3px) center;\r\n    }\r\n    carousel,\r\n    photo-carousel {\r\n        padding: 0 40px;\r\n        box-sizing: border-box;\r\n        -webkit-box-sizing: border-box;\r\n    }\r\n}\r\n\r\n.toptrcakcarousel{\r\n    overflow: hidden;\r\n}\r\n.toptrcakWrapper{\r\n    position: relative;\r\n    margin-left: 15px;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .toptrcakcarousel{\r\n        overflow: visible;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n    .toptrcakWrapper{\r\n        margin-left: 15px;\r\n    }\r\n}", ""]);

// exports


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);