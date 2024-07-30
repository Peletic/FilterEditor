import EntryBrowser from "@/src/components/EntryBrowser/EntryBrowser";
import {IFilterContext} from "@/src/lib/generics/filterContext";
import ItemBrowser from "@/src/components/ItemBrowser/ItemBrowser";

export default function BlacklistFrame({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: (context: IFilterContext) => void
}) {
    return (
        <div className={"flex flex-col relative"}>
            <div className={"relative flex flex-row h-16"}>
                <h1 className={"text-xl my-auto ml-4"}>Blacklist</h1>
                <ItemBrowser filterContext={filterContext} setFilterContext={setFilterContext} section={"blacklist"}/>
            </div>
            <EntryBrowser context={filterContext} setContext={setFilterContext} section={"blacklist"}/>
        </div>
    )
}