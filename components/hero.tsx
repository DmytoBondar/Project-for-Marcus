import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/Money.png";
import Logo1 from "../public/img/brands/Logo1.svg";
import Logo2 from "../public/img/brands/logo2.svg";
import Logo3 from "../public/img/brands/logo3.svg";
import Logo4 from "../public/img/brands/logo4.svg";
import Logo5 from "../public/img/brands/logo5.svg";


const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Compare The Best Loan Offers
            </h1>
            <div className="flex flex-col py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              <span>Best Rates</span>
              <span>Instant</span>
              <span>No Bank Visit</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">2000+</span>{" "}
            customers worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image src={Logo1.src} width="110" height="33" alt="Logo1" />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image src={Logo2.src} width="110" height="33" alt="Logo2" />

            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image src={Logo3.src} width="110" height="33" alt="Logo3" />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <Image src={Logo4.src} width="110" height="33" alt="Logo4" />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image src={Logo5.src} width="110" height="33" alt="Logo5" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;