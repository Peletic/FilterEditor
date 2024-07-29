import EntryBrowser from "@/src/components/EntryBrowser/EntryBrowser";
import {IFilterContext} from "@/src/lib/generics/filterContext";
import EntryAdder from "@/src/components/EntryAdder/EntryAdder";

export default function BlacklistFrame({filterContext, setFilterContext} : {filterContext: IFilterContext, setFilterContext: (context: IFilterContext) => void}) {
    return (
        <div>
            <EntryAdder filterContext={filterContext} setFilterContext={setFilterContext} section={"blacklist"}/>
            <EntryBrowser context={filterContext} setContext={setFilterContext} section={"blacklist"}/>
        </div>
    )
}