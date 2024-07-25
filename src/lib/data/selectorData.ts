import {selectionDataSet} from "@/src/lib/data/parsing/selectors";

function getSelectionValuePossibilities(tag: string): any[] {
    const possibleResult = selectionDataSet[tag]
    if (possibleResult) {
        return possibleResult.possibleValues
    } else {
        throw new Error("Failed to generate possible selector options. Update dataset?")
        //return [true, false]
    }
}


export {getSelectionValuePossibilities}