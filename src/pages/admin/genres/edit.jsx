
export default function GenreEdit() {
  return (
    <div className="flex flex-col gap-9">
      <div
        className="rounded-sm bg-white shadow-default :bg-box"
      >
        <div
          className="border-b border-stroke px-6.5 py-4 :border-stroke"
        >
          <h3 className="font-medium text-black :text-white">
            Edit Data Genre
          </h3>
        </div>
        <form action="#" className="py-5">
          <div className="p-6.5 flex flex-col gap-5">
            
            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black :text-white"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black :text-white"
              >
                Description
              </label>
              <textarea
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded bg-indigo-600 p-3 font-medium text-white hover:bg-opacity-90"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}