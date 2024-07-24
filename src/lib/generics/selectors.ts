import {ISelection} from "@/src/lib/generics/selection";

export interface ISelectors {
    stringify : () => string,
    selections : ISelection[],
    addSelection : (selection : ISelection) => boolean,
    removeSelection : (selection : ISelection) => boolean
}

export class Selectors implements ISelectors {
    constructor(selections? : ISelection[]) {
        this.selections = selections ? selections : [];
    }

    selections: ISelection[]

    stringify(): string {
        const tagValueArray : string[] = []
        for (const selection of this.selections) {
            tagValueArray.push(selection.stringify())
        }

        return tagValueArray.join("&");
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

}