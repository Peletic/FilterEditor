'use client'

import Divider from "@/src/components/Divider/Divider";
import {createContext, useState} from "react";

// @ts-ignore
const StateContext = createContext();











interface FilterSection {

    sectionContent : [

    ]

}

type PageStatus = "landing" | "blacklist" | "whitelist" | "user_flip_finder" | "true_blacklist" | "extra"

type FilterContext = {
    page : PageStatus,



}

export default function Home() {
    const [usedArea, setUsedArea] = useState("blacklist");

    return (

        <main className={"w-full h-[70vh] my-auto flex flex-row"}>
            <StateContext.Provider value={{usedArea, setUsedArea}}>
                <div className={"w-1/6"}>
                    test
                </div>
                <Divider/>
                <div className={"w-3/6"}>
                    test
                </div>
                <Divider/>
                <div className={"w-2/6"}>
                    test
                </div>
            </StateContext.Provider>
        </main>

    )
}