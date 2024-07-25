import {GenericFilterSection} from "@/src/lib/generics/filterSection";

export type PageStatus = "landing" | "blacklist" | "whitelist" | "user_flip_finder" | "true_blacklist" | "extra"

export interface IFilterContext {
    page : PageStatus,
    blacklist : GenericFilterSection,
    whitelist : GenericFilterSection,
    user_flip_finder : GenericFilterSection,
    setPage : (newPage : PageStatus) => IFilterContext,
    /*setBlacklist : (newBlacklist : GenericFilterSection) => IFilterContext,
    setWhitelist : (newWhitelist : GenericFilterSection) => IFilterContext,
    setUserFlipFinder : (newUserFlipFinder : GenericFilterSection) => IFilterContext*/
}