import CategoryList from "@/components/Renderer/CategoryList";

export default function Blacklist({state, setState, getListStyle, getItemStyle}) {
  return (
    <CategoryList
      id={0}
      title={"Blacklist"}
      state={state}
      setState={setState}
      getListStyle={getListStyle}
      getItemStyle={getItemStyle}
    >
    </CategoryList>
  )
}
