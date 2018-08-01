/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { VizFooterComponent };
function VizFooterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizFooterComponent.prototype.brands;
    /** @type {?} */
    VizFooterComponent.prototype.leftBrands;
    /** @type {?} */
    VizFooterComponent.prototype.rightBrands;
}
/**
 * @record
 */
export function BrandType() { }
function BrandType_tsickle_Closure_declarations() {
    /** @type {?} */
    BrandType.prototype.id;
    /** @type {?} */
    BrandType.prototype.link;
    /** @type {?} */
    BrandType.prototype.title;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92aXotdG9vbGtpdC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyL3Zpei1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O3NCQW1DckIsRUFBRTswQkFDTixFQUFFOzJCQUNELEVBQUU7Ozs7O0lBTmxDLHFDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtLQUNsQjs7OztJQU1ELHdDQUFXOzs7SUFBWDtRQUNFLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTtRQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2IsRUFBRSxDQUFDLENBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixxQkFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO2FBQ3REO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AscUJBQUksU0FBUyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO2FBQ3REO1NBQ0E7S0FDRjs7Z0JBbERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHVtQkFxQko7b0JBQ04sTUFBTSxFQUFFLENBQUMsMGhDQUEwaEMsQ0FBQztpQkFDcGlDOzs7eUJBUUMsS0FBSzs7NkJBbkNQOztTQTZCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndml6LWZvb3RlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZvb3Rlci1iYXJcIj5cbiAgPGRpdiBjbGFzcz1cImZvb3Rlci13cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1sZWZ0XCI+XG4gICAgICA8dWwgY2xhc3M9XCJuYXZcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBicmFuZCBvZiBsZWZ0QnJhbmRzXCI+XG4gICAgICAgICAgPGEgaHJlZj17e2JyYW5kLmxpbmt9fT57e2JyYW5kLnRpdGxlfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItcmlnaHRcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdlwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGJyYW5kIG9mIHJpZ2h0QnJhbmRzXCI+XG4gICAgICAgICAgPGEgaHJlZj17e2JyYW5kLmxpbmt9fT57e2JyYW5kLnRpdGxlfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvb3Rlci1jZW50ZXJcIj5cbiAgICA8cD5WaXppZW50IE1EQTwvcD5cbiAgICA8cD4mY29weTsgMjAxOCBWaXppZW50ICYgaUxhYnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG5cdHN0eWxlczogW2A6aG9zdCAuZm9vdGVyLWJhcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OjcycHg7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7cGFkZGluZzowIDQwcHg7ZGlzcGxheTpibG9ja306aG9zdCAuZm9vdGVyLWNlbnRlcnt6LWluZGV4OjE7cG9zaXRpb246YWJzb2x1dGU7dG9wOjQ4cHg7aGVpZ2h0OjQ4cHg7bGVmdDowO3JpZ2h0OjA7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoxMnB4IDB9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpezpob3N0IC5mb290ZXItY2VudGVye3RvcDowfX06aG9zdCAuZm9vdGVyLWNlbnRlciBwe3BhZGRpbmc6MDttYXJnaW46MDtsaW5lLWhlaWdodDoyNHB4fTpob3N0IC5mb290ZXItd3JhcHBlcnt6LWluZGV4Ojk5OTtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLXRvcDoxNnB4O3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0IC5mb290ZXItd3JhcHBlciAuZm9vdGVyLWxlZnQgLm5hdiBsaXttYXJnaW4tcmlnaHQ6MjRweH06aG9zdCAuZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1sZWZ0IC5uYXYgbGk6bnRoLWxhc3QtY2hpbGQoMSl7bWFyZ2luLXJpZ2h0OjB9Omhvc3QgLmZvb3Rlci13cmFwcGVyIC5mb290ZXItcmlnaHQgLm5hdiBsaXttYXJnaW4tbGVmdDoyNHB4fTpob3N0IC5mb290ZXItd3JhcHBlciA6Om5nLWRlZXAgLm5hdntwYWRkaW5nOjA7bWFyZ2luOjA7bGlzdC1zdHlsZS10eXBlOm5vbmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCAuZm9vdGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5uYXYgbGl7bGlzdC1zdHlsZTpub25lO2N1cnNvcjpwb2ludGVyfTpob3N0IC5mb290ZXItd3JhcHBlciA6Om5nLWRlZXAgLm5hdiBsaSBhe2Rpc3BsYXk6aW5saW5lLWZsZXg7dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiM3ZjVlYmF9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXpGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdG5nT25Jbml0KCkgeyBcblx0XHR0aGlzLnNwbGl0QnJhbmRzKClcblx0fVxuXG5cdEBJbnB1dCgpIGJyYW5kczpBcnJheTxCcmFuZFR5cGU+ID0gW11cblx0bGVmdEJyYW5kczogQXJyYXk8QnJhbmRUeXBlPiA9IFtdXG5cdHJpZ2h0QnJhbmRzOiBBcnJheTxCcmFuZFR5cGU+ID0gW11cblxuXHRzcGxpdEJyYW5kcygpIHtcblx0ICBsZXQgY291bnQgPSB0aGlzLmJyYW5kcy5sZW5ndGhcbiAgICBpZiAoY291bnQpIHtcblx0XHRcdGlmICggY291bnQgJSAyID09IDAgKSB7XG5cdFx0XHRcdGxldCBsZWZ0Q291bnQgPSBjb3VudCAvIDJcblx0XHRcdFx0dGhpcy5sZWZ0QnJhbmRzID0gdGhpcy5icmFuZHMuc2xpY2UoMCwgbGVmdENvdW50KVxuXHRcdFx0XHR0aGlzLnJpZ2h0QnJhbmRzID0gdGhpcy5icmFuZHMuc2xpY2UobGVmdENvdW50LCBjb3VudClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBsZWZ0Q291bnQgPSAoY291bnQgLSAxKSAvIDIgXG5cdFx0XHRcdHRoaXMubGVmdEJyYW5kcyA9IHRoaXMuYnJhbmRzLnNsaWNlKDAsIGxlZnRDb3VudClcblx0XHRcdFx0dGhpcy5yaWdodEJyYW5kcyA9IHRoaXMuYnJhbmRzLnNsaWNlKGxlZnRDb3VudCwgY291bnQpXG5cdFx0XHR9XG5cdCAgfVxuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmRUeXBlIHtcblx0aWQ6IHN0cmluZztcblx0bGluazogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufSJdfQ==