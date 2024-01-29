import Tab from "@/components/Tabs/Tab";
import Categories from "@/components/Renderer/Categories";
import JsonView from 'react18-json-view'
import '@/components/Tabs/editor.css'
export default function TabRoot({ simpleFilter, setSimpleFilter, activeId, setActiveId, complicateFilter }) {
  return (
    <div className={`p-4 flex-[1_1_auto] flex flex-col `}>
      <div className={`ml-10 mt-4 inline`}>
        <Tab targetId={0} selected={activeId} setSelected={setActiveId} name={`Blacklist`} />
        <Tab targetId={1} selected={activeId} setSelected={setActiveId} name={`Whitelist`} />
        <Tab targetId={2} selected={activeId} setSelected={setActiveId} name={`User Flip Finder`} />
        <Tab targetId={3} selected={activeId} setSelected={setActiveId} name={`True Blacklist`} />
        <Tab targetId={-1} selected={activeId}  setSelected={setActiveId} name={`Extra Settings`} />
      </div>
      <div className={`border-Highlight border rounded w-full h-full flex flex-col`}>
        {activeId !== -1 ?
          <Categories simpleFilter={simpleFilter} setSimpleFilter={setSimpleFilter} focusedId={activeId} complicateFilter={complicateFilter} />
          : <JsonView src={simpleFilter.global} theme={`atom`} name={false} enableClipboard={false} displayDataTypes={false} displayObjectSize={false} editable={{add: false, edit: true, delete: false}}/>
        }
      </div>
    </div>
  );
}