import { createContext, useState } from "react";

export const ExerciesesContext = createContext();

const ExerciesesProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState([]);

  const value = {
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
