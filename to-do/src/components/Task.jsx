import { Button } from "./Button";

export const Task = () => {
  return (
    <>
      <div class="flex justify-center">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-gray-300">Featured</div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Special title treatment
            </h5>
            <p class="text-gray-700 text-base mb-4">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button />
          </div>
          <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
            2 days ago
          </div>
        </div>
      </div>
    </>
  );
};
