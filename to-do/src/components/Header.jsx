import { Button } from "./Button";

export const Header = () => {
  return (
    <>
      <nav className="  sticky top-0 z-50 bg-slate-800  w-full flex flex-wrap items-center flex justify-between py-3 bg-gray-100  shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <p className="font-medium leading-tight text-3xl mt-0 mb-2 text-orange-500">
            Kanban App
          </p>
          <Button>Login</Button>
        </div>
      </nav>
    </>
  );
};
