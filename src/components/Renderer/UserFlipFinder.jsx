import CategoryList from "@/components/Renderer/CategoryList";

export default function UserFlipFinder({state, setState, getListStyle, getItemStyle}) {
  return (
    <CategoryList
      id={2}
      title={"User Flip Finder"}
      state={state}
      setState={setState}
      getListStyle={getListStyle}
      getItemStyle={getItemStyle}
    >
    </CategoryList>
  )
}
