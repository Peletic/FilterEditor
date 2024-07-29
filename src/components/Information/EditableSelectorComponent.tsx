import {IFilterContext} from "@/src/lib/generics/filterContext";
import {ISelection} from "@/src/lib/generics/selection";
import {MdDeleteForever} from "react-icons/md";

export default function EditableSelectorComponent({selector, filterContext, setFilterContext}: {
    selector: ISelection,
    filterContext: IFilterContext,
    setFilterContext: (context: IFilterContext) => void
}) {


    return (
        <div className={"flex flex-row relative p-0.5"}>
            <p className={"my-auto"}>Attribute: <code>{selector.tag}</code></p>
            {
                selector.possibleValues.length === 0 ?
                    <code className={"ml-4 my-auto"}>No need for an assigned value!</code> : (
                        <>

                            = <select defaultValue={selector.value || "special-none"} className={"w-auto max-w-64"}
                                      onInput={(e) => {
                                          if (filterContext && filterContext.focusedEntry && filterContext.focusedEntry.id) {
                                              filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id)?.selectors.editSelectionByTag(selector.tag, e.currentTarget.value);
                                              setFilterContext(filterContext);
                                          }
                                      }}>
                            <option hidden={true} value={"special-none"} key={"null"} disabled>None</option>
                            {
                                selector.possibleValues.map((value: any) => {
                                    return <option value={value} key={value.toString()}>{value.toString()}</option>
                                })
                            }
                        </select>
                        </>
                    )
            }
        <MdDeleteForever color={"red"} className={"my-auto ml-2"} onClick={() => {
            if (filterContext && filterContext.focusedEntry && filterContext.focusedEntry.id) {
                filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id)?.selectors.removeSelectionByTag(selector.tag);
                setFilterContext(filterContext);
            }
        }}/>
        </div>
    )
}