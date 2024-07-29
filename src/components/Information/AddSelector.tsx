import {IFilterContext} from "@/src/lib/generics/filterContext";
import {useState} from "react";
import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri";
import {selectorDataSet} from "@/src/lib/data/parsing/selectors";
import {similarityOf} from "@/src/lib/utils/stringCompare";
import SelectorComponent from "@/src/components/Information/SelectorComponent";
import {SelectorSelection} from "@/src/lib/generics/selection";

export default function AddSelector({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: (context: IFilterContext) => void
}) {
    const [query, setQuery] = useState<string>("");
    const [dropdown, setDropdown] = useState<boolean>(false);


    return (
        <div className={"w-fit"}>
            <div className={"w-64 flex-row-reverse flex"}>
                <button className={"w-fit"} onClick={() => setDropdown(!dropdown)}>{!dropdown ? <RiArrowDropDownLine size={24}/> : <RiArrowDropUpLine size={24}/>}</button>
                <input placeholder={"Search"} className={"w-full px-2"} onKeyUp={(e) => setQuery(e.currentTarget.value)}/>
            </div>

            {(query || dropdown) && <
                div className={"h-fit max-h-36 w-64 px-2 overflow-y-scroll bg-accent/70"}>
                {
                    (query ? Object.keys(selectorDataSet).sort((a, b) => similarityOf(a, query) - similarityOf(b, query)).reverse().map((tag, index) => {
                        return (
                            <SelectorComponent key={index} selector={selectorDataSet[tag]} handleClick={(selector) => {
                                if (filterContext.focusedEntry) {
                                    filterContext[filterContext.focusedEntry.section]?.findEntryById(filterContext.focusedEntry?.id)?.selectors.addSelection(new SelectorSelection(selector.tag));
                                    setFilterContext(filterContext);
                                }
                            }}/>
                        )
                    }) : Object.keys(selectorDataSet).map((tag, index) => {
                        return (
                            <SelectorComponent key={index} selector={selectorDataSet[tag]} handleClick={(selector) => {
                                if (filterContext.focusedEntry) {
                                    filterContext[filterContext.focusedEntry.section]?.findEntryById(filterContext.focusedEntry?.id)?.selectors.addSelection(new SelectorSelection(selector.tag));
                                    setFilterContext(filterContext);
                                }
                            }}/>
                        )
                    }))
                }
            </div>
            }
        </div>
    )
}
