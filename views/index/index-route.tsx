import { ImageBackground } from "@/components/image-background";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

type Props = {};

const IndexRoute = (props: Props) => {
  return (
    <div>
      {/* <div className="w-screen relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        <Image
          className="w-full"
          src="/assets/landing-hero.png"
          alt="landing-hero"
          width={1000}
          height={1000}
        />
      </div> */}
      <ImageBackground
        overlayOpacity={0.6}
        src="/assets/landing-hero.png"
        alt="landing-hero"
        width={1000}
        height={1000}
      >
        <div className="w-screen h-screen flex items-center justify-between flex-col text-white">
          <Navbar />
          <div className="text-center">
            <h1 className="text-5xl">BUILDING DREAMS, CREATING LEGACIES</h1>
            <p className="text-2xl">
              Premium Real Estate Excellence Since 1960s
            </p>

            <button className="border border-white p-4 mt-10">
              Explore Our Projects
            </button>
          </div>
          <div className="divide-x divide-white *:px-4 text-2xl flex mb-20">
            <p>
              <span className="font-bold">20+</span> Successful Projects
            </p>
            <p>ISO 9001:2000 Certified</p>
            <p>
              <span className="font-bold">3+ Decades</span> Legacy
            </p>
            <p>
              <span className="font-bold">10,000+ </span>Happy Families
            </p>
          </div>
        </div>
      </ImageBackground>
    </div>
  );
};

export default IndexRoute;
