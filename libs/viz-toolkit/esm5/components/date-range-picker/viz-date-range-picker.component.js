/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DateAdapter } from "mat-range-datepicker";
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
                this._dateAdapter.sameDate(this.dateShot.end, this.date.end)) {
        }
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
export { VizDateRangePickerComponent };
function VizDateRangePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizDateRangePickerComponent.prototype.date;
    /** @type {?} */
    VizDateRangePickerComponent.prototype.lastDateInput;
    /** @type {?} */
    VizDateRangePickerComponent.prototype.lastDateChange;
    /** @type {?} */
    VizDateRangePickerComponent.prototype.dateShot;
    /** @type {?} */
    VizDateRangePickerComponent.prototype.onApply;
    /** @type {?} */
    VizDateRangePickerComponent.prototype.onDateInput;
    /** @type {?} */
    VizDateRangePickerComponent.prototype.onDateChange;
    /** @type {?} */
    VizDateRangePickerComponent.prototype._dateAdapter;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zpei10b29sa2l0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXJhbmdlLXBpY2tlci92aXotZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixLQUFLLEVBQWlDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUE4RCxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFpQzdHLHFDQUNVO1FBRFYsaUJBRUk7UUFETSxpQkFBWSxHQUFaLFlBQVk7dUJBSEYsSUFBSSxZQUFZLEVBQVE7MkJBVTlCLFVBQUMsQ0FBcUM7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDcEQsS0FBSSxDQUFDLGFBQWEscUJBQUcsQ0FBQyxDQUFDLEtBQTJDLENBQUEsQ0FBQTtTQUNuRTs0QkFDYyxVQUFDLENBQXFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JELEtBQUksQ0FBQyxjQUFjLHFCQUFHLENBQUMsQ0FBQyxLQUEyQyxDQUFBLENBQUM7U0FDckU7S0FiRzs7OztJQUVKLDhDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztLQUMzQjs7Ozs7SUFVRCxpREFBVzs7OztJQUFYLFVBQVksTUFBTTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQTtLQUNuQjs7Ozs7SUFDRCw2Q0FBTzs7OztJQUFQLFVBQVEsS0FBSztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQTtRQUN4QyxFQUFFLENBQUMsQ0FDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Z0JBRWhFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUM3RCxDQUFDLENBQUMsQ0FBQztTQUVGO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzdCO0tBRUY7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLG9zQkFpQkw7b0JBQ0wsTUFBTSxFQUFFLENBQUMsOHBCQUE4cEIsQ0FBQztpQkFDenFCOzs7O2dCQXZCb0UsV0FBVzs7O3VCQXlCN0UsS0FBSzswQkFNTCxNQUFNOztzQ0FoQ1Q7O1NBeUJhLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBJbnB1dCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgT3B0aW9uYWwsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtYXRSYW5nZURhdGVwaWNrZXJJbnB1dEV2ZW50LCBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlLCBEYXRlQWRhcHRlciB9IGZyb20gXCJtYXQtcmFuZ2UtZGF0ZXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aXotZGF0ZS1yYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhcHBsaWNhdGlvbi1kcm9wZG93blwiPlxuICA8Zm9ybSBjbGFzcz0nZGF0ZS1yYW5nZS1waWNrZXIgdml6aWVudC1pbnB1dCc+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVcIlxuICAgICAgICAgIFttYXRSYW5nZURhdGVwaWNrZXJdPVwicmVzdWx0UGlja2VyXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJkYXRlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0RGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgKGRhdGVJbnB1dCk9XCJvbkRhdGVJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAoZGF0ZUNoYW5nZSk9XCJvbkRhdGVDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICA8bWF0LXJhbmdlLWRhdGVwaWNrZXJcbiAgICAgICAgICAjcmVzdWx0UGlja2VyIFtyYW5nZU1vZGVdPVwidHJ1ZVwiIChjbG9zZWQpPVwidGhpcy5vbkNsb3NlKCRldmVudClcIj5cbiAgICAgICAgPC9tYXQtcmFuZ2UtZGF0ZXBpY2tlcj5cbiAgICAgICAgPG1hdC1yYW5nZS1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJyZXN1bHRQaWNrZXJcIj48L21hdC1yYW5nZS1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Zvcm0+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgOmhvc3QgLm1hdC1pbnB1dC1lbGVtZW50e2NvbG9yOiMwMDB9Omhvc3QgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9Omhvc3QgLm1hdC1mb3JtLWZpZWxkIC5kYXRlLXJhbmdlLXBpY2tlciAubWF0LWZvcm0tZmllbGQtZmxleHt3aWR0aDoxMDAlIWltcG9ydGFudH06aG9zdCAubWF0LWZvcm0tZmllbGQgLmRhdGUtcmFuZ2UtcGlja2VyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeHt3aWR0aDoxMDAlfS5kYXRlLXJhbmdlLXBpY2tlciA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXh7d2lkdGg6MTAwJX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpey5kYXRlLXJhbmdlLXBpY2tlciA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXh7d2lkdGg6MTAwJX19OjpuZy1kZWVwIC5xdWljay1zZWxlY3Qtc2VjIC5zZWxlY3QtdGl0bGV7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NDAwfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDFweCl7OjpuZy1kZWVwIC5jYWxlbmRhci1idXR0b24tc2Vje2xpbmUtaGVpZ2h0Ojg0cHghaW1wb3J0YW50O3BhZGRpbmc6NHB4IDI0cHghaW1wb3J0YW50fTo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItY29udGVudHtoZWlnaHQ6NTAxcHghaW1wb3J0YW50fX1gXVxufSlcbmV4cG9ydCBjbGFzcyBWaXpEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBkYXRlOiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IDtcbiAgbGFzdERhdGVJbnB1dDogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiB8IG51bGw7XG4gIGxhc3REYXRlQ2hhbmdlOiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IHwgbnVsbDtcbiAgZGF0ZVNob3Q6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gfCBudWxsO1xuXG4gIEBPdXRwdXQoKSBvbkFwcGx5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+ICgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEYXRlPixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0ZVNob3QgPSB0aGlzLmRhdGU7XG4gIH1cblxuICBvbkRhdGVJbnB1dCA9IChlOiBtYXRSYW5nZURhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2lucHV0JywgdGhpcy5sYXN0RGF0ZUlucHV0ID09PSBlLnZhbHVlKVxuICAgIHRoaXMubGFzdERhdGVJbnB1dCA9IGUudmFsdWUgYXMgbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPlxuICB9XG4gIG9uRGF0ZUNoYW5nZSA9IChlOiBtYXRSYW5nZURhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdCcsIHRoaXMubGFzdERhdGVJbnB1dCA9PT0gZS52YWx1ZSlcbiAgICB0aGlzLmxhc3REYXRlQ2hhbmdlID0gZS52YWx1ZSBhcyBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+O1xuICB9XG4gIG9uSW5wdXREYXRlKCRldmVudCkge1xuICAgIHRoaXMuZGF0ZSA9ICRldmVudFxuICB9XG4gIG9uQ2xvc2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGVTaG90LCB0aGlzLmRhdGUpXG4gICAgaWYgKCF0aGlzLmRhdGVTaG90IHx8ICF0aGlzLmRhdGUpIHJldHVyblxuICAgIGlmIChcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRlKHRoaXMuZGF0ZVNob3QuYmVnaW4sIHRoaXMuZGF0ZS5iZWdpbilcbiAgICAgICYmXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZSh0aGlzLmRhdGVTaG90LmVuZCwgdGhpcy5kYXRlLmVuZClcbiAgICApIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVTaG90ID0gdGhpcy5kYXRlXG4gICAgICB0aGlzLm9uQXBwbHkuZW1pdCh0aGlzLmRhdGUpXG4gICAgfVxuICAgIFxuICB9XG59XG5cblxuLy8gQFBpcGUoe25hbWU6ICdsYXN0ZGF5cyd9KVxuLy8gZXhwb3J0IGNsYXNzIExhc3REYXlzUGlwZTxEPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4vLyAgIGNvbnN0cnVjdG9yKFxuLy8gICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEYXRlPixcbi8vICAgKSB7fVxuXG4vLyAgIHRyYW5zZm9ybSh2YWx1ZTogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiB8IEQgfCBudWxsLCBvcHRpb25zOiBzdHJpbmcpOiBhbnkge1xuLy8gICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnYmVnaW4nKSkge1xuLy8gICAgICAgbGV0IF92YWx1ZSA9IDxtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+PiB2YWx1ZTtcbi8vICAgICAgIGlmICh0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZSh0aGlzLl9kYXRlQWRhcHRlci50b2RheSgpLCBfdmFsdWUuZW5kKSkge1xuLy8gICAgICAgICAvLyByZXR1cm4gXCJMYXN0ID8gRGF5c1wiO1xuLy8gICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICBcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiBfdmFsdWU7XG4vLyAgICAgICB9XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHJldHVybiB2YWx1ZTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuIl19