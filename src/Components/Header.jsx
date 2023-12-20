const Header = () => {
  return (
    <div className="content flex justify-between" style={{ height: "82vh" }}>
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-red-500 mb-8">Fitness Club</h3>
        <p className="text-6xl font-semibold mb-4">Sweat, Smile</p>
        <p className="text-6xl font-semibold mb-14">And Repeat</p>
        <span className="text-xl text-gray-600 ">
          Check out the most effective exercieses personalized to you
        </span>
        <button className="bg-red-500 px-2 py-3 text-lg font-semibold text-white rounded-sm mt-8 w-44 border-2 border-red-500 hover:bg-white hover:text-red-500 transition-colors">
          Explore Exercieses
        </button>
      </div>
      <div className="relative w-2/4">
        <img
          src="/public/assets/images/banner.png"
          alt=""
          className="absolute object-cover hidden md:block"
          style={{ top: "-90px", right: "0px", height: "calc(100vh - 91px)" }}
        />
      </div>
    </div>
  );
};

export default Header;
