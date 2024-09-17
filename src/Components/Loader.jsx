const array = Array.from(Array(4).keys());

const Loader = () => {
  return (
    <div className="flex items-center gap-5 animate-pulse">
      {array.map((el) => (
        <div key={el} className="w-1/5 h-20 bg-gray-200 rounded-md"></div>
      ))}
    </div>
  );
};

export default Loader;
