// We can't use a section entry because they really aren't entries, now, are they?
// Still too brainrot to figure out how to do this. i guess ill just leave it to someone else (probably me in 2 weeks)

//Have decided im not going to use a wrapper class and ill just do stringification functions OTF. Bad design but then again its somewhat pointless to mask the function call
import {IItem} from "@/src/lib/generics/item";

export class TrueBlacklist {
    constructor(contents?: IItem[]) {
        this.contents = contents || [];
    }

    contents: IItem[];

    stringify(): string {
        return JSON.stringify({"true_blacklist": this.objectify()})
    }

    objectify(): any {
        return this.contents.map((val) => {
            return val.itemId
        })
    }

    addEntry(newEntry: IItem): boolean {
        if (!this.findEntry(newEntry)) {
            this.contents.push(newEntry)
            return true
        }
        return false
    }

    findEntry(entry: IItem): boolean {
        return this.contents.findIndex((val) => val.itemId === entry.itemId) !== -1
    }

    removeEntry(entry: IItem): boolean {
        const index = this.contents.findIndex((val) => val.itemId === entry.itemId);
        if (index !== -1) {
            this.contents.splice(index, 1)
            return true
        }
        return false
    }
}