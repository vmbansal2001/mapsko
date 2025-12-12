import FirstSection from "./first-section/first-section";
import HeroSection from "./hero-section";
import SecondSection from "./second-section/second-section";
import ThirdSection from "./third-section/third-section";
import BuildingImage from "./9239a29228e25fea07ea4879103ec248811b07df.png";
import Image from "next/image";
import FourthSection from "./fourth-section/fourth-section";
import FifthSection from "./fifth-section/fifth-section";
import SixthSection from "./sixth-section/sixth-section";
import Footer from "@/components/footer/footer";

const IndexRoute = () => {
  return (
    <main>
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Image
        src={BuildingImage}
        alt="fourth-section-image"
        width={1000}
        height={1000}
        className="w-full h-[517px] object-cover"
      />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </main>
  );
};

export default IndexRoute;
