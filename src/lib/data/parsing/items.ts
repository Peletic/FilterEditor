import items from "@/src/lib/data/constants/items.json"
import {TypeItemDisplayable, TypeItemSelectables} from "@/src/lib/generics/item";


const itemData: { [key: string]: TypeItemDisplayable & TypeItemSelectables } = {};

for (const item of items) {
    itemData[item.itemId] = {
        confident: false, details: item.desc.join("\n"), name: item.displayName, tags: []
    }
}

export {itemData}