const Nav = () => {
  return (
    <div className="flex items-end justify-start mt-10">
      <img
        src="/public/assets/images/Logo.png"
        alt="logo"
        className="h-12 me-40"
      />
      <div className="flex gap-10 ">
        <h1 className="text-xl font-bold mx-4 hover:text-red-500 transition ">
          Home
        </h1>
        <h1 className="text-xl font-bold hover:text-red-500 transition ">
          Exercise
        </h1>
      </div>
    </div>
  );
};

export default Nav;
