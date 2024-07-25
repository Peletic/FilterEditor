import {TypeSelector} from "@/src/lib/generics";

const globalFlag : TypeSelector = {
    tag: "global",
    possibleValues: [true],
    extra: "Default value for any with the id."
}

export {globalFlag}