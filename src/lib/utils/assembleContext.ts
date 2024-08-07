import {IFilterContext} from "@/src/lib/generics/filterContext";

export function filterContextToJson(context: IFilterContext): string {

    const object: any = {
        blacklist: context.blacklist.objectify(),
        whitelist: context.whitelist.objectify(),
        user_flip_finder: context.user_flip_finder.objectify(),
        true_blacklist: context.true_blacklist.objectify(),
        global: context.globalSettings
    }

    console.log(JSON.stringify(object, null, 4))

    return JSON.stringify(object, null, 4)
}