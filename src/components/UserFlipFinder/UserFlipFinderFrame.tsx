import {IFilterContext} from "@/src/lib/generics/filterContext";
import ItemBrowser from "@/src/components/ItemBrowser/ItemBrowser";
import EntryBrowser from "@/src/components/EntryBrowser/EntryBrowser";

export default function UserFlipFinderFrame({filterContext, setFilterContext} : {filterContext: IFilterContext, setFilterContext: (context: IFilterContext) => void}) {
    return (
        <div className={"relative flex-col"}>
            <div className={"relative flex flex-row h-16"}>
                <h1 className={"text-xl my-auto ml-4"}>User Flip Finder</h1>
                <ItemBrowser filterContext={filterContext} setFilterContext={setFilterContext} section={"user_flip_finder"}/>
            </div>
            <EntryBrowser context={filterContext} setContext={setFilterContext} section={"user_flip_finder"}/>
        </div>
    )
}