/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class VizFooterComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92aXotdG9vbGtpdC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyL3Zpei1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTZCekQsTUFBTTs7c0JBTThCLEVBQUU7MEJBQ04sRUFBRTsyQkFDRCxFQUFFOzs7OztJQU5sQyxRQUFRO1FBQ1AsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0tBQ2xCOzs7O0lBTUQsV0FBVzs7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTtRQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2IsRUFBRSxDQUFDLENBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDOztnQkFDdEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO2FBQ3REO1lBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUNQLElBQUksU0FBUyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO2FBQ3REO1NBQ0E7S0FDRjs7O1lBbERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQko7Z0JBQ04sTUFBTSxFQUFFLENBQUMsMGhDQUEwaEMsQ0FBQzthQUNwaUM7OztxQkFRQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3Zpei1mb290ZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmb290ZXItYmFyXCI+XG4gIDxkaXYgY2xhc3M9XCJmb290ZXItd3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItbGVmdFwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2XCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYnJhbmQgb2YgbGVmdEJyYW5kc1wiPlxuICAgICAgICAgIDxhIGhyZWY9e3ticmFuZC5saW5rfX0+e3ticmFuZC50aXRsZX19PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXJpZ2h0XCI+XG4gICAgICA8dWwgY2xhc3M9XCJuYXZcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBicmFuZCBvZiByaWdodEJyYW5kc1wiPlxuICAgICAgICAgIDxhIGhyZWY9e3ticmFuZC5saW5rfX0+e3ticmFuZC50aXRsZX19PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb290ZXItY2VudGVyXCI+XG4gICAgPHA+Vml6aWVudCBNREE8L3A+XG4gICAgPHA+JmNvcHk7IDIwMTggVml6aWVudCAmIGlMYWJzLiBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuXHRzdHlsZXM6IFtgOmhvc3QgLmZvb3Rlci1iYXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDo3MnB4O2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3BhZGRpbmc6MCA0MHB4O2Rpc3BsYXk6YmxvY2t9Omhvc3QgLmZvb3Rlci1jZW50ZXJ7ei1pbmRleDoxO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo0OHB4O2hlaWdodDo0OHB4O2xlZnQ6MDtyaWdodDowO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTJweCAwfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXs6aG9zdCAuZm9vdGVyLWNlbnRlcnt0b3A6MH19Omhvc3QgLmZvb3Rlci1jZW50ZXIgcHtwYWRkaW5nOjA7bWFyZ2luOjA7bGluZS1oZWlnaHQ6MjRweH06aG9zdCAuZm9vdGVyLXdyYXBwZXJ7ei1pbmRleDo5OTk7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZy10b3A6MTZweDtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdCAuZm9vdGVyLXdyYXBwZXIgLmZvb3Rlci1sZWZ0IC5uYXYgbGl7bWFyZ2luLXJpZ2h0OjI0cHh9Omhvc3QgLmZvb3Rlci13cmFwcGVyIC5mb290ZXItbGVmdCAubmF2IGxpOm50aC1sYXN0LWNoaWxkKDEpe21hcmdpbi1yaWdodDowfTpob3N0IC5mb290ZXItd3JhcHBlciAuZm9vdGVyLXJpZ2h0IC5uYXYgbGl7bWFyZ2luLWxlZnQ6MjRweH06aG9zdCAuZm9vdGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5uYXZ7cGFkZGluZzowO21hcmdpbjowO2xpc3Qtc3R5bGUtdHlwZTpub25lO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QgLmZvb3Rlci13cmFwcGVyIDo6bmctZGVlcCAubmF2IGxpe2xpc3Qtc3R5bGU6bm9uZTtjdXJzb3I6cG9pbnRlcn06aG9zdCAuZm9vdGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5uYXYgbGkgYXtkaXNwbGF5OmlubGluZS1mbGV4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojN2Y1ZWJhfWBdXG59KVxuXG5leHBvcnQgY2xhc3MgVml6Rm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0dGhpcy5zcGxpdEJyYW5kcygpXG5cdH1cblxuXHRASW5wdXQoKSBicmFuZHM6QXJyYXk8QnJhbmRUeXBlPiA9IFtdXG5cdGxlZnRCcmFuZHM6IEFycmF5PEJyYW5kVHlwZT4gPSBbXVxuXHRyaWdodEJyYW5kczogQXJyYXk8QnJhbmRUeXBlPiA9IFtdXG5cblx0c3BsaXRCcmFuZHMoKSB7XG5cdCAgbGV0IGNvdW50ID0gdGhpcy5icmFuZHMubGVuZ3RoXG4gICAgaWYgKGNvdW50KSB7XG5cdFx0XHRpZiAoIGNvdW50ICUgMiA9PSAwICkge1xuXHRcdFx0XHRsZXQgbGVmdENvdW50ID0gY291bnQgLyAyXG5cdFx0XHRcdHRoaXMubGVmdEJyYW5kcyA9IHRoaXMuYnJhbmRzLnNsaWNlKDAsIGxlZnRDb3VudClcblx0XHRcdFx0dGhpcy5yaWdodEJyYW5kcyA9IHRoaXMuYnJhbmRzLnNsaWNlKGxlZnRDb3VudCwgY291bnQpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgbGVmdENvdW50ID0gKGNvdW50IC0gMSkgLyAyIFxuXHRcdFx0XHR0aGlzLmxlZnRCcmFuZHMgPSB0aGlzLmJyYW5kcy5zbGljZSgwLCBsZWZ0Q291bnQpXG5cdFx0XHRcdHRoaXMucmlnaHRCcmFuZHMgPSB0aGlzLmJyYW5kcy5zbGljZShsZWZ0Q291bnQsIGNvdW50KVxuXHRcdFx0fVxuXHQgIH1cblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5kVHlwZSB7XG5cdGlkOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn0iXX0=