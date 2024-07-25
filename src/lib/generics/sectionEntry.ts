import {IItem} from "./item";
import {ISelectors, Selectors} from "./selectors";

export interface IGenericSectionEntry {
    item : IItem,
    selectors : ISelectors,
    stringify : () => string
}

export interface IGenericValuedSectionEntry extends IGenericSectionEntry {
    assignedValue: {[key : string] : any}
}

export class GenericSectionEntry implements IGenericSectionEntry {
    constructor( item : IItem, selectors? : ISelectors) {
        this.item = item;
        this.selectors = selectors ? selectors : new Selectors()
    }
    item: IItem;
    selectors: ISelectors;

    stringify(): string {
        return `${this.item.itemId}=${this.selectors.stringify}`
    }
}
