import AutoSizer from "react-virtualized-auto-sizer";
import {List} from "react-virtualized";
import Item from "@/components/Renderer/Item";

export default function UserFlipFinder ({ simpleFilter }) {
  return (
    <div
      className='p-4'
    >
      {simpleFilter != null && (
        <h1
          className='font-sans font-light text-3xl text-center transition-colors hover:text-cyan-500 p-3'
        >
          UserFlipFinder
        </h1>
      )}
      {simpleFilter != null && (
          <AutoSizer
              disableWidth
          >
            {({ height }) => (
                <List class={"category"} id={"user_flip_finder"}
                      rowRenderer={({ index, key, style }) => (
                          <Item
                              index={index}
                              key={key}
                              style={style}
                              simpleFilter={simpleFilter}
                              filter={filter}
                              setFilter={setFilter}
                          />
                      )}
                      width={1200}
                      height={height}
                      rowHeight={100}
                      rowWidth={50}
                      rowCount={Object.keys(simpleFilter.user_flip_finder).length}
                />
            )}
          </AutoSizer>
      )}
    </div>
  )
}
