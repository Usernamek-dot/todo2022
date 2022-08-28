import addNote from "../assets/addNote.svg";

export const NoList = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center px-1  ">
        <div className="rounded-lg shadow-lg bg-white max-w-sm ">
          <img
            className="rounded-t-lg img-fluid"
            src={addNote}
            alt="The board is empty"
          />
        </div>
      </div>
    </>
  );
};

//here we practice how to add an img in reactjs
