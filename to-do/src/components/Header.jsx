export const Header = () => {
  return (
    <>
      <nav class="bg-slate-900 sticky w-full flex flex-wrap items-center flex justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <p className="font-medium leading-tight text-3xl mt-0 mb-2 text-orange-500">
            Kanban App
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-orange-200 text-orange-200 font-medium text-xs leading-tight uppercase rounded-full   hover:bg-black hover:bg-opacity-5 focus:outline-none"
          >
            button
          </button>
        </div>
      </nav>
    </>
  );
};
