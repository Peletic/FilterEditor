import {TypeItemDisplayable, TypeItemSelectables} from "@/src/lib/generics";

const fakeDataSet : {[key : string]: TypeItemDisplayable & TypeItemSelectables} = {

}



function getItemDisplayables(id : string) : TypeItemDisplayable {
    const possibleResults = fakeDataSet[id]

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
    const possibleResults = fakeDataSet[id]

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