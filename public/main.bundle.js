webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adduser/adduser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adduser/adduser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"h1 text-center mt-4\" id=\"sectionHead\">Add User</h1>\n\n  <div id=\"addUserForm\" class=\"p-4 mx-auto\" @fadeIn>\n    <form [formGroup]=\"addUserForm\" (ngSubmit)=\"addUser()\">\n    <div class=\"form-group row\">\n      <label for=\"name\" class=\"col-sm-12 control-label\">Name</label>\n      <div class=\"col-sm-12\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n          </div>  \n          <input type=\"text\" class=\"form-control form-control-sm\" name=\"name\" formControlName=\"name\" id=\"name\"  placeholder=\"Enter your Name\"/>\n        </div>\n\n        <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"name.errors && name.touched\">\n          <p *ngIf=\"name.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Name is required.</p>\n          <p *ngIf=\"name.errors.minlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Name must be 5 characters long.</p>\n          <p *ngIf=\"name.errors.maxlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Name must be with in 60 characters.</p>\n        </div>\n      </div>\n    </div>\n\n\n\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-12 control-label\">Email</label>\n        <div class=\"col-sm-12\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n            </div>  \n            <input type=\"email\" class=\"form-control form-control-sm\" name=\"email\" formControlName=\"email\" id=\"email\"  placeholder=\"Enter your Email\"/>\n          </div>\n\n          <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"email.errors && email.touched\">\n            <p *ngIf=\"email.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Email is required.</p>\n            <p *ngIf=\"email.errors.email\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Not a valid email.</p>\n          </div>\n        </div>\n      </div>\n\n        <div class=\"form-group row\">\n          <label for=\"dob\" class=\"col-sm-12 control-label\">DOB</label>\n          <div class=\"col-sm-12\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n              </div>  \n              <input type=\"date\" class=\"form-control form-control-sm\" name=\"dob\" formControlName=\"dob\" id=\"dob\"  placeholder=\"Enter your DOB\"/>\n            </div>\n\n            <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"dob.errors && dob.touched\">\n              <p *ngIf=\"dob.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> This field is required.</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"phone\" class=\"col-sm-12 control-label\">Phone No</label>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                </div>  \n                <input type=\"text\" class=\"form-control form-control-sm\" name=\"phone\" formControlName=\"phone\" id=\"phone\" placeholder=\"Enter your Phone No\" (change)=\"genOnlyNum($event)\"/>\n              </div>\n\n              <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"phone.errors && phone.touched\">\n                <p *ngIf=\"phone.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Phone is required.</p>\n                <p *ngIf=\"phone.errors.pattern\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Not a Valid number.</p>\n                <p *ngIf=\"phone.errors.minlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Phone must be 10 characters long.</p>\n                <p *ngIf=\"phone.errors.maxlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Phone must be with in 15 characters.</p>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"city\" class=\"col-sm-12 control-label\">City</label>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                </div>  \n                <input type=\"text\" class=\"form-control form-control-sm\" name=\"city\" formControlName=\"city\" id=\"city\"  placeholder=\"Enter your City\"/>\n              </div>\n\n              <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"city.errors && city.touched\">\n                <p *ngIf=\"city.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> City is required.</p>\n                <p *ngIf=\"city.errors.minlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> City must be 2 characters long.</p>\n                <p *ngIf=\"city.errors.maxlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> City must be with in 40 characters.</p>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-sm-12 mt-3\">              \n            <input type=\"submit\" class=\"btn btn-block btn-info\" value=\"ADD\" [disabled]=\"!addUserForm.valid\"/>  \n          </div>\n        </div>\n      </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/adduser/adduser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdduserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(auth, flashMsg, router) {
        this.auth = auth;
        this.flashMsg = flashMsg;
        this.router = router;
    }
    AdduserComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createFormGroup();
    };
    AdduserComponent.prototype.createFormControls = function () {
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(60)
        ]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email
        ]);
        this.dob = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        // let numPatt = "/^[0-9]*$/g";
        this.phone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(15)
        ]);
        this.city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(40)
        ]);
    };
    AdduserComponent.prototype.createFormGroup = function () {
        this.addUserForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: this.name,
            email: this.email,
            dob: this.dob,
            phone: this.phone,
            city: this.city,
        });
    };
    AdduserComponent.prototype.addUser = function () {
        var _this = this;
        this.genOnlyNum(event);
        var newUser = this.addUserForm.value;
        // console.log(newUser);
        this.auth.registerUser(newUser).subscribe(function (data) {
            // console.log(data.success);
            if (data.success) {
                _this.flashMsg.show("Success: " + data.msg, { cssClass: 'alert alert-success text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000 });
                _this.router.navigate(['/userList']);
            }
            else {
                _this.flashMsg.show("Error: " + data.msg, { cssClass: 'alert alert-danger text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000 });
                _this.router.navigate(['/addUser']);
            }
        });
        // console.log(this.addUserForm);
    };
    AdduserComponent.prototype.genOnlyNum = function (event) {
        if (event.target.value == '') {
        }
        else {
            var num = this.auth.extractNumFromStr(this.addUserForm.value.phone);
            // console.log("input val : "+ this.addUserForm.value.phone);
            // console.log("output val : "+ num);
            this.addUserForm.value.phone = num;
            event.target.value = num;
        }
    };
    AdduserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adduser',
            template: __webpack_require__("./src/app/adduser/adduser.component.html"),
            styles: [__webpack_require__("./src/app/adduser/adduser.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_5__animations__["a" /* fadeIn */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return listAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var fadeIn = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('fadeIn', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
            opacity: 0
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500)
    ])
]);
var listAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('listAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])('50ms', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: 'translateX(-30%)', offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: .5, transform: 'translateX(0)', offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
            ]))
        ]), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])('50ms', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: .5, transform: 'translateX(0)', offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: 'translateX(-30%)', offset: 1.0 }),
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- menubar -->\n<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<!-- components -->\n<div class=\"container\">      \n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__notfound_notfound_component__ = __webpack_require__("./src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__adduser_adduser_component__ = __webpack_require__("./src/app/adduser/adduser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__userlist_userlist_component__ = __webpack_require__("./src/app/userlist/userlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edituser_edituser_component__ = __webpack_require__("./src/app/edituser/edituser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__upload_profile_pic_upload_profile_pic_component__ = __webpack_require__("./src/app/upload-profile-pic/upload-profile-pic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    { path: 'addUser', component: __WEBPACK_IMPORTED_MODULE_14__adduser_adduser_component__["a" /* AdduserComponent */] },
    { path: 'userList', component: __WEBPACK_IMPORTED_MODULE_15__userlist_userlist_component__["a" /* UserlistComponent */] },
    { path: 'editUser/:id', component: __WEBPACK_IMPORTED_MODULE_16__edituser_edituser_component__["a" /* EdituserComponent */] },
    { path: 'uploadProfilePic/:id', component: __WEBPACK_IMPORTED_MODULE_18__upload_profile_pic_upload_profile_pic_component__["a" /* UploadProfilePicComponent */] }
    // {path:'**', component: NotfoundComponent}
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__notfound_notfound_component__["a" /* NotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__adduser_adduser_component__["a" /* AdduserComponent */],
                __WEBPACK_IMPORTED_MODULE_15__userlist_userlist_component__["a" /* UserlistComponent */],
                __WEBPACK_IMPORTED_MODULE_16__edituser_edituser_component__["a" /* EdituserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__upload_profile_pic_upload_profile_pic_component__["a" /* UploadProfilePicComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__["FileUploadModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "      <div class=\"rounded\">\n        <h5 class=\"h5\">\n          <span><i class=\"fas fa-exclamation-circle text-danger\"></i></span>\n          Delete Confirmation\n        </h5>\n      </div>\n\n      <hr>\n\n      <div class=\"\">\n        <p class=\"pl-4\">Are you sure want to delete this user ? </p>\n      </div>\n\n      <div class=\"text-right\">\n        <button type=\"button\" class=\"btn btn-primary dialogBtnStyle\" (click)=\"onCloseConfirm()\">Confirm</button>\n        <button type=\"button\" class=\"btn btn-secondary dialogBtnStyle ml-2\" (click)=\"onCloseCancel()\">Close</button>\n      </div>\n    \n"

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.onCloseConfirm = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent.prototype.onCloseCancel = function () {
        this.dialogRef.close(false);
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/edituser/edituser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edituser/edituser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"h1 text-center mt-4\" id=\"sectionHead\">Edit User</h1>\n\n  <div id=\"editUserForm\" class=\"p-4 mx-auto\" @fadeIn>\n    <form [formGroup]=\"editUserForm\" (ngSubmit)=\"updateUser(userValue._id)\">\n    <!-- \n      Name input field...  \n    -->\n    <div class=\"form-group row\">\n      <label for=\"name\" class=\"col-sm-12 control-label\">Name</label>\n      <div class=\"col-sm-12\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n          </div>  \n          <input type=\"text\" class=\"form-control form-control-sm\" name=\"name\" formControlName=\"name\" id=\"name\" [(ngModel)]=\"userValue.name\"/>\n        </div>\n\n        <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"name.errors\">\n          <p *ngIf=\"name.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Name is required.</p>\n          <p *ngIf=\"name.errors.minlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Name must be 5 characters long.</p>\n          <p *ngIf=\"name.errors.maxlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Name must be with in 60 characters.</p>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- \n      Email input field...  \n    -->\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-12 control-label\">Email</label>\n        <div class=\"col-sm-12\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n            </div>  \n            <input type=\"email\" class=\"form-control form-control-sm\" name=\"email\" formControlName=\"email\" id=\"email\" [(ngModel)]=\"userValue.email\"/>\n          </div>\n\n          <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"email.errors\">\n            <p *ngIf=\"email.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Email is required.</p>\n            <p *ngIf=\"email.errors.email\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Not a valid email.</p>\n          </div>\n        </div>\n      </div>\n\n\n    <!-- \n      DOB input field...  \n    -->\n\n        <div class=\"form-group row\">\n          <label for=\"dob\" class=\"col-sm-12 control-label\">DOB</label>\n          <div class=\"col-sm-12\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n              </div>  \n              <input type=\"date\" class=\"form-control form-control-sm\" name=\"dob\" formControlName=\"dob\" id=\"dob\" [(ngModel)]=\"userValue.dob\"/>\n            </div>\n\n            <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"dob.errors\">\n              <p *ngIf=\"dob.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> This field is required.</p>\n            </div>\n          </div>\n        </div>\n\n\n\n        <!-- \n        Phone input field...  \n        -->  \n        <div class=\"form-group row\">\n            <label for=\"phone\" class=\"col-sm-12 control-label\">Phone No</label>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                </div>  \n                <input type=\"number\" class=\"form-control form-control-sm\" name=\"phone\" formControlName=\"phone\" id=\"phone\" [(ngModel)]=\"userValue.phone\" (change)=\"genOnlyNum($event)\"/>\n              </div>\n\n              <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"phone.errors\">\n                <p *ngIf=\"phone.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Phone is required.</p>\n                <p *ngIf=\"phone.errors.minlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Phone must be 10 characters long.</p>\n                <p *ngIf=\"phone.errors.maxlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> Phone must be with in 15 characters.</p>\n              </div>\n            </div>\n        </div>\n\n\n      <!-- \n      City input field...  \n      -->\n\n        <div class=\"form-group row\">\n            <label for=\"city\" class=\"col-sm-12 control-label\">City</label>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                </div>  \n                <input type=\"text\" class=\"form-control form-control-sm\" name=\"city\" formControlName=\"city\" id=\"city\" [(ngModel)]=\"userValue.city\"/>\n              </div>\n\n              <div class=\"p-0 m-0 val-error text-danger\" *ngIf=\"city.errors\">\n                <p *ngIf=\"city.errors.required\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> City is required.</p>\n                <p *ngIf=\"city.errors.minlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> City must be 2 characters long.</p>\n                <p *ngIf=\"city.errors.maxlength\" class=\"ml-2 mb-0 pt-1 pb-0\"><span><i class=\"fas fa-exclamation-triangle\"></i></span> City must be with in 40 characters.</p>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-sm-12 mt-3\">              \n            <input type=\"submit\" class=\"btn btn-block btn-info\" value=\"UPDATE\" [disabled]=\"!editUserForm.valid\"/>  \n          </div>\n        </div>\n      </form>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/edituser/edituser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdituserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(auth, flashMsg, router, route) {
        this.auth = auth;
        this.flashMsg = flashMsg;
        this.router = router;
        this.route = route;
    }
    EdituserComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.showeditform(this.id);
        this.createFormControls();
        this.createFormGroup();
    };
    EdituserComponent.prototype.showeditform = function (id) {
        var _this = this;
        this.auth.editUser(id).subscribe(function (foundUser) {
            if (foundUser.success) {
                // console.log(foundUser.data);
                _this.userValue = foundUser.data;
                // console.log(this.userValue);
                // return this.name1;
            }
            else {
                _this.flashMsg.show("Error: " + foundUser.msg, { cssClass: 'alert alert-danger text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 5000 });
                _this.router.navigate(['/userList']);
            }
        });
    };
    EdituserComponent.prototype.updateUser = function (id) {
        var _this = this;
        this.genOnlyNum(event);
        var user = this.editUserForm.value;
        // console.log(user);
        // console.log(id);
        this.auth.updateUserService(id, user).subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show("SUCCESS !  " + data.msg, { cssClass: 'flashMessageBox', timeout: 6000 });
                _this.router.navigate(['/userList']);
            }
            else {
                _this.flashMsg.show("ERROR !  " + data.msg, { cssClass: 'flashMessageBox', timeout: 6000 });
                _this.router.navigate(['/userList']);
            }
        });
    };
    EdituserComponent.prototype.createFormControls = function () {
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(60)
        ]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email
        ]);
        this.dob = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(7)
        ]);
        this.phone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(15)
        ]);
        this.city = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(40)
        ]);
    };
    EdituserComponent.prototype.createFormGroup = function () {
        this.editUserForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: this.name,
            email: this.email,
            dob: this.dob,
            phone: this.phone,
            city: this.city,
        });
    };
    EdituserComponent.prototype.genOnlyNum = function (event) {
        if (event.target.value == '') {
        }
        else {
            var num = this.auth.extractNumFromStr(this.editUserForm.value.phone);
            // console.log("input val : "+ this.addUserForm.value.phone);
            // console.log("output val : "+ num);
            this.editUserForm.value.phone = num;
            event.target.value = num;
        }
    };
    EdituserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edituser',
            template: __webpack_require__("./src/app/edituser/edituser.component.html"),
            styles: [__webpack_require__("./src/app/edituser/edituser.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_5__animations__["a" /* fadeIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EdituserComponent);
    return EdituserComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 text-center mt-4\" id=\"homeHeading\">\n  Welcome To Home Page\n</h1>\n<p class=\"text-center text-muted mt-4\" id=\"homePagePara\">\n  This is a simple MEAN app CRUD application project with FORM VALIDATION and full RESPONSIVE Design. I used Routing, FormControl, FormGroup, ngModel, Validators, ReactiveFormsModule and Structural Directives like *ngIf and *ngFor and also FlashMessages. I also use MatDialogModule here for dialog box. For the back-end, I used EXPRESS Framework with MONGOOSE. At the end their is also a image upload section. You can set your profile image, for that i use MULTER. \n</p>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark px-4\">\n  <a class=\"navbar-brand pl-4\" routerLink=\"/\">MEAN-CRUD</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/\"><strong>Home</strong></a>\n      </li>      \n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/addUser\"><strong>Add User</strong></a>\n      </li>      \n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/userList\"><strong>Users List</strong></a>\n      </li>      \n    </ul>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__("./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__("./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    //add user service
    AuthService.prototype.registerUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header.set('Content-Type', 'application/json');
        return this.http.post('users/add', user, { headers: header }).map(function (res) { return res; });
    };
    //get user list service
    AuthService.prototype.getUsersList = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header.set('Content-Type', 'application/json');
        return this.http.get('users/userslist', { headers: header, responseType: 'text' }).map(function (res) { return res; });
    };
    //delete user service
    AuthService.prototype.delUser = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header.set('Content-Type', 'application/json');
        return this.http.delete('users/delete/' + id + '?_method=DELETE', { headers: header }).map(function (res) { return res; });
    };
    //edit user service
    AuthService.prototype.editUser = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header.set('Content-Type', 'application/json');
        return this.http.get('users/edit/' + id, { headers: header }).map(function (res) { return res; });
    };
    //update user service
    AuthService.prototype.updateUserService = function (id, user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header.set('Content-Type', 'application/json');
        return this.http.put('users/update/' + id + '?_method=PUT', user, { headers: header }).map(function (res) { return res; });
    };
    //String to number
    AuthService.prototype.extractNumFromStr = function (str) {
        var num = str.replace(/[^\d.]/g, '');
        return num;
    };
    //upload Picture service
    AuthService.prototype.uploadProfilePic = function (id, file) {
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpRequest */]('POST', 'users/uploadPic/' + id, file, {
            reportProgress: true
        });
        return this.http.request(req).map(function (res) { return res; });
    };
    AuthService.prototype.getExtension = function (type) {
        var ext = type.substring(type.lastIndexOf('/') + 1, type.length);
        if (ext == 'jpeg') {
            ext = 'jpg';
        }
        return ext;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/upload-profile-pic/upload-profile-pic.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upload-profile-pic/upload-profile-pic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> <br />\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\"><strong>Upload files</strong> <small> </small></div>\n\n      <div class=\"panel-body\">\n        <form (ngSubmit)=\"onUpload($event)\">\n        <div class=\"input-group image-preview\">\n          \n          <input \n            type=\"fileName\" \n            class=\"form-control image-preview-filename\"\n            [(ngModel)]=\"fileName\" \n            [ngModelOptions]=\"{standalone: true}\"\n            disabled=\"disabled\"\n          >\n          <!-- don't give a name === doesn't send on POST/GET --> \n          <span class=\"input-group-btn\"> \n            <!-- image-preview-clear button -->\n            <button type=\"button\" (click)=\"reset()\" class=\"btn btn-default image-preview-clear\" *ngIf=\"fileName\"> <span class=\"glyphicon glyphicon-remove\"></span> Clear </button>\n            <!-- image-preview-input -->\n            \n            <div class=\"btn btn-default image-preview-input\"> \n              <span class=\"glyphicon glyphicon-folder-open\"></span> \n              <span class=\"image-preview-input-title\">Browse</span>\n\n              <input type=\"file\" name=\"uploadedProfilePic\" (change)=\"onFileSelected($event)\"/>\n              <!-- rename it --> \n            </div>\n\n            <button type=\"submit\" class=\"btn btn-labeled btn-primary\"> \n              <span class=\"btn-label\">\n                <i class=\"glyphicon glyphicon-upload\"></i> \n              </span>Upload\n            </button>          \n          </span>         \n        </div>\n      </form>\n          <!-- /input-group image-preview [TO HERE]--> \n        \n        <br />\n        \n        <!-- Drop Zone -->\n        <div class=\"upload-drop-zone\" id=\"drop-zone\"> Or drag and drop files here </div>\n        <br />\n        <!-- Progress Bar -->\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"progressBarValue\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': progressBarValue+'%'}\">\n          </div>\n        </div>\n        <br />\n\n      </div>\n    </div>\n  </div>\n      \n      \n      \n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/upload-profile-pic/upload-profile-pic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadProfilePicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadProfilePicComponent = /** @class */ (function () {
    function UploadProfilePicComponent(auth, flashMsg, router, route) {
        this.auth = auth;
        this.flashMsg = flashMsg;
        this.router = router;
        this.route = route;
    }
    UploadProfilePicComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.progressBarValue = 0;
    };
    UploadProfilePicComponent.prototype.onFileSelected = function (e) {
        // console.log(e);
        this.fileName = e.target.files[0].name;
        this.ext = this.auth.getExtension(e.target.files[0].type);
        this.file = e.target.files[0];
        // console.log(e.target.files[0].type);    
        // console.log(this.ext);    
    };
    UploadProfilePicComponent.prototype.reset = function () {
        // window.location.reload();
        this.router.navigate(['/userList']);
    };
    UploadProfilePicComponent.prototype.onUpload = function (e) {
        // console.log(e);
        var _this = this;
        var uploadData = new FormData();
        uploadData.append("uploadedProfilePic", this.file);
        this.auth.uploadProfilePic(this.id, uploadData).subscribe(function (data) {
            if (data.type == 1) {
                // console.log(Math.round(data.loaded*100/data.total));
                _this.progressBarValue = Math.round(data.loaded * 100 / data.total);
            }
            setTimeout(function () {
                if (data.type == 4) {
                    // console.log(data);
                    var updateData = { avatar: "uploadedProfilePic" + _this.id + '.' + _this.ext };
                    if (data.body.success) {
                        _this.auth.updateUserService(_this.id, updateData).subscribe(function (data) {
                            // console.log(data);
                            if (data.success) {
                                _this.flashMsg.show("Success: " + data.msg, { cssClass: 'alert alert-success text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000 });
                                _this.router.navigate(['/userList']);
                            }
                            else {
                                _this.flashMsg.show("Error: " + data.msg, { cssClass: 'alert alert-danger text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000 });
                                // this.reset();
                                _this.router.navigate(['/userList']);
                            }
                        });
                    }
                    else {
                        _this.flashMsg.show("Error: " + data.body.msg, { cssClass: 'alert alert-danger text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000 });
                        // this.reset();
                        _this.router.navigate(['/userList']);
                    }
                }
            }, 2000);
        });
    };
    UploadProfilePicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-profile-pic',
            template: __webpack_require__("./src/app/upload-profile-pic/upload-profile-pic.component.html"),
            styles: [__webpack_require__("./src/app/upload-profile-pic/upload-profile-pic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UploadProfilePicComponent);
    return UploadProfilePicComponent;
}());



/***/ }),

/***/ "./src/app/userlist/userlist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userlist/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@listAnimation]=\"usersList\">\n  <h1 class=\"h1 text-center mt-4\" id=\"sectionHead\">Users List</h1>\n\n  <div *ngFor = \"let user of usersList\">\n    <div class=\"row mb-2 mx-auto\" id=\"showUserList\">\n\n      <div class=\"col-sm-2 p-0 text-center\">\n        \n        <img *ngIf=\"!user.avatar == ''\" src=\"{{photoBaseUrl}}/{{user.avatar}}\" class=\"img-thumbnail\" alt=\"user image\" id=\"profilePic1\">\n        <img *ngIf=\"user.avatar == ''\" src=\"{{photoBaseUrl}}/usergroup.png\" class=\"img-thumbnail\" alt=\"user image\" id=\"profilePic2\">\n        <div class=\"overlay\">\n          <p class=\"addPicText\" routerLink=\"/uploadProfilePic/{{user._id}}\">\n            <i class=\"far fa-user addPhIcon\"></i>\n            <br> \n            Update\n          </p>\n        </div>\n      </div>\n\n      <div class=\"col-sm-7\">\n        <div class=\"card-body py-0\">\n          <h5 class=\"card-title text-capitalize my-0 pt-1\">{{user.name}}</h5>\n          <p class=\"card-text text-muted p-0 m-0 font-sm\">Email : {{user.email}}</p>\n          <p class=\"card-text text-muted p-0 m-0 font-sm\">Phone : {{user.phone}}</p>\n          <p class=\"card-text text-muted p-0 m-0 text-capitalize font-sm\">Active : {{user.active}}</p>         \n        </div>\n      </div>\n\n      <div class=\"col-sm-3 pr-0 mr-0\">\n        <div class=\"w-75 mx-auto mt-2 text-uppercase\">\n          <p \n            routerLink=\"/editUser/{{user._id}}\" \n            class=\"btn btn-outline-primary btn-block btnStyleSuccess font-xs m-0 p-1 mb-1\">\n            <i class=\"far fa-edit\"></i> \n            Update\n          </p>\n          <p \n            (click)=\"openConfDialog(user._id)\" \n            class=\"btn btn-outline-primary btn-block btnStyleDanger font-xs m-0 p-1\">\n            <i class=\"far fa-trash-alt\"></i> \n            Delete\n          </p>\n        </div>        \n      </div>\n    </div>\n  </div> \n</div>  \n"

/***/ }),

/***/ "./src/app/userlist/userlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(auth, flashMsg, router, dialog) {
        this.auth = auth;
        this.flashMsg = flashMsg;
        this.router = router;
        this.dialog = dialog;
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.photoBaseUrl = '../assets/images';
    };
    UserlistComponent.prototype.getUsers = function () {
        var _this = this;
        this.auth.getUsersList().subscribe(function (data) {
            if (data.success) {
                // this.usersList.push(data.users);
                _this.usersList = data.users;
                console.log(_this.usersList);
                // console.log(this.photoBaseUrl);
                // console.log(this.usersList.length);      
            }
        });
    };
    UserlistComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.auth.delUser(id).subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show("Success: " + data.msg, { cssClass: 'alert alert-success text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000 });
                _this.getUsers();
            }
            else {
                _this.flashMsg.show("Error: " + data.msg, { cssClass: 'alert alert-danger text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000 });
            }
            _this.router.navigate(['/userList']);
        });
    };
    UserlistComponent.prototype.openConfDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {
            width: '500px',
            data: ''
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log (result);
            if (result) {
                _this.deleteUser(id);
            }
            else {
                _this.router.navigate(['/userList']);
            }
        });
    };
    UserlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__("./src/app/userlist/userlist.component.html"),
            styles: [__webpack_require__("./src/app/userlist/userlist.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_6__animations__["b" /* listAnimation */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map