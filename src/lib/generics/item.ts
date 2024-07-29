import {getItemDisplayables, getItemSelectables} from "@/src/lib/data/itemData";

export type TypeItemDisplayable = {
    name: string,
    details: string
}

export type TypeItemSelectables = {
    confident: boolean,
    tags: string[]
}

export interface IItem {
    itemId: string,
    itemSelectables: TypeItemSelectables,
    itemDisplayable: TypeItemDisplayable
}

export class Item implements IItem {
    constructor(itemId: string) {
        this.itemId = itemId
        this.itemDisplayable = getItemDisplayables(itemId)
        this.itemSelectables = getItemSelectables(itemId)
    }

    itemDisplayable: TypeItemDisplayable;
    itemId: string;
    itemSelectables: TypeItemSelectables;
}

export function cleanFormattedString(input: string): string {
    return input.replace(/§./g, "")
}