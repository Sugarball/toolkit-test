(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/material'), require('mat-range-datepicker'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('viz-toolkit', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/material', 'mat-range-datepicker', '@angular/forms'], factory) :
    (factory((global['viz-toolkit'] = {}),global.ng.core,global.ng.common,global.ng.router,global.ng.material,null,global.ng.forms));
}(this, (function (exports,core,common,router,material,matRangeDatepicker,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizHeaderComponent = (function () {
        function VizHeaderComponent() {
            this.rightBtnClick = new core.EventEmitter();
            this.hamburgerClick = new core.EventEmitter();
            this.isDrop = false;
        }
        /**
         * @return {?}
         */
        VizHeaderComponent.prototype.rightBtnOnClick = /**
         * @return {?}
         */
            function () {
                this.rightBtnClick.emit();
                this.isDrop = !this.isDrop;
            };
        /**
         * @return {?}
         */
        VizHeaderComponent.prototype.hamburgerOnClick = /**
         * @return {?}
         */
            function () {
                this.hamburgerClick.emit();
            };
        VizHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'viz-header',
                        template: "<header class=\"nav-bar nav-bar-dark\">\n  <div class=\"navbar-wrapper\">\n    <div class=\"navbar-header\">\n      <span class=\"navbar-brand\">\n        <a [routerLink]=\"brandLink\">\n          <img *ngIf=\"svgIcon\" [src]=\"svgIcon\" alt=\"Vizient\" />\n          <svg *ngIf=\"!svgIcon\" width=\"113\" height=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g fill=\"#FF4D00\" fill-rule=\"evenodd\">\n              <path d=\"M43.252 27.51c.435 0 .653-.23.653-.691v-2.42c0-.46-.218-.691-.653-.691l-9.067-.001c.872-2.211 6.455-7.595 8.376-10.663.713-1.139 1.075-2.02 1.075-2.593 0-.666-.32-2.152-2.574-2.152H30.417c-.435 0-.653.23-.653.692v2.382c0 .46.218.692.653.692h8.11c-.408.786-5.788 6.529-7.781 9.95-.524.9-1.249 2.329-1.249 3.42 0 1.384.82 2.076 2.459 2.076h11.296zm23.515-12.564c0-1.5-.937-3.729-3.735-3.729-1.05 0-3.792.409-4.219 4.613h7.147c.537 0 .807-.294.807-.884zm-.154 4.38H58.62c0 2.547 1.758 4.803 4.61 4.803 1.742 0 3.305-.601 4.688-1.806.463-.463.797.063.808.077 0 0 1.35 1.911 1.536 2.171.049.084.116.288-.192.596-1.82 1.82-4.137 2.728-6.955 2.728-5.813 0-8.798-4.748-8.798-10.144 0-6.481 4.153-10.105 8.875-10.105 4.065 0 7.608 3.104 7.608 7.416 0 2.843-1.397 4.264-4.188 4.264zm37.223-7.453c.436 0 .653-.231.653-.692V8.985c0-.46-.217-.686-.653-.686h-4.688V3.81c0-.435-.23-.653-.69-.653H95.46c-.461 0-.692.218-.692.653V8.3h-2.497c-.435 0-.653.225-.653.686v2.196c0 .46.218.692.653.692h2.497v9.221c0 2.744 1.024 4.252 1.537 4.841.512.59 1.816 1.89 4.457 1.883 2.355-.006 4.294-1.307 5.11-2.152.323-.334.268-.524.092-.754l-1.513-1.974c-.215-.298-.586-.28-.807-.077-.526.433-1.646 1.394-3.16.831-1.101-.41-1.336-1.638-1.336-2.56v-9.26h4.688zM73.759 26.857c0 .436.23.654.692.654h2.997c.461 0 .692-.218.692-.654V12.372c.895-.608 3.692-1.55 5.726-.355 1.233.725 1.698 2.702 1.69 5.004l-.001 9.836c0 .436.23.654.691.654h2.998c.46 0 .691-.218.691-.654V16.714c0-5.994-2.74-9.023-8.222-9.068-2.655-.022-5.596.996-7.147 2.344-.534.465-.806 1.025-.806 1.69v15.177zM50.437 8.3H47.44c-.461 0-.691.218-.691.654v17.904c0 .436.23.654.691.654h2.997c.461 0 .692-.218.692-.654V8.953c0-.436-.23-.654-.692-.654zm-25.013 0h-2.997c-.46 0-.691.218-.691.654v17.904c0 .436.23.654.691.654h2.997c.461 0 .692-.218.692-.654V8.953c0-.436-.23-.654-.692-.654zM48.94 0a2.651 2.651 0 1 0 0 5.302 2.651 2.651 0 0 0 0-5.302zM23.926 0a2.651 2.651 0 1 0 0 5.302 2.651 2.651 0 0 0 0-5.302zM7.41 26.704C2.347 20.732.035 9.07.01 8.933c-.051-.283.074-.634.6-.634h3.265c.333 0 .543.166.615.5 1.312 6.124 3.831 11.99 5.033 13.64 1.202-1.65 3.72-7.516 5.034-13.64.071-.334.282-.5.614-.5h3.266c.525 0 .65.35.6.634-.024.138-2.336 11.8-7.4 17.77-.565.666-1.239 1-2.114 1-.875 0-1.549-.334-2.113-1zM109.73 25.744h.367c.148 0 .26-.023.333-.069.075-.046.112-.125.112-.238v-.046c0-.132-.035-.223-.104-.272a.48.48 0 0 0-.28-.073h-.429v.698zm.857 1.08l-.46-.797h-.398v.797h-.314V24.77h.782c.21 0 .373.05.49.15.117.1.176.252.176.456v.061a.552.552 0 0 1-.103.353.51.51 0 0 1-.288.176l.506.858h-.39zm-.475-2.985a1.99 1.99 0 1 0-.002 3.98 1.99 1.99 0 0 0 .002-3.98zm1.624 1.989c0 .897-.726 1.623-1.624 1.623a1.623 1.623 0 1 1 0-3.247c.898 0 1.624.727 1.624 1.624z\"/>\n            </g>\n          </svg>\n          <span class=\"page-name hidden-xs hidden-sm\">{{title}}</span>\n        </a>\n      </span>\n    </div>\n    <div class=\"navbar-right\">\n      <div class=\"navbar-welcome\" (click)='rightBtnOnClick()' *ngIf=\"type === 'primary'\">\n        <span>Welcome, {{userName}}</span>\n        <mat-icon>{{isDrop? \"arrow_drop_up\":\"arrow_drop_down\"}}</mat-icon>\n      </div>\n      <div class=\"navbar-hamburger\" (click)='hamburgerOnClick()'>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </div>\n    </div>\n    <div class=\"navbar-Menu\" *ngIf=\"type === 'rightMenu'\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</header>",
                        styles: [":host .nav-bar{background:#fff;z-index:10;box-shadow:0 1px 0 0 #e9e9e9;padding:0 15px}:host .nav-bar .navbar-wrapper{display:flex;height:72px;flex-direction:row;justify-content:space-between;align-items:center}:host .nav-bar .navbar-wrapper .navbar-header{display:inline-flex}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a{display:inline-flex;vertical-align:middle;text-decoration:none}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a span{line-height:24px}@media (max-width:543px){:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a .hidden-xs{display:none!important}}@media (min-width:544px) and (max-width:767px){:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a .hidden-sm{display:none!important}}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand .page-name{border-left:1px solid #e5e5e5;padding-left:15px;margin-left:30px;padding-top:2px;font-size:18px;color:#ff4e00;font-weight:400}@media (max-width:991px){:host .nav-bar .navbar-wrapper .navbar-Menu{display:none}}@media (min-width:768px){:host .nav-bar{padding:0 40px}:host .nav-bar .navbar-right{margin-right:0}}:host .nav-bar .navbar-right{display:flex;flex-direction:row}:host .nav-bar .navbar-right .navbar-welcome{font-size:16px;color:#ff4e00;cursor:pointer;display:flex}@media (max-width:991px){:host .nav-bar .navbar-right .navbar-welcome{display:none}}:host .nav-bar .navbar-right .navbar-welcome span{margin-right:10px;display:inline-block;line-height:24px;font-weight:400}:host .nav-bar .navbar-right .navbar-welcome .mat-icon{display:inline-block}:host .nav-bar .navbar-right .navbar-hamburger{background-color:transparent;cursor:pointer}@media (min-width:991px){:host .nav-bar .navbar-right .navbar-hamburger{display:none}}:host .nav-bar .navbar-right .navbar-hamburger .icon-bar{height:2px;width:20px;background-color:#ff4e00;display:block;margin-top:3px}"]
                    },] },
        ];
        /** @nocollapse */
        VizHeaderComponent.ctorParameters = function () { return []; };
        VizHeaderComponent.propDecorators = {
            title: [{ type: core.Input }],
            userName: [{ type: core.Input }],
            brandLink: [{ type: core.Input }],
            svgIcon: [{ type: core.Input }],
            type: [{ type: core.Input }],
            rightBtnClick: [{ type: core.Output }],
            hamburgerClick: [{ type: core.Output }]
        };
        return VizHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizHeaderMudule = (function () {
        function VizHeaderMudule() {
        }
        VizHeaderMudule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            material.MatIconModule
                        ],
                        exports: [
                            VizHeaderComponent
                        ],
                        declarations: [
                            VizHeaderComponent
                        ],
                    },] },
        ];
        return VizHeaderMudule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizDateRangePickerComponent = (function () {
        function VizDateRangePickerComponent(_dateAdapter) {
            var _this = this;
            this._dateAdapter = _dateAdapter;
            this.onApply = new core.EventEmitter();
            this.onDateInput = function (e) {
                console.log('input', _this.lastDateInput === e.value);
                _this.lastDateInput = /** @type {?} */ (e.value);
            };
            this.onDateChange = function (e) {
                console.log('select', _this.lastDateInput === e.value);
                _this.lastDateChange = /** @type {?} */ (e.value);
            };
        }
        /**
         * @return {?}
         */
        VizDateRangePickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.dateShot = this.date;
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        VizDateRangePickerComponent.prototype.onInputDate = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.date = $event;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VizDateRangePickerComponent.prototype.onClose = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                console.log(this.dateShot, this.date);
                if (!this.dateShot || !this.date)
                    return;
                if (this._dateAdapter.sameDate(this.dateShot.begin, this.date.begin)
                    &&
                        this._dateAdapter.sameDate(this.dateShot.end, this.date.end)) ;
                else {
                    this.dateShot = this.date;
                    this.onApply.emit(this.date);
                }
            };
        VizDateRangePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'viz-date-range-picker',
                        template: "<div class=\"application-dropdown\">\n  <form class='date-range-picker vizient-input'>\n    <mat-form-field>\n        <input matInput\n          placeholder=\"Date\"\n          [matRangeDatepicker]=\"resultPicker\"\n          [ngModel]=\"date\"\n          (ngModelChange)=\"onInputDate($event)\"\n          name=\"date\"\n          (dateInput)=\"onDateInput($event)\"\n          (dateChange)=\"onDateChange($event)\">\n        <mat-range-datepicker\n          #resultPicker [rangeMode]=\"true\" (closed)=\"this.onClose($event)\">\n        </mat-range-datepicker>\n        <mat-range-datepicker-toggle matSuffix [for]=\"resultPicker\"></mat-range-datepicker-toggle>\n    </mat-form-field>\n  </form>\n</div>",
                        styles: [":host .mat-input-element{color:#000}:host .mat-form-field{width:100%}:host .mat-form-field .date-range-picker .mat-form-field-flex{width:100%!important}:host .mat-form-field .date-range-picker .mat-form-field-flex .mat-form-field-infix{width:100%}.date-range-picker ::ng-deep .mat-form-field-flex{width:100%}@media only screen and (max-width:600px){.date-range-picker ::ng-deep .mat-form-field-flex{width:100%}}::ng-deep .quick-select-sec .select-title{font-size:13px;font-weight:400}@media only screen and (min-width:601px){::ng-deep .calendar-button-sec{line-height:84px!important;padding:4px 24px!important}::ng-deep .mat-datepicker-content{height:501px!important}}"]
                    },] },
        ];
        /** @nocollapse */
        VizDateRangePickerComponent.ctorParameters = function () {
            return [
                { type: matRangeDatepicker.DateAdapter }
            ];
        };
        VizDateRangePickerComponent.propDecorators = {
            date: [{ type: core.Input }],
            onApply: [{ type: core.Output }]
        };
        return VizDateRangePickerComponent;
    }());
    // @Pipe({name: 'lastdays'})
    // export class LastDaysPipe<D> implements PipeTransform {
    //   constructor(
    //     @Optional() private _dateAdapter: DateAdapter<Date>,
    //   ) {}
    //   transform(value: matRangeDatepickerRangeValue<Date> | D | null, options: string): any {
    //     if (value && value.hasOwnProperty('begin')) {
    //       let _value = <matRangeDatepickerRangeValue<Date>> value;
    //       if (this._dateAdapter.sameDate(this._dateAdapter.today(), _value.end)) {
    //         // return "Last ? Days";
    //         return _value;
    //       } else {
    //         return _value;
    //       }
    //     } else {
    //       return value;
    //     }
    //   }
    // }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizDateRangePickerMudule = (function () {
        function VizDateRangePickerMudule() {
        }
        VizDateRangePickerMudule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatIconModule,
                            material.MatDatepickerModule,
                            material.MatFormFieldModule,
                            material.MatInputModule,
                            material.MatNativeDateModule,
                            forms.FormsModule,
                            matRangeDatepicker.MatRangeDatepickerModule,
                            matRangeDatepicker.MatRangeNativeDateModule
                        ],
                        exports: [
                            VizDateRangePickerComponent
                        ],
                        declarations: [
                            VizDateRangePickerComponent,
                        ],
                    },] },
        ];
        return VizDateRangePickerMudule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizSelectComponent = (function () {
        function VizSelectComponent() {
            this.options = [];
            this.select = new core.EventEmitter();
            this.menuShown = false;
        }
        /**
         * @return {?}
         */
        VizSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.selected = this.options[0];
            };
        /**
         * @return {?}
         */
        VizSelectComponent.prototype.showMenu = /**
         * @return {?}
         */
            function () {
                this.menuShown = true;
            };
        /**
         * @return {?}
         */
        VizSelectComponent.prototype.hideMenu = /**
         * @return {?}
         */
            function () {
                this.menuShown = false;
            };
        /**
         * @param {?} option
         * @return {?}
         */
        VizSelectComponent.prototype.selectOption = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                this.selected = option;
                this.select.emit(option);
                this.trigger.closeMenu();
            };
        /**
         * @return {?}
         */
        VizSelectComponent.prototype.message = /**
         * @return {?}
         */
            function () {
                return this.selected.title;
            };
        VizSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'viz-select',
                        template: "<div class=\"select-dropdown\">\n  <form class=\"vizient-input\">\n    <mat-form-field class=\"form-full-width\"\n                    [ngClass]=\"{'mat-focused': menuShown}\"\n                    [matMenuTriggerFor]=\"optionMenu\"\n                    (menuClosed)=\"hideMenu()\"\n                    (menuOpened)=\"showMenu()\">\n      <input matInput\n             type=\"text\"\n             [placeholder]=\"placeholder\"\n             [value]=\"message()\"\n             readonly/>\n      <mat-icon matSuffix\n                class=\"select-dropdown_icon\"\n                [ngClass]=\"{'select-dropdown_icon--active' : menuShown}\">{{menuShown?\"arrow_drop_up\":\"arrow_drop_down\"}}</mat-icon>\n    </mat-form-field>\n  </form>\n  <mat-menu #optionMenu=\"matMenu\"\n            [overlapTrigger]=false\n            class=\"select-dropdown_menu mat-elevation-z8\">\n    <div class=\"select-option\"\n         (click)=\"$event.stopPropagation()\">\n      <mat-list role=\"list\"\n                class=\"select-option_list\">\n        <mat-list-item role=\"listitem\"\n                       class=\"select-option_listItem\"\n                       [ngClass]=\"{'select-option_listItem-active' : option.title===selected}\"\n                       (click)=\"selectOption(option)\"\n                       *ngFor=\"let option of options\">{{option.title}}</mat-list-item>\n      </mat-list>\n    </div>\n  </mat-menu>\n</div>",
                        styles: [".select-option_list{font-weight:300;padding-top:0}.select-option_list ::ng-deep .mat-list-item{font-size:14px;height:40px;cursor:pointer}.select-option_list ::ng-deep .mat-list-item .mat-list-item-content{padding:0 24px}.select-option_listItem{color:#696969;height:40px}.select-option_listItem-active{color:#7f5eba}.select-option_listItem:hover{background-color:#f1f1f1;color:#7f5eba}.form-full-width{width:100%;cursor:pointer}.form-full-width input{cursor:pointer}.select-dropdown input{color:#000}.select-dropdown_icon{color:#9f9f9f}.select-dropdown_icon--active{color:#000}.vizient-input .mat-input-element{height:24px;line-height:24px;vertical-align:middle}.vizient-input ::ng-deep .mat-form-field-label{height:21.333px;line-height:21.333px;font-size:16px;margin-bottom:1px}.vizient-input ::ng-deep .mat-form-field-flex{align-items:stretch}.vizient-input ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-infix{margin-bottom:5px;padding-bottom:0}.vizient-input ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:0}.vizient-input ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{bottom:0;background-color:#c3c3c3}.vizient-input ::ng-deep .mat-icon{margin-top:17px}.vizient-input ::ng-deep .mat-datepicker-toggle{margin-top:17px;display:block;color:#9f9f9f}.vizient-input ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label{color:#9f9f9f}.vizient-input ::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:#7f5eba}.vizient-input ::ng-deep:hover .mat-form-field-appearance-legacy .mat-form-field-underline{background-color:#000}::ng-deep .mat-menu-panel.select-dropdown_menu{margin-top:1px;width:280px}::ng-deep .mat-menu-panel.select-dropdown_menu .mat-menu-content{padding:0}"]
                    },] },
        ];
        /** @nocollapse */
        VizSelectComponent.ctorParameters = function () { return []; };
        VizSelectComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            options: [{ type: core.Input }],
            trigger: [{ type: core.ViewChild, args: [material.MatMenuTrigger,] }],
            select: [{ type: core.Output }]
        };
        return VizSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizSelectModule = (function () {
        function VizSelectModule() {
        }
        VizSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatIconModule,
                            material.MatFormFieldModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatInputModule
                        ],
                        exports: [
                            VizSelectComponent
                        ],
                        declarations: [
                            VizSelectComponent
                        ],
                    },] },
        ];
        return VizSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizFooterComponent = (function () {
        function VizFooterComponent() {
            this.brands = [];
            this.leftBrands = [];
            this.rightBrands = [];
        }
        /**
         * @return {?}
         */
        VizFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.splitBrands();
            };
        /**
         * @return {?}
         */
        VizFooterComponent.prototype.splitBrands = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ count = this.brands.length;
                if (count) {
                    if (count % 2 == 0) {
                        var /** @type {?} */ leftCount = count / 2;
                        this.leftBrands = this.brands.slice(0, leftCount);
                        this.rightBrands = this.brands.slice(leftCount, count);
                    }
                    else {
                        var /** @type {?} */ leftCount = (count - 1) / 2;
                        this.leftBrands = this.brands.slice(0, leftCount);
                        this.rightBrands = this.brands.slice(leftCount, count);
                    }
                }
            };
        VizFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'viz-footer',
                        template: "<div class=\"footer-bar\">\n  <div class=\"footer-wrapper\">\n    <div class=\"footer-left\">\n      <ul class=\"nav\">\n        <li *ngFor=\"let brand of leftBrands\">\n          <a href={{brand.link}}>{{brand.title}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"footer-right\">\n      <ul class=\"nav\">\n        <li *ngFor=\"let brand of rightBrands\">\n          <a href={{brand.link}}>{{brand.title}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"footer-center\">\n    <p>Vizient MDA</p>\n    <p>&copy; 2018 Vizient & iLabs. All Rights Reserved.</p>\n  </div>\n</div>",
                        styles: [":host .footer-bar{background:#fff;border-top:1px solid #e5e5e5;position:relative;min-height:72px;bottom:0;left:0;right:0;padding:0 40px;display:block}:host .footer-center{z-index:1;position:absolute;top:48px;height:48px;left:0;right:0;text-align:center;padding:12px 0}@media (min-width:768px){:host .footer-center{top:0}}:host .footer-center p{padding:0;margin:0;line-height:24px}:host .footer-wrapper{z-index:999;display:flex;width:100%;flex-direction:row;justify-content:space-between;background-color:transparent;padding-top:16px;position:relative}:host .footer-wrapper .footer-left .nav li{margin-right:24px}:host .footer-wrapper .footer-left .nav li:nth-last-child(1){margin-right:0}:host .footer-wrapper .footer-right .nav li{margin-left:24px}:host .footer-wrapper ::ng-deep .nav{padding:0;margin:0;list-style-type:none;display:flex;flex-direction:row}:host .footer-wrapper ::ng-deep .nav li{list-style:none;cursor:pointer}:host .footer-wrapper ::ng-deep .nav li a{display:inline-flex;vertical-align:middle;text-decoration:none;color:#7f5eba}"]
                    },] },
        ];
        VizFooterComponent.propDecorators = {
            brands: [{ type: core.Input }]
        };
        return VizFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizFooterMudule = (function () {
        function VizFooterMudule() {
        }
        VizFooterMudule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                        ],
                        exports: [
                            VizFooterComponent
                        ],
                        declarations: [
                            VizFooterComponent
                        ],
                    },] },
        ];
        return VizFooterMudule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // import { VizMenuComponent } from './viz-menu.component';
    // import { VizMenuCellComponent } from './menu-cell/viz-menu-cell.component';
    // @NgModule({
    //   imports: [CommonModule, MatMenuModule],
    //   exports: [VizMenuComponent],
    //   declarations: [VizMenuComponent, VizMenuCellComponent]
    // })
    // export class VizMenuModule {}
    var /** @type {?} */ VizMenuModule = material.MatMenuModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // @NgModule({
    //   imports: [CommonModule, MatCheckboxModule],
    //   exports: [VizCheckboxComponent],
    //   declarations: [VizCheckboxComponent]
    // })
    // export class VizCheckboxModule {}
    var /** @type {?} */ VizCheckboxModule = material.MatCheckboxModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ VizButtonModule = material.MatButtonModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ VizFormFieldModule = material.MatFormFieldModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ VizSliderModule = material.MatSliderModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizToolbarComponent = (function () {
        function VizToolbarComponent() {
            this.searchBtnClick = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        VizToolbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        VizToolbarComponent.prototype.searchOnclick = /**
         * @return {?}
         */
            function () {
                this.searchBtnClick.emit();
            };
        VizToolbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'viz-toolbar',
                        template: "<div class=\"viz-toolbar\"> \n  <span>{{title}}</span>\n  <div class=\"search\" (click)=\"searchOnclick()\">\n    <mat-icon>search</mat-icon>\n  </div>\n</div>",
                        styles: [":host .viz-toolbar{display:flex;line-height:64px;flex-direction:row;justify-content:space-between;padding:0 24px}:host .viz-toolbar .search{display:inline-flex;cursor:pointer}:host .viz-toolbar .search .mat-icon{height:64px;line-height:64px;color:#9f9f9f}"],
                    },] },
        ];
        VizToolbarComponent.propDecorators = {
            title: [{ type: core.Input }],
            searchBtnClick: [{ type: core.Output }]
        };
        return VizToolbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizToolbarMudule = (function () {
        function VizToolbarMudule() {
        }
        VizToolbarMudule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatIconModule
                        ],
                        exports: [
                            VizToolbarComponent
                        ],
                        declarations: [
                            VizToolbarComponent
                        ],
                    },] },
        ];
        return VizToolbarMudule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ VizIconModule = material.MatIconModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ VizListModule = material.MatListModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ VizChipModule = material.MatChipsModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ VizBadgeModule = material.MatBadgeModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.VizHeaderMudule = VizHeaderMudule;
    exports.VizDateRangePickerMudule = VizDateRangePickerMudule;
    exports.VizSelectModule = VizSelectModule;
    exports.VizFooterMudule = VizFooterMudule;
    exports.VizMenuModule = VizMenuModule;
    exports.VizCheckboxModule = VizCheckboxModule;
    exports.VizButtonModule = VizButtonModule;
    exports.VizFormFieldModule = VizFormFieldModule;
    exports.VizSliderModule = VizSliderModule;
    exports.VizToolbarMudule = VizToolbarMudule;
    exports.VizIconModule = VizIconModule;
    exports.VizListModule = VizListModule;
    exports.VizChipModule = VizChipModule;
    exports.VizBadgeModule = VizBadgeModule;
    exports.ɵb = VizDateRangePickerComponent;
    exports.ɵd = VizFooterComponent;
    exports.ɵa = VizHeaderComponent;
    exports.ɵc = VizSelectComponent;
    exports.ɵe = VizToolbarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2xraXQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2hlYWRlci92aXotaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9oZWFkZXIvdml6LWhlYWRlci5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvZGF0ZS1yYW5nZS1waWNrZXIvdml6LWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9kYXRlLXJhbmdlLXBpY2tlci92aXotZGF0ZS1yYW5nZS1waWNrZXIubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3NlbGVjdC92aXotc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9zZWxlY3Qvdml6LXNlbGVjdC5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvZm9vdGVyL3Zpei1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2Zvb3Rlci92aXotZm9vdGVyLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9tZW51L3Zpei1tZW51Lm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9jaGVja2JveC92aXotY2hlY2tib3gubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2J1dHRvbi92aXotYnV0dG9uLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9mb3JtLWZpZWxkL3Zpei1mb3JtLWZpZWxkLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9zbGlkZXIvdml6LXNsaWRlci5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvdG9vbGJhci92aXotdG9vbGJhci5jb21wb25lbnQudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvdG9vbGJhci92aXotdG9vbGJhci5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvaWNvbi92aXotaWNvbi5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvbGlzdC92aXotbGlzdC5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvY2hpcC92aXotY2hpcC5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvYmFkZ2Uvdml6LWJhZGdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5leHBvcnQgdHlwZSBWaXpIZWFkZXJUeXBlID0gJ3ByaW1hcnknIHwgJ3JpZ2h0TWVudSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxoZWFkZXIgY2xhc3M9XCJuYXYtYmFyIG5hdi1iYXItZGFya1wiPlxuICA8ZGl2IGNsYXNzPVwibmF2YmFyLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiYnJhbmRMaW5rXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cInN2Z0ljb25cIiBbc3JjXT1cInN2Z0ljb25cIiBhbHQ9XCJWaXppZW50XCIgLz5cbiAgICAgICAgICA8c3ZnICpuZ0lmPVwiIXN2Z0ljb25cIiB3aWR0aD1cIjExM1wiIGhlaWdodD1cIjI4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPGcgZmlsbD1cIiNGRjREMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDMuMjUyIDI3LjUxYy40MzUgMCAuNjUzLS4yMy42NTMtLjY5MXYtMi40MmMwLS40Ni0uMjE4LS42OTEtLjY1My0uNjkxbC05LjA2Ny0uMDAxYy44NzItMi4yMTEgNi40NTUtNy41OTUgOC4zNzYtMTAuNjYzLjcxMy0xLjEzOSAxLjA3NS0yLjAyIDEuMDc1LTIuNTkzIDAtLjY2Ni0uMzItMi4xNTItMi41NzQtMi4xNTJIMzAuNDE3Yy0uNDM1IDAtLjY1My4yMy0uNjUzLjY5MnYyLjM4MmMwIC40Ni4yMTguNjkyLjY1My42OTJoOC4xMWMtLjQwOC43ODYtNS43ODggNi41MjktNy43ODEgOS45NS0uNTI0LjktMS4yNDkgMi4zMjktMS4yNDkgMy40MiAwIDEuMzg0LjgyIDIuMDc2IDIuNDU5IDIuMDc2aDExLjI5NnptMjMuNTE1LTEyLjU2NGMwLTEuNS0uOTM3LTMuNzI5LTMuNzM1LTMuNzI5LTEuMDUgMC0zLjc5Mi40MDktNC4yMTkgNC42MTNoNy4xNDdjLjUzNyAwIC44MDctLjI5NC44MDctLjg4NHptLS4xNTQgNC4zOEg1OC42MmMwIDIuNTQ3IDEuNzU4IDQuODAzIDQuNjEgNC44MDMgMS43NDIgMCAzLjMwNS0uNjAxIDQuNjg4LTEuODA2LjQ2My0uNDYzLjc5Ny4wNjMuODA4LjA3NyAwIDAgMS4zNSAxLjkxMSAxLjUzNiAyLjE3MS4wNDkuMDg0LjExNi4yODgtLjE5Mi41OTYtMS44MiAxLjgyLTQuMTM3IDIuNzI4LTYuOTU1IDIuNzI4LTUuODEzIDAtOC43OTgtNC43NDgtOC43OTgtMTAuMTQ0IDAtNi40ODEgNC4xNTMtMTAuMTA1IDguODc1LTEwLjEwNSA0LjA2NSAwIDcuNjA4IDMuMTA0IDcuNjA4IDcuNDE2IDAgMi44NDMtMS4zOTcgNC4yNjQtNC4xODggNC4yNjR6bTM3LjIyMy03LjQ1M2MuNDM2IDAgLjY1My0uMjMxLjY1My0uNjkyVjguOTg1YzAtLjQ2LS4yMTctLjY4Ni0uNjUzLS42ODZoLTQuNjg4VjMuODFjMC0uNDM1LS4yMy0uNjUzLS42OS0uNjUzSDk1LjQ2Yy0uNDYxIDAtLjY5Mi4yMTgtLjY5Mi42NTNWOC4zaC0yLjQ5N2MtLjQzNSAwLS42NTMuMjI1LS42NTMuNjg2djIuMTk2YzAgLjQ2LjIxOC42OTIuNjUzLjY5MmgyLjQ5N3Y5LjIyMWMwIDIuNzQ0IDEuMDI0IDQuMjUyIDEuNTM3IDQuODQxLjUxMi41OSAxLjgxNiAxLjg5IDQuNDU3IDEuODgzIDIuMzU1LS4wMDYgNC4yOTQtMS4zMDcgNS4xMS0yLjE1Mi4zMjMtLjMzNC4yNjgtLjUyNC4wOTItLjc1NGwtMS41MTMtMS45NzRjLS4yMTUtLjI5OC0uNTg2LS4yOC0uODA3LS4wNzctLjUyNi40MzMtMS42NDYgMS4zOTQtMy4xNi44MzEtMS4xMDEtLjQxLTEuMzM2LTEuNjM4LTEuMzM2LTIuNTZ2LTkuMjZoNC42ODh6TTczLjc1OSAyNi44NTdjMCAuNDM2LjIzLjY1NC42OTIuNjU0aDIuOTk3Yy40NjEgMCAuNjkyLS4yMTguNjkyLS42NTRWMTIuMzcyYy44OTUtLjYwOCAzLjY5Mi0xLjU1IDUuNzI2LS4zNTUgMS4yMzMuNzI1IDEuNjk4IDIuNzAyIDEuNjkgNS4wMDRsLS4wMDEgOS44MzZjMCAuNDM2LjIzLjY1NC42OTEuNjU0aDIuOTk4Yy40NiAwIC42OTEtLjIxOC42OTEtLjY1NFYxNi43MTRjMC01Ljk5NC0yLjc0LTkuMDIzLTguMjIyLTkuMDY4LTIuNjU1LS4wMjItNS41OTYuOTk2LTcuMTQ3IDIuMzQ0LS41MzQuNDY1LS44MDYgMS4wMjUtLjgwNiAxLjY5djE1LjE3N3pNNTAuNDM3IDguM0g0Ny40NGMtLjQ2MSAwLS42OTEuMjE4LS42OTEuNjU0djE3LjkwNGMwIC40MzYuMjMuNjU0LjY5MS42NTRoMi45OTdjLjQ2MSAwIC42OTItLjIxOC42OTItLjY1NFY4Ljk1M2MwLS40MzYtLjIzLS42NTQtLjY5Mi0uNjU0em0tMjUuMDEzIDBoLTIuOTk3Yy0uNDYgMC0uNjkxLjIxOC0uNjkxLjY1NHYxNy45MDRjMCAuNDM2LjIzLjY1NC42OTEuNjU0aDIuOTk3Yy40NjEgMCAuNjkyLS4yMTguNjkyLS42NTRWOC45NTNjMC0uNDM2LS4yMy0uNjU0LS42OTItLjY1NHpNNDguOTQgMGEyLjY1MSAyLjY1MSAwIDEgMCAwIDUuMzAyIDIuNjUxIDIuNjUxIDAgMCAwIDAtNS4zMDJ6TTIzLjkyNiAwYTIuNjUxIDIuNjUxIDAgMSAwIDAgNS4zMDIgMi42NTEgMi42NTEgMCAwIDAgMC01LjMwMnpNNy40MSAyNi43MDRDMi4zNDcgMjAuNzMyLjAzNSA5LjA3LjAxIDguOTMzYy0uMDUxLS4yODMuMDc0LS42MzQuNi0uNjM0aDMuMjY1Yy4zMzMgMCAuNTQzLjE2Ni42MTUuNSAxLjMxMiA2LjEyNCAzLjgzMSAxMS45OSA1LjAzMyAxMy42NCAxLjIwMi0xLjY1IDMuNzItNy41MTYgNS4wMzQtMTMuNjQuMDcxLS4zMzQuMjgyLS41LjYxNC0uNWgzLjI2NmMuNTI1IDAgLjY1LjM1LjYuNjM0LS4wMjQuMTM4LTIuMzM2IDExLjgtNy40IDE3Ljc3LS41NjUuNjY2LTEuMjM5IDEtMi4xMTQgMS0uODc1IDAtMS41NDktLjMzNC0yLjExMy0xek0xMDkuNzMgMjUuNzQ0aC4zNjdjLjE0OCAwIC4yNi0uMDIzLjMzMy0uMDY5LjA3NS0uMDQ2LjExMi0uMTI1LjExMi0uMjM4di0uMDQ2YzAtLjEzMi0uMDM1LS4yMjMtLjEwNC0uMjcyYS40OC40OCAwIDAgMC0uMjgtLjA3M2gtLjQyOXYuNjk4em0uODU3IDEuMDhsLS40Ni0uNzk3aC0uMzk4di43OTdoLS4zMTRWMjQuNzdoLjc4MmMuMjEgMCAuMzczLjA1LjQ5LjE1LjExNy4xLjE3Ni4yNTIuMTc2LjQ1NnYuMDYxYS41NTIuNTUyIDAgMCAxLS4xMDMuMzUzLjUxLjUxIDAgMCAxLS4yODguMTc2bC41MDYuODU4aC0uMzl6bS0uNDc1LTIuOTg1YTEuOTkgMS45OSAwIDEgMC0uMDAyIDMuOTggMS45OSAxLjk5IDAgMCAwIC4wMDItMy45OHptMS42MjQgMS45ODljMCAuODk3LS43MjYgMS42MjMtMS42MjQgMS42MjNhMS42MjMgMS42MjMgMCAxIDEgMC0zLjI0N2MuODk4IDAgMS42MjQuNzI3IDEuNjI0IDEuNjI0elwiLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2UtbmFtZSBoaWRkZW4teHMgaGlkZGVuLXNtXCI+e3t0aXRsZX19PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1yaWdodFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci13ZWxjb21lXCIgKGNsaWNrKT0ncmlnaHRCdG5PbkNsaWNrKCknICpuZ0lmPVwidHlwZSA9PT0gJ3ByaW1hcnknXCI+XG4gICAgICAgIDxzcGFuPldlbGNvbWUsIHt7dXNlck5hbWV9fTwvc3Bhbj5cbiAgICAgICAgPG1hdC1pY29uPnt7aXNEcm9wPyBcImFycm93X2Ryb3BfdXBcIjpcImFycm93X2Ryb3BfZG93blwifX08L21hdC1pY29uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhhbWJ1cmdlclwiIChjbGljayk9J2hhbWJ1cmdlck9uQ2xpY2soKSc+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLU1lbnVcIiAqbmdJZj1cInR5cGUgPT09ICdyaWdodE1lbnUnXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9oZWFkZXI+YCxcbiAgc3R5bGVzOiBbYDpob3N0IC5uYXYtYmFye2JhY2tncm91bmQ6I2ZmZjt6LWluZGV4OjEwO2JveC1zaGFkb3c6MCAxcHggMCAwICNlOWU5ZTk7cGFkZGluZzowIDE1cHh9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVye2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NzJweDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlcntkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGF7ZGlzcGxheTppbmxpbmUtZmxleDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgYSBzcGFue2xpbmUtaGVpZ2h0OjI0cHh9QG1lZGlhIChtYXgtd2lkdGg6NTQzcHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGEgLmhpZGRlbi14c3tkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo1NDRweCkgYW5kIChtYXgtd2lkdGg6NzY3cHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGEgLmhpZGRlbi1zbXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX06aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCAucGFnZS1uYW1le2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZTVlNWU1O3BhZGRpbmctbGVmdDoxNXB4O21hcmdpbi1sZWZ0OjMwcHg7cGFkZGluZy10b3A6MnB4O2ZvbnQtc2l6ZToxOHB4O2NvbG9yOiNmZjRlMDA7Zm9udC13ZWlnaHQ6NDAwfUBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KXs6aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1NZW51e2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpezpob3N0IC5uYXYtYmFye3BhZGRpbmc6MCA0MHB4fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHR7bWFyZ2luLXJpZ2h0OjB9fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItd2VsY29tZXtmb250LXNpemU6MTZweDtjb2xvcjojZmY0ZTAwO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleH1AbWVkaWEgKG1heC13aWR0aDo5OTFweCl7Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodCAubmF2YmFyLXdlbGNvbWV7ZGlzcGxheTpub25lfX06aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItd2VsY29tZSBzcGFue21hcmdpbi1yaWdodDoxMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OjI0cHg7Zm9udC13ZWlnaHQ6NDAwfTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci13ZWxjb21lIC5tYXQtaWNvbntkaXNwbGF5OmlubGluZS1ibG9ja306aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItaGFtYnVyZ2Vye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXJ9QG1lZGlhIChtaW4td2lkdGg6OTkxcHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci1oYW1idXJnZXJ7ZGlzcGxheTpub25lfX06aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItaGFtYnVyZ2VyIC5pY29uLWJhcntoZWlnaHQ6MnB4O3dpZHRoOjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmY0ZTAwO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDozcHh9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXpIZWFkZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXJOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJyYW5kTGluazogU3RyaW5nO1xuICBASW5wdXQoKSBzdmdJY29uOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IFZpekhlYWRlclR5cGU7XG4gIEBPdXRwdXQoKSByaWdodEJ0bkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFtYnVyZ2VyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGlzRHJvcDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICByaWdodEJ0bk9uQ2xpY2soKSB7XG4gICAgdGhpcy5yaWdodEJ0bkNsaWNrLmVtaXQoKVxuICAgIHRoaXMuaXNEcm9wID0gIXRoaXMuaXNEcm9wXG4gIH1cblxuICBoYW1idXJnZXJPbkNsaWNrKCkge1xuICAgIHRoaXMuaGFtYnVyZ2VyQ2xpY2suZW1pdCgpXG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpekhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vdml6LWhlYWRlci5jb21wb25lbnQnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFZpekhlYWRlckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWaXpIZWFkZXJDb21wb25lbnRcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVml6SGVhZGVyTXVkdWxlIHt9IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0LCBQaXBlLCBQaXBlVHJhbnNmb3JtLCBPcHRpb25hbCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1hdFJhbmdlRGF0ZXBpY2tlcklucHV0RXZlbnQsIG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWUsIERhdGVBZGFwdGVyIH0gZnJvbSBcIm1hdC1yYW5nZS1kYXRlcGlja2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei1kYXRlLXJhbmdlLXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFwcGxpY2F0aW9uLWRyb3Bkb3duXCI+XG4gIDxmb3JtIGNsYXNzPSdkYXRlLXJhbmdlLXBpY2tlciB2aXppZW50LWlucHV0Jz5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZVwiXG4gICAgICAgICAgW21hdFJhbmdlRGF0ZXBpY2tlcl09XCJyZXN1bHRQaWNrZXJcIlxuICAgICAgICAgIFtuZ01vZGVsXT1cImRhdGVcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSW5wdXREYXRlKCRldmVudClcIlxuICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAoZGF0ZUlucHV0KT1cIm9uRGF0ZUlucHV0KCRldmVudClcIlxuICAgICAgICAgIChkYXRlQ2hhbmdlKT1cIm9uRGF0ZUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgIDxtYXQtcmFuZ2UtZGF0ZXBpY2tlclxuICAgICAgICAgICNyZXN1bHRQaWNrZXIgW3JhbmdlTW9kZV09XCJ0cnVlXCIgKGNsb3NlZCk9XCJ0aGlzLm9uQ2xvc2UoJGV2ZW50KVwiPlxuICAgICAgICA8L21hdC1yYW5nZS1kYXRlcGlja2VyPlxuICAgICAgICA8bWF0LXJhbmdlLWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInJlc3VsdFBpY2tlclwiPjwvbWF0LXJhbmdlLWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZm9ybT5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2A6aG9zdCAubWF0LWlucHV0LWVsZW1lbnR7Y29sb3I6IzAwMH06aG9zdCAubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX06aG9zdCAubWF0LWZvcm0tZmllbGQgLmRhdGUtcmFuZ2UtcGlja2VyIC5tYXQtZm9ybS1maWVsZC1mbGV4e3dpZHRoOjEwMCUhaW1wb3J0YW50fTpob3N0IC5tYXQtZm9ybS1maWVsZCAuZGF0ZS1yYW5nZS1waWNrZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4e3dpZHRoOjEwMCV9LmRhdGUtcmFuZ2UtcGlja2VyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleHt3aWR0aDoxMDAlfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7LmRhdGUtcmFuZ2UtcGlja2VyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleHt3aWR0aDoxMDAlfX06Om5nLWRlZXAgLnF1aWNrLXNlbGVjdC1zZWMgLnNlbGVjdC10aXRsZXtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo0MDB9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMXB4KXs6Om5nLWRlZXAgLmNhbGVuZGFyLWJ1dHRvbi1zZWN7bGluZS1oZWlnaHQ6ODRweCFpbXBvcnRhbnQ7cGFkZGluZzo0cHggMjRweCFpbXBvcnRhbnR9OjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2hlaWdodDo1MDFweCFpbXBvcnRhbnR9fWBdXG59KVxuZXhwb3J0IGNsYXNzIFZpekRhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGRhdGU6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gO1xuICBsYXN0RGF0ZUlucHV0OiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IHwgbnVsbDtcbiAgbGFzdERhdGVDaGFuZ2U6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gfCBudWxsO1xuICBkYXRlU2hvdDogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiB8IG51bGw7XG5cbiAgQE91dHB1dCgpIG9uQXBwbHkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4gKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPERhdGU+LFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRlU2hvdCA9IHRoaXMuZGF0ZTtcbiAgfVxuXG4gIG9uRGF0ZUlucHV0ID0gKGU6IG1hdFJhbmdlRGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW5wdXQnLCB0aGlzLmxhc3REYXRlSW5wdXQgPT09IGUudmFsdWUpXG4gICAgdGhpcy5sYXN0RGF0ZUlucHV0ID0gZS52YWx1ZSBhcyBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+XG4gIH1cbiAgb25EYXRlQ2hhbmdlID0gKGU6IG1hdFJhbmdlRGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0JywgdGhpcy5sYXN0RGF0ZUlucHV0ID09PSBlLnZhbHVlKVxuICAgIHRoaXMubGFzdERhdGVDaGFuZ2UgPSBlLnZhbHVlIGFzIG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT47XG4gIH1cbiAgb25JbnB1dERhdGUoJGV2ZW50KSB7XG4gICAgdGhpcy5kYXRlID0gJGV2ZW50XG4gIH1cbiAgb25DbG9zZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0ZVNob3QsIHRoaXMuZGF0ZSlcbiAgICBpZiAoIXRoaXMuZGF0ZVNob3QgfHwgIXRoaXMuZGF0ZSkgcmV0dXJuXG4gICAgaWYgKFxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGUodGhpcy5kYXRlU2hvdC5iZWdpbiwgdGhpcy5kYXRlLmJlZ2luKVxuICAgICAgJiZcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRlKHRoaXMuZGF0ZVNob3QuZW5kLCB0aGlzLmRhdGUuZW5kKVxuICAgICkge1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVNob3QgPSB0aGlzLmRhdGVcbiAgICAgIHRoaXMub25BcHBseS5lbWl0KHRoaXMuZGF0ZSlcbiAgICB9XG4gICAgXG4gIH1cbn1cblxuXG4vLyBAUGlwZSh7bmFtZTogJ2xhc3RkYXlzJ30pXG4vLyBleHBvcnQgY2xhc3MgTGFzdERheXNQaXBlPEQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbi8vICAgY29uc3RydWN0b3IoXG4vLyAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPERhdGU+LFxuLy8gICApIHt9XG5cbi8vICAgdHJhbnNmb3JtKHZhbHVlOiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IHwgRCB8IG51bGwsIG9wdGlvbnM6IHN0cmluZyk6IGFueSB7XG4vLyAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdiZWdpbicpKSB7XG4vLyAgICAgICBsZXQgX3ZhbHVlID0gPG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4+IHZhbHVlO1xuLy8gICAgICAgaWYgKHRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRlKHRoaXMuX2RhdGVBZGFwdGVyLnRvZGF5KCksIF92YWx1ZS5lbmQpKSB7XG4vLyAgICAgICAgIC8vIHJldHVybiBcIkxhc3QgPyBEYXlzXCI7XG4vLyAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgIFxuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbi8vICAgICAgIH1cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuIHZhbHVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWaXpEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3Zpei1kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0UmFuZ2VEYXRlcGlja2VyTW9kdWxlLCBNYXRSYW5nZU5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tIFwibWF0LXJhbmdlLWRhdGVwaWNrZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0UmFuZ2VEYXRlcGlja2VyTW9kdWxlLCBcbiAgICBNYXRSYW5nZU5hdGl2ZURhdGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFZpekRhdGVSYW5nZVBpY2tlckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWaXpEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQsXG4gICAgLy8gTGFzdERheXNQaXBlXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFZpekRhdGVSYW5nZVBpY2tlck11ZHVsZSB7fSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRNZW51VHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVR5cGUge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aXotc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duXCI+XG4gIDxmb3JtIGNsYXNzPVwidml6aWVudC1pbnB1dFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnbWF0LWZvY3VzZWQnOiBtZW51U2hvd259XCJcbiAgICAgICAgICAgICAgICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm9wdGlvbk1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAobWVudUNsb3NlZCk9XCJoaWRlTWVudSgpXCJcbiAgICAgICAgICAgICAgICAgICAgKG1lbnVPcGVuZWQpPVwic2hvd01lbnUoKVwiPlxuICAgICAgPGlucHV0IG1hdElucHV0XG4gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgW3ZhbHVlXT1cIm1lc3NhZ2UoKVwiXG4gICAgICAgICAgICAgcmVhZG9ubHkvPlxuICAgICAgPG1hdC1pY29uIG1hdFN1ZmZpeFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duX2ljb25cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0LWRyb3Bkb3duX2ljb24tLWFjdGl2ZScgOiBtZW51U2hvd259XCI+e3ttZW51U2hvd24/XCJhcnJvd19kcm9wX3VwXCI6XCJhcnJvd19kcm9wX2Rvd25cIn19PC9tYXQtaWNvbj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Zvcm0+XG4gIDxtYXQtbWVudSAjb3B0aW9uTWVudT1cIm1hdE1lbnVcIlxuICAgICAgICAgICAgW292ZXJsYXBUcmlnZ2VyXT1mYWxzZVxuICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fbWVudSBtYXQtZWxldmF0aW9uLXo4XCI+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdC1vcHRpb25cIlxuICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgPG1hdC1saXN0IHJvbGU9XCJsaXN0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1vcHRpb25fbGlzdFwiPlxuICAgICAgICA8bWF0LWxpc3QtaXRlbSByb2xlPVwibGlzdGl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1vcHRpb25fbGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NlbGVjdC1vcHRpb25fbGlzdEl0ZW0tYWN0aXZlJyA6IG9wdGlvbi50aXRsZT09PXNlbGVjdGVkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RPcHRpb24ob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPnt7b3B0aW9uLnRpdGxlfX08L21hdC1saXN0LWl0ZW0+XG4gICAgICA8L21hdC1saXN0PlxuICAgIDwvZGl2PlxuICA8L21hdC1tZW51PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5zZWxlY3Qtb3B0aW9uX2xpc3R7Zm9udC13ZWlnaHQ6MzAwO3BhZGRpbmctdG9wOjB9LnNlbGVjdC1vcHRpb25fbGlzdCA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjE0cHg7aGVpZ2h0OjQwcHg7Y3Vyc29yOnBvaW50ZXJ9LnNlbGVjdC1vcHRpb25fbGlzdCA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudHtwYWRkaW5nOjAgMjRweH0uc2VsZWN0LW9wdGlvbl9saXN0SXRlbXtjb2xvcjojNjk2OTY5O2hlaWdodDo0MHB4fS5zZWxlY3Qtb3B0aW9uX2xpc3RJdGVtLWFjdGl2ZXtjb2xvcjojN2Y1ZWJhfS5zZWxlY3Qtb3B0aW9uX2xpc3RJdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTtjb2xvcjojN2Y1ZWJhfS5mb3JtLWZ1bGwtd2lkdGh7d2lkdGg6MTAwJTtjdXJzb3I6cG9pbnRlcn0uZm9ybS1mdWxsLXdpZHRoIGlucHV0e2N1cnNvcjpwb2ludGVyfS5zZWxlY3QtZHJvcGRvd24gaW5wdXR7Y29sb3I6IzAwMH0uc2VsZWN0LWRyb3Bkb3duX2ljb257Y29sb3I6IzlmOWY5Zn0uc2VsZWN0LWRyb3Bkb3duX2ljb24tLWFjdGl2ZXtjb2xvcjojMDAwfS52aXppZW50LWlucHV0IC5tYXQtaW5wdXQtZWxlbWVudHtoZWlnaHQ6MjRweDtsaW5lLWhlaWdodDoyNHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0udml6aWVudC1pbnB1dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2hlaWdodDoyMS4zMzNweDtsaW5lLWhlaWdodDoyMS4zMzNweDtmb250LXNpemU6MTZweDttYXJnaW4tYm90dG9tOjFweH0udml6aWVudC1pbnB1dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YWxpZ24taXRlbXM6c3RyZXRjaH0udml6aWVudC1pbnB1dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHttYXJnaW4tYm90dG9tOjVweDtwYWRkaW5nLWJvdHRvbTowfS52aXppZW50LWlucHV0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MH0udml6aWVudC1pbnB1dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjojYzNjM2MzfS52aXppZW50LWlucHV0IDo6bmctZGVlcCAubWF0LWljb257bWFyZ2luLXRvcDoxN3B4fS52aXppZW50LWlucHV0IDo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItdG9nZ2xle21hcmdpbi10b3A6MTdweDtkaXNwbGF5OmJsb2NrO2NvbG9yOiM5ZjlmOWZ9LnZpemllbnQtaW5wdXQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6IzlmOWY5Zn0udml6aWVudC1pbnB1dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojN2Y1ZWJhfS52aXppZW50LWlucHV0IDo6bmctZGVlcDpob3ZlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9OjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbC5zZWxlY3QtZHJvcGRvd25fbWVudXttYXJnaW4tdG9wOjFweDt3aWR0aDoyODBweH06Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsLnNlbGVjdC1kcm9wZG93bl9tZW51IC5tYXQtbWVudS1jb250ZW50e3BhZGRpbmc6MH1gXVxufSlcbmV4cG9ydCBjbGFzcyBWaXpTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKXBsYWNlaG9sZGVyOnN0cmluZztcbiAgQElucHV0KClvcHRpb25zOkFycmF5PERhdGVUeXBlPiA9IFtdXG4gIEBWaWV3Q2hpbGQoTWF0TWVudVRyaWdnZXIpIHRyaWdnZXI6IE1hdE1lbnVUcmlnZ2VyO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlVHlwZT4oKVxuICB2YWx1ZTogc3RyaW5nO1xuICBtZW51U2hvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VsZWN0ZWQ6IERhdGVUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5vcHRpb25zWzBdXG4gIH1cblxuXG4gIHNob3dNZW51KCkge1xuICAgIHRoaXMubWVudVNob3duID0gdHJ1ZTtcbiAgfVxuICBoaWRlTWVudSgpIHtcbiAgICB0aGlzLm1lbnVTaG93biA9IGZhbHNlO1xuICB9XG4gIHNlbGVjdE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gb3B0aW9uO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQob3B0aW9uKVxuICAgIHRoaXMudHJpZ2dlci5jbG9zZU1lbnUoKTtcbiAgfVxuICBtZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkLnRpdGxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0TGlzdE1vZHVsZSwgTWF0TWVudU1vZHVsZSwgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBWaXpTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi92aXotc2VsZWN0LmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBWaXpTZWxlY3RDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6U2VsZWN0Q29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFZpelNlbGVjdE1vZHVsZSB7fSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd2aXotZm9vdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZm9vdGVyLWJhclwiPlxuICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWxlZnRcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdlwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGJyYW5kIG9mIGxlZnRCcmFuZHNcIj5cbiAgICAgICAgICA8YSBocmVmPXt7YnJhbmQubGlua319Pnt7YnJhbmQudGl0bGV9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1yaWdodFwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2XCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYnJhbmQgb2YgcmlnaHRCcmFuZHNcIj5cbiAgICAgICAgICA8YSBocmVmPXt7YnJhbmQubGlua319Pnt7YnJhbmQudGl0bGV9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNlbnRlclwiPlxuICAgIDxwPlZpemllbnQgTURBPC9wPlxuICAgIDxwPiZjb3B5OyAyMDE4IFZpemllbnQgJiBpTGFicy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG4gIDwvZGl2PlxuPC9kaXY+YCxcblx0c3R5bGVzOiBbYDpob3N0IC5mb290ZXItYmFye2JhY2tncm91bmQ6I2ZmZjtib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1oZWlnaHQ6NzJweDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtwYWRkaW5nOjAgNDBweDtkaXNwbGF5OmJsb2NrfTpob3N0IC5mb290ZXItY2VudGVye3otaW5kZXg6MTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NDhweDtoZWlnaHQ6NDhweDtsZWZ0OjA7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjEycHggMH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Omhvc3QgLmZvb3Rlci1jZW50ZXJ7dG9wOjB9fTpob3N0IC5mb290ZXItY2VudGVyIHB7cGFkZGluZzowO21hcmdpbjowO2xpbmUtaGVpZ2h0OjI0cHh9Omhvc3QgLmZvb3Rlci13cmFwcGVye3otaW5kZXg6OTk5O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmctdG9wOjE2cHg7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QgLmZvb3Rlci13cmFwcGVyIC5mb290ZXItbGVmdCAubmF2IGxpe21hcmdpbi1yaWdodDoyNHB4fTpob3N0IC5mb290ZXItd3JhcHBlciAuZm9vdGVyLWxlZnQgLm5hdiBsaTpudGgtbGFzdC1jaGlsZCgxKXttYXJnaW4tcmlnaHQ6MH06aG9zdCAuZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1yaWdodCAubmF2IGxpe21hcmdpbi1sZWZ0OjI0cHh9Omhvc3QgLmZvb3Rlci13cmFwcGVyIDo6bmctZGVlcCAubmF2e3BhZGRpbmc6MDttYXJnaW46MDtsaXN0LXN0eWxlLXR5cGU6bm9uZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0IC5mb290ZXItd3JhcHBlciA6Om5nLWRlZXAgLm5hdiBsaXtsaXN0LXN0eWxlOm5vbmU7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QgLmZvb3Rlci13cmFwcGVyIDo6bmctZGVlcCAubmF2IGxpIGF7ZGlzcGxheTppbmxpbmUtZmxleDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6IzdmNWViYX1gXVxufSlcblxuZXhwb3J0IGNsYXNzIFZpekZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdHRoaXMuc3BsaXRCcmFuZHMoKVxuXHR9XG5cblx0QElucHV0KCkgYnJhbmRzOkFycmF5PEJyYW5kVHlwZT4gPSBbXVxuXHRsZWZ0QnJhbmRzOiBBcnJheTxCcmFuZFR5cGU+ID0gW11cblx0cmlnaHRCcmFuZHM6IEFycmF5PEJyYW5kVHlwZT4gPSBbXVxuXG5cdHNwbGl0QnJhbmRzKCkge1xuXHQgIGxldCBjb3VudCA9IHRoaXMuYnJhbmRzLmxlbmd0aFxuICAgIGlmIChjb3VudCkge1xuXHRcdFx0aWYgKCBjb3VudCAlIDIgPT0gMCApIHtcblx0XHRcdFx0bGV0IGxlZnRDb3VudCA9IGNvdW50IC8gMlxuXHRcdFx0XHR0aGlzLmxlZnRCcmFuZHMgPSB0aGlzLmJyYW5kcy5zbGljZSgwLCBsZWZ0Q291bnQpXG5cdFx0XHRcdHRoaXMucmlnaHRCcmFuZHMgPSB0aGlzLmJyYW5kcy5zbGljZShsZWZ0Q291bnQsIGNvdW50KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGxlZnRDb3VudCA9IChjb3VudCAtIDEpIC8gMiBcblx0XHRcdFx0dGhpcy5sZWZ0QnJhbmRzID0gdGhpcy5icmFuZHMuc2xpY2UoMCwgbGVmdENvdW50KVxuXHRcdFx0XHR0aGlzLnJpZ2h0QnJhbmRzID0gdGhpcy5icmFuZHMuc2xpY2UobGVmdENvdW50LCBjb3VudClcblx0XHRcdH1cblx0ICB9XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcmFuZFR5cGUge1xuXHRpZDogc3RyaW5nO1xuXHRsaW5rOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVml6Rm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi92aXotZm9vdGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFZpekZvb3RlckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWaXpGb290ZXJDb21wb25lbnRcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVml6Rm9vdGVyTXVkdWxlIHt9IiwiLy8gaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuLy8gaW1wb3J0IHsgVml6TWVudUNvbXBvbmVudCB9IGZyb20gJy4vdml6LW1lbnUuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFZpek1lbnVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWNlbGwvdml6LW1lbnUtY2VsbC5jb21wb25lbnQnO1xuXG4vLyBATmdNb2R1bGUoe1xuLy8gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRNZW51TW9kdWxlXSxcbi8vICAgZXhwb3J0czogW1Zpek1lbnVDb21wb25lbnRdLFxuLy8gICBkZWNsYXJhdGlvbnM6IFtWaXpNZW51Q29tcG9uZW50LCBWaXpNZW51Q2VsbENvbXBvbmVudF1cbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgVml6TWVudU1vZHVsZSB7fVxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBWaXpNZW51TW9kdWxlID0gTWF0TWVudU1vZHVsZSIsIi8vIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBpbXBvcnQgeyBWaXpDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vdml6LWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLy8gQE5nTW9kdWxlKHtcbi8vICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGVdLFxuLy8gICBleHBvcnRzOiBbVml6Q2hlY2tib3hDb21wb25lbnRdLFxuLy8gICBkZWNsYXJhdGlvbnM6IFtWaXpDaGVja2JveENvbXBvbmVudF1cbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgVml6Q2hlY2tib3hNb2R1bGUge31cblxuXG5cbmV4cG9ydCBjb25zdCBWaXpDaGVja2JveE1vZHVsZSA9IE1hdENoZWNrYm94TW9kdWxlXG4iLCJpbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjb25zdCBWaXpCdXR0b25Nb2R1bGUgPSBNYXRCdXR0b25Nb2R1bGU7XG4iLCJpbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjb25zdCBWaXpGb3JtRmllbGRNb2R1bGUgPSBNYXRGb3JtRmllbGRNb2R1bGU7XG4iLCJpbXBvcnQgeyBNYXRTbGlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjb25zdCBWaXpTbGlkZXJNb2R1bGUgPSBNYXRTbGlkZXJNb2R1bGU7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3Zpei10b29sYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidml6LXRvb2xiYXJcIj4gXG4gIDxzcGFuPnt7dGl0bGV9fTwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cInNlYXJjaFwiIChjbGljayk9XCJzZWFyY2hPbmNsaWNrKClcIj5cbiAgICA8bWF0LWljb24+c2VhcmNoPC9tYXQtaWNvbj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgOmhvc3QgLnZpei10b29sYmFye2Rpc3BsYXk6ZmxleDtsaW5lLWhlaWdodDo2NHB4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nOjAgMjRweH06aG9zdCAudml6LXRvb2xiYXIgLnNlYXJjaHtkaXNwbGF5OmlubGluZS1mbGV4O2N1cnNvcjpwb2ludGVyfTpob3N0IC52aXotdG9vbGJhciAuc2VhcmNoIC5tYXQtaWNvbntoZWlnaHQ6NjRweDtsaW5lLWhlaWdodDo2NHB4O2NvbG9yOiM5ZjlmOWZ9YF0sXG59KVxuXG5leHBvcnQgY2xhc3MgVml6VG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGl0bGU6IFN0cmluZztcbiAgQE91dHB1dCgpIHNlYXJjaEJ0bkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgbmdPbkluaXQoKSB7IH1cbiAgXG4gIHNlYXJjaE9uY2xpY2soKSB7XG4gICAgdGhpcy5zZWFyY2hCdG5DbGljay5lbWl0KClcbiAgfVxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpelRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Zpei10b29sYmFyLmNvbXBvbmVudCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFZpelRvb2xiYXJDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6VG9vbGJhckNvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWaXpUb29sYmFyTXVkdWxlIHt9IiwiaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGNvbnN0IFZpekljb25Nb2R1bGUgPSBNYXRJY29uTW9kdWxlO1xuIiwiaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgVml6TGlzdE1vZHVsZSA9IE1hdExpc3RNb2R1bGUiLCJpbXBvcnQgeyBNYXRDaGlwc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgVml6Q2hpcE1vZHVsZSA9IE1hdENoaXBzTW9kdWxlIiwiaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IFZpekJhZGdlTW9kdWxlID0gTWF0QmFkZ2VNb2R1bGUiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJEYXRlQWRhcHRlciIsIk1hdERhdGVwaWNrZXJNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdE5hdGl2ZURhdGVNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIk1hdFJhbmdlRGF0ZXBpY2tlck1vZHVsZSIsIk1hdFJhbmdlTmF0aXZlRGF0ZU1vZHVsZSIsIlZpZXdDaGlsZCIsIk1hdE1lbnVUcmlnZ2VyIiwiTWF0TGlzdE1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdFNsaWRlck1vZHVsZSIsIk1hdENoaXBzTW9kdWxlIiwiTWF0QmFkZ2VNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQWtERTtpQ0FKMEIsSUFBSUEsaUJBQVksRUFBRTtrQ0FDakIsSUFBSUEsaUJBQVksRUFBRTswQkFDM0IsS0FBSztTQUVQOzs7O1FBRWhCLDRDQUFlOzs7WUFBZjtnQkFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTthQUMzQjs7OztRQUVELDZDQUFnQjs7O1lBQWhCO2dCQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENB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