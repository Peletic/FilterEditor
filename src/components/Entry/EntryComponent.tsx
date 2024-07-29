import {IGenericSectionEntry} from "@/src/lib/generics/sectionEntry";
import {IFilterContext} from "@/src/lib/generics/filterContext";
import {MdDeleteForever} from "react-icons/md";
import {cleanFormattedString} from "@/src/lib/generics/item";

export default function EntryComponent({filterContext, setFilterContext, section, entry, handleClick}: {
    setFilterContext: (newContext: IFilterContext) => void,
    filterContext: IFilterContext,
    entry: IGenericSectionEntry,
    handleClick: (entry: IGenericSectionEntry) => void,
    section: "blacklist" | "whitelist" | "user_flip_finder"
}) {
    return (
        <div
            className={"justify-between flex flex-row p-2 bg-accent/70" + (filterContext.focusedEntry?.id === entry.id && " bg-accent/40")}
            onClick={() => handleClick(entry)}>
            <div className={"flex flex-row"}><img src={`https://sky.shiiyu.moe/item/${entry.item.itemId}`} alt={"Img"}
                                                  className="w-auto h-12 mr-4 my-auto"/>
                <div className={"flex flex-col"}>
                    <h1 className={"font-normal"}>{cleanFormattedString(entry.item.itemDisplayable.name)}</h1>
                    <p className={"my-auto"}>{entry.stringify()}</p>
                </div>
            </div>
            <button
                className={"my-auto mr-2"}
                onClick={() => {
                    filterContext[section].removeEntry(entry)
                    setFilterContext(filterContext)
                }}><MdDeleteForever color={"red"}/></button>
        </div>
    )
}