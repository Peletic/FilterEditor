import {GenericFilterSection} from "@/src/lib/generics/filterSection";

export type PageStatus = "landing" | "blacklist" | "whitelist" | "user_flip_finder" | "true_blacklist" | "extra"

export interface IFilterContext {
    page: PageStatus,
    blacklist: GenericFilterSection,
    whitelist: GenericFilterSection,
    user_flip_finder: GenericFilterSection,
    setPage: (newPage: PageStatus) => IFilterContext,
    focusedEntry: {item: () => string, section: "blacklist" | "whitelist" | "user_flip_finder", id: number } | null,
}