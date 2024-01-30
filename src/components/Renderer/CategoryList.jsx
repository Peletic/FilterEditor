import { Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect } from "react";
import Item from "@/components/Renderer/Item";

export default function CategoryList({ getListStyle, getItemStyle, state, setState, id, title, focusedId }) {
  return (
    <div
      className={`flex-col flex flex-[1_1_100%] right-10 h-full absolute mx-auto justify-items-center justify-center items-center justify-self-end  ${focusedId !== id ? `collapse` : null}`}>
      <h1 className={`flex mx-auto text-2xl`}>{title}</h1>

      <Droppable key={id} droppableId={`${id}`} isDropDisabled={focusedId !== id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
            className={`rounded outline-Highlight h-full outline-1 outline`}
          >
            {state[Number.parseInt(id)].map((item, index) => (
            
              // eslint-disable-next-line react/jsx-key
              <Item props={{
                id,
                getItemStyle,
                index,
                item,
                state,
                setState
              }}/>
              
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  );
}