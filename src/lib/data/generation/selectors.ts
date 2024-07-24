import * as selectors from "@/src/lib/data/selectors/index"
import {TypeSelector} from "@/src/lib/generics";

const selectionDataSet : {[key: string] : TypeSelector} = {

}

for (const selector of selectors as TypeSelector[]) {
    selectionDataSet[selector.tag] = selector
}


export {selectionDataSet}