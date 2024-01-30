import Image from "next/image";
import constantNames from "@/constants/search_ids.json"


export default function Suggestion({ key, name, image, index, setFilter, filter, activeId }) {
  return (
    <li key={index} className="relative">
      <button
        type="button"
        className="flex items-center w-full mx-2 my-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        onClick={() => {
          const activeName = activeId === 0 ? `blacklist` : activeId === 1 ? `whitelist` : activeId === 2 ? `user_flip_finder` : activeId === 3 ? `true_blacklist` : null;
          console.log(activeName);
          console.log(activeId)
          if (activeName === null) return;
          setFilter({
            ...filter,
            [activeName]: {
              ...(filter[activeName] ? filter[activeName] : null),
              [constantNames[name] + `=global:true`] : {}
            }
          });
        }}
      >
        <span className="ml-2">{name}</span>
        {image && (
          <Image
            src={image}
            className="w-8 h-8 absolute right-2"
            alt={name}
            width={64}
            height={64}
          />
        )}
      </button>
    </li>
  );
}
