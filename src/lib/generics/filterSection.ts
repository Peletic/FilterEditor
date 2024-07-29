import {IGenericSectionEntry} from "@/src/lib/generics/sectionEntry";

export interface IFilterSection {
    contents: IGenericSectionEntry[],
    objectify: () => any,
    stringify: () => string,
    removeEntry: (entry: IGenericSectionEntry) => boolean,
    addEntry: (entry: IGenericSectionEntry) => boolean,
    findEntry: (entryString: string) => IGenericSectionEntry | null,
    findEntryById: (id: number) => IGenericSectionEntry | null,
    nextId: number
}

export class GenericFilterSection implements IFilterSection {
    constructor(contents?: IGenericSectionEntry[]) {
        this.contents = contents ? contents : []
        this.nextId = 1
    }

    contents: IGenericSectionEntry[];
    nextId: number;

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

    addEntry(entry: IGenericSectionEntry): boolean {
        for (const iteration of this.contents) {
            if (iteration.stringify() === entry.stringify()) return false
        }
        entry.id = this.nextId
        this.nextId += 1
        this.contents.push(entry)
        return true;
    }

    findEntry(entryString: string): IGenericSectionEntry | null {
        for (const entry of this.contents) {
            if (entry.stringify() === entryString) return entry
        }
        return null
    }

    findEntryById(id: number): IGenericSectionEntry | null {
        for (const entry of this.contents) {
            if (entry.id === id) return entry
        }
        return null
    }
}