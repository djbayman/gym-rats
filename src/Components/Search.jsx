import { useContext, useEffect, useState } from "react";
import useAxios, { exOptions } from "../hooks/useAxios";
import { ExerciesesContext } from "../context/ExerciesesContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const [setIndex, setSetIndex] = useState(0);
  const [text, setText] = useState("");
  const { bodyPart, setBodyPart, setExos } = useContext(ExerciesesContext);

  const { fetchData } = useAxios();

  useEffect(() => {
    const fetchBodyPart = async () => {
      const bodyPartList = await fetchData("/bodyPartList", exOptions);
      const allExo = await fetchData("", exOptions);
      bodyPartList.unshift("All");
      setBodyPart(bodyPartList);
      setExos(allExo);
    };

    fetchBodyPart();
  }, []);

  useEffect(() => {
    const fetchBodyPart = async () => {
      const allExo = await fetchData("", exOptions);

      const searchedExercieses = allExo.filter(
        (exo) =>
          exo.name.toLowerCase().includes(text) ||
          exo.target.toLowerCase().includes(text) ||
          exo.bodyPart.toLowerCase().includes(text) ||
          exo.equipment.toLowerCase().includes(text)
      );
      setExos(searchedExercieses);
    };

    fetchBodyPart();
  }, [text]);

  const showNextSet = () => {
    setSetIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  const showPrevSet = () => {
    setSetIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex - 1));
  };

  //
  const handleSearch = async () => {
    if (search) {
      const allExo = await fetchData("", exOptions);

      const searchedExercieses = allExo.filter(
        (exo) =>
          exo.name.toLowerCase().includes(search) ||
          exo.target.toLowerCase().includes(search) ||
          exo.bodyPart.toLowerCase().includes(search) ||
          exo.equipment.toLowerCase().includes(search)
      );
      setSearch("");
      setExos(searchedExercieses);
    }
  };
  const handleEnter = async (e) => {
    if (e.key === "Enter" && search) {
      const allExo = await fetchData("", exOptions);

      const searchedExercieses = allExo.filter(
        (exo) =>
          exo.name.toLowerCase().includes(search) ||
          exo.target.toLowerCase().includes(search) ||
          exo.bodyPart.toLowerCase().includes(search) ||
          exo.equipment.toLowerCase().includes(search)
      );
      setSearch("");
      setExos(searchedExercieses);
    }
  };

  const currentSet = bodyPart;

  return (
    <div className="my-20 ">
      <h2 className="text-center text-4xl font-bold">
        Awesome Exercises You Should Know
      </h2>
      <div className="field w-4/6 flex items-center px-3 mx-auto my-14">
        <input
          className="w-full border-2 rounded-l py-2 ps-2 outline-none "
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button
          className="w-44 bg-red-500 py-2 rounded text-white font-semibold    border-2 border-red-500 hover:bg-white hover:text-red-500 transition-colors"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="max-w-full overflow-hidden relative">
        <div
          className="flex items-center gap-52  transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${setIndex * 80}%)` }}
        >
          {currentSet &&
            currentSet.map((image, ind) => (
              <div
                style={{
                  minWidth: "200px",
                }}
                key={ind}
                className={`box bg-red-50 rounded  h-40 flex flex-col items-center justify-center cursor-pointer ${
                  image === "All" ? "border-t-4  border-red-500" : ""
                }`}
                onClick={() => setText(image)}
              >
                <img className="h-14" src="/assets/icons/gym.png" alt="" />
                <span className="text-xl font-semibold mt-4">{image}</span>
              </div>
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
    </div>
  );
};

export default Search;
