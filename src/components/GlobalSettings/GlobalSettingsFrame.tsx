import {IFilterContext} from "@/src/lib/generics/filterContext";
import GlobalJsonBrowser from "@/src/components/GlobalJsonBrowser/GlobalJsonBrowser";

export default function GlobalSettingsFrame({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: (newContext: IFilterContext) => void
}) {
    return (
        <div>
            <GlobalJsonBrowser filterContext={filterContext} setFilterContext={setFilterContext}/>
        </div>
    )
}