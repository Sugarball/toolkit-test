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
                            VizHeaderComponent,
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
                        styles: [".select-option_list{font-weight:300;padding-top:0}.select-option_list ::ng-deep .mat-list-item{font-size:14px;height:40px;cursor:pointer}.select-option_list ::ng-deep .mat-list-item .mat-list-item-content{padding:0 24px}.select-option_listItem{color:#696969;height:40px}.select-option_listItem-active{color:#7f5eba}.select-option_listItem:hover{background-color:#f1f1f1;color:#7f5eba}.form-full-width{width:100%;cursor:pointer}.form-full-width input{cursor:pointer}.select-dropdown input{color:#000}.select-dropdown_icon{color:#9f9f9f}.select-dropdown_icon--active{color:#000}::ng-deep .mat-menu-panel.select-dropdown_menu{margin-top:1px;width:280px}::ng-deep .mat-menu-panel.select-dropdown_menu .mat-menu-content{padding:0}::ng-deep .mat-input-element{height:24px;line-height:24px;vertical-align:middle}::ng-deep ::ng-deep .mat-form-field-label{height:21.333px;line-height:21.333px;font-size:16px;margin-bottom:1px}::ng-deep ::ng-deep .mat-form-field-flex{align-items:stretch}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-infix{margin-bottom:5px;padding-bottom:0}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:0}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{bottom:0;background-color:#c3c3c3}::ng-deep ::ng-deep .mat-icon{margin-top:17px}::ng-deep ::ng-deep .mat-datepicker-toggle{margin-top:17px;display:block;color:#9f9f9f}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label{color:#9f9f9f}::ng-deep ::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:#7f5eba}::ng-deep ::ng-deep:hover .mat-form-field-appearance-legacy .mat-form-field-underline{background-color:#000}"]
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
                /** @type {?} */
                var count = this.brands.length;
                if (count) {
                    if (count % 2 == 0) {
                        /** @type {?} */
                        var leftCount = count / 2;
                        this.leftBrands = this.brands.slice(0, leftCount);
                        this.rightBrands = this.brands.slice(leftCount, count);
                    }
                    else {
                        /** @type {?} */
                        var leftCount = (count - 1) / 2;
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
    /** @type {?} */
    var VizMenuModule = material.MatMenuModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var VizCheckboxModule = material.MatCheckboxModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var VizButtonModule = material.MatButtonModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var VizFormFieldModule = material.MatFormFieldModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizTreeNodeDefDirective = (function () {
        function VizTreeNodeDefDirective() {
        }
        VizTreeNodeDefDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[VizTreeNodeDef]'
                    },] },
        ];
        /** @nocollapse */
        VizTreeNodeDefDirective.ctorParameters = function () { return []; };
        return VizTreeNodeDefDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizTreeLeafDefDirective = (function () {
        function VizTreeLeafDefDirective() {
        }
        VizTreeLeafDefDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[VizTreeLeafDef]'
                    },] },
        ];
        /** @nocollapse */
        VizTreeLeafDefDirective.ctorParameters = function () { return []; };
        return VizTreeLeafDefDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizTreeComponent = (function () {
        function VizTreeComponent() {
        }
        /**
         * @return {?}
         */
        VizTreeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log(this.vizTreeNodeTemplate);
            };
        /**
         * @return {?}
         */
        VizTreeComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                console.log(this.vizTreeNodeTemplate);
            };
        VizTreeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'viz-tree',
                        template: "<!-- <div *ngFor=\"let node of tree template: itemTemplate\">\n  <ng-template *ngIf=\"node.children.length==0\">\n    <ng-template *ngTemplateOutlet=\"itemTemplate context: { $implicit: node }\"></ng-template>\u0192\u0192\n  </ng-template>\n  <ng-template *ngIf=\"node.children.length>0\">\n    <button>{{node.name}}</button>\n    <div *ngFor=\"let subNode of node.children template: itemTemplate\">\n      <ng-template *ngTemplateOutlet=\"itemTemplate context: { $implicit: subNode }\"></ng-template>\n    </div>\n  </ng-template>\n</div> -->\n\n\n<div>\n  <ng-template #recursiveList let-tree>\n    <div class=\"viz-tree-cell\" *ngFor=\"let node of tree\">\n      <div class=\"viz-tree-cell-node\">\n        <!-- <mat-icon (click)=\"node.isExpanded = !node.isExpanded\"\n                  *ngIf=\"node.children.length>0\">\n          {{node.isExpanded ? 'expand_more' : 'chevron_right'}}\n        </mat-icon> -->\n\n        <ng-container *ngIf=\"node.children.length>0\">\n          <ng-container *ngTemplateOutlet=\"vizTreeNodeTemplate; context: { $implicit: node }\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"node.children.length==0\">\n          <div [class.viz-tree-cell-node-content]=\"!(node.children.length>0)\">\n            <ng-container *ngTemplateOutlet=\"vizTreeLeafTemplate; context: { $implicit: node }\"></ng-container>\n          </div>\n        </ng-container>\n\n      </div>\n\n      <div *ngIf=\"node.children.length > 0\" [class.hideChildren]=!node.isExpanded class=\"viz-tree-cell-child\">\n        <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: node.children }\"></ng-container>\n      </div>\n\n    </div>\n  </ng-template>\n  <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: tree }\"></ng-container>\n</div>\n\n\n\n\n\n<!-- <viz-tree-cell *ngFor=\"let node of tree; let i=index\" [node]=\"node\"></viz-tree-cell> -->",
                        styles: [".hideChildren{display:none}.viz-tree-cell-node{margin-bottom:10px}.viz-tree-cell-child{margin-left:40px}.viz-tree-cell-node-content{margin-left:40px;margin-bottom:16px}.viz-tree-cell-node-content-hidden{display:none}"]
                    },] },
        ];
        /** @nocollapse */
        VizTreeComponent.ctorParameters = function () { return []; };
        VizTreeComponent.propDecorators = {
            tree: [{ type: core.Input }],
            vizTreeNodeTemplate: [{ type: core.ContentChild, args: [VizTreeNodeDefDirective, { read: core.TemplateRef },] }],
            vizTreeLeafTemplate: [{ type: core.ContentChild, args: [VizTreeLeafDefDirective, { read: core.TemplateRef },] }]
        };
        return VizTreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizTreeCellComponent = (function () {
        function VizTreeCellComponent() {
            this.collapse = true;
        }
        /**
         * @return {?}
         */
        VizTreeCellComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        VizTreeCellComponent.prototype.toggleCollapse = /**
         * @return {?}
         */
            function () {
                this.collapse = !this.collapse;
            };
        VizTreeCellComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'viz-tree-cell',
                        template: "<div>\n  <mat-icon (click)=\"node.isExpanded = !node.isExpanded\"\n            *ngIf=\"node.children.length>0\">\n    {{node.isExpanded ? 'expand_more' : 'chevron_right'}}\n  </mat-icon>\n  <span class='viz-tree-cell-name'>{{node.name}}</span>\n</div>\n\n<div [class.hideChildren]=node.isExpanded\n     class='viz-tree-child'>\n  <div *ngFor=\"let node of node.children; let i=index\">\n    <viz-tree-cell [node]=\"node\"></viz-tree-cell>\n  </div>\n</div>",
                        styles: [".hideChildren{display:none}.viz-tree-child{margin-left:16px}.viz-tree-cell-name{display:inline-block;height:24px}"]
                    },] },
        ];
        /** @nocollapse */
        VizTreeCellComponent.ctorParameters = function () { return []; };
        VizTreeCellComponent.propDecorators = {
            node: [{ type: core.Input }]
        };
        return VizTreeCellComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var VizTreeModule = (function () {
        function VizTreeModule() {
        }
        VizTreeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, material.MatIconModule],
                        exports: [
                            VizTreeComponent,
                            VizTreeCellComponent,
                            VizTreeNodeDefDirective,
                            VizTreeLeafDefDirective
                        ],
                        declarations: [
                            VizTreeComponent,
                            VizTreeCellComponent,
                            VizTreeNodeDefDirective,
                            VizTreeLeafDefDirective
                        ]
                    },] },
        ];
        return VizTreeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var VizSliderModule = material.MatSliderModule;

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
    /** @type {?} */
    var VizIconModule = material.MatIconModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var VizListModule = material.MatListModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var VizChipModule = material.MatChipsModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var VizBadgeModule = material.MatBadgeModule;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var VizTabsModule = material.MatTabsModule;

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
    exports.VizTreeModule = VizTreeModule;
    exports.VizSliderModule = VizSliderModule;
    exports.VizToolbarMudule = VizToolbarMudule;
    exports.VizIconModule = VizIconModule;
    exports.VizListModule = VizListModule;
    exports.VizChipModule = VizChipModule;
    exports.VizBadgeModule = VizBadgeModule;
    exports.VizTabsModule = VizTabsModule;
    exports.ɵb = VizDateRangePickerComponent;
    exports.ɵd = VizFooterComponent;
    exports.ɵa = VizHeaderComponent;
    exports.ɵc = VizSelectComponent;
    exports.ɵi = VizToolbarComponent;
    exports.ɵh = VizTreeCellComponent;
    exports.ɵg = VizTreeLeafDefDirective;
    exports.ɵf = VizTreeNodeDefDirective;
    exports.ɵe = VizTreeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2xraXQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2hlYWRlci92aXotaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9oZWFkZXIvdml6LWhlYWRlci5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvZGF0ZS1yYW5nZS1waWNrZXIvdml6LWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9kYXRlLXJhbmdlLXBpY2tlci92aXotZGF0ZS1yYW5nZS1waWNrZXIubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3NlbGVjdC92aXotc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9zZWxlY3Qvdml6LXNlbGVjdC5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvZm9vdGVyL3Zpei1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2Zvb3Rlci92aXotZm9vdGVyLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9tZW51L3Zpei1tZW51Lm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9jaGVja2JveC92aXotY2hlY2tib3gubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2J1dHRvbi92aXotYnV0dG9uLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9mb3JtLWZpZWxkL3Zpei1mb3JtLWZpZWxkLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy90cmVlL3Zpei10cmVlLW5vZGUtZGVmLmRpcmVjdGl2ZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy90cmVlL3Zpei10cmVlLWxlYWYtZGVmLmRpcmVjdGl2ZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy90cmVlL3Zpei10cmVlLmNvbXBvbmVudC50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy90cmVlL3Zpei10cmVlLWNlbGwvdml6LXRyZWUtY2VsbC5jb21wb25lbnQudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvdHJlZS92aXotdHJlZS5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvc2xpZGVyL3Zpei1zbGlkZXIubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3Rvb2xiYXIvdml6LXRvb2xiYXIuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3Rvb2xiYXIvdml6LXRvb2xiYXIubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2ljb24vdml6LWljb24ubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2xpc3Qvdml6LWxpc3QubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2NoaXAvdml6LWNoaXAubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2JhZGdlL3Zpei1iYWRnZS5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvdGFicy92aXotdGFicy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuZXhwb3J0IHR5cGUgVml6SGVhZGVyVHlwZSA9ICdwcmltYXJ5JyB8ICdyaWdodE1lbnUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aXotaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8aGVhZGVyIGNsYXNzPVwibmF2LWJhciBuYXYtYmFyLWRhcmtcIj5cbiAgPGRpdiBjbGFzcz1cIm5hdmJhci13cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cImJyYW5kTGlua1wiPlxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJzdmdJY29uXCIgW3NyY109XCJzdmdJY29uXCIgYWx0PVwiVml6aWVudFwiIC8+XG4gICAgICAgICAgPHN2ZyAqbmdJZj1cIiFzdmdJY29uXCIgd2lkdGg9XCIxMTNcIiBoZWlnaHQ9XCIyOFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxnIGZpbGw9XCIjRkY0RDAwXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQzLjI1MiAyNy41MWMuNDM1IDAgLjY1My0uMjMuNjUzLS42OTF2LTIuNDJjMC0uNDYtLjIxOC0uNjkxLS42NTMtLjY5MWwtOS4wNjctLjAwMWMuODcyLTIuMjExIDYuNDU1LTcuNTk1IDguMzc2LTEwLjY2My43MTMtMS4xMzkgMS4wNzUtMi4wMiAxLjA3NS0yLjU5MyAwLS42NjYtLjMyLTIuMTUyLTIuNTc0LTIuMTUySDMwLjQxN2MtLjQzNSAwLS42NTMuMjMtLjY1My42OTJ2Mi4zODJjMCAuNDYuMjE4LjY5Mi42NTMuNjkyaDguMTFjLS40MDguNzg2LTUuNzg4IDYuNTI5LTcuNzgxIDkuOTUtLjUyNC45LTEuMjQ5IDIuMzI5LTEuMjQ5IDMuNDIgMCAxLjM4NC44MiAyLjA3NiAyLjQ1OSAyLjA3NmgxMS4yOTZ6bTIzLjUxNS0xMi41NjRjMC0xLjUtLjkzNy0zLjcyOS0zLjczNS0zLjcyOS0xLjA1IDAtMy43OTIuNDA5LTQuMjE5IDQuNjEzaDcuMTQ3Yy41MzcgMCAuODA3LS4yOTQuODA3LS44ODR6bS0uMTU0IDQuMzhINTguNjJjMCAyLjU0NyAxLjc1OCA0LjgwMyA0LjYxIDQuODAzIDEuNzQyIDAgMy4zMDUtLjYwMSA0LjY4OC0xLjgwNi40NjMtLjQ2My43OTcuMDYzLjgwOC4wNzcgMCAwIDEuMzUgMS45MTEgMS41MzYgMi4xNzEuMDQ5LjA4NC4xMTYuMjg4LS4xOTIuNTk2LTEuODIgMS44Mi00LjEzNyAyLjcyOC02Ljk1NSAyLjcyOC01LjgxMyAwLTguNzk4LTQuNzQ4LTguNzk4LTEwLjE0NCAwLTYuNDgxIDQuMTUzLTEwLjEwNSA4Ljg3NS0xMC4xMDUgNC4wNjUgMCA3LjYwOCAzLjEwNCA3LjYwOCA3LjQxNiAwIDIuODQzLTEuMzk3IDQuMjY0LTQuMTg4IDQuMjY0em0zNy4yMjMtNy40NTNjLjQzNiAwIC42NTMtLjIzMS42NTMtLjY5MlY4Ljk4NWMwLS40Ni0uMjE3LS42ODYtLjY1My0uNjg2aC00LjY4OFYzLjgxYzAtLjQzNS0uMjMtLjY1My0uNjktLjY1M0g5NS40NmMtLjQ2MSAwLS42OTIuMjE4LS42OTIuNjUzVjguM2gtMi40OTdjLS40MzUgMC0uNjUzLjIyNS0uNjUzLjY4NnYyLjE5NmMwIC40Ni4yMTguNjkyLjY1My42OTJoMi40OTd2OS4yMjFjMCAyLjc0NCAxLjAyNCA0LjI1MiAxLjUzNyA0Ljg0MS41MTIuNTkgMS44MTYgMS44OSA0LjQ1NyAxLjg4MyAyLjM1NS0uMDA2IDQuMjk0LTEuMzA3IDUuMTEtMi4xNTIuMzIzLS4zMzQuMjY4LS41MjQuMDkyLS43NTRsLTEuNTEzLTEuOTc0Yy0uMjE1LS4yOTgtLjU4Ni0uMjgtLjgwNy0uMDc3LS41MjYuNDMzLTEuNjQ2IDEuMzk0LTMuMTYuODMxLTEuMTAxLS40MS0xLjMzNi0xLjYzOC0xLjMzNi0yLjU2di05LjI2aDQuNjg4ek03My43NTkgMjYuODU3YzAgLjQzNi4yMy42NTQuNjkyLjY1NGgyLjk5N2MuNDYxIDAgLjY5Mi0uMjE4LjY5Mi0uNjU0VjEyLjM3MmMuODk1LS42MDggMy42OTItMS41NSA1LjcyNi0uMzU1IDEuMjMzLjcyNSAxLjY5OCAyLjcwMiAxLjY5IDUuMDA0bC0uMDAxIDkuODM2YzAgLjQzNi4yMy42NTQuNjkxLjY1NGgyLjk5OGMuNDYgMCAuNjkxLS4yMTguNjkxLS42NTRWMTYuNzE0YzAtNS45OTQtMi43NC05LjAyMy04LjIyMi05LjA2OC0yLjY1NS0uMDIyLTUuNTk2Ljk5Ni03LjE0NyAyLjM0NC0uNTM0LjQ2NS0uODA2IDEuMDI1LS44MDYgMS42OXYxNS4xNzd6TTUwLjQzNyA4LjNINDcuNDRjLS40NjEgMC0uNjkxLjIxOC0uNjkxLjY1NHYxNy45MDRjMCAuNDM2LjIzLjY1NC42OTEuNjU0aDIuOTk3Yy40NjEgMCAuNjkyLS4yMTguNjkyLS42NTRWOC45NTNjMC0uNDM2LS4yMy0uNjU0LS42OTItLjY1NHptLTI1LjAxMyAwaC0yLjk5N2MtLjQ2IDAtLjY5MS4yMTgtLjY5MS42NTR2MTcuOTA0YzAgLjQzNi4yMy42NTQuNjkxLjY1NGgyLjk5N2MuNDYxIDAgLjY5Mi0uMjE4LjY5Mi0uNjU0VjguOTUzYzAtLjQzNi0uMjMtLjY1NC0uNjkyLS42NTR6TTQ4Ljk0IDBhMi42NTEgMi42NTEgMCAxIDAgMCA1LjMwMiAyLjY1MSAyLjY1MSAwIDAgMCAwLTUuMzAyek0yMy45MjYgMGEyLjY1MSAyLjY1MSAwIDEgMCAwIDUuMzAyIDIuNjUxIDIuNjUxIDAgMCAwIDAtNS4zMDJ6TTcuNDEgMjYuNzA0QzIuMzQ3IDIwLjczMi4wMzUgOS4wNy4wMSA4LjkzM2MtLjA1MS0uMjgzLjA3NC0uNjM0LjYtLjYzNGgzLjI2NWMuMzMzIDAgLjU0My4xNjYuNjE1LjUgMS4zMTIgNi4xMjQgMy44MzEgMTEuOTkgNS4wMzMgMTMuNjQgMS4yMDItMS42NSAzLjcyLTcuNTE2IDUuMDM0LTEzLjY0LjA3MS0uMzM0LjI4Mi0uNS42MTQtLjVoMy4yNjZjLjUyNSAwIC42NS4zNS42LjYzNC0uMDI0LjEzOC0yLjMzNiAxMS44LTcuNCAxNy43Ny0uNTY1LjY2Ni0xLjIzOSAxLTIuMTE0IDEtLjg3NSAwLTEuNTQ5LS4zMzQtMi4xMTMtMXpNMTA5LjczIDI1Ljc0NGguMzY3Yy4xNDggMCAuMjYtLjAyMy4zMzMtLjA2OS4wNzUtLjA0Ni4xMTItLjEyNS4xMTItLjIzOHYtLjA0NmMwLS4xMzItLjAzNS0uMjIzLS4xMDQtLjI3MmEuNDguNDggMCAwIDAtLjI4LS4wNzNoLS40Mjl2LjY5OHptLjg1NyAxLjA4bC0uNDYtLjc5N2gtLjM5OHYuNzk3aC0uMzE0VjI0Ljc3aC43ODJjLjIxIDAgLjM3My4wNS40OS4xNS4xMTcuMS4xNzYuMjUyLjE3Ni40NTZ2LjA2MWEuNTUyLjU1MiAwIDAgMS0uMTAzLjM1My41MS41MSAwIDAgMS0uMjg4LjE3NmwuNTA2Ljg1OGgtLjM5em0tLjQ3NS0yLjk4NWExLjk5IDEuOTkgMCAxIDAtLjAwMiAzLjk4IDEuOTkgMS45OSAwIDAgMCAuMDAyLTMuOTh6bTEuNjI0IDEuOTg5YzAgLjg5Ny0uNzI2IDEuNjIzLTEuNjI0IDEuNjIzYTEuNjIzIDEuNjIzIDAgMSAxIDAtMy4yNDdjLjg5OCAwIDEuNjI0LjcyNyAxLjYyNCAxLjYyNHpcIi8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdlLW5hbWUgaGlkZGVuLXhzIGhpZGRlbi1zbVwiPnt7dGl0bGV9fTwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItcmlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItd2VsY29tZVwiIChjbGljayk9J3JpZ2h0QnRuT25DbGljaygpJyAqbmdJZj1cInR5cGUgPT09ICdwcmltYXJ5J1wiPlxuICAgICAgICA8c3Bhbj5XZWxjb21lLCB7e3VzZXJOYW1lfX08L3NwYW4+XG4gICAgICAgIDxtYXQtaWNvbj57e2lzRHJvcD8gXCJhcnJvd19kcm9wX3VwXCI6XCJhcnJvd19kcm9wX2Rvd25cIn19PC9tYXQtaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oYW1idXJnZXJcIiAoY2xpY2spPSdoYW1idXJnZXJPbkNsaWNrKCknPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1NZW51XCIgKm5nSWY9XCJ0eXBlID09PSAncmlnaHRNZW51J1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvaGVhZGVyPmAsXG4gIHN0eWxlczogW2A6aG9zdCAubmF2LWJhcntiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDoxMDtib3gtc2hhZG93OjAgMXB4IDAgMCAjZTllOWU5O3BhZGRpbmc6MCAxNXB4fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlcntkaXNwbGF5OmZsZXg7aGVpZ2h0OjcycHg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1oZWFkZXJ7ZGlzcGxheTppbmxpbmUtZmxleH06aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBhe2Rpc3BsYXk6aW5saW5lLWZsZXg7dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtZGVjb3JhdGlvbjpub25lfTpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGEgc3BhbntsaW5lLWhlaWdodDoyNHB4fUBtZWRpYSAobWF4LXdpZHRoOjU0M3B4KXs6aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBhIC5oaWRkZW4teHN7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6NTQ0cHgpIGFuZCAobWF4LXdpZHRoOjc2N3B4KXs6aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBhIC5oaWRkZW4tc217ZGlzcGxheTpub25lIWltcG9ydGFudH19Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgLnBhZ2UtbmFtZXtib3JkZXItbGVmdDoxcHggc29saWQgI2U1ZTVlNTtwYWRkaW5nLWxlZnQ6MTVweDttYXJnaW4tbGVmdDozMHB4O3BhZGRpbmctdG9wOjJweDtmb250LXNpemU6MThweDtjb2xvcjojZmY0ZTAwO2ZvbnQtd2VpZ2h0OjQwMH1AbWVkaWEgKG1heC13aWR0aDo5OTFweCl7Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItTWVudXtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXs6aG9zdCAubmF2LWJhcntwYWRkaW5nOjAgNDBweH06aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0e21hcmdpbi1yaWdodDowfX06aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodCAubmF2YmFyLXdlbGNvbWV7Zm9udC1zaXplOjE2cHg7Y29sb3I6I2ZmNGUwMDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXh9QG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci13ZWxjb21le2Rpc3BsYXk6bm9uZX19Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodCAubmF2YmFyLXdlbGNvbWUgc3BhbnttYXJnaW4tcmlnaHQ6MTBweDtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoyNHB4O2ZvbnQtd2VpZ2h0OjQwMH06aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItd2VsY29tZSAubWF0LWljb257ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodCAubmF2YmFyLWhhbWJ1cmdlcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyfUBtZWRpYSAobWluLXdpZHRoOjk5MXB4KXs6aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItaGFtYnVyZ2Vye2Rpc3BsYXk6bm9uZX19Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodCAubmF2YmFyLWhhbWJ1cmdlciAuaWNvbi1iYXJ7aGVpZ2h0OjJweDt3aWR0aDoyMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmNGUwMDtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6M3B4fWBdXG59KVxuXG5leHBvcnQgY2xhc3MgVml6SGVhZGVyQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB0aXRsZTogU3RyaW5nO1xuICBASW5wdXQoKSB1c2VyTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBicmFuZExpbms6IFN0cmluZztcbiAgQElucHV0KCkgc3ZnSWNvbjogU3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBWaXpIZWFkZXJUeXBlO1xuICBAT3V0cHV0KCkgcmlnaHRCdG5DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhhbWJ1cmdlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBpc0Ryb3A6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcmlnaHRCdG5PbkNsaWNrKCkge1xuICAgIHRoaXMucmlnaHRCdG5DbGljay5lbWl0KClcbiAgICB0aGlzLmlzRHJvcCA9ICF0aGlzLmlzRHJvcFxuICB9XG5cbiAgaGFtYnVyZ2VyT25DbGljaygpIHtcbiAgICB0aGlzLmhhbWJ1cmdlckNsaWNrLmVtaXQoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWaXpIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3Zpei1oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBWaXpIZWFkZXJDb21wb25lbnQsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpekhlYWRlckNvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWaXpIZWFkZXJNdWR1bGUge30iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0sIE9wdGlvbmFsLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWF0UmFuZ2VEYXRlcGlja2VySW5wdXRFdmVudCwgbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZSwgRGF0ZUFkYXB0ZXIgfSBmcm9tIFwibWF0LXJhbmdlLWRhdGVwaWNrZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndml6LWRhdGUtcmFuZ2UtcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXBwbGljYXRpb24tZHJvcGRvd25cIj5cbiAgPGZvcm0gY2xhc3M9J2RhdGUtcmFuZ2UtcGlja2VyIHZpemllbnQtaW5wdXQnPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXRlXCJcbiAgICAgICAgICBbbWF0UmFuZ2VEYXRlcGlja2VyXT1cInJlc3VsdFBpY2tlclwiXG4gICAgICAgICAgW25nTW9kZWxdPVwiZGF0ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25JbnB1dERhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgIChkYXRlSW5wdXQpPVwib25EYXRlSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgKGRhdGVDaGFuZ2UpPVwib25EYXRlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgPG1hdC1yYW5nZS1kYXRlcGlja2VyXG4gICAgICAgICAgI3Jlc3VsdFBpY2tlciBbcmFuZ2VNb2RlXT1cInRydWVcIiAoY2xvc2VkKT1cInRoaXMub25DbG9zZSgkZXZlbnQpXCI+XG4gICAgICAgIDwvbWF0LXJhbmdlLWRhdGVwaWNrZXI+XG4gICAgICAgIDxtYXQtcmFuZ2UtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicmVzdWx0UGlja2VyXCI+PC9tYXQtcmFuZ2UtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9mb3JtPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYDpob3N0IC5tYXQtaW5wdXQtZWxlbWVudHtjb2xvcjojMDAwfTpob3N0IC5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfTpob3N0IC5tYXQtZm9ybS1maWVsZCAuZGF0ZS1yYW5nZS1waWNrZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXh7d2lkdGg6MTAwJSFpbXBvcnRhbnR9Omhvc3QgLm1hdC1mb3JtLWZpZWxkIC5kYXRlLXJhbmdlLXBpY2tlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXh7d2lkdGg6MTAwJX0uZGF0ZS1yYW5nZS1waWNrZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4e3dpZHRoOjEwMCV9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXsuZGF0ZS1yYW5nZS1waWNrZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4e3dpZHRoOjEwMCV9fTo6bmctZGVlcCAucXVpY2stc2VsZWN0LXNlYyAuc2VsZWN0LXRpdGxle2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjQwMH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjAxcHgpezo6bmctZGVlcCAuY2FsZW5kYXItYnV0dG9uLXNlY3tsaW5lLWhlaWdodDo4NHB4IWltcG9ydGFudDtwYWRkaW5nOjRweCAyNHB4IWltcG9ydGFudH06Om5nLWRlZXAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnR7aGVpZ2h0OjUwMXB4IWltcG9ydGFudH19YF1cbn0pXG5leHBvcnQgY2xhc3MgVml6RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZGF0ZTogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiA7XG4gIGxhc3REYXRlSW5wdXQ6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gfCBudWxsO1xuICBsYXN0RGF0ZUNoYW5nZTogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiB8IG51bGw7XG4gIGRhdGVTaG90OiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IHwgbnVsbDtcblxuICBAT3V0cHV0KCkgb25BcHBseSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PiAoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RGF0ZT4sXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGVTaG90ID0gdGhpcy5kYXRlO1xuICB9XG5cbiAgb25EYXRlSW5wdXQgPSAoZTogbWF0UmFuZ2VEYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbnB1dCcsIHRoaXMubGFzdERhdGVJbnB1dCA9PT0gZS52YWx1ZSlcbiAgICB0aGlzLmxhc3REYXRlSW5wdXQgPSBlLnZhbHVlIGFzIG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT5cbiAgfVxuICBvbkRhdGVDaGFuZ2UgPSAoZTogbWF0UmFuZ2VEYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3QnLCB0aGlzLmxhc3REYXRlSW5wdXQgPT09IGUudmFsdWUpXG4gICAgdGhpcy5sYXN0RGF0ZUNoYW5nZSA9IGUudmFsdWUgYXMgbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPjtcbiAgfVxuICBvbklucHV0RGF0ZSgkZXZlbnQpIHtcbiAgICB0aGlzLmRhdGUgPSAkZXZlbnRcbiAgfVxuICBvbkNsb3NlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRlU2hvdCwgdGhpcy5kYXRlKVxuICAgIGlmICghdGhpcy5kYXRlU2hvdCB8fCAhdGhpcy5kYXRlKSByZXR1cm5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZSh0aGlzLmRhdGVTaG90LmJlZ2luLCB0aGlzLmRhdGUuYmVnaW4pXG4gICAgICAmJlxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGUodGhpcy5kYXRlU2hvdC5lbmQsIHRoaXMuZGF0ZS5lbmQpXG4gICAgKSB7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlU2hvdCA9IHRoaXMuZGF0ZVxuICAgICAgdGhpcy5vbkFwcGx5LmVtaXQodGhpcy5kYXRlKVxuICAgIH1cbiAgICBcbiAgfVxufVxuXG5cbi8vIEBQaXBlKHtuYW1lOiAnbGFzdGRheXMnfSlcbi8vIGV4cG9ydCBjbGFzcyBMYXN0RGF5c1BpcGU8RD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuLy8gICBjb25zdHJ1Y3Rvcihcbi8vICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RGF0ZT4sXG4vLyAgICkge31cblxuLy8gICB0cmFuc2Zvcm0odmFsdWU6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gfCBEIHwgbnVsbCwgb3B0aW9uczogc3RyaW5nKTogYW55IHtcbi8vICAgICBpZiAodmFsdWUgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ2JlZ2luJykpIHtcbi8vICAgICAgIGxldCBfdmFsdWUgPSA8bWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPj4gdmFsdWU7XG4vLyAgICAgICBpZiAodGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGUodGhpcy5fZGF0ZUFkYXB0ZXIudG9kYXkoKSwgX3ZhbHVlLmVuZCkpIHtcbi8vICAgICAgICAgLy8gcmV0dXJuIFwiTGFzdCA/IERheXNcIjtcbi8vICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgXG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gX3ZhbHVlO1xuLy8gICAgICAgfVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpekRhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdml6LWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRSYW5nZURhdGVwaWNrZXJNb2R1bGUsIE1hdFJhbmdlTmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gXCJtYXQtcmFuZ2UtZGF0ZXBpY2tlclwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRSYW5nZURhdGVwaWNrZXJNb2R1bGUsIFxuICAgIE1hdFJhbmdlTmF0aXZlRGF0ZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVml6RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpekRhdGVSYW5nZVBpY2tlckNvbXBvbmVudCxcbiAgICAvLyBMYXN0RGF5c1BpcGVcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVml6RGF0ZVJhbmdlUGlja2VyTXVkdWxlIHt9IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlVHlwZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25cIj5cbiAgPGZvcm0gY2xhc3M9XCJ2aXppZW50LWlucHV0XCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydtYXQtZm9jdXNlZCc6IG1lbnVTaG93bn1cIlxuICAgICAgICAgICAgICAgICAgICBbbWF0TWVudVRyaWdnZXJGb3JdPVwib3B0aW9uTWVudVwiXG4gICAgICAgICAgICAgICAgICAgIChtZW51Q2xvc2VkKT1cImhpZGVNZW51KClcIlxuICAgICAgICAgICAgICAgICAgICAobWVudU9wZW5lZCk9XCJzaG93TWVudSgpXCI+XG4gICAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICBbdmFsdWVdPVwibWVzc2FnZSgpXCJcbiAgICAgICAgICAgICByZWFkb25seS8+XG4gICAgICA8bWF0LWljb24gbWF0U3VmZml4XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25faWNvblwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydzZWxlY3QtZHJvcGRvd25faWNvbi0tYWN0aXZlJyA6IG1lbnVTaG93bn1cIj57e21lbnVTaG93bj9cImFycm93X2Ryb3BfdXBcIjpcImFycm93X2Ryb3BfZG93blwifX08L21hdC1pY29uPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZm9ybT5cbiAgPG1hdC1tZW51ICNvcHRpb25NZW51PVwibWF0TWVudVwiXG4gICAgICAgICAgICBbb3ZlcmxhcFRyaWdnZXJdPWZhbHNlXG4gICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1kcm9wZG93bl9tZW51IG1hdC1lbGV2YXRpb24tejhcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LW9wdGlvblwiXG4gICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICA8bWF0LWxpc3Qgcm9sZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LW9wdGlvbl9saXN0XCI+XG4gICAgICAgIDxtYXQtbGlzdC1pdGVtIHJvbGU9XCJsaXN0aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LW9wdGlvbl9saXN0SXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0LW9wdGlvbl9saXN0SXRlbS1hY3RpdmUnIDogb3B0aW9uLnRpdGxlPT09c2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+e3tvcHRpb24udGl0bGV9fTwvbWF0LWxpc3QtaXRlbT5cbiAgICAgIDwvbWF0LWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvbWF0LW1lbnU+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLnNlbGVjdC1vcHRpb25fbGlzdHtmb250LXdlaWdodDozMDA7cGFkZGluZy10b3A6MH0uc2VsZWN0LW9wdGlvbl9saXN0IDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTRweDtoZWlnaHQ6NDBweDtjdXJzb3I6cG9pbnRlcn0uc2VsZWN0LW9wdGlvbl9saXN0IDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtaXRlbS1jb250ZW50e3BhZGRpbmc6MCAyNHB4fS5zZWxlY3Qtb3B0aW9uX2xpc3RJdGVte2NvbG9yOiM2OTY5Njk7aGVpZ2h0OjQwcHh9LnNlbGVjdC1vcHRpb25fbGlzdEl0ZW0tYWN0aXZle2NvbG9yOiM3ZjVlYmF9LnNlbGVjdC1vcHRpb25fbGlzdEl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO2NvbG9yOiM3ZjVlYmF9LmZvcm0tZnVsbC13aWR0aHt3aWR0aDoxMDAlO2N1cnNvcjpwb2ludGVyfS5mb3JtLWZ1bGwtd2lkdGggaW5wdXR7Y3Vyc29yOnBvaW50ZXJ9LnNlbGVjdC1kcm9wZG93biBpbnB1dHtjb2xvcjojMDAwfS5zZWxlY3QtZHJvcGRvd25faWNvbntjb2xvcjojOWY5ZjlmfS5zZWxlY3QtZHJvcGRvd25faWNvbi0tYWN0aXZle2NvbG9yOiMwMDB9OjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbC5zZWxlY3QtZHJvcGRvd25fbWVudXttYXJnaW4tdG9wOjFweDt3aWR0aDoyODBweH06Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsLnNlbGVjdC1kcm9wZG93bl9tZW51IC5tYXQtbWVudS1jb250ZW50e3BhZGRpbmc6MH06Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50e2hlaWdodDoyNHB4O2xpbmUtaGVpZ2h0OjI0cHg7dmVydGljYWwtYWxpZ246bWlkZGxlfTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2hlaWdodDoyMS4zMzNweDtsaW5lLWhlaWdodDoyMS4zMzNweDtmb250LXNpemU6MTZweDttYXJnaW4tYm90dG9tOjFweH06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4e2FsaWduLWl0ZW1zOnN0cmV0Y2h9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e21hcmdpbi1ib3R0b206NXB4O3BhZGRpbmctYm90dG9tOjB9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MH06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbTowO2JhY2tncm91bmQtY29sb3I6I2MzYzNjM306Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtaWNvbnttYXJnaW4tdG9wOjE3cHh9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItdG9nZ2xle21hcmdpbi10b3A6MTdweDtkaXNwbGF5OmJsb2NrO2NvbG9yOiM5ZjlmOWZ9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiM5ZjlmOWZ9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiM3ZjVlYmF9OjpuZy1kZWVwIDo6bmctZGVlcDpob3ZlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgVml6U2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClwbGFjZWhvbGRlcjpzdHJpbmc7XG4gIEBJbnB1dCgpb3B0aW9uczpBcnJheTxEYXRlVHlwZT4gPSBbXVxuICBAVmlld0NoaWxkKE1hdE1lbnVUcmlnZ2VyKSB0cmlnZ2VyOiBNYXRNZW51VHJpZ2dlcjtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVR5cGU+KClcbiAgdmFsdWU6IHN0cmluZztcbiAgbWVudVNob3duOiBib29sZWFuID0gZmFsc2U7XG4gIHNlbGVjdGVkOiBEYXRlVHlwZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMub3B0aW9uc1swXVxuICB9XG5cblxuICBzaG93TWVudSgpIHtcbiAgICB0aGlzLm1lbnVTaG93biA9IHRydWU7XG4gIH1cbiAgaGlkZU1lbnUoKSB7XG4gICAgdGhpcy5tZW51U2hvd24gPSBmYWxzZTtcbiAgfVxuICBzZWxlY3RPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IG9wdGlvbjtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KG9wdGlvbilcbiAgICB0aGlzLnRyaWdnZXIuY2xvc2VNZW51KCk7XG4gIH1cbiAgbWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZC50aXRsZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdExpc3RNb2R1bGUsIE1hdE1lbnVNb2R1bGUsIE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgVml6U2VsZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdml6LXNlbGVjdC5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVml6U2VsZWN0Q29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpelNlbGVjdENvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWaXpTZWxlY3RNb2R1bGUge30iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndml6LWZvb3RlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZvb3Rlci1iYXJcIj5cbiAgPGRpdiBjbGFzcz1cImZvb3Rlci13cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1sZWZ0XCI+XG4gICAgICA8dWwgY2xhc3M9XCJuYXZcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBicmFuZCBvZiBsZWZ0QnJhbmRzXCI+XG4gICAgICAgICAgPGEgaHJlZj17e2JyYW5kLmxpbmt9fT57e2JyYW5kLnRpdGxlfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItcmlnaHRcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdlwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGJyYW5kIG9mIHJpZ2h0QnJhbmRzXCI+XG4gICAgICAgICAgPGEgaHJlZj17e2JyYW5kLmxpbmt9fT57e2JyYW5kLnRpdGxlfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvb3Rlci1jZW50ZXJcIj5cbiAgICA8cD5WaXppZW50IE1EQTwvcD5cbiAgICA8cD4mY29weTsgMjAxOCBWaXppZW50ICYgaUxhYnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG5cdHN0eWxlczogW2A6aG9zdCAuZm9vdGVyLWJhcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OjcycHg7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7cGFkZGluZzowIDQwcHg7ZGlzcGxheTpibG9ja306aG9zdCAuZm9vdGVyLWNlbnRlcnt6LWluZGV4OjE7cG9zaXRpb246YWJzb2x1dGU7dG9wOjQ4cHg7aGVpZ2h0OjQ4cHg7bGVmdDowO3JpZ2h0OjA7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoxMnB4IDB9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpezpob3N0IC5mb290ZXItY2VudGVye3RvcDowfX06aG9zdCAuZm9vdGVyLWNlbnRlciBwe3BhZGRpbmc6MDttYXJnaW46MDtsaW5lLWhlaWdodDoyNHB4fTpob3N0IC5mb290ZXItd3JhcHBlcnt6LWluZGV4Ojk5OTtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLXRvcDoxNnB4O3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0IC5mb290ZXItd3JhcHBlciAuZm9vdGVyLWxlZnQgLm5hdiBsaXttYXJnaW4tcmlnaHQ6MjRweH06aG9zdCAuZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1sZWZ0IC5uYXYgbGk6bnRoLWxhc3QtY2hpbGQoMSl7bWFyZ2luLXJpZ2h0OjB9Omhvc3QgLmZvb3Rlci13cmFwcGVyIC5mb290ZXItcmlnaHQgLm5hdiBsaXttYXJnaW4tbGVmdDoyNHB4fTpob3N0IC5mb290ZXItd3JhcHBlciA6Om5nLWRlZXAgLm5hdntwYWRkaW5nOjA7bWFyZ2luOjA7bGlzdC1zdHlsZS10eXBlOm5vbmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCAuZm9vdGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5uYXYgbGl7bGlzdC1zdHlsZTpub25lO2N1cnNvcjpwb2ludGVyfTpob3N0IC5mb290ZXItd3JhcHBlciA6Om5nLWRlZXAgLm5hdiBsaSBhe2Rpc3BsYXk6aW5saW5lLWZsZXg7dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiM3ZjVlYmF9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXpGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdG5nT25Jbml0KCkgeyBcblx0XHR0aGlzLnNwbGl0QnJhbmRzKClcblx0fVxuXG5cdEBJbnB1dCgpIGJyYW5kczpBcnJheTxCcmFuZFR5cGU+ID0gW11cblx0bGVmdEJyYW5kczogQXJyYXk8QnJhbmRUeXBlPiA9IFtdXG5cdHJpZ2h0QnJhbmRzOiBBcnJheTxCcmFuZFR5cGU+ID0gW11cblxuXHRzcGxpdEJyYW5kcygpIHtcblx0ICBsZXQgY291bnQgPSB0aGlzLmJyYW5kcy5sZW5ndGhcbiAgICBpZiAoY291bnQpIHtcblx0XHRcdGlmICggY291bnQgJSAyID09IDAgKSB7XG5cdFx0XHRcdGxldCBsZWZ0Q291bnQgPSBjb3VudCAvIDJcblx0XHRcdFx0dGhpcy5sZWZ0QnJhbmRzID0gdGhpcy5icmFuZHMuc2xpY2UoMCwgbGVmdENvdW50KVxuXHRcdFx0XHR0aGlzLnJpZ2h0QnJhbmRzID0gdGhpcy5icmFuZHMuc2xpY2UobGVmdENvdW50LCBjb3VudClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBsZWZ0Q291bnQgPSAoY291bnQgLSAxKSAvIDIgXG5cdFx0XHRcdHRoaXMubGVmdEJyYW5kcyA9IHRoaXMuYnJhbmRzLnNsaWNlKDAsIGxlZnRDb3VudClcblx0XHRcdFx0dGhpcy5yaWdodEJyYW5kcyA9IHRoaXMuYnJhbmRzLnNsaWNlKGxlZnRDb3VudCwgY291bnQpXG5cdFx0XHR9XG5cdCAgfVxuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmRUeXBlIHtcblx0aWQ6IHN0cmluZztcblx0bGluazogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpekZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vdml6LWZvb3Rlci5jb21wb25lbnQnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBWaXpGb290ZXJDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6Rm9vdGVyQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFZpekZvb3Rlck11ZHVsZSB7fSIsIi8vIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbi8vIGltcG9ydCB7IFZpek1lbnVDb21wb25lbnQgfSBmcm9tICcuL3Zpei1tZW51LmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBWaXpNZW51Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vbWVudS1jZWxsL3Zpei1tZW51LWNlbGwuY29tcG9uZW50JztcblxuLy8gQE5nTW9kdWxlKHtcbi8vICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0TWVudU1vZHVsZV0sXG4vLyAgIGV4cG9ydHM6IFtWaXpNZW51Q29tcG9uZW50XSxcbi8vICAgZGVjbGFyYXRpb25zOiBbVml6TWVudUNvbXBvbmVudCwgVml6TWVudUNlbGxDb21wb25lbnRdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIFZpek1lbnVNb2R1bGUge31cblxuXG5cblxuXG5leHBvcnQgY29uc3QgVml6TWVudU1vZHVsZSA9IE1hdE1lbnVNb2R1bGUiLCIvLyBpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gaW1wb3J0IHsgVml6Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL3Zpei1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbi8vIEBOZ01vZHVsZSh7XG4vLyAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlXSxcbi8vICAgZXhwb3J0czogW1ZpekNoZWNrYm94Q29tcG9uZW50XSxcbi8vICAgZGVjbGFyYXRpb25zOiBbVml6Q2hlY2tib3hDb21wb25lbnRdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIFZpekNoZWNrYm94TW9kdWxlIHt9XG5cblxuXG5leHBvcnQgY29uc3QgVml6Q2hlY2tib3hNb2R1bGUgPSBNYXRDaGVja2JveE1vZHVsZVxuIiwiaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgY29uc3QgVml6QnV0dG9uTW9kdWxlID0gTWF0QnV0dG9uTW9kdWxlO1xuIiwiaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgY29uc3QgVml6Rm9ybUZpZWxkTW9kdWxlID0gTWF0Rm9ybUZpZWxkTW9kdWxlO1xuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tWaXpUcmVlTm9kZURlZl0nXG59KVxuZXhwb3J0IGNsYXNzIFZpelRyZWVOb2RlRGVmRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW1ZpelRyZWVMZWFmRGVmXSdcbn0pXG5leHBvcnQgY2xhc3MgVml6VHJlZUxlYWZEZWZEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgQ29udGVudENoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpelRyZWVOb2RlRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi92aXotdHJlZS1ub2RlLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVml6VHJlZUxlYWZEZWZEaXJlY3RpdmUgfSBmcm9tICcuL3Zpei10cmVlLWxlYWYtZGVmLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei10cmVlJyxcbiAgdGVtcGxhdGU6IGA8IS0tIDxkaXYgKm5nRm9yPVwibGV0IG5vZGUgb2YgdHJlZSB0ZW1wbGF0ZTogaXRlbVRlbXBsYXRlXCI+XG4gIDxuZy10ZW1wbGF0ZSAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoPT0wXCI+XG4gICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlIGNvbnRleHQ6IHsgJGltcGxpY2l0OiBub2RlIH1cIj48L25nLXRlbXBsYXRlPsOGwpLDhsKSXG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoPjBcIj5cbiAgICA8YnV0dG9uPnt7bm9kZS5uYW1lfX08L2J1dHRvbj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzdWJOb2RlIG9mIG5vZGUuY2hpbGRyZW4gdGVtcGxhdGU6IGl0ZW1UZW1wbGF0ZVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlIGNvbnRleHQ6IHsgJGltcGxpY2l0OiBzdWJOb2RlIH1cIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+IC0tPlxuXG5cbjxkaXY+XG4gIDxuZy10ZW1wbGF0ZSAjcmVjdXJzaXZlTGlzdCBsZXQtdHJlZT5cbiAgICA8ZGl2IGNsYXNzPVwidml6LXRyZWUtY2VsbFwiICpuZ0Zvcj1cImxldCBub2RlIG9mIHRyZWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ2aXotdHJlZS1jZWxsLW5vZGVcIj5cbiAgICAgICAgPCEtLSA8bWF0LWljb24gKGNsaWNrKT1cIm5vZGUuaXNFeHBhbmRlZCA9ICFub2RlLmlzRXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJub2RlLmNoaWxkcmVuLmxlbmd0aD4wXCI+XG4gICAgICAgICAge3tub2RlLmlzRXhwYW5kZWQgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgICAgPC9tYXQtaWNvbj4gLS0+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoPjBcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidml6VHJlZU5vZGVUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IG5vZGUgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoPT0wXCI+XG4gICAgICAgICAgPGRpdiBbY2xhc3Mudml6LXRyZWUtY2VsbC1ub2RlLWNvbnRlbnRdPVwiIShub2RlLmNoaWxkcmVuLmxlbmd0aD4wKVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInZpelRyZWVMZWFmVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBub2RlIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2ICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwXCIgW2NsYXNzLmhpZGVDaGlsZHJlbl09IW5vZGUuaXNFeHBhbmRlZCBjbGFzcz1cInZpei10cmVlLWNlbGwtY2hpbGRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJlY3Vyc2l2ZUxpc3Q7IGNvbnRleHQ6eyAkaW1wbGljaXQ6IG5vZGUuY2hpbGRyZW4gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJlY3Vyc2l2ZUxpc3Q7IGNvbnRleHQ6eyAkaW1wbGljaXQ6IHRyZWUgfVwiPjwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5cblxuXG5cblxuPCEtLSA8dml6LXRyZWUtY2VsbCAqbmdGb3I9XCJsZXQgbm9kZSBvZiB0cmVlOyBsZXQgaT1pbmRleFwiIFtub2RlXT1cIm5vZGVcIj48L3Zpei10cmVlLWNlbGw+IC0tPmAsXG4gIHN0eWxlczogW2AuaGlkZUNoaWxkcmVue2Rpc3BsYXk6bm9uZX0udml6LXRyZWUtY2VsbC1ub2Rle21hcmdpbi1ib3R0b206MTBweH0udml6LXRyZWUtY2VsbC1jaGlsZHttYXJnaW4tbGVmdDo0MHB4fS52aXotdHJlZS1jZWxsLW5vZGUtY29udGVudHttYXJnaW4tbGVmdDo0MHB4O21hcmdpbi1ib3R0b206MTZweH0udml6LXRyZWUtY2VsbC1ub2RlLWNvbnRlbnQtaGlkZGVue2Rpc3BsYXk6bm9uZX1gXVxufSlcbmV4cG9ydCBjbGFzcyBWaXpUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgdHJlZTogYW55O1xuICBAQ29udGVudENoaWxkKFZpelRyZWVOb2RlRGVmRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHZpelRyZWVOb2RlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoVml6VHJlZUxlYWZEZWZEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgdml6VHJlZUxlYWZUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudml6VHJlZU5vZGVUZW1wbGF0ZSk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudml6VHJlZU5vZGVUZW1wbGF0ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aXotdHJlZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICA8bWF0LWljb24gKGNsaWNrKT1cIm5vZGUuaXNFeHBhbmRlZCA9ICFub2RlLmlzRXhwYW5kZWRcIlxuICAgICAgICAgICAgKm5nSWY9XCJub2RlLmNoaWxkcmVuLmxlbmd0aD4wXCI+XG4gICAge3tub2RlLmlzRXhwYW5kZWQgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgPC9tYXQtaWNvbj5cbiAgPHNwYW4gY2xhc3M9J3Zpei10cmVlLWNlbGwtbmFtZSc+e3tub2RlLm5hbWV9fTwvc3Bhbj5cbjwvZGl2PlxuXG48ZGl2IFtjbGFzcy5oaWRlQ2hpbGRyZW5dPW5vZGUuaXNFeHBhbmRlZFxuICAgICBjbGFzcz0ndml6LXRyZWUtY2hpbGQnPlxuICA8ZGl2ICpuZ0Zvcj1cImxldCBub2RlIG9mIG5vZGUuY2hpbGRyZW47IGxldCBpPWluZGV4XCI+XG4gICAgPHZpei10cmVlLWNlbGwgW25vZGVdPVwibm9kZVwiPjwvdml6LXRyZWUtY2VsbD5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmhpZGVDaGlsZHJlbntkaXNwbGF5Om5vbmV9LnZpei10cmVlLWNoaWxke21hcmdpbi1sZWZ0OjE2cHh9LnZpei10cmVlLWNlbGwtbmFtZXtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MjRweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBWaXpUcmVlQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5vZGU7XG4gIGNvbGxhcHNlOiBib29sZWFuID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICB0b2dnbGVDb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlID0gIXRoaXMuY29sbGFwc2U7XG4gIH1cbn1cbiIsIi8vIGltcG9ydCB7IE1hdFRyZWVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbi8vIGV4cG9ydCBjb25zdCBWaXpUcmVlTW9kdWxlID0gTWF0VHJlZU1vZHVsZVxuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFZpelRyZWVDb21wb25lbnQgfSBmcm9tICcuL3Zpei10cmVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaXpUcmVlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vdml6LXRyZWUtY2VsbC92aXotdHJlZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgVml6VHJlZU5vZGVEZWZEaXJlY3RpdmUgfSBmcm9tICcuL3Zpei10cmVlLW5vZGUtZGVmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBWaXpUcmVlTGVhZkRlZkRpcmVjdGl2ZSB9IGZyb20gJy4vdml6LXRyZWUtbGVhZi1kZWYuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBWaXpUcmVlQ29tcG9uZW50LFxuICAgIFZpelRyZWVDZWxsQ29tcG9uZW50LFxuICAgIFZpelRyZWVOb2RlRGVmRGlyZWN0aXZlLFxuICAgIFZpelRyZWVMZWFmRGVmRGlyZWN0aXZlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpelRyZWVDb21wb25lbnQsXG4gICAgVml6VHJlZUNlbGxDb21wb25lbnQsXG4gICAgVml6VHJlZU5vZGVEZWZEaXJlY3RpdmUsXG4gICAgVml6VHJlZUxlYWZEZWZEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBWaXpUcmVlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBNYXRTbGlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjb25zdCBWaXpTbGlkZXJNb2R1bGUgPSBNYXRTbGlkZXJNb2R1bGU7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3Zpei10b29sYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidml6LXRvb2xiYXJcIj4gXG4gIDxzcGFuPnt7dGl0bGV9fTwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cInNlYXJjaFwiIChjbGljayk9XCJzZWFyY2hPbmNsaWNrKClcIj5cbiAgICA8bWF0LWljb24+c2VhcmNoPC9tYXQtaWNvbj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgOmhvc3QgLnZpei10b29sYmFye2Rpc3BsYXk6ZmxleDtsaW5lLWhlaWdodDo2NHB4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nOjAgMjRweH06aG9zdCAudml6LXRvb2xiYXIgLnNlYXJjaHtkaXNwbGF5OmlubGluZS1mbGV4O2N1cnNvcjpwb2ludGVyfTpob3N0IC52aXotdG9vbGJhciAuc2VhcmNoIC5tYXQtaWNvbntoZWlnaHQ6NjRweDtsaW5lLWhlaWdodDo2NHB4O2NvbG9yOiM5ZjlmOWZ9YF0sXG59KVxuXG5leHBvcnQgY2xhc3MgVml6VG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGl0bGU6IFN0cmluZztcbiAgQE91dHB1dCgpIHNlYXJjaEJ0bkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgbmdPbkluaXQoKSB7IH1cbiAgXG4gIHNlYXJjaE9uY2xpY2soKSB7XG4gICAgdGhpcy5zZWFyY2hCdG5DbGljay5lbWl0KClcbiAgfVxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpelRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Zpei10b29sYmFyLmNvbXBvbmVudCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFZpelRvb2xiYXJDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6VG9vbGJhckNvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWaXpUb29sYmFyTXVkdWxlIHt9IiwiaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGNvbnN0IFZpekljb25Nb2R1bGUgPSBNYXRJY29uTW9kdWxlO1xuIiwiaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgVml6TGlzdE1vZHVsZSA9IE1hdExpc3RNb2R1bGUiLCJpbXBvcnQgeyBNYXRDaGlwc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgVml6Q2hpcE1vZHVsZSA9IE1hdENoaXBzTW9kdWxlIiwiaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IFZpekJhZGdlTW9kdWxlID0gTWF0QmFkZ2VNb2R1bGUiLCJpbXBvcnQgeyBNYXRUYWJzTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBjb25zdCBWaXpUYWJzTW9kdWxlID0gTWF0VGFic01vZHVsZVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiRGF0ZUFkYXB0ZXIiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXROYXRpdmVEYXRlTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJNYXRSYW5nZURhdGVwaWNrZXJNb2R1bGUiLCJNYXRSYW5nZU5hdGl2ZURhdGVNb2R1bGUiLCJWaWV3Q2hpbGQiLCJNYXRNZW51VHJpZ2dlciIsIk1hdExpc3RNb2R1bGUiLCJNYXRNZW51TW9kdWxlIiwiTWF0Q2hlY2tib3hNb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJEaXJlY3RpdmUiLCJDb250ZW50Q2hpbGQiLCJUZW1wbGF0ZVJlZiIsIk1hdFNsaWRlck1vZHVsZSIsIk1hdENoaXBzTW9kdWxlIiwiTWF0QmFkZ2VNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFrREU7aUNBSjBCLElBQUlBLGlCQUFZLEVBQUU7a0NBQ2pCLElBQUlBLGlCQUFZLEVBQUU7MEJBQzNCLEtBQUs7U0FFUDs7OztRQUVoQiw0Q0FBZTs7O1lBQWY7Z0JBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7YUFDM0I7Ozs7UUFFRCw2Q0FBZ0I7OztZQUFoQjtnQkFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFBO2FBQzNCOztvQkF4REZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLHMwSEE4QkY7d0JBQ1IsTUFBTSxFQUFFLENBQUMsZzJEQUFnMkQsQ0FBQztxQkFDMzJEOzs7Ozs0QkFJRUMsVUFBSzsrQkFDTEEsVUFBSztnQ0FDTEEsVUFBSzs4QkFDTEEsVUFBSzsyQkFDTEEsVUFBSztvQ0FDTEMsV0FBTTtxQ0FDTkEsV0FBTTs7aUNBL0NUOzs7Ozs7O0FDQUE7Ozs7b0JBTUNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZOzRCQUNaQyxtQkFBWTs0QkFDWkMsc0JBQWE7eUJBQ2Q7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLGtCQUFrQjt5QkFDbkI7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLGtCQUFrQjt5QkFDbkI7cUJBQ0Y7OzhCQWxCRDs7Ozs7OztBQ0FBO1FBa0NFLHFDQUNVO1lBRFYsaUJBRUk7WUFETSxpQkFBWSxHQUFaLFlBQVk7MkJBSEYsSUFBSVAsaUJBQVksRUFBUTsrQkFVOUIsVUFBQyxDQUFxQztnQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3BELEtBQUksQ0FBQyxhQUFhLHFCQUFHLENBQUMsQ0FBQyxLQUEyQyxDQUFBLENBQUE7YUFDbkU7Z0NBQ2MsVUFBQyxDQUFxQztnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3JELEtBQUksQ0FBQyxjQUFjLHFCQUFHLENBQUMsQ0FBQyxLQUEyQyxDQUFBLENBQUM7YUFDckU7U0FiRzs7OztRQUVKLDhDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDM0I7Ozs7O1FBVUQsaURBQVc7Ozs7WUFBWCxVQUFZLE1BQU07Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO2FBQ25COzs7OztRQUNELDZDQUFPOzs7O1lBQVAsVUFBUSxLQUFLO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQUUsT0FBTTtnQkFDeEMsSUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7d0JBRWhFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUM3RCxFQUFFLENBRUQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO29CQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzdCO2FBRUY7O29CQWhFRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFFBQVEsRUFBRSxvc0JBaUJMO3dCQUNMLE1BQU0sRUFBRSxDQUFDLDhwQkFBOHBCLENBQUM7cUJBQ3pxQjs7Ozs7d0JBdkJvRU8sOEJBQVc7Ozs7MkJBeUI3RU4sVUFBSzs4QkFNTEMsV0FBTTs7MENBaENUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O29CQU9DQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkUsc0JBQWE7NEJBQ2JFLDRCQUFtQjs0QkFDbkJDLDJCQUFrQjs0QkFDbEJDLHVCQUFjOzRCQUNkQyw0QkFBbUI7NEJBQ25CQyxpQkFBVzs0QkFDWEMsMkNBQXdCOzRCQUN4QkMsMkNBQXdCO3lCQUN6Qjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsMkJBQTJCO3lCQUM1Qjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osMkJBQTJCO3lCQUU1QjtxQkFDRjs7dUNBMUJEOzs7Ozs7O0FDQUE7UUF3REU7MkJBUGtDLEVBQUU7MEJBRWpCLElBQUlmLGlCQUFZLEVBQVk7NkJBRTFCLEtBQUs7U0FHVjs7OztRQUVoQixxQ0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ2hDOzs7O1FBR0QscUNBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCOzs7O1FBQ0QscUNBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOzs7OztRQUNELHlDQUFZOzs7O1lBQVosVUFBYSxNQUFNO2dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDMUI7Ozs7UUFDRCxvQ0FBTzs7O1lBQVA7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUM1Qjs7b0JBbEVGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxvNUNBZ0NMO3dCQUNMLE1BQU0sRUFBRSxDQUFDLG1yREFBbXJELENBQUM7cUJBQzlyRDs7Ozs7a0NBRUVDLFVBQUs7OEJBQ0xBLFVBQUs7OEJBQ0xjLGNBQVMsU0FBQ0MsdUJBQWM7NkJBQ3hCZCxXQUFNOztpQ0FuRFQ7Ozs7Ozs7QUNBQTs7OztvQkFPQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pFLHNCQUFhOzRCQUNiRywyQkFBa0I7NEJBQ2xCUSxzQkFBYTs0QkFDYkMsc0JBQWE7NEJBQ2JSLHVCQUFjO3lCQUNmO3dCQUNELE9BQU8sRUFBRTs0QkFDUCxrQkFBa0I7eUJBQ25CO3dCQUNELFlBQVksRUFBRTs0QkFDWixrQkFBa0I7eUJBQ25CO3FCQUNGOzs4QkF0QkQ7Ozs7Ozs7QUNBQTs7MEJBbUNvQyxFQUFFOzhCQUNOLEVBQUU7K0JBQ0QsRUFBRTs7Ozs7UUFObEMscUNBQVE7OztZQUFSO2dCQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTthQUNsQjs7OztRQU1ELHdDQUFXOzs7WUFBWDs7Z0JBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7Z0JBQzdCLElBQUksS0FBSyxFQUFFO29CQUNaLElBQUssS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFFLEVBQUU7O3dCQUNyQixJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFBO3dCQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQTt3QkFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7cUJBQ3REO3lCQUFNOzt3QkFDTixJQUFJLFNBQVMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQTt3QkFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7cUJBQ3REO2lCQUNBO2FBQ0Y7O29CQWxERFYsY0FBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsdW1CQXFCSjt3QkFDTixNQUFNLEVBQUUsQ0FBQywwaENBQTBoQyxDQUFDO3FCQUNwaUM7Ozs2QkFRQ0MsVUFBSzs7aUNBbkNQOzs7Ozs7O0FDQUE7Ozs7b0JBS0NFLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZOzRCQUNaQyxtQkFBWTt5QkFDYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1Asa0JBQWtCO3lCQUNuQjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osa0JBQWtCO3lCQUNuQjtxQkFDRjs7OEJBaEJEOzs7Ozs7O0FDRUE7QUFlQSxRQUFhLGFBQWEsR0FBR2E7Ozs7Ozs7QUNGN0IsUUFBYSxpQkFBaUIsR0FBR0M7Ozs7OztBQ2ZqQztBQUVBLFFBQWEsZUFBZSxHQUFHQzs7Ozs7O0FDRi9CO0FBRUEsUUFBYSxrQkFBa0IsR0FBR1g7Ozs7OztBQ0ZsQztRQU9FO1NBQWlCOztvQkFMbEJZLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsa0JBQWtCO3FCQUM3Qjs7OztzQ0FKRDs7Ozs7OztBQ0FBO1FBT0U7U0FBaUI7O29CQUxsQkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7cUJBQzdCOzs7O3NDQUpEOzs7Ozs7O0FDQUE7UUFzRUU7U0FBZ0I7Ozs7UUFFaEIsbUNBQVE7OztZQUFSO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDdkM7Ozs7UUFDRCwwQ0FBZTs7O1lBQWY7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN2Qzs7b0JBaEVGckIsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsKzNEQThDa0Y7d0JBQzVGLE1BQU0sRUFBRSxDQUFDLDBOQUEwTixDQUFDO3FCQUNyTzs7Ozs7MkJBRUVDLFVBQUs7MENBQ0xxQixpQkFBWSxTQUFDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFQyxnQkFBVyxFQUFFOzBDQUUzREQsaUJBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRUMsZ0JBQVcsRUFBRTs7K0JBcEU5RDs7Ozs7OztBQ0FBO1FBd0JFOzRCQURvQixJQUFJO1NBQ1I7Ozs7UUFFaEIsdUNBQVE7OztZQUFSLGVBQWE7Ozs7UUFFYiw2Q0FBYzs7O1lBQWQ7Z0JBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDaEM7O29CQTNCRnZCLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLDBjQWFMO3dCQUNMLE1BQU0sRUFBRSxDQUFDLG1IQUFtSCxDQUFDO3FCQUM5SDs7Ozs7MkJBRUVDLFVBQUs7O21DQXRCUjs7Ozs7Ozs7Ozs7b0JDV0NFLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksRUFBRUUsc0JBQWEsQ0FBQzt3QkFDdEMsT0FBTyxFQUFFOzRCQUNQLGdCQUFnQjs0QkFDaEIsb0JBQW9COzRCQUNwQix1QkFBdUI7NEJBQ3ZCLHVCQUF1Qjt5QkFDeEI7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLGdCQUFnQjs0QkFDaEIsb0JBQW9COzRCQUNwQix1QkFBdUI7NEJBQ3ZCLHVCQUF1Qjt5QkFDeEI7cUJBQ0Y7OzRCQXpCRDs7Ozs7OztBQ0FBO0FBRUEsUUFBYSxlQUFlLEdBQUdrQjs7Ozs7O0FDRi9COztrQ0FnQjZCLElBQUl6QixpQkFBWSxFQUFFOzs7OztRQUU3QyxzQ0FBUTs7O1lBQVIsZUFBYzs7OztRQUVkLDJDQUFhOzs7WUFBYjtnQkFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFBO2FBQzNCOztvQkFwQkZDLGNBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsYUFBYTt3QkFDdEIsUUFBUSxFQUFFLGlLQUtMO3dCQUNMLE1BQU0sRUFBRSxDQUFDLGlRQUFpUSxDQUFDO3FCQUM1UTs7OzRCQUlFQyxVQUFLO3FDQUNMQyxXQUFNOztrQ0FoQlQ7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pFLHNCQUFhO3lCQUNkO3dCQUNELE9BQU8sRUFBRTs0QkFDUCxtQkFBbUI7eUJBQ3BCO3dCQUNELFlBQVksRUFBRTs0QkFDWixtQkFBbUI7eUJBQ3BCO3FCQUNGOzsrQkFoQkQ7Ozs7Ozs7QUNBQTtBQUVBLFFBQWEsYUFBYSxHQUFHQTs7Ozs7O0FDRjdCO0FBRUEsUUFBYSxhQUFhLEdBQUdXOzs7Ozs7QUNGN0I7QUFFQSxRQUFhLGFBQWEsR0FBR1E7Ozs7OztBQ0Y3QjtBQUVBLFFBQWEsY0FBYyxHQUFHQzs7Ozs7O0FDRjlCO0FBRUEsUUFBYSxhQUFhLEdBQUdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9