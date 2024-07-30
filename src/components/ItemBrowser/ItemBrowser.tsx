import {IFilterContext} from "@/src/lib/generics/filterContext";
import React, {useRef, useState} from "react";
import {similarityOf} from "@/src/lib/utils/stringCompare";
import SuggestedEntry from "@/src/components/ItemBrowser/SuggestedEntry"
import {itemData} from "@/src/lib/data/parsing/items";
import {getItemDisplayables} from "@/src/lib/data/itemData";

export default function ItemBrowser({filterContext, setFilterContext, section}: {
    filterContext: IFilterContext,
    setFilterContext: (newContext: IFilterContext) => void,
    section: "blacklist" | "whitelist" | "user_flip_finder"
}) {
    const [query, setQuery] = useState<string>("");
    const ref = useRef<HTMLInputElement>()

    return (
        <div className={"absolute right-2 z-10 rounded-lg bg-secondary p-2 m-4 w-72"}>
            {// @ts-ignore
                <input ref={ref} placeholder={"Search"} style={{all: "unset"}} className={"appearance-none w-72 p-2"} onKeyUp={(e) => setQuery(e.currentTarget.value)}/>
            }
            {
                (query && <div className={"h-fit mt-2 max-h-36 w-full px-2 overflow-y-scroll bg-accent/70"}>
                    {
                        Object.keys(itemData).sort((a, b) => similarityOf(getItemDisplayables(a).name, query) - similarityOf(getItemDisplayables(b).name, query)).reverse().slice(0, 15).map((itemId, index) => {
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