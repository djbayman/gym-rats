import { useState } from "react";

import { Link } from "react-router-dom";
import arrowLeft from "../assets/icons/left-arrow.png";
import arrowRight from "../assets/icons/right-arrow.png";
import Loader from "./Loader";

const Equipment = ({ equipmentExo, equipmentLoading }) => {
  const [setIndex, setSetIndex] = useState(0);

  const showNextSet = () => {
    setSetIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  const showPrevSet = () => {
    setSetIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex - 1));
  };

  if (equipmentLoading) return <Loader />;

  return (
    <>
      <div className="max-w-full overflow-hidden relative pb-4">
        <h1 className=" text-xl font-bold capitalize mb-6">
          Watch <span className="text-red-500">Equipment</span> exercise videos
        </h1>
        <div
          className="flex items-center  gap-11  transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${setIndex * 75}%)` }}
        >
          {equipmentExo?.map((image, ind) => (
            <Link to={`/exercise/${image.id}`} className="" key={ind}>
              <div
                key={ind}
                className=" box  shadow-2xl rounded-md  border-t-4 border-red-500 py-4 cursor-pointer transition-transform  hover:scale-95"
                style={{ minWidth: "200px", height: "320px" }}
              >
                <img src={image.gifUrl} alt={image.name} className="" />
                <div className="w-20 font-semibold ms-2 my-3 text-center rounded bg-red-300 hover:bg-red-600 text-white py-1 transition-colors">
                  {image.target}
                </div>
                <p className=" break-words font-semibold ps-3">
                  {image?.name.length > 25
                    ? image.name.substring(0, 25) + "..."
                    : image.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-5 me-4">
        <img
          src={arrowLeft}
          alt=""
          className="cursor-pointer p-2 hover:bg-red-50 "
          onClick={showPrevSet}
        />
        <img
          src={arrowRight}
          alt=""
          className="cursor-pointer p-2 hover:bg-red-50"
          onClick={showNextSet}
        />
      </div>
    </>
  );
};

export default Equipment;
