/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, TemplateRef, ContentChild, Input } from '@angular/core';
import { VizTreeNodeDefDirective } from './viz-tree-node-def.directive';
import { VizTreeLeafDefDirective } from './viz-tree-leaf-def.directive';
export class VizTreeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.vizTreeNodeTemplate);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        console.log(this.vizTreeNodeTemplate);
    }
}
VizTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-tree',
                template: `<!-- <div *ngFor="let node of tree template: itemTemplate">
  <ng-template *ngIf="node.children.length==0">
    <ng-template *ngTemplateOutlet="itemTemplate context: { $implicit: node }"></ng-template>ƒƒ
  </ng-template>
  <ng-template *ngIf="node.children.length>0">
    <button>{{node.name}}</button>
    <div *ngFor="let subNode of node.children template: itemTemplate">
      <ng-template *ngTemplateOutlet="itemTemplate context: { $implicit: subNode }"></ng-template>
    </div>
  </ng-template>
</div> -->


<div>
  <ng-template #recursiveList let-tree>
    <div class="viz-tree-cell" *ngFor="let node of tree">
      <div class="viz-tree-cell-node">
        <!-- <mat-icon (click)="node.isExpanded = !node.isExpanded"
                  *ngIf="node.children.length>0">
          {{node.isExpanded ? 'expand_more' : 'chevron_right'}}
        </mat-icon> -->

        <ng-container *ngIf="node.children.length>0">
          <ng-container *ngTemplateOutlet="vizTreeNodeTemplate; context: { $implicit: node }"></ng-container>
        </ng-container>
        <ng-container *ngIf="node.children.length==0">
          <div [class.viz-tree-cell-node-content]="!(node.children.length>0)">
            <ng-container *ngTemplateOutlet="vizTreeLeafTemplate; context: { $implicit: node }"></ng-container>
          </div>
        </ng-container>

      </div>

      <div *ngIf="node.children.length > 0" [class.hideChildren]=!node.isExpanded class="viz-tree-cell-child">
        <ng-container *ngTemplateOutlet="recursiveList; context:{ $implicit: node.children }"></ng-container>
      </div>

    </div>
  </ng-template>
  <ng-container *ngTemplateOutlet="recursiveList; context:{ $implicit: tree }"></ng-container>
</div>





<!-- <viz-tree-cell *ngFor="let node of tree; let i=index" [node]="node"></viz-tree-cell> -->`,
                styles: [`.hideChildren{display:none}.viz-tree-cell-node{margin-bottom:10px}.viz-tree-cell-child{margin-left:40px}.viz-tree-cell-node-content{margin-left:40px;margin-bottom:16px}.viz-tree-cell-node-content-hidden{display:none}`]
            },] },
];
/** @nocollapse */
VizTreeComponent.ctorParameters = () => [];
VizTreeComponent.propDecorators = {
    tree: [{ type: Input }],
    vizTreeNodeTemplate: [{ type: ContentChild, args: [VizTreeNodeDefDirective, { read: TemplateRef },] }],
    vizTreeLeafTemplate: [{ type: ContentChild, args: [VizTreeLeafDefDirective, { read: TemplateRef },] }]
};
function VizTreeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizTreeComponent.prototype.tree;
    /** @type {?} */
    VizTreeComponent.prototype.vizTreeNodeTemplate;
    /** @type {?} */
    VizTreeComponent.prototype.vizTreeLeafTemplate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdml6LXRvb2xraXQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RyZWUvdml6LXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBSVosS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBcUR4RSxNQUFNO0lBTUosaUJBQWdCOzs7O0lBRWhCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQ3ZDOzs7O0lBQ0QsZUFBZTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDdkM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4RkE4Q2tGO2dCQUM1RixNQUFNLEVBQUUsQ0FBQywwTkFBME4sQ0FBQzthQUNyTzs7Ozs7bUJBRUUsS0FBSztrQ0FDTCxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2tDQUUzRCxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVml6VHJlZU5vZGVEZWZEaXJlY3RpdmUgfSBmcm9tICcuL3Zpei10cmVlLW5vZGUtZGVmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBWaXpUcmVlTGVhZkRlZkRpcmVjdGl2ZSB9IGZyb20gJy4vdml6LXRyZWUtbGVhZi1kZWYuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndml6LXRyZWUnLFxuICB0ZW1wbGF0ZTogYDwhLS0gPGRpdiAqbmdGb3I9XCJsZXQgbm9kZSBvZiB0cmVlIHRlbXBsYXRlOiBpdGVtVGVtcGxhdGVcIj5cbiAgPG5nLXRlbXBsYXRlICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg9PTBcIj5cbiAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGUgY29udGV4dDogeyAkaW1wbGljaXQ6IG5vZGUgfVwiPjwvbmctdGVtcGxhdGU+xpLGklxuICA8L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgKm5nSWY9XCJub2RlLmNoaWxkcmVuLmxlbmd0aD4wXCI+XG4gICAgPGJ1dHRvbj57e25vZGUubmFtZX19PC9idXR0b24+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgc3ViTm9kZSBvZiBub2RlLmNoaWxkcmVuIHRlbXBsYXRlOiBpdGVtVGVtcGxhdGVcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZSBjb250ZXh0OiB7ICRpbXBsaWNpdDogc3ViTm9kZSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PiAtLT5cblxuXG48ZGl2PlxuICA8bmctdGVtcGxhdGUgI3JlY3Vyc2l2ZUxpc3QgbGV0LXRyZWU+XG4gICAgPGRpdiBjbGFzcz1cInZpei10cmVlLWNlbGxcIiAqbmdGb3I9XCJsZXQgbm9kZSBvZiB0cmVlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidml6LXRyZWUtY2VsbC1ub2RlXCI+XG4gICAgICAgIDwhLS0gPG1hdC1pY29uIChjbGljayk9XCJub2RlLmlzRXhwYW5kZWQgPSAhbm9kZS5pc0V4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwibm9kZS5jaGlsZHJlbi5sZW5ndGg+MFwiPlxuICAgICAgICAgIHt7bm9kZS5pc0V4cGFuZGVkID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICAgIDwvbWF0LWljb24+IC0tPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJub2RlLmNoaWxkcmVuLmxlbmd0aD4wXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInZpelRyZWVOb2RlVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBub2RlIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJub2RlLmNoaWxkcmVuLmxlbmd0aD09MFwiPlxuICAgICAgICAgIDxkaXYgW2NsYXNzLnZpei10cmVlLWNlbGwtbm9kZS1jb250ZW50XT1cIiEobm9kZS5jaGlsZHJlbi5sZW5ndGg+MClcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ2aXpUcmVlTGVhZlRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogbm9kZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiAqbmdJZj1cIm5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMFwiIFtjbGFzcy5oaWRlQ2hpbGRyZW5dPSFub2RlLmlzRXhwYW5kZWQgY2xhc3M9XCJ2aXotdHJlZS1jZWxsLWNoaWxkXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyZWN1cnNpdmVMaXN0OyBjb250ZXh0OnsgJGltcGxpY2l0OiBub2RlLmNoaWxkcmVuIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyZWN1cnNpdmVMaXN0OyBjb250ZXh0OnsgJGltcGxpY2l0OiB0cmVlIH1cIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG5cblxuXG5cbjwhLS0gPHZpei10cmVlLWNlbGwgKm5nRm9yPVwibGV0IG5vZGUgb2YgdHJlZTsgbGV0IGk9aW5kZXhcIiBbbm9kZV09XCJub2RlXCI+PC92aXotdHJlZS1jZWxsPiAtLT5gLFxuICBzdHlsZXM6IFtgLmhpZGVDaGlsZHJlbntkaXNwbGF5Om5vbmV9LnZpei10cmVlLWNlbGwtbm9kZXttYXJnaW4tYm90dG9tOjEwcHh9LnZpei10cmVlLWNlbGwtY2hpbGR7bWFyZ2luLWxlZnQ6NDBweH0udml6LXRyZWUtY2VsbC1ub2RlLWNvbnRlbnR7bWFyZ2luLWxlZnQ6NDBweDttYXJnaW4tYm90dG9tOjE2cHh9LnZpei10cmVlLWNlbGwtbm9kZS1jb250ZW50LWhpZGRlbntkaXNwbGF5Om5vbmV9YF1cbn0pXG5leHBvcnQgY2xhc3MgVml6VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHRyZWU6IGFueTtcbiAgQENvbnRlbnRDaGlsZChWaXpUcmVlTm9kZURlZkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICB2aXpUcmVlTm9kZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKFZpelRyZWVMZWFmRGVmRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHZpelRyZWVMZWFmVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnZpelRyZWVOb2RlVGVtcGxhdGUpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnZpelRyZWVOb2RlVGVtcGxhdGUpO1xuICB9XG59XG4iXX0=