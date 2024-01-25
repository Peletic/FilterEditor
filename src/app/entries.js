import Entry from "@/app/item";


export default function Entries({list}) {
  return (
    <div>
      <div className="pb-6 pt-8 bg-blue-400 m-5" id="blacklist" onDragOver={(e) => {
        e.preventDefault()
      }}>
        <h1 className="font-sans font-light text-3xl text-center transition-colors ">
          Blacklist
        </h1>
        <ul className="font-sans font-light m-6 text-2xl text-center transition-colors  p-6">
          {list.blacklist.map((ele, index) => (
            <Entry list={list} key={index} itemId={ele.toString()}></Entry>))}
          <Entry list={list} itemId={"myId"}></Entry>
        </ul>
      </div>

      <div className="p-6 bg-blue-400 m-5" id="whitelist" onDragOver={(e) => {
        e.preventDefault()
      }}>

        <h1 className="font-sans font-light m-6 text-3xl text-center transition-colors  p-6">
          Whitelist
        </h1>
        <ul className="font-sans font-light m-6 text-2xl text-center transition-colors  p-6">
          {list.whitelist.map((ele, index) => (
            <Entry list={list} key={index} itemId={ele.toString()}></Entry>))}
          <Entry list={list} itemId={"myId"}></Entry>
        </ul>

      </div>
      <div className="p-6 bg-blue-400 m-5" id="user_flip_finder" onDragOver={(e) => {
        e.preventDefault()
      }}>

        <h1 className="font-sans font-light m-6 text-3xl text-center transition-colors  p-6">
          User FlipFinder
        </h1>
        <ul className="font-sans font-light m-6 text-2xl text-center transition-colors  p-6">
          {list.user_flip_finder.map((ele, index) => (
            <Entry list={list} key={index} itemId={ele.toString()}></Entry>))}
          <Entry list={list} itemId={"myId2"}></Entry>
        </ul>

      </div>
      <div className="p-6 bg-blue-400 m-5" id="true_blacklist" onDragOver={(e) => {
        e.preventDefault()
      }}>

        <h1 className="font-sans font-light m-6 text-3xl text-center transition-colors  p-6">
          TBL
        </h1>
        <ul className="font-sans font-light m-6 text-2xl text-center transition-colors  p-6">
          {list.true_blacklist.map((ele, index) => (
            <Entry list={list} key={index} itemId={ele.toString()}></Entry>))}
          <Entry list={list} itemId={"myId3"}></Entry>
        </ul>

      </div>
    </div>

  )
}
