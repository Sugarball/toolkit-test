/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { VizDateRangePickerComponent } from './viz-date-range-picker.component';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatRangeDatepickerModule, MatRangeNativeDateModule } from "mat-range-datepicker";
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
export { VizDateRangePickerMudule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LWRhdGUtcmFuZ2UtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zpei10b29sa2l0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXJhbmdlLXBpY2tlci92aXotZGF0ZS1yYW5nZS1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hJLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Z0JBRXpGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCx3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDJCQUEyQjtxQkFDNUI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLDJCQUEyQjtxQkFFNUI7aUJBQ0Y7O21DQTFCRDs7U0EyQmEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVml6RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi92aXotZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFJhbmdlRGF0ZXBpY2tlck1vZHVsZSwgTWF0UmFuZ2VOYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSBcIm1hdC1yYW5nZS1kYXRlcGlja2VyXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdFJhbmdlRGF0ZXBpY2tlck1vZHVsZSwgXG4gICAgTWF0UmFuZ2VOYXRpdmVEYXRlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBWaXpEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50LFxuICAgIC8vIExhc3REYXlzUGlwZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWaXpEYXRlUmFuZ2VQaWNrZXJNdWR1bGUge30iXX0=