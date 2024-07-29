import {TypeSelector} from "@/src/lib/generics/selector";
import {IoAddCircleOutline} from "react-icons/io5";

export default function SelectorComponent({selector, handleClick}: {
    selector: TypeSelector,
    handleClick: (selector: TypeSelector) => void
}) {
    return (
        <div className={"block relative p-0.5"}>
            <div className={"group w-fit cursor-default"}>
                <p className={"group-hover:underline cursor-default inline"}>{selector.tag}</p> <IoAddCircleOutline
                className={"cursor-pointer inline"} color={"green"} size={24} onClick={() => handleClick(selector)}/>
            </div>
        </div>
    )
}