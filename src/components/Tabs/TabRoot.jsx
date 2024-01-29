import { useEffect, useState } from "react";
import Tab from "@/components/Tabs/Tab";
import Categories from "@/components/Renderer/Categories";

export default function TabRoot({ simpleFilter, setSimpleFilter, activeId, setActiveId, complicateFilter}) {
  return (
    <div className={`p-4 flex-[1_1_auto] flex flex-col`}>
      <div className={`ml-10 mt-4 inline`}>
        <Tab targetId={0} setSelected={setActiveId} name={`Blacklist`} />
        <Tab targetId={1} setSelected={setActiveId} name={`Whitelist`} />
        <Tab targetId={2} setSelected={setActiveId} name={`User Flip Finder`} />
        <Tab targetId={3} setSelected={setActiveId} name={`True Blacklist`} />
        <Tab targetId={-1} setSelected={setActiveId} name={`Extra Settings`} />
      </div>
      <div className={`border-Highlight border rounded w-full h-full flex flex-col`}>
        <Categories simpleFilter={simpleFilter} setSimpleFilter={setSimpleFilter} focusedId={activeId} complicateFilter={complicateFilter}/>
      </div>
    </div>
  );
}