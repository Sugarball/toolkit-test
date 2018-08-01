/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class VizToolbarComponent {
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
function VizToolbarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizToolbarComponent.prototype.title;
    /** @type {?} */
    VizToolbarComponent.prototype.searchBtnClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdml6LXRvb2xraXQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3Rvb2xiYXIvdml6LXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBYS9FLE1BQU07OzhCQUd1QixJQUFJLFlBQVksRUFBRTs7Ozs7SUFFN0MsUUFBUSxNQUFNOzs7O0lBRWQsYUFBYTtRQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUE7S0FDM0I7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7T0FLTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxpUUFBaVEsQ0FBQzthQUM1UTs7O29CQUlFLEtBQUs7NkJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndml6LXRvb2xiYXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ2aXotdG9vbGJhclwiPiBcbiAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwic2VhcmNoXCIgKGNsaWNrKT1cInNlYXJjaE9uY2xpY2soKVwiPlxuICAgIDxtYXQtaWNvbj5zZWFyY2g8L21hdC1pY29uPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2A6aG9zdCAudml6LXRvb2xiYXJ7ZGlzcGxheTpmbGV4O2xpbmUtaGVpZ2h0OjY0cHg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MCAyNHB4fTpob3N0IC52aXotdG9vbGJhciAuc2VhcmNoe2Rpc3BsYXk6aW5saW5lLWZsZXg7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QgLnZpei10b29sYmFyIC5zZWFyY2ggLm1hdC1pY29ue2hlaWdodDo2NHB4O2xpbmUtaGVpZ2h0OjY0cHg7Y29sb3I6IzlmOWY5Zn1gXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXpUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZTogU3RyaW5nO1xuICBAT3V0cHV0KCkgc2VhcmNoQnRuQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBuZ09uSW5pdCgpIHsgfVxuICBcbiAgc2VhcmNoT25jbGljaygpIHtcbiAgICB0aGlzLnNlYXJjaEJ0bkNsaWNrLmVtaXQoKVxuICB9XG59Il19