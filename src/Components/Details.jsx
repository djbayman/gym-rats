import { useContext } from "react";
import { ExerciesesContext } from "../context/ExerciesesContext";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = () => {
  const { specificExo } = useContext(ExerciesesContext);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: specificExo.bodyPart,
    },
    {
      icon: TargetImage,
      name: specificExo.target,
    },
    {
      icon: EquipmentImage,
      name: specificExo.equipment,
    },
  ];

  if (!specificExo) return <div>No Data</div>;

  const instractionsData = specificExo.instructions;

  return (
    <div className="flex items-start flex-col md:flex-row my-10 gap-3">
      <div className="w-2/3 md:w-1/3 ">
        <img
          src={specificExo.gifUrl}
          alt={specificExo.name}
          className="rounded-md"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold ps-2 mb-2 capitalize">
          {specificExo.name}
        </h1>
        <ul>
          {instractionsData &&
            instractionsData.map((instr) => (
              <li key={instr} className=" font-semibold ps-5 pb-1">
                - {instr}
              </li>
            ))}
        </ul>
        <div className="mt-4 flex  gap-5 items-center">
          {extraDetail.map((item, ind) => (
            <div
              className="flex flex-col md:flex-row items-center gap-2 "
              key={ind}
            >
              <button
                style={{
                  background: "#FFF2DB",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.icon}
                  className="mx-auto"
                  style={{ width: "25px", height: "25px" }}
                  alt=""
                />
              </button>
              <span className="t font-semibold capitalize">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
