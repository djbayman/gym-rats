import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { ExerciesesContext } from "../context/ExerciesesContext";
import catigoryImg from "../assets/icons/gym.png";
import arrowLeft from "../assets/icons/left-arrow.png";
import arrowRight from "../assets/icons/right-arrow.png";
import { useQuery, useQueryClient } from "react-query";

const Search = () => {
  const [search, setSearch] = useState("");
  const [setIndex, setSetIndex] = useState(0);
  const [bodyPartList, setBodyPartList] = useState([]);
  const [text, setText] = useState("");
  const { setSearchResult, setSelectedBodyPart } =
    useContext(ExerciesesContext);

  const { fetchData } = useAxios();
  const queryClient = useQueryClient();

  const { data: bodyPart, isLoading: bodyPartListLoading } = useQuery({
    queryFn: () => fetchData(`exercises/bodyPartList`),
    queryKey: ["Exercies-bodyPartList"],
    onSuccess: (bodyPart) => {
      setBodyPartList(["All", ...bodyPart]);
    },
  });
  const exercieses = queryClient.getQueryData("Exercises") || [];

  useEffect(() => {
    if (text !== "All") {
      const searchedExercieses = exercieses?.filter(
        (exo) =>
          exo.name.toLowerCase().includes(text) ||
          exo.target.toLowerCase().includes(text) ||
          exo.bodyPart.toLowerCase().includes(text) ||
          exo.equipment.toLowerCase().includes(text)
      );
      setSelectedBodyPart(searchedExercieses);
    } else {
      setSelectedBodyPart(exercieses);
    }
  }, [text]);

  const showNextSet = () => {
    setSetIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  const showPrevSet = () => {
    setSetIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex - 1));
  };

  //
  useEffect(() => {
    if (search !== "") {
      const searchedExercieses = exercieses?.filter(
        (exo) =>
          exo.name.toLowerCase().includes(search) ||
          exo.target.toLowerCase().includes(search) ||
          exo.bodyPart.toLowerCase().includes(search) ||
          exo.equipment.toLowerCase().includes(search)
      );
      console.log(searchedExercieses);
      setSearchResult(searchedExercieses);
    } else {
      setSearchResult([]);
    }
  }, [search]);

  const handleEnter = (e) => {
    if (e.key === "Enter" && search !== "") {
      const searchedExercieses = exercieses?.filter(
        (exo) =>
          exo.name.toLowerCase().includes(search) ||
          exo.target.toLowerCase().includes(search) ||
          exo.bodyPart.toLowerCase().includes(search) ||
          exo.equipment.toLowerCase().includes(search)
      );
      setSearchResult(searchedExercieses);
    }
  };

  if (bodyPartListLoading) return <p>Loading...</p>;

  return (
    <div className="my-10 ">
      <h2 className="text-center text-xl font-semibold">
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
          onClick={handleEnter}
        >
          Search
        </button>
      </div>
      <div className="max-w-full overflow-hidden relative">
        <div
          className="flex items-center gap-40  transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${setIndex * 80}%)` }}
        >
          {bodyPartList?.map((image, ind) => (
            <div
              style={{
                minWidth: "150px",
              }}
              key={ind}
              className={`box py-5 bg-red-100 hover:bg-red-200 transition-colors rounded  flex flex-col items-center justify-center cursor-pointer ${
                text === image ? "border-t-4  border-red-500" : ""
              }`}
              onClick={() => setText(image)}
            >
              <img className="h-10" src={catigoryImg} alt="" />
              <span className=" font-semibold mt-4">{image}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-5 me-4">
        <img
          src={arrowLeft}
          alt=""
          className="cursor-pointer p-2 hover:bg-red-50"
          onClick={showPrevSet}
        />
        <img
          src={arrowRight}
          alt=""
          className="cursor-pointer p-2 hover:bg-red-50"
          onClick={showNextSet}
        />
      </div>
    </div>
  );
};

export default Search;
