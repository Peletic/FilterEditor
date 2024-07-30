import {IFilterContext} from "@/src/lib/generics/filterContext";
import EditableSelectorComponent from "@/src/components/SelectorEditing/EditableSelectorComponent";

export default function SelectorBrowser({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: (context: IFilterContext) => void
}) {
    return (
        <div className={"mt-4 absolute"}>
            {
                filterContext.focusedEntry && filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id)?.selectors.selections.map((selector, index) => {
                    return (
                        <EditableSelectorComponent key={selector.tag} selector={selector} filterContext={filterContext} setFilterContext={setFilterContext}/>
                    )
                })
            }
        </div>
    )
}