import { OnInit, TemplateRef, AfterViewInit } from '@angular/core';
export declare class VizTreeComponent implements OnInit, AfterViewInit {
    tree: any;
    vizTreeNodeTemplate: TemplateRef<any>;
    vizTreeLeafTemplate: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
