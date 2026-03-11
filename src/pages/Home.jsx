import DescriptionAndPhoto from "../components/DescriptionAndPhoto";
import FooterBottom from "../components/FooterBottom";
import HeaderTop from "../components/HeaderTop";
import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <HeaderTop />
      <DescriptionAndPhoto />
      <TechStack />
      <FooterBottom />
    </div>
  );
};


export default Home;
