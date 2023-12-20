import { useContext, useState } from "react";
import { ExerciesesContext } from "../context/ExerciesesContext";
import { Link } from "react-router-dom";

const Equipment = () => {
  const [setIndex, setSetIndex] = useState(0);
  const { equipmentExo } = useContext(ExerciesesContext);

  const showNextSet = () => {
    setSetIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  const showPrevSet = () => {
    setSetIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex - 1));
  };

  console.log(equipmentExo);
  return (
    <>
      <div className="max-w-full overflow-hidden relative">
        <h1 className=" text-4xl font-bold capitalize mb-10">
          Watch <span className="text-red-500">Equipment</span> exercise videos
        </h1>
        <div
          className="flex items-center  gap-11  transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${setIndex * 75}%)` }}
        >
          {equipmentExo &&
            equipmentExo.map((image, ind) => (
              <Link to={`exercise/${image.id}`} className="" key={ind}>
                <div
                  key={ind}
                  className=" box  border-t-4 border-red-500 py-4 cursor-pointer transition-transform  hover:scale-95"
                  style={{ minWidth: "340px", height: "450px" }}
                >
                  <img src={image.gifUrl} alt={image.name} className="" />
                  <div className="flex items-center gap-3 justify-start ps-3 ">
                    <span className="w-24 text-xl font-semibold mb-3 text-center rounded bg-red-300 text-white p-2">
                      {image.target}
                    </span>
                  </div>
                  <p className="text-xl break-words font-semibold ps-3">
                    {image.name}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-5 me-4">
        <img
          src="/assets/icons/left-arrow.png"
          alt=""
          className="cursor-pointer p-2 hover:bg-red-50"
          onClick={showPrevSet}
        />
        <img
          src="/assets/icons/right-arrow.png"
          alt=""
          className="cursor-pointer p-2 hover:bg-red-50"
          onClick={showNextSet}
        />
      </div>
    </>
  );
};

export default Equipment;
