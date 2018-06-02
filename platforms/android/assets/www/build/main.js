webpackJsonp([4],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/google-map/google-map.module": [
		285,
		3
	],
	"../pages/leaf-let/leaf-let.module": [
		286,
		0
	],
	"../pages/sight-description/sight-description.module": [
		287,
		2
	],
	"../pages/tour-places/tour-places.module": [
		288,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.gallerry = [
            { image: 'assets/imgs/palakkad.jpg', title: 'Kasaragod', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/malappuram.jpg' },
                    { image: 'assets/imgs/palakkad.jpg' },
                    { image: 'assets/imgs/thiruvananthapuram.jpg' }
                ],
                specialities: [
                    { title: 'Bekal Fort', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Ranipuram', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Chandargiri Fort', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/theyyam.jpg', title: 'Kannur', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/kannur.jpg' },
                    { image: 'assets/imgs/theyyam.jpg' },
                    { image: 'assets/imgs/thiruvananthapuram.jpg' }
                ],
                specialities: [
                    { title: 'Payyambalam Beach', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Muzhappilangad Drive-in Beach', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Palakkayam Thattu', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/wayanadu.jpg', title: 'Wayanadu', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/kannur.jpg' },
                    { image: 'assets/imgs/palakkad.jpg' },
                    { image: 'assets/imgs/thiruvananthapuram.jpg' }
                ],
                specialities: [
                    { title: 'Chembra Peak', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Edakkal Caves', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Meenmutty waterfalls', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/kozhikkode.jpg', title: 'kozhikkode', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/thiruvananthapuram.jpg' },
                    { image: 'assets/imgs/thiruvananthapuram.jpg' },
                    { image: 'assets/imgs/malappuram.jpg' }
                ],
                specialities: [
                    { title: 'Kozhikode Beach', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Mananchira Square', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Thusharagiri Waterfalls', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/malappuram.jpg', title: 'Malappuram', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/thiruvananthapuram.jpg' },
                    { image: 'assets/imgs/kozhikkode.jpg' },
                    { image: 'assets/imgs/thiruvananthapuram.jpg' }
                ],
                specialities: [
                    { title: 'Kottakkunnu', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Kodikuthimala', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Nilambur Teak Museum', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/palakkad.jpg', title: 'Palakkad', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/palakkad.jpg' },
                    { image: 'assets/imgs/palakkad.jpg' },
                    { image: 'assets/imgs/thiruvananthapuram.jpg' }
                ],
                specialities: [
                    { title: '', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: '', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: '', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/thrissur.jpg', title: 'Thrissur', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/thiruvananthapuram.jpg' },
                    { image: 'assets/imgs/malappuram.jpg' },
                    { image: 'assets/imgs/kozhikkode.jpg' }
                ],
                specialities: [
                    { title: 'Malampuzha Dam', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Seethargundu Viewpoint', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Nelliyampathy hills', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/kochi.jpg', title: 'Ernakulam', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/palakkad.jpg' },
                    { image: 'assets/imgs/kannur.jpg' },
                    { image: 'assets/imgs/palakkad.jpg' }
                ],
                specialities: [
                    { title: 'BhoothathanKettu Dam & Reserve Forest', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Fort Kochi', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Cherai Beach', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/kottayam.jpg', title: 'Kottyam', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/thiruvananthapuram.jpg' },
                    { image: 'assets/imgs/palakkad.jpg' },
                    { image: 'assets/imgs/palakkad.jpg' }
                ],
                specialities: [
                    { title: 'Illikkal Kallu', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Elaveezhapoonchira', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Vagamon', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/idukki.jpeg', title: 'Idukki', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/thiruvananthapuram.jpg' },
                    { image: 'assets/imgs/wayanadu.jpg' },
                    { image: 'assets/imgs/palakkad.jpg' }
                ],
                specialities: [
                    { title: 'Meesapulimala', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Kolukkumalai Tea Estate', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Kurisumala Ashram', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/pathanamthitta.jpg', title: 'Pathanamthitta', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/thiruvananthapuram.jpg' },
                    { image: 'assets/imgs/malappuram.jpg' },
                    { image: 'assets/imgs/palakkad.jpg' }
                ],
                specialities: [
                    { title: 'Konni Forest Reserve', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Perunthenaruvi Waterfall', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Sabarimala', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/alappuzha.jpg', title: 'Alappuzha', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/palakkad.jpg' },
                    { image: 'assets/imgs/malappuram.jpg' },
                    { image: 'assets/imgs/palakkad.jpg' }
                ],
                specialities: [
                    { title: 'Alappuzha Beach', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Alappuzha Lighthouse', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Day tour in Alleppey houseboat', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/kollam.jpg', title: 'Kollam', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/palakkad.jpg' },
                    { image: 'assets/imgs/kozhikkode.jpg' },
                    { image: 'assets/imgs/kannur.jpg' }
                ],
                specialities: [
                    { title: 'Palaruvi Falls', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Kollam Beach', subtitle: '', image: 'assets/imgs/theyyam.jpg' },
                    { title: 'Jadayupara', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            },
            { image: 'assets/imgs/thiruvananthapuram.jpg', title: 'Thiruvananthapuram', subtitle: 'gods own country', decs: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                slider: [
                    { image: 'assets/imgs/palakkad.jpg' },
                    { image: 'assets/imgs/kozhikkode.jpg' },
                    { image: 'assets/imgs/thiruvananthapuram.jpg' }
                ],
                specialities: [
                    { title: 'Kovalam Beach', subtitle: '', image: 'assets/imgs/kannur.jpg' },
                    { title: 'Agastya Mala', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' },
                    { title: 'Thiruvananthapuram Zoo', subtitle: '', image: 'assets/imgs/thiruvananthapuram.jpg' }
                ]
            }
        ];
    }
    HomePage.prototype.getDistrictPlaces = function (data) {
        console.log('workssss');
        this.navCtrl.push('TourPlacesPage', { data: data });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nizamuddin/Desktop/trek-guru/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Trek Guru</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n<!--  <img-loader src="https://www.hdwallpapers.in/walls/superheroes_of_justice_league_4k_8k-HD.jpg" spinner=true >\n</img-loader> -->\n    <ion-card *ngFor="let data of gallerry" (click)="getDistrictPlaces(data)" >\n        <img src="{{data.image}}" />\n      \n        <div class="card-title">{{data.title}}</div>\n        <div class="card-subtitle">{{data.subtitle}}</div>\n    </ion-card>\n\n\n</ion-content>\n`/*ion-inline-end:"/home/nizamuddin/Desktop/trek-guru/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_image_loader__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/google-map/google-map.module#GoogleMapPageModule', name: 'GoogleMapPage', segment: 'google-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaf-let/leaf-let.module#LeafLetPageModule', name: 'LeafLetPage', segment: 'leaf-let', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sight-description/sight-description.module#SightDescriptionPageModule', name: 'SightDescriptionPage', segment: 'sight-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tour-places/tour-places.module#TourPlacesPageModule', name: 'TourPlacesPage', segment: 'tour-places', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {LeafLetPage} from  '../pages/leaf-let/leaf-let';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, push) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.push = push;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Kasaragod', component: 'LeafLetPage', lat: '12.512106', long: '74.982818' },
            { title: 'Kannur', component: 'LeafLetPage', lat: '11.874477', long: '75.370369' },
            { title: 'Wayanad', component: 'LeafLetPage', lat: '11.741255', long: '76.034057' },
            { title: 'Kozhikkod', component: 'LeafLetPage', lat: '11.263468', long: '75.808266' },
            { title: 'Malappuram', component: 'LeafLetPage', lat: '11.068606', long: '76.072511' },
            { title: 'Palakkad', component: 'LeafLetPage', lat: '10.789491', long: '76.651893' },
            { title: 'Thrissur', component: 'LeafLetPage', lat: '10.520896', long: '76.233092' },
            { title: 'Ernakulam', component: 'LeafLetPage', lat: '9.974474', long: '76.306590' },
            { title: 'Kottayam', component: 'LeafLetPage', lat: '9.591747', long: '76.525227' },
            { title: 'Idukki', component: 'LeafLetPage', lat: '9.789534', long: '76.921650' },
            { title: 'Pathanamthitta', component: 'LeafLetPage', lat: '9.333865', long: '76.879380' },
            { title: 'Alappuzha', component: 'LeafLetPage', lat: '9.495612', long: '76.323907' },
            { title: 'Kollam', component: 'LeafLetPage', lat: '8.891982', long: '76.614844' },
            { title: 'Thiruvananthapuram', component: 'LeafLetPage', lat: '8.524764', long: '76.933198' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.pushsetup();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component, { data: page });
    };
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        var options = {
            android: {},
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'New Push notification',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            //do whatever you want with the registration ID
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nizamuddin/Desktop/trek-guru/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n      <ion-list>\n        <ion-item class="avatarItem">\n          <ion-avatar item-start>\n            <img src="assets/imgs/kerala.gif">\n          </ion-avatar>\n          <h2>Kerala</h2>\n          <p>Gods own country</p>\n        </ion-item>\n      </ion-list>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n           <ion-icon name="pin"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/home/nizamuddin/Desktop/trek-guru/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map