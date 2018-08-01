import { EventEmitter } from "@angular/core";
export declare type VizHeaderType = 'primary' | 'rightMenu';
export declare class VizHeaderComponent {
    title: String;
    userName: string;
    brandLink: String;
    svgIcon: String;
    type: VizHeaderType;
    rightBtnClick: EventEmitter<{}>;
    hamburgerClick: EventEmitter<{}>;
    isDrop: Boolean;
    constructor();
    rightBtnOnClick(): void;
    hamburgerOnClick(): void;
}
