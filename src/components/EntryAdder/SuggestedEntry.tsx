import {IFilterContext} from "@/src/lib/generics/filterContext";
import {getItemDisplayables} from "@/src/lib/data/itemData";
import {cleanFormattedString, Item} from "@/src/lib/generics/item";
import {IoAddCircleOutline} from "react-icons/io5";
import {GenericSectionEntry} from "@/src/lib/generics/sectionEntry";
import Image from "next/image";

type Page = "blacklist" | "whitelist" | "user_flip_finder";

export default function SuggestedEntry({filterContext, setFilterContext, itemId, callback}: {
    filterContext: IFilterContext,
    setFilterContext: (newContext: IFilterContext) => void,
    itemId: string,
    callback: () => void
}) {
    return (
        <div className={"flex flex-row relative max-h-5 text-xs my-0.5 group"}>
            <Image src={`https://sky.shiiyu.moe/item/${itemId}`} alt={""} width={20} height={20}
                   className={"h-5 w-auto my-auto"}/>
            <p className={"max-w-[200px] overflow-y-hidden group-hover:underline cursor-default"}>{cleanFormattedString(getItemDisplayables(itemId).name)}</p>
            <IoAddCircleOutline
                className={"cursor-pointer absolute right-0"} color={"green"} size={24} onClick={() => {
                filterContext[filterContext.page as Page].addEntry(new GenericSectionEntry(new Item(itemId)));
                setFilterContext(filterContext)
                callback()
            }}/>
        </div>
    )
}