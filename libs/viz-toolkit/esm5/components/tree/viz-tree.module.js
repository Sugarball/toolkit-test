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
var VizTreeModule = /** @class */ (function () {
    function VizTreeModule() {
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
    return VizTreeModule;
}());
export { VizTreeModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdml6LXRvb2xraXQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RyZWUvdml6LXRyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Z0JBRXZFLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3FCQUN4QjtpQkFDRjs7d0JBekJEOztTQTBCYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgTWF0VHJlZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuLy8gZXhwb3J0IGNvbnN0IFZpelRyZWVNb2R1bGUgPSBNYXRUcmVlTW9kdWxlXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVml6VHJlZUNvbXBvbmVudCB9IGZyb20gJy4vdml6LXRyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IFZpelRyZWVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi92aXotdHJlZS1jZWxsL3Zpei10cmVlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBWaXpUcmVlTm9kZURlZkRpcmVjdGl2ZSB9IGZyb20gJy4vdml6LXRyZWUtbm9kZS1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IFZpelRyZWVMZWFmRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi92aXotdHJlZS1sZWFmLWRlZi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIFZpelRyZWVDb21wb25lbnQsXG4gICAgVml6VHJlZUNlbGxDb21wb25lbnQsXG4gICAgVml6VHJlZU5vZGVEZWZEaXJlY3RpdmUsXG4gICAgVml6VHJlZUxlYWZEZWZEaXJlY3RpdmVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVml6VHJlZUNvbXBvbmVudCxcbiAgICBWaXpUcmVlQ2VsbENvbXBvbmVudCxcbiAgICBWaXpUcmVlTm9kZURlZkRpcmVjdGl2ZSxcbiAgICBWaXpUcmVlTGVhZkRlZkRpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFZpelRyZWVNb2R1bGUge31cbiJdfQ==