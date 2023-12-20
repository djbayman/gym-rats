import Exercieses from "../Components/Exercieses";
import Header from "../Components/Header";
import Search from "../Components/Search";

const Home = () => {
  return (
    <div className="container  mx-auto">
      <Header />
      <Search />
      <Exercieses />
    </div>
  );
};

export default Home;
