import {IFilterContext} from "@/src/lib/generics/filterContext";
import ItemBrowser from "@/src/components/ItemBrowser/ItemBrowser";
import EntryBrowser from "@/src/components/EntryBrowser/EntryBrowser";

export default function WhitelistFrame({filterContext, setFilterContext} : {filterContext: IFilterContext, setFilterContext: (context: IFilterContext) => void}) {
    return (
        <div className={"flex flex-col relative"}>
            <div className={"relative flex flex-row h-16"}>
                <h1 className={"text-xl my-auto ml-4"}>Whitelist</h1>
            <ItemBrowser filterContext={filterContext} setFilterContext={setFilterContext} section={"whitelist"}/>
            </div>
            <EntryBrowser context={filterContext} setContext={setFilterContext} section={"whitelist"}/>
        </div>
    )
}