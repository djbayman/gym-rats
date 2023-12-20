import { useEffect } from "react";
import Details from "../Components/Details";
import useAxios, { exOptions, youtubeOptions } from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ExerciesesContext } from "../context/ExerciesesContext";
import ExerciseVideos from "../Components/ExerciseVideos";

import Similare from "../Components/Similare";
import Equipment from "../Components/equipment";

const ExerciesesDetails = () => {
  const {
    setSpecificExo,
    specificExo,
    setTargetMuscle,
    setEquipmentExo,
    setYoutubeVideos,
  } = useContext(ExerciesesContext);

  const { fetchData } = useAxios();
  const { id } = useParams();

  useEffect(() => {
    const fetchSpecificExo = async () => {
      const specificExoData = await fetchData(`/exercise/${id}`, exOptions);
      setSpecificExo(specificExoData);
      //
      const fetchYtVideosData = await fetch(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${specificExoData.name} exercise`,
        youtubeOptions
      );
      const ytVidoesData = await fetchYtVideosData.json();
      setYoutubeVideos(ytVidoesData.contents);
      //
      const targetMuscleData = await fetchData(
        `/target/${specificExo.target}`,
        exOptions
      );
      setTargetMuscle(targetMuscleData);
      //
      const equipmentExoData = await fetchData(
        `/equipment/${specificExo.equipment}`,
        exOptions
      );
      setEquipmentExo(equipmentExoData);
    };
    fetchSpecificExo();
  }, [id]);

  if (!specificExo) return <div>No Data</div>;

  return (
    <div>
      <Details />
      <ExerciseVideos />
      <Similare />
      <Equipment />
    </div>
  );
};

export default ExerciesesDetails;
