import { OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { EventEmitter } from '@angular/core';
export interface DateType {
    id: string;
    title: string;
}
export declare class VizSelectComponent implements OnInit {
    placeholder: string;
    options: Array<DateType>;
    trigger: MatMenuTrigger;
    select: EventEmitter<DateType>;
    value: string;
    menuShown: boolean;
    selected: DateType;
    constructor();
    ngOnInit(): void;
    showMenu(): void;
    hideMenu(): void;
    selectOption(option: any): void;
    message(): string;
}
