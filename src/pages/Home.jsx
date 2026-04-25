import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Polocy from "../components/Polocy";
import { useTitle } from "../hook/useTitle";

const Home = () => {
  useTitle("My Store");
  return (
    <main className="w-[80vw] m-auto">
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Polocy />
    </main>
  );
};

export default Home;
