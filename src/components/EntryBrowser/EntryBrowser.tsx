import {IFilterContext} from "@/src/lib/generics/filterContext";
import EntryComponent from "@/src/components/Entry/EntryComponent";

export default function EntryBrowser({context, setContext, section}: {
    context: IFilterContext,
    setContext: (context: IFilterContext) => void,
    section: "blacklist" | "user_flip_finder" | "whitelist"
}) {
    return (
        <div className="flex flex-col relative">
            {
                context[section].contents.map((entry) => {
                    return (
                        <EntryComponent key={entry.stringify()} setFilterContext={setContext} section={section} filterContext={context} entry={entry} handleClick={(entry) => {
                            context.focusedEntry = {item: entry.stringify, section: section, id: entry.id}
                            setContext(context)
                        }}/>
                    )
                })
            }
        </div>
    )
}