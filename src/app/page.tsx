'use client'

import Divider from "@/src/components/Divider/Divider";
import {useState} from "react";

import {BlacklistFilterSection} from "@/src/lib/implementations/blacklist/blacklist";
import {UserFlipFinderFilterSection} from "@/src/lib/implementations/user_flip_finder/userFlipFinder";
import {WhitelistFilterSection} from "@/src/lib/implementations/whitelist/whitelist";
import Sidebar from "@/src/components/Sidebar/Sidebar";
import {IFilterContext, PageStatus} from "@/src/lib/generics/filterContext";
import {GenericFilterSection} from "@/src/lib/generics/filterSection";
import Content from "@/src/components/Content/Content";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Information from "@/src/components/Information/Information";


class FilterContext implements IFilterContext {
    constructor() {
        this.page = "landing"
        this.blacklist = new BlacklistFilterSection()
        this.user_flip_finder = new UserFlipFinderFilterSection()
        this.whitelist = new WhitelistFilterSection()
        this.focusedEntry = null
    }

    blacklist: GenericFilterSection;
    page: PageStatus;
    user_flip_finder: GenericFilterSection;
    whitelist: GenericFilterSection;
    focusedEntry: { item: string; section: "blacklist" | "whitelist" | "user_flip_finder"; } | null;

    setPage(newPage: PageStatus): IFilterContext {
        this.page = newPage
        return this;
    }
}

export default function Home() {
    const [filterContext, setFilterContext] = useState(new FilterContext());


    return (
        <div className={` h-full relative`}>
            <Header/>
            <main className={"w-full h-[70vh] my-auto flex flex-row"}>

                <div className={"w-1/6"}>
                    <Sidebar filterContext={filterContext} setFilterContext={(newFilterContext) => setFilterContext(Object.create(newFilterContext))}/>
                </div>
                <Divider/>
                <div className={"w-3/6"}>
                    <Content filterContext={filterContext} setFilterContext={(newFilterContext : IFilterContext) => setFilterContext(Object.create(newFilterContext))}/>
                </div>
                <Divider/>
                <div className={"w-2/6"}>
                    <Information filterContext={filterContext} setFilterContext={(newFilterContext : IFilterContext) => setFilterContext(Object.create(newFilterContext))}/>
                </div>
            </main>
            <Footer/>
        </div>
    )


}