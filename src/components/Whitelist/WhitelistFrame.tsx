import {IFilterContext} from "@/src/lib/generics/filterContext";
import ItemBrowser from "@/src/components/ItemBrowser/ItemBrowser";
import EntryBrowser from "@/src/components/EntryBrowser/EntryBrowser";

export default function WhitelistFrame({filterContext, setFilterContext} : {filterContext: IFilterContext, setFilterContext: (context: IFilterContext) => void}) {
    return (
        <div>
            <ItemBrowser filterContext={filterContext} setFilterContext={setFilterContext} section={"whitelist"}/>
            <EntryBrowser context={filterContext} setContext={setFilterContext} section={"whitelist"}/>
        </div>
    )
}