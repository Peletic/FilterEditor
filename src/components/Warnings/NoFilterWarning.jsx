export default function NoFilterWarning({ filter, ignoreLoaded, setIgnoreLoaded }) {
  return (
    <>
      {filter === null && !ignoreLoaded && (
        <div
          className={
            `bg-[#273b30] rounded mx-auto h-fit w-fit fixed flex bottom-0 left-0 right-0`
          }
        >
          <button
            className="bg-red-700 transition-colors hover:bg-red-600 p-2 rounded"
            onClick={() => setIgnoreLoaded(true)}
          >
            ⓧ
          </button>
          <h1 className="font-sans font-light p-6 text-3xl text-center transition-colors hover:text-cyan-500">
            No filter loaded! Upload a filter to get started.
          </h1>
        </div>
      )}</>
  );
}