import {useEffect, useState} from 'react'
import {compareTwoStrings} from 'string-similarity'
import Upload from '../Handler/Upload'
import referenceIDs from '../../constants/search_ids.json'
import Download from '../Handler/Download'
import Clear from '../Handler/Clear'
import Suggestions from '../Suggestion/Suggestions'
import Blacklist from '../Renderer/Blacklist'
import Whitelist from '../Renderer/Whitelist'
import UserFlipFinder from '../Renderer/UserFlipFinder'
import TrueBlacklist from '../Renderer/TrueBlacklist'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

export default function Search({filter, setFilter}) {
    const [suggestions, setSuggestions] = useState([])
    const [simpleFilter, setSimpleFilter] = useState(null)

    const handleSearch = (event) => {
        const search = event.target.value.toLowerCase()
        if (search == null) {
            return setSuggestions([])
        }

        // find 5 suggestions and list them in terms of relevance
        const suggestions = Object.keys(referenceIDs).map((name) => {
            const split = referenceIDs[name].split('_')
            split.pop()
            return {
                name,
                id: referenceIDs[name],
                rating: compareTwoStrings(search, name),
                image: referenceIDs[name].includes('RUNE') || (referenceIDs[name].startsWith('PET') && !referenceIDs[name].includes("ITEM")) ? null : `https://sky.shiiyu.moe/item/${referenceIDs[name]}`
            }
        }).filter(({rating}) => rating > 0.3).sort((a, b) => b.rating - a.rating).slice(0, 5)

        setSuggestions(suggestions)
    }

    const simplifyFilter = (filter) => {
        const simplified = {
            blacklist: {},
            whitelist: {},
            true_blacklist: {},
            user_flip_finder: {}
        }

        const {
            blacklist,
            whitelist,
            true_blacklist,
            user_flip_finder
        } = simplified

        // if there are same keys and same attributes but different values, then group them together
        // for example:     "ASPECT_OF_THE_DRAGON=rarity_upgraded:true&ultimate_combo:1",
        //     "ASPECT_OF_THE_DRAGON=rarity_upgraded:true&ultimate_combo:2", would become
        //     "ASPECT_OF_THE_DRAGON=rarity_upgraded:true&ultimate_combo:1,2"

        filter.blacklist.forEach((key) => {
            const [itemId, attributes] = key.split('=')
            const attributeList = attributes.split('&')
            const uniqueAttributes = {}
            const keyArr = []

            attributeList.forEach((attribute) => {
                const [attributeName, attributeValue] = attribute.split(':')
                uniqueAttributes[attributeName] = attributeValue
                keyArr.push(attributeName)
            })

            const keyOnly = keyArr.join('&')
            if (blacklist[itemId] == null) {
                blacklist[itemId] = {}
            }

            const itemRef = blacklist[itemId]
            if (itemRef[keyOnly] == null) {
                itemRef[keyOnly] = {}
            }

            Object.keys(uniqueAttributes).forEach((attributeName) => {
                if (itemRef[keyOnly][attributeName] == null) {
                    itemRef[keyOnly][attributeName] = new Set()
                }

                itemRef[keyOnly][attributeName].add(uniqueAttributes[attributeName])
            })
        })

        return simplified
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localFilter = localStorage.getItem('filter')
            if (localFilter) {
                setFilter(JSON.parse(localFilter))
            }
        }
    }, [])

    useEffect(() => {
        if (filter != null) {
            const simplified = simplifyFilter(filter)

            localStorage.setItem('filter', JSON.stringify(filter))
            setSimpleFilter(simplified)
        } else {
            localStorage.removeItem('filter')
            setSimpleFilter(null)
        }
    }, [filter])


    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

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
        width: 250
    });
    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            state.items,
            result.source.index,
            result.destination.index
        );

        setState({
            items
        });
    }
    const getItems = count =>
        Array.from({ length: count }, (v, k) => k).map(k => ({
            id: `item-${k}`,
            content: `item ${k}`
        }));
    const [state, setState] = useState({items: getItems(10)})

    return (
        <div
            className='relative'
        >
            <input
                type='search'
                id='default-search'
                className='block w-1/4 py-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none transition-all ease-in-out hover:w-1/2 duration-200'
                placeholder='Search for an item to use in your filter'
                required
                onChange={handleSearch}
            >
            </input>
            {suggestions.length > 0 && (
                <Suggestions
                    suggestions={suggestions}
                />
            )}
            <Upload
                setFilter={setFilter}
            />
            <Download
                filter={filter}
                setFilter={setFilter}
            />
            <Clear
                filter={filter}
                setFilter={setFilter}
            />
            {filter == null && (
                <h1
                    className='font-sans font-light m-6 text-3xl text-center transition-colors hover:text-cyan-500'
                >
                    No filter loaded! Upload a filter to get started.
                </h1>
            )}

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
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
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            <Blacklist
                                simpleFilter={simpleFilter}
                                filter={filter}
                                setFilter={setFilter}
                            /></div>
                    )}
                </Droppable>

                <Whitelist
                    simpleFilter={simpleFilter}
                />

                <UserFlipFinder
                    simpleFilter={simpleFilter}
                />

                <TrueBlacklist
                    simpleFilter={simpleFilter}
                />

            </DragDropContext>
        </div>
    )
}
