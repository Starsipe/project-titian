(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  width: 30%;\n  margin: auto;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    /* foods: any;
    path = 'http://localhost:3000/p'; */
    function AppComponent(http) {
        this.http = http;
        this.title = 'Project-titan';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.getPosts();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _foods_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./foods.service */ "./src/app/foods.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_create_form_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/create/form/form.component */ "./src/app/components/create/form/form.component.ts");
/* harmony import */ var _components_list_dialograte_dialograte_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/list/dialograte/dialograte.component */ "./src/app/components/list/dialograte/dialograte.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
var routes = [
    { path: 'create', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"] },
    { path: 'edit/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_16__["EditComponent"] },
    { path: 'list', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_18__["NotfoundComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_16__["EditComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"],
                _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_18__["NotfoundComponent"],
                _components_create_form_form_component__WEBPACK_IMPORTED_MODULE_19__["FormComponent"],
                _components_list_dialograte_dialograte_component__WEBPACK_IMPORTED_MODULE_20__["DialograteComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(
                // Initialize Firebase
                {
                    apiKey: 'AIzaSyAw6HRPPUD0LCNVP4thQJWtik_yF1SjMDY',
                    authDomain: 'starsipe-8cb0e.firebaseapp.com',
                    databaseURL: 'https://starsipe-8cb0e.firebaseio.com',
                    projectId: 'starsipe-8cb0e',
                    storageBucket: 'starsipe-8cb0e.appspot.com',
                    messagingSenderId: '412941641518'
                }),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
            ],
            providers: [_foods_service__WEBPACK_IMPORTED_MODULE_12__["FoodsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            entryComponents: [_components_list_dialograte_dialograte_component__WEBPACK_IMPORTED_MODULE_20__["DialograteComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-card-wrapper\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Lägg till data</mat-card-title>\n      <mat-card-subtitle ng-app=\"myApp\" ng-controller=\"datCtrl\">\n        {{ today | date }}\n      </mat-card-subtitle>\n    </mat-card-header>\n\n    <app-form></app-form>\n    \n  </mat-card>\n</div>\n\n    <script>\n    var app = angular.module('myApp', []);\n    app.controller('datCtrl', function($scope) {\n        $scope.today = new Date();\n    });\n    </script>\n"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateComponent = /** @class */ (function () {
    function CreateComponent() {
        this.today = Date.now();
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/create/form/form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/create/form/form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n#rating {\n  width: 70px;\n}\n#restaurant {\n  width: 150px;\n}\n#successText {\n  color: #42A948;\n}\n"

/***/ }),

/***/ "./src/app/components/create/form/form.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/create/form/form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [hidden]=\"submitted\">\n    <h1>Ny mat</h1>\n\n    <div [hidden]=\"!success || submitted\">\n        <h4 id=\"successText\">Successfully submitted to the database</h4>\n    </div>\n\n    <form (ngSubmit)=\"onSubmit()\" #foodForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"_name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\"\n               autocomplete=\"off\"\n               autofocus\n               required\n               [(ngModel)]=\"_name\" name=\"name\"\n               #name=\"ngModel\">\n        <div [hidden]=\"name.valid || name.pristine\"\n             class=\"alert alert-danger\" > <!-- Class => Design of red box-->\n          Name is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"_rating\">Rating</label>\n        <input type=\"number\" class=\"form-control\" id=\"rating\"\n                required\n                min=\"0\" max=\"10\" step=\"1\"\n               [(ngModel)]=\"_rating\" name=\"rating\"\n               oninput=\"validity.valid||(value='');\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"_restaurant\">Restaurant</label>\n        <br>\n        <mat-select class=\"form-control\" required\n        [(ngModel)]=\"_restaurant\" name=\"restaurant\" id=\"restaurant\">\n          <mat-option value=Mocado>Mocado</mat-option>\n          <mat-option value=Sukaldari>Sukaldari</mat-option>\n          <mat-option value=Kebabhuset>Kebabhuset</mat-option>\n          <mat-option value=Foodtruck>Foodtruck</mat-option>\n        </mat-select>\n        <br>\n        <br>\n        <label>Always available? </label>\n        <mat-checkbox\n        [(ngModel)]=\"_available\" name=\"available\" id=\"available\"></mat-checkbox>\n      </div>\n\n      <button type=\"submit\"\n      class=\"btn btn-success\"\n      [disabled]=\"!foodForm.form.valid\">Submit</button>\n    </form>\n\n  </div>\n\n  <div [hidden]=\"!submitted\">\n    <h2>You submitted the following:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Name</div>\n      <div class=\"col-xs-9\">{{ _name }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Rating</div>\n      <div class=\"col-xs-9\">{{ _rating }}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-3\">Restaurant</div>\n        <div class=\"col-xs-9\">{{ _restaurant }}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-3\">Is available everyday?</div>\n        <div class=\"col-xs-9\">{{ _available }}</div>\n    </div>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n\n    <button (click)=\"finalSubmit()\" class=\"btn btn-success\">Confirm</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/create/form/form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/create/form/form.component.ts ***!
  \**********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _foods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../foods.service */ "./src/app/foods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(myService) {
        this.myService = myService;
        this._name = '';
        this._restaurant = '';
        this._available = false;
        this.submitted = false;
        this.success = false;
    }
    FormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.success = false;
    };
    FormComponent.prototype.finalSubmit = function () {
        this.addToDB();
        this.success = true;
        this.submitted = false;
        this._name = '';
        this._rating = null;
        this._restaurant = '';
    };
    FormComponent.prototype.addToDB = function () {
        // console.log(this._name);
        // console.log(this._rating);
        // console.log(' added to database');
        this.myService.submitData(this._name, this._rating, this._restaurant, this._available);
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/components/create/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/components/create/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_foods_service__WEBPACK_IMPORTED_MODULE_1__["FoodsService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-card-wrapper\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Dagens topp 10</mat-card-title>\n      <mat-card-subtitle ng-app=\"myApp\" ng-controller=\"datCtrl\">\n        {{ today | date }}\n      </mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n\n    <script>\n    var app = angular.module('myApp', []);\n    app.controller('datCtrl', function($scope) {\n        $scope.today = new Date();\n    });\n    </script>\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = /** @class */ (function () {
    function EditComponent() {
        this.today = Date.now(); // Dagens datum
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/list/dialograte/dialograte.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/list/dialograte/dialograte.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n#rating {\n  width: 70px;\n}\n#successText {\n  color: #42A948;\n}\n"

/***/ }),

/***/ "./src/app/components/list/dialograte/dialograte.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/list/dialograte/dialograte.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Rate this food</h1>\n<div mat-dialog-content>\n    <div [hidden]=\"!submitted\">\n        <h4 id=\"successText\">Successfully submitted your rating</h4>\n    </div>\n\n    <form (ngSubmit)=\"onSubmit()\" #foodForm=\"ngForm\" >\n      <div class=\"form-group\">\n        <label for=\"_rating\">Rating</label>\n        <input type=\"number\" class=\"form-control\" id=\"rating\"\n                required\n                min=\"0\" max=\"10\" step=\"1\"\n               [(ngModel)]=\"_rating\" name=\"rating\"\n               oninput=\"validity.valid||(value='');\">\n      </div>\n      <button type=\"submit\"\n      class=\"btn btn-success\"\n      [disabled]=\"!foodForm.form.valid || submitted\">Submit</button>\n    </form>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/list/dialograte/dialograte.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/list/dialograte/dialograte.component.ts ***!
  \********************************************************************/
/*! exports provided: DialograteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialograteComponent", function() { return DialograteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _foods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../foods.service */ "./src/app/foods.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DialograteComponent = /** @class */ (function () {
    function DialograteComponent(myService, data, cookieService) {
        this.myService = myService;
        this.cookieService = cookieService;
        this.submitted = false;
        this.food = data;
    }
    DialograteComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.myService.addRating(this._rating, this.food);
        this.onRate();
    };
    DialograteComponent.prototype.ngOnInit = function () {
        this.cookieValue = this.cookieService.get(this.food._id);
        if (this.cookieValue == "1") {
            this.submitted = true;
            //this.submitted == false;
        }
    };
    DialograteComponent.prototype.onRate = function () {
        this.cookieService.set(this.food._id, '1');
        this.cookieValue = this.cookieService.get(this.food._id);
        if (this.cookieValue == "1") {
            this.submitted = true;
        }
    };
    DialograteComponent.prototype.clearCookies = function () {
        this.cookieService.set(this.food._id, '0');
        this.cookieValue = this.cookieService.get(this.food._id);
        this.submitted = false;
    };
    DialograteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialograte',
            template: __webpack_require__(/*! ./dialograte.component.html */ "./src/app/components/list/dialograte/dialograte.component.html"),
            styles: [__webpack_require__(/*! ./dialograte.component.css */ "./src/app/components/list/dialograte/dialograte.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_foods_service__WEBPACK_IMPORTED_MODULE_2__["FoodsService"], Object, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], DialograteComponent);
    return DialograteComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-card-wrapper {\n  width:98%;\n  margin: auto;\n /* display: block;*/\n  border: 1px solid black;\n  /*margin: auto;*/\n}\n\n.list-card{\n  /*border: 2px solid red;*/\n  float: left;\n  width: 30%;\n  margin: 15px;\n}\n\n.list-card-trucks{\n  /*border: 2px solid red;*/\n  /*float: left;*/\n  width: 100%;\n  margin: auto;\n}\n\n.list-card-wrapper-trucks{\n  border: 2px solid red;\n  display: inline-flex;\n  /*float: left;*/\n  width: 100%;\n  margin: auto;\n}\n\n.list-title {\n  text-align: center;\n}\n\n.right {\n  float: right;\n  padding: 5px;\n}\n\n.food-card {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.food-card:hover {\n /* width: 50%;\n  margin: auto;\n  margin-bottom: 20px;*/\n  background-color: bisque;\n}\n\n@media only screen and (max-width: 600px) {\n  .list-card-wrapper {\n    width: 90%;\n    margin: auto;\n  }\n  .food-card {\n    width: 90%;\n    margin: auto;\n    margin-bottom: 20px;\n  }\n  .food-card:hover {\n    width: 90%;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-card-wrapper\">\n  <div class=\"list-card\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>Zenit</mat-card-title>\n        <mat-card-subtitle ng-app=\"myApp\" ng-controller=\"datCtrl\">\n          {{ today | date }}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card *ngFor=\"let food of zenitFoods\" class=\"food-card\">\n          <mat-card-subtitle>\n              {{food.restaurant}}\n          </mat-card-subtitle>\n        <span>{{food.name}}</span>\n        <mat-icon class=\"right\">favorite</mat-icon>\n        <span *ngIf=\"food.ratingAvg != 0\" class=\"right\">{{food.ratingAvg | number : '1.1-1'}}</span>\n        <span *ngIf=\"food.ratingAvg == 0\" class=\"right\">-</span>\n        <mat-card-actions>\n            <button mat-button [disabled]=\"rated(food._id)\" (click)=\"openRateDialog(food)\">RATE</button>\n          </mat-card-actions>\n      </mat-card>\n    </mat-card>\n  </div>\n\n  <div class=\"list-card\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>Dagens topp 10</mat-card-title>\n        <mat-card-subtitle ng-app=\"myApp\" ng-controller=\"datCtrl\">\n          {{ today | date }}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card *ngFor=\"let food of foods\" class=\"food-card\">\n          <mat-card-subtitle>\n              {{food.restaurant}}\n          </mat-card-subtitle>\n        <span>{{food.name}}</span>\n        <mat-icon class=\"right\">favorite</mat-icon>\n        <span class=\"right\">{{food.ratingAvg | number : '1.1-1'}}</span>\n        <span *ngIf=\"food.available == false\" class=\"right\"><b style=\"color:red\">Not available</b></span>\n        <mat-card-actions>\n            <button mat-button [disabled]=\"rated(food._id)\" (click)=\"openRateDialog(food)\">RATE</button>\n          </mat-card-actions>\n      </mat-card>\n    </mat-card>\n  </div>\n\n  <div class=\"list-card\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>Kårallen</mat-card-title>\n        <mat-card-subtitle ng-app=\"myApp\" ng-controller=\"datCtrl\">\n          {{ today | date }}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card *ngFor=\"let food of karallenFoods\" class=\"food-card\">\n         <mat-card-subtitle>\n              {{food.restaurant}}\n          </mat-card-subtitle>\n        <span>{{food.name}}</span>\n        <mat-icon class=\"right\">favorite</mat-icon>\n        <span *ngIf=\"food.ratingAvg != 0\" class=\"right\">{{food.ratingAvg | number : '1.1-1'}}</span>\n        <span *ngIf=\"food.ratingAvg == 0\" class=\"right\">-</span>\n        <mat-card-actions>\n            <button mat-button [disabled]=\"rated(food._id)\" (click)=\"openRateDialog(food)\">RATE</button>\n          </mat-card-actions>\n      </mat-card>\n    </mat-card>\n  </div>\n\n<div class=\"list-card-wrapper-trucks\">\n  <mat-card class=\"list-card-trucks\">\n    <mat-card-header>\n      <mat-card-title>Dagens Foodtrucks</mat-card-title>\n        <mat-card-subtitle ng-app=\"myApp\" ng-controller=\"datCtrl\">\n            {{ today | date }}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <div *ngFor=\"let truck of [\n      foodTruckFoods,\n      mocadoFoods,\n      kebabHusetFoods]\" class=\"list-card\">\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>{{truck[0].restaurant}}</mat-card-title>\n            <mat-card-subtitle ng-app=\"myApp\" ng-controller=\"datCtrl\">\n             {{ today | date }}\n            </mat-card-subtitle>\n          </mat-card-header>\n          <mat-card *ngFor=\"let food of truck\" class=\"food-card\">\n            <mat-card-subtitle>\n                  {{food.restaurant}}\n              </mat-card-subtitle>\n            <span>{{food.name}}</span>\n            <mat-icon class=\"right\">favorite</mat-icon>\n            <span *ngIf=\"food.ratingAvg != 0\" class=\"right\">{{food.ratingAvg | number : '1.1-1'}}</span>\n            <span *ngIf=\"food.ratingAvg == 0\" class=\"right\">-</span>\n            <mat-card-actions>\n                <button mat-button [disabled]=\"rated(food._id)\" (click)=\"openRateDialog(food)\">RATE</button>\n            </mat-card-actions>\n          </mat-card>\n        </mat-card>\n      </div>\n  </mat-card>\n</div>\n\n  </div>\n\n    <script>\n    var app = angular.module('myApp', []);\n    app.controller('datCtrl', function($scope) {\n        $scope.today = new Date();\n    });\n    </script>\n"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _foods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../foods.service */ "./src/app/foods.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialograte_dialograte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialograte/dialograte.component */ "./src/app/components/list/dialograte/dialograte.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListComponent = /** @class */ (function () {
    function ListComponent(myService, dialog, cookieService) {
        this.myService = myService;
        this.dialog = dialog;
        this.cookieService = cookieService;
        this.today = Date.now();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ListComponent.prototype.openRateDialog = function (foodObj) {
        var _this = this;
        var dialog = this.dialog.open(_dialograte_dialograte_component__WEBPACK_IMPORTED_MODULE_3__["DialograteComponent"], {
            width: '250px',
            data: foodObj
        });
        dialog.afterClosed().subscribe(function () {
            console.log('dialog closed');
            _this.getData(); // refresh data
        });
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.myService.getTop10().subscribe(function (data) { return _this.foods = data; }); // Hämtar data från Service
        this.myService.getKarallen().subscribe(function (data) { return _this.karallenFoods = data; }); // Hämtar data från Service
        this.myService.getZenit().subscribe(function (data) { return _this.zenitFoods = data; }); // Hämtar data från Service
        this.myService.getFoodtruck().subscribe(function (data) { return _this.foodTruckFoods = data; }); // Hämtar data från Service
        this.myService.getMocado().subscribe(function (data) { return _this.mocadoFoods = data; }); // Hämtar data från Service
        this.myService.getKebabHuset().subscribe(function (data) { return _this.kebabHusetFoods = data; }); // Hämtar data från Service
    };
    ListComponent.prototype.rated = function (foodId) {
        //return false;
        this.cookieValue = this.cookieService.get(foodId);
        if (this.cookieValue == "1") {
            return true;
        }
        else {
            return false;
        }
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_foods_service__WEBPACK_IMPORTED_MODULE_1__["FoodsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.uid | async as uid; else login\">\n\n  The user is logged in {{uid}}\n  <div *ngIf=\"user.isAdmin | async\">\n    The user is admin\n  </div>\n  <div>\n    <button (click)=\"user.logout()\">Logout</button>\n  </div>\n</div>\n<ng-template #login>\n  You need to login: <button (click)=\"user.login()\">Login</button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(user) {
        this.user = user;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/components/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/foods.service.ts":
/*!**********************************!*\
  !*** ./src/app/foods.service.ts ***!
  \**********************************/
/*! exports provided: FoodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodsService", function() { return FoodsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// Service for passing data to node and mongodb
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodsService = /** @class */ (function () {
    function FoodsService(http) {
        this.http = http;
        this.top10Path = 'http://localhost:3000/getTop10';
        this.karallenPath = 'http://217.210.174.92:3000/getKarallen';
        this.zenitPath = 'http://0.0.0.0:3000/getZenit';
        this.foodTruckPath = 'http://localhost:3000/getFoodTruck';
        this.mocadoPath = 'http://localhost:3000/getMocado';
        this.kebabHusetPath = 'http://localhost:3000/getKebabHuset';
    }
    FoodsService.prototype.getTop10 = function () {
        return this.http.get(this.top10Path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    FoodsService.prototype.getKarallen = function () {
        return this.http.get(this.karallenPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    FoodsService.prototype.getZenit = function () {
        return this.http.get(this.zenitPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    FoodsService.prototype.getFoodtruck = function () {
        return this.http.get(this.foodTruckPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    FoodsService.prototype.getMocado = function () {
        return this.http.get(this.mocadoPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    FoodsService.prototype.getKebabHuset = function () {
        return this.http.get(this.kebabHusetPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    FoodsService.prototype.submitData = function (name, rating, restaurant, available) {
        this.http.post('http://217.210.174.92:3000/create', {
            name: name,
            rating: rating,
            restaurant: restaurant,
            available: available,
        }).subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    FoodsService.prototype.addRating = function (rating, food_data) {
        this.http.post('http://localhost:3000/addRating', {
            rating: rating,
            id: food_data._id,
            ratingAvg: food_data.ratingAvg,
            restaurant: food_data.restaurant,
            name: food_data.name,
        })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    FoodsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FoodsService);
    return FoodsService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto;\n}\n\nmat-toolbar a {\n  display: inline-block;\n  margin: 0 10px;\n  color: white;\n  text-decoration: none;\n}\n\nmat-toolbar a:hover {\n  color: darkviolet;\n}\n\n.centrera {\n  width: 30%;\n  margin: auto;\n}\n\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <a routerLink=\"/\">Project Titan</a>\n  <div class=\"centrera\" >\n    <a routerLink=\"/create\">Create</a>\n    <a routerLink=\"/list\">List</a>\n    <a routerLink=\"/login\">Login</a>\n  </div>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(afAuth, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.uid = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (authState) {
            if (!authState) {
                return null;
            }
            else {
                return authState.uid;
            }
        }));
        this.isAdmin = this.uid.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (uid) {
            if (!uid) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
            }
            else {
                return _this.db.object('/admin/' + uid).valueChanges();
            }
        }));
    }
    UserService.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
    };
    UserService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/starsipe-project/project-titan/project-titian/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map