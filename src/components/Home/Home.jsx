import { useState } from 'react'
import Heading from '../Heading/Heading'
import Search from '../Search/Search'

export default function Home () {
  const [filter, setFilter] = useState(null)

  return (
    <main
      className='select-none tracking-tight h-full'
    >
      <Heading
        content='Config Editor'
      />
      <div
        className='p-5 mx-2 my-5 h-full'
      >
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <Search
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </main>
  )
}
