import { Link } from "react-router-dom";
import bannerImg from "../assets/images/banner.png";

const Header = () => {
  return (
    <div
      className="content flex justify-around gap-14 "
      style={{ height: "82vh" }}
    >
      <div className="flex flex-col justify-center w-2/4">
        <h3 className="text-xl font-bold text-red-500 mb-8">Fitness Club</h3>
        <p className="text-3xl font-semibold mb-4">Sweat Smile, And Repeat</p>
        <span className="font-semibold text-gray-600 ">
          Check out the most effective exercieses personalized to you
        </span>
        <Link to="/exercises">
          <button className="bg-red-500 px-2 py-3 text-lg font-semibold text-white rounded-sm mt-8 w-44 border-2 border-red-500 hover:bg-white hover:text-red-500 transition-colors">
            Explore Exercieses
          </button>
        </Link>
      </div>
      <div className="p-img-header relative w-2/4 z-20">
        <img
          src={bannerImg}
          alt=""
          className="img-header object-cover shadow-lg rounded-b-xl"
        />
      </div>
    </div>
  );
};

export default Header;
