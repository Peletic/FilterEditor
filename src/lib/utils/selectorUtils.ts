import {selectorDataSet} from "@/src/lib/data/parsing/selectors";
import {similarityOf} from "@/src/lib/utils/stringCompare";
import {SelectorSelection} from "@/src/lib/generics/selection";

export function populateSelection(name : string, loose : boolean = false, val? : any) {
    for (const possibleSelector of Object.keys(selectorDataSet)) {
        const distanceBetween = similarityOf(name, possibleSelector);
        const selector = selectorDataSet[possibleSelector];
        if (distanceBetween == 1) {
            if (val) {
                return new SelectorSelection(selector.tag, val)
            } else {
                return new SelectorSelection(selector.tag)
            }
        } else if (loose && distanceBetween <= 1.1 && distanceBetween >= 0.9) {
            if (val) {
                return new SelectorSelection(selector.tag, val)
            } else {
                return new SelectorSelection(selector.tag)
            }
        }
    }
}