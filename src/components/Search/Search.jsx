import { useEffect, useState } from "react";
import { compareTwoStrings } from "string-similarity";
import referenceIDs from "../../constants/search_ids.json";
import Heading from "@/components/Heading/Heading";
import ActionBar from "@/components/ActionBar/ActionBar";
import NoFilterWarning from "@/components/Warnings/NoFilterWarning";
import TabRoot from "@/components/Tabs/TabRoot";
import Constants from "@/constants/constants";

export default function Search({ filter, setFilter }) {
  const [suggestions, setSuggestions] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [simpleFilter, setSimpleFilter] = useState({
    blacklist: {},
    whitelist: {},
    true_blacklist: {},
    user_flip_finder: {}
  });
  const [ignoreLoaded, setIgnoreLoaded] = useState(false);
  
  const handleSearch = (event) => {
    const search = event.target.value.toLowerCase();
    if (search == null) {
      return setSuggestions([]);
    }
    
    // find 5 suggestions and list them in terms of relevance
    const suggestions = Object.keys(referenceIDs)
      .map((name) => {
        const split = referenceIDs[name].split(`_`);
        split.pop();
        return {
          name,
          id: referenceIDs[name],
          rating: compareTwoStrings(search, name),
          image:
            referenceIDs[name].includes(`RUNE`) ||
            (referenceIDs[name].startsWith(`PET`) &&
              !referenceIDs[name].includes(`ITEM`))
              ? null
              : `https://sky.shiiyu.moe/item/${referenceIDs[name]}`
        };
      })
      .filter(({ rating }) => rating > 0.3)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    
    setSuggestions(suggestions);
  };
  
  const simplifyFilter = (filter) => {
    const simplified = {
      blacklist: {},
      whitelist: {},
      true_blacklist: {},
      user_flip_finder: {},
      global: {
      
      }
    };
    
    for (const section of Object.keys(filter)) {
      (Array.isArray(filter[section]) ? filter[section] : Object.keys(filter[section])).forEach((key, el) => {
        if (section === `global`) return
        simplified[section][key] = {};
      });
    }
    
    if (filter.global) {
      simplified.global = filter.global;
    } else {
      simplified.global = Constants.global;
    }
    
    console.log(JSON.stringify(simplified));
    
    setSimpleFilter(simplified);
  };
  
  const complicateFilter = (simplifiedFilter) => {
    const { blacklist, whitelist, true_blacklist, user_flip_finder } =
      simplifiedFilter;
    
    const complicated = {
      blacklist: [],
      whitelist: {},
      true_blacklist: [],
      user_flip_finder: {}
    };
    
    Object.keys(blacklist).forEach((itemId) => {
      complicated.blacklist.push(itemId);
    });
    
    Object.keys(whitelist).forEach((itemId) => {
      complicated.whitelist[itemId] = {
        ...whitelist[itemId]
      };
    });
    
    Object.keys(true_blacklist).forEach((itemId) => {
      complicated.true_blacklist.push(itemId);
    });
    
    Object.keys(user_flip_finder).forEach((itemId) => {
      complicated.whitelist[itemId] = {
        ...user_flip_finder[itemId]
      };
    });
    
    setFilter(complicated);
  };
  
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const localFilter = localStorage.getItem(`filter`);
      if (localFilter && JSON.parse(localFilter) !== null) {
        const tempLocalFilter = JSON.parse(localFilter);
        console.log(`Setting filter to ` + tempLocalFilter);
        simplifyFilter(tempLocalFilter);
      }
    }
  }, []);
  
  useEffect(() => {
    if (
      JSON.stringify(simpleFilter) !==
      JSON.stringify({
        blacklist: {},
        whitelist: {},
        true_blacklist: {},
        user_flip_finder: {}
      })
    ) {
      console.log(`Setting filter to ` + JSON.stringify(simpleFilter));
      complicateFilter(simpleFilter);
      localStorage.setItem(`filter`, JSON.stringify(filter));
    }
  }, [simpleFilter]);
  
  return (
    <div className="h-full flex flex-col shrink-0">
      <Heading />
      <ActionBar handleSearch={handleSearch} suggestions={suggestions} setFilter={setFilter} filter={filter} setSimpleFilter={setSimpleFilter} simpleFilter={simpleFilter} activeTab={activeTab} simplifyFilter={simplifyFilter} />
      <TabRoot setSimpleFilter={setSimpleFilter} simpleFilter={simpleFilter} activeId={activeTab} setActiveId={setActiveTab} complicateFilter={complicateFilter} />
      <NoFilterWarning filter={filter} setIgnoreLoaded={setIgnoreLoaded} ignoreLoaded={ignoreLoaded} />
    </div>
  );
}

/*const [itemId, attributes] = key.split(`=`);
        const attributeList = attributes.split(`&`);
        const uniqueAttributes = {};
        const keyArr = [];
        
        attributeList.forEach((attribute) => {
          const [attributeName, attributeValue] = attribute.split(`:`);
          uniqueAttributes[attributeName] = attributeValue;
          keyArr.push(attributeName);
        });
        
        const keyOnly = keyArr.join(`&`);
        if (simplified[section][itemId] == null) {
          blacklist[itemId] = {};
        }
        
        const itemRef = simplified[section][itemId];
        if (itemRef[keyOnly] == null) {
          itemRef[keyOnly] = {};
        }
        
        Object.keys(uniqueAttributes).forEach((attributeName) => {
          if (itemRef[keyOnly][attributeName] == null) {
            itemRef[keyOnly][attributeName] = new Set();
          }
          
          itemRef[keyOnly][attributeName].add(uniqueAttributes[attributeName]);
        });*/
       