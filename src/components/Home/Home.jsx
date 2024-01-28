import { useState } from "react";
import Search from "../Search/Search";

export default function Home() {
  const [filter, setFilter] = useState(null);

  return (
    <main className="select-none tracking-tight relative h-full">

      <Search filter={filter} setFilter={setFilter} />

    </main>
  );
}
