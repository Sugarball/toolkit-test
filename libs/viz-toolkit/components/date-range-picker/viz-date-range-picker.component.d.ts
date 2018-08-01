import { EventEmitter } from '@angular/core';
import { matRangeDatepickerInputEvent, matRangeDatepickerRangeValue, DateAdapter } from "mat-range-datepicker";
export declare class VizDateRangePickerComponent {
    private _dateAdapter;
    date: matRangeDatepickerRangeValue<Date>;
    lastDateInput: matRangeDatepickerRangeValue<Date> | null;
    lastDateChange: matRangeDatepickerRangeValue<Date> | null;
    dateShot: matRangeDatepickerRangeValue<Date> | null;
    onApply: EventEmitter<any>;
    constructor(_dateAdapter: DateAdapter<Date>);
    ngOnInit(): void;
    onDateInput: (e: matRangeDatepickerInputEvent<Date>) => void;
    onDateChange: (e: matRangeDatepickerInputEvent<Date>) => void;
    onInputDate($event: any): void;
    onClose(event: any): void;
}
