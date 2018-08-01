/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
var VizTreeCellComponent = /** @class */ (function () {
    function VizTreeCellComponent() {
        this.collapse = true;
    }
    /**
     * @return {?}
     */
    VizTreeCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    VizTreeCellComponent.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this.collapse = !this.collapse;
    };
    VizTreeCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'viz-tree-cell',
                    template: "<div>\n  <mat-icon (click)=\"node.isExpanded = !node.isExpanded\"\n            *ngIf=\"node.children.length>0\">\n    {{node.isExpanded ? 'expand_more' : 'chevron_right'}}\n  </mat-icon>\n  <span class='viz-tree-cell-name'>{{node.name}}</span>\n</div>\n\n<div [class.hideChildren]=node.isExpanded\n     class='viz-tree-child'>\n  <div *ngFor=\"let node of node.children; let i=index\">\n    <viz-tree-cell [node]=\"node\"></viz-tree-cell>\n  </div>\n</div>",
                    styles: [".hideChildren{display:none}.viz-tree-child{margin-left:16px}.viz-tree-cell-name{display:inline-block;height:24px}"]
                },] },
    ];
    /** @nocollapse */
    VizTreeCellComponent.ctorParameters = function () { return []; };
    VizTreeCellComponent.propDecorators = {
        node: [{ type: Input }]
    };
    return VizTreeCellComponent;
}());
export { VizTreeCellComponent };
function VizTreeCellComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizTreeCellComponent.prototype.node;
    /** @type {?} */
    VizTreeCellComponent.prototype.collapse;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRyZWUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92aXotdG9vbGtpdC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlZS92aXotdHJlZS1jZWxsL3Zpei10cmVlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBdUJwQzt3QkFEb0IsSUFBSTtLQUNSOzs7O0lBRWhCLHVDQUFROzs7SUFBUixlQUFhOzs7O0lBRWIsNkNBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDaEM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwwY0FhTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyxtSEFBbUgsQ0FBQztpQkFDOUg7Ozs7O3VCQUVFLEtBQUs7OytCQXRCUjs7U0FxQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei10cmVlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gIDxtYXQtaWNvbiAoY2xpY2spPVwibm9kZS5pc0V4cGFuZGVkID0gIW5vZGUuaXNFeHBhbmRlZFwiXG4gICAgICAgICAgICAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoPjBcIj5cbiAgICB7e25vZGUuaXNFeHBhbmRlZCA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICA8L21hdC1pY29uPlxuICA8c3BhbiBjbGFzcz0ndml6LXRyZWUtY2VsbC1uYW1lJz57e25vZGUubmFtZX19PC9zcGFuPlxuPC9kaXY+XG5cbjxkaXYgW2NsYXNzLmhpZGVDaGlsZHJlbl09bm9kZS5pc0V4cGFuZGVkXG4gICAgIGNsYXNzPSd2aXotdHJlZS1jaGlsZCc+XG4gIDxkaXYgKm5nRm9yPVwibGV0IG5vZGUgb2Ygbm9kZS5jaGlsZHJlbjsgbGV0IGk9aW5kZXhcIj5cbiAgICA8dml6LXRyZWUtY2VsbCBbbm9kZV09XCJub2RlXCI+PC92aXotdHJlZS1jZWxsPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AuaGlkZUNoaWxkcmVue2Rpc3BsYXk6bm9uZX0udml6LXRyZWUtY2hpbGR7bWFyZ2luLWxlZnQ6MTZweH0udml6LXRyZWUtY2VsbC1uYW1le2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDoyNHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIFZpelRyZWVDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbm9kZTtcbiAgY29sbGFwc2U6IGJvb2xlYW4gPSB0cnVlO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCkge1xuICAgIHRoaXMuY29sbGFwc2UgPSAhdGhpcy5jb2xsYXBzZTtcbiAgfVxufVxuIl19