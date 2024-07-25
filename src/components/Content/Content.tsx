import {IFilterContext} from "@/src/lib/generics/filterContext";
import BlacklistFrame from "@/src/components/Blacklist/BlacklistFrame";
import WhitelistFrame from "@/src/components/Whitelist/WhitelistFrame";
import TrueBlacklistFrame from "@/src/components/TrueBlacklist/TrueBlacklistFrame";
import LandingFrame from "@/src/components/Landing/LandingFrame";
import UserFlipFinderFrame from "@/src/components/UserFlipFinder/UserFlipFinderFrame";

export default function Content({filterContext, setFilterContext}: {
    filterContext: IFilterContext,
    setFilterContext: any
}) {
    const page = filterContext.page

    return (
        <>
            {
                page === "blacklist" ? <BlacklistFrame/>
                    : page === "whitelist" ? <WhitelistFrame/>
                        : page === "user_flip_finder" ? <UserFlipFinderFrame/>
                            : page === "landing" ? <LandingFrame/>
                                : page === "true_blacklist" ? <TrueBlacklistFrame/>
                                    : <div/>
            }
        </>
    )


}