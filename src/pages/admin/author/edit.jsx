
export default function AuthorEdit() {
  return (
    <div className="flex flex-col gap-9">
      <div
        className="rounded-sm bg-white shadow-default :bg-box"
      >
        <div
          className="border-b border-stroke px-6.5 py-4 :border-stroke"
        >
          <h3 className="font-medium text-black :text-white">
            Edit Data Author
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
                Bio
              </label>
              <textarea
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
              ></textarea>
            </div>
            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black :text-white"
              >
                Photo
              </label>

              <input
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :file:border-form-stroke :file:bg-white/30 :file:text-white :focus:border-indigo-600"
              />
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