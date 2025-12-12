import Logo from "@/assets/icons/mapsko-white-logo.svg";
import ImageOne from "./1bddecb26decebe4ec32a0649ed579702eebf9d0.png";
import ImageTwo from "./30670fa87e5d197beafe5e3bd64f06acda1a190f.png";
import ImageThree from "./64dd47375b6a39495647c66b1f6eac7127c73667.png";
import ImageFour from "./ed8ee2035efd6a4ee8f452675001b2c8d4e4e9f7.png";
import Image from "next/image";

type Props = {};

const FifthSection = (props: Props) => {
  return (
    <div className="w-full bg-[#0B6BB8]">
      <section className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-center px-4">
            Voices of Satisfaction
          </h2>
          <p className="text-center text-white text-sm sm:text-base md:text-lg font-light uppercase px-4">
            What our customers say about us
          </p>
        </div>

        <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-4">
          <Image
            src={ImageOne}
            className="flex w-full object-cover h-[700px]"
            alt="image-one"
            width={400}
          />
          <Image
            src={ImageTwo}
            className="flex w-full object-cover h-[700px]"
            alt="image-two"
            width={400}
          />
          <Image
            src={ImageThree}
            className="flex w-full object-cover h-[700px]"
            alt="image-three"
            width={400}
          />
          <Image
            src={ImageFour}
            className="flex w-full object-cover h-[700px]"
            alt="image-four"
            width={400}
          />
        </div>
      </section>
    </div>
  );
};

export default FifthSection;
