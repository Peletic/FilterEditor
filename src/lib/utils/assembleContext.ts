import {IFilterContext} from "@/src/lib/generics/filterContext";

export function filterContextToJson(context: IFilterContext): string {
    console.log(context.blacklist.objectify())
    console.log(context.whitelist.objectify())
    console.log(context.user_flip_finder.objectify())
    const object: any = {
        blacklist: context.blacklist.objectify(),
        whitelist: context.whitelist.objectify(),
        user_flip_finder: context.user_flip_finder.objectify(),
        true_blacklist: context.true_blacklist.objectify()
    }

    return JSON.stringify(object)
}