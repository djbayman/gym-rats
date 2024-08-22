export const exOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d9fad6153msh12a0e00c9afe25ep18f86ejsn8977aef96565",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
//
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "909ce48e25mshc893eb9cd44e5a4p17a611jsnaeadd2eefda1",
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
