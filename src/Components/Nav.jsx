import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      className=" shadow sticky top-0 bg-zinc-100 z-10 "
      style={{ height: "13vh" }}
    >
      <div className="flex items-end justify-start mx-10 py-2 gap-11">
        <Link to="/">
          <div className="flex p-3 gap-3">
            <img
              src="/public/assets/images/Logo.png"
              alt="logo"
              className="h-12 "
            />
            <h1 className="font-bold text-xl pt-5 text-red-500">Gym Rats</h1>
          </div>
        </Link>
        <div className="flex gap-10 pb-2">
          <Link to="/">
            <h1 className="text-lg font-bold mx-4 hover:text-red-500 transition ">
              Home
            </h1>
          </Link>
          <Link to="/exercises">
            <h1 className="text-lg font-bold hover:text-red-500 transition ">
              Exercise
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
