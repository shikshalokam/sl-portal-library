(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material'), require('@angular/router'), require('@angular/http'), require('@angular/common'), require('ngx-spinner'), require('@angular/forms'), require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('shikshalokamcoremodule', ['exports', '@angular/material', '@angular/router', '@angular/http', '@angular/common', 'ngx-spinner', '@angular/forms', '@angular/core', '@angular/common/http'], factory) :
    (factory((global.shikshalokamcoremodule = {}),global.ng.material,global.ng.router,global.ng.http,global.ng.common,global.i2,global.ng.forms,global.ng.core,global.ng.common.http));
}(this, (function (exports,material,router,http,i1,i2,forms,i0,i1$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavbarComponent = /** @class */ (function () {
        function NavbarComponent() {
            this.showDropdown = false;
            this.Logout = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        NavbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.openDropdown = /**
         * @return {?}
         */
            function () {
                this.showDropdown = !this.showDropdown;
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.onSignout = /**
         * @return {?}
         */
            function () {
                this.Logout.emit(true);
            };
        NavbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-navbar',
                        template: "<div *ngIf=\"currentUser\">\n\n<nav class=\"navbar noMarginPadding \">\n\n    <div class=\"col-sm-6  col-md-6 col-xs-6 col-lg-6 alingCenterline noMarginPadding\">\n  \n      <img  class=\"logo\" src ={{logo}} >\n      <!-- <mat-card-title class=\"pageBrand\">\n        <strong>{{ 'brand' | translate }}</strong>\n      </mat-card-title> -->\n        </div>\n  \n    <!-- <div class=\"col-sm-4 mod \">\n         <mat-card-title style=\"font-size:18px; color:gray; text-align: center;\" >\n          Sikhshalocham Samikhsa \n            <mat-icon svgIcon=\"thumbs-up\" style=\"font-size:29px; color: gray;\">\n            </mat-icon>\n        </mat-card-title> \n      </div> -->\n  \n    <div class=\"col-sm-6 col-md-6 col-xs-6 col-lg-6 \">\n      <span class=\"right _flex-box alingCenterline\">\n        <button mat-icon-button (click)=\"openDropdown()\">\n              <i class=\"material-icons\">\n                  apps\n                  </i>\n        </button>\n            <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n              <div class=\"dropdownDiv\">\n                <div class=\"col-sm-3 dropdownFeature\">\n                    <div class=\"verticalCenteralign\">\n                      <div class=\"apple\" >\n                        <i class=\"material-icons\" id=\"whiteIcon\">\n                          create\n                        </i>\n                      </div>\n                      <div class=\"active\">\n                        {{'menuDropdown.myApps' | translate}}\n                      </div>\n                    </div>\n                </div>\n              </div>\n            </div>\n      <span mat-button [matMenuTriggerFor]=\"menu\" class=\"alingCenterline _cursor-pointer\">\n              <i class=\"material-icons brand dropdownIcon\">\n                  person\n                  </i>\n            <!-- <span class=\"brand \">{{currentUser?.name}}</span> -->\n        <i class=\"material-icons brand icon\">\n          keyboard_arrow_down\n        </i>\n      </span>\n      <mat-menu #menu=\"matMenu\">\n        <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n                supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item  class=\"matmenuIcon black\">\n          <i class=\"material-icons\">\n            done\n          </i>\n          <span class=\"padding\">{{currentUser?.name}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n          <span class=\"bigPadding black\">\n              {{'menuDropdown.signOut' | translate}}\n          </span>\n        </span>\n      </mat-menu>\n      <!-- <div class=\"right horizontalLine\">\n        <i class=\"material-icons brand helpIcon\">\n          help_outline\n        </i>\n      </div> -->\n  </span>\n  \n    </div>\n  </nav>\n</div>",
                        styles: [".noMarginPadding{margin:0;padding:0}.brand{color:var(--primary-color);margin-bottom:0}.logo{height:50px}.apple{background-image:linear-gradient(to bottom,#1cdffe 10%,#2462e9 90%);height:80px;width:80px;border:1px solid var(--primary-color);border-radius:15px;padding:10px;display:flex;align-items:center;justify-content:center}.horizontalLine{position:relative;padding:0 8px}.icon{font-size:16px;padding-right:10px}.helpIcon{font-weight:10px}.horizontalLine:before{content:\"\";background:var(--border-color);position:absolute;bottom:20%;left:-5px;height:60%;width:1px}.navbar{display:flex;align-items:center}.line{line-height:12px}.navicon{font-size:80px;color:linear-gradient(to bottom,from var(--primary-color) 100%,to var(--blue-gradient) 100%)}.dropdownDiv{color:#000;background-color:#fff;position:absolute;min-width:500px;height:350px;right:8px;top:35px;z-index:105;border-radius:2px;box-shadow:0 0 3px 3px rgba(0,0,0,.08);margin:20px;padding:20px 0}.dropdownDiv:before{content:\"\";position:absolute;top:-27px;right:60px;border-left:13px solid transparent;border-right:13px solid transparent;border-top:13px solid transparent;border-bottom:13px solid rgba(0,0,0,.08)}.dropdownDiv:after{content:\"\";position:absolute;top:-24px;right:60px;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid transparent;border-bottom:12px solid #fff}.dropdownFeature{padding:20px}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transperent;z-index:101}#whiteIcon{color:#fff;font-size:45px;line-height:1}.verticalCenteralign{display:flex;flex-direction:column;align-items:center;cursor:pointer}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:0}.pageMenu{margin-bottom:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;line-height:2}.active{margin-top:10px;border-radius:12px;border:1px solid #46a9ff;padding:5px 10px;background-color:#e5f2fe;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;white-space:nowrap;font-size:11px}.right{display:flex;justify-content:flex-end}.matmenuIcon{display:flex;align-items:center;color:#bababa}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:#4c4c4c}"]
                    }] }
        ];
        /** @nocollapse */
        NavbarComponent.ctorParameters = function () { return []; };
        NavbarComponent.propDecorators = {
            dropdownLabel: [{ type: i0.Input }],
            currentUser: [{ type: i0.Input }],
            logo: [{ type: i0.Input }],
            Logout: [{ type: i0.Output }]
        };
        return NavbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidenavComponent = /** @class */ (function () {
        function SidenavComponent() {
        }
        /**
         * @return {?}
         */
        SidenavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log(this.programsShow);
            };
        SidenavComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-sidenav',
                        template: "  <div class=\"sideNavheading\" routerLink=\"../programs\"  matTooltip=\"{{'message.goToProgramDashboard' | translate}}\" *ngIf=\"programsShow\">\n    <i class=\"material-icons\">\n      keyboard_arrow_left\n    </i> {{ 'headings.programs' | translate }}\n  </div>\n    <!-- <div routerLink = \"{{option.anchorLink}}\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLinkActive=\"active\"*ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n    <!-- <div [routerLink]=\"['assessments/:programId/:assessmentId/'+option.link?.anchorLink,option.link.programId,option.link.assessmentId ]\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n        <!-- <div [routerLink]=\"[option.link.anchorLink ]\"  [queryParamsHandling]=\"preserve\" [queryParams]=\"{ programId : option.link.programId , assessmentId : option.link.assessmentId}\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n\n\n\n    <div [routerLink]=\"[option.anchorLink ]\"  routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\">\n        <span class=\"sideNavSubheading\"> \n            {{ option.value | translate }}\n          </span>\n      </div>\n   ",
                        styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;height:40px;display:flex;cursor:pointer}.subHeading{color:var(--grey-color)}.sideNavheading{height:40px;display:flex;align-items:center;padding:0 0 0 5px;cursor:pointer}.active,.sideNavheading:hover,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}"]
                    }] }
        ];
        /** @nocollapse */
        SidenavComponent.ctorParameters = function () { return []; };
        SidenavComponent.propDecorators = {
            link: [{ type: i0.Input }],
            programsShow: [{ type: i0.Input }]
        };
        return SidenavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResponsiveNavbarComponent = /** @class */ (function () {
        function ResponsiveNavbarComponent() {
            this.openDrawer = new i0.EventEmitter();
            this.Logout = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        ResponsiveNavbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.openSideNav();
            };
        /**
         * @return {?}
         */
        ResponsiveNavbarComponent.prototype.onSignout = /**
         * @return {?}
         */
            function () {
                this.Logout.emit(true);
            };
        /**
         * @return {?}
         */
        ResponsiveNavbarComponent.prototype.openSideNav = /**
         * @return {?}
         */
            function () {
                this.openDrawer.emit(true);
            };
        ResponsiveNavbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-responsive-navbar',
                        template: "<nav class=\"responsiveNavbar noMarginPadding\">\n  <body class=\" col-xs-12 noMarginPadding alingCenterline\" >\n      <span class=\"col-xs-4 alingCenterline noMarginPadding\">\n          <button mat-icon-button>\n          <i class=\"material-icons\" (click)=\"openSideNav()\">\n            menu\n              </i>\n              </button>\n      </span>\n    \n    <mat-card-title class=\"pageBrand col-xs-4 alingCenterline\">\n        <img  class=\"logo\" src ={{logo}} >\n      <!-- <strong>{{ 'brandResponsive' | translate }}</strong> -->\n    </mat-card-title>\n\n    <span class=\"col-xs-4 noMarginPadding _flexEnd\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\" _cursor-pointer\">\n          <i class=\"material-icons dropdownIcon\">\n              person\n              </i>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding \">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n  \n        </mat-menu>\n      </span>\n    \n    </body>\n</nav>",
                        styles: [".noMarginPadding{margin:0;padding:0}.icon{font-size:16px;padding-right:10px}._flexEnd{display:flex;justify-content:flex-end}.logo{height:50px}.responsiveNavbar{display:none;align-items:center;height:51px}.line{line-height:12px}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:-4px;display:flex;justify-content:center}.pageMenu{margin-top:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;margin-top:7px;font-weight:700}.active{color:var(--white-color);background-color:var(--primary-color)}.matmenuIcon{display:flex;align-items:center;color:var(--grey-color)}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--black-color)}.responsiveLogo{margin-top:-5px}"]
                    }] }
        ];
        /** @nocollapse */
        ResponsiveNavbarComponent.ctorParameters = function () { return []; };
        ResponsiveNavbarComponent.propDecorators = {
            openDrawer: [{ type: i0.Output }],
            currentUser: [{ type: i0.Input }],
            logo: [{ type: i0.Input }],
            Logout: [{ type: i0.Output }]
        };
        return ResponsiveNavbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgramSidenavComponent = /** @class */ (function () {
        function ProgramSidenavComponent() {
            this.program = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        ProgramSidenavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.currentProgramIndex = 0;
            };
        /**
         * @param {?} assessments
         * @param {?} i
         * @return {?}
         */
        ProgramSidenavComponent.prototype.programSelect = /**
         * @param {?} assessments
         * @param {?} i
         * @return {?}
         */
            function (assessments, i) {
                this.currentProgramIndex = i;
                this.program.emit(assessments);
            };
        ProgramSidenavComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-program-sidenav',
                        template: "<div class=\"heading\">\n    {{ 'headings.programs' | translate }}\n</div>\n<div class=\"subHeading\" *ngFor=\"let results of result; let i=index\" (click)=\"programSelect(results, i)\">\n    <span class=\"sideNavSubheading\" [ngClass]=\"{'active': currentProgramIndex === i}\">\n        <div class=\"overFlowHidden\" matTooltip=\"{{results.name}}\" >\n            {{results.name}}\n        </div>\n    </span>\n</div>\n",
                        styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;min-height:40px;display:flex;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.subHeading{color:var(--grey-color)}.active,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}.heading{height:40px;display:flex;align-items:center;padding:0 0 0 15px}.overFlowHidden{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
                    }] }
        ];
        /** @nocollapse */
        ProgramSidenavComponent.ctorParameters = function () { return []; };
        ProgramSidenavComponent.propDecorators = {
            result: [{ type: i0.Input }],
            program: [{ type: i0.Output }]
        };
        return ProgramSidenavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslateService = /** @class */ (function () {
        function TranslateService(http$$1) {
            this.http = http$$1;
            this.language = {};
        }
        /**
         * @param {?} lang
         * @return {?}
         */
        TranslateService.prototype.use = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
                var _this = this;
                return new Promise(( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    /** @type {?} */
                    var langPath = "assets/i18n/" + (lang || 'en') + ".json";
                    // const langPath = `assets/i18n/od.json`;
                    _this.http.get(langPath).subscribe(( /**
                     * @param {?} translation
                     * @return {?}
                     */function (translation) {
                        _this.language = Object.assign({}, translation || {});
                        resolve(_this.language);
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        _this.language = {};
                        resolve(_this.language);
                    }));
                }));
            };
        TranslateService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        TranslateService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient }
            ];
        };
        return TranslateService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslatePipe = /** @class */ (function () {
        function TranslatePipe(translate) {
            this.translate = translate;
            this.resarray = '';
            this.obj = {};
        }
        /**
         * @param {?} key
         * @return {?}
         */
        TranslatePipe.prototype.transform = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                var _this = this;
                if (key.indexOf('.') === -1) {
                    return this.translate['language'][key] || key;
                }
                else {
                    /** @type {?} */
                    var array = key.split(".");
                    this.resarray = this.translate['language'];
                    array.forEach(( /**
                     * @param {?} element
                     * @return {?}
                     */function (element) {
                        if (_this.resarray) {
                            _this.resarray = _this.resarray[element];
                        }
                    }));
                    return this.resarray || key;
                }
            };
        TranslatePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'translate',
                        pure: false
                    },] }
        ];
        /** @nocollapse */
        TranslatePipe.ctorParameters = function () {
            return [
                { type: TranslateService }
            ];
        };
        return TranslatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CamelCasePipe = /** @class */ (function () {
        function CamelCasePipe() {
        }
        /**
         * @param {?} camelCase
         * @return {?}
         */
        CamelCasePipe.prototype.transform = /**
         * @param {?} camelCase
         * @return {?}
         */
            function (camelCase) {
                if (camelCase == null || camelCase == "") {
                    return camelCase;
                }
                camelCase = camelCase.trim();
                /** @type {?} */
                var newText = "";
                for (var i = 0; i < camelCase.length; i++) {
                    if (/[A-Z]/.test(camelCase[i])
                        && i != 0
                        && /[a-z]/.test(camelCase[i - 1])) {
                        newText += " ";
                    }
                    if (i == 0 && /[a-z]/.test(camelCase[i])) {
                        newText += camelCase[i].toUpperCase();
                    }
                    else {
                        newText += camelCase[i];
                    }
                }
                return newText;
            };
        CamelCasePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'camelcase',
                        pure: false
                    },] }
        ];
        /** @nocollapse */
        CamelCasePipe.ctorParameters = function () { return []; };
        return CamelCasePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NoValuePipe = /** @class */ (function () {
        function NoValuePipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NoValuePipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value == null || value == "") {
                    return "-NA-";
                }
                return value;
            };
        NoValuePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'blank',
                        pure: false
                    },] }
        ];
        /** @nocollapse */
        NoValuePipe.ctorParameters = function () { return []; };
        return NoValuePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiInterceptor = /** @class */ (function () {
        function ApiInterceptor() {
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        ApiInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
            function (req, next) {
                /** @type {?} */
                var downloadReportUrl = 'programsSubmissionStatus/DCPCR?evidenceId=';
                /** @type {?} */
                var authToken = localStorage.getItem('auth-token');
                if (req.url.includes(downloadReportUrl)) {
                    /** @type {?} */
                    var authReq_1 = req.clone({ setHeaders: { "internal-access-token": localStorage.getItem('downloadReport-token') } });
                    return next.handle(authReq_1);
                }
                /** @type {?} */
                var authReq = req.clone({ setHeaders: { "X-authenticated-user-token": authToken } });
                return next.handle(authReq);
            };
        ApiInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        return ApiInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UtilityService = /** @class */ (function () {
        function UtilityService(location, spinner) {
            this.location = location;
            this.spinner = spinner;
        }
        /**
         * @return {?}
         */
        UtilityService.prototype.onBack = /**
         * @return {?}
         */
            function () {
                this.location.back();
            };
        /**
         * @return {?}
         */
        UtilityService.prototype.loaderShow = /**
         * @return {?}
         */
            function () {
                this.spinner.show();
            };
        /**
         * @return {?}
         */
        UtilityService.prototype.loaderHide = /**
         * @return {?}
         */
            function () {
                this.spinner.hide();
            };
        /**
         * @param {?} inputs
         * @return {?}
         */
        UtilityService.prototype.toGroup = /**
         * @param {?} inputs
         * @return {?}
         */
            function (inputs) {
                var _this = this;
                /** @type {?} */
                var group = {};
                inputs.forEach(( /**
                 * @param {?} inputs
                 * @return {?}
                 */function (inputs) {
                    if (inputs.input == "array") {
                        group[inputs.field] = _this.createFormArray(inputs);
                    }
                    else {
                        group[inputs.field] = inputs.validation.required ? new forms.FormControl(inputs.value || '', forms.Validators.required)
                            : new forms.FormControl(inputs.value || '');
                    }
                }));
                return new forms.FormGroup(group);
            };
        /**
         * @param {?} inputs
         * @return {?}
         */
        UtilityService.prototype.createFormArray = /**
         * @param {?} inputs
         * @return {?}
         */
            function (inputs) {
                /** @type {?} */
                var elements = [];
                inputs.array.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    elements[element['field']] = element.validation.required ? new forms.FormControl(element.value || '', forms.Validators.required)
                        : new forms.FormControl(element.value || '');
                }));
                return new forms.FormArray(elements);
            };
        UtilityService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UtilityService.ctorParameters = function () {
            return [
                { type: i1.Location },
                { type: i2.NgxSpinnerService }
            ];
        };
        /** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(i0.inject(i1.Location), i0.inject(i2.NgxSpinnerService)); }, token: UtilityService, providedIn: "root" });
        return UtilityService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiService = /** @class */ (function () {
        function ApiService(http$$1) {
            this.http = http$$1;
        }
        /**
         * @param {?} url
         * @return {?}
         */
        ApiService.prototype.get = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return this.http.get(url);
            };
        /**
         * @param {?} url
         * @return {?}
         */
        ApiService.prototype.getJSON = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return this.http.get(url);
            };
        /**
         * @param {?} url
         * @param {?} updateData
         * @return {?}
         */
        ApiService.prototype.post = /**
         * @param {?} url
         * @param {?} updateData
         * @return {?}
         */
            function (url, updateData) {
                return this.http.post(url, updateData);
            };
        /**
         * @param {?} url
         * @param {?} file
         * @param {?} name
         * @return {?}
         */
        ApiService.prototype.upload = /**
         * @param {?} url
         * @param {?} file
         * @param {?} name
         * @return {?}
         */
            function (url, file, name) {
                /** @type {?} */
                var formData = new FormData();
                if (file) {
                    Array.from(file).forEach(( /**
                     * @param {?} f
                     * @return {?}
                     */function (f) {
                        formData.append(name, f);
                    }));
                }
                console.log(formData);
                return this.http.post(url, formData, { reportProgress: true, observe: 'events' });
            };
        ApiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient }
            ];
        };
        /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1$1.HttpClient)); }, token: ApiService, providedIn: "root" });
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        /**
         * @return {?}
         */
        CoreModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: CoreModule,
                    providers: [TranslateService, UtilityService, ApiInterceptor, ApiService]
                };
            };
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            TranslatePipe,
                            CamelCasePipe,
                            NoValuePipe,
                            NavbarComponent,
                            SidenavComponent,
                            ResponsiveNavbarComponent,
                            ProgramSidenavComponent
                        ],
                        imports: [
                            i2.NgxSpinnerModule,
                            i1.CommonModule,
                            router.RouterModule,
                            i1$1.HttpClientModule,
                            material.MatButtonModule,
                            material.MatMenuModule,
                            material.MatIconModule,
                            http.HttpModule,
                            material.MatCardModule,
                            i1$1.HttpClientModule,
                            material.MatDividerModule,
                            material.MatTooltipModule
                        ],
                        providers: [
                            {
                                provide: i1$1.HTTP_INTERCEPTORS,
                                useClass: ApiInterceptor,
                                multi: true
                            },
                        ],
                        exports: [
                            TranslatePipe,
                            NavbarComponent,
                            SidenavComponent,
                            ResponsiveNavbarComponent,
                            CamelCasePipe,
                            NoValuePipe,
                            ProgramSidenavComponent,
                            i1.CommonModule,
                        ]
                    },] }
        ];
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CoreModule = CoreModule;
    exports.CamelCasePipe = CamelCasePipe;
    exports.NoValuePipe = NoValuePipe;
    exports.TranslatePipe = TranslatePipe;
    exports.ApiService = ApiService;
    exports.ApiInterceptor = ApiInterceptor;
    exports.TranslateService = TranslateService;
    exports.UtilityService = UtilityService;
    exports.NavbarComponent = NavbarComponent;
    exports.ProgramSidenavComponent = ProgramSidenavComponent;
    exports.ResponsiveNavbarComponent = ResponsiveNavbarComponent;
    exports.SidenavComponent = SidenavComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=shikshalokamcoremodule.umd.js.map