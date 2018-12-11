webpackJsonp([9],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contacto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Autores</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      Uriel Martinez @urielamv\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstudiantePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EstudiantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstudiantePage = /** @class */ (function () {
    function EstudiantePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EstudiantePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstudiantePage');
    };
    EstudiantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estudiante',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/estudiante/estudiante.html"*/'<!--\n  Generated template for the EstudiantePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil Estudiante</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>Escoja las áras en las que desea capacitarse\n  <ion-item>\n    <ion-label>Matemáticas</ion-label>\n    <ion-toggle value="mat" checked="false" color="energized"></ion-toggle>\n</ion-item>\n<ion-item>\n    <ion-label>Innovación Social</ion-label>\n    <ion-toggle value="socialI" checked="false" color="royal"></ion-toggle>\n</ion-item>\n<ion-item>\n    <ion-label>Habilidades de presentación</ion-label>\n    <ion-toggle value="softskills" checked="false" color="secondary"></ion-toggle>\n</ion-item>\n<ion-item>\n  <ion-label>Mercadeo</ion-label>\n  <ion-toggle value="mercadeo" checked="false" color="secondary"></ion-toggle>\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/estudiante/estudiante.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EstudiantePage);
    return EstudiantePage;
}());

//# sourceMappingURL=estudiante.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HabilidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HabilidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HabilidadesPage = /** @class */ (function () {
    function HabilidadesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HabilidadesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HabilidadesPage');
    };
    HabilidadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-habilidades',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/habilidades/habilidades.html"*/'<!--\n  Generated template for the HabilidadesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>habilidades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/habilidades/habilidades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HabilidadesPage);
    return HabilidadesPage;
}());

//# sourceMappingURL=habilidades.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { App, MenuController } from 'ionic-angular';
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/inicio/inicio.html"*/'<!--\n  Generated template for the InicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n <!-- this fab is placed at bottom right -->\n <ion-fab bottom right >\n    <button ion-fab>Share</button>\n    <ion-fab-list side="top">\n      <button ion-fab>Facebook</button>\n      <button ion-fab>Twitter</button>\n      <button ion-fab>Youtube</button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab>Vimeo</button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

/*

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Menus
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class BasicPage {
  constructor(app: App, menu: MenuController) {
    menu.enable(true);
  }
}

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Menus
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageOne { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Friends
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageTwo { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Events
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageThree { }

*/
//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profesor_profesor__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estudiante_estudiante__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.estudiantePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__estudiante_estudiante__["a" /* EstudiantePage */]);
    };
    PerfilPage.prototype.profesorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profesor_profesor__["a" /* ProfesorPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/perfil/perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <!-- this fab is placed at bottom right -->\n <ion-fab center middle >\n    <button ion-fab>Perfil</button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="estudiantePage()"><ion-icon ios="ios-people" md="md-people"></ion-icon></button>\n      \n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="profesorPage()"><ion-icon ios="ios-person" md="md-person"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorPage = /** @class */ (function () {
    function ProfesorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfesorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorPage');
    };
    ProfesorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profesor',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/profesor/profesor.html"*/'<!--\n  Generated template for the ProfesorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil Profesor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>Escoja sus habilidades\n  <ion-item>\n    <ion-label>Matemáticas</ion-label>\n    <ion-toggle value="mat" checked="false" color="energized"></ion-toggle>\n</ion-item>\n<ion-item>\n    <ion-label>Sociales</ion-label>\n    <ion-toggle value="soc" checked="false" color="royal"></ion-toggle>\n</ion-item>\n<ion-item>\n    <ion-label>Ciencias Naturales</ion-label>\n    <ion-toggle value="nat" checked="false" color="secondary"></ion-toggle>\n</ion-item>\n<ion-item>\n    <ion-label>Música</ion-label>\n    <ion-toggle value="mus" checked="false" color="energized"></ion-toggle>\n</ion-item>  \n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/profesor/profesor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfesorPage);
    return ProfesorPage;
}());

//# sourceMappingURL=profesor.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/areas/areas.module": [
		286,
		8
	],
	"../pages/estudiante/estudiante.module": [
		287,
		7
	],
	"../pages/habilidades/habilidades.module": [
		288,
		6
	],
	"../pages/inicio/inicio.module": [
		290,
		5
	],
	"../pages/login/login.module": [
		289,
		4
	],
	"../pages/nueva-publicacion/nueva-publicacion.module": [
		292,
		3
	],
	"../pages/perfil/perfil.module": [
		291,
		2
	],
	"../pages/profesor/profesor.module": [
		294,
		1
	],
	"../pages/publicaciones/publicaciones.module": [
		293,
		0
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__areas_areas__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__publicaciones_publicaciones__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__habilidades_habilidades__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inicio_inicio__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__perfil_perfil__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__areas_areas__["a" /* AreasPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__publicaciones_publicaciones__["a" /* PublicacionesPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__habilidades_habilidades__["a" /* HabilidadesPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_7__inicio_inicio__["a" /* InicioPage */];
        this.tab8Root = __WEBPACK_IMPORTED_MODULE_8__perfil_perfil__["a" /* PerfilPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="ApeN" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contacto" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Areas" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab8Root" tabTitle="Perfil" tabIcon="home"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl = navCtrl;
        //this.pushPage = LoginPage;
        //this.params = { id: 42 };
    }
    AboutPage.prototype.goToOtherPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sobre ApeN\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>ApeN nace como necesidad de los casos definidos en la localidad de La Candelaria</p>\n  <p>Es una red social para el aprendizaje y enseñanza en áreas de conocimiento aplicadas que permita la interacción entre universidades y la comunidad</p>\n  <p>Parte de la necesidad de difundir el conocimiento de manera estructurada <br>y generando motivación hacia el público mediante retos de clase que dan poderes de conocimiento.</p>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/about/about.html"*/
            //template: '<button ion-button [navPush]="pushPage" [navParams]="params">Go</button>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__areas_areas__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, paramsHome, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.paramsHome = paramsHome;
        this.http = http;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Ingresar = function () {
        var _this = this;
        this.url = "http://localhost:3000/api/users/" + this.Nombre + "/" + this.Clave;
        this.http.get(this.url).subscribe(function (data) {
            if (data == null) {
                if (confirm("Usuario no registrado. Desea continuar?")) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__areas_areas__["a" /* AreasPage */]);
                }
            }
            else {
                //this.paramsHome = {IsLogin: true};
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], _this.paramsHome);
            }
            alert(_this.url);
            alert(data.Id);
            console.log(data);
        }, function (err) {
            if (err.error instanceof Error) {
                alert('Error al consumir el servicio: ' + err.message);
            }
            else {
                alert('Error local: ' + err.message);
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="Digite el usuario" [(ngModel)]="Nombre" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Digite ela clave" [(ngModel)]="Clave"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button (click)="Ingresar()">Aceptar</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaPublicacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NuevaPublicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevaPublicacionPage = /** @class */ (function () {
    function NuevaPublicacionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NuevaPublicacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevaPublicacionPage');
    };
    NuevaPublicacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nueva-publicacion',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/nueva-publicacion/nueva-publicacion.html"*/'<!--\n  Generated template for the NuevaPublicacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>nueva_publicacion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/nueva-publicacion/nueva-publicacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NuevaPublicacionPage);
    return NuevaPublicacionPage;
}());

//# sourceMappingURL=nueva-publicacion.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_areas_areas__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_habilidades_habilidades__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_nueva_publicacion_nueva_publicacion__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_perfil_perfil__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_estudiante_estudiante__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profesor_profesor__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_publicaciones_publicaciones__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_inicio_inicio__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_areas_areas__["a" /* AreasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_habilidades_habilidades__["a" /* HabilidadesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nueva_publicacion_nueva_publicacion__["a" /* NuevaPublicacionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_estudiante_estudiante__["a" /* EstudiantePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profesor_profesor__["a" /* ProfesorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_publicaciones_publicaciones__["a" /* PublicacionesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/areas/areas.module#AreasPageModule', name: 'AreasPage', segment: 'areas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estudiante/estudiante.module#EstudiantePageModule', name: 'EstudiantePage', segment: 'estudiante', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/habilidades/habilidades.module#HabilidadesPageModule', name: 'HabilidadesPage', segment: 'habilidades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nueva-publicacion/nueva-publicacion.module#NuevaPublicacionPageModule', name: 'NuevaPublicacionPage', segment: 'nueva-publicacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publicaciones/publicaciones.module#PublicacionesPageModule', name: 'PublicacionesPage', segment: 'publicaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profesor/profesor.module#ProfesorPageModule', name: 'ProfesorPage', segment: 'profesor', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_areas_areas__["a" /* AreasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_habilidades_habilidades__["a" /* HabilidadesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nueva_publicacion_nueva_publicacion__["a" /* NuevaPublicacionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_estudiante_estudiante__["a" /* EstudiantePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profesor_profesor__["a" /* ProfesorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_publicaciones_publicaciones__["a" /* PublicacionesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicaciones_publicaciones__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AreasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AreasPage = /** @class */ (function () {
    function AreasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AreasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AreasPage');
    };
    AreasPage.prototype.publicacionesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__publicaciones_publicaciones__["a" /* PublicacionesPage */]);
    };
    AreasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-areas',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/areas/areas.html"*/'<!--\n  Generated template for the AreasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Áreas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label>Matemáticas</ion-label>\n        <ion-toggle value="mat" checked="false" color="energized"></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <ion-label>Sociales</ion-label>\n        <ion-toggle value="soc" checked="false" color="royal"></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <ion-label>Ciencias Naturales</ion-label>\n        <ion-toggle value="nat" checked="false" color="secondary"></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <ion-label>Música</ion-label>\n        <ion-toggle value="mus" checked="false" color="energized"></ion-toggle>\n    </ion-item>\n    <button ion-fab (click)="publicacionesPage()">Publicaciones</button>    \n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/areas/areas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AreasPage);
    return AreasPage;
}());

//# sourceMappingURL=areas.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PublicacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicacionesPage = /** @class */ (function () {
    function PublicacionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PublicacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublicacionesPage');
    };
    PublicacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-publicaciones',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/publicaciones/publicaciones.html"*/'<!--\n  Generated template for the PublicacionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Publicaciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <!-- this fab is placed at bottom right -->\n <ion-fab center middle >\n    <button ion-fab>Ver</button>\n    <ion-fab-list side="top">\n      <button ion-fab>Ene19</button>\n      <button ion-fab>Feb19</button>\n      <button ion-fab>Mar19</button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab>Ant.</button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/publicaciones/publicaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PublicacionesPage);
    return PublicacionesPage;
}());

//# sourceMappingURL=publicaciones.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Bienvenido a ApeN</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <page-login></page-login>\n</ion-content>\n'/*ion-inline-end:"/Users/urielmartinez/Documents/FS/Retogrupo135/G130_APEN/G130_APEN/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map