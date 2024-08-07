import {IFilterContext} from "@/src/lib/generics/filterContext";
import GlobalJsonBrowser from "@/src/components/GlobalJsonBrowser/GlobalJsonBrowser";

export default function GlobalSettingsFrame({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: (newContext: IFilterContext) => void
}) {
    return (
        <div className={"flex flex-col relative h-full"}>
            <div className={"relative flex flex-row h-16 min-h-16"}>
                <h2 className={"text-xl my-auto ml-4"}>Global Settings</h2>
            </div>
            <GlobalJsonBrowser filterContext={filterContext} setFilterContext={setFilterContext}/>
        </div>
    );
}