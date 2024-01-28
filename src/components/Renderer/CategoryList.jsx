import { Draggable, Droppable } from "react-beautiful-dnd";

export default function CategoryList({
  getListStyle,
  getItemStyle,
  state,
  setState,
  id,
  title,
}) {
  return (
    <div
      className={
        `flex-col mx-auto justify-items-center justify-center items-center h-full`
      }
    >
      <h1
        className={
          `flex m-auto justify-items-center justify-center items-center`
        }
      >
        {title}
      </h1>

      <Droppable key={id} droppableId={`${id}`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
            className={`h-full`}
          >
            {state[Number.parseInt(id)].map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                    )}
                  >
                    <div
                      style={{
                        display: `flex`,
                        justifyContent: `space-around`,
                      }}
                    >
                      {item.content}
                      <button
                        type="button"
                        onClick={() => {
                          const newState = [...state];
                          newState[id].splice(index, 1);
                          setState(newState.filter((group) => group.length));
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
