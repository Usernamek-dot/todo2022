import { Button } from "./Button";

export const Task = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className=" mt-5 block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="py-3 px-6 border-b border-gray-300">Featured</div>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Special title treatment
            </h5>
            <p className="text-gray-700 text-base mb-4">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button>Delete</Button>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            2 days ago
          </div>
        </div>
      </div>
    </>
  );
};
