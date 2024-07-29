import {IItem} from "./item";
import {ISelectors, Selectors} from "./selectors";

export interface IGenericSectionEntry {
    item: IItem,
    selectors: ISelectors,
    stringify: () => string,
    id: number
}

export interface IGenericValuedSectionEntry extends IGenericSectionEntry {
    assignedValue: { [key: string]: any }
}

export class GenericSectionEntry implements IGenericSectionEntry {
    constructor(item: IItem, selectors?: ISelectors, id?: number) {
        this.item = item;
        this.selectors = selectors ? selectors : new Selectors()
        this.id = id ? id : -1
    }

    item: IItem;
    selectors: ISelectors;
    id: number;

    stringify(): string {
        return `${this.item.itemId}=${this.selectors.stringify()}`
    }
}
