import CategoryList from "@/components/Renderer/CategoryList";

export default function Whitelist({
  state,
  setState,
  getListStyle,
  getItemStyle,
  focusedId
}) {
  return (
    <CategoryList
      id={1}
      title={`Whitelist`}
      state={state}
      setState={setState}
      getListStyle={getListStyle}
      getItemStyle={getItemStyle}
      focusedId={focusedId}
    ></CategoryList>
  );
}
