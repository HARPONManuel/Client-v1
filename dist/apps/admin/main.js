(self["webpackChunkbluebits"] = self["webpackChunkbluebits"] || []).push([["main"],{

/***/ 2010:
/*!******************************************************************!*\
  !*** ./apps/admin/$_lazy_route_resources/ lazy namespace object ***!
  \******************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 2010;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 8564:
/*!**************************************************!*\
  !*** ./apps/admin/src/app/app-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/users */ 7295);
/* harmony import */ var _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/categories/categories-form/categories-form.component */ 5958);
/* harmony import */ var _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/categories/categories-list/categories-list.component */ 3098);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 8523);
/* harmony import */ var _pages_orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/orders/orders-detail/orders-detail.component */ 3668);
/* harmony import */ var _pages_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/orders/orders-list/orders-list.component */ 786);
/* harmony import */ var _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/products/products-form/products-form.component */ 4382);
/* harmony import */ var _pages_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/products/products-list/products-list.component */ 9323);
/* harmony import */ var _pages_users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/users/users-form/users-form.component */ 5854);
/* harmony import */ var _pages_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/users/users-list/users-list.component */ 7225);
/* harmony import */ var _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shell/shell.component */ 7862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7282);














const routes = [
    {
        path: '',
        component: _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_10__.ShellComponent,
        canActivate: [_bluebits_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: [
            {
                path: '',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent
            },
            {
                path: 'categories',
                component: _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesListComponent
            },
            {
                path: 'categories/form',
                component: _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesFormComponent
            },
            {
                path: 'categories/form/:id',
                component: _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesFormComponent
            },
            {
                path: 'products',
                component: _pages_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_7__.ProductsListComponent
            },
            {
                path: 'products/form',
                component: _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_6__.ProductsFormComponent
            },
            {
                path: 'products/form/:id',
                component: _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_6__.ProductsFormComponent
            },
            {
                path: 'users',
                component: _pages_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__.UsersListComponent
            },
            {
                path: 'users/form',
                component: _pages_users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_8__.UsersFormComponent
            },
            {
                path: 'users/form/:id',
                component: _pages_users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_8__.UsersFormComponent
            },
            {
                path: 'orders',
                component: _pages_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_5__.OrdersListComponent
            },
            {
                path: 'orders/:id',
                component: _pages_orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__.OrdersDetailComponent
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, { initialNavigation: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 7706:
/*!*********************************************!*\
  !*** ./apps/admin/src/app/app.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1207);


class AppComponent {
    constructor() {
        this.title = 'admin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["admin-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 4294:
/*!******************************************!*\
  !*** ./apps/admin/src/app/app.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ 7157);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ 6844);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9985);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 7706);
/* harmony import */ var _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shell/shell.component */ 7862);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ 649);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 8523);
/* harmony import */ var _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/categories/categories-list/categories-list.component */ 3098);
/* harmony import */ var _pages_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products/products-list/products-list.component */ 9323);
/* harmony import */ var _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/products/products-form/products-form.component */ 4382);
/* harmony import */ var _pages_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/users/users-list/users-list.component */ 7225);
/* harmony import */ var _pages_users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/users/users-form/users-form.component */ 5854);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bluebits/users */ 7295);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/card */ 6329);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toolbar */ 66);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 3299);
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bluebits/products */ 3935);
/* harmony import */ var _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/categories/categories-form/categories-form.component */ 5958);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 4468);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 7966);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/api */ 6319);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/confirmdialog */ 987);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/colorpicker */ 8568);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputnumber */ 2945);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ 6255);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputtextarea */ 5604);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/inputswitch */ 4389);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/editor */ 8894);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/tag */ 5590);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/inputmask */ 3130);
/* harmony import */ var _pages_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/orders/orders-list/orders-list.component */ 786);
/* harmony import */ var _pages_orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/orders/orders-detail/orders-detail.component */ 3668);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/fieldset */ 1173);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ 8564);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngrx/store */ 743);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngrx/effects */ 9496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 7282);









































const UX_MODULE = [
    primeng_card__WEBPACK_IMPORTED_MODULE_15__.CardModule,
    primeng_toast__WEBPACK_IMPORTED_MODULE_16__.ToastModule,
    primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule,
    primeng_table__WEBPACK_IMPORTED_MODULE_18__.TableModule,
    primeng_toolbar__WEBPACK_IMPORTED_MODULE_19__.ToolbarModule,
    primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule,
    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule,
    primeng_colorpicker__WEBPACK_IMPORTED_MODULE_22__.ColorPickerModule,
    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumberModule,
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.DropdownModule,
    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__.InputTextareaModule,
    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_26__.InputSwitchModule,
    primeng_editor__WEBPACK_IMPORTED_MODULE_27__.EditorModule,
    primeng_tag__WEBPACK_IMPORTED_MODULE_28__.TagModule,
    primeng_inputmask__WEBPACK_IMPORTED_MODULE_29__.InputMaskModule,
    primeng_fieldset__WEBPACK_IMPORTED_MODULE_30__.FieldsetModule
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ providers: [
        _bluebits_products__WEBPACK_IMPORTED_MODULE_10__.CategoriesService,
        primeng_api__WEBPACK_IMPORTED_MODULE_32__.MessageService,
        primeng_api__WEBPACK_IMPORTED_MODULE_32__.ConfirmationService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HTTP_INTERCEPTORS, useClass: _bluebits_users__WEBPACK_IMPORTED_MODULE_9__.JwtInterceptor, multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_36__.StoreModule.forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__.EffectsModule.forRoot([]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
            _bluebits_users__WEBPACK_IMPORTED_MODULE_9__.UsersModule,
            ...UX_MODULE
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent,
        _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__.ShellComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
        _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__.CategoriesListComponent,
        _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_11__.CategoriesFormComponent,
        _pages_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent,
        _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_6__.ProductsFormComponent,
        _pages_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__.UsersListComponent,
        _pages_users_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_8__.UsersFormComponent,
        _pages_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_12__.OrdersListComponent,
        _pages_orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_13__.OrdersDetailComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__.EffectsRootModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
        _bluebits_users__WEBPACK_IMPORTED_MODULE_9__.UsersModule, primeng_card__WEBPACK_IMPORTED_MODULE_15__.CardModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_16__.ToastModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_18__.TableModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_19__.ToolbarModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule,
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_22__.ColorPickerModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumberModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.DropdownModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__.InputTextareaModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_26__.InputSwitchModule,
        primeng_editor__WEBPACK_IMPORTED_MODULE_27__.EditorModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_28__.TagModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_29__.InputMaskModule,
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_30__.FieldsetModule] }); })();


/***/ }),

/***/ 5958:
/*!******************************************************************************************!*\
  !*** ./apps/admin/src/app/pages/categories/categories-form/categories-form.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesFormComponent": () => (/* binding */ CategoriesFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/products */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 131);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 6319);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 7966);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 6329);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toolbar */ 66);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 4468);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/colorpicker */ 8568);



















function CategoriesFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoriesFormComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Icon is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CategoriesFormComponent {
    constructor(messageService, formBuilder, categoriesService, location, route) {
        this.messageService = messageService;
        this.formBuilder = formBuilder;
        this.categoriesService = categoriesService;
        this.location = location;
        this.route = route;
        this.isSubmitted = false;
        this.editmode = false;
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            icon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            color: ['#fff']
        });
        this._checkEditMode();
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        const category = {
            id: this.currentCategoryId,
            name: this.categoryForm.name.value,
            icon: this.categoryForm.icon.value,
            color: this.categoryForm.color.value
        };
        if (this.editmode) {
            this._updateCategory(category);
        }
        else {
            this._addCategory(category);
        }
    }
    onCancle() {
        this.location.back();
    }
    _addCategory(category) {
        this.categoriesService
            .createCategory(category)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endsubs$))
            .subscribe((category) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: `Category ${category.name} is created!`
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(2000)
                .toPromise()
                .then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Category is not created!'
            });
        });
    }
    _updateCategory(category) {
        this.categoriesService
            .updateCategory(category)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endsubs$))
            .subscribe(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Category is updated!'
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(2000)
                .toPromise()
                .then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Category is not updated!'
            });
        });
    }
    _checkEditMode() {
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endsubs$)).subscribe((params) => {
            if (params.id) {
                this.editmode = true;
                this.currentCategoryId = params.id;
                this.categoriesService
                    .getCategory(params.id)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endsubs$))
                    .subscribe((category) => {
                    this.categoryForm.name.setValue(category.name);
                    this.categoryForm.icon.setValue(category.icon);
                    this.categoryForm.color.setValue(category.color);
                });
            }
        });
    }
    get categoryForm() {
        return this.form.controls;
    }
}
CategoriesFormComponent.ɵfac = function CategoriesFormComponent_Factory(t) { return new (t || CategoriesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
CategoriesFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesFormComponent, selectors: [["admin-categories-form"]], decls: 29, vars: 5, consts: [[1, "admin-page"], ["subheader", "You can add or edit categories here", 3, "header"], [1, "p-grid", "p-mb-5"], [1, "p-col-12"], [1, "p-toolbar-group-left"], [1, "p-toolbar-group-right"], ["styleClass", "p-button-primary p-mr-2", "icon", "pi pi-plus", 3, "label", "click"], ["styleClass", "p-button-secondary", "label", "Cancle", "icon", "pi pi-arrow-circle-left", 3, "click"], [1, "p-grid"], [3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", ""], ["class", "p-error", 4, "ngIf"], ["for", "icon"], ["formControlName", "icon", "id", "icon", "type", "text", "pInputText", ""], ["for", "color"], ["formControlName", "color"], [1, "p-error"]], template: function CategoriesFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesFormComponent_Template_p_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesFormComponent_Template_p_button_click_9_listener() { return ctx.onCancle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CategoriesFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CategoriesFormComponent_small_23_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "p-colorPicker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", ctx.editmode ? "Edit Category" : "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.editmode ? "Update" : "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.categoryForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.categoryForm.icon.invalid && ctx.isSubmitted);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_10__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_14__.ColorPicker], encapsulation: 2 });


/***/ }),

/***/ 3098:
/*!******************************************************************************************!*\
  !*** ./apps/admin/src/app/pages/categories/categories-list/categories-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesListComponent": () => (/* binding */ CategoriesListComponent)
/* harmony export */ });
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/products */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 6319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 7966);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 6329);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 66);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 3299);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8342);
















function CategoriesListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { color: a0 }; };
function CategoriesListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesListComponent_ng_template_12_Template_p_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const category_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteCategory(category_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesListComponent_ng_template_12_Template_p_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const category_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.updateCategory(category_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "pi-" + category_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, category_r2.color));
} }
const _c1 = function () { return { width: "50vw" }; };
class CategoriesListComponent {
    constructor(categoriesService, messageService, confirmationService, router) {
        this.categoriesService = categoriesService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.categories = [];
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getCategories();
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    deleteCategory(categoryId) {
        this.confirmationService.confirm({
            message: 'Do you want to Delete this Category?',
            header: 'Delete Category',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.categoriesService
                    .deleteCategory(categoryId)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
                    .subscribe(() => {
                    this._getCategories();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Category is deleted!'
                    });
                }, () => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Category is not deleted!'
                    });
                });
            }
        });
    }
    updateCategory(categoryid) {
        this.router.navigateByUrl(`categories/form/${categoryid}`);
    }
    _getCategories() {
        this.categoriesService
            .getCategories()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
            .subscribe((cats) => {
            this.categories = cats;
        });
    }
}
CategoriesListComponent.ɵfac = function CategoriesListComponent_Factory(t) { return new (t || CategoriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
CategoriesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesListComponent, selectors: [["admin-categories-list"]], decls: 14, vars: 5, consts: [[1, "admin-page"], ["header", "Categories", "subheader", "List of all categories"], [1, "p-grid"], [1, "p-col-12"], [1, "p-toolbar-group-left"], ["styleClass", "p-button-success", "label", "New", "icon", "pi pi-plus", "routerLink", "form"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["pSortableColumn", "name"], ["field", "name"], [1, "pi", 2, "font-size", "2rem", 3, "ngClass"], [1, "pi", "pi-circle-on", 2, "font-size", "2rem", 3, "ngStyle"], ["styleClass", "p-button-danger p-mr-2", "icon", "pi pi-trash", 3, "click"], ["styleClass", "p-button-success", "icon", "pi pi-pencil", 3, "click"]], template: function CategoriesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CategoriesListComponent_ng_template_11_Template, 9, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CategoriesListComponent_ng_template_12_Template, 10, 5, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-confirmDialog", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle], encapsulation: 2 });


/***/ }),

/***/ 8523:
/*!*******************************************************************!*\
  !*** ./apps/admin/src/app/pages/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/orders */ 475);
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/products */ 3935);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bluebits/users */ 7295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 6329);











function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "TotalSales");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.statistics[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.statistics[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.statistics[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 4, ctx_r0.statistics[3]));
} }
class DashboardComponent {
    constructor(userService, productService, ordersService) {
        this.userService = userService;
        this.productService = productService;
        this.ordersService = ordersService;
        this.statistics = [];
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.ordersService.getOrdersCount(),
            this.productService.getProductsCount(),
            this.userService.getUsersCount(),
            this.ordersService.getTotalSales()
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.endsubs$))
            .subscribe((values) => {
            this.statistics = values;
        });
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bluebits_users__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["admin-dashboard"]], decls: 1, vars: 1, consts: [["class", "admin-page", 4, "ngIf"], [1, "admin-page"], ["header", "Dashboard", "subheader", "Latest Updates"], [1, "p-grid"], [1, "p-col-3"], ["styleClass", "d-orders"], [1, "d-item"], [1, "pi", "pi-shopping-cart"], [1, "name"], [1, "number"], ["styleClass", "d-products"], [1, "pi", "pi-briefcase"], ["styleClass", "d-users"], [1, "pi", "pi-users"], ["styleClass", "d-totalsales"], [1, "pi", "pi-dollar"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 44, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.statistics.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_card__WEBPACK_IMPORTED_MODULE_8__.Card], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 3668:
/*!**********************************************************************************!*\
  !*** ./apps/admin/src/app/pages/orders/orders-detail/orders-detail.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersDetailComponent": () => (/* binding */ OrdersDetailComponent)
/* harmony export */ });
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/orders */ 475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 6319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 7966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 6329);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fieldset */ 1173);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 6255);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 7292);















function OrdersDetailComponent_div_1_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](orderItem_r2.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](orderItem_r2.product.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](orderItem_r2.product.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, orderItem_r2.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](orderItem_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, orderItem_r2.product.price * orderItem_r2.quantity));
} }
function OrdersDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-fieldset", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Order Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p-dropdown", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function OrdersDetailComponent_div_1_Template_p_dropdown_onChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onStatusChange($event); })("ngModelChange", function OrdersDetailComponent_div_1_Template_p_dropdown_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.selectedStatus = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Order Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p-fieldset", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, OrdersDetailComponent_div_1_div_39_Template, 15, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p-fieldset", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Order Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Customer Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "View Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 18, ctx_r0.order.dateOrdered, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.orderStatuses)("ngModel", ctx_r0.selectedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 21, ctx_r0.order.totalPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.order.orderItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 23, ctx_r0.order.totalPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.order.shippingAddress1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.order.shippingAddress2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.order.zip, " ", ctx_r0.order.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.order.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order.phone);
} }
class OrdersDetailComponent {
    constructor(orderService, messageService, route) {
        this.orderService = orderService;
        this.messageService = messageService;
        this.route = route;
        this.orderStatuses = [];
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._mapOrderStatus();
        this._getOrder();
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    _mapOrderStatus() {
        this.orderStatuses = Object.keys(_bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.ORDER_STATUS).map((key) => {
            return {
                id: key,
                name: _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.ORDER_STATUS[key].label
            };
        });
    }
    _getOrder() {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.orderService
                    .getOrder(params.id)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
                    .subscribe((order) => {
                    this.order = order;
                    this.selectedStatus = order.status;
                });
            }
        });
    }
    onStatusChange(event) {
        this.orderService
            .updateOrder({ status: event.value }, this.order.id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
            .subscribe(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Order is updated!'
            });
        }, () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Order is not updated!'
            });
        });
    }
}
OrdersDetailComponent.ɵfac = function OrdersDetailComponent_Factory(t) { return new (t || OrdersDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
OrdersDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersDetailComponent, selectors: [["admin-orders-detail"]], decls: 2, vars: 1, consts: [["class", "admin-page", 4, "ngIf"], [1, "admin-page"], ["subheader", "You can edit order status here", 3, "header"], ["legend", "Order Details", "styleClass", "p-mb-4", 3, "toggleable"], [1, "p-grid"], [1, "p-col-4"], ["optionLabel", "name", "optionValue", "id", 3, "options", "ngModel", "onChange", "ngModelChange"], ["legend", "Order Items", "styleClass", "p-mb-4", 3, "toggleable"], [1, "p-grid", "p-mb-5"], [1, "p-col-2", "p-text-bold"], ["class", "p-grid p-mb-5", 4, "ngFor", "ngForOf"], [1, "p-grid", 2, "color", "green"], [1, "p-col-2", "p-offset-8", "p-text-bold"], ["legend", "Order Address", "styleClass", "p-mb-4", 3, "toggleable"], [1, "p-col-2"]], template: function OrdersDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersDetailComponent_div_1_Template, 69, 25, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_card__WEBPACK_IMPORTED_MODULE_8__.Card, primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__.Fieldset, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 786:
/*!******************************************************************************!*\
  !*** ./apps/admin/src/app/pages/orders/orders-list/orders-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersListComponent": () => (/* binding */ OrdersListComponent)
/* harmony export */ });
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/orders */ 475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 6319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 7966);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 6329);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 3299);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmdialog */ 987);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tag */ 5590);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8342);
















function OrdersListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Total Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Date Ordered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p-sortIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p-tag", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListComponent_ng_template_7_Template_p_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const order_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteOrder(order_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListComponent_ng_template_7_Template_p_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const order_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.showOrder(order_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2.totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, order_r2.dateOrdered, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.orderStatus[order_r2.status].label)("severity", ctx_r1.orderStatus[order_r2.status].color);
} }
const _c0 = function () { return { width: "50vw" }; };
class OrdersListComponent {
    constructor(ordersService, messageService, confirmationService, router) {
        this.ordersService = ordersService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.orders = [];
        this.orderStatus = _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.ORDER_STATUS;
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getOrders();
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    _getOrders() {
        this.ordersService
            .getOrders()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
            .subscribe((orders) => {
            this.orders = orders;
        });
    }
    showOrder(orderId) {
        this.router.navigateByUrl(`orders/${orderId}`);
    }
    deleteOrder(orderId) {
        this.confirmationService.confirm({
            message: 'Do you want to Delete this Order?',
            header: 'Delete Order',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.ordersService
                    .deleteOrder(orderId)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
                    .subscribe(() => {
                    this._getOrders();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Order is deleted!'
                    });
                }, () => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Order is not deleted!'
                    });
                });
            }
        });
    }
}
OrdersListComponent.ɵfac = function OrdersListComponent_Factory(t) { return new (t || OrdersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
OrdersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersListComponent, selectors: [["admin-orders-list"]], decls: 9, vars: 5, consts: [[1, "admin-page"], ["header", "Orders", "subheader", "List of all orders"], [1, "p-grid"], [1, "p-col-12"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["pSortableColumn", "name"], ["field", "user"], ["pSortableColumn", "totalPrice"], ["field", "totalPrice"], ["pSortableColumn", "dateOrdered"], ["field", "dateOrdered"], ["pSortableColumn", "status"], ["field", "status"], [3, "value", "severity"], ["styleClass", "p-button-danger p-mr-2", "icon", "pi pi-trash", 3, "click"], ["styleClass", "p-button-success", "icon", "pi pi-eye", 3, "click"]], template: function OrdersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OrdersListComponent_ng_template_6_Template, 14, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OrdersListComponent_ng_template_7_Template, 13, 8, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p-confirmDialog", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialog, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_tag__WEBPACK_IMPORTED_MODULE_10__.Tag, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 4382:
/*!************************************************************************************!*\
  !*** ./apps/admin/src/app/pages/products/products-form/products-form.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsFormComponent": () => (/* binding */ ProductsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/products */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 131);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 6319);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 7966);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 6329);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toolbar */ 66);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 4468);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputnumber */ 2945);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 6255);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ 4389);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */ 5604);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/editor */ 8894);























function ProductsFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Brand is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Count in stock is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Image is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { height: "320px" }; };
class ProductsFormComponent {
    constructor(formBuilder, productsService, categoriesService, messageService, location, route) {
        this.formBuilder = formBuilder;
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.messageService = messageService;
        this.location = location;
        this.route = route;
        this.editmode = false;
        this.isSubmitted = false;
        this.catagories = [];
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._initForm();
        this._getCategories();
        this._checkEditMode();
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    _initForm() {
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            countInStock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            richDescription: [''],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            isFeatured: [false]
        });
    }
    _getCategories() {
        this.categoriesService
            .getCategories()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endsubs$))
            .subscribe((categories) => {
            this.catagories = categories;
        });
    }
    _addProduct(productData) {
        this.productsService
            .createProduct(productData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endsubs$))
            .subscribe((product) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: `Product ${product.name} is created!`
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(2000)
                .toPromise()
                .then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Product is not created!'
            });
        });
    }
    _updateProduct(productFormData) {
        this.productsService
            .updateProduct(productFormData, this.currentProductId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endsubs$))
            .subscribe(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Product is updated!'
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(2000)
                .toPromise()
                .then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Product is not updated!'
            });
        });
    }
    _checkEditMode() {
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endsubs$)).subscribe((params) => {
            if (params.id) {
                this.editmode = true;
                this.currentProductId = params.id;
                this.productsService
                    .getProduct(params.id)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endsubs$))
                    .subscribe((product) => {
                    this.productForm.name.setValue(product.name);
                    this.productForm.category.setValue(product.category.id);
                    this.productForm.brand.setValue(product.brand);
                    this.productForm.price.setValue(product.price);
                    this.productForm.countInStock.setValue(product.countInStock);
                    this.productForm.isFeatured.setValue(product.isFeatured);
                    this.productForm.description.setValue(product.description);
                    this.productForm.richDescription.setValue(product.richDescription);
                    this.imageDisplay = product.image;
                    this.productForm.image.setValidators([]);
                    this.productForm.image.updateValueAndValidity();
                });
            }
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid)
            return;
        const productFormData = new FormData();
        Object.keys(this.productForm).map((key) => {
            productFormData.append(key, this.productForm[key].value);
        });
        if (this.editmode) {
            this._updateProduct(productFormData);
        }
        else {
            this._addProduct(productFormData);
        }
    }
    onCancle() {
        this.location.back();
    }
    onImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            this.form.patchValue({ image: file });
            this.form.get('image').updateValueAndValidity();
            const fileReader = new FileReader();
            fileReader.onload = () => {
                this.imageDisplay = fileReader.result;
            };
            fileReader.readAsDataURL(file);
        }
    }
    get productForm() {
        return this.form.controls;
    }
}
ProductsFormComponent.ɵfac = function ProductsFormComponent_Factory(t) { return new (t || ProductsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
ProductsFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsFormComponent, selectors: [["admin-products-form"]], decls: 66, vars: 21, consts: [[1, "admin-page"], ["subheader", "You can add or edit products here", 3, "header"], [1, "p-grid", "p-mb-5"], [1, "p-col-12"], [1, "p-toolbar-group-left"], [1, "p-toolbar-group-right"], ["styleClass", "p-button-primary p-mr-2", "icon", "pi pi-plus", 3, "label", "click"], ["styleClass", "p-button-secondary", "label", "Cancle", "icon", "pi pi-arrow-circle-left", 3, "click"], [1, "p-grid"], [3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", ""], ["class", "p-error", 4, "ngIf"], ["for", "brand"], ["formControlName", "brand", "id", "brand", "type", "text", "pInputText", ""], ["for", "price"], ["formControlName", "price", "mode", "decimal", 3, "useGrouping"], [1, "p-field", "p-col-4"], ["for", "countInStock"], ["formControlName", "countInStock", "mode", "decimal", 3, "useGrouping"], ["for", "category"], ["formControlName", "category", "optionLabel", "name", "optionValue", "id", "filterBy", "name", "placeholder", "Select a Category", 3, "options", "filter", "showClear"], ["for", "isFeatured"], ["formControlName", "isFeatured"], [1, "p-field", "p-col-12"], ["for", "description"], ["pInputTextarea", "", "formControlName", "description", 3, "rows", "cols"], ["for", "richDescription"], ["formControlName", "richDescription"], ["type", "file", "accept", "image/*", 1, "p-inputtext", 3, "change"], [1, "p-col-2", "p-mt-2", "p-pl-0"], ["alt", "", 2, "width", "100%", 3, "src"], [1, "p-error"]], template: function ProductsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsFormComponent_Template_p_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsFormComponent_Template_p_button_click_9_listener() { return ctx.onCancle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProductsFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProductsFormComponent_small_23_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "p-inputNumber", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProductsFormComponent_small_29_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "countInStock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "p-inputNumber", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProductsFormComponent_small_36_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "p-dropdown", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ProductsFormComponent_small_42_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Is Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "p-inputSwitch", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ProductsFormComponent_small_53_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "p-editor", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Main Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductsFormComponent_Template_input_change_62_listener($event) { return ctx.onImageUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ProductsFormComponent_small_63_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", ctx.editmode ? "Edit Product" : "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.editmode ? "Update" : "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.brand.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("useGrouping", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.price.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("useGrouping", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.countInStock.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.catagories)("filter", true)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.category.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", 7)("cols", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.description.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.image.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageDisplay, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_10__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__.InputNumber, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__.InputSwitch, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__.InputTextarea, primeng_editor__WEBPACK_IMPORTED_MODULE_18__.Editor], encapsulation: 2 });


/***/ }),

/***/ 9323:
/*!************************************************************************************!*\
  !*** ./apps/admin/src/app/pages/products/products-list/products-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListComponent": () => (/* binding */ ProductsListComponent)
/* harmony export */ });
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/products */ 3935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 6319);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 7966);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 6329);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 66);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 3299);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8342);
















function ProductsListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p-sortIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Created at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsListComponent_ng_template_12_Template_p_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const product_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteProduct(product_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsListComponent_ng_template_12_Template_p_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const product_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.updateProduct(product_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.countInStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 6, product_r2.dateCreated, "short"));
} }
const _c0 = function () { return ["name"]; };
const _c1 = function () { return { width: "50vw" }; };
class ProductsListComponent {
    constructor(productsService, router, messageService, confirmationService) {
        this.productsService = productsService;
        this.router = router;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.products = [];
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getProducts();
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    _getProducts() {
        this.productsService
            .getProducts()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
            .subscribe((products) => {
            this.products = products;
        });
    }
    updateProduct(productid) {
        this.router.navigateByUrl(`products/form/${productid}`);
    }
    deleteProduct(productId) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this Product?',
            header: 'Delete Product',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.productsService
                    .deleteProduct(productId)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
                    .subscribe(() => {
                    this._getProducts();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Product is deleted!'
                    });
                }, () => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Product is not deleted!'
                    });
                });
            }
        });
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService)); };
ProductsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["admin-products-list"]], decls: 14, vars: 9, consts: [[1, "admin-page"], ["header", "Products", "subheader", "List of all products"], [1, "p-grid"], [1, "p-col-12"], [1, "p-toolbar-group-left"], ["styleClass", "p-button-success", "label", "New", "icon", "pi pi-plus", "routerLink", "form"], ["styleClass", "p-datatable-gridlines", 3, "paginator", "rows", "value", "globalFilterFields"], ["pTemplate", "header"], ["pTemplate", "body"], ["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "price"], ["field", "price"], ["pSortableColumn", "stock"], ["field", "stock"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "created"], ["field", "created"], ["alt", "", 2, "width", "100%", 3, "src"], ["styleClass", "p-button-danger p-mr-2", "icon", "pi pi-trash", 3, "click"], ["styleClass", "p-button-success", "icon", "pi pi-pencil", 3, "click"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProductsListComponent_ng_template_11_Template, 19, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductsListComponent_ng_template_12_Template, 17, 9, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-confirmDialog", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("paginator", true)("rows", 10)("value", ctx.products)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 5854:
/*!***************************************************************************!*\
  !*** ./apps/admin/src/app/pages/users/users-form/users-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersFormComponent": () => (/* binding */ UsersFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/users */ 7295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 6319);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 7966);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 6329);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toolbar */ 66);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 4468);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputmask */ 3130);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputswitch */ 4389);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 6255);




















function UsersFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UsersFormComponent_small_23_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UsersFormComponent_small_23_span_2_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userForm.email.errors.email);
} }
function UsersFormComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UsersFormComponent {
    constructor(messageService, formBuilder, usersService, location, route) {
        this.messageService = messageService;
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.location = location;
        this.route = route;
        this.isSubmitted = false;
        this.editmode = false;
        this.countries = [];
    }
    ngOnInit() {
        this._initUserForm();
        this._getCountries();
        this._checkEditMode();
    }
    _initUserForm() {
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            isAdmin: [false],
            street: [''],
            apartment: [''],
            zip: [''],
            city: [''],
            country: ['']
        });
    }
    _getCountries() {
        this.countries = this.usersService.getCountries();
    }
    _addUser(user) {
        this.usersService.createUser(user).subscribe((user) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: `User ${user.name} is created!`
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(2000)
                .toPromise()
                .then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'User is not created!'
            });
        });
    }
    _updateUser(user) {
        this.usersService.updateUser(user).subscribe(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'User is updated!'
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(2000)
                .toPromise()
                .then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'User is not updated!'
            });
        });
    }
    _checkEditMode() {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.editmode = true;
                this.currentUserId = params.id;
                this.usersService.getUser(params.id).subscribe((user) => {
                    this.userForm.name.setValue(user.name);
                    this.userForm.email.setValue(user.email);
                    this.userForm.phone.setValue(user.phone);
                    this.userForm.isAdmin.setValue(user.isAdmin);
                    this.userForm.street.setValue(user.street);
                    this.userForm.apartment.setValue(user.apartment);
                    this.userForm.zip.setValue(user.zip);
                    this.userForm.city.setValue(user.city);
                    this.userForm.country.setValue(user.country);
                    this.userForm.password.setValidators([]);
                    this.userForm.password.updateValueAndValidity();
                });
            }
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        const user = {
            id: this.currentUserId,
            name: this.userForm.name.value,
            email: this.userForm.email.value,
            password: this.userForm.password.value,
            phone: this.userForm.phone.value,
            isAdmin: this.userForm.isAdmin.value,
            street: this.userForm.street.value,
            apartment: this.userForm.apartment.value,
            zip: this.userForm.zip.value,
            city: this.userForm.city.value,
            country: this.userForm.country.value
        };
        if (this.editmode) {
            this._updateUser(user);
        }
        else {
            this._addUser(user);
        }
    }
    onCancle() {
        this.location.back();
    }
    get userForm() {
        return this.form.controls;
    }
}
UsersFormComponent.ɵfac = function UsersFormComponent_Factory(t) { return new (t || UsersFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_users__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
UsersFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersFormComponent, selectors: [["admin-users-form"]], decls: 62, vars: 10, consts: [[1, "admin-page"], ["subheader", "You can add or edit users here", 3, "header"], [1, "p-grid", "p-mb-5"], [1, "p-col-12"], [1, "p-toolbar-group-left"], [1, "p-toolbar-group-right"], ["styleClass", "p-button-primary p-mr-2", "icon", "pi pi-plus", 3, "label", "click"], ["styleClass", "p-button-secondary", "label", "Cancle", "icon", "pi pi-arrow-circle-left", 3, "click"], [1, "p-grid"], [3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-4"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", ""], ["class", "p-error", 4, "ngIf"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "text", "pInputText", ""], ["for", "password"], ["formControlName", "password", "id", "password", "type", "password", "pInputText", ""], ["for", "color"], ["mask", "(999) 999-9999", "formControlName", "phone", "placeholder", "(999) 999-9999"], ["for", "isAdmin"], ["formControlName", "isAdmin"], ["for", "street"], ["formControlName", "street", "id", "street", "type", "text", "pInputText", ""], ["formControlName", "apartment", "id", "apartment", "type", "text", "pInputText", ""], ["formControlName", "zip", "id", "zip", "type", "text", "pInputText", ""], ["for", "city"], ["formControlName", "city", "id", "city", "type", "text", "pInputText", ""], ["for", "country"], ["formControlName", "country", "optionLabel", "name", "optionValue", "id", "filterBy", "name", "placeholder", "Select a Country", 3, "options", "filter", "showClear"], [1, "p-error"], [4, "ngIf"]], template: function UsersFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersFormComponent_Template_p_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersFormComponent_Template_p_button_click_9_listener() { return ctx.onCancle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UsersFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UsersFormComponent_small_23_Template, 3, 2, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UsersFormComponent_small_28_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "p-inputMask", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UsersFormComponent_small_34_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Is Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "p-inputSwitch", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "p-dropdown", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", ctx.editmode ? "Edit User" : "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.editmode ? "Update" : "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.password.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.phone.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.countries)("filter", true)("showClear", true);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_7__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_8__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__.InputMask, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__.InputSwitch, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown], encapsulation: 2 });


/***/ }),

/***/ 7225:
/*!***************************************************************************!*\
  !*** ./apps/admin/src/app/pages/users/users-list/users-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListComponent": () => (/* binding */ UsersListComponent)
/* harmony export */ });
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/users */ 7295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 6319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 7966);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 6329);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 66);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 3299);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tag */ 5590);

















function UsersListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Is Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersListComponent_ng_template_12_p_tag_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-tag", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
} }
function UsersListComponent_ng_template_12_p_tag_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-tag", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
} }
function UsersListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UsersListComponent_ng_template_12_p_tag_6_Template, 1, 1, "p-tag", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UsersListComponent_ng_template_12_p_tag_7_Template, 1, 1, "p-tag", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersListComponent_ng_template_12_Template_p_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const user_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.deleteUser(user_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersListComponent_ng_template_12_Template_p_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const user_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.updateUser(user_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r2.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !user_r2.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getCountryName(user_r2.country));
} }
const _c0 = function () { return { width: "50vw" }; };
class UsersListComponent {
    constructor(usersService, messageService, confirmationService, router) {
        this.usersService = usersService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.users = [];
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getUsers();
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    deleteUser(userId) {
        this.confirmationService.confirm({
            message: 'Do you want to Delete this User?',
            header: 'Delete User',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.usersService
                    .deleteUser(userId)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
                    .subscribe(() => {
                    this._getUsers();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'User is deleted!'
                    });
                }, () => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'User is not deleted!'
                    });
                });
            }
        });
    }
    updateUser(userid) {
        this.router.navigateByUrl(`users/form/${userid}`);
    }
    getCountryName(countryKey) {
        if (countryKey)
            return this.usersService.getCountry(countryKey);
    }
    _getUsers() {
        this.usersService
            .getUsers()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endsubs$))
            .subscribe((users) => {
            this.users = users;
        });
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_users__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
UsersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["admin-users-list"]], decls: 14, vars: 5, consts: [[1, "admin-page"], ["header", "Users", "subheader", "List of all users"], [1, "p-grid"], [1, "p-col-12"], [1, "p-toolbar-group-left"], ["styleClass", "p-button-success", "label", "New", "icon", "pi pi-plus", "routerLink", "form"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["pSortableColumn", "name"], ["field", "name"], ["icon", "pi pi-check", "severity", "success", 3, "rounded", 4, "ngIf"], ["icon", "pi pi-times", "severity", "danger", 3, "rounded", 4, "ngIf"], ["styleClass", "p-button-danger p-mr-2", "icon", "pi pi-trash", 3, "click"], ["styleClass", "p-button-success", "icon", "pi pi-pencil", 3, "click"], ["icon", "pi pi-check", "severity", "success", 3, "rounded"], ["icon", "pi pi-times", "severity", "danger", 3, "rounded"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UsersListComponent_ng_template_11_Template, 11, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UsersListComponent_ng_template_12_Template, 13, 5, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-confirmDialog", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_tag__WEBPACK_IMPORTED_MODULE_13__.Tag], encapsulation: 2 });


/***/ }),

/***/ 7862:
/*!************************************************************!*\
  !*** ./apps/admin/src/app/shared/shell/shell.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShellComponent": () => (/* binding */ ShellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1207);



class ShellComponent {
    constructor() { }
}
ShellComponent.ɵfac = function ShellComponent_Factory(t) { return new (t || ShellComponent)(); };
ShellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShellComponent, selectors: [["admin-shell"]], decls: 4, vars: 0, consts: [[1, "admin-wrapper"], [1, "admin-main"]], template: function ShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 649:
/*!****************************************************************!*\
  !*** ./apps/admin/src/app/shared/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/users */ 7295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1207);




class SidebarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    logoutUser() {
        this.authService.logout();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_users__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["admin-sidebar"]], decls: 29, vars: 0, consts: [[1, "admin-sidebar"], [1, "logo"], ["src", "/assets/images/logo.png"], [1, "links"], ["routerLink", "/"], [1, "pi", "pi-home"], ["routerLink", "/products"], [1, "pi", "pi-briefcase"], ["routerLink", "/categories"], [1, "pi", "pi-list"], ["routerLink", "/orders"], [1, "pi", "pi-shopping-cart"], ["routerLink", "/users"], [1, "pi", "pi-users"], [1, "logout"], [1, "pi", "pi-sign-out", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_i_click_27_listener() { return ctx.logoutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 2209:
/*!********************************!*\
  !*** ./apps/admin/src/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 7157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4294);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 4831);




if (environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 4831:
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 475:
/*!**********************************!*\
  !*** ./libs/orders/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* reexport safe */ _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__.OrdersModule),
/* harmony export */   "Order": () => (/* reexport safe */ _lib_models_order__WEBPACK_IMPORTED_MODULE_1__.Order),
/* harmony export */   "OrderItem": () => (/* reexport safe */ _lib_models_order_item__WEBPACK_IMPORTED_MODULE_2__.OrderItem),
/* harmony export */   "OrdersService": () => (/* reexport safe */ _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService),
/* harmony export */   "CART_KEY": () => (/* reexport safe */ _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CART_KEY),
/* harmony export */   "CartService": () => (/* reexport safe */ _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService),
/* harmony export */   "Cart": () => (/* reexport safe */ _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__.Cart),
/* harmony export */   "CartItem": () => (/* reexport safe */ _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__.CartItem),
/* harmony export */   "CartItemDetailed": () => (/* reexport safe */ _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__.CartItemDetailed),
/* harmony export */   "ORDER_STATUS": () => (/* reexport safe */ _lib_order_constants__WEBPACK_IMPORTED_MODULE_6__.ORDER_STATUS)
/* harmony export */ });
/* harmony import */ var _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/orders.module */ 3587);
/* harmony import */ var _lib_models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models/order */ 3519);
/* harmony import */ var _lib_models_order_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/order-item */ 5609);
/* harmony import */ var _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/orders.service */ 1663);
/* harmony import */ var _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/cart.service */ 8629);
/* harmony import */ var _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/models/cart */ 8556);
/* harmony import */ var _lib_order_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/order.constants */ 4047);









/***/ }),

/***/ 2104:
/*!*************************************************************************!*\
  !*** ./libs/orders/src/lib/components/cart-icon/cart-icon.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartIconComponent": () => (/* binding */ CartIconComponent)
/* harmony export */ });
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 8629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/badge */ 2685);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1207);





class CartIconComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartCount = 0;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe((cart) => {
            var _a, _b;
            this.cartCount = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.items) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        });
    }
}
CartIconComponent.ɵfac = function CartIconComponent_Factory(t) { return new (t || CartIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CartIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartIconComponent, selectors: [["orders-cart-icon"]], decls: 1, vars: 1, consts: [["pBadge", "", "severity", "danger", "routerLink", "/cart", 1, "pi", "pi-shopping-cart", "p-mr-4", "p-text-secondary", 2, "font-size", "1.5rem", 3, "value"]], template: function CartIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.cartCount);
    } }, directives: [primeng_badge__WEBPACK_IMPORTED_MODULE_2__.BadgeDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 459:
/*!*********************************************************************************!*\
  !*** ./libs/orders/src/lib/components/order-summary/order-summary.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSummaryComponent": () => (/* binding */ OrderSummaryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9108);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 8629);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/orders.service */ 1663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 3771);











function OrderSummaryComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function OrderSummaryComponent_div_21_Template_p_button_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.navigateToCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class OrderSummaryComponent {
    constructor(router, cartService, ordersService) {
        this.router = router;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.isCheckout = false;
        this.router.url.includes('checkout') ? (this.isCheckout = true) : (this.isCheckout = false);
    }
    ngOnInit() {
        this._getOrderSummary();
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    _getOrderSummary() {
        this.cartService.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((cart) => {
            this.totalPrice = 0;
            if (cart) {
                cart.items.map((item) => {
                    this.ordersService
                        .getProduct(item.productId)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
                        .subscribe((product) => {
                        this.totalPrice += product.price * item.quantity;
                    });
                });
            }
        });
    }
    navigateToCheckout() {
        this.router.navigate(['/checkout']);
    }
}
OrderSummaryComponent.ɵfac = function OrderSummaryComponent_Factory(t) { return new (t || OrderSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService)); };
OrderSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrderSummaryComponent, selectors: [["orders-order-summary"]], decls: 22, vars: 7, consts: [[1, "order-summary"], [1, "summary-price"], [1, "free"], [1, "to-checkout"], ["class", "checkout-button", 4, "ngIf"], [1, "checkout-button"], ["label", "Checkout", 3, "onClick"]], template: function OrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Items Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Packing & Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, OrderSummaryComponent_div_21_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, ctx.totalPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 5, ctx.totalPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCheckout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 8556:
/*!********************************************!*\
  !*** ./libs/orders/src/lib/models/cart.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart),
/* harmony export */   "CartItem": () => (/* binding */ CartItem),
/* harmony export */   "CartItemDetailed": () => (/* binding */ CartItemDetailed)
/* harmony export */ });
class Cart {
}
class CartItem {
}
class CartItemDetailed {
}


/***/ }),

/***/ 5609:
/*!**************************************************!*\
  !*** ./libs/orders/src/lib/models/order-item.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderItem": () => (/* binding */ OrderItem)
/* harmony export */ });
class OrderItem {
}


/***/ }),

/***/ 3519:
/*!*********************************************!*\
  !*** ./libs/orders/src/lib/models/order.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {
}


/***/ }),

/***/ 4047:
/*!************************************************!*\
  !*** ./libs/orders/src/lib/order.constants.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ORDER_STATUS": () => (/* binding */ ORDER_STATUS)
/* harmony export */ });
const ORDER_STATUS = {
    0: {
        label: 'Pending',
        color: 'primary'
    },
    1: {
        label: 'Processed',
        color: 'warning'
    },
    2: {
        label: 'Shipped',
        color: 'warning'
    },
    3: {
        label: 'Delivered',
        color: 'success'
    },
    4: {
        label: 'Failed',
        color: 'danger'
    }
};


/***/ }),

/***/ 3587:
/*!**********************************************!*\
  !*** ./libs/orders/src/lib/orders.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* binding */ OrdersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/cart.service */ 8629);
/* harmony import */ var _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart-icon/cart-icon.component */ 2104);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/badge */ 2685);
/* harmony import */ var _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cart-page/cart-page.component */ 727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ 2945);
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ 459);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/checkout-page/checkout-page.component */ 3555);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 4468);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputmask */ 3130);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 6255);
/* harmony import */ var _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/thank-you/thank-you.component */ 9);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bluebits/users */ 7295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7282);



















const routes = [
    {
        path: 'cart',
        component: _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent
    },
    {
        path: 'checkout',
        canActivate: [_bluebits_users__WEBPACK_IMPORTED_MODULE_6__.AuthGuard],
        component: _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent
    },
    {
        path: 'success',
        component: _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__.ThankYouComponent
    }
];
class OrdersModule {
    constructor(cartService) {
        cartService.initCartLocalStorage();
    }
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
OrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            primeng_badge__WEBPACK_IMPORTED_MODULE_9__.BadgeModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumberModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__.InputMaskModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.DropdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__.CartIconComponent,
        _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent,
        _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent,
        _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent,
        _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__.ThankYouComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        primeng_badge__WEBPACK_IMPORTED_MODULE_9__.BadgeModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumberModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__.InputMaskModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.DropdownModule], exports: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__.CartIconComponent, _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent, _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent] }); })();


/***/ }),

/***/ 727:
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/cart-page/cart-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageComponent": () => (/* binding */ CartPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 8629);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/orders.service */ 1663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/order-summary/order-summary.component */ 459);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ 2945);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 7292);














function CartPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CartPageComponent_div_10_Template_p_button_onClick_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.deleteCartItem(cartItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p-inputNumber", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CartPageComponent_div_10_Template_p_inputNumber_ngModelChange_14_listener($event) { const cartItem_r1 = ctx.$implicit; return cartItem_r1.quantity = $event; })("onInput", function CartPageComponent_div_10_Template_p_inputNumber_onInput_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.updateCartItemQuantity($event, cartItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Subtotal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", cartItem_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("alt", cartItem_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cartItem_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 10, cartItem_r1.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showButtons", true)("inputId", cartItem_r1.product.id)("min", 1)("max", 100)("ngModel", cartItem_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 12, cartItem_r1.product.price * cartItem_r1.quantity));
} }
class CartPageComponent {
    constructor(router, cartService, ordersService) {
        this.router = router;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.cartItemsDetailed = [];
        this.cartCount = 0;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this._getCartDetails();
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    _getCartDetails() {
        this.cartService.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.endSubs$)).subscribe((respCart) => {
            var _a;
            this.cartItemsDetailed = [];
            this.cartCount = (_a = respCart === null || respCart === void 0 ? void 0 : respCart.items.length) !== null && _a !== void 0 ? _a : 0;
            respCart.items.forEach((cartItem) => {
                this.ordersService.getProduct(cartItem.productId).subscribe((respProduct) => {
                    this.cartItemsDetailed.push({
                        product: respProduct,
                        quantity: cartItem.quantity
                    });
                });
            });
        });
    }
    backToShop() {
        this.router.navigate(['/products']);
    }
    deleteCartItem(cartItem) {
        this.cartService.deleteCartItem(cartItem.product.id);
    }
    updateCartItemQuantity(event, cartItem) {
        this.cartService.setCartItem({
            productId: cartItem.product.id,
            quantity: event.value
        }, true);
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService)); };
CartPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 13, vars: 2, consts: [[1, "cart-page"], [1, "p-grid"], [1, "p-col-8"], ["label", "Continue shopping", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "cart-shipping", "p-mb-5"], ["class", "cart-item p-mb-5", 4, "ngFor", "ngForOf"], [1, "p-col-4"], [1, "cart-item", "p-mb-5"], [1, "p-grid", "p-fluid"], [1, "p-col-2", "cart-item-image"], [3, "src"], [1, "p-col-7"], [1, "cart-item-name"], [1, "cart-item-price"], [1, "cart-item-remove"], ["icon", "pi pi-trash", 3, "onClick"], [1, "p-col-3"], [1, "p-field", "cart-item-quantity"], ["mode", "decimal", 3, "showButtons", "inputId", "min", "max", "ngModel", "ngModelChange", "onInput"], [1, "cart-item-subtotal"], [1, "cart-item-subtotal-value"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CartPageComponent_Template_p_button_onClick_4_listener() { return ctx.backToShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Shipping after the payment, Delivery time : 1 to 4 working days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CartPageComponent_div_10_Template, 20, 14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "orders-order-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("My Cart: ", ctx.cartCount, " Item(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cartItemsDetailed);
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_2__.OrderSummaryComponent, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 3555:
/*!****************************************************************************!*\
  !*** ./libs/orders/src/lib/pages/checkout-page/checkout-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageComponent": () => (/* binding */ CheckoutPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/users */ 7295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 8629);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orders.service */ 1663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 4468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputmask */ 3130);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 6255);
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/order-summary/order-summary.component */ 459);



















function CheckoutPageComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CheckoutPageComponent_small_16_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CheckoutPageComponent_small_16_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.checkoutForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.checkoutForm.email.errors.email);
} }
function CheckoutPageComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Street is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Apartment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Zip is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Country is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CheckoutPageComponent {
    constructor(router, usersService, formBuilder, cartService, ordersService) {
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.isSubmitted = false;
        this.orderItems = [];
        this.countries = [];
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this._initCheckoutForm();
        this._autoFillUserData();
        this._getCartItems();
        this._getCountries();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    _initCheckoutForm() {
        this.checkoutFormGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            apartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    _autoFillUserData() {
        this.usersService
            .observeCurrentUser()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$))
            .subscribe((user) => {
            if (user) {
                this.userId = user.id;
                this.checkoutForm.name.setValue(user.name);
                this.checkoutForm.email.setValue(user.email);
                this.checkoutForm.phone.setValue(user.phone);
                this.checkoutForm.city.setValue(user.city);
                this.checkoutForm.street.setValue(user.street);
                this.checkoutForm.country.setValue(user.country);
                this.checkoutForm.zip.setValue(user.zip);
                this.checkoutForm.apartment.setValue(user.apartment);
            }
        });
    }
    _getCartItems() {
        const cart = this.cartService.getCart();
        this.orderItems = cart.items.map((item) => {
            return {
                product: item.productId,
                quantity: item.quantity
            };
        });
    }
    _getCountries() {
        this.countries = this.usersService.getCountries();
    }
    backToCart() {
        this.router.navigate(['/cart']);
    }
    placeOrder() {
        this.isSubmitted = true;
        if (this.checkoutFormGroup.invalid) {
            return;
        }
        const order = {
            orderItems: this.orderItems,
            shippingAddress1: this.checkoutForm.street.value,
            shippingAddress2: this.checkoutForm.apartment.value,
            city: this.checkoutForm.city.value,
            zip: this.checkoutForm.zip.value,
            country: this.checkoutForm.country.value,
            phone: this.checkoutForm.phone.value,
            status: 0,
            user: this.userId,
            dateOrdered: `${Date.now()}`
        };
        this.ordersService.createOrder(order).subscribe(() => {
            //redirect to thank you page // payment
            this.cartService.emptyCart();
            this.router.navigate(['/success']);
        }, () => {
            //display some message to user
        });
    }
    get checkoutForm() {
        return this.checkoutFormGroup.controls;
    }
}
CheckoutPageComponent.ɵfac = function CheckoutPageComponent_Factory(t) { return new (t || CheckoutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bluebits_users__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService)); };
CheckoutPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CheckoutPageComponent, selectors: [["orders-checkout-page"]], decls: 54, vars: 12, consts: [[1, "checkout-page"], ["label", "Back to cart", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "p-grid", "checkout-form"], [1, "p-col-8"], [3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-4"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", ""], ["class", "p-error", 4, "ngIf"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "text", "pInputText", ""], ["for", "color"], ["mask", "(999) 999-9999", "formControlName", "phone", "placeholder", "(999) 999-9999"], ["for", "street"], ["formControlName", "street", "id", "street", "type", "text", "pInputText", ""], ["formControlName", "apartment", "id", "apartment", "type", "text", "pInputText", ""], ["formControlName", "zip", "id", "zip", "type", "text", "pInputText", ""], ["for", "city"], ["formControlName", "city", "id", "city", "type", "text", "pInputText", ""], ["for", "country"], ["formControlName", "country", "optionLabel", "name", "optionValue", "id", "filterBy", "name", "placeholder", "Select a Country", 3, "options", "filter", "showClear"], [1, "p-col-4"], [1, "checkout-button"], ["label", "Place-Order", 3, "onClick"], [1, "p-error"], [4, "ngIf"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CheckoutPageComponent_Template_p_button_onClick_2_listener() { return ctx.backToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CheckoutPageComponent_small_11_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CheckoutPageComponent_small_16_Template, 3, 2, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "p-inputMask", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CheckoutPageComponent_small_22_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, CheckoutPageComponent_small_28_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, CheckoutPageComponent_small_33_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, CheckoutPageComponent_small_38_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, CheckoutPageComponent_small_43_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "p-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, CheckoutPageComponent_small_49_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "orders-order-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CheckoutPageComponent_Template_p_button_onClick_53_listener() { return ctx.placeOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.checkoutFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.phone.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.street.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.apartment.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.zip.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.city.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.countries)("filter", true)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.country.invalid && ctx.isSubmitted);
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__.InputMask, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent], encapsulation: 2 });


/***/ }),

/***/ 9:
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/thank-you/thank-you.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouComponent": () => (/* binding */ ThankYouComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1207);



class ThankYouComponent {
    constructor() { }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) { return new (t || ThankYouComponent)(); };
ThankYouComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankYouComponent, selectors: [["orders-thank-you-page"]], decls: 7, vars: 0, consts: [[1, "checkout-page"], [1, "thankyou-page"], ["label", "Back to shop", "routerLink", "/"]], template: function ThankYouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Thank you for Shopping with us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We have recieved your order and it will be delivered in the next 3 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 8629:
/*!******************************************************!*\
  !*** ./libs/orders/src/lib/services/cart.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CART_KEY": () => (/* binding */ CART_KEY),
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);


const CART_KEY = 'cart';
class CartService {
    constructor() {
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getCart());
    }
    initCartLocalStorage() {
        const cart = this.getCart();
        if (!cart) {
            const intialCart = {
                items: []
            };
            const intialCartJson = JSON.stringify(intialCart);
            localStorage.setItem(CART_KEY, intialCartJson);
        }
    }
    emptyCart() {
        const intialCart = {
            items: []
        };
        const intialCartJson = JSON.stringify(intialCart);
        localStorage.setItem(CART_KEY, intialCartJson);
        this.cart$.next(intialCart);
    }
    getCart() {
        const cartJsonString = localStorage.getItem(CART_KEY);
        const cart = JSON.parse(cartJsonString);
        return cart;
    }
    setCartItem(cartItem, updateCartItem) {
        const cart = this.getCart();
        const cartItemExist = cart.items.find((item) => item.productId === cartItem.productId);
        if (cartItemExist) {
            cart.items.map((item) => {
                if (item.productId === cartItem.productId) {
                    if (updateCartItem) {
                        item.quantity = cartItem.quantity;
                    }
                    else {
                        item.quantity = item.quantity + cartItem.quantity;
                    }
                    return item;
                }
            });
        }
        else {
            cart.items.push(cartItem);
        }
        const cartJson = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, cartJson);
        this.cart$.next(cart);
        return cart;
    }
    deleteCartItem(productId) {
        const cart = this.getCart();
        const newCart = cart.items.filter((item) => item.productId !== productId);
        cart.items = newCart;
        const cartJsonString = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, cartJsonString);
        this.cart$.next(cart);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1663:
/*!********************************************************!*\
  !*** ./libs/orders/src/lib/services/orders.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersService": () => (/* binding */ OrdersService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6467);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 4831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6844);





class OrdersService {
    constructor(http) {
        this.http = http;
        this.apiURLOrders = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'orders';
        this.apiURLProducts = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'products';
    }
    getOrders() {
        return this.http.get(this.apiURLOrders);
    }
    getOrder(orderId) {
        return this.http.get(`${this.apiURLOrders}/${orderId}`);
    }
    createOrder(order) {
        return this.http.post(this.apiURLOrders, order);
    }
    updateOrder(orderStaus, orderId) {
        return this.http.put(`${this.apiURLOrders}/${orderId}`, orderStaus);
    }
    deleteOrder(orderId) {
        return this.http.delete(`${this.apiURLOrders}/${orderId}`);
    }
    getOrdersCount() {
        return this.http
            .get(`${this.apiURLOrders}/get/count`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((objectValue) => objectValue.orderCount));
    }
    getTotalSales() {
        return this.http
            .get(`${this.apiURLOrders}/get/totalsales`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((objectValue) => objectValue.totalsales));
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
OrdersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3935:
/*!************************************!*\
  !*** ./libs/products/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* reexport safe */ _lib_products_module__WEBPACK_IMPORTED_MODULE_0__.ProductsModule),
/* harmony export */   "CategoriesService": () => (/* reexport safe */ _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService),
/* harmony export */   "ProductsService": () => (/* reexport safe */ _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService),
/* harmony export */   "Category": () => (/* reexport safe */ _lib_models_category__WEBPACK_IMPORTED_MODULE_3__.Category),
/* harmony export */   "Product": () => (/* reexport safe */ _lib_models_product__WEBPACK_IMPORTED_MODULE_4__.Product)
/* harmony export */ });
/* harmony import */ var _lib_products_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/products.module */ 7334);
/* harmony import */ var _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/categories.service */ 7893);
/* harmony import */ var _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/products.service */ 1827);
/* harmony import */ var _lib_models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/category */ 6415);
/* harmony import */ var _lib_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/product */ 6726);







/***/ }),

/***/ 4415:
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/categories-banner/categories-banner.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesBannerComponent": () => (/* binding */ CategoriesBannerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/categories.service */ 7893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1207);







const _c0 = function (a0) { return { backgroundColor: a0 }; };
function CategoriesBannerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/category/" + category_r1.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, category_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("pi pi-", category_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r1.name);
} }
class CategoriesBannerComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
        this.categories = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.categoriesService
            .getCategories()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$))
            .subscribe((categories) => {
            this.categories = categories;
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
CategoriesBannerComponent.ɵfac = function CategoriesBannerComponent_Factory(t) { return new (t || CategoriesBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService)); };
CategoriesBannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesBannerComponent, selectors: [["products-categories-banner"]], decls: 5, vars: 1, consts: [[1, "categories-banner"], [1, "p-grid"], ["class", "p-col-2", 4, "ngFor", "ngForOf"], [1, "p-col-2"], [1, "category", 3, "routerLink", "ngStyle"], [1, "category-icon"], [1, "category-name"]], template: function CategoriesBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CategoriesBannerComponent_div_4_Template, 6, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle], encapsulation: 2 });


/***/ }),

/***/ 695:
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/featured-products/featured-products.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedProductsComponent": () => (/* binding */ FeaturedProductsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/products.service */ 1827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-item/product-item.component */ 3592);







function FeaturedProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "products-product-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r1);
} }
class FeaturedProductsComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.featuredProducts = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this._getFeaturedProducts();
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    _getFeaturedProducts() {
        this.prodService
            .getFeaturedProducts(4)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$))
            .subscribe((products) => {
            this.featuredProducts = products;
        });
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FeaturedProductsComponent, selectors: [["products-featured-products"]], decls: 5, vars: 1, consts: [[1, "featured-products", "p-mt-5"], [1, "p-mb-1"], [1, "p-grid"], ["class", "p-col-3", 4, "ngFor", "ngForOf"], [1, "p-col-3"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Feautured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FeaturedProductsComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_1__.ProductItemComponent], encapsulation: 2 });


/***/ }),

/***/ 3592:
/*!*********************************************************************************!*\
  !*** ./libs/products/src/lib/components/product-item/product-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductItemComponent": () => (/* binding */ ProductItemComponent)
/* harmony export */ });
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/orders */ 475);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/product */ 6726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 3771);







function ProductItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function ProductItemComponent_div_0_Template_p_button_onClick_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.addProductToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/products/" + ctx_r0.product.id)("src", ctx_r0.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, ctx_r0.product.price));
} }
class ProductItemComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() { }
    addProductToCart() {
        const cartItem = {
            productId: this.product.id,
            quantity: 1
        };
        this.cartService.setCartItem(cartItem);
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
ProductItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["products-product-item"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "product-item", 4, "ngIf"], [1, "product-item"], [1, "product-item-wrapper"], ["alt", "", 1, "image", 3, "routerLink", "src"], [1, "name"], [1, "price"], ["styleClass", "p-mt-3 add-to-cart", "label", "Add to cart", "icon", "pi pi-shopping-cart", 3, "onClick"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductItemComponent_div_0_Template, 9, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 8730:
/*!***************************************************************************************!*\
  !*** ./libs/products/src/lib/components/products-search/products-search.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsSearchComponent": () => (/* binding */ ProductsSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7282);

class ProductsSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsSearchComponent.ɵfac = function ProductsSearchComponent_Factory(t) { return new (t || ProductsSearchComponent)(); };
ProductsSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsSearchComponent, selectors: [["products-search"]], decls: 3, vars: 0, consts: [[1, "products-search"], [1, "pi", "pi-search"], ["type", "text", "placeholder", "Find products", "name", "search", "id", "search", 1, "products-search-input"]], template: function ProductsSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 6415:
/*!**************************************************!*\
  !*** ./libs/products/src/lib/models/category.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category)
/* harmony export */ });
class Category {
}


/***/ }),

/***/ 6726:
/*!*************************************************!*\
  !*** ./libs/products/src/lib/models/product.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
class Product {
}


/***/ }),

/***/ 9651:
/*!****************************************************************************!*\
  !*** ./libs/products/src/lib/pages/product-page/product-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageComponent": () => (/* binding */ ProductPageComponent)
/* harmony export */ });
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/orders */ 475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1035);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ 1827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _ui_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ui/src/lib/components/gallery/gallery.component */ 702);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/rating */ 2573);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 2945);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 3771);















function ProductPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ui-gallery", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-rating", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductPageComponent_div_0_Template_p_rating_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.product.rating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p-inputNumber", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductPageComponent_div_0_Template_p_inputNumber_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductPageComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.addProductToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx_r0.product.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.product.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.product.rating)("cancel", false)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 13, ctx_r0.product.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 15, ctx_r0.product.price + 18));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.quantity)("showButtons", true)("min", 1)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.product.richDescription, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
class ProductPageComponent {
    constructor(prodService, route, cartService) {
        this.prodService = prodService;
        this.route = route;
        this.cartService = cartService;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.quantity = 1;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.productid) {
                this._getProduct(params.productid);
            }
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    addProductToCart() {
        const cartItem = {
            productId: this.product.id,
            quantity: this.quantity
        };
        this.cartService.setCartItem(cartItem);
    }
    _getProduct(id) {
        this.prodService
            .getProduct(id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.endSubs$))
            .subscribe((resProduct) => {
            this.product = resProduct;
        });
    }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
ProductPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductPageComponent, selectors: [["products-product-page"]], decls: 1, vars: 1, consts: [["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "p-grid"], [1, "p-col-6"], [3, "images"], [1, "p-col-6", "product"], [1, "product-name"], [1, "product-desc"], [1, "product-rating"], [3, "ngModel", "cancel", "disabled", "ngModelChange"], [1, "product-price"], [1, "price-before"], [1, "product-quantity"], [1, "p-field", "p-col-12", "p-md-3", "p-p-0"], ["for", "quantity"], ["mode", "decimal", "inputId", "quantity", 3, "ngModel", "showButtons", "min", "max", "ngModelChange"], [1, "product-actions"], ["pButton", "", "pRipple", "", "type", "button", "label", "Buy Now", 1, "p-button-rounded", "p-mr-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to Cart", 1, "p-button-rounded", 3, "click"], [1, "p-grid", "product-rich-desc"], [1, "p-col-12"], [3, "innerHTML"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ProductPageComponent_div_0_Template, 28, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ui_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent, primeng_rating__WEBPACK_IMPORTED_MODULE_8__.Rating, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumber, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 2072:
/*!******************************************************************************!*\
  !*** ./libs/products/src/lib/pages/products-list/products-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListComponent": () => (/* binding */ ProductsListComponent)
/* harmony export */ });
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/categories.service */ 7893);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ 1827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/checkbox */ 8227);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/product-item/product-item.component */ 3592);











function ProductsListComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_ngModelChange_1_listener($event) { const category_r3 = ctx.$implicit; return category_r3.checked = $event; })("onChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_onChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r5.categoryFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", category_r3.checked)("inputId", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r3.name);
} }
function ProductsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProductsListComponent_div_2_div_3_Template, 4, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
const _c0 = function (a0, a1) { return { "p-col-4": a0, "p-col-3": a1 }; };
function ProductsListComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "products-product-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, !ctx_r7.isCategoryPage, ctx_r7.isCategoryPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("product", product_r8);
} }
function ProductsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductsListComponent_div_4_div_1_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.products);
} }
const _c1 = function (a0, a1) { return { "p-col-9": a0, "p-col-12": a1 }; };
class ProductsListComponent {
    constructor(prodService, catService, route) {
        this.prodService = prodService;
        this.catService = catService;
        this.route = route;
        this.products = [];
        this.categories = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            params.categoryid ? this._getProducts([params.categoryid]) : this._getProducts();
            params.categoryid ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
        });
        this._getCategories();
    }
    _getProducts(categoriesFilter) {
        this.prodService.getProducts(categoriesFilter).subscribe((resProducts) => {
            this.products = resProducts;
        });
    }
    _getCategories() {
        this.catService.getCategories().subscribe((resCats) => {
            this.categories = resCats;
        });
    }
    categoryFilter() {
        const selectedCategories = this.categories
            .filter((category) => category.checked)
            .map((category) => category.id);
        this._getProducts(selectedCategories);
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
ProductsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["products-list"]], decls: 5, vars: 6, consts: [[1, "products-page"], [1, "p-grid"], ["class", "p-col-3", 4, "ngIf"], [3, "ngClass"], ["class", "p-grid", 4, "ngIf"], [1, "p-col-3"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox"], ["binary", "true", 3, "ngModel", "inputId", "ngModelChange", "onChange"], [3, "for"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductsListComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductsListComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCategoryPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c1, !ctx.isCategoryPage, ctx.isCategoryPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__.Checkbox, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__.ProductItemComponent], encapsulation: 2 });


/***/ }),

/***/ 7334:
/*!**************************************************!*\
  !*** ./libs/products/src/lib/products.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/orders */ 475);
/* harmony import */ var _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/products-search/products-search.component */ 8730);
/* harmony import */ var _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/categories-banner/categories-banner.component */ 4415);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-item/product-item.component */ 3592);
/* harmony import */ var _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/featured-products/featured-products.component */ 695);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ 8227);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/rating */ 2573);
/* harmony import */ var _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products-list/products-list.component */ 2072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/product-page/product-page.component */ 9651);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputnumber */ 2945);
/* harmony import */ var _bluebits_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bluebits/ui */ 3838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7282);

















const routes = [
    {
        path: 'products',
        component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent
    },
    {
        path: 'category/:categoryid',
        component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent
    },
    {
        path: 'products/:productid',
        component: _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent
    }
];
class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__.CheckboxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_14__.RatingModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__.InputNumberModule,
            _bluebits_ui__WEBPACK_IMPORTED_MODULE_7__.UiModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__.ProductsSearchComponent,
        _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesBannerComponent,
        _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__.ProductItemComponent,
        _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedProductsComponent,
        _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent,
        _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__.CheckboxModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        primeng_rating__WEBPACK_IMPORTED_MODULE_14__.RatingModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__.InputNumberModule,
        _bluebits_ui__WEBPACK_IMPORTED_MODULE_7__.UiModule], exports: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__.ProductsSearchComponent,
        _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesBannerComponent,
        _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__.ProductItemComponent,
        _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedProductsComponent,
        _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent,
        _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent] }); })();


/***/ }),

/***/ 7893:
/*!**************************************************************!*\
  !*** ./libs/products/src/lib/services/categories.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 4831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6844);




class CategoriesService {
    constructor(http) {
        this.http = http;
        this.apiURLCategories = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'categories';
    }
    getCategories() {
        return this.http.get(this.apiURLCategories);
    }
    getCategory(categoryId) {
        return this.http.get(`${this.apiURLCategories}/${categoryId}`);
    }
    createCategory(category) {
        return this.http.post(this.apiURLCategories, category);
    }
    updateCategory(category) {
        return this.http.put(`${this.apiURLCategories}/${category.id}`, category);
    }
    deleteCategory(categoryId) {
        return this.http.delete(`${this.apiURLCategories}/${categoryId}`);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1827:
/*!************************************************************!*\
  !*** ./libs/products/src/lib/services/products.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6844);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6467);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 4831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7282);





class ProductsService {
    constructor(http) {
        this.http = http;
        this.apiURLProducts = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'products';
    }
    getProducts(categoriesFilter) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
        }
        return this.http.get(this.apiURLProducts, { params: params });
    }
    createProduct(productData) {
        return this.http.post(this.apiURLProducts, productData);
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
    updateProduct(productData, productid) {
        return this.http.put(`${this.apiURLProducts}/${productid}`, productData);
    }
    deleteProduct(productId) {
        return this.http.delete(`${this.apiURLProducts}/${productId}`);
    }
    getProductsCount() {
        return this.http
            .get(`${this.apiURLProducts}/get/count`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((objectValue) => objectValue.productCount));
    }
    getFeaturedProducts(count) {
        return this.http.get(`${this.apiURLProducts}/get/featured/${count}`);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProductsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3838:
/*!******************************!*\
  !*** ./libs/ui/src/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* reexport safe */ _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule)
/* harmony export */ });
/* harmony import */ var _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui.module */ 9243);



/***/ }),

/***/ 8686:
/*!***************************************************************!*\
  !*** ./libs/ui/src/lib/components/banner/banner.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 3771);


class BannerComponent {
    constructor() { }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["ui-banner"]], decls: 10, vars: 0, consts: [[1, "banner"], [1, "p-grid"], [1, "p-col-5", "p-offset-1", "banner-text"], ["styleClass", "p-mt-4 banner-button", "label", "See more", "icon", "pi pi-chevron-right", "iconPos", "right"], [1, "p-col-6", "banner-image", "animate__animated", "animate__slideInLeft"], ["src", "assets/images/banner-image.svg", "alt", ""]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Best Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "in Every Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.Button], encapsulation: 2 });


/***/ }),

/***/ 702:
/*!*****************************************************************!*\
  !*** ./libs/ui/src/lib/components/gallery/gallery.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8342);


const _c0 = function (a0) { return { "background-image": a0 }; };
function GalleryComponent_div_0_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_0_li_5_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const imageUrl_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.changeSelectedImage(imageUrl_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageUrl_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + imageUrl_r2 + ")"));
} }
function GalleryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryComponent_div_0_li_5_Template, 1, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class GalleryComponent {
    ngOnInit() {
        if (this.hasImages) {
            this.selectedImageUrl = this.images[0];
        }
    }
    changeSelectedImage(imageUrl) {
        this.selectedImageUrl = imageUrl;
    }
    get hasImages() {
        var _a;
        return ((_a = this.images) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { images: "images" }, decls: 1, vars: 1, consts: [["class", "gallery", 4, "ngIf"], [1, "gallery"], [1, "main-image"], ["alt", "", 3, "src"], [1, "images"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasImages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], encapsulation: 2 });


/***/ }),

/***/ 9243:
/*!**************************************!*\
  !*** ./libs/ui/src/lib/ui.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banner/banner.component */ 8686);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gallery/gallery.component */ 702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7282);





class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiModule, { declarations: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule], exports: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent] }); })();


/***/ }),

/***/ 7295:
/*!*********************************!*\
  !*** ./libs/users/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildUserSession": () => (/* reexport safe */ _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession),
/* harmony export */   "buildUserSessionFailed": () => (/* reexport safe */ _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed),
/* harmony export */   "buildUserSessionSuccess": () => (/* reexport safe */ _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionSuccess),
/* harmony export */   "USERS_FEATURE_KEY": () => (/* reexport safe */ _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.USERS_FEATURE_KEY),
/* harmony export */   "initialUsersState": () => (/* reexport safe */ _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.initialUsersState),
/* harmony export */   "reducer": () => (/* reexport safe */ _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "getUser": () => (/* reexport safe */ _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__.getUser),
/* harmony export */   "getUserIsAuth": () => (/* reexport safe */ _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__.getUserIsAuth),
/* harmony export */   "getUsersState": () => (/* reexport safe */ _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__.getUsersState),
/* harmony export */   "UsersFacade": () => (/* reexport safe */ _lib_state_users_facade__WEBPACK_IMPORTED_MODULE_4__.UsersFacade),
/* harmony export */   "UsersModule": () => (/* reexport safe */ _lib_users_module__WEBPACK_IMPORTED_MODULE_5__.UsersModule),
/* harmony export */   "UsersService": () => (/* reexport safe */ _lib_services_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService),
/* harmony export */   "User": () => (/* reexport safe */ _lib_models_user__WEBPACK_IMPORTED_MODULE_7__.User),
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__.AuthGuard),
/* harmony export */   "JwtInterceptor": () => (/* reexport safe */ _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__.JwtInterceptor),
/* harmony export */   "AuthService": () => (/* reexport safe */ _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService)
/* harmony export */ });
/* harmony import */ var _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/state/users.actions */ 5072);
/* harmony import */ var _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/state/users.reducer */ 7181);
/* harmony import */ var _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/state/users.selectors */ 6552);
/* harmony import */ var _lib_state_users_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/state/users.models */ 1949);
/* harmony import */ var _lib_state_users_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/state/users.facade */ 3899);
/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/users.module */ 903);
/* harmony import */ var _lib_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services/users.service */ 316);
/* harmony import */ var _lib_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/models/user */ 7509);
/* harmony import */ var _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/services/auth-guard.service */ 9103);
/* harmony import */ var _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/services/jwt.interceptor */ 669);
/* harmony import */ var _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/services/auth.service */ 4034);













/***/ }),

/***/ 7509:
/*!*******************************************!*\
  !*** ./libs/users/src/lib/models/user.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

/***/ 7390:
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/pages/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4034);
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/localstorage.service */ 6517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 4468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 3771);












function LoginComponent_small_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_small_17_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_small_17_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function LoginComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.authMessage);
} }
class LoginComponent {
    constructor(formBuilder, auth, localstorageService, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.localstorageService = localstorageService;
        this.router = router;
        this.isSubmitted = false;
        this.authError = false;
        this.authMessage = 'Email or Password are wrong';
    }
    ngOnInit() {
        this._initLoginForm();
    }
    _initLoginForm() {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.loginFormGroup.invalid)
            return;
        this.auth.login(this.loginForm.email.value, this.loginForm.password.value).subscribe((user) => {
            this.authError = false;
            this.localstorageService.setToken(user.token);
            this.router.navigate(['/']);
        }, (error) => {
            this.authError = true;
            if (error.status !== 400) {
                this.authMessage = 'Error in the Server, please try again later!';
            }
        });
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalstorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["users-login"]], decls: 27, vars: 4, consts: [[1, "login-register"], [1, "login-register-panel"], [1, "p-grid"], [1, "p-col-6"], ["src", "assets/images/login-photo.png"], [1, "p-col-6", "p-p-5"], [3, "formGroup"], [1, "p-grid", "p-mt-6"], [1, "p-col-12"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "Password"], ["label", "Submit", "styleClass", "full-btn", 3, "onClick"], ["class", "p-col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 3, 2, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginComponent_small_23_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function LoginComponent_Template_p_button_onClick_25_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.password.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.authError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button], encapsulation: 2 });


/***/ }),

/***/ 9103:
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/services/auth-guard.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.service */ 6517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1207);





class AuthGuard {
    constructor(router, localStorageToken) {
        this.router = router;
        this.localStorageToken = localStorageToken;
    }
    canActivate(route, state) {
        const token = this.localStorageToken.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp))
                return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalstorageService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4034:
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/services/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 4831);
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.service */ 6517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6844);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1207);








class AuthService {
    constructor(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.apiURLUsers = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'users';
    }
    login(email, password) {
        return this.http.post(`${this.apiURLUsers}/login`, { email, password });
    }
    logout() {
        this.token.removeToken();
        this.router.navigate(['/login']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalstorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 669:
/*!********************************************************!*\
  !*** ./libs/users/src/lib/services/jwt.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.service */ 6517);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 4831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7282);





class JwtInterceptor {
    constructor(localstorageToken) {
        this.localstorageToken = localstorageToken;
    }
    intercept(request, next) {
        const token = this.localstorageToken.getToken();
        const isAPIUrl = request.url.startsWith(_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl);
        if (token && isAPIUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalstorageService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 6517:
/*!*************************************************************!*\
  !*** ./libs/users/src/lib/services/localstorage.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalstorageService": () => (/* binding */ LocalstorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7282);

const TOKEN = 'jwtToken';
class LocalstorageService {
    setToken(data) {
        localStorage.setItem(TOKEN, data);
    }
    getToken() {
        return localStorage.getItem(TOKEN);
    }
    removeToken() {
        localStorage.removeItem(TOKEN);
    }
    isValidToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            return !this._tokenExpired(tokenDecode.exp);
        }
        else {
            return false;
        }
    }
    getUserIdFromToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode) {
                return tokenDecode.userId;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) { return new (t || LocalstorageService)(); };
LocalstorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalstorageService, factory: LocalstorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 316:
/*!******************************************************!*\
  !*** ./libs/users/src/lib/services/users.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6467);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 4831);
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n-iso-countries */ 1507);
/* harmony import */ var _state_users_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/users.facade */ 3899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7282);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6844);








class UsersService {
    constructor(http, usersFacade) {
        this.http = http;
        this.usersFacade = usersFacade;
        this.apiURLUsers = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'users';
        i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__.registerLocale(__webpack_require__(/*! i18n-iso-countries/langs/en.json */ 7936));
    }
    getUsers() {
        return this.http.get(this.apiURLUsers);
    }
    getUser(userId) {
        return this.http.get(`${this.apiURLUsers}/${userId}`);
    }
    createUser(user) {
        return this.http.post(this.apiURLUsers, user);
    }
    updateUser(user) {
        return this.http.put(`${this.apiURLUsers}/${user.id}`, user);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.apiURLUsers}/${userId}`);
    }
    getUsersCount() {
        return this.http
            .get(`${this.apiURLUsers}/get/count`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((objectValue) => objectValue.userCount));
    }
    getCountries() {
        return Object.entries(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__.getNames('en', { select: 'official' })).map((entry) => {
            return {
                id: entry[0],
                name: entry[1]
            };
        });
    }
    getCountry(countryKey) {
        return i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__.getName(countryKey, 'en');
    }
    initAppSession() {
        this.usersFacade.buildUserSession();
    }
    observeCurrentUser() {
        return this.usersFacade.currentUser$;
    }
    isCurrentUserAuth() {
        return this.usersFacade.isAuthenticated$;
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_state_users_facade__WEBPACK_IMPORTED_MODULE_2__.UsersFacade)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5072:
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildUserSession": () => (/* binding */ buildUserSession),
/* harmony export */   "buildUserSessionSuccess": () => (/* binding */ buildUserSessionSuccess),
/* harmony export */   "buildUserSessionFailed": () => (/* binding */ buildUserSessionFailed)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 743);

const buildUserSession = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users] Build User Session');
const buildUserSessionSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users] Build User Session Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const buildUserSessionFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users] Build User Session Failed');


/***/ }),

/***/ 7415:
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.effects.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersEffects": () => (/* binding */ UsersEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 9496);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9012);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6467);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 422);
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/localstorage.service */ 6517);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2298);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7282);










class UsersEffects {
    constructor(actions$, localstorageService, usersService) {
        this.actions$ = actions$;
        this.localstorageService = localstorageService;
        this.usersService = usersService;
        this.buildUserSession$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.concatMap)(() => {
            if (this.localstorageService.isValidToken()) {
                const userId = this.localstorageService.getUserIdFromToken();
                if (userId) {
                    return this.usersService.getUser(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((user) => {
                        return _users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionSuccess({ user: user });
                    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed())));
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed());
                }
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed());
            }
        })));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalstorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService)); };
UsersEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });


/***/ }),

/***/ 3899:
/*!**************************************************!*\
  !*** ./libs/users/src/lib/state/users.facade.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersFacade": () => (/* binding */ UsersFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 743);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 5072);
/* harmony import */ var _users_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.selectors */ 6552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7282);





class UsersFacade {
    constructor(store) {
        this.store = store;
        this.currentUser$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_users_selectors__WEBPACK_IMPORTED_MODULE_1__.getUser));
        this.isAuthenticated$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_users_selectors__WEBPACK_IMPORTED_MODULE_1__.getUserIsAuth));
    }
    buildUserSession() {
        this.store.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession());
    }
}
UsersFacade.ɵfac = function UsersFacade_Factory(t) { return new (t || UsersFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
UsersFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UsersFacade, factory: UsersFacade.ɵfac });


/***/ }),

/***/ 1949:
/*!**************************************************!*\
  !*** ./libs/users/src/lib/state/users.models.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7181:
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.reducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USERS_FEATURE_KEY": () => (/* binding */ USERS_FEATURE_KEY),
/* harmony export */   "initialUsersState": () => (/* binding */ initialUsersState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 743);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 5072);


const USERS_FEATURE_KEY = 'users';
const initialUsersState = {
    user: null,
    isAuthenticated: false
};
const usersReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialUsersState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession, (state) => (Object.assign({}, state))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionSuccess, (state, action) => (Object.assign(Object.assign({}, state), { user: action.user, isAuthenticated: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed, (state) => (Object.assign(Object.assign({}, state), { user: null, isAuthenticated: false }))));
function reducer(state, action) {
    return usersReducer(state, action);
}


/***/ }),

/***/ 6552:
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/state/users.selectors.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUsersState": () => (/* binding */ getUsersState),
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "getUserIsAuth": () => (/* binding */ getUserIsAuth)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 743);
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.reducer */ 7181);


// Lookup the 'Users' feature state managed by NgRx
const getUsersState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_users_reducer__WEBPACK_IMPORTED_MODULE_0__.USERS_FEATURE_KEY);
const getUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getUsersState, (state) => state.user);
const getUserIsAuth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getUsersState, (state) => state.isAuthenticated);


/***/ }),

/***/ 903:
/*!********************************************!*\
  !*** ./libs/users/src/lib/users.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8342);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 7390);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1207);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 4468);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 3771);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 7292);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 743);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ 9496);
/* harmony import */ var _state_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/users.reducer */ 7181);
/* harmony import */ var _state_users_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/users.effects */ 7415);
/* harmony import */ var _state_users_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/users.facade */ 3899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7282);















const routes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];
class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_state_users_facade__WEBPACK_IMPORTED_MODULE_3__.UsersFacade], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature(_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.USERS_FEATURE_KEY, _state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsModule.forFeature([_state_users_effects__WEBPACK_IMPORTED_MODULE_2__.UsersEffects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsFeatureModule] }); })();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2209)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map