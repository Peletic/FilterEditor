import {GenericFilterSection} from "../../generics/filterSection";
import {GenericSectionEntry} from "@/src/lib/generics/sectionEntry";

export class BlacklistSectionEntry extends GenericSectionEntry {}

export class BlacklistFilterSection extends GenericFilterSection {

    stringify(): string {
        return JSON.stringify({"blacklist": this.objectify()})
    }
}