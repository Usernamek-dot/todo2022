import { Button } from "./Button";
import { useState } from "react";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    if ([title, message, date].includes("")) {
      setError(true);
      return; // to avoid same state to remain in dom
    }
    setError(false); // to avoid same state to remain in dom
  };

  return (
    <>
      <div className=" py-10 px-5 w-full  ">
        <h5 className="text-orange-200 text-xl leading-tight font-medium mb-2">
          Add
        </h5>
        <div className=" block p-6 rounded-lg shadow-lg bg-white ">
          <form onSubmit={handleSubmit}>
            {/* validation */}
            {error && (
              <div
                class=" mb-5  bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
                role="alert"
              >
                <div class="flex">
                  <div class="py-1">
                    <svg
                      class="fill-current h-6 w-6 text-red-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold">Hey!</p>
                    <p class="text-sm">
                      You should fill out all the form first.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {/* submit */}
            <Button />
          </form>
        </div>
      </div>
    </>
  );
};
