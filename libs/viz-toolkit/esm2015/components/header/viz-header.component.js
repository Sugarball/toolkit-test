/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Input, Component, Output, EventEmitter } from "@angular/core";
export class VizHeaderComponent {
    constructor() {
        this.rightBtnClick = new EventEmitter();
        this.hamburgerClick = new EventEmitter();
        this.isDrop = false;
    }
    /**
     * @return {?}
     */
    rightBtnOnClick() {
        this.rightBtnClick.emit();
        this.isDrop = !this.isDrop;
    }
    /**
     * @return {?}
     */
    hamburgerOnClick() {
        this.hamburgerClick.emit();
    }
}
VizHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'viz-header',
                template: `<header class="nav-bar nav-bar-dark">
  <div class="navbar-wrapper">
    <div class="navbar-header">
      <span class="navbar-brand">
        <a [routerLink]="brandLink">
          <img *ngIf="svgIcon" [src]="svgIcon" alt="Vizient" />
          <svg *ngIf="!svgIcon" width="113" height="28" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FF4D00" fill-rule="evenodd">
              <path d="M43.252 27.51c.435 0 .653-.23.653-.691v-2.42c0-.46-.218-.691-.653-.691l-9.067-.001c.872-2.211 6.455-7.595 8.376-10.663.713-1.139 1.075-2.02 1.075-2.593 0-.666-.32-2.152-2.574-2.152H30.417c-.435 0-.653.23-.653.692v2.382c0 .46.218.692.653.692h8.11c-.408.786-5.788 6.529-7.781 9.95-.524.9-1.249 2.329-1.249 3.42 0 1.384.82 2.076 2.459 2.076h11.296zm23.515-12.564c0-1.5-.937-3.729-3.735-3.729-1.05 0-3.792.409-4.219 4.613h7.147c.537 0 .807-.294.807-.884zm-.154 4.38H58.62c0 2.547 1.758 4.803 4.61 4.803 1.742 0 3.305-.601 4.688-1.806.463-.463.797.063.808.077 0 0 1.35 1.911 1.536 2.171.049.084.116.288-.192.596-1.82 1.82-4.137 2.728-6.955 2.728-5.813 0-8.798-4.748-8.798-10.144 0-6.481 4.153-10.105 8.875-10.105 4.065 0 7.608 3.104 7.608 7.416 0 2.843-1.397 4.264-4.188 4.264zm37.223-7.453c.436 0 .653-.231.653-.692V8.985c0-.46-.217-.686-.653-.686h-4.688V3.81c0-.435-.23-.653-.69-.653H95.46c-.461 0-.692.218-.692.653V8.3h-2.497c-.435 0-.653.225-.653.686v2.196c0 .46.218.692.653.692h2.497v9.221c0 2.744 1.024 4.252 1.537 4.841.512.59 1.816 1.89 4.457 1.883 2.355-.006 4.294-1.307 5.11-2.152.323-.334.268-.524.092-.754l-1.513-1.974c-.215-.298-.586-.28-.807-.077-.526.433-1.646 1.394-3.16.831-1.101-.41-1.336-1.638-1.336-2.56v-9.26h4.688zM73.759 26.857c0 .436.23.654.692.654h2.997c.461 0 .692-.218.692-.654V12.372c.895-.608 3.692-1.55 5.726-.355 1.233.725 1.698 2.702 1.69 5.004l-.001 9.836c0 .436.23.654.691.654h2.998c.46 0 .691-.218.691-.654V16.714c0-5.994-2.74-9.023-8.222-9.068-2.655-.022-5.596.996-7.147 2.344-.534.465-.806 1.025-.806 1.69v15.177zM50.437 8.3H47.44c-.461 0-.691.218-.691.654v17.904c0 .436.23.654.691.654h2.997c.461 0 .692-.218.692-.654V8.953c0-.436-.23-.654-.692-.654zm-25.013 0h-2.997c-.46 0-.691.218-.691.654v17.904c0 .436.23.654.691.654h2.997c.461 0 .692-.218.692-.654V8.953c0-.436-.23-.654-.692-.654zM48.94 0a2.651 2.651 0 1 0 0 5.302 2.651 2.651 0 0 0 0-5.302zM23.926 0a2.651 2.651 0 1 0 0 5.302 2.651 2.651 0 0 0 0-5.302zM7.41 26.704C2.347 20.732.035 9.07.01 8.933c-.051-.283.074-.634.6-.634h3.265c.333 0 .543.166.615.5 1.312 6.124 3.831 11.99 5.033 13.64 1.202-1.65 3.72-7.516 5.034-13.64.071-.334.282-.5.614-.5h3.266c.525 0 .65.35.6.634-.024.138-2.336 11.8-7.4 17.77-.565.666-1.239 1-2.114 1-.875 0-1.549-.334-2.113-1zM109.73 25.744h.367c.148 0 .26-.023.333-.069.075-.046.112-.125.112-.238v-.046c0-.132-.035-.223-.104-.272a.48.48 0 0 0-.28-.073h-.429v.698zm.857 1.08l-.46-.797h-.398v.797h-.314V24.77h.782c.21 0 .373.05.49.15.117.1.176.252.176.456v.061a.552.552 0 0 1-.103.353.51.51 0 0 1-.288.176l.506.858h-.39zm-.475-2.985a1.99 1.99 0 1 0-.002 3.98 1.99 1.99 0 0 0 .002-3.98zm1.624 1.989c0 .897-.726 1.623-1.624 1.623a1.623 1.623 0 1 1 0-3.247c.898 0 1.624.727 1.624 1.624z"/>
            </g>
          </svg>
          <span class="page-name hidden-xs hidden-sm">{{title}}</span>
        </a>
      </span>
    </div>
    <div class="navbar-right">
      <div class="navbar-welcome" (click)='rightBtnOnClick()' *ngIf="type === 'primary'">
        <span>Welcome, {{userName}}</span>
        <mat-icon>{{isDrop? "arrow_drop_up":"arrow_drop_down"}}</mat-icon>
      </div>
      <div class="navbar-hamburger" (click)='hamburgerOnClick()'>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
    </div>
    <div class="navbar-Menu" *ngIf="type === 'rightMenu'">
      <ng-content></ng-content>
    </div>
  </div>
</header>`,
                styles: [`:host .nav-bar{background:#fff;z-index:10;box-shadow:0 1px 0 0 #e9e9e9;padding:0 15px}:host .nav-bar .navbar-wrapper{display:flex;height:72px;flex-direction:row;justify-content:space-between;align-items:center}:host .nav-bar .navbar-wrapper .navbar-header{display:inline-flex}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a{display:inline-flex;vertical-align:middle;text-decoration:none}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a span{line-height:24px}@media (max-width:543px){:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a .hidden-xs{display:none!important}}@media (min-width:544px) and (max-width:767px){:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand a .hidden-sm{display:none!important}}:host .nav-bar .navbar-wrapper .navbar-header .navbar-brand .page-name{border-left:1px solid #e5e5e5;padding-left:15px;margin-left:30px;padding-top:2px;font-size:18px;color:#ff4e00;font-weight:400}@media (max-width:991px){:host .nav-bar .navbar-wrapper .navbar-Menu{display:none}}@media (min-width:768px){:host .nav-bar{padding:0 40px}:host .nav-bar .navbar-right{margin-right:0}}:host .nav-bar .navbar-right{display:flex;flex-direction:row}:host .nav-bar .navbar-right .navbar-welcome{font-size:16px;color:#ff4e00;cursor:pointer;display:flex}@media (max-width:991px){:host .nav-bar .navbar-right .navbar-welcome{display:none}}:host .nav-bar .navbar-right .navbar-welcome span{margin-right:10px;display:inline-block;line-height:24px;font-weight:400}:host .nav-bar .navbar-right .navbar-welcome .mat-icon{display:inline-block}:host .nav-bar .navbar-right .navbar-hamburger{background-color:transparent;cursor:pointer}@media (min-width:991px){:host .nav-bar .navbar-right .navbar-hamburger{display:none}}:host .nav-bar .navbar-right .navbar-hamburger .icon-bar{height:2px;width:20px;background-color:#ff4e00;display:block;margin-top:3px}`]
            },] },
];
/** @nocollapse */
VizHeaderComponent.ctorParameters = () => [];
VizHeaderComponent.propDecorators = {
    title: [{ type: Input }],
    userName: [{ type: Input }],
    brandLink: [{ type: Input }],
    svgIcon: [{ type: Input }],
    type: [{ type: Input }],
    rightBtnClick: [{ type: Output }],
    hamburgerClick: [{ type: Output }]
};
function VizHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    VizHeaderComponent.prototype.title;
    /** @type {?} */
    VizHeaderComponent.prototype.userName;
    /** @type {?} */
    VizHeaderComponent.prototype.brandLink;
    /** @type {?} */
    VizHeaderComponent.prototype.svgIcon;
    /** @type {?} */
    VizHeaderComponent.prototype.type;
    /** @type {?} */
    VizHeaderComponent.prototype.rightBtnClick;
    /** @type {?} */
    VizHeaderComponent.prototype.hamburgerClick;
    /** @type {?} */
    VizHeaderComponent.prototype.isDrop;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92aXotdG9vbGtpdC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL3Zpei1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBdUN2RSxNQUFNO0lBV0o7NkJBSjBCLElBQUksWUFBWSxFQUFFOzhCQUNqQixJQUFJLFlBQVksRUFBRTtzQkFDM0IsS0FBSztLQUVQOzs7O0lBRWhCLGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0tBQzNCOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtLQUMzQjs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUE4QkY7Z0JBQ1IsTUFBTSxFQUFFLENBQUMsZzJEQUFnMkQsQ0FBQzthQUMzMkQ7Ozs7O29CQUlFLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzs0QkFDTCxNQUFNOzZCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5leHBvcnQgdHlwZSBWaXpIZWFkZXJUeXBlID0gJ3ByaW1hcnknIHwgJ3JpZ2h0TWVudSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Zpei1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxoZWFkZXIgY2xhc3M9XCJuYXYtYmFyIG5hdi1iYXItZGFya1wiPlxuICA8ZGl2IGNsYXNzPVwibmF2YmFyLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiYnJhbmRMaW5rXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cInN2Z0ljb25cIiBbc3JjXT1cInN2Z0ljb25cIiBhbHQ9XCJWaXppZW50XCIgLz5cbiAgICAgICAgICA8c3ZnICpuZ0lmPVwiIXN2Z0ljb25cIiB3aWR0aD1cIjExM1wiIGhlaWdodD1cIjI4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPGcgZmlsbD1cIiNGRjREMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDMuMjUyIDI3LjUxYy40MzUgMCAuNjUzLS4yMy42NTMtLjY5MXYtMi40MmMwLS40Ni0uMjE4LS42OTEtLjY1My0uNjkxbC05LjA2Ny0uMDAxYy44NzItMi4yMTEgNi40NTUtNy41OTUgOC4zNzYtMTAuNjYzLjcxMy0xLjEzOSAxLjA3NS0yLjAyIDEuMDc1LTIuNTkzIDAtLjY2Ni0uMzItMi4xNTItMi41NzQtMi4xNTJIMzAuNDE3Yy0uNDM1IDAtLjY1My4yMy0uNjUzLjY5MnYyLjM4MmMwIC40Ni4yMTguNjkyLjY1My42OTJoOC4xMWMtLjQwOC43ODYtNS43ODggNi41MjktNy43ODEgOS45NS0uNTI0LjktMS4yNDkgMi4zMjktMS4yNDkgMy40MiAwIDEuMzg0LjgyIDIuMDc2IDIuNDU5IDIuMDc2aDExLjI5NnptMjMuNTE1LTEyLjU2NGMwLTEuNS0uOTM3LTMuNzI5LTMuNzM1LTMuNzI5LTEuMDUgMC0zLjc5Mi40MDktNC4yMTkgNC42MTNoNy4xNDdjLjUzNyAwIC44MDctLjI5NC44MDctLjg4NHptLS4xNTQgNC4zOEg1OC42MmMwIDIuNTQ3IDEuNzU4IDQuODAzIDQuNjEgNC44MDMgMS43NDIgMCAzLjMwNS0uNjAxIDQuNjg4LTEuODA2LjQ2My0uNDYzLjc5Ny4wNjMuODA4LjA3NyAwIDAgMS4zNSAxLjkxMSAxLjUzNiAyLjE3MS4wNDkuMDg0LjExNi4yODgtLjE5Mi41OTYtMS44MiAxLjgyLTQuMTM3IDIuNzI4LTYuOTU1IDIuNzI4LTUuODEzIDAtOC43OTgtNC43NDgtOC43OTgtMTAuMTQ0IDAtNi40ODEgNC4xNTMtMTAuMTA1IDguODc1LTEwLjEwNSA0LjA2NSAwIDcuNjA4IDMuMTA0IDcuNjA4IDcuNDE2IDAgMi44NDMtMS4zOTcgNC4yNjQtNC4xODggNC4yNjR6bTM3LjIyMy03LjQ1M2MuNDM2IDAgLjY1My0uMjMxLjY1My0uNjkyVjguOTg1YzAtLjQ2LS4yMTctLjY4Ni0uNjUzLS42ODZoLTQuNjg4VjMuODFjMC0uNDM1LS4yMy0uNjUzLS42OS0uNjUzSDk1LjQ2Yy0uNDYxIDAtLjY5Mi4yMTgtLjY5Mi42NTNWOC4zaC0yLjQ5N2MtLjQzNSAwLS42NTMuMjI1LS42NTMuNjg2djIuMTk2YzAgLjQ2LjIxOC42OTIuNjUzLjY5MmgyLjQ5N3Y5LjIyMWMwIDIuNzQ0IDEuMDI0IDQuMjUyIDEuNTM3IDQuODQxLjUxMi41OSAxLjgxNiAxLjg5IDQuNDU3IDEuODgzIDIuMzU1LS4wMDYgNC4yOTQtMS4zMDcgNS4xMS0yLjE1Mi4zMjMtLjMzNC4yNjgtLjUyNC4wOTItLjc1NGwtMS41MTMtMS45NzRjLS4yMTUtLjI5OC0uNTg2LS4yOC0uODA3LS4wNzctLjUyNi40MzMtMS42NDYgMS4zOTQtMy4xNi44MzEtMS4xMDEtLjQxLTEuMzM2LTEuNjM4LTEuMzM2LTIuNTZ2LTkuMjZoNC42ODh6TTczLjc1OSAyNi44NTdjMCAuNDM2LjIzLjY1NC42OTIuNjU0aDIuOTk3Yy40NjEgMCAuNjkyLS4yMTguNjkyLS42NTRWMTIuMzcyYy44OTUtLjYwOCAzLjY5Mi0xLjU1IDUuNzI2LS4zNTUgMS4yMzMuNzI1IDEuNjk4IDIuNzAyIDEuNjkgNS4wMDRsLS4wMDEgOS44MzZjMCAuNDM2LjIzLjY1NC42OTEuNjU0aDIuOTk4Yy40NiAwIC42OTEtLjIxOC42OTEtLjY1NFYxNi43MTRjMC01Ljk5NC0yLjc0LTkuMDIzLTguMjIyLTkuMDY4LTIuNjU1LS4wMjItNS41OTYuOTk2LTcuMTQ3IDIuMzQ0LS41MzQuNDY1LS44MDYgMS4wMjUtLjgwNiAxLjY5djE1LjE3N3pNNTAuNDM3IDguM0g0Ny40NGMtLjQ2MSAwLS42OTEuMjE4LS42OTEuNjU0djE3LjkwNGMwIC40MzYuMjMuNjU0LjY5MS42NTRoMi45OTdjLjQ2MSAwIC42OTItLjIxOC42OTItLjY1NFY4Ljk1M2MwLS40MzYtLjIzLS42NTQtLjY5Mi0uNjU0em0tMjUuMDEzIDBoLTIuOTk3Yy0uNDYgMC0uNjkxLjIxOC0uNjkxLjY1NHYxNy45MDRjMCAuNDM2LjIzLjY1NC42OTEuNjU0aDIuOTk3Yy40NjEgMCAuNjkyLS4yMTguNjkyLS42NTRWOC45NTNjMC0uNDM2LS4yMy0uNjU0LS42OTItLjY1NHpNNDguOTQgMGEyLjY1MSAyLjY1MSAwIDEgMCAwIDUuMzAyIDIuNjUxIDIuNjUxIDAgMCAwIDAtNS4zMDJ6TTIzLjkyNiAwYTIuNjUxIDIuNjUxIDAgMSAwIDAgNS4zMDIgMi42NTEgMi42NTEgMCAwIDAgMC01LjMwMnpNNy40MSAyNi43MDRDMi4zNDcgMjAuNzMyLjAzNSA5LjA3LjAxIDguOTMzYy0uMDUxLS4yODMuMDc0LS42MzQuNi0uNjM0aDMuMjY1Yy4zMzMgMCAuNTQzLjE2Ni42MTUuNSAxLjMxMiA2LjEyNCAzLjgzMSAxMS45OSA1LjAzMyAxMy42NCAxLjIwMi0xLjY1IDMuNzItNy41MTYgNS4wMzQtMTMuNjQuMDcxLS4zMzQuMjgyLS41LjYxNC0uNWgzLjI2NmMuNTI1IDAgLjY1LjM1LjYuNjM0LS4wMjQuMTM4LTIuMzM2IDExLjgtNy40IDE3Ljc3LS41NjUuNjY2LTEuMjM5IDEtMi4xMTQgMS0uODc1IDAtMS41NDktLjMzNC0yLjExMy0xek0xMDkuNzMgMjUuNzQ0aC4zNjdjLjE0OCAwIC4yNi0uMDIzLjMzMy0uMDY5LjA3NS0uMDQ2LjExMi0uMTI1LjExMi0uMjM4di0uMDQ2YzAtLjEzMi0uMDM1LS4yMjMtLjEwNC0uMjcyYS40OC40OCAwIDAgMC0uMjgtLjA3M2gtLjQyOXYuNjk4em0uODU3IDEuMDhsLS40Ni0uNzk3aC0uMzk4di43OTdoLS4zMTRWMjQuNzdoLjc4MmMuMjEgMCAuMzczLjA1LjQ5LjE1LjExNy4xLjE3Ni4yNTIuMTc2LjQ1NnYuMDYxYS41NTIuNTUyIDAgMCAxLS4xMDMuMzUzLjUxLjUxIDAgMCAxLS4yODguMTc2bC41MDYuODU4aC0uMzl6bS0uNDc1LTIuOTg1YTEuOTkgMS45OSAwIDEgMC0uMDAyIDMuOTggMS45OSAxLjk5IDAgMCAwIC4wMDItMy45OHptMS42MjQgMS45ODljMCAuODk3LS43MjYgMS42MjMtMS42MjQgMS42MjNhMS42MjMgMS42MjMgMCAxIDEgMC0zLjI0N2MuODk4IDAgMS42MjQuNzI3IDEuNjI0IDEuNjI0elwiLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2UtbmFtZSBoaWRkZW4teHMgaGlkZGVuLXNtXCI+e3t0aXRsZX19PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1yaWdodFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci13ZWxjb21lXCIgKGNsaWNrKT0ncmlnaHRCdG5PbkNsaWNrKCknICpuZ0lmPVwidHlwZSA9PT0gJ3ByaW1hcnknXCI+XG4gICAgICAgIDxzcGFuPldlbGNvbWUsIHt7dXNlck5hbWV9fTwvc3Bhbj5cbiAgICAgICAgPG1hdC1pY29uPnt7aXNEcm9wPyBcImFycm93X2Ryb3BfdXBcIjpcImFycm93X2Ryb3BfZG93blwifX08L21hdC1pY29uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhhbWJ1cmdlclwiIChjbGljayk9J2hhbWJ1cmdlck9uQ2xpY2soKSc+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLU1lbnVcIiAqbmdJZj1cInR5cGUgPT09ICdyaWdodE1lbnUnXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9oZWFkZXI+YCxcbiAgc3R5bGVzOiBbYDpob3N0IC5uYXYtYmFye2JhY2tncm91bmQ6I2ZmZjt6LWluZGV4OjEwO2JveC1zaGFkb3c6MCAxcHggMCAwICNlOWU5ZTk7cGFkZGluZzowIDE1cHh9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVye2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NzJweDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlcntkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGF7ZGlzcGxheTppbmxpbmUtZmxleDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Omhvc3QgLm5hdi1iYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgYSBzcGFue2xpbmUtaGVpZ2h0OjI0cHh9QG1lZGlhIChtYXgtd2lkdGg6NTQzcHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGEgLmhpZGRlbi14c3tkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo1NDRweCkgYW5kIChtYXgtd2lkdGg6NzY3cHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGEgLmhpZGRlbi1zbXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX06aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCAucGFnZS1uYW1le2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZTVlNWU1O3BhZGRpbmctbGVmdDoxNXB4O21hcmdpbi1sZWZ0OjMwcHg7cGFkZGluZy10b3A6MnB4O2ZvbnQtc2l6ZToxOHB4O2NvbG9yOiNmZjRlMDA7Zm9udC13ZWlnaHQ6NDAwfUBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KXs6aG9zdCAubmF2LWJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1NZW51e2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpezpob3N0IC5uYXYtYmFye3BhZGRpbmc6MCA0MHB4fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHR7bWFyZ2luLXJpZ2h0OjB9fTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItd2VsY29tZXtmb250LXNpemU6MTZweDtjb2xvcjojZmY0ZTAwO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleH1AbWVkaWEgKG1heC13aWR0aDo5OTFweCl7Omhvc3QgLm5hdi1iYXIgLm5hdmJhci1yaWdodCAubmF2YmFyLXdlbGNvbWV7ZGlzcGxheTpub25lfX06aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItd2VsY29tZSBzcGFue21hcmdpbi1yaWdodDoxMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OjI0cHg7Zm9udC13ZWlnaHQ6NDAwfTpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci13ZWxjb21lIC5tYXQtaWNvbntkaXNwbGF5OmlubGluZS1ibG9ja306aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItaGFtYnVyZ2Vye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXJ9QG1lZGlhIChtaW4td2lkdGg6OTkxcHgpezpob3N0IC5uYXYtYmFyIC5uYXZiYXItcmlnaHQgLm5hdmJhci1oYW1idXJnZXJ7ZGlzcGxheTpub25lfX06aG9zdCAubmF2LWJhciAubmF2YmFyLXJpZ2h0IC5uYXZiYXItaGFtYnVyZ2VyIC5pY29uLWJhcntoZWlnaHQ6MnB4O3dpZHRoOjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmY0ZTAwO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDozcHh9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXpIZWFkZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXJOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJyYW5kTGluazogU3RyaW5nO1xuICBASW5wdXQoKSBzdmdJY29uOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IFZpekhlYWRlclR5cGU7XG4gIEBPdXRwdXQoKSByaWdodEJ0bkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFtYnVyZ2VyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGlzRHJvcDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICByaWdodEJ0bk9uQ2xpY2soKSB7XG4gICAgdGhpcy5yaWdodEJ0bkNsaWNrLmVtaXQoKVxuICAgIHRoaXMuaXNEcm9wID0gIXRoaXMuaXNEcm9wXG4gIH1cblxuICBoYW1idXJnZXJPbkNsaWNrKCkge1xuICAgIHRoaXMuaGFtYnVyZ2VyQ2xpY2suZW1pdCgpXG4gIH1cbn1cbiJdfQ==