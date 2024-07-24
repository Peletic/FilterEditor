import {GenericFilterSection, GenericSectionEntry} from "@/src/lib/generics";

export class BlacklistSectionEntry extends GenericSectionEntry {}

export class BlacklistFilterSection extends GenericFilterSection {

    stringify(): string {
        return JSON.stringify({"blacklist": this.objectify()})
    }
}