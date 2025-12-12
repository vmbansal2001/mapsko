import Logo from "@/assets/icons/mapsko-logo.svg";
import FirstImage from "./gated-community.png";
import SecondImage from "./580ad2ae32741759cb647dcb76038cf396f90a13.png";
import ThirdImage from "./140d0c093fd215bf5850833306f67ba807b27307.png";
import { ImageBackground } from "@/components/image-background";
import Link from "next/link";

const SecondSection = () => {
  return (
    <div className="bg-[#F9F9F9] pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-center px-4">
          Discover Your Perfect Home
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Premium projects designed for modern living
        </p>
      </div>

      <div className="flex flex-col lg:flex-row *:w-full text-white text-center">
        <ImageBackground
          src={FirstImage}
          alt="first-image"
          width={1000}
          height={1000}
          className="w-full flex flex-col justify-end group h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px]"
        >
          <div className="group-hover:h-[450px] sm:group-hover:h-[550px] md:group-hover:h-[650px] lg:group-hover:h-[700px] transition-all duration-300 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] w-full flex flex-col items-center justify-end p-4 sm:p-6 md:p-8 lg:p-10 opacity-90 bg-linear-to-t from-sky-700 via-sky-700 to-sky-700/0">
            <span className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase pb-4 sm:pb-6 md:pb-8 lg:pb-10">
              Mapsko Gardenia
            </span>

            <div className="space-y-1.5 sm:space-y-2 pb-4 sm:pb-5 md:pb-6">
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light font-['Avenir']">
                Sector 26A, Sonipat
              </p>

              <p>
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold font-['Avenir']">
                  Status:{" "}
                </span>
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light font-['Avenir']">
                  Possession Soon
                </span>
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg font-light font-['Avenir'] px-2">
                Experience nature-centric living in the heart of Sonipat.
                Premium apartments with world-class amenities and seamless
                connectivity
              </p>
            </div>

            <Link
              href="/"
              className="text-center justify-start text-white text-sm sm:text-base md:text-lg lg:text-xl w-fit font-extrabold border py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 border-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300"
            >
              View More
            </Link>
          </div>
        </ImageBackground>

        <ImageBackground
          src={SecondImage}
          alt="second-image"
          width={1000}
          height={1000}
          className="w-full flex flex-col justify-end group h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px]"
        >
          <div className="group-hover:h-[450px] sm:group-hover:h-[550px] md:group-hover:h-[650px] lg:group-hover:h-[700px] transition-all duration-300 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] w-full flex flex-col items-center justify-end p-4 sm:p-6 md:p-8 lg:p-10 opacity-90 bg-linear-to-t from-lime-500 via-lime-500 to-lime-500/0">
            <span className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase pb-4 sm:pb-6 md:pb-8 lg:pb-10">
              Mapsko The Icon 79
            </span>

            <div className="space-y-1.5 sm:space-y-2 pb-4 sm:pb-5 md:pb-6">
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light font-['Avenir']">
                Sector-79, Gurgaon
              </p>

              <p>
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold font-['Avenir']">
                  Status:{" "}
                </span>
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light font-['Avenir']">
                  Super Structure Completed
                </span>
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg font-light font-['Avenir'] px-2">
                Luxury redefined in Gurgaon's prime location. Modern
                architecture meets sophisticated living.
              </p>
            </div>

            <Link
              href="/"
              className="text-center justify-start text-white text-sm sm:text-base md:text-lg lg:text-xl w-fit font-extrabold border py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 border-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300"
            >
              Explore Plans
            </Link>
          </div>
        </ImageBackground>
        <ImageBackground
          src={ThirdImage}
          alt="third-image"
          width={1000}
          height={1000}
          className="w-full flex flex-col justify-end group h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px]"
        >
          <div className="group-hover:h-[450px] sm:group-hover:h-[550px] md:group-hover:h-[650px] lg:group-hover:h-[700px] transition-all duration-300 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] w-full flex flex-col items-center justify-end p-4 sm:p-6 md:p-8 lg:p-10 opacity-90 bg-linear-to-t from-sky-700 via-sky-700 to-sky-700/0">
            <span className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase pb-4 sm:pb-6 md:pb-8 lg:pb-10">
              Mapsko ASPR Hills
            </span>

            <div className="space-y-1.5 sm:space-y-2 pb-4 sm:pb-5 md:pb-6">
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light font-['Avenir']">
                Sector-78, Gurgaon
              </p>

              <p>
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold font-['Avenir']">
                  Status:{" "}
                </span>
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light font-['Avenir']">
                  OC Applied
                </span>
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg font-light font-['Avenir'] px-2">
                Elevated living experience with panoramic views and premium
                amenities in New Gurgaon.
              </p>
            </div>

            <Link
              href="/"
              className="text-center justify-start text-white text-sm sm:text-base md:text-lg lg:text-xl w-fit font-extrabold border py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 border-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300"
            >
              Schedule Visit
            </Link>
          </div>
        </ImageBackground>
      </div>
    </div>
  );
};

export default SecondSection;
