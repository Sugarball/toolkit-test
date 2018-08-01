/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, TemplateRef, ContentChild, Input } from '@angular/core';
import { VizTreeNodeDefDirective } from './viz-tree-node-def.directive';
import { VizTreeLeafDefDirective } from './viz-tree-leaf-def.directive';
var VizTreeComponent = /** @class */ (function () {
    function VizTreeComponent() {
    }
    /**
     * @return {?}
     */
    VizTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.vizTreeNodeTemplate);
    };
    /**
     * @return {?}
     */
    VizTreeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        console.log(this.vizTreeNodeTemplate);
    };
    VizTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'viz-tree',
                    template: "<!-- <div *ngFor=\"let node of tree template: itemTemplate\">\n  <ng-template *ngIf=\"node.children.length==0\">\n    <ng-template *ngTemplateOutlet=\"itemTemplate context: { $implicit: node }\"></ng-template>\u0192\u0192\n  </ng-template>\n  <ng-template *ngIf=\"node.children.length>0\">\n    <button>{{node.name}}</button>\n    <div *ngFor=\"let subNode of node.children template: itemTemplate\">\n      <ng-template *ngTemplateOutlet=\"itemTemplate context: { $implicit: subNode }\"></ng-template>\n    </div>\n  </ng-template>\n</div> -->\n\n\n<div>\n  <ng-template #recursiveList let-tree>\n    <div class=\"viz-tree-cell\" *ngFor=\"let node of tree\">\n      <div class=\"viz-tree-cell-node\">\n        <!-- <mat-icon (click)=\"node.isExpanded = !node.isExpanded\"\n                  *ngIf=\"node.children.length>0\">\n          {{node.isExpanded ? 'expand_more' : 'chevron_right'}}\n        </mat-icon> -->\n\n        <ng-container *ngIf=\"node.children.length>0\">\n          <ng-container *ngTemplateOutlet=\"vizTreeNodeTemplate; context: { $implicit: node }\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"node.children.length==0\">\n          <div [class.viz-tree-cell-node-content]=\"!(node.children.length>0)\">\n            <ng-container *ngTemplateOutlet=\"vizTreeLeafTemplate; context: { $implicit: node }\"></ng-container>\n          </div>\n        </ng-container>\n\n      </div>\n\n      <div *ngIf=\"node.children.length > 0\" [class.hideChildren]=!node.isExpanded class=\"viz-tree-cell-child\">\n        <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: node.children }\"></ng-container>\n      </div>\n\n    </div>\n  </ng-template>\n  <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: tree }\"></ng-container>\n</div>\n\n\n\n\n\n<!-- <viz-tree-cell *ngFor=\"let node of tree; let i=index\" [node]=\"node\"></viz-tree-cell> -->",
                    styles: [".hideChildren{display:none}.viz-tree-cell-node{margin-bottom:10px}.viz-tree-cell-child{margin-left:40px}.viz-tree-cell-node-content{margin-left:40px;margin-bottom:16px}.viz-tree-cell-node-content-hidden{display:none}"]
                },] },
    ];
    /** @nocollapse */
    VizTreeComponent.ctorParameters = function () { return []; };
    VizTreeComponent.propDecorators = {
        tree: [{ type: Input }],
        vizTreeNodeTemplate: [{ type: ContentChild, args: [VizTreeNodeDefDirective, { read: TemplateRef },] }],
        vizTreeLeafTemplate: [{ type: ContentChild, args: [VizTreeLeafDefDirective, { read: TemplateRef },] }]
    };
    return VizTreeComponent;
}());
export { VizTreeComponent };
function VizTreeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizTreeComponent.prototype.tree;
    /** @type {?} */
    VizTreeComponent.prototype.vizTreeNodeTemplate;
    /** @type {?} */
    VizTreeComponent.prototype.vizTreeLeafTemplate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdml6LXRvb2xraXQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RyZWUvdml6LXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBSVosS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQTJEdEU7S0FBZ0I7Ozs7SUFFaEIsbUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUN2Qzs7OztJQUNELDBDQUFlOzs7SUFBZjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDdkM7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSwrM0RBOENrRjtvQkFDNUYsTUFBTSxFQUFFLENBQUMsME5BQTBOLENBQUM7aUJBQ3JPOzs7Ozt1QkFFRSxLQUFLO3NDQUNMLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7c0NBRTNELFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7OzJCQXBFOUQ7O1NBZ0VhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgQ29udGVudENoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpelRyZWVOb2RlRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi92aXotdHJlZS1ub2RlLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVml6VHJlZUxlYWZEZWZEaXJlY3RpdmUgfSBmcm9tICcuL3Zpei10cmVlLWxlYWYtZGVmLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei10cmVlJyxcbiAgdGVtcGxhdGU6IGA8IS0tIDxkaXYgKm5nRm9yPVwibGV0IG5vZGUgb2YgdHJlZSB0ZW1wbGF0ZTogaXRlbVRlbXBsYXRlXCI+XG4gIDxuZy10ZW1wbGF0ZSAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoPT0wXCI+XG4gICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlIGNvbnRleHQ6IHsgJGltcGxpY2l0OiBub2RlIH1cIj48L25nLXRlbXBsYXRlPsaSxpJcbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg+MFwiPlxuICAgIDxidXR0b24+e3tub2RlLm5hbWV9fTwvYnV0dG9uPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IHN1Yk5vZGUgb2Ygbm9kZS5jaGlsZHJlbiB0ZW1wbGF0ZTogaXRlbVRlbXBsYXRlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGUgY29udGV4dDogeyAkaW1wbGljaXQ6IHN1Yk5vZGUgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2Rpdj4gLS0+XG5cblxuPGRpdj5cbiAgPG5nLXRlbXBsYXRlICNyZWN1cnNpdmVMaXN0IGxldC10cmVlPlxuICAgIDxkaXYgY2xhc3M9XCJ2aXotdHJlZS1jZWxsXCIgKm5nRm9yPVwibGV0IG5vZGUgb2YgdHJlZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInZpei10cmVlLWNlbGwtbm9kZVwiPlxuICAgICAgICA8IS0tIDxtYXQtaWNvbiAoY2xpY2spPVwibm9kZS5pc0V4cGFuZGVkID0gIW5vZGUuaXNFeHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoPjBcIj5cbiAgICAgICAgICB7e25vZGUuaXNFeHBhbmRlZCA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgICA8L21hdC1pY29uPiAtLT5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg+MFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ2aXpUcmVlTm9kZVRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogbm9kZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg9PTBcIj5cbiAgICAgICAgICA8ZGl2IFtjbGFzcy52aXotdHJlZS1jZWxsLW5vZGUtY29udGVudF09XCIhKG5vZGUuY2hpbGRyZW4ubGVuZ3RoPjApXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidml6VHJlZUxlYWZUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IG5vZGUgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCJub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDBcIiBbY2xhc3MuaGlkZUNoaWxkcmVuXT0hbm9kZS5pc0V4cGFuZGVkIGNsYXNzPVwidml6LXRyZWUtY2VsbC1jaGlsZFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVjdXJzaXZlTGlzdDsgY29udGV4dDp7ICRpbXBsaWNpdDogbm9kZS5jaGlsZHJlbiB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVjdXJzaXZlTGlzdDsgY29udGV4dDp7ICRpbXBsaWNpdDogdHJlZSB9XCI+PC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuXG5cblxuXG48IS0tIDx2aXotdHJlZS1jZWxsICpuZ0Zvcj1cImxldCBub2RlIG9mIHRyZWU7IGxldCBpPWluZGV4XCIgW25vZGVdPVwibm9kZVwiPjwvdml6LXRyZWUtY2VsbD4gLS0+YCxcbiAgc3R5bGVzOiBbYC5oaWRlQ2hpbGRyZW57ZGlzcGxheTpub25lfS52aXotdHJlZS1jZWxsLW5vZGV7bWFyZ2luLWJvdHRvbToxMHB4fS52aXotdHJlZS1jZWxsLWNoaWxke21hcmdpbi1sZWZ0OjQwcHh9LnZpei10cmVlLWNlbGwtbm9kZS1jb250ZW50e21hcmdpbi1sZWZ0OjQwcHg7bWFyZ2luLWJvdHRvbToxNnB4fS52aXotdHJlZS1jZWxsLW5vZGUtY29udGVudC1oaWRkZW57ZGlzcGxheTpub25lfWBdXG59KVxuZXhwb3J0IGNsYXNzIFZpelRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSB0cmVlOiBhbnk7XG4gIEBDb250ZW50Q2hpbGQoVml6VHJlZU5vZGVEZWZEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgdml6VHJlZU5vZGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChWaXpUcmVlTGVhZkRlZkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICB2aXpUcmVlTGVhZlRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy52aXpUcmVlTm9kZVRlbXBsYXRlKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy52aXpUcmVlTm9kZVRlbXBsYXRlKTtcbiAgfVxufVxuIl19