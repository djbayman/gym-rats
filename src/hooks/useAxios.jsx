export const exOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_GYMRATS_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
//
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_GYMYTB_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

const useAxios = () => {
  const fetchData = async (query, options) => {
    try {
      const result = await fetch(
        `https://exercisedb.p.rapidapi.com/${query}`,
        options
      );
      const data = await result.json();
      return data;
    } catch (err) {
      alert("Error: refresh the page");
    }
  };

  return {
    fetchData: (query, options) => fetchData(query, options),
  };
};

export default useAxios;
