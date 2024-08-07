import {IFilterContext} from "@/src/lib/generics/filterContext";
import JsonEntryComponent from "@/src/components/JsonEntry/JsonEntryComponent";
import {MdDeleteForever} from "react-icons/md";
import {IoMdAddCircle} from "react-icons/io";


export default function GlobalJsonBrowser({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: (newFilterContext: IFilterContext) => void
}) {
    return (
        <div>
            <JsonEntryComponent name={"Profit"} value={filterContext.globalSettings.profit} type={"number"}
                                callback={(newValue) => {
                                    filterContext.globalSettings.profit = newValue;
                                    setFilterContext(filterContext);
                                }}/>
            <JsonEntryComponent name={"Profit Percentage"} value={filterContext.globalSettings.profit_percentage}
                                type={"number"} callback={(newValue) => {
                filterContext.globalSettings.profit_percentage = newValue;
                setFilterContext(filterContext);
            }}/>
            <div className={"py-1"}>
                <h3>
                    Blocked UUIDS
                </h3>
                <IoMdAddCircle className={"cursor-pointer"} color={"lime"} onClick={() => {
                    filterContext.globalSettings.blacklisted_uuids.push("Enter UUID Here")
                    setFilterContext(filterContext)
                }}/>
                {
                    filterContext.globalSettings.blacklisted_uuids.map((val, index) => {
                        return (
                            <div key={index}>
                                <input type={"text"} defaultValue={val} onChange={(event) => {
                                    filterContext.globalSettings.blacklisted_uuids[index] = event.currentTarget.value
                                    setFilterContext(filterContext)
                                }}/>
                                <MdDeleteForever color={"red"} className={"cursor-pointer"} onClick={(e) => {
                                    filterContext.globalSettings.blacklisted_uuids.splice(index, 1)
                                    setFilterContext(filterContext)
                                }}/>
                            </div>
                        )
                    })
                }
            </div>

            <div>
                {
                    Object.keys(filterContext.globalSettings.flipper_modes).map((value: string, index) => {

                        return (
                            <div key={index}>
                                {value}
                                {// @ts-ignore
                                    <JsonEntryComponent name={"Enabled"} value={filterContext.globalSettings.flipper_modes[value].enabled}
                                                        type={"boolean"} callback={(newVal) => {
                                        // @ts-ignore
                                        filterContext.globalSettings.flipper_modes[value].enabled = (newVal === true);
                                        setFilterContext(filterContext)
                                    }}/>}
                                {
                                    // @ts-ignore
                                    <JsonEntryComponent name={"Minimum Volume"} value={filterContext.globalSettings.flipper_modes[value].min_volume}
                                                        type={"number"} callback={(newVal) => {
                                        // @ts-ignore
                                        filterContext.globalSettings.flipper_modes[value].min_volume = newVal;
                                        setFilterContext(filterContext)
                                    }}/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}