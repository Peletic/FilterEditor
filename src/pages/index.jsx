import HeadElement from '@/components/HeadElement/HeadElement'
import Home from '@/components/Home/Home'
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

export default function HomePage() {
    const [winReady, setwinReady] = useState(false);
    useEffect(() => {
        setwinReady(true);
    }, []);

    //the DnD lists dont work until AFTER the page is loaded and this is the best i could think of
    return (
        winReady ? <div className={"h-[70vh]"}>
            <HeadElement/>
            <Home/>


        </div> : null

    )
}
