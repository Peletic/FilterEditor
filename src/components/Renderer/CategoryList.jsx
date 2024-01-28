import { Draggable, Droppable } from "react-beautiful-dnd";

export default function CategoryList({ getListStyle, getItemStyle, state, setState, id, title }) {
  return (
    <div
      className={`flex-col flex flex-[1_1_100%] h-full mx-auto justify-items-center justify-center items-center justify-self-end`}>
      <h1 className={`flex mx-auto`}>{title}</h1>

      <Droppable key={id} droppableId={`${id}`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
            className={`rounded outline-Highlight h-full outline-1 outline`}
          >
            {state[Number.parseInt(id)].map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <div>
                      {item.content}
                      <button
                        type="button"
                        onClick={() => {
                          const newState = [...state];
                          newState[Number.parseInt(id)].splice(index, 1);
                          setState(
                            newState
                          );
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  );
}