import { OnInit, EventEmitter } from '@angular/core';
export declare class VizToolbarComponent implements OnInit {
    title: String;
    searchBtnClick: EventEmitter<{}>;
    ngOnInit(): void;
    searchOnclick(): void;
}
