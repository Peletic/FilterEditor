import {TypeItemDisplayable, TypeItemSelectables} from "@/src/lib/generics";

import {itemData} from "@/src/lib/data/generation/items"



function getItemDisplayables(id : string) : TypeItemDisplayable {
    const possibleResults = itemData[id]

    if (possibleResults) {
        return possibleResults
    } else {
        return {
            details: "Unknown!",
            name: id
        }
    }
}

function getItemSelectables(id : string) : TypeItemSelectables {
    const possibleResults = itemData[id]

    if (possibleResults) {
        return possibleResults
    } else {
        return {
            confident: false,
            tags: []
        }
    }
}

export {getItemDisplayables, getItemSelectables}