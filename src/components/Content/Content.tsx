import {IFilterContext} from "@/src/lib/generics/filterContext";
import BlacklistFrame from "@/src/components/Blacklist/BlacklistFrame";
import WhitelistFrame from "@/src/components/Whitelist/WhitelistFrame";
import TrueBlacklistFrame from "@/src/components/TrueBlacklist/TrueBlacklistFrame";
import LandingFrame from "@/src/components/Landing/LandingFrame";
import UserFlipFinderFrame from "@/src/components/UserFlipFinder/UserFlipFinderFrame";
import GlobalSettingsFrame from "@/src/components/GlobalSettings/GlobalSettingsFrame";

export default function Content({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: any
}) {
    const page = filterContext.page

    return (
        <div className={"h-full"}>
            {
                page === "blacklist" ?
                    <BlacklistFrame filterContext={filterContext} setFilterContext={setFilterContext}/>
                    : page === "whitelist" ?
                        <WhitelistFrame filterContext={filterContext} setFilterContext={setFilterContext}/>
                        : page === "user_flip_finder" ?
                            <UserFlipFinderFrame filterContext={filterContext} setFilterContext={setFilterContext}/>
                            : page === "landing" ? <LandingFrame/>
                                : page === "true_blacklist" ?
                                    <TrueBlacklistFrame filterContext={filterContext} setFilterContext={setFilterContext}/>
                                    : page === "global" ? <GlobalSettingsFrame filterContext={filterContext}
                                                                               setFilterContext={setFilterContext}/>
                                        : <div/>
            }
        </div>
    )


}