import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";

export default function Item({
                               props: {
                                 id,
                                 getItemStyle,
                                 index,
                                 item,
                                 state,
                                 setState
                               }
                             }) {
  
  
  return (
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
          className={`flex-inline flex items-center justify-center bg-gray-900 rounded`}
        >
          
          <h1 className="font-mono">{item.content}</h1>
          <Image
            src={`https://sky.shiiyu.moe/item/${item.content.toString().split(`=`)[0].toUpperCase()}`}
            alt={item.content.toString().split(`=`)[0]}
            className="absolute left-10"
            width={64}
            height={64}
          />
          <button
            type="button"
            className={`bg-red-700 transition-colors hover:bg-red-600 absolute right-5 p-2 rounded`}
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
      )}
    </Draggable>
  );
}
