import DescriptioAndPhoto from "../components/DescriptionAndPhoto";
import FooterBottom from "../components/FooterBottom";
import HeaderTop from "../components/HeaderTop";

function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed min-h-screen inset-0 -z-10 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <HeaderTop />
      <DescriptioAndPhoto />
      <FooterBottom />
    </div>
  );
}
export default Home;
