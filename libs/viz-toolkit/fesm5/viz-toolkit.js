import { Input, Component, Output, EventEmitter, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatMenuTrigger, MatListModule, MatMenuModule, MatCheckboxModule, MatButtonModule, MatSliderModule, MatChipsModule, MatBadgeModule } from '@angular/material';
import { DateAdapter, MatRangeDatepickerModule, MatRangeNativeDateModule } from 'mat-range-datepicker';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var VizHeaderComponent = /** @class */ (function () {
    function VizHeaderComponent() {
        this.rightBtnClick = new EventEmitter();
        this.hamburgerClick = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'viz-header',
                    template: "<header class=\"nav-bar nav-bar-dark\">\n  <div class=\"navbar-wrapper\">\n    <div class=\"navbar-header\">\n      <span class=\"navbar-brand\">\n        <a [routerLink]=\"brandLink\">\n          <img *ngIf=\"svgIcon\" [src]=\"svgIcon\" alt=\"Vizient\" />\n          <svg *ngIf=\"!svgIcon\" width=\"113\" height=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g fill=\"#FF4D00\" fill-rule=\"evenodd\">\n              <path d=\"M43.252 27.51c.435 0 .653-.23.653-.691v-2.42c0-.46-.218-.691-.653-.691l-9.067-.001c.872-2.211 6.455-7.595 8.376-10.663.713-1.139 1.075-2.02 1.075-2.593 0-.666-.32-2.152-2.574-2.152H30.417c-.435 0-.653.23-.653.692v2.382c0 .46.218.692.653.692h8.11c-.408.786-5.788 6.529-7.781 9.95-.524.9-1.249 2.329-1.249 3.42 0 1.384.82 2.076 2.459 2.076h11.296zm23.515-12.564c0-1.5-.937-3.729-3.735-3.729-1.05 0-3.792.409-4.219 4.613h7.147c.537 0 .807-.294.807-.884zm-.154 4.38H58.62c0 2.547 1.758 4.803 4.61 4.803 1.742 0 3.305-.601 4.688-1.806.463-.463.797.063.808.077 0 0 1.35 1.911 1.536 2.171.049.084.116.288-.192.596-1.82 1.82-4.137 2.728-6.955 2.728-5.813 0-8.798-4.748-8.798-10.144 0-6.481 4.153-10.105 8.875-10.105 4.065 0 7.608 3.104 7.608 7.416 0 2.843-1.397 4.264-4.188 4.264zm37.223-7.453c.436 0 .653-.231.653-.692V8.985c0-.46-.217-.686-.653-.686h-4.688V3.81c0-.435-.23-.653-.69-.653H95.46c-.461 0-.692.218-.692.653V8.3h-2.497c-.435 0-.653.225-.653.686v2.196c0 .46.218.692.653.692h2.497v9.221c0 2.744 1.024 4.252 1.537 4.841.512.59 1.816 1.89 4.457 1.883 2.355-.006 4.294-1.307 5.11-2.152.323-.334.268-.524.092-.754l-1.513-1.974c-.215-.298-.586-.28-.807-.077-.526.433-1.646 1.394-3.16.831-1.101-.41-1.336-1.638-1.336-2.56v-9.26h4.688zM73.759 26.857c0 .436.23.654.692.654h2.997c.461 0 .692-.218.692-.654V12.372c.895-.608 3.692-1.55 5.726-.355 1.233.725 1.698 2.702 1.69 5.004l-.001 9.836c0 .436.23.654.691.654h2.998c.46 0 .691-.218.691-.654V16.714c0-5.994-2.74-9.023-8.222-9.068-2.655-.022-5.596.996-7.147 2.344-.534.465-.806 1.025-.806 1.69v15.177zM50.437 8.3H47.44c-.461 0-.691.218-.691.654v17.904c0 .436.23.654.691.654h2.997c.461 0 .692-.218.692-.654V8.953c0-.436-.23-.654-.692-.654zm-25.013 0h-2.997c-.46 0-.691.218-.691.654v17.904c0 .436.23.654.691.654h2.997c.461 0 .692-.218.692-.654V8.953c0-.436-.23-.654-.692-.654zM48.94 0a2.651 2.651 0 1 0 0 5.302 2.651 2.651 0 0 0 0-5.302zM23.926 0a2.651 2.651 0 1 0 0 5.302 2.651 2.651 0 0 0 0-5.302zM7.41 26.704C2.347 20.732.035 9.07.01 8.933c-.051-.283.074-.634.6-.634h3.265c.333 0 .543.166.615.5 1.312 6.124 3.831 11.99 5.033 13.64 1.202-1.65 3.72-7.516 5.034-13.64.071-.334.282-.5.614-.5h3.266c.525 0 .65.35.6.634-.024.138-2.336 11.8-7.4 17.77-.565.666-1.239 1-2.114 1-.875 0-1.549-.334-2.113-1zM109.73 25.744h.367c.148 0 .26-.023.333-.069.075-.046.112-.125.112-.238v-.046c0-.132-.035-.223-.104-.272a.48.48 0 0 0-.28-.073h-.429v.698zm.857 1.08l-.46-.797h-.398v.797h-.314V24.77h.782c.21 0 .373.05.49.15.117.1.176.252.176.456v.061a.552.552 0 0 1-.103.353.51.51 0 0 1-.288.176l.506.858h-.39zm-.475-2.985a1.99 1.99 0 1 0-.002 3.98 1.99 1.99 0 0 0 .002-3.98zm1.624 1.989c0 .897-.726 1.623-1.624 1.623a1.623 1.623 0 1 1 0-3.247c.898 0 1.624.727 1.624 1.624z\"/>\n            </g>\n          </svg>\n          <span class=\"page-name hidden-xs hidden-sm\">{{title}}</span>\n        </a>\n      </span>\n    </div>\n    <div class=\"navbar-right\">\n      <div class=\"navbar-welcome\" (click)='rightBtnOnClick()' *ngIf=\"type === 'primary'\">\n        <span>Welcome, {{userName}}</span>\n        <mat-icon>{{isDrop? \"arrow_drop_up\":\"arrow_drop_down\"}}</mat-icon>\n      </div>\n      <div class=\"navbar-hamburger\" (click)='hamburgerOnClick()'>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </div>\n    </div>\n    <div class=\"navbar-Menu\" *ngIf=\"type === 'rightMenu'\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</header>",
                    styles: [":host .nav-bar{background:#fff;z-index:10;box-shadow:0 1px 0 0 #e9e9e9;padding:0 15px}:host .nav-bar .navbar-wrapper{display:flex;height:72px;flex-direction:row;justify-content:space-between;align-items:center}:host .nav-bar .navbar-wrapper .navbar-header{display:inline-flex}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a{display:inline-flex;vertical-align:middle;text-decoration:none}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a span{line-height:24px}@media (max-width:543px){:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a .hidden-xs{display:none!important}}@media (min-width:544px) and (max-width:767px){:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a .hidden-sm{display:none!important}}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand .page-name{border-left:1px solid #e5e5e5;padding-left:15px;margin-left:30px;padding-top:2px;font-size:18px;color:#ff4e00;font-weight:400}@media (max-width:991px){:host .nav-bar .navbar-wrapper .navbar-Menu{display:none}}@media (min-width:768px){:host .nav-bar{padding:0 40px}:host .nav-bar .navbar-right{margin-right:0}}:host .nav-bar .navbar-right{display:flex;flex-direction:row}:host .nav-bar .navbar-right .navbar-welcome{font-size:16px;color:#ff4e00;cursor:pointer;display:flex}@media (max-width:991px){:host .nav-bar .navbar-right .navbar-welcome{display:none}}:host .nav-bar .navbar-right .navbar-welcome span{margin-right:10px;display:inline-block;line-height:24px;font-weight:400}:host .nav-bar .navbar-right .navbar-welcome .mat-icon{display:inline-block}:host .nav-bar .navbar-right .navbar-hamburger{background-color:transparent;cursor:pointer}@media (min-width:991px){:host .nav-bar .navbar-right .navbar-hamburger{display:none}}:host .nav-bar .navbar-right .navbar-hamburger .icon-bar{height:2px;width:20px;background-color:#ff4e00;display:block;margin-top:3px}"]
                },] },
    ];
    /** @nocollapse */
    VizHeaderComponent.ctorParameters = function () { return []; };
    VizHeaderComponent.propDecorators = {
        title: [{ type: Input }],
        userName: [{ type: Input }],
        brandLink: [{ type: Input }],
        svgIcon: [{ type: Input }],
        type: [{ type: Input }],
        rightBtnClick: [{ type: Output }],
        hamburgerClick: [{ type: Output }]
    };
    return VizHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var VizHeaderMudule = /** @class */ (function () {
    function VizHeaderMudule() {
    }
    VizHeaderMudule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        MatIconModule
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
var VizDateRangePickerComponent = /** @class */ (function () {
    function VizDateRangePickerComponent(_dateAdapter) {
        var _this = this;
        this._dateAdapter = _dateAdapter;
        this.onApply = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'viz-date-range-picker',
                    template: "<div class=\"application-dropdown\">\n  <form class='date-range-picker vizient-input'>\n    <mat-form-field>\n        <input matInput\n          placeholder=\"Date\"\n          [matRangeDatepicker]=\"resultPicker\"\n          [ngModel]=\"date\"\n          (ngModelChange)=\"onInputDate($event)\"\n          name=\"date\"\n          (dateInput)=\"onDateInput($event)\"\n          (dateChange)=\"onDateChange($event)\">\n        <mat-range-datepicker\n          #resultPicker [rangeMode]=\"true\" (closed)=\"this.onClose($event)\">\n        </mat-range-datepicker>\n        <mat-range-datepicker-toggle matSuffix [for]=\"resultPicker\"></mat-range-datepicker-toggle>\n    </mat-form-field>\n  </form>\n</div>",
                    styles: [":host .mat-input-element{color:#000}:host .mat-form-field{width:100%}:host .mat-form-field .date-range-picker .mat-form-field-flex{width:100%!important}:host .mat-form-field .date-range-picker .mat-form-field-flex .mat-form-field-infix{width:100%}.date-range-picker ::ng-deep .mat-form-field-flex{width:100%}@media only screen and (max-width:600px){.date-range-picker ::ng-deep .mat-form-field-flex{width:100%}}::ng-deep .quick-select-sec .select-title{font-size:13px;font-weight:400}@media only screen and (min-width:601px){::ng-deep .calendar-button-sec{line-height:84px!important;padding:4px 24px!important}::ng-deep .mat-datepicker-content{height:501px!important}}"]
                },] },
    ];
    /** @nocollapse */
    VizDateRangePickerComponent.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    VizDateRangePickerComponent.propDecorators = {
        date: [{ type: Input }],
        onApply: [{ type: Output }]
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
var VizDateRangePickerMudule = /** @class */ (function () {
    function VizDateRangePickerMudule() {
    }
    VizDateRangePickerMudule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatNativeDateModule,
                        FormsModule,
                        MatRangeDatepickerModule,
                        MatRangeNativeDateModule
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
var VizSelectComponent = /** @class */ (function () {
    function VizSelectComponent() {
        this.options = [];
        this.select = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'viz-select',
                    template: "<div class=\"select-dropdown\">\n  <form class=\"vizient-input\">\n    <mat-form-field class=\"form-full-width\"\n                    [ngClass]=\"{'mat-focused': menuShown}\"\n                    [matMenuTriggerFor]=\"optionMenu\"\n                    (menuClosed)=\"hideMenu()\"\n                    (menuOpened)=\"showMenu()\">\n      <input matInput\n             type=\"text\"\n             [placeholder]=\"placeholder\"\n             [value]=\"message()\"\n             readonly/>\n      <mat-icon matSuffix\n                class=\"select-dropdown_icon\"\n                [ngClass]=\"{'select-dropdown_icon--active' : menuShown}\">{{menuShown?\"arrow_drop_up\":\"arrow_drop_down\"}}</mat-icon>\n    </mat-form-field>\n  </form>\n  <mat-menu #optionMenu=\"matMenu\"\n            [overlapTrigger]=false\n            class=\"select-dropdown_menu mat-elevation-z8\">\n    <div class=\"select-option\"\n         (click)=\"$event.stopPropagation()\">\n      <mat-list role=\"list\"\n                class=\"select-option_list\">\n        <mat-list-item role=\"listitem\"\n                       class=\"select-option_listItem\"\n                       [ngClass]=\"{'select-option_listItem-active' : option.title===selected}\"\n                       (click)=\"selectOption(option)\"\n                       *ngFor=\"let option of options\">{{option.title}}</mat-list-item>\n      </mat-list>\n    </div>\n  </mat-menu>\n</div>",
                    styles: [".select-option_list{font-weight:300;padding-top:0}.select-option_list ::ng-deep .mat-list-item{font-size:14px;height:40px;cursor:pointer}.select-option_list ::ng-deep .mat-list-item .mat-list-item-content{padding:0 24px}.select-option_listItem{color:#696969;height:40px}.select-option_listItem-active{color:#7f5eba}.select-option_listItem:hover{background-color:#f1f1f1;color:#7f5eba}.form-full-width{width:100%;cursor:pointer}.form-full-width input{cursor:pointer}.select-dropdown input{color:#000}.select-dropdown_icon{color:#9f9f9f}.select-dropdown_icon--active{color:#000}.vizient-input .mat-input-element{height:24px;line-height:24px;vertical-align:middle}.vizient-input ::ng-deep .mat-form-field-label{height:21.333px;line-height:21.333px;font-size:16px;margin-bottom:1px}.vizient-input ::ng-deep .mat-form-field-flex{align-items:stretch}.vizient-input ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-infix{margin-bottom:5px;padding-bottom:0}.vizient-input ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:0}.vizient-input ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{bottom:0;background-color:#c3c3c3}.vizient-input ::ng-deep .mat-icon{margin-top:17px}.vizient-input ::ng-deep .mat-datepicker-toggle{margin-top:17px;display:block;color:#9f9f9f}.vizient-input ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label{color:#9f9f9f}.vizient-input ::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:#7f5eba}.vizient-input ::ng-deep:hover .mat-form-field-appearance-legacy .mat-form-field-underline{background-color:#000}::ng-deep .mat-menu-panel.select-dropdown_menu{margin-top:1px;width:280px}::ng-deep .mat-menu-panel.select-dropdown_menu .mat-menu-content{padding:0}"]
                },] },
    ];
    /** @nocollapse */
    VizSelectComponent.ctorParameters = function () { return []; };
    VizSelectComponent.propDecorators = {
        placeholder: [{ type: Input }],
        options: [{ type: Input }],
        trigger: [{ type: ViewChild, args: [MatMenuTrigger,] }],
        select: [{ type: Output }]
    };
    return VizSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var VizSelectModule = /** @class */ (function () {
    function VizSelectModule() {
    }
    VizSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule,
                        MatFormFieldModule,
                        MatListModule,
                        MatMenuModule,
                        MatInputModule
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
var VizFooterComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'viz-footer',
                    template: "<div class=\"footer-bar\">\n  <div class=\"footer-wrapper\">\n    <div class=\"footer-left\">\n      <ul class=\"nav\">\n        <li *ngFor=\"let brand of leftBrands\">\n          <a href={{brand.link}}>{{brand.title}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"footer-right\">\n      <ul class=\"nav\">\n        <li *ngFor=\"let brand of rightBrands\">\n          <a href={{brand.link}}>{{brand.title}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"footer-center\">\n    <p>Vizient MDA</p>\n    <p>&copy; 2018 Vizient & iLabs. All Rights Reserved.</p>\n  </div>\n</div>",
                    styles: [":host .footer-bar{background:#fff;border-top:1px solid #e5e5e5;position:relative;min-height:72px;bottom:0;left:0;right:0;padding:0 40px;display:block}:host .footer-center{z-index:1;position:absolute;top:48px;height:48px;left:0;right:0;text-align:center;padding:12px 0}@media (min-width:768px){:host .footer-center{top:0}}:host .footer-center p{padding:0;margin:0;line-height:24px}:host .footer-wrapper{z-index:999;display:flex;width:100%;flex-direction:row;justify-content:space-between;background-color:transparent;padding-top:16px;position:relative}:host .footer-wrapper .footer-left .nav li{margin-right:24px}:host .footer-wrapper .footer-left .nav li:nth-last-child(1){margin-right:0}:host .footer-wrapper .footer-right .nav li{margin-left:24px}:host .footer-wrapper ::ng-deep .nav{padding:0;margin:0;list-style-type:none;display:flex;flex-direction:row}:host .footer-wrapper ::ng-deep .nav li{list-style:none;cursor:pointer}:host .footer-wrapper ::ng-deep .nav li a{display:inline-flex;vertical-align:middle;text-decoration:none;color:#7f5eba}"]
                },] },
    ];
    VizFooterComponent.propDecorators = {
        brands: [{ type: Input }]
    };
    return VizFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var VizFooterMudule = /** @class */ (function () {
    function VizFooterMudule() {
    }
    VizFooterMudule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
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
var /** @type {?} */ VizMenuModule = MatMenuModule;

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
var /** @type {?} */ VizCheckboxModule = MatCheckboxModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ VizButtonModule = MatButtonModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ VizFormFieldModule = MatFormFieldModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ VizSliderModule = MatSliderModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var VizToolbarComponent = /** @class */ (function () {
    function VizToolbarComponent() {
        this.searchBtnClick = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'viz-toolbar',
                    template: "<div class=\"viz-toolbar\"> \n  <span>{{title}}</span>\n  <div class=\"search\" (click)=\"searchOnclick()\">\n    <mat-icon>search</mat-icon>\n  </div>\n</div>",
                    styles: [":host .viz-toolbar{display:flex;line-height:64px;flex-direction:row;justify-content:space-between;padding:0 24px}:host .viz-toolbar .search{display:inline-flex;cursor:pointer}:host .viz-toolbar .search .mat-icon{height:64px;line-height:64px;color:#9f9f9f}"],
                },] },
    ];
    VizToolbarComponent.propDecorators = {
        title: [{ type: Input }],
        searchBtnClick: [{ type: Output }]
    };
    return VizToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var VizToolbarMudule = /** @class */ (function () {
    function VizToolbarMudule() {
    }
    VizToolbarMudule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule
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
var /** @type {?} */ VizIconModule = MatIconModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ VizListModule = MatListModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ VizChipModule = MatChipsModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ VizBadgeModule = MatBadgeModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { VizHeaderMudule, VizDateRangePickerMudule, VizSelectModule, VizFooterMudule, VizMenuModule, VizCheckboxModule, VizButtonModule, VizFormFieldModule, VizSliderModule, VizToolbarMudule, VizIconModule, VizListModule, VizChipModule, VizBadgeModule, VizDateRangePickerComponent as ɵb, VizFooterComponent as ɵd, VizHeaderComponent as ɵa, VizSelectComponent as ɵc, VizToolbarComponent as ɵe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2xraXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvaGVhZGVyL3Zpei1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2hlYWRlci92aXotaGVhZGVyLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9kYXRlLXJhbmdlLXBpY2tlci92aXotZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2RhdGUtcmFuZ2UtcGlja2VyL3Zpei1kYXRlLXJhbmdlLXBpY2tlci5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvc2VsZWN0L3Zpei1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3NlbGVjdC92aXotc2VsZWN0Lm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9mb290ZXIvdml6LWZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvZm9vdGVyL3Zpei1mb290ZXIubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL21lbnUvdml6LW1lbnUubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2NoZWNrYm94L3Zpei1jaGVja2JveC5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvYnV0dG9uL3Zpei1idXR0b24ubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2Zvcm0tZmllbGQvdml6LWZvcm0tZmllbGQubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3NsaWRlci92aXotc2xpZGVyLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy90b29sYmFyL3Zpei10b29sYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy90b29sYmFyL3Zpei10b29sYmFyLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9pY29uL3Zpei1pY29uLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9saXN0L3Zpei1saXN0Lm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9jaGlwL3Zpei1jaGlwLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9iYWRnZS92aXotYmFkZ2UubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmV4cG9ydCB0eXBlIFZpekhlYWRlclR5cGUgPSAncHJpbWFyeScgfCAncmlnaHRNZW51JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndml6LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgPGhlYWRlciBjbGFzcz1cIm5hdi1iYXIgbmF2LWJhci1kYXJrXCI+XG4gIDxkaXYgY2xhc3M9XCJuYXZiYXItd3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJicmFuZExpbmtcIj5cbiAgICAgICAgICA8aW1nICpuZ0lmPVwic3ZnSWNvblwiIFtzcmNdPVwic3ZnSWNvblwiIGFsdD1cIlZpemllbnRcIiAvPlxuICAgICAgICAgIDxzdmcgKm5nSWY9XCIhc3ZnSWNvblwiIHdpZHRoPVwiMTEzXCIgaGVpZ2h0PVwiMjhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8ZyBmaWxsPVwiI0ZGNEQwMFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk00My4yNTIgMjcuNTFjLjQzNSAwIC42NTMtLjIzLjY1My0uNjkxdi0yLjQyYzAtLjQ2LS4yMTgtLjY5MS0uNjUzLS42OTFsLTkuMDY3LS4wMDFjLjg3Mi0yLjIxMSA2LjQ1NS03LjU5NSA4LjM3Ni0xMC42NjMuNzEzLTEuMTM5IDEuMDc1LTIuMDIgMS4wNzUtMi41OTMgMC0uNjY2LS4zMi0yLjE1Mi0yLjU3NC0yLjE1MkgzMC40MTdjLS40MzUgMC0uNjUzLjIzLS42NTMuNjkydjIuMzgyYzAgLjQ2LjIxOC42OTIuNjUzLjY5Mmg4LjExYy0uNDA4Ljc4Ni01Ljc4OCA2LjUyOS03Ljc4MSA5Ljk1LS41MjQuOS0xLjI0OSAyLjMyOS0xLjI0OSAzLjQyIDAgMS4zODQuODIgMi4wNzYgMi40NTkgMi4wNzZoMTEuMjk2em0yMy41MTUtMTIuNTY0YzAtMS41LS45MzctMy43MjktMy43MzUtMy43MjktMS4wNSAwLTMuNzkyLjQwOS00LjIxOSA0LjYxM2g3LjE0N2MuNTM3IDAgLjgwNy0uMjk0LjgwNy0uODg0em0tLjE1NCA0LjM4SDU4LjYyYzAgMi41NDcgMS43NTggNC44MDMgNC42MSA0LjgwMyAxLjc0MiAwIDMuMzA1LS42MDEgNC42ODgtMS44MDYuNDYzLS40NjMuNzk3LjA2My44MDguMDc3IDAgMCAxLjM1IDEuOTExIDEuNTM2IDIuMTcxLjA0OS4wODQuMTE2LjI4OC0uMTkyLjU5Ni0xLjgyIDEuODItNC4xMzcgMi43MjgtNi45NTUgMi43MjgtNS44MTMgMC04Ljc5OC00Ljc0OC04Ljc5OC0xMC4xNDQgMC02LjQ4MSA0LjE1My0xMC4xMDUgOC44NzUtMTAuMTA1IDQuMDY1IDAgNy42MDggMy4xMDQgNy42MDggNy40MTYgMCAyLjg0My0xLjM5NyA0LjI2NC00LjE4OCA0LjI2NHptMzcuMjIzLTcuNDUzYy40MzYgMCAuNjUzLS4yMzEuNjUzLS42OTJWOC45ODVjMC0uNDYtLjIxNy0uNjg2LS42NTMtLjY4NmgtNC42ODhWMy44MWMwLS40MzUtLjIzLS42NTMtLjY5LS42NTNIOTUuNDZjLS40NjEgMC0uNjkyLjIxOC0uNjkyLjY1M1Y4LjNoLTIuNDk3Yy0uNDM1IDAtLjY1My4yMjUtLjY1My42ODZ2Mi4xOTZjMCAuNDYuMjE4LjY5Mi42NTMuNjkyaDIuNDk3djkuMjIxYzAgMi43NDQgMS4wMjQgNC4yNTIgMS41MzcgNC44NDEuNTEyLjU5IDEuODE2IDEuODkgNC40NTcgMS44ODMgMi4zNTUtLjAwNiA0LjI5NC0xLjMwNyA1LjExLTIuMTUyLjMyMy0uMzM0LjI2OC0uNTI0LjA5Mi0uNzU0bC0xLjUxMy0xLjk3NGMtLjIxNS0uMjk4LS41ODYtLjI4LS44MDctLjA3Ny0uNTI2LjQzMy0xLjY0NiAxLjM5NC0zLjE2LjgzMS0xLjEwMS0uNDEtMS4zMzYtMS42MzgtMS4zMzYtMi41NnYtOS4yNmg0LjY4OHpNNzMuNzU5IDI2Ljg1N2MwIC40MzYuMjMuNjU0LjY5Mi42NTRoMi45OTdjLjQ2MSAwIC42OTItLjIxOC42OTItLjY1NFYxMi4zNzJjLjg5NS0uNjA4IDMuNjkyLTEuNTUgNS43MjYtLjM1NSAxLjIzMy43MjUgMS42OTggMi43MDIgMS42OSA1LjAwNGwtLjAwMSA5LjgzNmMwIC40MzYuMjMuNjU0LjY5MS42NTRoMi45OThjLjQ2IDAgLjY5MS0uMjE4LjY5MS0uNjU0VjE2LjcxNGMwLTUuOTk0LTIuNzQtOS4wMjMtOC4yMjItOS4wNjgtMi42NTUtLjAyMi01LjU5Ni45OTYtNy4xNDcgMi4zNDQtLjUzNC40NjUtLjgwNiAxLjAyNS0uODA2IDEuNjl2MTUuMTc3ek01MC40MzcgOC4zSDQ3LjQ0Yy0uNDYxIDAtLjY5MS4yMTgtLjY5MS42NTR2MTcuOTA0YzAgLjQzNi4yMy42NTQuNjkxLjY1NGgyLjk5N2MuNDYxIDAgLjY5Mi0uMjE4LjY5Mi0uNjU0VjguOTUzYzAtLjQzNi0uMjMtLjY1NC0uNjkyLS42NTR6bS0yNS4wMTMgMGgtMi45OTdjLS40NiAwLS42OTEuMjE4LS42OTEuNjU0djE3LjkwNGMwIC40MzYuMjMuNjU0LjY5MS42NTRoMi45OTdjLjQ2MSAwIC42OTItLjIxOC42OTItLjY1NFY4Ljk1M2MwLS40MzYtLjIzLS42NTQtLjY5Mi0uNjU0ek00OC45NCAwYTIuNjUxIDIuNjUxIDAgMSAwIDAgNS4zMDIgMi42NTEgMi42NTEgMCAwIDAgMC01LjMwMnpNMjMuOTI2IDBhMi42NTEgMi42NTEgMCAxIDAgMCA1LjMwMiAyLjY1MSAyLjY1MSAwIDAgMCAwLTUuMzAyek03LjQxIDI2LjcwNEMyLjM0NyAyMC43MzIuMDM1IDkuMDcuMDEgOC45MzNjLS4wNTEtLjI4My4wNzQtLjYzNC42LS42MzRoMy4yNjVjLjMzMyAwIC41NDMuMTY2LjYxNS41IDEuMzEyIDYuMTI0IDMuODMxIDExLjk5IDUuMDMzIDEzLjY0IDEuMjAyLTEuNjUgMy43Mi03LjUxNiA1LjAzNC0xMy42NC4wNzEtLjMzNC4yODItLjUuNjE0LS41aDMuMjY2Yy41MjUgMCAuNjUuMzUuNi42MzQtLjAyNC4xMzgtMi4zMzYgMTEuOC03LjQgMTcuNzctLjU2NS42NjYtMS4yMzkgMS0yLjExNCAxLS44NzUgMC0xLjU0OS0uMzM0LTIuMTEzLTF6TTEwOS43MyAyNS43NDRoLjM2N2MuMTQ4IDAgLjI2LS4wMjMuMzMzLS4wNjkuMDc1LS4wNDYuMTEyLS4xMjUuMTEyLS4yMzh2LS4wNDZjMC0uMTMyLS4wMzUtLjIyMy0uMTA0LS4yNzJhLjQ4LjQ4IDAgMCAwLS4yOC0uMDczaC0uNDI5di42OTh6bS44NTcgMS4wOGwtLjQ2LS43OTdoLS4zOTh2Ljc5N2gtLjMxNFYyNC43N2guNzgyYy4yMSAwIC4zNzMuMDUuNDkuMTUuMTE3LjEuMTc2LjI1Mi4xNzYuNDU2di4wNjFhLjU1Mi41NTIgMCAwIDEtLjEwMy4zNTMuNTEuNTEgMCAwIDEtLjI4OC4xNzZsLjUwNi44NThoLS4zOXptLS40NzUtMi45ODVhMS45OSAxLjk5IDAgMSAwLS4wMDIgMy45OCAxLjk5IDEuOTkgMCAwIDAgLjAwMi0zLjk4em0xLjYyNCAxLjk4OWMwIC44OTctLjcyNiAxLjYyMy0xLjYyNCAxLjYyM2ExLjYyMyAxLjYyMyAwIDEgMSAwLTMuMjQ3Yy44OTggMCAxLjYyNC43MjcgMS42MjQgMS42MjR6XCIvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnZS1uYW1lIGhpZGRlbi14cyBoaWRkZW4tc21cIj57e3RpdGxlfX08L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLXJpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLXdlbGNvbWVcIiAoY2xpY2spPSdyaWdodEJ0bk9uQ2xpY2soKScgKm5nSWY9XCJ0eXBlID09PSAncHJpbWFyeSdcIj5cbiAgICAgICAgPHNwYW4+V2VsY29tZSwge3t1c2VyTmFtZX19PC9zcGFuPlxuICAgICAgICA8bWF0LWljb24+e3tpc0Ryb3A/IFwiYXJyb3dfZHJvcF91cFwiOlwiYXJyb3dfZHJvcF9kb3duXCJ9fTwvbWF0LWljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGFtYnVyZ2VyXCIgKGNsaWNrKT0naGFtYnVyZ2VyT25DbGljaygpJz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItTWVudVwiICpuZ0lmPVwidHlwZSA9PT0gJ3JpZ2h0TWVudSdcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2hlYWRlcj5gLFxuICBzdHlsZXM6IFtgOmhvc3QgLm5hdi1iYXJ7YmFja2dyb3VuZDojZmZmO3otaW5kZXg6MTA7Ym94LXNoYWRvdzowIDFweCAwIDAgI2U5ZTllOTtwYWRkaW5nOjAgMTVweH06aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2hlaWdodDo3MnB4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItaGVhZGVye2Rpc3BsYXk6aW5saW5lLWZsZXh9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgYXtkaXNwbGF5OmlubGluZS1mbGV4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWRlY29yYXRpb246bm9uZX06aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBhIHNwYW57bGluZS1oZWlnaHQ6MjRweH1AbWVkaWEgKG1heC13aWR0aDo1NDNweCl7Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgYSAuaGlkZGVuLXhze2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjU0NHB4KSBhbmQgKG1heC13aWR0aDo3NjdweCl7Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgYSAuaGlkZGVuLXNte2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIC5wYWdlLW5hbWV7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNlNWU1ZTU7cGFkZGluZy1sZWZ0OjE1cHg7bWFyZ2luLWxlZnQ6MzBweDtwYWRkaW5nLXRvcDoycHg7Zm9udC1zaXplOjE4cHg7Y29sb3I6I2ZmNGUwMDtmb250LXdlaWdodDo0MDB9QG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLU1lbnV7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Omhvc3QgLm5hdi1iYXJ7cGFkZGluZzowIDQwcHh9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodHttYXJnaW4tcmlnaHQ6MH19Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci13ZWxjb21le2ZvbnQtc2l6ZToxNnB4O2NvbG9yOiNmZjRlMDA7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4fUBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KXs6aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItd2VsY29tZXtkaXNwbGF5Om5vbmV9fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci13ZWxjb21lIHNwYW57bWFyZ2luLXJpZ2h0OjEwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MjRweDtmb250LXdlaWdodDo0MDB9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodCAubmF2YmFyLXdlbGNvbWUgLm1hdC1pY29ue2Rpc3BsYXk6aW5saW5lLWJsb2NrfTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci1oYW1idXJnZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcn1AbWVkaWEgKG1pbi13aWR0aDo5OTFweCl7Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodCAubmF2YmFyLWhhbWJ1cmdlcntkaXNwbGF5Om5vbmV9fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci1oYW1idXJnZXIgLmljb24tYmFye2hlaWdodDoycHg7d2lkdGg6MjBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZjRlMDA7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjNweH1gXVxufSlcblxuZXhwb3J0IGNsYXNzIFZpekhlYWRlckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdGl0bGU6IFN0cmluZztcbiAgQElucHV0KCkgdXNlck5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgYnJhbmRMaW5rOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHN2Z0ljb246IFN0cmluZztcbiAgQElucHV0KCkgdHlwZTogVml6SGVhZGVyVHlwZTtcbiAgQE91dHB1dCgpIHJpZ2h0QnRuQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoYW1idXJnZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgaXNEcm9wOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHJpZ2h0QnRuT25DbGljaygpIHtcbiAgICB0aGlzLnJpZ2h0QnRuQ2xpY2suZW1pdCgpXG4gICAgdGhpcy5pc0Ryb3AgPSAhdGhpcy5pc0Ryb3BcbiAgfVxuXG4gIGhhbWJ1cmdlck9uQ2xpY2soKSB7XG4gICAgdGhpcy5oYW1idXJnZXJDbGljay5lbWl0KClcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVml6SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi92aXotaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVml6SGVhZGVyQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpekhlYWRlckNvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWaXpIZWFkZXJNdWR1bGUge30iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0sIE9wdGlvbmFsLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWF0UmFuZ2VEYXRlcGlja2VySW5wdXRFdmVudCwgbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZSwgRGF0ZUFkYXB0ZXIgfSBmcm9tIFwibWF0LXJhbmdlLWRhdGVwaWNrZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndml6LWRhdGUtcmFuZ2UtcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXBwbGljYXRpb24tZHJvcGRvd25cIj5cbiAgPGZvcm0gY2xhc3M9J2RhdGUtcmFuZ2UtcGlja2VyIHZpemllbnQtaW5wdXQnPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXRlXCJcbiAgICAgICAgICBbbWF0UmFuZ2VEYXRlcGlja2VyXT1cInJlc3VsdFBpY2tlclwiXG4gICAgICAgICAgW25nTW9kZWxdPVwiZGF0ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25JbnB1dERhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgIChkYXRlSW5wdXQpPVwib25EYXRlSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgKGRhdGVDaGFuZ2UpPVwib25EYXRlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgPG1hdC1yYW5nZS1kYXRlcGlja2VyXG4gICAgICAgICAgI3Jlc3VsdFBpY2tlciBbcmFuZ2VNb2RlXT1cInRydWVcIiAoY2xvc2VkKT1cInRoaXMub25DbG9zZSgkZXZlbnQpXCI+XG4gICAgICAgIDwvbWF0LXJhbmdlLWRhdGVwaWNrZXI+XG4gICAgICAgIDxtYXQtcmFuZ2UtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicmVzdWx0UGlja2VyXCI+PC9tYXQtcmFuZ2UtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9mb3JtPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYDpob3N0IC5tYXQtaW5wdXQtZWxlbWVudHtjb2xvcjojMDAwfTpob3N0IC5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfTpob3N0IC5tYXQtZm9ybS1maWVsZCAuZGF0ZS1yYW5nZS1waWNrZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXh7d2lkdGg6MTAwJSFpbXBvcnRhbnR9Omhvc3QgLm1hdC1mb3JtLWZpZWxkIC5kYXRlLXJhbmdlLXBpY2tlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXh7d2lkdGg6MTAwJX0uZGF0ZS1yYW5nZS1waWNrZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4e3dpZHRoOjEwMCV9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXsuZGF0ZS1yYW5nZS1waWNrZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4e3dpZHRoOjEwMCV9fTo6bmctZGVlcCAucXVpY2stc2VsZWN0LXNlYyAuc2VsZWN0LXRpdGxle2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjQwMH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjAxcHgpezo6bmctZGVlcCAuY2FsZW5kYXItYnV0dG9uLXNlY3tsaW5lLWhlaWdodDo4NHB4IWltcG9ydGFudDtwYWRkaW5nOjRweCAyNHB4IWltcG9ydGFudH06Om5nLWRlZXAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnR7aGVpZ2h0OjUwMXB4IWltcG9ydGFudH19YF1cbn0pXG5leHBvcnQgY2xhc3MgVml6RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZGF0ZTogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiA7XG4gIGxhc3REYXRlSW5wdXQ6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gfCBudWxsO1xuICBsYXN0RGF0ZUNoYW5nZTogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiB8IG51bGw7XG4gIGRhdGVTaG90OiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IHwgbnVsbDtcblxuICBAT3V0cHV0KCkgb25BcHBseSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PiAoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RGF0ZT4sXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGVTaG90ID0gdGhpcy5kYXRlO1xuICB9XG5cbiAgb25EYXRlSW5wdXQgPSAoZTogbWF0UmFuZ2VEYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbnB1dCcsIHRoaXMubGFzdERhdGVJbnB1dCA9PT0gZS52YWx1ZSlcbiAgICB0aGlzLmxhc3REYXRlSW5wdXQgPSBlLnZhbHVlIGFzIG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT5cbiAgfVxuICBvbkRhdGVDaGFuZ2UgPSAoZTogbWF0UmFuZ2VEYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3QnLCB0aGlzLmxhc3REYXRlSW5wdXQgPT09IGUudmFsdWUpXG4gICAgdGhpcy5sYXN0RGF0ZUNoYW5nZSA9IGUudmFsdWUgYXMgbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPjtcbiAgfVxuICBvbklucHV0RGF0ZSgkZXZlbnQpIHtcbiAgICB0aGlzLmRhdGUgPSAkZXZlbnRcbiAgfVxuICBvbkNsb3NlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRlU2hvdCwgdGhpcy5kYXRlKVxuICAgIGlmICghdGhpcy5kYXRlU2hvdCB8fCAhdGhpcy5kYXRlKSByZXR1cm5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZSh0aGlzLmRhdGVTaG90LmJlZ2luLCB0aGlzLmRhdGUuYmVnaW4pXG4gICAgICAmJlxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGUodGhpcy5kYXRlU2hvdC5lbmQsIHRoaXMuZGF0ZS5lbmQpXG4gICAgKSB7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlU2hvdCA9IHRoaXMuZGF0ZVxuICAgICAgdGhpcy5vbkFwcGx5LmVtaXQodGhpcy5kYXRlKVxuICAgIH1cbiAgICBcbiAgfVxufVxuXG5cbi8vIEBQaXBlKHtuYW1lOiAnbGFzdGRheXMnfSlcbi8vIGV4cG9ydCBjbGFzcyBMYXN0RGF5c1BpcGU8RD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuLy8gICBjb25zdHJ1Y3Rvcihcbi8vICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RGF0ZT4sXG4vLyAgICkge31cblxuLy8gICB0cmFuc2Zvcm0odmFsdWU6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gfCBEIHwgbnVsbCwgb3B0aW9uczogc3RyaW5nKTogYW55IHtcbi8vICAgICBpZiAodmFsdWUgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ2JlZ2luJykpIHtcbi8vICAgICAgIGxldCBfdmFsdWUgPSA8bWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPj4gdmFsdWU7XG4vLyAgICAgICBpZiAodGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGUodGhpcy5fZGF0ZUFkYXB0ZXIudG9kYXkoKSwgX3ZhbHVlLmVuZCkpIHtcbi8vICAgICAgICAgLy8gcmV0dXJuIFwiTGFzdCA/IERheXNcIjtcbi8vICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgXG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gX3ZhbHVlO1xuLy8gICAgICAgfVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpekRhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdml6LWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRSYW5nZURhdGVwaWNrZXJNb2R1bGUsIE1hdFJhbmdlTmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gXCJtYXQtcmFuZ2UtZGF0ZXBpY2tlclwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRSYW5nZURhdGVwaWNrZXJNb2R1bGUsIFxuICAgIE1hdFJhbmdlTmF0aXZlRGF0ZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVml6RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpekRhdGVSYW5nZVBpY2tlckNvbXBvbmVudCxcbiAgICAvLyBMYXN0RGF5c1BpcGVcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVml6RGF0ZVJhbmdlUGlja2VyTXVkdWxlIHt9IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlVHlwZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25cIj5cbiAgPGZvcm0gY2xhc3M9XCJ2aXppZW50LWlucHV0XCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydtYXQtZm9jdXNlZCc6IG1lbnVTaG93bn1cIlxuICAgICAgICAgICAgICAgICAgICBbbWF0TWVudVRyaWdnZXJGb3JdPVwib3B0aW9uTWVudVwiXG4gICAgICAgICAgICAgICAgICAgIChtZW51Q2xvc2VkKT1cImhpZGVNZW51KClcIlxuICAgICAgICAgICAgICAgICAgICAobWVudU9wZW5lZCk9XCJzaG93TWVudSgpXCI+XG4gICAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICBbdmFsdWVdPVwibWVzc2FnZSgpXCJcbiAgICAgICAgICAgICByZWFkb25seS8+XG4gICAgICA8bWF0LWljb24gbWF0U3VmZml4XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25faWNvblwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydzZWxlY3QtZHJvcGRvd25faWNvbi0tYWN0aXZlJyA6IG1lbnVTaG93bn1cIj57e21lbnVTaG93bj9cImFycm93X2Ryb3BfdXBcIjpcImFycm93X2Ryb3BfZG93blwifX08L21hdC1pY29uPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZm9ybT5cbiAgPG1hdC1tZW51ICNvcHRpb25NZW51PVwibWF0TWVudVwiXG4gICAgICAgICAgICBbb3ZlcmxhcFRyaWdnZXJdPWZhbHNlXG4gICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1kcm9wZG93bl9tZW51IG1hdC1lbGV2YXRpb24tejhcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LW9wdGlvblwiXG4gICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICA8bWF0LWxpc3Qgcm9sZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LW9wdGlvbl9saXN0XCI+XG4gICAgICAgIDxtYXQtbGlzdC1pdGVtIHJvbGU9XCJsaXN0aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LW9wdGlvbl9saXN0SXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0LW9wdGlvbl9saXN0SXRlbS1hY3RpdmUnIDogb3B0aW9uLnRpdGxlPT09c2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+e3tvcHRpb24udGl0bGV9fTwvbWF0LWxpc3QtaXRlbT5cbiAgICAgIDwvbWF0LWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvbWF0LW1lbnU+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLnNlbGVjdC1vcHRpb25fbGlzdHtmb250LXdlaWdodDozMDA7cGFkZGluZy10b3A6MH0uc2VsZWN0LW9wdGlvbl9saXN0IDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTRweDtoZWlnaHQ6NDBweDtjdXJzb3I6cG9pbnRlcn0uc2VsZWN0LW9wdGlvbl9saXN0IDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtaXRlbS1jb250ZW50e3BhZGRpbmc6MCAyNHB4fS5zZWxlY3Qtb3B0aW9uX2xpc3RJdGVte2NvbG9yOiM2OTY5Njk7aGVpZ2h0OjQwcHh9LnNlbGVjdC1vcHRpb25fbGlzdEl0ZW0tYWN0aXZle2NvbG9yOiM3ZjVlYmF9LnNlbGVjdC1vcHRpb25fbGlzdEl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO2NvbG9yOiM3ZjVlYmF9LmZvcm0tZnVsbC13aWR0aHt3aWR0aDoxMDAlO2N1cnNvcjpwb2ludGVyfS5mb3JtLWZ1bGwtd2lkdGggaW5wdXR7Y3Vyc29yOnBvaW50ZXJ9LnNlbGVjdC1kcm9wZG93biBpbnB1dHtjb2xvcjojMDAwfS5zZWxlY3QtZHJvcGRvd25faWNvbntjb2xvcjojOWY5ZjlmfS5zZWxlY3QtZHJvcGRvd25faWNvbi0tYWN0aXZle2NvbG9yOiMwMDB9LnZpemllbnQtaW5wdXQgLm1hdC1pbnB1dC1lbGVtZW50e2hlaWdodDoyNHB4O2xpbmUtaGVpZ2h0OjI0cHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS52aXppZW50LWlucHV0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWx7aGVpZ2h0OjIxLjMzM3B4O2xpbmUtaGVpZ2h0OjIxLjMzM3B4O2ZvbnQtc2l6ZToxNnB4O21hcmdpbi1ib3R0b206MXB4fS52aXppZW50LWlucHV0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleHthbGlnbi1pdGVtczpzdHJldGNofS52aXppZW50LWlucHV0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e21hcmdpbi1ib3R0b206NXB4O3BhZGRpbmctYm90dG9tOjB9LnZpemllbnQtaW5wdXQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbTowfS52aXppZW50LWlucHV0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MDtiYWNrZ3JvdW5kLWNvbG9yOiNjM2MzYzN9LnZpemllbnQtaW5wdXQgOjpuZy1kZWVwIC5tYXQtaWNvbnttYXJnaW4tdG9wOjE3cHh9LnZpemllbnQtaW5wdXQgOjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci10b2dnbGV7bWFyZ2luLXRvcDoxN3B4O2Rpc3BsYXk6YmxvY2s7Y29sb3I6IzlmOWY5Zn0udml6aWVudC1pbnB1dCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojOWY5ZjlmfS52aXppZW50LWlucHV0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiM3ZjVlYmF9LnZpemllbnQtaW5wdXQgOjpuZy1kZWVwOmhvdmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6IzAwMH06Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsLnNlbGVjdC1kcm9wZG93bl9tZW51e21hcmdpbi10b3A6MXB4O3dpZHRoOjI4MHB4fTo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWwuc2VsZWN0LWRyb3Bkb3duX21lbnUgLm1hdC1tZW51LWNvbnRlbnR7cGFkZGluZzowfWBdXG59KVxuZXhwb3J0IGNsYXNzIFZpelNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpcGxhY2Vob2xkZXI6c3RyaW5nO1xuICBASW5wdXQoKW9wdGlvbnM6QXJyYXk8RGF0ZVR5cGU+ID0gW11cbiAgQFZpZXdDaGlsZChNYXRNZW51VHJpZ2dlcikgdHJpZ2dlcjogTWF0TWVudVRyaWdnZXI7XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVUeXBlPigpXG4gIHZhbHVlOiBzdHJpbmc7XG4gIG1lbnVTaG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWxlY3RlZDogRGF0ZVR5cGU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnNbMF1cbiAgfVxuXG5cbiAgc2hvd01lbnUoKSB7XG4gICAgdGhpcy5tZW51U2hvd24gPSB0cnVlO1xuICB9XG4gIGhpZGVNZW51KCkge1xuICAgIHRoaXMubWVudVNob3duID0gZmFsc2U7XG4gIH1cbiAgc2VsZWN0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBvcHRpb247XG4gICAgdGhpcy5zZWxlY3QuZW1pdChvcHRpb24pXG4gICAgdGhpcy50cmlnZ2VyLmNsb3NlTWVudSgpO1xuICB9XG4gIG1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQudGl0bGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRNZW51TW9kdWxlLCBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFZpelNlbGVjdENvbXBvbmVudCB9IGZyb20gXCIuL3Zpei1zZWxlY3QuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFZpelNlbGVjdENvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWaXpTZWxlY3RDb21wb25lbnRcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVml6U2VsZWN0TW9kdWxlIHt9IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3Zpei1mb290ZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmb290ZXItYmFyXCI+XG4gIDxkaXYgY2xhc3M9XCJmb290ZXItd3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItbGVmdFwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2XCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYnJhbmQgb2YgbGVmdEJyYW5kc1wiPlxuICAgICAgICAgIDxhIGhyZWY9e3ticmFuZC5saW5rfX0+e3ticmFuZC50aXRsZX19PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXJpZ2h0XCI+XG4gICAgICA8dWwgY2xhc3M9XCJuYXZcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBicmFuZCBvZiByaWdodEJyYW5kc1wiPlxuICAgICAgICAgIDxhIGhyZWY9e3ticmFuZC5saW5rfX0+e3ticmFuZC50aXRsZX19PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb290ZXItY2VudGVyXCI+XG4gICAgPHA+Vml6aWVudCBNREE8L3A+XG4gICAgPHA+JmNvcHk7IDIwMTggVml6aWVudCAmIGlMYWJzLiBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuXHRzdHlsZXM6IFtgOmhvc3QgLmZvb3Rlci1iYXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDo3MnB4O2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3BhZGRpbmc6MCA0MHB4O2Rpc3BsYXk6YmxvY2t9Omhvc3QgLmZvb3Rlci1jZW50ZXJ7ei1pbmRleDoxO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo0OHB4O2hlaWdodDo0OHB4O2xlZnQ6MDtyaWdodDowO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTJweCAwfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXs6aG9zdCAuZm9vdGVyLWNlbnRlcnt0b3A6MH19Omhvc3QgLmZvb3Rlci1jZW50ZXIgcHtwYWRkaW5nOjA7bWFyZ2luOjA7bGluZS1oZWlnaHQ6MjRweH06aG9zdCAuZm9vdGVyLXdyYXBwZXJ7ei1pbmRleDo5OTk7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZy10b3A6MTZweDtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdCAuZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1sZWZ0IC5uYXYgbGl7bWFyZ2luLXJpZ2h0OjI0cHh9Omhvc3QgLmZvb3Rlci13cmFwcGVyIC5mb290ZXItbGVmdCAubmF2IGxpOm50aC1sYXN0LWNoaWxkKDEpe21hcmdpbi1yaWdodDowfTpob3N0IC5mb290ZXItd3JhcHBlciAuZm9vdGVyLXJpZ2h0IC5uYXYgbGl7bWFyZ2luLWxlZnQ6MjRweH06aG9zdCAuZm9vdGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5uYXZ7cGFkZGluZzowO21hcmdpbjowO2xpc3Qtc3R5bGUtdHlwZTpub25lO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QgLmZvb3Rlci13cmFwcGVyIDo6bmctZGVlcCAubmF2IGxpe2xpc3Qtc3R5bGU6bm9uZTtjdXJzb3I6cG9pbnRlcn06aG9zdCAuZm9vdGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5uYXYgbGkgYXtkaXNwbGF5OmlubGluZS1mbGV4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojN2Y1ZWJhfWBdXG59KVxuXG5leHBvcnQgY2xhc3MgVml6Rm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0dGhpcy5zcGxpdEJyYW5kcygpXG5cdH1cblxuXHRASW5wdXQoKSBicmFuZHM6QXJyYXk8QnJhbmRUeXBlPiA9IFtdXG5cdGxlZnRCcmFuZHM6IEFycmF5PEJyYW5kVHlwZT4gPSBbXVxuXHRyaWdodEJyYW5kczogQXJyYXk8QnJhbmRUeXBlPiA9IFtdXG5cblx0c3BsaXRCcmFuZHMoKSB7XG5cdCAgbGV0IGNvdW50ID0gdGhpcy5icmFuZHMubGVuZ3RoXG4gICAgaWYgKGNvdW50KSB7XG5cdFx0XHRpZiAoIGNvdW50ICUgMiA9PSAwICkge1xuXHRcdFx0XHRsZXQgbGVmdENvdW50ID0gY291bnQgLyAyXG5cdFx0XHRcdHRoaXMubGVmdEJyYW5kcyA9IHRoaXMuYnJhbmRzLnNsaWNlKDAsIGxlZnRDb3VudClcblx0XHRcdFx0dGhpcy5yaWdodEJyYW5kcyA9IHRoaXMuYnJhbmRzLnNsaWNlKGxlZnRDb3VudCwgY291bnQpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgbGVmdENvdW50ID0gKGNvdW50IC0gMSkgLyAyIFxuXHRcdFx0XHR0aGlzLmxlZnRCcmFuZHMgPSB0aGlzLmJyYW5kcy5zbGljZSgwLCBsZWZ0Q291bnQpXG5cdFx0XHRcdHRoaXMucmlnaHRCcmFuZHMgPSB0aGlzLmJyYW5kcy5zbGljZShsZWZ0Q291bnQsIGNvdW50KVxuXHRcdFx0fVxuXHQgIH1cblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5kVHlwZSB7XG5cdGlkOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWaXpGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL3Zpei1mb290ZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVml6Rm9vdGVyQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpekZvb3RlckNvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWaXpGb290ZXJNdWR1bGUge30iLCIvLyBpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG4vLyBpbXBvcnQgeyBWaXpNZW51Q29tcG9uZW50IH0gZnJvbSAnLi92aXotbWVudS5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgVml6TWVudUNlbGxDb21wb25lbnQgfSBmcm9tICcuL21lbnUtY2VsbC92aXotbWVudS1jZWxsLmNvbXBvbmVudCc7XG5cbi8vIEBOZ01vZHVsZSh7XG4vLyAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdE1lbnVNb2R1bGVdLFxuLy8gICBleHBvcnRzOiBbVml6TWVudUNvbXBvbmVudF0sXG4vLyAgIGRlY2xhcmF0aW9uczogW1Zpek1lbnVDb21wb25lbnQsIFZpek1lbnVDZWxsQ29tcG9uZW50XVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBWaXpNZW51TW9kdWxlIHt9XG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IFZpek1lbnVNb2R1bGUgPSBNYXRNZW51TW9kdWxlIiwiLy8gaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIGltcG9ydCB7IFZpekNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi92aXotY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG4vLyBATmdNb2R1bGUoe1xuLy8gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZV0sXG4vLyAgIGV4cG9ydHM6IFtWaXpDaGVja2JveENvbXBvbmVudF0sXG4vLyAgIGRlY2xhcmF0aW9uczogW1ZpekNoZWNrYm94Q29tcG9uZW50XVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBWaXpDaGVja2JveE1vZHVsZSB7fVxuXG5cblxuZXhwb3J0IGNvbnN0IFZpekNoZWNrYm94TW9kdWxlID0gTWF0Q2hlY2tib3hNb2R1bGVcbiIsImltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGNvbnN0IFZpekJ1dHRvbk1vZHVsZSA9IE1hdEJ1dHRvbk1vZHVsZTtcbiIsImltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGNvbnN0IFZpekZvcm1GaWVsZE1vZHVsZSA9IE1hdEZvcm1GaWVsZE1vZHVsZTtcbiIsImltcG9ydCB7IE1hdFNsaWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGNvbnN0IFZpelNsaWRlck1vZHVsZSA9IE1hdFNsaWRlck1vZHVsZTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndml6LXRvb2xiYXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ2aXotdG9vbGJhclwiPiBcbiAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwic2VhcmNoXCIgKGNsaWNrKT1cInNlYXJjaE9uY2xpY2soKVwiPlxuICAgIDxtYXQtaWNvbj5zZWFyY2g8L21hdC1pY29uPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2A6aG9zdCAudml6LXRvb2xiYXJ7ZGlzcGxheTpmbGV4O2xpbmUtaGVpZ2h0OjY0cHg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MCAyNHB4fTpob3N0IC52aXotdG9vbGJhciAuc2VhcmNoe2Rpc3BsYXk6aW5saW5lLWZsZXg7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QgLnZpei10b29sYmFyIC5zZWFyY2ggLm1hdC1pY29ue2hlaWdodDo2NHB4O2xpbmUtaGVpZ2h0OjY0cHg7Y29sb3I6IzlmOWY5Zn1gXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXpUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZTogU3RyaW5nO1xuICBAT3V0cHV0KCkgc2VhcmNoQnRuQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBuZ09uSW5pdCgpIHsgfVxuICBcbiAgc2VhcmNoT25jbGljaygpIHtcbiAgICB0aGlzLnNlYXJjaEJ0bkNsaWNrLmVtaXQoKVxuICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVml6VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdml6LXRvb2xiYXIuY29tcG9uZW50J1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVml6VG9vbGJhckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWaXpUb29sYmFyQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFZpelRvb2xiYXJNdWR1bGUge30iLCJpbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgY29uc3QgVml6SWNvbk1vZHVsZSA9IE1hdEljb25Nb2R1bGU7XG4iLCJpbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBjb25zdCBWaXpMaXN0TW9kdWxlID0gTWF0TGlzdE1vZHVsZSIsImltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBjb25zdCBWaXpDaGlwTW9kdWxlID0gTWF0Q2hpcHNNb2R1bGUiLCJpbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgVml6QmFkZ2VNb2R1bGUgPSBNYXRCYWRnZU1vZHVsZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBa0RFOzZCQUowQixJQUFJLFlBQVksRUFBRTs4QkFDakIsSUFBSSxZQUFZLEVBQUU7c0JBQzNCLEtBQUs7S0FFUDs7OztJQUVoQiw0Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0tBQzNCOzs7O0lBRUQsNkNBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFBO0tBQzNCOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsczBIQThCRjtvQkFDUixNQUFNLEVBQUUsQ0FBQyxnMkRBQWcyRCxDQUFDO2lCQUMzMkQ7Ozs7O3dCQUlFLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSztnQ0FDTCxNQUFNO2lDQUNOLE1BQU07OzZCQS9DVDs7Ozs7OztBQ0FBOzs7O2dCQU1DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjtxQkFDbkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjtxQkFDbkI7aUJBQ0Y7OzBCQWxCRDs7Ozs7OztBQ0FBO0lBa0NFLHFDQUNVO1FBRFYsaUJBRUk7UUFETSxpQkFBWSxHQUFa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