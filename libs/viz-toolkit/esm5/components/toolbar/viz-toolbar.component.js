/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export { VizToolbarComponent };
function VizToolbarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizToolbarComponent.prototype.title;
    /** @type {?} */
    VizToolbarComponent.prototype.searchBtnClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdml6LXRvb2xraXQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3Rvb2xiYXIvdml6LXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OEJBZ0JsRCxJQUFJLFlBQVksRUFBRTs7Ozs7SUFFN0Msc0NBQVE7OztJQUFSLGVBQWM7Ozs7SUFFZCwyQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFBO0tBQzNCOztnQkFwQkYsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsaUtBS0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsaVFBQWlRLENBQUM7aUJBQzVROzs7d0JBSUUsS0FBSztpQ0FDTCxNQUFNOzs4QkFoQlQ7O1NBYWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd2aXotdG9vbGJhcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInZpei10b29sYmFyXCI+IFxuICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+XG4gIDxkaXYgY2xhc3M9XCJzZWFyY2hcIiAoY2xpY2spPVwic2VhcmNoT25jbGljaygpXCI+XG4gICAgPG1hdC1pY29uPnNlYXJjaDwvbWF0LWljb24+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYDpob3N0IC52aXotdG9vbGJhcntkaXNwbGF5OmZsZXg7bGluZS1oZWlnaHQ6NjRweDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZzowIDI0cHh9Omhvc3QgLnZpei10b29sYmFyIC5zZWFyY2h7ZGlzcGxheTppbmxpbmUtZmxleDtjdXJzb3I6cG9pbnRlcn06aG9zdCAudml6LXRvb2xiYXIgLnNlYXJjaCAubWF0LWljb257aGVpZ2h0OjY0cHg7bGluZS1oZWlnaHQ6NjRweDtjb2xvcjojOWY5ZjlmfWBdLFxufSlcblxuZXhwb3J0IGNsYXNzIFZpelRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBTdHJpbmc7XG4gIEBPdXRwdXQoKSBzZWFyY2hCdG5DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIG5nT25Jbml0KCkgeyB9XG4gIFxuICBzZWFyY2hPbmNsaWNrKCkge1xuICAgIHRoaXMuc2VhcmNoQnRuQ2xpY2suZW1pdCgpXG4gIH1cbn0iXX0=