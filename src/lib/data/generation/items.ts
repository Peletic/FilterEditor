import items from "@/src/lib/data/constants/items.json"
import {TypeItemDisplayable, TypeItemSelectables} from "@/src/lib/generics";

const itemData : {[key: string] : TypeItemDisplayable & TypeItemSelectables} = {};

for (const item of items) {
    itemData[item.itemId] = {
        confident: false, details: item.displayName, name: item.displayName, tags: []
    }
}

export {itemData}