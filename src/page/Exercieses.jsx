import { useContext } from "react";
import { ExerciesesContext } from "../context/ExerciesesContext";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import useAxios from "../hooks/useAxios";
import { useQuery } from "react-query";
import NoMatch from "../Components/NoMatch";

const Exercieses = () => {
  const { searchResult, selectedBodyPart } = useContext(ExerciesesContext);

  const { fetchData } = useAxios();

  const {
    isError,
    isLoading,
    data: exercieses,
  } = useQuery({
    queryFn: () => fetchData(`exercises?limit=20&offset=0`),
    queryKey: "Exercises",
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loader />;
  if (isError) return <NoMatch />;

  let mainContent = searchResult.length ? searchResult : exercieses;
  let secondMainContent = selectedBodyPart.length
    ? selectedBodyPart
    : mainContent;

  return (
    <div className="mb-10">
      <h1 className="text-xl font-bold my-7">Showing the Results</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10  ">
        {secondMainContent?.map((exo, ind) => (
          <Link to={`/exercise/${exo?.id}`} className="" key={ind}>
            <div className="h-64 bg-white col-span- w-full shadow-2xl rounded-md border-t-2 border-red-500 pt-2 cursor-pointer transition-transform  hover:scale-95">
              <img
                src={exo?.gifUrl}
                alt={exo?.name}
                className="w-2/4 h-44 mx-auto"
              />
              <div className="bg-zinc-100 py-2">
                <div className="w-20 font-semibold ms-2  text-center rounded bg-red-300 hover:bg-red-600 text-white py-1 transition-colors">
                  {exo?.target}
                </div>
                <p className=" font-semibold ms-2 pt-2">
                  {exo?.name.length > 25
                    ? exo.name.substring(0, 25) + "..."
                    : exo.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exercieses;
