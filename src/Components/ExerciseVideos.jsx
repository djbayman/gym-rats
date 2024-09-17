import { Link } from "react-router-dom";
import Loader from "./Loader";

const ExerciseVideos = ({ youtubeVideos, ytvidoesLoading }) => {
  if (ytvidoesLoading) return <Loader />;
  const ytvidoes = youtubeVideos?.contents.slice(0, 4);

  return (
    <div className="mb-10">
      <h1 className=" text-xl font-bold capitalize mb-6">
        Watch more exercise videos
      </h1>
      <div className="flex items-center justify-evenly flex-wrap gap-10">
        {ytvidoes &&
          ytvidoes?.map((item, ind) => (
            <Link
              to={`https://www.youtube.com/${item.video.channelName}`}
              key={ind}
              className="rounded-s gap-2 w-1/5 rounded-md "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="box max-h-40">
                <img
                  src={item.video.thumbnails[0].url}
                  className="w-full"
                  alt=""
                />
                <h3 className="ps-3 font-semibold my-2 ">
                  {item.video.title.length > 17
                    ? item.video.title.substring(0, 17) + "..."
                    : item.video.title}
                </h3>
                <span className="text-gray-400">{item.video.channelName}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
