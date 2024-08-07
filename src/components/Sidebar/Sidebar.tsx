import SidebarEntry from "@/src/components/Sidebar/SidebarEntry";

import {Dispatch, SetStateAction} from "react";
import XDivider from "@/src/components/Sidebar/XDivider";
import {IFilterContext, PageStatus} from "@/src/lib/generics/filterContext";
import {IoIosCloudDownload} from "react-icons/io";
import {filterContextToJson} from "@/src/lib/utils/assembleContext";

export default function Sidebar({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: Dispatch<SetStateAction<IFilterContext>>
}) {
    const handleLanding = () => handleClick("landing", filterContext, setFilterContext)
    const handleBL = () => handleClick("blacklist", filterContext, setFilterContext)
    const handleWL = () => handleClick("whitelist", filterContext, setFilterContext)
    const handleUFF = () => handleClick("user_flip_finder", filterContext, setFilterContext)
    const handleTBL = () => handleClick("true_blacklist", filterContext, setFilterContext)
    const handleExtra = () => handleClick("global", filterContext, setFilterContext)

    return (
        <div className={"h-full justify-between flex flex-col relative"}>
            <div className={"flex flex-col h-[45%] w-full text-right pt-4 justify-between"}>
                <SidebarEntry handleClick={handleLanding} title={"Landing Page"}/>
                <XDivider/>
                <SidebarEntry handleClick={handleBL} title={"Blacklist"}/>
                <XDivider/>
                <SidebarEntry handleClick={handleWL} title={"Whitelist"}/>
                <XDivider/>
                <SidebarEntry handleClick={handleUFF} title={"User Flip Finder"}/>
                <XDivider/>
                <SidebarEntry handleClick={handleTBL} title={"True Blacklist"}/>
                <XDivider/>
                <SidebarEntry handleClick={handleExtra} title={"Global Settings"}/>
                <XDivider/>
                <IoIosCloudDownload className={"ml-auto h-24 mr-2 cursor-pointer"} size={32} onClick={() => {
                    console.log("Download button clicked")
                    const content = filterContextToJson(filterContext)
                    const file = new Blob([content], {type: 'text/plain'});
                    const el = document.createElement("a")
                    el.href = URL.createObjectURL(file)
                    el.download = "filter.json"
                    document.body.appendChild(el)
                    el.click()
                }}/>
            </div>
            <div className={"absolute bottom-0 right-2 font-extralight text-sm"}>
                Made with ♥
            </div>
        </div>
    )
}

function handleClick(selection: PageStatus, filterContext: IFilterContext, setFilterContext: {
    (value: SetStateAction<IFilterContext>): void;
    (arg0: any): void;
}) {
    console.log("Setting page selection to: " + selection)
    filterContext.focusedEntry = null
    setFilterContext(filterContext.setPage(selection))
}