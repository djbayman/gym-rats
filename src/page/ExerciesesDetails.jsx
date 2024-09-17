import Details from "../Components/Details";
import useAxios, { youtubeOptions } from "../hooks/useAxios";
import { useParams } from "react-router-dom";

import ExerciseVideos from "../Components/ExerciseVideos";

import Similare from "../Components/Similare";
import Equipment from "../Components/Equipment";
import { useQuery } from "react-query";

const ExerciesesDetails = () => {
  const { fetchData } = useAxios();
  const { id } = useParams();

  const { data: specificExo, isLoading: spExoLoading } = useQuery({
    queryFn: () => fetchData(`exercises/exercise/${id}`),
    queryKey: ["Exercies-Details", id],
  });

  const targetMuscle = specificExo?.target;

  const { data: targetMuscleData, isLoading: targetLoading } = useQuery({
    queryFn: () => fetchData(`exercises/target/${targetMuscle}`),
    queryKey: ["Exercies-target", targetMuscle],
    enabled: !!targetMuscle,
  });

  const equipment = specificExo?.equipment;

  const { data: equipmentExo, isLoading: equipmentLoading } = useQuery({
    queryFn: () => fetchData(`exercises/equipment/${equipment}`),
    queryKey: ["Exercies-equipment", equipment],
    enabled: !!equipment,
  });

  const exerciseName = specificExo?.name;

  const { data: youtubeVideos, isLoading: ytvidoesLoading } = useQuery({
    queryFn: () =>
      fetch(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseName} exercise`,
        youtubeOptions
      ).then((res) => res.json()),
    queryKey: ["Exercies-video", exerciseName],
    enabled: !!exerciseName,
  });

  return (
    <div>
      <Details specificExo={specificExo} spExoLoading={spExoLoading} />
      <ExerciseVideos
        youtubeVideos={youtubeVideos}
        ytvidoesLoading={ytvidoesLoading}
      />
      <Similare
        targetMuscleData={targetMuscleData}
        targetLoading={targetLoading}
      />
      <Equipment
        equipmentExo={equipmentExo}
        equipmentLoading={equipmentLoading}
      />
    </div>
  );
};

export default ExerciesesDetails;
