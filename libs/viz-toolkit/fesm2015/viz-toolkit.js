import { Input, Component, Output, EventEmitter, NgModule, ViewChild, Directive, TemplateRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatMenuTrigger, MatListModule, MatMenuModule, MatCheckboxModule, MatButtonModule, MatSliderModule, MatChipsModule, MatBadgeModule, MatTabsModule } from '@angular/material';
import { DateAdapter, MatRangeDatepickerModule, MatRangeNativeDateModule } from 'mat-range-datepicker';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizHeaderComponent {
    constructor() {
        this.rightBtnClick = new EventEmitter();
        this.hamburgerClick = new EventEmitter();
        this.isDrop = false;
    }
    /**
     * @return {?}
     */
    rightBtnOnClick() {
        this.rightBtnClick.emit();
        this.isDrop = !this.isDrop;
    }
    /**
     * @return {?}
     */
    hamburgerOnClick() {
        this.hamburgerClick.emit();
    }
}
VizHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-header',
                template: `<header class="nav-bar nav-bar-dark">
  <div class="navbar-wrapper">
    <div class="navbar-header">
      <span class="navbar-brand">
        <a [routerLink]="brandLink">
          <img *ngIf="svgIcon" [src]="svgIcon" alt="Vizient" />
          <svg *ngIf="!svgIcon" width="113" height="28" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FF4D00" fill-rule="evenodd">
              <path d="M43.252 27.51c.435 0 .653-.23.653-.691v-2.42c0-.46-.218-.691-.653-.691l-9.067-.001c.872-2.211 6.455-7.595 8.376-10.663.713-1.139 1.075-2.02 1.075-2.593 0-.666-.32-2.152-2.574-2.152H30.417c-.435 0-.653.23-.653.692v2.382c0 .46.218.692.653.692h8.11c-.408.786-5.788 6.529-7.781 9.95-.524.9-1.249 2.329-1.249 3.42 0 1.384.82 2.076 2.459 2.076h11.296zm23.515-12.564c0-1.5-.937-3.729-3.735-3.729-1.05 0-3.792.409-4.219 4.613h7.147c.537 0 .807-.294.807-.884zm-.154 4.38H58.62c0 2.547 1.758 4.803 4.61 4.803 1.742 0 3.305-.601 4.688-1.806.463-.463.797.063.808.077 0 0 1.35 1.911 1.536 2.171.049.084.116.288-.192.596-1.82 1.82-4.137 2.728-6.955 2.728-5.813 0-8.798-4.748-8.798-10.144 0-6.481 4.153-10.105 8.875-10.105 4.065 0 7.608 3.104 7.608 7.416 0 2.843-1.397 4.264-4.188 4.264zm37.223-7.453c.436 0 .653-.231.653-.692V8.985c0-.46-.217-.686-.653-.686h-4.688V3.81c0-.435-.23-.653-.69-.653H95.46c-.461 0-.692.218-.692.653V8.3h-2.497c-.435 0-.653.225-.653.686v2.196c0 .46.218.692.653.692h2.497v9.221c0 2.744 1.024 4.252 1.537 4.841.512.59 1.816 1.89 4.457 1.883 2.355-.006 4.294-1.307 5.11-2.152.323-.334.268-.524.092-.754l-1.513-1.974c-.215-.298-.586-.28-.807-.077-.526.433-1.646 1.394-3.16.831-1.101-.41-1.336-1.638-1.336-2.56v-9.26h4.688zM73.759 26.857c0 .436.23.654.692.654h2.997c.461 0 .692-.218.692-.654V12.372c.895-.608 3.692-1.55 5.726-.355 1.233.725 1.698 2.702 1.69 5.004l-.001 9.836c0 .436.23.654.691.654h2.998c.46 0 .691-.218.691-.654V16.714c0-5.994-2.74-9.023-8.222-9.068-2.655-.022-5.596.996-7.147 2.344-.534.465-.806 1.025-.806 1.69v15.177zM50.437 8.3H47.44c-.461 0-.691.218-.691.654v17.904c0 .436.23.654.691.654h2.997c.461 0 .692-.218.692-.654V8.953c0-.436-.23-.654-.692-.654zm-25.013 0h-2.997c-.46 0-.691.218-.691.654v17.904c0 .436.23.654.691.654h2.997c.461 0 .692-.218.692-.654V8.953c0-.436-.23-.654-.692-.654zM48.94 0a2.651 2.651 0 1 0 0 5.302 2.651 2.651 0 0 0 0-5.302zM23.926 0a2.651 2.651 0 1 0 0 5.302 2.651 2.651 0 0 0 0-5.302zM7.41 26.704C2.347 20.732.035 9.07.01 8.933c-.051-.283.074-.634.6-.634h3.265c.333 0 .543.166.615.5 1.312 6.124 3.831 11.99 5.033 13.64 1.202-1.65 3.72-7.516 5.034-13.64.071-.334.282-.5.614-.5h3.266c.525 0 .65.35.6.634-.024.138-2.336 11.8-7.4 17.77-.565.666-1.239 1-2.114 1-.875 0-1.549-.334-2.113-1zM109.73 25.744h.367c.148 0 .26-.023.333-.069.075-.046.112-.125.112-.238v-.046c0-.132-.035-.223-.104-.272a.48.48 0 0 0-.28-.073h-.429v.698zm.857 1.08l-.46-.797h-.398v.797h-.314V24.77h.782c.21 0 .373.05.49.15.117.1.176.252.176.456v.061a.552.552 0 0 1-.103.353.51.51 0 0 1-.288.176l.506.858h-.39zm-.475-2.985a1.99 1.99 0 1 0-.002 3.98 1.99 1.99 0 0 0 .002-3.98zm1.624 1.989c0 .897-.726 1.623-1.624 1.623a1.623 1.623 0 1 1 0-3.247c.898 0 1.624.727 1.624 1.624z"/>
            </g>
          </svg>
          <span class="page-name hidden-xs hidden-sm">{{title}}</span>
        </a>
      </span>
    </div>
    <div class="navbar-right">
      <div class="navbar-welcome" (click)='rightBtnOnClick()' *ngIf="type === 'primary'">
        <span>Welcome, {{userName}}</span>
        <mat-icon>{{isDrop? "arrow_drop_up":"arrow_drop_down"}}</mat-icon>
      </div>
      <div class="navbar-hamburger" (click)='hamburgerOnClick()'>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
    </div>
    <div class="navbar-Menu" *ngIf="type === 'rightMenu'">
      <ng-content></ng-content>
    </div>
  </div>
</header>`,
                styles: [`:host .nav-bar{background:#fff;z-index:10;box-shadow:0 1px 0 0 #e9e9e9;padding:0 15px}:host .nav-bar .navbar-wrapper{display:flex;height:72px;flex-direction:row;justify-content:space-between;align-items:center}:host .nav-bar .navbar-wrapper .navbar-header{display:inline-flex}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a{display:inline-flex;vertical-align:middle;text-decoration:none}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a span{line-height:24px}@media (max-width:543px){:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a .hidden-xs{display:none!important}}@media (min-width:544px) and (max-width:767px){:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a .hidden-sm{display:none!important}}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand .page-name{border-left:1px solid #e5e5e5;padding-left:15px;margin-left:30px;padding-top:2px;font-size:18px;color:#ff4e00;font-weight:400}@media (max-width:991px){:host .nav-bar .navbar-wrapper .navbar-Menu{display:none}}@media (min-width:768px){:host .nav-bar{padding:0 40px}:host .nav-bar .navbar-right{margin-right:0}}:host .nav-bar .navbar-right{display:flex;flex-direction:row}:host .nav-bar .navbar-right .navbar-welcome{font-size:16px;color:#ff4e00;cursor:pointer;display:flex}@media (max-width:991px){:host .nav-bar .navbar-right .navbar-welcome{display:none}}:host .nav-bar .navbar-right .navbar-welcome span{margin-right:10px;display:inline-block;line-height:24px;font-weight:400}:host .nav-bar .navbar-right .navbar-welcome .mat-icon{display:inline-block}:host .nav-bar .navbar-right .navbar-hamburger{background-color:transparent;cursor:pointer}@media (min-width:991px){:host .nav-bar .navbar-right .navbar-hamburger{display:none}}:host .nav-bar .navbar-right .navbar-hamburger .icon-bar{height:2px;width:20px;background-color:#ff4e00;display:block;margin-top:3px}`]
            },] },
];
/** @nocollapse */
VizHeaderComponent.ctorParameters = () => [];
VizHeaderComponent.propDecorators = {
    title: [{ type: Input }],
    userName: [{ type: Input }],
    brandLink: [{ type: Input }],
    svgIcon: [{ type: Input }],
    type: [{ type: Input }],
    rightBtnClick: [{ type: Output }],
    hamburgerClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizHeaderMudule {
}
VizHeaderMudule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MatIconModule
                ],
                exports: [
                    VizHeaderComponent,
                ],
                declarations: [
                    VizHeaderComponent
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizDateRangePickerComponent {
    /**
     * @param {?} _dateAdapter
     */
    constructor(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
        this.onApply = new EventEmitter();
        this.onDateInput = (e) => {
            console.log('input', this.lastDateInput === e.value);
            this.lastDateInput = /** @type {?} */ (e.value);
        };
        this.onDateChange = (e) => {
            console.log('select', this.lastDateInput === e.value);
            this.lastDateChange = /** @type {?} */ (e.value);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dateShot = this.date;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputDate($event) {
        this.date = $event;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClose(event) {
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
    }
}
VizDateRangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-date-range-picker',
                template: `<div class="application-dropdown">
  <form class='date-range-picker vizient-input'>
    <mat-form-field>
        <input matInput
          placeholder="Date"
          [matRangeDatepicker]="resultPicker"
          [ngModel]="date"
          (ngModelChange)="onInputDate($event)"
          name="date"
          (dateInput)="onDateInput($event)"
          (dateChange)="onDateChange($event)">
        <mat-range-datepicker
          #resultPicker [rangeMode]="true" (closed)="this.onClose($event)">
        </mat-range-datepicker>
        <mat-range-datepicker-toggle matSuffix [for]="resultPicker"></mat-range-datepicker-toggle>
    </mat-form-field>
  </form>
</div>`,
                styles: [`:host .mat-input-element{color:#000}:host .mat-form-field{width:100%}:host .mat-form-field .date-range-picker .mat-form-field-flex{width:100%!important}:host .mat-form-field .date-range-picker .mat-form-field-flex .mat-form-field-infix{width:100%}.date-range-picker ::ng-deep .mat-form-field-flex{width:100%}@media only screen and (max-width:600px){.date-range-picker ::ng-deep .mat-form-field-flex{width:100%}}::ng-deep .quick-select-sec .select-title{font-size:13px;font-weight:400}@media only screen and (min-width:601px){::ng-deep .calendar-button-sec{line-height:84px!important;padding:4px 24px!important}::ng-deep .mat-datepicker-content{height:501px!important}}`]
            },] },
];
/** @nocollapse */
VizDateRangePickerComponent.ctorParameters = () => [
    { type: DateAdapter }
];
VizDateRangePickerComponent.propDecorators = {
    date: [{ type: Input }],
    onApply: [{ type: Output }]
};
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
class VizDateRangePickerMudule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizSelectComponent {
    constructor() {
        this.options = [];
        this.select = new EventEmitter();
        this.menuShown = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selected = this.options[0];
    }
    /**
     * @return {?}
     */
    showMenu() {
        this.menuShown = true;
    }
    /**
     * @return {?}
     */
    hideMenu() {
        this.menuShown = false;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
        this.selected = option;
        this.select.emit(option);
        this.trigger.closeMenu();
    }
    /**
     * @return {?}
     */
    message() {
        return this.selected.title;
    }
}
VizSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-select',
                template: `<div class="select-dropdown">
  <form class="vizient-input">
    <mat-form-field class="form-full-width"
                    [ngClass]="{'mat-focused': menuShown}"
                    [matMenuTriggerFor]="optionMenu"
                    (menuClosed)="hideMenu()"
                    (menuOpened)="showMenu()">
      <input matInput
             type="text"
             [placeholder]="placeholder"
             [value]="message()"
             readonly/>
      <mat-icon matSuffix
                class="select-dropdown_icon"
                [ngClass]="{'select-dropdown_icon--active' : menuShown}">{{menuShown?"arrow_drop_up":"arrow_drop_down"}}</mat-icon>
    </mat-form-field>
  </form>
  <mat-menu #optionMenu="matMenu"
            [overlapTrigger]=false
            class="select-dropdown_menu mat-elevation-z8">
    <div class="select-option"
         (click)="$event.stopPropagation()">
      <mat-list role="list"
                class="select-option_list">
        <mat-list-item role="listitem"
                       class="select-option_listItem"
                       [ngClass]="{'select-option_listItem-active' : option.title===selected}"
                       (click)="selectOption(option)"
                       *ngFor="let option of options">{{option.title}}</mat-list-item>
      </mat-list>
    </div>
  </mat-menu>
</div>`,
                styles: [`.select-option_list{font-weight:300;padding-top:0}.select-option_list ::ng-deep .mat-list-item{font-size:14px;height:40px;cursor:pointer}.select-option_list ::ng-deep .mat-list-item .mat-list-item-content{padding:0 24px}.select-option_listItem{color:#696969;height:40px}.select-option_listItem-active{color:#7f5eba}.select-option_listItem:hover{background-color:#f1f1f1;color:#7f5eba}.form-full-width{width:100%;cursor:pointer}.form-full-width input{cursor:pointer}.select-dropdown input{color:#000}.select-dropdown_icon{color:#9f9f9f}.select-dropdown_icon--active{color:#000}::ng-deep .mat-menu-panel.select-dropdown_menu{margin-top:1px;width:280px}::ng-deep .mat-menu-panel.select-dropdown_menu .mat-menu-content{padding:0}::ng-deep .mat-input-element{height:24px;line-height:24px;vertical-align:middle}::ng-deep ::ng-deep .mat-form-field-label{height:21.333px;line-height:21.333px;font-size:16px;margin-bottom:1px}::ng-deep ::ng-deep .mat-form-field-flex{align-items:stretch}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-infix{margin-bottom:5px;padding-bottom:0}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:0}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{bottom:0;background-color:#c3c3c3}::ng-deep ::ng-deep .mat-icon{margin-top:17px}::ng-deep ::ng-deep .mat-datepicker-toggle{margin-top:17px;display:block;color:#9f9f9f}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label{color:#9f9f9f}::ng-deep ::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:#7f5eba}::ng-deep ::ng-deep:hover .mat-form-field-appearance-legacy .mat-form-field-underline{background-color:#000}`]
            },] },
];
/** @nocollapse */
VizSelectComponent.ctorParameters = () => [];
VizSelectComponent.propDecorators = {
    placeholder: [{ type: Input }],
    options: [{ type: Input }],
    trigger: [{ type: ViewChild, args: [MatMenuTrigger,] }],
    select: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizSelectModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizFooterComponent {
    constructor() {
        this.brands = [];
        this.leftBrands = [];
        this.rightBrands = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.splitBrands();
    }
    /**
     * @return {?}
     */
    splitBrands() {
        /** @type {?} */
        let count = this.brands.length;
        if (count) {
            if (count % 2 == 0) {
                /** @type {?} */
                let leftCount = count / 2;
                this.leftBrands = this.brands.slice(0, leftCount);
                this.rightBrands = this.brands.slice(leftCount, count);
            }
            else {
                /** @type {?} */
                let leftCount = (count - 1) / 2;
                this.leftBrands = this.brands.slice(0, leftCount);
                this.rightBrands = this.brands.slice(leftCount, count);
            }
        }
    }
}
VizFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-footer',
                template: `<div class="footer-bar">
  <div class="footer-wrapper">
    <div class="footer-left">
      <ul class="nav">
        <li *ngFor="let brand of leftBrands">
          <a href={{brand.link}}>{{brand.title}}</a>
        </li>
      </ul>
    </div>
    <div class="footer-right">
      <ul class="nav">
        <li *ngFor="let brand of rightBrands">
          <a href={{brand.link}}>{{brand.title}}</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer-center">
    <p>Vizient MDA</p>
    <p>&copy; 2018 Vizient & iLabs. All Rights Reserved.</p>
  </div>
</div>`,
                styles: [`:host .footer-bar{background:#fff;border-top:1px solid #e5e5e5;position:relative;min-height:72px;bottom:0;left:0;right:0;padding:0 40px;display:block}:host .footer-center{z-index:1;position:absolute;top:48px;height:48px;left:0;right:0;text-align:center;padding:12px 0}@media (min-width:768px){:host .footer-center{top:0}}:host .footer-center p{padding:0;margin:0;line-height:24px}:host .footer-wrapper{z-index:999;display:flex;width:100%;flex-direction:row;justify-content:space-between;background-color:transparent;padding-top:16px;position:relative}:host .footer-wrapper .footer-left .nav li{margin-right:24px}:host .footer-wrapper .footer-left .nav li:nth-last-child(1){margin-right:0}:host .footer-wrapper .footer-right .nav li{margin-left:24px}:host .footer-wrapper ::ng-deep .nav{padding:0;margin:0;list-style-type:none;display:flex;flex-direction:row}:host .footer-wrapper ::ng-deep .nav li{list-style:none;cursor:pointer}:host .footer-wrapper ::ng-deep .nav li a{display:inline-flex;vertical-align:middle;text-decoration:none;color:#7f5eba}`]
            },] },
];
VizFooterComponent.propDecorators = {
    brands: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizFooterMudule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizMenuModule = MatMenuModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizCheckboxModule = MatCheckboxModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizButtonModule = MatButtonModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizFormFieldModule = MatFormFieldModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizTreeNodeDefDirective {
    constructor() { }
}
VizTreeNodeDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[VizTreeNodeDef]'
            },] },
];
/** @nocollapse */
VizTreeNodeDefDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizTreeLeafDefDirective {
    constructor() { }
}
VizTreeLeafDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[VizTreeLeafDef]'
            },] },
];
/** @nocollapse */
VizTreeLeafDefDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizTreeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.vizTreeNodeTemplate);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        console.log(this.vizTreeNodeTemplate);
    }
}
VizTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-tree',
                template: `<!-- <div *ngFor="let node of tree template: itemTemplate">
  <ng-template *ngIf="node.children.length==0">
    <ng-template *ngTemplateOutlet="itemTemplate context: { $implicit: node }"></ng-template>ƒƒ
  </ng-template>
  <ng-template *ngIf="node.children.length>0">
    <button>{{node.name}}</button>
    <div *ngFor="let subNode of node.children template: itemTemplate">
      <ng-template *ngTemplateOutlet="itemTemplate context: { $implicit: subNode }"></ng-template>
    </div>
  </ng-template>
</div> -->


<div>
  <ng-template #recursiveList let-tree>
    <div class="viz-tree-cell" *ngFor="let node of tree">
      <div class="viz-tree-cell-node">
        <!-- <mat-icon (click)="node.isExpanded = !node.isExpanded"
                  *ngIf="node.children.length>0">
          {{node.isExpanded ? 'expand_more' : 'chevron_right'}}
        </mat-icon> -->

        <ng-container *ngIf="node.children.length>0">
          <ng-container *ngTemplateOutlet="vizTreeNodeTemplate; context: { $implicit: node }"></ng-container>
        </ng-container>
        <ng-container *ngIf="node.children.length==0">
          <div [class.viz-tree-cell-node-content]="!(node.children.length>0)">
            <ng-container *ngTemplateOutlet="vizTreeLeafTemplate; context: { $implicit: node }"></ng-container>
          </div>
        </ng-container>

      </div>

      <div *ngIf="node.children.length > 0" [class.hideChildren]=!node.isExpanded class="viz-tree-cell-child">
        <ng-container *ngTemplateOutlet="recursiveList; context:{ $implicit: node.children }"></ng-container>
      </div>

    </div>
  </ng-template>
  <ng-container *ngTemplateOutlet="recursiveList; context:{ $implicit: tree }"></ng-container>
</div>





<!-- <viz-tree-cell *ngFor="let node of tree; let i=index" [node]="node"></viz-tree-cell> -->`,
                styles: [`.hideChildren{display:none}.viz-tree-cell-node{margin-bottom:10px}.viz-tree-cell-child{margin-left:40px}.viz-tree-cell-node-content{margin-left:40px;margin-bottom:16px}.viz-tree-cell-node-content-hidden{display:none}`]
            },] },
];
/** @nocollapse */
VizTreeComponent.ctorParameters = () => [];
VizTreeComponent.propDecorators = {
    tree: [{ type: Input }],
    vizTreeNodeTemplate: [{ type: ContentChild, args: [VizTreeNodeDefDirective, { read: TemplateRef },] }],
    vizTreeLeafTemplate: [{ type: ContentChild, args: [VizTreeLeafDefDirective, { read: TemplateRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizTreeCellComponent {
    constructor() {
        this.collapse = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.collapse = !this.collapse;
    }
}
VizTreeCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-tree-cell',
                template: `<div>
  <mat-icon (click)="node.isExpanded = !node.isExpanded"
            *ngIf="node.children.length>0">
    {{node.isExpanded ? 'expand_more' : 'chevron_right'}}
  </mat-icon>
  <span class='viz-tree-cell-name'>{{node.name}}</span>
</div>

<div [class.hideChildren]=node.isExpanded
     class='viz-tree-child'>
  <div *ngFor="let node of node.children; let i=index">
    <viz-tree-cell [node]="node"></viz-tree-cell>
  </div>
</div>`,
                styles: [`.hideChildren{display:none}.viz-tree-child{margin-left:16px}.viz-tree-cell-name{display:inline-block;height:24px}`]
            },] },
];
/** @nocollapse */
VizTreeCellComponent.ctorParameters = () => [];
VizTreeCellComponent.propDecorators = {
    node: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizTreeModule {
}
VizTreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatIconModule],
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizSliderModule = MatSliderModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizToolbarComponent {
    constructor() {
        this.searchBtnClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    searchOnclick() {
        this.searchBtnClick.emit();
    }
}
VizToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-toolbar',
                template: `<div class="viz-toolbar"> 
  <span>{{title}}</span>
  <div class="search" (click)="searchOnclick()">
    <mat-icon>search</mat-icon>
  </div>
</div>`,
                styles: [`:host .viz-toolbar{display:flex;line-height:64px;flex-direction:row;justify-content:space-between;padding:0 24px}:host .viz-toolbar .search{display:inline-flex;cursor:pointer}:host .viz-toolbar .search .mat-icon{height:64px;line-height:64px;color:#9f9f9f}`],
            },] },
];
VizToolbarComponent.propDecorators = {
    title: [{ type: Input }],
    searchBtnClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VizToolbarMudule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizIconModule = MatIconModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizListModule = MatListModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizChipModule = MatChipsModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizBadgeModule = MatBadgeModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const VizTabsModule = MatTabsModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { VizHeaderMudule, VizDateRangePickerMudule, VizSelectModule, VizFooterMudule, VizMenuModule, VizCheckboxModule, VizButtonModule, VizFormFieldModule, VizTreeModule, VizSliderModule, VizToolbarMudule, VizIconModule, VizListModule, VizChipModule, VizBadgeModule, VizTabsModule, VizDateRangePickerComponent as ɵb, VizFooterComponent as ɵd, VizHeaderComponent as ɵa, VizSelectComponent as ɵc, VizToolbarComponent as ɵi, VizTreeCellComponent as ɵh, VizTreeLeafDefDirective as ɵg, VizTreeNodeDefDirective as ɵf, VizTreeComponent as ɵe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2xraXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvaGVhZGVyL3Zpei1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2hlYWRlci92aXotaGVhZGVyLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9kYXRlLXJhbmdlLXBpY2tlci92aXotZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2RhdGUtcmFuZ2UtcGlja2VyL3Zpei1kYXRlLXJhbmdlLXBpY2tlci5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvc2VsZWN0L3Zpei1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3NlbGVjdC92aXotc2VsZWN0Lm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9mb290ZXIvdml6LWZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvZm9vdGVyL3Zpei1mb290ZXIubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL21lbnUvdml6LW1lbnUubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2NoZWNrYm94L3Zpei1jaGVja2JveC5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvYnV0dG9uL3Zpei1idXR0b24ubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL2Zvcm0tZmllbGQvdml6LWZvcm0tZmllbGQubW9kdWxlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3RyZWUvdml6LXRyZWUtbm9kZS1kZWYuZGlyZWN0aXZlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3RyZWUvdml6LXRyZWUtbGVhZi1kZWYuZGlyZWN0aXZlLnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3RyZWUvdml6LXRyZWUuY29tcG9uZW50LnRzIiwibmc6Ly92aXotdG9vbGtpdC9jb21wb25lbnRzL3RyZWUvdml6LXRyZWUtY2VsbC92aXotdHJlZS1jZWxsLmNvbXBvbmVudC50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy90cmVlL3Zpei10cmVlLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy9zbGlkZXIvdml6LXNsaWRlci5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvdG9vbGJhci92aXotdG9vbGJhci5jb21wb25lbnQudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvdG9vbGJhci92aXotdG9vbGJhci5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvaWNvbi92aXotaWNvbi5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvbGlzdC92aXotbGlzdC5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvY2hpcC92aXotY2hpcC5tb2R1bGUudHMiLCJuZzovL3Zpei10b29sa2l0L2NvbXBvbmVudHMvYmFkZ2Uvdml6LWJhZGdlLm1vZHVsZS50cyIsIm5nOi8vdml6LXRvb2xraXQvY29tcG9uZW50cy90YWJzL3Zpei10YWJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5leHBvcnQgdHlwZSBWaXpIZWFkZXJUeXBlID0gJ3ByaW1hcnknIHwgJ3JpZ2h0TWVudSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxoZWFkZXIgY2xhc3M9XCJuYXYtYmFyIG5hdi1iYXItZGFya1wiPlxuICA8ZGl2IGNsYXNzPVwibmF2YmFyLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiYnJhbmRMaW5rXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cInN2Z0ljb25cIiBbc3JjXT1cInN2Z0ljb25cIiBhbHQ9XCJWaXppZW50XCIgLz5cbiAgICAgICAgICA8c3ZnICpuZ0lmPVwiIXN2Z0ljb25cIiB3aWR0aD1cIjExM1wiIGhlaWdodD1cIjI4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPGcgZmlsbD1cIiNGRjREMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDMuMjUyIDI3LjUxYy40MzUgMCAuNjUzLS4yMy42NTMtLjY5MXYtMi40MmMwLS40Ni0uMjE4LS42OTEtLjY1My0uNjkxbC05LjA2Ny0uMDAxYy44NzItMi4yMTEgNi40NTUtNy41OTUgOC4zNzYtMTAuNjYzLjcxMy0xLjEzOSAxLjA3NS0yLjAyIDEuMDc1LTIuNTkzIDAtLjY2Ni0uMzItMi4xNTItMi41NzQtMi4xNTJIMzAuNDE3Yy0uNDM1IDAtLjY1My4yMy0uNjUzLjY5MnYyLjM4MmMwIC40Ni4yMTguNjkyLjY1My42OTJoOC4xMWMtLjQwOC43ODYtNS43ODggNi41MjktNy43ODEgOS45NS0uNTI0LjktMS4yNDkgMi4zMjktMS4yNDkgMy40MiAwIDEuMzg0LjgyIDIuMDc2IDIuNDU5IDIuMDc2aDExLjI5NnptMjMuNTE1LTEyLjU2NGMwLTEuNS0uOTM3LTMuNzI5LTMuNzM1LTMuNzI5LTEuMDUgMC0zLjc5Mi40MDktNC4yMTkgNC42MTNoNy4xNDdjLjUzNyAwIC44MDctLjI5NC44MDctLjg4NHptLS4xNTQgNC4zOEg1OC42MmMwIDIuNTQ3IDEuNzU4IDQuODAzIDQuNjEgNC44MDMgMS43NDIgMCAzLjMwNS0uNjAxIDQuNjg4LTEuODA2LjQ2My0uNDYzLjc5Ny4wNjMuODA4LjA3NyAwIDAgMS4zNSAxLjkxMSAxLjUzNiAyLjE3MS4wNDkuMDg0LjExNi4yODgtLjE5Mi41OTYtMS44MiAxLjgyLTQuMTM3IDIuNzI4LTYuOTU1IDIuNzI4LTUuODEzIDAtOC43OTgtNC43NDgtOC43OTgtMTAuMTQ0IDAtNi40ODEgNC4xNTMtMTAuMTA1IDguODc1LTEwLjEwNSA0LjA2NSAwIDcuNjA4IDMuMTA0IDcuNjA4IDcuNDE2IDAgMi44NDMtMS4zOTcgNC4yNjQtNC4xODggNC4yNjR6bTM3LjIyMy03LjQ1M2MuNDM2IDAgLjY1My0uMjMxLjY1My0uNjkyVjguOTg1YzAtLjQ2LS4yMTctLjY4Ni0uNjUzLS42ODZoLTQuNjg4VjMuODFjMC0uNDM1LS4yMy0uNjUzLS42OS0uNjUzSDk1LjQ2Yy0uNDYxIDAtLjY5Mi4yMTgtLjY5Mi42NTNWOC4zaC0yLjQ5N2MtLjQzNSAwLS42NTMuMjI1LS42NTMuNjg2djIuMTk2YzAgLjQ2LjIxOC42OTIuNjUzLjY5MmgyLjQ5N3Y5LjIyMWMwIDIuNzQ0IDEuMDI0IDQuMjUyIDEuNTM3IDQuODQxLjUxMi41OSAxLjgxNiAxLjg5IDQuNDU3IDEuODgzIDIuMzU1LS4wMDYgNC4yOTQtMS4zMDcgNS4xMS0yLjE1Mi4zMjMtLjMzNC4yNjgtLjUyNC4wOTItLjc1NGwtMS41MTMtMS45NzRjLS4yMTUtLjI5OC0uNTg2LS4yOC0uODA3LS4wNzctLjUyNi40MzMtMS42NDYgMS4zOTQtMy4xNi44MzEtMS4xMDEtLjQxLTEuMzM2LTEuNjM4LTEuMzM2LTIuNTZ2LTkuMjZoNC42ODh6TTczLjc1OSAyNi44NTdjMCAuNDM2LjIzLjY1NC42OTIuNjU0aDIuOTk3Yy40NjEgMCAuNjkyLS4yMTguNjkyLS42NTRWMTIuMzcyYy44OTUtLjYwOCAzLjY5Mi0xLjU1IDUuNzI2LS4zNTUgMS4yMzMuNzI1IDEuNjk4IDIuNzAyIDEuNjkgNS4wMDRsLS4wMDEgOS44MzZjMCAuNDM2LjIzLjY1NC42OTEuNjU0aDIuOTk4Yy40NiAwIC42OTEtLjIxOC42OTEtLjY1NFYxNi43MTRjMC01Ljk5NC0yLjc0LTkuMDIzLTguMjIyLTkuMDY4LTIuNjU1LS4wMjItNS41OTYuOTk2LTcuMTQ3IDIuMzQ0LS41MzQuNDY1LS44MDYgMS4wMjUtLjgwNiAxLjY5djE1LjE3N3pNNTAuNDM3IDguM0g0Ny40NGMtLjQ2MSAwLS42OTEuMjE4LS42OTEuNjU0djE3LjkwNGMwIC40MzYuMjMuNjU0LjY5MS42NTRoMi45OTdjLjQ2MSAwIC42OTItLjIxOC42OTItLjY1NFY4Ljk1M2MwLS40MzYtLjIzLS42NTQtLjY5Mi0uNjU0em0tMjUuMDEzIDBoLTIuOTk3Yy0uNDYgMC0uNjkxLjIxOC0uNjkxLjY1NHYxNy45MDRjMCAuNDM2LjIzLjY1NC42OTEuNjU0aDIuOTk3Yy40NjEgMCAuNjkyLS4yMTguNjkyLS42NTRWOC45NTNjMC0uNDM2LS4yMy0uNjU0LS42OTItLjY1NHpNNDguOTQgMGEyLjY1MSAyLjY1MSAwIDEgMCAwIDUuMzAyIDIuNjUxIDIuNjUxIDAgMCAwIDAtNS4zMDJ6TTIzLjkyNiAwYTIuNjUxIDIuNjUxIDAgMSAwIDAgNS4zMDIgMi42NTEgMi42NTEgMCAwIDAgMC01LjMwMnpNNy40MSAyNi43MDRDMi4zNDcgMjAuNzMyLjAzNSA5LjA3LjAxIDguOTMzYy0uMDUxLS4yODMuMDc0LS42MzQuNi0uNjM0aDMuMjY1Yy4zMzMgMCAuNTQzLjE2Ni42MTUuNSAxLjMxMiA2LjEyNCAzLjgzMSAxMS45OSA1LjAzMyAxMy42NCAxLjIwMi0xLjY1IDMuNzItNy41MTYgNS4wMzQtMTMuNjQuMDcxLS4zMzQuMjgyLS41LjYxNC0uNWgzLjI2NmMuNTI1IDAgLjY1LjM1LjYuNjM0LS4wMjQuMTM4LTIuMzM2IDExLjgtNy40IDE3Ljc3LS41NjUuNjY2LTEuMjM5IDEtMi4xMTQgMS0uODc1IDAtMS41NDktLjMzNC0yLjExMy0xek0xMDkuNzMgMjUuNzQ0aC4zNjdjLjE0OCAwIC4yNi0uMDIzLjMzMy0uMDY5LjA3NS0uMDQ2LjExMi0uMTI1LjExMi0uMjM4di0uMDQ2YzAtLjEzMi0uMDM1LS4yMjMtLjEwNC0uMjcyYS40OC40OCAwIDAgMC0uMjgtLjA3M2gtLjQyOXYuNjk4em0uODU3IDEuMDhsLS40Ni0uNzk3aC0uMzk4di43OTdoLS4zMTRWMjQuNzdoLjc4MmMuMjEgMCAuMzczLjA1LjQ5LjE1LjExNy4xLjE3Ni4yNTIuMTc2LjQ1NnYuMDYxYS41NTIuNTUyIDAgMCAxLS4xMDMuMzUzLjUxLjUxIDAgMCAxLS4yODguMTc2bC41MDYuODU4aC0uMzl6bS0uNDc1LTIuOTg1YTEuOTkgMS45OSAwIDEgMC0uMDAyIDMuOTggMS45OSAxLjk5IDAgMCAwIC4wMDItMy45OHptMS42MjQgMS45ODljMCAuODk3LS43MjYgMS42MjMtMS42MjQgMS42MjNhMS42MjMgMS42MjMgMCAxIDEgMC0zLjI0N2MuODk4IDAgMS42MjQuNzI3IDEuNjI0IDEuNjI0elwiLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2UtbmFtZSBoaWRkZW4teHMgaGlkZGVuLXNtXCI+e3t0aXRsZX19PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1yaWdodFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci13ZWxjb21lXCIgKGNsaWNrKT0ncmlnaHRCdG5PbkNsaWNrKCknICpuZ0lmPVwidHlwZSA9PT0gJ3ByaW1hcnknXCI+XG4gICAgICAgIDxzcGFuPldlbGNvbWUsIHt7dXNlck5hbWV9fTwvc3Bhbj5cbiAgICAgICAgPG1hdC1pY29uPnt7aXNEcm9wPyBcImFycm93X2Ryb3BfdXBcIjpcImFycm93X2Ryb3BfZG93blwifX08L21hdC1pY29uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhhbWJ1cmdlclwiIChjbGljayk9J2hhbWJ1cmdlck9uQ2xpY2soKSc+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLU1lbnVcIiAqbmdJZj1cInR5cGUgPT09ICdyaWdodE1lbnUnXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9oZWFkZXI+YCxcbiAgc3R5bGVzOiBbYDpob3N0IC5uYXYtYmFye2JhY2tncm91bmQ6I2ZmZjt6LWluZGV4OjEwO2JveC1zaGFkb3c6MCAxcHggMCAwICNlOWU5ZTk7cGFkZGluZzowIDE1cHh9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVye2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NzJweDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlcntkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGF7ZGlzcGxheTppbmxpbmUtZmxleDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgYSBzcGFue2xpbmUtaGVpZ2h0OjI0cHh9QG1lZGlhIChtYXgtd2lkdGg6NTQzcHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGEgLmhpZGRlbi14c3tkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo1NDRweCkgYW5kIChtYXgtd2lkdGg6NzY3cHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGEgLmhpZGRlbi1zbXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX06aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCAucGFnZS1uYW1le2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZTVlNWU1O3BhZGRpbmctbGVmdDoxNXB4O21hcmdpbi1sZWZ0OjMwcHg7cGFkZGluZy10b3A6MnB4O2ZvbnQtc2l6ZToxOHB4O2NvbG9yOiNmZjRlMDA7Zm9udC13ZWlnaHQ6NDAwfUBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KXs6aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1NZW51e2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpezpob3N0IC5uYXYtYmFye3BhZGRpbmc6MCA0MHB4fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHR7bWFyZ2luLXJpZ2h0OjB9fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItd2VsY29tZXtmb250LXNpemU6MTZweDtjb2xvcjojZmY0ZTAwO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleH1AbWVkaWEgKG1heC13aWR0aDo5OTFweCl7Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodCAubmF2YmFyLXdlbGNvbWV7ZGlzcGxheTpub25lfX06aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItd2VsY29tZSBzcGFue21hcmdpbi1yaWdodDoxMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OjI0cHg7Zm9udC13ZWlnaHQ6NDAwfTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci13ZWxjb21lIC5tYXQtaWNvbntkaXNwbGF5OmlubGluZS1ibG9ja306aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItaGFtYnVyZ2Vye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXJ9QG1lZGlhIChtaW4td2lkdGg6OTkxcHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci1oYW1idXJnZXJ7ZGlzcGxheTpub25lfX06aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItaGFtYnVyZ2VyIC5pY29uLWJhcntoZWlnaHQ6MnB4O3dpZHRoOjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmY0ZTAwO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDozcHh9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXpIZWFkZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXJOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJyYW5kTGluazogU3RyaW5nO1xuICBASW5wdXQoKSBzdmdJY29uOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IFZpekhlYWRlclR5cGU7XG4gIEBPdXRwdXQoKSByaWdodEJ0bkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFtYnVyZ2VyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGlzRHJvcDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICByaWdodEJ0bk9uQ2xpY2soKSB7XG4gICAgdGhpcy5yaWdodEJ0bkNsaWNrLmVtaXQoKVxuICAgIHRoaXMuaXNEcm9wID0gIXRoaXMuaXNEcm9wXG4gIH1cblxuICBoYW1idXJnZXJPbkNsaWNrKCkge1xuICAgIHRoaXMuaGFtYnVyZ2VyQ2xpY2suZW1pdCgpXG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpekhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vdml6LWhlYWRlci5jb21wb25lbnQnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFZpekhlYWRlckNvbXBvbmVudCxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6SGVhZGVyQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFZpekhlYWRlck11ZHVsZSB7fSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBJbnB1dCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgT3B0aW9uYWwsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtYXRSYW5nZURhdGVwaWNrZXJJbnB1dEV2ZW50LCBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlLCBEYXRlQWRhcHRlciB9IGZyb20gXCJtYXQtcmFuZ2UtZGF0ZXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aXotZGF0ZS1yYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhcHBsaWNhdGlvbi1kcm9wZG93blwiPlxuICA8Zm9ybSBjbGFzcz0nZGF0ZS1yYW5nZS1waWNrZXIgdml6aWVudC1pbnB1dCc+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVcIlxuICAgICAgICAgIFttYXRSYW5nZURhdGVwaWNrZXJdPVwicmVzdWx0UGlja2VyXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJkYXRlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0RGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgKGRhdGVJbnB1dCk9XCJvbkRhdGVJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAoZGF0ZUNoYW5nZSk9XCJvbkRhdGVDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICA8bWF0LXJhbmdlLWRhdGVwaWNrZXJcbiAgICAgICAgICAjcmVzdWx0UGlja2VyIFtyYW5nZU1vZGVdPVwidHJ1ZVwiIChjbG9zZWQpPVwidGhpcy5vbkNsb3NlKCRldmVudClcIj5cbiAgICAgICAgPC9tYXQtcmFuZ2UtZGF0ZXBpY2tlcj5cbiAgICAgICAgPG1hdC1yYW5nZS1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJyZXN1bHRQaWNrZXJcIj48L21hdC1yYW5nZS1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Zvcm0+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgOmhvc3QgLm1hdC1pbnB1dC1lbGVtZW50e2NvbG9yOiMwMDB9Omhvc3QgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9Omhvc3QgLm1hdC1mb3JtLWZpZWxkIC5kYXRlLXJhbmdlLXBpY2tlciAubWF0LWZvcm0tZmllbGQtZmxleHt3aWR0aDoxMDAlIWltcG9ydGFudH06aG9zdCAubWF0LWZvcm0tZmllbGQgLmRhdGUtcmFuZ2UtcGlja2VyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeHt3aWR0aDoxMDAlfS5kYXRlLXJhbmdlLXBpY2tlciA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXh7d2lkdGg6MTAwJX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpey5kYXRlLXJhbmdlLXBpY2tlciA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXh7d2lkdGg6MTAwJX19OjpuZy1kZWVwIC5xdWljay1zZWxlY3Qtc2VjIC5zZWxlY3QtdGl0bGV7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NDAwfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDFweCl7OjpuZy1kZWVwIC5jYWxlbmRhci1idXR0b24tc2Vje2xpbmUtaGVpZ2h0Ojg0cHghaW1wb3J0YW50O3BhZGRpbmc6NHB4IDI0cHghaW1wb3J0YW50fTo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItY29udGVudHtoZWlnaHQ6NTAxcHghaW1wb3J0YW50fX1gXVxufSlcbmV4cG9ydCBjbGFzcyBWaXpEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBkYXRlOiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IDtcbiAgbGFzdERhdGVJbnB1dDogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiB8IG51bGw7XG4gIGxhc3REYXRlQ2hhbmdlOiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IHwgbnVsbDtcbiAgZGF0ZVNob3Q6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gfCBudWxsO1xuXG4gIEBPdXRwdXQoKSBvbkFwcGx5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+ICgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEYXRlPixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0ZVNob3QgPSB0aGlzLmRhdGU7XG4gIH1cblxuICBvbkRhdGVJbnB1dCA9IChlOiBtYXRSYW5nZURhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2lucHV0JywgdGhpcy5sYXN0RGF0ZUlucHV0ID09PSBlLnZhbHVlKVxuICAgIHRoaXMubGFzdERhdGVJbnB1dCA9IGUudmFsdWUgYXMgbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPlxuICB9XG4gIG9uRGF0ZUNoYW5nZSA9IChlOiBtYXRSYW5nZURhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdCcsIHRoaXMubGFzdERhdGVJbnB1dCA9PT0gZS52YWx1ZSlcbiAgICB0aGlzLmxhc3REYXRlQ2hhbmdlID0gZS52YWx1ZSBhcyBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+O1xuICB9XG4gIG9uSW5wdXREYXRlKCRldmVudCkge1xuICAgIHRoaXMuZGF0ZSA9ICRldmVudFxuICB9XG4gIG9uQ2xvc2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGVTaG90LCB0aGlzLmRhdGUpXG4gICAgaWYgKCF0aGlzLmRhdGVTaG90IHx8ICF0aGlzLmRhdGUpIHJldHVyblxuICAgIGlmIChcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRlKHRoaXMuZGF0ZVNob3QuYmVnaW4sIHRoaXMuZGF0ZS5iZWdpbilcbiAgICAgICYmXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZSh0aGlzLmRhdGVTaG90LmVuZCwgdGhpcy5kYXRlLmVuZClcbiAgICApIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVTaG90ID0gdGhpcy5kYXRlXG4gICAgICB0aGlzLm9uQXBwbHkuZW1pdCh0aGlzLmRhdGUpXG4gICAgfVxuICAgIFxuICB9XG59XG5cblxuLy8gQFBpcGUoe25hbWU6ICdsYXN0ZGF5cyd9KVxuLy8gZXhwb3J0IGNsYXNzIExhc3REYXlzUGlwZTxEPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4vLyAgIGNvbnN0cnVjdG9yKFxuLy8gICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEYXRlPixcbi8vICAgKSB7fVxuXG4vLyAgIHRyYW5zZm9ybSh2YWx1ZTogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiB8IEQgfCBudWxsLCBvcHRpb25zOiBzdHJpbmcpOiBhbnkge1xuLy8gICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnYmVnaW4nKSkge1xuLy8gICAgICAgbGV0IF92YWx1ZSA9IDxtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+PiB2YWx1ZTtcbi8vICAgICAgIGlmICh0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZSh0aGlzLl9kYXRlQWRhcHRlci50b2RheSgpLCBfdmFsdWUuZW5kKSkge1xuLy8gICAgICAgICAvLyByZXR1cm4gXCJMYXN0ID8gRGF5c1wiO1xuLy8gICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICBcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiBfdmFsdWU7XG4vLyAgICAgICB9XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHJldHVybiB2YWx1ZTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVml6RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi92aXotZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFJhbmdlRGF0ZXBpY2tlck1vZHVsZSwgTWF0UmFuZ2VOYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSBcIm1hdC1yYW5nZS1kYXRlcGlja2VyXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdFJhbmdlRGF0ZXBpY2tlck1vZHVsZSwgXG4gICAgTWF0UmFuZ2VOYXRpdmVEYXRlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBWaXpEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50LFxuICAgIC8vIExhc3REYXlzUGlwZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWaXpEYXRlUmFuZ2VQaWNrZXJNdWR1bGUge30iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudVRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVUeXBlIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndml6LXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlbGVjdC1kcm9wZG93blwiPlxuICA8Zm9ybSBjbGFzcz1cInZpemllbnQtaW5wdXRcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J21hdC1mb2N1c2VkJzogbWVudVNob3dufVwiXG4gICAgICAgICAgICAgICAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJvcHRpb25NZW51XCJcbiAgICAgICAgICAgICAgICAgICAgKG1lbnVDbG9zZWQpPVwiaGlkZU1lbnUoKVwiXG4gICAgICAgICAgICAgICAgICAgIChtZW51T3BlbmVkKT1cInNob3dNZW51KClcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dFxuICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgIFt2YWx1ZV09XCJtZXNzYWdlKClcIlxuICAgICAgICAgICAgIHJlYWRvbmx5Lz5cbiAgICAgIDxtYXQtaWNvbiBtYXRTdWZmaXhcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1kcm9wZG93bl9pY29uXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NlbGVjdC1kcm9wZG93bl9pY29uLS1hY3RpdmUnIDogbWVudVNob3dufVwiPnt7bWVudVNob3duP1wiYXJyb3dfZHJvcF91cFwiOlwiYXJyb3dfZHJvcF9kb3duXCJ9fTwvbWF0LWljb24+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9mb3JtPlxuICA8bWF0LW1lbnUgI29wdGlvbk1lbnU9XCJtYXRNZW51XCJcbiAgICAgICAgICAgIFtvdmVybGFwVHJpZ2dlcl09ZmFsc2VcbiAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duX21lbnUgbWF0LWVsZXZhdGlvbi16OFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uXCJcbiAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgIDxtYXQtbGlzdCByb2xlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uX2xpc3RcIj5cbiAgICAgICAgPG1hdC1saXN0LWl0ZW0gcm9sZT1cImxpc3RpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uX2xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydzZWxlY3Qtb3B0aW9uX2xpc3RJdGVtLWFjdGl2ZScgOiBvcHRpb24udGl0bGU9PT1zZWxlY3RlZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj57e29wdGlvbi50aXRsZX19PC9tYXQtbGlzdC1pdGVtPlxuICAgICAgPC9tYXQtbGlzdD5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtbWVudT5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2Auc2VsZWN0LW9wdGlvbl9saXN0e2ZvbnQtd2VpZ2h0OjMwMDtwYWRkaW5nLXRvcDowfS5zZWxlY3Qtb3B0aW9uX2xpc3QgOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxNHB4O2hlaWdodDo0MHB4O2N1cnNvcjpwb2ludGVyfS5zZWxlY3Qtb3B0aW9uX2xpc3QgOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnR7cGFkZGluZzowIDI0cHh9LnNlbGVjdC1vcHRpb25fbGlzdEl0ZW17Y29sb3I6IzY5Njk2OTtoZWlnaHQ6NDBweH0uc2VsZWN0LW9wdGlvbl9saXN0SXRlbS1hY3RpdmV7Y29sb3I6IzdmNWViYX0uc2VsZWN0LW9wdGlvbl9saXN0SXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7Y29sb3I6IzdmNWViYX0uZm9ybS1mdWxsLXdpZHRoe3dpZHRoOjEwMCU7Y3Vyc29yOnBvaW50ZXJ9LmZvcm0tZnVsbC13aWR0aCBpbnB1dHtjdXJzb3I6cG9pbnRlcn0uc2VsZWN0LWRyb3Bkb3duIGlucHV0e2NvbG9yOiMwMDB9LnNlbGVjdC1kcm9wZG93bl9pY29ue2NvbG9yOiM5ZjlmOWZ9LnNlbGVjdC1kcm9wZG93bl9pY29uLS1hY3RpdmV7Y29sb3I6IzAwMH06Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsLnNlbGVjdC1kcm9wZG93bl9tZW51e21hcmdpbi10b3A6MXB4O3dpZHRoOjI4MHB4fTo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWwuc2VsZWN0LWRyb3Bkb3duX21lbnUgLm1hdC1tZW51LWNvbnRlbnR7cGFkZGluZzowfTo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnR7aGVpZ2h0OjI0cHg7bGluZS1oZWlnaHQ6MjRweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWx7aGVpZ2h0OjIxLjMzM3B4O2xpbmUtaGVpZ2h0OjIxLjMzM3B4O2ZvbnQtc2l6ZToxNnB4O21hcmdpbi1ib3R0b206MXB4fTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YWxpZ24taXRlbXM6c3RyZXRjaH06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7bWFyZ2luLWJvdHRvbTo1cHg7cGFkZGluZy1ib3R0b206MH06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbTowfTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjojYzNjM2MzfTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1pY29ue21hcmdpbi10b3A6MTdweH06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci10b2dnbGV7bWFyZ2luLXRvcDoxN3B4O2Rpc3BsYXk6YmxvY2s7Y29sb3I6IzlmOWY5Zn06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6IzlmOWY5Zn06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6IzdmNWViYX06Om5nLWRlZXAgOjpuZy1kZWVwOmhvdmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6IzAwMH1gXVxufSlcbmV4cG9ydCBjbGFzcyBWaXpTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKXBsYWNlaG9sZGVyOnN0cmluZztcbiAgQElucHV0KClvcHRpb25zOkFycmF5PERhdGVUeXBlPiA9IFtdXG4gIEBWaWV3Q2hpbGQoTWF0TWVudVRyaWdnZXIpIHRyaWdnZXI6IE1hdE1lbnVUcmlnZ2VyO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlVHlwZT4oKVxuICB2YWx1ZTogc3RyaW5nO1xuICBtZW51U2hvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VsZWN0ZWQ6IERhdGVUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5vcHRpb25zWzBdXG4gIH1cblxuXG4gIHNob3dNZW51KCkge1xuICAgIHRoaXMubWVudVNob3duID0gdHJ1ZTtcbiAgfVxuICBoaWRlTWVudSgpIHtcbiAgICB0aGlzLm1lbnVTaG93biA9IGZhbHNlO1xuICB9XG4gIHNlbGVjdE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gb3B0aW9uO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQob3B0aW9uKVxuICAgIHRoaXMudHJpZ2dlci5jbG9zZU1lbnUoKTtcbiAgfVxuICBtZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkLnRpdGxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0TGlzdE1vZHVsZSwgTWF0TWVudU1vZHVsZSwgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBWaXpTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi92aXotc2VsZWN0LmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBWaXpTZWxlY3RDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6U2VsZWN0Q29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFZpelNlbGVjdE1vZHVsZSB7fSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd2aXotZm9vdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZm9vdGVyLWJhclwiPlxuICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWxlZnRcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdlwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGJyYW5kIG9mIGxlZnRCcmFuZHNcIj5cbiAgICAgICAgICA8YSBocmVmPXt7YnJhbmQubGlua319Pnt7YnJhbmQudGl0bGV9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1yaWdodFwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2XCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYnJhbmQgb2YgcmlnaHRCcmFuZHNcIj5cbiAgICAgICAgICA8YSBocmVmPXt7YnJhbmQubGlua319Pnt7YnJhbmQudGl0bGV9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNlbnRlclwiPlxuICAgIDxwPlZpemllbnQgTURBPC9wPlxuICAgIDxwPiZjb3B5OyAyMDE4IFZpemllbnQgJiBpTGFicy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG4gIDwvZGl2PlxuPC9kaXY+YCxcblx0c3R5bGVzOiBbYDpob3N0IC5mb290ZXItYmFye2JhY2tncm91bmQ6I2ZmZjtib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1oZWlnaHQ6NzJweDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtwYWRkaW5nOjAgNDBweDtkaXNwbGF5OmJsb2NrfTpob3N0IC5mb290ZXItY2VudGVye3otaW5kZXg6MTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NDhweDtoZWlnaHQ6NDhweDtsZWZ0OjA7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjEycHggMH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Omhvc3QgLmZvb3Rlci1jZW50ZXJ7dG9wOjB9fTpob3N0IC5mb290ZXItY2VudGVyIHB7cGFkZGluZzowO21hcmdpbjowO2xpbmUtaGVpZ2h0OjI0cHh9Omhvc3QgLmZvb3Rlci13cmFwcGVye3otaW5kZXg6OTk5O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmctdG9wOjE2cHg7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QgLmZvb3Rlci13cmFwcGVyIC5mb290ZXItbGVmdCAubmF2IGxpe21hcmdpbi1yaWdodDoyNHB4fTpob3N0IC5mb290ZXItd3JhcHBlciAuZm9vdGVyLWxlZnQgLm5hdiBsaTpudGgtbGFzdC1jaGlsZCgxKXttYXJnaW4tcmlnaHQ6MH06aG9zdCAuZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1yaWdodCAubmF2IGxpe21hcmdpbi1sZWZ0OjI0cHh9Omhvc3QgLmZvb3Rlci13cmFwcGVyIDo6bmctZGVlcCAubmF2e3BhZGRpbmc6MDttYXJnaW46MDtsaXN0LXN0eWxlLXR5cGU6bm9uZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0IC5mb290ZXItd3JhcHBlciA6Om5nLWRlZXAgLm5hdiBsaXtsaXN0LXN0eWxlOm5vbmU7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QgLmZvb3Rlci13cmFwcGVyIDo6bmctZGVlcCAubmF2IGxpIGF7ZGlzcGxheTppbmxpbmUtZmxleDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6IzdmNWViYX1gXVxufSlcblxuZXhwb3J0IGNsYXNzIFZpekZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdHRoaXMuc3BsaXRCcmFuZHMoKVxuXHR9XG5cblx0QElucHV0KCkgYnJhbmRzOkFycmF5PEJyYW5kVHlwZT4gPSBbXVxuXHRsZWZ0QnJhbmRzOiBBcnJheTxCcmFuZFR5cGU+ID0gW11cblx0cmlnaHRCcmFuZHM6IEFycmF5PEJyYW5kVHlwZT4gPSBbXVxuXG5cdHNwbGl0QnJhbmRzKCkge1xuXHQgIGxldCBjb3VudCA9IHRoaXMuYnJhbmRzLmxlbmd0aFxuICAgIGlmIChjb3VudCkge1xuXHRcdFx0aWYgKCBjb3VudCAlIDIgPT0gMCApIHtcblx0XHRcdFx0bGV0IGxlZnRDb3VudCA9IGNvdW50IC8gMlxuXHRcdFx0XHR0aGlzLmxlZnRCcmFuZHMgPSB0aGlzLmJyYW5kcy5zbGljZSgwLCBsZWZ0Q291bnQpXG5cdFx0XHRcdHRoaXMucmlnaHRCcmFuZHMgPSB0aGlzLmJyYW5kcy5zbGljZShsZWZ0Q291bnQsIGNvdW50KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGxlZnRDb3VudCA9IChjb3VudCAtIDEpIC8gMiBcblx0XHRcdFx0dGhpcy5sZWZ0QnJhbmRzID0gdGhpcy5icmFuZHMuc2xpY2UoMCwgbGVmdENvdW50KVxuXHRcdFx0XHR0aGlzLnJpZ2h0QnJhbmRzID0gdGhpcy5icmFuZHMuc2xpY2UobGVmdENvdW50LCBjb3VudClcblx0XHRcdH1cblx0ICB9XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcmFuZFR5cGUge1xuXHRpZDogc3RyaW5nO1xuXHRsaW5rOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVml6Rm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi92aXotZm9vdGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFZpekZvb3RlckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWaXpGb290ZXJDb21wb25lbnRcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVml6Rm9vdGVyTXVkdWxlIHt9IiwiLy8gaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuLy8gaW1wb3J0IHsgVml6TWVudUNvbXBvbmVudCB9IGZyb20gJy4vdml6LW1lbnUuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFZpek1lbnVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWNlbGwvdml6LW1lbnUtY2VsbC5jb21wb25lbnQnO1xuXG4vLyBATmdNb2R1bGUoe1xuLy8gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRNZW51TW9kdWxlXSxcbi8vICAgZXhwb3J0czogW1Zpek1lbnVDb21wb25lbnRdLFxuLy8gICBkZWNsYXJhdGlvbnM6IFtWaXpNZW51Q29tcG9uZW50LCBWaXpNZW51Q2VsbENvbXBvbmVudF1cbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgVml6TWVudU1vZHVsZSB7fVxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBWaXpNZW51TW9kdWxlID0gTWF0TWVudU1vZHVsZSIsIi8vIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBpbXBvcnQgeyBWaXpDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vdml6LWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLy8gQE5nTW9kdWxlKHtcbi8vICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGVdLFxuLy8gICBleHBvcnRzOiBbVml6Q2hlY2tib3hDb21wb25lbnRdLFxuLy8gICBkZWNsYXJhdGlvbnM6IFtWaXpDaGVja2JveENvbXBvbmVudF1cbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgVml6Q2hlY2tib3hNb2R1bGUge31cblxuXG5cbmV4cG9ydCBjb25zdCBWaXpDaGVja2JveE1vZHVsZSA9IE1hdENoZWNrYm94TW9kdWxlXG4iLCJpbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjb25zdCBWaXpCdXR0b25Nb2R1bGUgPSBNYXRCdXR0b25Nb2R1bGU7XG4iLCJpbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjb25zdCBWaXpGb3JtRmllbGRNb2R1bGUgPSBNYXRGb3JtRmllbGRNb2R1bGU7XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW1ZpelRyZWVOb2RlRGVmXSdcbn0pXG5leHBvcnQgY2xhc3MgVml6VHJlZU5vZGVEZWZEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbVml6VHJlZUxlYWZEZWZdJ1xufSlcbmV4cG9ydCBjbGFzcyBWaXpUcmVlTGVhZkRlZkRpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVml6VHJlZU5vZGVEZWZEaXJlY3RpdmUgfSBmcm9tICcuL3Zpei10cmVlLW5vZGUtZGVmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBWaXpUcmVlTGVhZkRlZkRpcmVjdGl2ZSB9IGZyb20gJy4vdml6LXRyZWUtbGVhZi1kZWYuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndml6LXRyZWUnLFxuICB0ZW1wbGF0ZTogYDwhLS0gPGRpdiAqbmdGb3I9XCJsZXQgbm9kZSBvZiB0cmVlIHRlbXBsYXRlOiBpdGVtVGVtcGxhdGVcIj5cbiAgPG5nLXRlbXBsYXRlICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg9PTBcIj5cbiAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGUgY29udGV4dDogeyAkaW1wbGljaXQ6IG5vZGUgfVwiPjwvbmctdGVtcGxhdGU+w4bCksOGwpJcbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg+MFwiPlxuICAgIDxidXR0b24+e3tub2RlLm5hbWV9fTwvYnV0dG9uPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IHN1Yk5vZGUgb2Ygbm9kZS5jaGlsZHJlbiB0ZW1wbGF0ZTogaXRlbVRlbXBsYXRlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGUgY29udGV4dDogeyAkaW1wbGljaXQ6IHN1Yk5vZGUgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2Rpdj4gLS0+XG5cblxuPGRpdj5cbiAgPG5nLXRlbXBsYXRlICNyZWN1cnNpdmVMaXN0IGxldC10cmVlPlxuICAgIDxkaXYgY2xhc3M9XCJ2aXotdHJlZS1jZWxsXCIgKm5nRm9yPVwibGV0IG5vZGUgb2YgdHJlZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInZpei10cmVlLWNlbGwtbm9kZVwiPlxuICAgICAgICA8IS0tIDxtYXQtaWNvbiAoY2xpY2spPVwibm9kZS5pc0V4cGFuZGVkID0gIW5vZGUuaXNFeHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoPjBcIj5cbiAgICAgICAgICB7e25vZGUuaXNFeHBhbmRlZCA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgICA8L21hdC1pY29uPiAtLT5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg+MFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ2aXpUcmVlTm9kZVRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogbm9kZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg9PTBcIj5cbiAgICAgICAgICA8ZGl2IFtjbGFzcy52aXotdHJlZS1jZWxsLW5vZGUtY29udGVudF09XCIhKG5vZGUuY2hpbGRyZW4ubGVuZ3RoPjApXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidml6VHJlZUxlYWZUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IG5vZGUgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCJub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDBcIiBbY2xhc3MuaGlkZUNoaWxkcmVuXT0hbm9kZS5pc0V4cGFuZGVkIGNsYXNzPVwidml6LXRyZWUtY2VsbC1jaGlsZFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVjdXJzaXZlTGlzdDsgY29udGV4dDp7ICRpbXBsaWNpdDogbm9kZS5jaGlsZHJlbiB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVjdXJzaXZlTGlzdDsgY29udGV4dDp7ICRpbXBsaWNpdDogdHJlZSB9XCI+PC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuXG5cblxuXG48IS0tIDx2aXotdHJlZS1jZWxsICpuZ0Zvcj1cImxldCBub2RlIG9mIHRyZWU7IGxldCBpPWluZGV4XCIgW25vZGVdPVwibm9kZVwiPjwvdml6LXRyZWUtY2VsbD4gLS0+YCxcbiAgc3R5bGVzOiBbYC5oaWRlQ2hpbGRyZW57ZGlzcGxheTpub25lfS52aXotdHJlZS1jZWxsLW5vZGV7bWFyZ2luLWJvdHRvbToxMHB4fS52aXotdHJlZS1jZWxsLWNoaWxke21hcmdpbi1sZWZ0OjQwcHh9LnZpei10cmVlLWNlbGwtbm9kZS1jb250ZW50e21hcmdpbi1sZWZ0OjQwcHg7bWFyZ2luLWJvdHRvbToxNnB4fS52aXotdHJlZS1jZWxsLW5vZGUtY29udGVudC1oaWRkZW57ZGlzcGxheTpub25lfWBdXG59KVxuZXhwb3J0IGNsYXNzIFZpelRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSB0cmVlOiBhbnk7XG4gIEBDb250ZW50Q2hpbGQoVml6VHJlZU5vZGVEZWZEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgdml6VHJlZU5vZGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChWaXpUcmVlTGVhZkRlZkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICB2aXpUcmVlTGVhZlRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy52aXpUcmVlTm9kZVRlbXBsYXRlKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy52aXpUcmVlTm9kZVRlbXBsYXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei10cmVlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gIDxtYXQtaWNvbiAoY2xpY2spPVwibm9kZS5pc0V4cGFuZGVkID0gIW5vZGUuaXNFeHBhbmRlZFwiXG4gICAgICAgICAgICAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoPjBcIj5cbiAgICB7e25vZGUuaXNFeHBhbmRlZCA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICA8L21hdC1pY29uPlxuICA8c3BhbiBjbGFzcz0ndml6LXRyZWUtY2VsbC1uYW1lJz57e25vZGUubmFtZX19PC9zcGFuPlxuPC9kaXY+XG5cbjxkaXYgW2NsYXNzLmhpZGVDaGlsZHJlbl09bm9kZS5pc0V4cGFuZGVkXG4gICAgIGNsYXNzPSd2aXotdHJlZS1jaGlsZCc+XG4gIDxkaXYgKm5nRm9yPVwibGV0IG5vZGUgb2Ygbm9kZS5jaGlsZHJlbjsgbGV0IGk9aW5kZXhcIj5cbiAgICA8dml6LXRyZWUtY2VsbCBbbm9kZV09XCJub2RlXCI+PC92aXotdHJlZS1jZWxsPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AuaGlkZUNoaWxkcmVue2Rpc3BsYXk6bm9uZX0udml6LXRyZWUtY2hpbGR7bWFyZ2luLWxlZnQ6MTZweH0udml6LXRyZWUtY2VsbC1uYW1le2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDoyNHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIFZpelRyZWVDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbm9kZTtcbiAgY29sbGFwc2U6IGJvb2xlYW4gPSB0cnVlO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCkge1xuICAgIHRoaXMuY29sbGFwc2UgPSAhdGhpcy5jb2xsYXBzZTtcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgTWF0VHJlZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuLy8gZXhwb3J0IGNvbnN0IFZpelRyZWVNb2R1bGUgPSBNYXRUcmVlTW9kdWxlXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVml6VHJlZUNvbXBvbmVudCB9IGZyb20gJy4vdml6LXRyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IFZpelRyZWVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi92aXotdHJlZS1jZWxsL3Zpei10cmVlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBWaXpUcmVlTm9kZURlZkRpcmVjdGl2ZSB9IGZyb20gJy4vdml6LXRyZWUtbm9kZS1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IFZpelRyZWVMZWFmRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi92aXotdHJlZS1sZWFmLWRlZi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIFZpelRyZWVDb21wb25lbnQsXG4gICAgVml6VHJlZUNlbGxDb21wb25lbnQsXG4gICAgVml6VHJlZU5vZGVEZWZEaXJlY3RpdmUsXG4gICAgVml6VHJlZUxlYWZEZWZEaXJlY3RpdmVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6VHJlZUNvbXBvbmVudCxcbiAgICBWaXpUcmVlQ2VsbENvbXBvbmVudCxcbiAgICBWaXpUcmVlTm9kZURlZkRpcmVjdGl2ZSxcbiAgICBWaXpUcmVlTGVhZkRlZkRpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFZpelRyZWVNb2R1bGUge31cbiIsImltcG9ydCB7IE1hdFNsaWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGNvbnN0IFZpelNsaWRlck1vZHVsZSA9IE1hdFNsaWRlck1vZHVsZTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndml6LXRvb2xiYXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ2aXotdG9vbGJhclwiPiBcbiAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwic2VhcmNoXCIgKGNsaWNrKT1cInNlYXJjaE9uY2xpY2soKVwiPlxuICAgIDxtYXQtaWNvbj5zZWFyY2g8L21hdC1pY29uPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2A6aG9zdCAudml6LXRvb2xiYXJ7ZGlzcGxheTpmbGV4O2xpbmUtaGVpZ2h0OjY0cHg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MCAyNHB4fTpob3N0IC52aXotdG9vbGJhciAuc2VhcmNoe2Rpc3BsYXk6aW5saW5lLWZsZXg7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QgLnZpei10b29sYmFyIC5zZWFyY2ggLm1hdC1pY29ue2hlaWdodDo2NHB4O2xpbmUtaGVpZ2h0OjY0cHg7Y29sb3I6IzlmOWY5Zn1gXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXpUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZTogU3RyaW5nO1xuICBAT3V0cHV0KCkgc2VhcmNoQnRuQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBuZ09uSW5pdCgpIHsgfVxuICBcbiAgc2VhcmNoT25jbGljaygpIHtcbiAgICB0aGlzLnNlYXJjaEJ0bkNsaWNrLmVtaXQoKVxuICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVml6VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdml6LXRvb2xiYXIuY29tcG9uZW50J1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVml6VG9vbGJhckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWaXpUb29sYmFyQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFZpelRvb2xiYXJNdWR1bGUge30iLCJpbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgY29uc3QgVml6SWNvbk1vZHVsZSA9IE1hdEljb25Nb2R1bGU7XG4iLCJpbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBjb25zdCBWaXpMaXN0TW9kdWxlID0gTWF0TGlzdE1vZHVsZSIsImltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBjb25zdCBWaXpDaGlwTW9kdWxlID0gTWF0Q2hpcHNNb2R1bGUiLCJpbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgVml6QmFkZ2VNb2R1bGUgPSBNYXRCYWRnZU1vZHVsZSIsImltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IFZpelRhYnNNb2R1bGUgPSBNYXRUYWJzTW9kdWxlXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtJQWtERTs2QkFKMEIsSUFBSSxZQUFZLEVBQUU7OEJBQ2pCLElBQUksWUFBWSxFQUFFO3NCQUMzQixLQUFLO0tBRVA7Ozs7SUFFaEIsZUFBZTtRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7S0FDM0I7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFBO0tBQzNCOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQThCRjtnQkFDUixNQUFNLEVBQUUsQ0FBQyxnMkRBQWcyRCxDQUFDO2FBQzMyRDs7Ozs7b0JBSUUsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLOzRCQUNMLE1BQU07NkJBQ04sTUFBTTs7Ozs7OztBQy9DVDs7O1lBTUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO2lCQUNuQjthQUNGOzs7Ozs7O0FDbEJEOzs7O0lBa0NFLFlBQ1U7UUFBQSxpQkFBWSxHQUFaLFlBQVk7dUJBSEYsSUFBSSxZQUFZLEVBQVE7MkJBVTlCLENBQUMsQ0FBcUM7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDcEQsSUFBSSxDQUFDLGFBQWEscUJBQUcsQ0FBQyxDQUFDLEtBQTJDLENBQUEsQ0FBQTtTQUNuRTs0QkFDYyxDQUFDLENBQXFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JELElBQUksQ0FBQyxjQUFjLHFCQUFHLENBQUMsQ0FBQyxLQUEyQyxDQUFBLENBQUM7U0FDckU7S0FiRzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDM0I7Ozs7O0lBVUQsV0FBVyxDQUFDLE1BQU07UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7S0FDbkI7Ozs7O0lBQ0QsT0FBTyxDQUFDLEtBQUs7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFNO1FBQ3hDLElBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O2dCQUVoRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDN0QsRUFBRSxDQUVEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzdCO0tBRUY7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyw4cEJBQThwQixDQUFDO2FBQ3pxQjs7OztZQXZCb0UsV0FBVzs7O21CQXlCN0UsS0FBSztzQkFNTCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDVDs7O1lBT0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLHdCQUF3QjtvQkFDeEIsd0JBQXdCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsMkJBQTJCO2lCQUM1QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osMkJBQTJCO2lCQUU1QjthQUNGOzs7Ozs7O0FDMUJEO0lBd0RFO3VCQVBrQyxFQUFFO3NCQUVqQixJQUFJLFlBQVksRUFBWTt5QkFFMUIsS0FBSztLQUdWOzs7O0lBRWhCLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDaEM7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDdkI7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDeEI7Ozs7O0lBQ0QsWUFBWSxDQUFDLE1BQU07UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUMxQjs7OztJQUNELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0tBQzVCOzs7WUFsRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0NMO2dCQUNMLE1BQU0sRUFBRSxDQUFDLG1yREFBbXJELENBQUM7YUFDOXJEOzs7OzswQkFFRSxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsU0FBUyxTQUFDLGNBQWM7cUJBQ3hCLE1BQU07Ozs7Ozs7QUNuRFQ7OztZQU9DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtpQkFDbkI7YUFDRjs7Ozs7OztBQ3RCRDs7c0JBbUNvQyxFQUFFOzBCQUNOLEVBQUU7MkJBQ0QsRUFBRTs7Ozs7SUFObEMsUUFBUTtRQUNQLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtLQUNsQjs7OztJQU1ELFdBQVc7O1FBQ1QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7UUFDN0IsSUFBSSxLQUFLLEVBQUU7WUFDWixJQUFLLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBRSxFQUFFOztnQkFDckIsSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO2FBQ3REO2lCQUFNOztnQkFDTixJQUFJLFNBQVMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQTtnQkFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7YUFDdEQ7U0FDQTtLQUNGOzs7WUFsREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXFCSjtnQkFDTixNQUFNLEVBQUUsQ0FBQywwaENBQTBoQyxDQUFDO2FBQ3BpQzs7O3FCQVFDLEtBQUs7Ozs7Ozs7QUNuQ1A7OztZQUtDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDWixrQkFBa0I7aUJBQ25CO2FBQ0Y7Ozs7Ozs7QUNkRDtBQWVBLE1BQWEsYUFBYSxHQUFHLGFBQWE7Ozs7Ozs7QUNGMUMsTUFBYSxpQkFBaUIsR0FBRyxpQkFBaUI7Ozs7OztBQ2ZsRDtBQUVBLE1BQWEsZUFBZSxHQUFHLGVBQWU7Ozs7OztBQ0Y5QztBQUVBLE1BQWEsa0JBQWtCLEdBQUcsa0JBQWtCOzs7Ozs7QUNGcEQ7SUFPRSxpQkFBaUI7OztZQUxsQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7Ozs7Ozs7O0FDSkQ7SUFPRSxpQkFBaUI7OztZQUxsQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7Ozs7Ozs7O0FDSkQ7SUFzRUUsaUJBQWdCOzs7O0lBRWhCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQ3ZDOzs7O0lBQ0QsZUFBZTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDdkM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4RkE4Q2tGO2dCQUM1RixNQUFNLEVBQUUsQ0FBQywwTkFBME4sQ0FBQzthQUNyTzs7Ozs7bUJBRUUsS0FBSztrQ0FDTCxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2tDQUUzRCxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzs7Ozs7O0FDcEU5RDtJQXdCRTt3QkFEb0IsSUFBSTtLQUNSOzs7O0lBRWhCLFFBQVEsTUFBSzs7OztJQUViLGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUNoQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O09BYUw7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsbUhBQW1ILENBQUM7YUFDOUg7Ozs7O21CQUVFLEtBQUs7Ozs7Ozs7Ozs7WUNYUCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztnQkFDdEMsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtpQkFDeEI7YUFDRjs7Ozs7OztBQ3pCRDtBQUVBLE1BQWEsZUFBZSxHQUFHLGVBQWU7Ozs7OztBQ0Y5Qzs7OEJBZ0I2QixJQUFJLFlBQVksRUFBRTs7Ozs7SUFFN0MsUUFBUSxNQUFNOzs7O0lBRWQsYUFBYTtRQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUE7S0FDM0I7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7T0FLTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxpUUFBaVEsQ0FBQzthQUM1UTs7O29CQUlFLEtBQUs7NkJBQ0wsTUFBTTs7Ozs7OztBQ2hCVDs7O1lBS0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtpQkFDcEI7YUFDRjs7Ozs7OztBQ2hCRDtBQUVBLE1BQWEsYUFBYSxHQUFHLGFBQWE7Ozs7OztBQ0YxQztBQUVBLE1BQWEsYUFBYSxHQUFHLGFBQWE7Ozs7OztBQ0YxQztBQUVBLE1BQWEsYUFBYSxHQUFHLGNBQWM7Ozs7OztBQ0YzQztBQUVBLE1BQWEsY0FBYyxHQUFHLGNBQWM7Ozs7OztBQ0Y1QztBQUVBLE1BQWEsYUFBYSxHQUFHLGFBQWE7Ozs7Ozs7Ozs7Ozs7OyJ9