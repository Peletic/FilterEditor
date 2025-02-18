import {TypeSelector} from "@/src/lib/generics/selector";

const winningBid: TypeSelector = {
    tag: "winning_bid_value",
    possibleValues: ["low", "medium", "max"],
    extra: "For clean item"
}

export {winningBid}