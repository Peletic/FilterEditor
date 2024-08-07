import {IFilterContext} from "@/src/lib/generics/filterContext";
import React, {useRef, useState} from "react";
import {itemData} from "@/src/lib/data/parsing/items";
import {similarityOf} from "@/src/lib/utils/stringCompare";
import {getItemDisplayables} from "@/src/lib/data/itemData";
import Image from "next/image";
import {cleanFormattedString, Item} from "@/src/lib/generics/item";
import {IoAddCircleOutline} from "react-icons/io5";
import {MdDeleteForever} from "react-icons/md";

export default function TrueBlacklistFrame({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: (context: IFilterContext) => void
}) {
    const [query, setQuery] = useState<string>("");
    const ref = useRef<HTMLInputElement>()

    return (
        <div className={"flex flex-col relative"}>
            <div className={"relative flex flex-row h-16"}>
                <h1 className={"text-xl my-auto ml-4"}>True Blacklist</h1>
                <div className={"absolute right-2 z-10 rounded-lg bg-secondary p-2 m-4 w-72"}>
                    {// @ts-ignore
                        <input ref={ref} placeholder={"Search"} style={{all: "unset"}}
                               className={"appearance-none w-72 p-2"} onKeyUp={(e) => setQuery(e.currentTarget.value)}/>
                    }
                    {
                        (query && <div className={"h-fit mt-2 max-h-36 w-full px-2 overflow-y-scroll bg-accent/70"}>
                            {
                                Object.keys(itemData).sort((a, b) => similarityOf(getItemDisplayables(a).name, query) - similarityOf(getItemDisplayables(b).name, query)).reverse().slice(0, 15).map((itemId, index) => {
                                    return (
                                        <div key={index}
                                             className={"flex flex-row relative max-h-5 text-xs my-0.5 group"}>
                                            <Image src={`https://sky.shiiyu.moe/item/${itemId}`} alt={""} width={20}
                                                   height={20}
                                                   className={"h-5 w-auto my-auto"}/>
                                            <p className={"max-w-[200px] overflow-y-hidden group-hover:underline cursor-default"}>{cleanFormattedString(getItemDisplayables(itemId).name)}</p>
                                            <IoAddCircleOutline
                                                className={"cursor-pointer absolute right-0"} color={"green"} size={24}
                                                onClick={() => {
                                                    filterContext.true_blacklist.addEntry(new Item(itemId));
                                                    setFilterContext(filterContext)
                                                    if (ref.current) ref.current.value = ""
                                                    setQuery("")

                                                }}/>
                                        </div>)
                                })
                            }
                        </div>)
                    }
                </div>
            </div>
            <div className="flex flex-col relative">
                {
                    filterContext.true_blacklist.contents.map((entry) => {
                        return (
                            <div key={entry.itemId}
                                 className={"justify-between flex flex-row w-full overflow-x-clip h-16 p-2 bg-accent/70"}>

                                <div className={"flex flex-row"}>
                                    <img
                                        src={`https://sky.shiiyu.moe/item/${entry.itemId}`} alt={"Img"}
                                        className="w-auto h-12 mr-4 my-auto"/>
                                    <div className={"flex flex-col"}>
                                        <h1 className={"font-normal"}>{cleanFormattedString(entry.itemDisplayable.name)}</h1>
                                        <p className={"my-auto overflow-x-hidden"}>{entry.itemId}</p>
                                    </div>
                                </div>
                                <button
                                    className={"my-auto mr-2"}
                                    onClick={() => {
                                        filterContext.true_blacklist.removeEntry(entry)
                                        setFilterContext(filterContext)
                                    }}><MdDeleteForever color={"red"}/></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}