import { Button } from "./Button";
import { useState } from "react";
import { AlertError } from "./Error";

export const Form = ({ task, setTask }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([title, message, date].includes("")) {
      //validation
      setError(true);
      return; // to avoid same state to remain in dom
    }
    setError(false); // to avoid same state to remain in dom
    const taskObject = {
      title,
      message,
      date,
    };
    setTask([...task, taskObject]); //spread operator + object
    //reset form
    setTitle("");
    setMessage("");
    setDate("");
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
            {error && <AlertError />}
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
                value={title}
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
