import {IFilterContext} from "@/src/lib/generics/filterContext";
import {cleanFormattedString} from "@/src/lib/generics/item";
import AddSelector from "@/src/components/Information/AddSelector";
import SelectorBrowser from "@/src/components/Information/SelectorBrowser";
import {CiSquareInfo} from "react-icons/ci";
import {GoInfo} from "react-icons/go";

export default function Information({filterContext, setFilterContext} : {filterContext: IFilterContext, setFilterContext: (context: IFilterContext) => void}) {
    return (
        <div className="grid grid-cols-1 grid-flow-row gap-4">
            <p className="mx-auto text-xl mt-6">
                <a className={"my-auto inline"}>{filterContext.focusedEntry && cleanFormattedString(filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id)?.item.itemDisplayable.name || "")} </a>
                <GoInfo className={"h-8 ml-4 my-auto w-auto inline"}/>
            </p>

            <p className={"w-2/3 mx-auto text-center"}>
                {filterContext.focusedEntry && cleanFormattedString(filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id)?.item.itemDisplayable.details || "")}
            </p>

            {filterContext.focusedEntry &&
            <div className={"p-4"}>
                <h2 className={"text-lg text-center mb-4"}>Item Modifiers</h2>
                <AddSelector filterContext={filterContext} setFilterContext={setFilterContext}/>
                <br/>
                <SelectorBrowser filterContext={filterContext} setFilterContext={setFilterContext}/>
            </div>
            }
        </div>
    )
}