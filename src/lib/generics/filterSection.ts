import {IGenericSectionEntry} from "@/src/lib/generics/sectionEntry";

export interface IFilterSection {
    contents: IGenericSectionEntry[],
    objectify: () => any,
    stringify: () => string,
    removeEntry: (entry : IGenericSectionEntry) => boolean
}

export class GenericFilterSection implements IFilterSection {
    constructor(contents?: IGenericSectionEntry[]) {
        this.contents = contents ? contents : []
    }

    contents: IGenericSectionEntry[];

    objectify(): any {
        return this.contents.map(val => val.stringify)
    }

    stringify(): string {
        return JSON.stringify({"GenericHeader": this.objectify()})
    }

    removeEntry(entry: IGenericSectionEntry): boolean {
        const index = this.contents.findIndex((val) => val.stringify() === entry.stringify())
        if (index !== -1) {
            this.contents.splice(index, 1)
            return true
        }
        return false;
    }
}