import {IFilterContext} from "@/src/lib/generics/filterContext";
import JsonEntryComponent from "@/src/components/JsonEntry/JsonEntryComponent";
import {IGenericValuedSectionEntry} from "@/src/lib/generics/sectionEntry";

export default function ValueBrowser({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: (context: IFilterContext) => void
}) {
    const assignedValue = filterContext.focusedEntry ? (filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id) as IGenericValuedSectionEntry).assignedValue : {}

    return (
        <div className={"mt-4"}>
            {
                Object.keys(assignedValue).map((key, index) => {
                    return (
                        <JsonEntryComponent key={key} value={assignedValue[key]}
                                            name={key}
                                            type={(typeof assignedValue[key]) as "string" | "boolean" | "number"}
                                            callback={(newValue) => {
                                                console.log(typeof assignedValue[key])
                                                const type = (typeof assignedValue[key]) as "string" | "boolean" | "number"
                                                console.log(`${key}: ${newValue}`)
                                                if (filterContext.focusedEntry) {
                                                    let value
                                                    switch (type) {
                                                        case "string":
                                                            value = newValue
                                                            break
                                                        case "boolean":
                                                            value = newValue === "true"
                                                            break
                                                        case "number":
                                                            value = parseFloat(newValue)
                                                            break
                                                    }
                                                    (filterContext[filterContext.focusedEntry.section].findEntryById(filterContext.focusedEntry.id) as IGenericValuedSectionEntry).assignedValue[key] = value
                                                    setFilterContext(filterContext)
                                                }
                                            }}/>
                    )
                })
            }
        </div>
    )

}