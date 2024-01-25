import {useEffect, useState} from "react";
import {DragDropContext} from "react-beautiful-dnd";
import Blacklist from "@/components/Renderer/Blacklist";
import UserFlipFinder from "@/components/Renderer/UserFlipFinder";
import Whitelist from "@/components/Renderer/Whitelist";
import TrueBlacklist from "@/components/Renderer/TrueBlacklist";

export default function Categories({simpleFilter, setSimpleFilter}) {

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = [...[], ...sourceClone];
    result[droppableDestination.droppableId] = [...[], ...destClone];

    const ds = Number.parseInt(droppableSource.droppableId)
    const dd = Number.parseInt(droppableDestination.droppableId)

    const oldCategory = ds === 0 ? "blacklist" : ds === 1 ? "whitelist" : ds === 2 ? "user_flip_finder" : "true_blacklist"
    const newCategory = dd === 0 ? "blacklist" : dd === 1 ? "whitelist" : dd === 2 ? "user_flip_finder" : "true_blacklist"

    const itemId = source[droppableSource.index].content

    const newFilter = simpleFilter

    console.log("New category: " + JSON.stringify(destination) + "\nOld category: " + JSON.stringify(source) + "\nDestination: " + JSON.stringify(droppableSource) + "\nSource: " + JSON.stringify(droppableDestination))
    console.log("New cat name: " + newCategory + "\nOld cat name: " + oldCategory)
    newFilter[newCategory][itemId] = simpleFilter[oldCategory][itemId]
    delete newFilter[oldCategory][itemId]
    setSimpleFilter(newFilter)
    console.log(simpleFilter)

    return result;
  };
  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
  });
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250,
  });


  const [state, setState] = useState([[], [], [], []]);
  let id = 0

  const getId = () => {

    console.log(id++)
    return id.toString()
  }

  useEffect(() => {

    const tempState = [...state]
    tempState[0] = [...[], ...simpleFilter.blacklist ? Object.keys(simpleFilter.blacklist).map(i => ({
      id: getId(),
      content: i
    })) : []]
    tempState[1] = [...[], ...simpleFilter.whitelist ? Object.keys(simpleFilter.whitelist).map(i => ({
      id: getId(),
      content: i
    })) : []]
    tempState[2] = [...[], ...simpleFilter.user_flip_finder ? Object.keys(simpleFilter.user_flip_finder).map(i => ({
      id: getId(),
      content: i
    })) : []]
    tempState[3] = [...[], ...simpleFilter.true_blacklist ? Object.keys(simpleFilter.true_blacklist).map(i => ({
      id: getId(),
      content: i
    })) : []]
    console.log(tempState)
    setState(tempState)

  }, [simpleFilter]);

  function onDragEnd(result) {
    const {source, destination} = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState);
    }
  }

  return (
    <>
      <div className={"flex my-10 h-full"}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Blacklist
            state={state}
            setState={setState}
            getListStyle={getListStyle}
            getItemStyle={getItemStyle}
          />
          <Whitelist
            state={state}
            setState={setState}
            getListStyle={getListStyle}
            getItemStyle={getItemStyle}
          />
          <UserFlipFinder
            state={state}
            setState={setState}
            getListStyle={getListStyle}
            getItemStyle={getItemStyle}
          />
          <TrueBlacklist
            state={state}
            setState={setState}
            getListStyle={getListStyle}
            getItemStyle={getItemStyle}
          />
        </DragDropContext>
      </div>
    </>
  )
}