import { createContext, useState } from "react";

export const ExerciesesContext = createContext();

const ExerciesesProvider = ({ children }) => {
  const [bodyPart, setBodyPart] = useState([]);
  const [exos, setExos] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState([]);
  const [specificExo, setSpecificExo] = useState({});
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentExo, setEquipmentExo] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  const value = {
    bodyPart,
    setBodyPart,
    exos,
    setExos,
    specificExo,
    setSpecificExo,
    targetMuscle,
    setTargetMuscle,
    equipmentExo,
    setEquipmentExo,
    youtubeVideos,
    setYoutubeVideos,
    searchResult,
    setSearchResult,
    selectedBodyPart,
    setSelectedBodyPart,
  };

  return (
    <ExerciesesContext.Provider value={value}>
      {children}
    </ExerciesesContext.Provider>
  );
};

export default ExerciesesProvider;
