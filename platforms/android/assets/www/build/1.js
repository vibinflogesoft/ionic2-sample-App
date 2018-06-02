webpackJsonp([1],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourPlacesPageModule", function() { return TourPlacesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tour_places__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TourPlacesPageModule = (function () {
    function TourPlacesPageModule() {
    }
    TourPlacesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tour_places__["a" /* TourPlacesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tour_places__["a" /* TourPlacesPage */]),
            ],
        })
    ], TourPlacesPageModule);
    return TourPlacesPageModule;
}());

//# sourceMappingURL=tour-places.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourPlacesPage; });
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


var TourPlacesPage = (function () {
    function TourPlacesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.specifictour = this.navParams.get('data');
        console.log(this.specifictour);
    }
    TourPlacesPage.prototype.ionViewDidLoad = function () {
    };
    TourPlacesPage.prototype.getSightDescription = function (places) {
        this.navCtrl.push('SightDescriptionPage', { data: places });
    };
    TourPlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tour-places',template:/*ion-inline-start:"/home/nizamuddin/Desktop/trek-guru/src/pages/tour-places/tour-places.html"*/`\n<ion-header>\n	<ion-navbar>\n		<ion-title *ngIf="specifictour">{{specifictour.title}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-slides pager="true" class="container">\n		<ion-slide *ngFor="let images of specifictour?.slider">\n			<img src="{{images.image}}" style="width:100%;height:auto;"/>\n		</ion-slide>\n	</ion-slides>\n	<p align="center" *ngIf="specifictour">{{specifictour.decs}}</p>\n		<ion-list>\n		<ion-item *ngFor="let places of specifictour?.specialities" (click)="getSightDescription(places)">\n			<ion-thumbnail item-start>\n				<img src="{{places.image}}">\n			</ion-thumbnail>\n			<h2>{{places.title}}</h2>\n			<p>Hayao Miyazaki • 1988</p>\n			<button ion-button clear item-end color="dark">\n				<ion-icon name="arrow-dropright"></ion-icon>\n			</button>\n		</ion-item>\n	</ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/nizamuddin/Desktop/trek-guru/src/pages/tour-places/tour-places.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TourPlacesPage);
    return TourPlacesPage;
}());

//# sourceMappingURL=tour-places.js.map

/***/ })

});
//# sourceMappingURL=1.js.map