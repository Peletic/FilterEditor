import {FilterJson} from "@/src/lib/generics/filterJson";
import {IFilterContext} from "@/src/lib/generics/filterContext";
import {BlacklistSectionEntry} from "@/src/lib/implementations/blacklist/blacklist";
import {Item} from "@/src/lib/generics/item";
import {Selectors} from "@/src/lib/generics/selectors";
import {populateSelection} from "@/src/lib/utils/selectorUtils";

export function parseFromJson(json : FilterJson, oldFilterContext : IFilterContext) {
    const filterContext = oldFilterContext;

    // Dump all of our current contents (for the most part)
    filterContext.blacklist.contents.forEach(entry => filterContext.blacklist.removeEntry(entry))
    filterContext.whitelist.contents.forEach(entry => filterContext.whitelist.removeEntry(entry))
    filterContext.user_flip_finder.contents.forEach(entry => filterContext.user_flip_finder.removeEntry(entry))
    filterContext.true_blacklist.contents.forEach(entry => filterContext.true_blacklist.removeEntry(entry))

    // Begin filling contents via json
    for (const el of json.blacklist) {
        console.log(el)
        filterContext.blacklist.addEntry(new BlacklistSectionEntry(new Item(el.split("=")[0]), new Selectors(...el.split("=")[1].split("&").map((val: { toString: () => string; }) => populateSelection(val.toString().split(":")[0], false, val.toString().split(":")[1])))))
    }
}