import { useContext } from "react";
import { ExerciesesContext } from "../context/ExerciesesContext";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Exercieses = () => {
  const { exos } = useContext(ExerciesesContext);

  if (!exos.length) return <Loader />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">Showing the Results</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 ">
        {exos.map((exo, ind) => (
          <Link to={`exercise/${exo.id}`} className="" key={ind}>
            <div className="col-span- w-full box border-t-4 border-red-500 py-4 cursor-pointer transition-transform  hover:scale-95">
              <img
                src={exo.gifUrl}
                alt={exo.name}
                className="w-2/4 h-52 mx-auto"
              />
              <div className="flex items-center gap-3 justify-start ps-3 ">
                <span className="w-24 text-xl font-semibold mb-3 text-center rounded bg-red-300 text-white p-2">
                  {exo.target}
                </span>
              </div>
              <p className="text-xl font-semibold ps-3">{exo.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination flex items-center justify-center  gap-3 ">
        <span className="bg-gray-300 px-2 py-1 rounded cursor-pointer">1</span>
        <span className="bg-gray-300 px-2 py-1 rounded cursor-pointer">2</span>
        <span className="bg-gray-300 px-2 py-1 rounded cursor-pointer">3</span>
        <span className="bg-gray-300 px-2 py-1 rounded cursor-pointer">4</span>
      </div>
    </div>
  );
};

export default Exercieses;
