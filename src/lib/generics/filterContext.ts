import {GenericFilterSection} from "@/src/lib/generics/filterSection";
import {BlacklistFilterSection} from "@/src/lib/implementations/blacklist/blacklist";
import {WhitelistFilterSection} from "@/src/lib/implementations/whitelist/whitelist";
import {UserFlipFinderFilterSection} from "@/src/lib/implementations/user_flip_finder/userFlipFinder";

export type PageStatus = "landing" | "blacklist" | "whitelist" | "user_flip_finder" | "true_blacklist" | "extra"

export interface IFilterContext {
    page: PageStatus,
    blacklist: BlacklistFilterSection,
    whitelist: WhitelistFilterSection,
    user_flip_finder: UserFlipFinderFilterSection,
    setPage: (newPage: PageStatus) => IFilterContext,
    focusedEntry: {item: () => string, section: "blacklist" | "whitelist" | "user_flip_finder", id: number } | null,
}