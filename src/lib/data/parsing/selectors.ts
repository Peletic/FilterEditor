import * as selectors from "@/src/lib/data/selectors/index"
//Hardcoding the fillables because im not really sure how id make this all dynamic or wtv
import ultimates from "@/src/lib/data/constants/ultimates.json"
import attributes from "@/src/lib/data/constants/attributes.json"

import fillUltimates from "@/src/lib/data/fillableSelectors/ultimateEnchantment"
import fillAttributes from "@/src/lib/data/fillableSelectors/attribute"
import {TypeSelector} from "@/src/lib/generics/selector";


const selectorDataSet: { [key: string]: TypeSelector } = {}
console.log(selectors)

for (const test in selectors) {
    console.log(test)
}

for (const selector of Object.values(selectors)) {
    selectorDataSet[selector.tag] = selector
}

for (const ultimateId of ultimates) {
    selectorDataSet[ultimateId.toLowerCase()] = {
        ...fillUltimates,
        tag: ultimateId.toLowerCase()
    }
}

for (const attributeId of attributes) {
    selectorDataSet[attributeId.toLowerCase()] = {
        ...fillAttributes,
        tag: attributeId.toLowerCase()
    }
}

export {selectorDataSet}