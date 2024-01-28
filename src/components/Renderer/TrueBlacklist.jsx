import CategoryList from "@/components/Renderer/CategoryList";

export default function TrueBlacklist({
  state,
  setState,
  getListStyle,
  getItemStyle
}) {
  return (
    <CategoryList
      id={3}
      title={`True Blacklist`}
      state={state}
      setState={setState}
      getListStyle={getListStyle}
      getItemStyle={getItemStyle}
    ></CategoryList>
  );
}
