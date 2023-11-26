import {useCallback, useEffect, useRef, useState} from "react";





export default function Entry({itemId, list}) {

    const [addCss, setCss] = useState("")
    const lists = ["blacklist", "whitelist", "user_flip_finder", "true_blacklist"]

    const remove = (event) => {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    }

    const onDrag = (event) => {
        console.log("Dragging")
        event.target.style.backgroundColor = "blue"
    }

    const onDrop = (event) => {
        let foundParent = false
        let childEvent = new Object(event)
        console.log("Dropping")
        while (!foundParent) {

            if (childEvent.target.id && lists.includes(childEvent.target.id)){
                foundParent = true
                list[childEvent.target.id].push(itemId)
                console.log(childEvent.target.id)
            } else {
                childEvent.target = childEvent.target.parentNode
            }
        }
    }

    return (
        <div draggable={true} className={"item font-sans font-light bg-green-600 inline-block p-6 hover:border-amber-50 hover:border-2" + addCss} onDragStart={onDrag} onDrop={onDrop}>
            <img src={`https://sky.shiiyu.moe/item/${itemId}`} alt={itemId}
                 className="h-8 w-8 top-5 right-5 float-left inline-block"></img>
            <h1 className="text-center font-mono inline m-5">
                Item:
                {itemId}
            </h1>
            <button className="bg-red-700 transition-colors hover:bg-red-600 bottom-4 right-5 p-2 rounded float-righ inline-block"
                    onClick={remove}>
                Remove
            </button>
        </div>
    )

}
