import {IFilterContext} from "@/src/lib/generics/filterContext";
import React, {useRef, useState} from "react";
import {similarityOf} from "@/src/lib/utils/stringCompare";
import SuggestedEntry from "@/src/components/EntryAdder/SuggestedEntry"
import {itemData} from "@/src/lib/data/parsing/items";
import {getItemDisplayables} from "@/src/lib/data/itemData";

export default function EntryAdder({filterContext, setFilterContext, section}: {
    filterContext: IFilterContext,
    setFilterContext: (newContext: IFilterContext) => void,
    section: "blacklist" | "whitelist" | "user_flip_finder"
}) {
    const [query, setQuery] = useState<string>("");
    const ref = useRef<HTMLInputElement>()

    return (
        <div>
            {// @ts-ignore
                <input ref={ref} placeholder={"Search"} className={"w-64 px-2"} onKeyUp={(e) => setQuery(e.currentTarget.value)}/>
            }
            {
                (query && <div className={"h-fit max-h-36 w-64 px-2 overflow-y-scroll bg-accent/70"}>
                    {
                        Object.keys(itemData).sort((a, b) => similarityOf(a, query) - similarityOf(b, query)).reverse().slice(0, 40).map((itemId, index) => {
                            return <SuggestedEntry filterContext={filterContext} setFilterContext={setFilterContext} key={index} itemId={itemId} callback={() => {
                                if (ref.current) ref.current.value = ""
                                setQuery("")
                            }}/>
                        })
                    }
                </div>)
            }
        </div>
    )
}