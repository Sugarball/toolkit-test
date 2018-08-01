/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DateAdapter } from "mat-range-datepicker";
export class VizDateRangePickerComponent {
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
                this._dateAdapter.sameDate(this.dateShot.end, this.date.end)) {
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zpei10b29sa2l0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXJhbmdlLXBpY2tlci92aXotZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixLQUFLLEVBQWlDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUE4RCxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQXdCL0csTUFBTTs7OztJQVNKLFlBQ1U7UUFBQSxpQkFBWSxHQUFaLFlBQVk7dUJBSEYsSUFBSSxZQUFZLEVBQVE7MkJBVTlCLENBQUMsQ0FBcUMsRUFBRSxFQUFFO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3BELElBQUksQ0FBQyxhQUFhLHFCQUFHLENBQUMsQ0FBQyxLQUEyQyxDQUFBLENBQUE7U0FDbkU7NEJBQ2MsQ0FBQyxDQUFxQyxFQUFFLEVBQUU7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDckQsSUFBSSxDQUFDLGNBQWMscUJBQUcsQ0FBQyxDQUFDLEtBQTJDLENBQUEsQ0FBQztTQUNyRTtLQWJHOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztLQUMzQjs7Ozs7SUFVRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQTtLQUNuQjs7Ozs7SUFDRCxPQUFPLENBQUMsS0FBSztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQTtRQUN4QyxFQUFFLENBQUMsQ0FDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Z0JBRWhFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUM3RCxDQUFDLENBQUMsQ0FBQztTQUVGO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzdCO0tBRUY7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyw4cEJBQThwQixDQUFDO2FBQ3pxQjs7OztZQXZCb0UsV0FBVzs7O21CQXlCN0UsS0FBSztzQkFNTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0LCBQaXBlLCBQaXBlVHJhbnNmb3JtLCBPcHRpb25hbCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1hdFJhbmdlRGF0ZXBpY2tlcklucHV0RXZlbnQsIG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWUsIERhdGVBZGFwdGVyIH0gZnJvbSBcIm1hdC1yYW5nZS1kYXRlcGlja2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei1kYXRlLXJhbmdlLXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFwcGxpY2F0aW9uLWRyb3Bkb3duXCI+XG4gIDxmb3JtIGNsYXNzPSdkYXRlLXJhbmdlLXBpY2tlciB2aXppZW50LWlucHV0Jz5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZVwiXG4gICAgICAgICAgW21hdFJhbmdlRGF0ZXBpY2tlcl09XCJyZXN1bHRQaWNrZXJcIlxuICAgICAgICAgIFtuZ01vZGVsXT1cImRhdGVcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSW5wdXREYXRlKCRldmVudClcIlxuICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAoZGF0ZUlucHV0KT1cIm9uRGF0ZUlucHV0KCRldmVudClcIlxuICAgICAgICAgIChkYXRlQ2hhbmdlKT1cIm9uRGF0ZUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgIDxtYXQtcmFuZ2UtZGF0ZXBpY2tlclxuICAgICAgICAgICNyZXN1bHRQaWNrZXIgW3JhbmdlTW9kZV09XCJ0cnVlXCIgKGNsb3NlZCk9XCJ0aGlzLm9uQ2xvc2UoJGV2ZW50KVwiPlxuICAgICAgICA8L21hdC1yYW5nZS1kYXRlcGlja2VyPlxuICAgICAgICA8bWF0LXJhbmdlLWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInJlc3VsdFBpY2tlclwiPjwvbWF0LXJhbmdlLWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZm9ybT5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2A6aG9zdCAubWF0LWlucHV0LWVsZW1lbnR7Y29sb3I6IzAwMH06aG9zdCAubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX06aG9zdCAubWF0LWZvcm0tZmllbGQgLmRhdGUtcmFuZ2UtcGlja2VyIC5tYXQtZm9ybS1maWVsZC1mbGV4e3dpZHRoOjEwMCUhaW1wb3J0YW50fTpob3N0IC5tYXQtZm9ybS1maWVsZCAuZGF0ZS1yYW5nZS1waWNrZXIgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4e3dpZHRoOjEwMCV9LmRhdGUtcmFuZ2UtcGlja2VyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleHt3aWR0aDoxMDAlfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7LmRhdGUtcmFuZ2UtcGlja2VyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleHt3aWR0aDoxMDAlfX06Om5nLWRlZXAgLnF1aWNrLXNlbGVjdC1zZWMgLnNlbGVjdC10aXRsZXtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo0MDB9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMXB4KXs6Om5nLWRlZXAgLmNhbGVuZGFyLWJ1dHRvbi1zZWN7bGluZS1oZWlnaHQ6ODRweCFpbXBvcnRhbnQ7cGFkZGluZzo0cHggMjRweCFpbXBvcnRhbnR9OjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2hlaWdodDo1MDFweCFpbXBvcnRhbnR9fWBdXG59KVxuZXhwb3J0IGNsYXNzIFZpekRhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGRhdGU6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gO1xuICBsYXN0RGF0ZUlucHV0OiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IHwgbnVsbDtcbiAgbGFzdERhdGVDaGFuZ2U6IG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4gfCBudWxsO1xuICBkYXRlU2hvdDogbWF0UmFuZ2VEYXRlcGlja2VyUmFuZ2VWYWx1ZTxEYXRlPiB8IG51bGw7XG5cbiAgQE91dHB1dCgpIG9uQXBwbHkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4gKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPERhdGU+LFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRlU2hvdCA9IHRoaXMuZGF0ZTtcbiAgfVxuXG4gIG9uRGF0ZUlucHV0ID0gKGU6IG1hdFJhbmdlRGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW5wdXQnLCB0aGlzLmxhc3REYXRlSW5wdXQgPT09IGUudmFsdWUpXG4gICAgdGhpcy5sYXN0RGF0ZUlucHV0ID0gZS52YWx1ZSBhcyBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+XG4gIH1cbiAgb25EYXRlQ2hhbmdlID0gKGU6IG1hdFJhbmdlRGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0JywgdGhpcy5sYXN0RGF0ZUlucHV0ID09PSBlLnZhbHVlKVxuICAgIHRoaXMubGFzdERhdGVDaGFuZ2UgPSBlLnZhbHVlIGFzIG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT47XG4gIH1cbiAgb25JbnB1dERhdGUoJGV2ZW50KSB7XG4gICAgdGhpcy5kYXRlID0gJGV2ZW50XG4gIH1cbiAgb25DbG9zZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0ZVNob3QsIHRoaXMuZGF0ZSlcbiAgICBpZiAoIXRoaXMuZGF0ZVNob3QgfHwgIXRoaXMuZGF0ZSkgcmV0dXJuXG4gICAgaWYgKFxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGUodGhpcy5kYXRlU2hvdC5iZWdpbiwgdGhpcy5kYXRlLmJlZ2luKVxuICAgICAgJiZcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRlKHRoaXMuZGF0ZVNob3QuZW5kLCB0aGlzLmRhdGUuZW5kKVxuICAgICkge1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVNob3QgPSB0aGlzLmRhdGVcbiAgICAgIHRoaXMub25BcHBseS5lbWl0KHRoaXMuZGF0ZSlcbiAgICB9XG4gICAgXG4gIH1cbn1cblxuXG4vLyBAUGlwZSh7bmFtZTogJ2xhc3RkYXlzJ30pXG4vLyBleHBvcnQgY2xhc3MgTGFzdERheXNQaXBlPEQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbi8vICAgY29uc3RydWN0b3IoXG4vLyAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPERhdGU+LFxuLy8gICApIHt9XG5cbi8vICAgdHJhbnNmb3JtKHZhbHVlOiBtYXRSYW5nZURhdGVwaWNrZXJSYW5nZVZhbHVlPERhdGU+IHwgRCB8IG51bGwsIG9wdGlvbnM6IHN0cmluZyk6IGFueSB7XG4vLyAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdiZWdpbicpKSB7XG4vLyAgICAgICBsZXQgX3ZhbHVlID0gPG1hdFJhbmdlRGF0ZXBpY2tlclJhbmdlVmFsdWU8RGF0ZT4+IHZhbHVlO1xuLy8gICAgICAgaWYgKHRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRlKHRoaXMuX2RhdGVBZGFwdGVyLnRvZGF5KCksIF92YWx1ZS5lbmQpKSB7XG4vLyAgICAgICAgIC8vIHJldHVybiBcIkxhc3QgPyBEYXlzXCI7XG4vLyAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgIFxuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbi8vICAgICAgIH1cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuIHZhbHVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4iXX0=