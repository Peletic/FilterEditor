import {GenericSectionEntry, IGenericValuedSectionEntry} from "@/src/lib/generics/sectionEntry";
import {IItem} from "@/src/lib/generics/item";
import {ISelectors} from "@/src/lib/generics/selectors";
import {GenericFilterSection} from "@/src/lib/generics/filterSection";


const defaultOverwritePrice = false
const defaultScaleFactor = 1.0

export class UserFlipFinderSectionEntry extends GenericSectionEntry implements IGenericValuedSectionEntry {
    constructor(item: IItem, selectors?: ISelectors, value?: { scaleFactor?: number, overwritePrice?: boolean }) {
        super(item, selectors);
        this.assignedValue = {
            scaleFactor: (value && value.scaleFactor) ? value.scaleFactor : defaultScaleFactor,
            overwritePrice: (value && value.overwritePrice) ? value.overwritePrice : defaultOverwritePrice
        }
    }

    assignedValue: { scaleFactor?: number, overwritePrice?: boolean };
}

export class UserFlipFinderFilterSection extends GenericFilterSection {
    objectify(): any {
        const object: { [key: string]: any } = {}

        for (const entry of this.contents as IGenericValuedSectionEntry[]) {
            object[entry.stringify()] = entry.assignedValue
        }

        return object
    }

    stringify(): string {
        return JSON.stringify({"user_flip_finder": this.objectify()})
    }
}