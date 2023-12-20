import { useContext } from "react";
import { ExerciesesContext } from "../context/ExerciesesContext";

const ExerciseVideos = () => {
  const { youtubeVideos } = useContext(ExerciesesContext);
  const ytvidoes = youtubeVideos.slice(0, 4);

  return (
    <div className="mb-40">
      <h1 className=" text-4xl font-bold capitalize mb-10">
        Watch more exercise videos
      </h1>
      <div className="flex flex-wrap justify-center  gap-5">
        {ytvidoes &&
          ytvidoes.map((item, ind) => (
            <div
              key={ind}
              className="box rounded-s gap-2"
              style={{ maxWidth: "350px" }}
            >
              <img
                src={item.video.thumbnails[0].url}
                className=" h-52 w-full"
                // style={{ width: "22rem" }}
                alt=""
              />
              <h3 className="text-2xl ps-3 font-semibold my-4 ">
                {item.video.title}
              </h3>
              <span className="text-gray-400">{item.video.channelName}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
