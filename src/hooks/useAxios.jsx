import axios from "axios";
import NoMatch from "../Components/NoMatch";

//
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_GYMYTB_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

const useAxios = () => {
  const fetchData = async (query) => {
    try {
      const result = await axios.get(
        `https://exercisedb.p.rapidapi.com/${query}`,
        {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_GYMRATS_KEY,
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        }
      );
      return result.data;
    } catch (err) {
      // alert("Error: refresh the page");
      <NoMatch />;
    }
  };

  return {
    fetchData: (query) => fetchData(query),
  };
};

export default useAxios;
