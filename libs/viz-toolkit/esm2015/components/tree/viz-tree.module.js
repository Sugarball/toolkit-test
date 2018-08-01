/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// import { MatTreeModule } from "@angular/material";
// export const VizTreeModule = MatTreeModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizTreeComponent } from './viz-tree.component';
import { VizTreeCellComponent } from './viz-tree-cell/viz-tree-cell.component';
import { MatIconModule } from '@angular/material';
import { VizTreeNodeDefDirective } from './viz-tree-node-def.directive';
import { VizTreeLeafDefDirective } from './viz-tree-leaf-def.directive';
export class VizTreeModule {
}
VizTreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatIconModule],
                exports: [
                    VizTreeComponent,
                    VizTreeCellComponent,
                    VizTreeNodeDefDirective,
                    VizTreeLeafDefDirective
                ],
                declarations: [
                    VizTreeComponent,
                    VizTreeCellComponent,
                    VizTreeNodeDefDirective,
                    VizTreeLeafDefDirective
                ]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdml6LXRvb2xraXQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RyZWUvdml6LXRyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWlCeEUsTUFBTTs7O1lBZkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2Qix1QkFBdUI7aUJBQ3hCO2dCQUNELFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2Qix1QkFBdUI7aUJBQ3hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBNYXRUcmVlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG4vLyBleHBvcnQgY29uc3QgVml6VHJlZU1vZHVsZSA9IE1hdFRyZWVNb2R1bGVcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBWaXpUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi92aXotdHJlZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVml6VHJlZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL3Zpei10cmVlLWNlbGwvdml6LXRyZWUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFZpelRyZWVOb2RlRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi92aXotdHJlZS1ub2RlLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVml6VHJlZUxlYWZEZWZEaXJlY3RpdmUgfSBmcm9tICcuL3Zpei10cmVlLWxlYWYtZGVmLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgVml6VHJlZUNvbXBvbmVudCxcbiAgICBWaXpUcmVlQ2VsbENvbXBvbmVudCxcbiAgICBWaXpUcmVlTm9kZURlZkRpcmVjdGl2ZSxcbiAgICBWaXpUcmVlTGVhZkRlZkRpcmVjdGl2ZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWaXpUcmVlQ29tcG9uZW50LFxuICAgIFZpelRyZWVDZWxsQ29tcG9uZW50LFxuICAgIFZpelRyZWVOb2RlRGVmRGlyZWN0aXZlLFxuICAgIFZpelRyZWVMZWFmRGVmRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVml6VHJlZU1vZHVsZSB7fVxuIl19