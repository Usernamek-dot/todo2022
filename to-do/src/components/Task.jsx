export const Task = () => {
  return (
    <>
      <div className="flex justify-center py-10 px-5   ">
        <div className=" block p-6 rounded-lg shadow-lg bg-white ">
          <h5 className="text-orange-200 text-xl leading-tight font-medium mb-2">
            Task title
          </h5>
          <form>
            {/* title */}
            <div className="mb-5">
              <input
                className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                type="text"
                placeholder="Title"
              />
            </div>
            {/* message */}
            <div className="mb-5">
              <textarea
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                rows="3"
                placeholder="Your message"
              ></textarea>
            </div>
            {/* //date */}
            <div className="mb-5">
              <input
                className="
 form-control
 block
 w-full
 px-3
 py-1.5
 text-base
 font-normal
 text-gray-700
 bg-white bg-clip-padding
 border border-solid border-gray-300
 rounded
 transition
 ease-in-out
 m-0
 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
                type="date"
                placeholder="Date"
              />
            </div>
            {/* submit */}
            <button
              type="submit"
              className="inline-block px-6 py-2 border-2 border-orange-200 text-orange-200 font-medium text-xs leading-tight uppercase rounded-full   hover:bg-black hover:bg-opacity-5 focus:outline-none"
            >
              button
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
