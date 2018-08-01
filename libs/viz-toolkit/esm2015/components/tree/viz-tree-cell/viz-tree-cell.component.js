/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
export class VizTreeCellComponent {
    constructor() {
        this.collapse = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.collapse = !this.collapse;
    }
}
VizTreeCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-tree-cell',
                template: `<div>
  <mat-icon (click)="node.isExpanded = !node.isExpanded"
            *ngIf="node.children.length>0">
    {{node.isExpanded ? 'expand_more' : 'chevron_right'}}
  </mat-icon>
  <span class='viz-tree-cell-name'>{{node.name}}</span>
</div>

<div [class.hideChildren]=node.isExpanded
     class='viz-tree-child'>
  <div *ngFor="let node of node.children; let i=index">
    <viz-tree-cell [node]="node"></viz-tree-cell>
  </div>
</div>`,
                styles: [`.hideChildren{display:none}.viz-tree-child{margin-left:16px}.viz-tree-cell-name{display:inline-block;height:24px}`]
            },] },
];
/** @nocollapse */
VizTreeCellComponent.ctorParameters = () => [];
VizTreeCellComponent.propDecorators = {
    node: [{ type: Input }]
};
function VizTreeCellComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizTreeCellComponent.prototype.node;
    /** @type {?} */
    VizTreeCellComponent.prototype.collapse;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRyZWUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92aXotdG9vbGtpdC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlZS92aXotdHJlZS1jZWxsL3Zpei10cmVlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFvQnRDLE1BQU07SUFHSjt3QkFEb0IsSUFBSTtLQUNSOzs7O0lBRWhCLFFBQVEsTUFBSzs7OztJQUViLGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUNoQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O09BYUw7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsbUhBQW1ILENBQUM7YUFDOUg7Ozs7O21CQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndml6LXRyZWUtY2VsbCcsXG4gIHRlbXBsYXRlOiBgPGRpdj5cbiAgPG1hdC1pY29uIChjbGljayk9XCJub2RlLmlzRXhwYW5kZWQgPSAhbm9kZS5pc0V4cGFuZGVkXCJcbiAgICAgICAgICAgICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg+MFwiPlxuICAgIHt7bm9kZS5pc0V4cGFuZGVkID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gIDwvbWF0LWljb24+XG4gIDxzcGFuIGNsYXNzPSd2aXotdHJlZS1jZWxsLW5hbWUnPnt7bm9kZS5uYW1lfX08L3NwYW4+XG48L2Rpdj5cblxuPGRpdiBbY2xhc3MuaGlkZUNoaWxkcmVuXT1ub2RlLmlzRXhwYW5kZWRcbiAgICAgY2xhc3M9J3Zpei10cmVlLWNoaWxkJz5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgbm9kZSBvZiBub2RlLmNoaWxkcmVuOyBsZXQgaT1pbmRleFwiPlxuICAgIDx2aXotdHJlZS1jZWxsIFtub2RlXT1cIm5vZGVcIj48L3Zpei10cmVlLWNlbGw+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5oaWRlQ2hpbGRyZW57ZGlzcGxheTpub25lfS52aXotdHJlZS1jaGlsZHttYXJnaW4tbGVmdDoxNnB4fS52aXotdHJlZS1jZWxsLW5hbWV7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjI0cHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgVml6VHJlZUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBub2RlO1xuICBjb2xsYXBzZTogYm9vbGVhbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgdG9nZ2xlQ29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZSA9ICF0aGlzLmNvbGxhcHNlO1xuICB9XG59XG4iXX0=