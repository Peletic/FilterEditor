import {IFilterContext} from "@/src/lib/generics/filterContext";
import ItemBrowser from "@/src/components/ItemBrowser/ItemBrowser";
import EntryBrowser from "@/src/components/EntryBrowser/EntryBrowser";

export default function UserFlipFinderFrame({filterContext, setFilterContext} : {filterContext: IFilterContext, setFilterContext: (context: IFilterContext) => void}) {
    return (
        <div>
            <ItemBrowser filterContext={filterContext} setFilterContext={setFilterContext} section={"user_flip_finder"}/>
            <EntryBrowser context={filterContext} setContext={setFilterContext} section={"user_flip_finder"}/>
        </div>
    )
}