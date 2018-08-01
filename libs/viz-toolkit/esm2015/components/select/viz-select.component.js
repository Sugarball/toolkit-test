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
export class VizSelectComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92aXotdG9vbGtpdC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VsZWN0L3Zpei1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUE0QzdDLE1BQU07SUFTSjt1QkFQa0MsRUFBRTtzQkFFakIsSUFBSSxZQUFZLEVBQVk7eUJBRTFCLEtBQUs7S0FHVjs7OztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2hDOzs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ3ZCOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7OztJQUNELFlBQVksQ0FBQyxNQUFNO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDMUI7Ozs7SUFDRCxPQUFPO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0tBQzVCOzs7WUFsRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0NMO2dCQUNMLE1BQU0sRUFBRSxDQUFDLG1yREFBbXJELENBQUM7YUFDOXJEOzs7OzswQkFFRSxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsU0FBUyxTQUFDLGNBQWM7cUJBQ3hCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudVRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVUeXBlIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndml6LXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlbGVjdC1kcm9wZG93blwiPlxuICA8Zm9ybSBjbGFzcz1cInZpemllbnQtaW5wdXRcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J21hdC1mb2N1c2VkJzogbWVudVNob3dufVwiXG4gICAgICAgICAgICAgICAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJvcHRpb25NZW51XCJcbiAgICAgICAgICAgICAgICAgICAgKG1lbnVDbG9zZWQpPVwiaGlkZU1lbnUoKVwiXG4gICAgICAgICAgICAgICAgICAgIChtZW51T3BlbmVkKT1cInNob3dNZW51KClcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dFxuICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgIFt2YWx1ZV09XCJtZXNzYWdlKClcIlxuICAgICAgICAgICAgIHJlYWRvbmx5Lz5cbiAgICAgIDxtYXQtaWNvbiBtYXRTdWZmaXhcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1kcm9wZG93bl9pY29uXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NlbGVjdC1kcm9wZG93bl9pY29uLS1hY3RpdmUnIDogbWVudVNob3dufVwiPnt7bWVudVNob3duP1wiYXJyb3dfZHJvcF91cFwiOlwiYXJyb3dfZHJvcF9kb3duXCJ9fTwvbWF0LWljb24+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9mb3JtPlxuICA8bWF0LW1lbnUgI29wdGlvbk1lbnU9XCJtYXRNZW51XCJcbiAgICAgICAgICAgIFtvdmVybGFwVHJpZ2dlcl09ZmFsc2VcbiAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duX21lbnUgbWF0LWVsZXZhdGlvbi16OFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uXCJcbiAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgIDxtYXQtbGlzdCByb2xlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uX2xpc3RcIj5cbiAgICAgICAgPG1hdC1saXN0LWl0ZW0gcm9sZT1cImxpc3RpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uX2xpc3RJdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydzZWxlY3Qtb3B0aW9uX2xpc3RJdGVtLWFjdGl2ZScgOiBvcHRpb24udGl0bGU9PT1zZWxlY3RlZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj57e29wdGlvbi50aXRsZX19PC9tYXQtbGlzdC1pdGVtPlxuICAgICAgPC9tYXQtbGlzdD5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtbWVudT5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2Auc2VsZWN0LW9wdGlvbl9saXN0e2ZvbnQtd2VpZ2h0OjMwMDtwYWRkaW5nLXRvcDowfS5zZWxlY3Qtb3B0aW9uX2xpc3QgOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxNHB4O2hlaWdodDo0MHB4O2N1cnNvcjpwb2ludGVyfS5zZWxlY3Qtb3B0aW9uX2xpc3QgOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnR7cGFkZGluZzowIDI0cHh9LnNlbGVjdC1vcHRpb25fbGlzdEl0ZW17Y29sb3I6IzY5Njk2OTtoZWlnaHQ6NDBweH0uc2VsZWN0LW9wdGlvbl9saXN0SXRlbS1hY3RpdmV7Y29sb3I6IzdmNWViYX0uc2VsZWN0LW9wdGlvbl9saXN0SXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7Y29sb3I6IzdmNWViYX0uZm9ybS1mdWxsLXdpZHRoe3dpZHRoOjEwMCU7Y3Vyc29yOnBvaW50ZXJ9LmZvcm0tZnVsbC13aWR0aCBpbnB1dHtjdXJzb3I6cG9pbnRlcn0uc2VsZWN0LWRyb3Bkb3duIGlucHV0e2NvbG9yOiMwMDB9LnNlbGVjdC1kcm9wZG93bl9pY29ue2NvbG9yOiM5ZjlmOWZ9LnNlbGVjdC1kcm9wZG93bl9pY29uLS1hY3RpdmV7Y29sb3I6IzAwMH06Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsLnNlbGVjdC1kcm9wZG93bl9tZW51e21hcmdpbi10b3A6MXB4O3dpZHRoOjI4MHB4fTo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWwuc2VsZWN0LWRyb3Bkb3duX21lbnUgLm1hdC1tZW51LWNvbnRlbnR7cGFkZGluZzowfTo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnR7aGVpZ2h0OjI0cHg7bGluZS1oZWlnaHQ6MjRweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9OjpuZy1kZWVwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWx7aGVpZ2h0OjIxLjMzM3B4O2xpbmUtaGVpZ2h0OjIxLjMzM3B4O2ZvbnQtc2l6ZToxNnB4O21hcmdpbi1ib3R0b206MXB4fTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YWxpZ24taXRlbXM6c3RyZXRjaH06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7bWFyZ2luLWJvdHRvbTo1cHg7cGFkZGluZy1ib3R0b206MH06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbTowfTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjojYzNjM2MzfTo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1pY29ue21hcmdpbi10b3A6MTdweH06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci10b2dnbGV7bWFyZ2luLXRvcDoxN3B4O2Rpc3BsYXk6YmxvY2s7Y29sb3I6IzlmOWY5Zn06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6IzlmOWY5Zn06Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6IzdmNWViYX06Om5nLWRlZXAgOjpuZy1kZWVwOmhvdmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6IzAwMH1gXVxufSlcbmV4cG9ydCBjbGFzcyBWaXpTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKXBsYWNlaG9sZGVyOnN0cmluZztcbiAgQElucHV0KClvcHRpb25zOkFycmF5PERhdGVUeXBlPiA9IFtdXG4gIEBWaWV3Q2hpbGQoTWF0TWVudVRyaWdnZXIpIHRyaWdnZXI6IE1hdE1lbnVUcmlnZ2VyO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlVHlwZT4oKVxuICB2YWx1ZTogc3RyaW5nO1xuICBtZW51U2hvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VsZWN0ZWQ6IERhdGVUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5vcHRpb25zWzBdXG4gIH1cblxuXG4gIHNob3dNZW51KCkge1xuICAgIHRoaXMubWVudVNob3duID0gdHJ1ZTtcbiAgfVxuICBoaWRlTWVudSgpIHtcbiAgICB0aGlzLm1lbnVTaG93biA9IGZhbHNlO1xuICB9XG4gIHNlbGVjdE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gb3B0aW9uO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQob3B0aW9uKVxuICAgIHRoaXMudHJpZ2dlci5jbG9zZU1lbnUoKTtcbiAgfVxuICBtZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkLnRpdGxlO1xuICB9XG59XG4iXX0=