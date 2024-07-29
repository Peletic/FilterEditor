import {IFilterContext} from "@/src/lib/generics/filterContext";
import {cleanFormattedString} from "@/src/lib/generics/item";
import AddSelector from "@/src/components/Information/AddSelector";
import SelectorBrowser from "@/src/components/Information/SelectorBrowser";

export default function Information({filterContext, setFilterContext} : {filterContext: IFilterContext, setFilterContext: (context: IFilterContext) => void}) {
    return (
        <div className="grid grid-cols-1 grid-flow-row gap-4">
            <h1 className="mx-auto text-xl font-normal">Information (I icon)</h1>

            <p className="mx-auto text-lg">
                {filterContext.focusedEntry && cleanFormattedString(filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id)?.item.itemDisplayable.name || "")}
            </p>

            <p>
                {filterContext.focusedEntry && cleanFormattedString(filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id)?.item.itemDisplayable.details || "")}
            </p>

            <div>
                Modify selectors here
                <br/>
                <AddSelector filterContext={filterContext} setFilterContext={setFilterContext}/>
                <br/>
                <SelectorBrowser filterContext={filterContext} setFilterContext={setFilterContext}/>
            </div>
        </div>
    )
}