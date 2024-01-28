import Suggestions from "@/components/Suggestion/Suggestions";
import Upload from "@/components/Handler/Upload";
import Download from "@/components/Handler/Download";
import Clear from "@/components/Handler/Clear";

export default function ActionBar({ handleSearch, suggestions, setFilter, filter, setSimpleFilter, simpleFilter }) {
  return (
    <div className="h-fit flex flex-[0_1_fit-content] relative">
      <input
        type="search"
        id="default-search"
        className="h-fit block w-1/4 p-4 ml-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none transition-all ease-in-out hover:w-1/2 duration-200"
        placeholder="Search for an item to use in your filter"
        required
        onChange={handleSearch}
      ></input>
      {suggestions.length > 0 && (
        <Suggestions
          suggestions={suggestions}
          setFilter={setSimpleFilter}
          filter={simpleFilter}
        />
      )}
      <Upload setFilter={setFilter} />
      <Download filter={filter} setFilter={setFilter} />
      <Clear
        filter={filter}
        setFilter={setFilter}
        setSimplifiedFilter={setSimpleFilter}
      />
    </div>
  );
}