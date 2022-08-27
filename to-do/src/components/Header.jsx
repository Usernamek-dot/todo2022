export const Header = () => {
  return (
    <>
      <nav className="bg-slate-800 sticky w-full flex flex-wrap items-center flex justify-between py-3 bg-gray-100  shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <p className="font-medium leading-tight text-3xl mt-0 mb-2 text-orange-500">
            Kanban App
          </p>
          <button
            type="submit"
            className="inline-block px-6 py-2 border-2 border-orange-200 text-orange-200 font-medium text-xs leading-tight uppercase rounded-full   hover:bg-black hover:bg-opacity-5 focus:outline-none"
          >
            button
          </button>
        </div>
      </nav>
    </>
  );
};
