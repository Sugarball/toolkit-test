/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
/**
 * @record
 */
export function DateType() { }
function DateType_tsickle_Closure_declarations() {
    /** @type {?} */
    DateType.prototype.id;
    /** @type {?} */
    DateType.prototype.title;
}
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
                    styles: [".select-option_list{font-weight:300;padding-top:0}.select-option_list ::ng-deep .mat-list-item{font-size:14px;height:40px;cursor:pointer}.select-option_list ::ng-deep .mat-list-item .mat-list-item-content{padding:0 24px}.select-option_listItem{color:#696969;height:40px}.select-option_listItem-active{color:#7f5eba}.select-option_listItem:hover{background-color:#f1f1f1;color:#7f5eba}.form-full-width{width:100%;cursor:pointer}.form-full-width input{cursor:pointer}.select-dropdown input{color:#000}.select-dropdown_icon{color:#9f9f9f}.select-dropdown_icon--active{color:#000}::ng-deep .mat-menu-panel.select-dropdown_menu{margin-top:1px;width:280px}::ng-deep .mat-menu-panel.select-dropdown_menu .mat-menu-content{padding:0}::ng-deep .mat-input-element{height:24px;line-height:24px;vertical-align:middle}::ng-deep ::ng-deep .mat-form-field-label{height:21.333px;line-height:21.333px;font-size:16px;margin-bottom:1px}::ng-deep ::ng-deep .mat-form-field-flex{align-items:stretch}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-infix{margin-bottom:5px;padding-bottom:0}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:0}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline{bottom:0;background-color:#c3c3c3}::ng-deep ::ng-deep .mat-icon{margin-top:17px}::ng-deep ::ng-deep .mat-datepicker-toggle{margin-top:17px;display:block;color:#9f9f9f}::ng-deep ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label{color:#9f9f9f}::ng-deep ::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:#7f5eba}::ng-deep ::ng-deep:hover .mat-form-field-appearance-legacy .mat-form-field-underline{background-color:#000}"]
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
export { VizSelectComponent };
function VizSelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizSelectComponent.prototype.placeholder;
    /** @type {?} */
    VizSelectComponent.prototype.options;
    /** @type {?} */
    VizSelectComponent.prototype.trigger;
    /** @type {?} */
    VizSelectComponent.prototype.select;
    /** @type {?} */
    VizSelectComponent.prototype.value;
    /** @type {?} */
    VizSelectComponent.prototype.menuShown;
    /** @type {?} */
    VizSelectComponent.prototype.selected;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92aXotdG9vbGtpdC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VsZWN0L3Zpei1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lBcUQzQzt1QkFQa0MsRUFBRTtzQkFFakIsSUFBSSxZQUFZLEVBQVk7eUJBRTFCLEtBQUs7S0FHVjs7OztJQUVoQixxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDaEM7Ozs7SUFHRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUN2Qjs7OztJQUNELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7OztJQUNELHlDQUFZOzs7O0lBQVosVUFBYSxNQUFNO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDMUI7Ozs7SUFDRCxvQ0FBTzs7O0lBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7S0FDNUI7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxvNUNBZ0NMO29CQUNMLE1BQU0sRUFBRSxDQUFDLG1yREFBbXJELENBQUM7aUJBQzlyRDs7Ozs7OEJBRUUsS0FBSzswQkFDTCxLQUFLOzBCQUNMLFNBQVMsU0FBQyxjQUFjO3lCQUN4QixNQUFNOzs2QkFuRFQ7O1NBK0NhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRNZW51VHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVR5cGUge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aXotc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duXCI+XG4gIDxmb3JtIGNsYXNzPVwidml6aWVudC1pbnB1dFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnbWF0LWZvY3VzZWQnOiBtZW51U2hvd259XCJcbiAgICAgICAgICAgICAgICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm9wdGlvbk1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAobWVudUNsb3NlZCk9XCJoaWRlTWVudSgpXCJcbiAgICAgICAgICAgICAgICAgICAgKG1lbnVPcGVuZWQpPVwic2hvd01lbnUoKVwiPlxuICAgICAgPGlucHV0IG1hdElucHV0XG4gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgW3ZhbHVlXT1cIm1lc3NhZ2UoKVwiXG4gICAgICAgICAgICAgcmVhZG9ubHkvPlxuICAgICAgPG1hdC1pY29uIG1hdFN1ZmZpeFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duX2ljb25cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0LWRyb3Bkb3duX2ljb24tLWFjdGl2ZScgOiBtZW51U2hvd259XCI+e3ttZW51U2hvd24/XCJhcnJvd19kcm9wX3VwXCI6XCJhcnJvd19kcm9wX2Rvd25cIn19PC9tYXQtaWNvbj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Zvcm0+XG4gIDxtYXQtbWVudSAjb3B0aW9uTWVudT1cIm1hdE1lbnVcIlxuICAgICAgICAgICAgW292ZXJsYXBUcmlnZ2VyXT1mYWxzZVxuICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fbWVudSBtYXQtZWxldmF0aW9uLXo4XCI+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdC1vcHRpb25cIlxuICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgPG1hdC1saXN0IHJvbGU9XCJsaXN0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1vcHRpb25fbGlzdFwiPlxuICAgICAgICA8bWF0LWxpc3QtaXRlbSByb2xlPVwibGlzdGl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1vcHRpb25fbGlzdEl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NlbGVjdC1vcHRpb25fbGlzdEl0ZW0tYWN0aXZlJyA6IG9wdGlvbi50aXRsZT09PXNlbGVjdGVkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RPcHRpb24ob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPnt7b3B0aW9uLnRpdGxlfX08L21hdC1saXN0LWl0ZW0+XG4gICAgICA8L21hdC1saXN0PlxuICAgIDwvZGl2PlxuICA8L21hdC1tZW51PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5zZWxlY3Qtb3B0aW9uX2xpc3R7Zm9udC13ZWlnaHQ6MzAwO3BhZGRpbmctdG9wOjB9LnNlbGVjdC1vcHRpb25fbGlzdCA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjE0cHg7aGVpZ2h0OjQwcHg7Y3Vyc29yOnBvaW50ZXJ9LnNlbGVjdC1vcHRpb25fbGlzdCA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudHtwYWRkaW5nOjAgMjRweH0uc2VsZWN0LW9wdGlvbl9saXN0SXRlbXtjb2xvcjojNjk2OTY5O2hlaWdodDo0MHB4fS5zZWxlY3Qtb3B0aW9uX2xpc3RJdGVtLWFjdGl2ZXtjb2xvcjojN2Y1ZWJhfS5zZWxlY3Qtb3B0aW9uX2xpc3RJdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTtjb2xvcjojN2Y1ZWJhfS5mb3JtLWZ1bGwtd2lkdGh7d2lkdGg6MTAwJTtjdXJzb3I6cG9pbnRlcn0uZm9ybS1mdWxsLXdpZHRoIGlucHV0e2N1cnNvcjpwb2ludGVyfS5zZWxlY3QtZHJvcGRvd24gaW5wdXR7Y29sb3I6IzAwMH0uc2VsZWN0LWRyb3Bkb3duX2ljb257Y29sb3I6IzlmOWY5Zn0uc2VsZWN0LWRyb3Bkb3duX2ljb24tLWFjdGl2ZXtjb2xvcjojMDAwfTo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWwuc2VsZWN0LWRyb3Bkb3duX21lbnV7bWFyZ2luLXRvcDoxcHg7d2lkdGg6MjgwcHh9OjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbC5zZWxlY3QtZHJvcGRvd25fbWVudSAubWF0LW1lbnUtY29udGVudHtwYWRkaW5nOjB9OjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudHtoZWlnaHQ6MjRweDtsaW5lLWhlaWdodDoyNHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtoZWlnaHQ6MjEuMzMzcHg7bGluZS1oZWlnaHQ6MjEuMzMzcHg7Zm9udC1zaXplOjE2cHg7bWFyZ2luLWJvdHRvbToxcHh9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleHthbGlnbi1pdGVtczpzdHJldGNofTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHttYXJnaW4tYm90dG9tOjVweDtwYWRkaW5nLWJvdHRvbTowfTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjB9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MDtiYWNrZ3JvdW5kLWNvbG9yOiNjM2MzYzN9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWljb257bWFyZ2luLXRvcDoxN3B4fTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZXttYXJnaW4tdG9wOjE3cHg7ZGlzcGxheTpibG9jaztjb2xvcjojOWY5ZjlmfTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojOWY5ZjlmfTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojN2Y1ZWJhfTo6bmctZGVlcCA6Om5nLWRlZXA6aG92ZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjojMDAwfWBdXG59KVxuZXhwb3J0IGNsYXNzIFZpelNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpcGxhY2Vob2xkZXI6c3RyaW5nO1xuICBASW5wdXQoKW9wdGlvbnM6QXJyYXk8RGF0ZVR5cGU+ID0gW11cbiAgQFZpZXdDaGlsZChNYXRNZW51VHJpZ2dlcikgdHJpZ2dlcjogTWF0TWVudVRyaWdnZXI7XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVUeXBlPigpXG4gIHZhbHVlOiBzdHJpbmc7XG4gIG1lbnVTaG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWxlY3RlZDogRGF0ZVR5cGU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnNbMF1cbiAgfVxuXG5cbiAgc2hvd01lbnUoKSB7XG4gICAgdGhpcy5tZW51U2hvd24gPSB0cnVlO1xuICB9XG4gIGhpZGVNZW51KCkge1xuICAgIHRoaXMubWVudVNob3duID0gZmFsc2U7XG4gIH1cbiAgc2VsZWN0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBvcHRpb247XG4gICAgdGhpcy5zZWxlY3QuZW1pdChvcHRpb24pXG4gICAgdGhpcy50cmlnZ2VyLmNsb3NlTWVudSgpO1xuICB9XG4gIG1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQudGl0bGU7XG4gIH1cbn1cbiJdfQ==