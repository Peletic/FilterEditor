import {IFilterContext} from "@/src/lib/generics/filterContext";
import {cleanFormattedString} from "@/src/lib/generics/item";
import AddSelector from "@/src/components/SelectorAdding/AddSelector";
import SelectorBrowser from "@/src/components/SelectorEditing/SelectorBrowser";
import {GoInfo} from "react-icons/go";
import ValueBrowser from "@/src/components/ValueEditing/ValueBrowser";

export default function Information({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: (context: IFilterContext) => void
}) {
    return (
        <div className="grid grid-cols-1 grid-flow-row gap-4">
            <p className="mx-auto text-xl mt-6">
                <a className={"my-auto inline"}>{filterContext.focusedEntry && cleanFormattedString(filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id)?.item.itemDisplayable.name || "")} </a>
                <GoInfo className={"h-8 ml-4 my-auto w-auto inline"}/>
            </p>

            <p className={"w-2/3 mx-auto text-center"}>
                {filterContext.focusedEntry && cleanFormattedString(filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id)?.item.itemDisplayable.details || "")}
            </p>


            {(filterContext.focusedEntry?.section === "whitelist" || filterContext.focusedEntry?.section === "user_flip_finder") &&
                <div className={"p-4"}>
                    <h2 className={"text-lg text-center mb-4"}>{filterContext.focusedEntry.section === "whitelist" ? "Whitelist" : "User Flip Finder"} Entry Values</h2>
                    <ValueBrowser filterContext={filterContext} setFilterContext={setFilterContext}/>

                </div>
            }

            {filterContext.focusedEntry &&
                <div className={"p-4"}>
                    <h2 className={"text-lg text-center mb-4 relative"}>Item Modifiers</h2>
                    <AddSelector filterContext={filterContext} setFilterContext={setFilterContext}/>
                    <br/>
                    <SelectorBrowser filterContext={filterContext} setFilterContext={setFilterContext}/>
                </div>
            }
        </div>
    )
}