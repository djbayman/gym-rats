import { useContext } from "react";
import { ExerciesesContext } from "../context/ExerciesesContext";

import BodyPartImage from "/public/assets/icons/body-part.png";
import TargetImage from "/public/assets/icons/target.png";
import EquipmentImage from "/public/assets/icons/equipment.png";
import useAxios, { exOptions } from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Details = () => {
  const {
    setSpecificExo,
    specificExo,
    setTargetMuscle,
    targetMuscle,
    setEquipmentExo,
    equipmentExo,
  } = useContext(ExerciesesContext);

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

  console.log(targetMuscle);

  const instractionsData = specificExo.instructions;

  return (
    <div className="flex flex-col md:flex-row items-center gap-14 my-10">
      <div className="w-2/3 md:w-1/3">
        <img src={specificExo.gifUrl} alt={specificExo.name} />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-bold ps-2 mb-6 capitalize">
          {specificExo.name}
        </h1>
        <ul>
          {instractionsData &&
            instractionsData.map((instr) => (
              <li key={instr} className="text-xl font-semibold ps-5 pb-3">
                - {instr}
              </li>
            ))}
        </ul>
        <div className="mt-4 flex flex-row md:flex-col gap-5 justify-center">
          {extraDetail.map((item, ind) => (
            <div
              className="flex flex-col md:flex-row items-center gap-4 "
              key={ind}
            >
              <button
                style={{
                  background: "#FFF2DB",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.icon}
                  className="mx-auto"
                  style={{ width: "40px", height: "40px" }}
                  alt=""
                />
              </button>
              <span className="text-lg font-semibold capitalize">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
