import {ISelection} from "@/src/lib/generics/selection";

export interface ISelectors {
    stringify: () => string,
    selections: ISelection[],
    addSelection: (selection: ISelection) => boolean,
    removeSelection: (selection: ISelection) => boolean,
    removeSelectionByTag: (tag: string) => boolean,
    editSelectionByTag: (tag: string, value: any) => boolean
}

export class Selectors implements ISelectors {
    constructor(...selections: ISelection[]) {
        this.selections = selections ? selections : [];
    }

    selections: ISelection[]

    stringify(): string {
        const tagValueArray: string[] = []
        for (const selection of this.selections) {
            tagValueArray.push(selection.stringify())
        }

        return tagValueArray.length > 0 ? tagValueArray.join("&") : "global:true";
    }

    addSelection(selection: ISelection): boolean {
        for (const iteration of this.selections) {
            if (iteration.tag === selection.tag) return false
        }
        this.selections.push(selection)
        return true;
    }

    removeSelection(selection: ISelection): boolean {
        const newSelections = this.selections.splice(this.selections.indexOf(selection), 1)
        if (this.selections !== newSelections) {
            this.selections = newSelections;
            return true;
        }
        return false;
    }

    removeSelectionByTag(tag: string): boolean {
        const selection = this.selections.findIndex((selection) => selection.tag === tag)
        if (selection !== -1) {
            this.selections.splice(selection, 1)
            return true;
        }
        return false;
    }

    editSelectionByTag(tag: string, value: any): boolean {
        const selection = this.selections.findIndex((selection) => selection.tag === tag)
        if (selection !== -1) {
            this.selections[selection].value = value
            return true;
        }
        return false;
    }
}