import {getSelectionValuePossibilities} from "@/src/lib/data/selectorData";

export interface ISelection {
    tag: string,
    possibleValues: any[],
    value: any | null,
    stringify: () => string,
    matches: (comparate: ISelection) => boolean
}

export class SelectorSelection implements ISelection {
    constructor(tag: string, value?: any) {
        this.tag = tag
        this.possibleValues = getSelectionValuePossibilities(tag)
        this.value = (value && this.possibleValues.includes(value)) ? value : undefined
    }

    matches(comparate: ISelection): boolean {
        return (comparate.tag === this.tag && comparate.value === this.value)
    }

    tag: string;
    value: any | null;
    possibleValues: any[];

    stringify(): string {
        if (this.value) {
            return `${this.tag}:${this.value.toString()}`
        } else {
            return `${this.tag}`
        }
    }
}