import {
    GenericFilterSection,
    GenericSectionEntry,
    IGenericValuedSectionEntry,
    IItem,
    ISelectors
} from "@/src/lib/generics";


const defaultProfitValue = 1
const defaultProfitPercentageValue = 5

export class WhitelistSectionEntry extends GenericSectionEntry implements IGenericValuedSectionEntry {
    constructor(item : IItem, selectors? : ISelectors, value? : {profit? : number, profit_percentage? : number}) {
        super(item, selectors);
        this.assignedValue = { profit : value?.profit ? value.profit : defaultProfitValue, profit_percentage : value?.profit_percentage ? value.profit_percentage : defaultProfitPercentageValue}
    }
    assignedValue: { profit? : number, profit_percentage? : number };
}

export class WhitelistFilterSection extends GenericFilterSection {
    objectify(): any {
        const object : {[key : string] : any} = {}

        for (const entry of this.contents as IGenericValuedSectionEntry[]) {
            object[entry.stringify()] = entry.assignedValue
        }

        return object
    }
    stringify(): string {
        return JSON.stringify({"whitelist": this.objectify()})
    }
}