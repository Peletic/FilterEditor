import {GenericSectionEntry, IGenericValuedSectionEntry} from "@/src/lib/generics/sectionEntry";
import {IItem} from "@/src/lib/generics/item";
import {ISelectors} from "@/src/lib/generics/selectors";
import {GenericFilterSection} from "@/src/lib/generics/filterSection";


const defaultProfitValue = 1
const defaultProfitPercentageValue = 5

export class WhitelistSectionEntry extends GenericSectionEntry implements IGenericValuedSectionEntry {
    constructor(item: IItem, selectors?: ISelectors, value?: { profit?: number, profit_percentage?: number }) {
        super(item, selectors);
        this.assignedValue = {
            profit: value?.profit ? value.profit : defaultProfitValue,
            profit_percentage: value?.profit_percentage ? value.profit_percentage : defaultProfitPercentageValue
        }
    }

    assignedValue: { profit: number, profit_percentage: number };
}

export class WhitelistFilterSection extends GenericFilterSection {
    declare contents: WhitelistSectionEntry[]

    findEntryById(id: number): WhitelistSectionEntry | null {
        return super.findEntryById(id) as WhitelistSectionEntry;
    }

    findEntry(entryString: string): WhitelistSectionEntry | null {
        return super.findEntry(entryString) as WhitelistSectionEntry;
    }

    objectify(): any {
        const object: { [key: string]: any } = {}

        for (const entry of this.contents as IGenericValuedSectionEntry[]) {
            object[entry.stringify()] = entry.assignedValue
        }

        return object
    }

    stringify(): string {
        return JSON.stringify({"whitelist": this.objectify()})
    }

    addEntry(entry: GenericSectionEntry): boolean {
        return super.addEntry(new WhitelistSectionEntry(entry.item, entry.selectors));
    }
}