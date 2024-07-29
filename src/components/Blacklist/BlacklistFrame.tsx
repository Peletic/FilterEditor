import EntryBrowser from "@/src/components/EntryBrowser/EntryBrowser";
import {IFilterContext} from "@/src/lib/generics/filterContext";
import ItemBrowser from "@/src/components/ItemBrowser/ItemBrowser";

export default function BlacklistFrame({filterContext, setFilterContext} : {filterContext: IFilterContext, setFilterContext: (context: IFilterContext) => void}) {
    return (
        <div>
            <ItemBrowser filterContext={filterContext} setFilterContext={setFilterContext} section={"blacklist"}/>
            <EntryBrowser context={filterContext} setContext={setFilterContext} section={"blacklist"}/>
        </div>
    )
}