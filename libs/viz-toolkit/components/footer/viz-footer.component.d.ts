import { OnInit } from '@angular/core';
export declare class VizFooterComponent implements OnInit {
    ngOnInit(): void;
    brands: Array<BrandType>;
    leftBrands: Array<BrandType>;
    rightBrands: Array<BrandType>;
    splitBrands(): void;
}
export interface BrandType {
    id: string;
    link: string;
    title: string;
}
