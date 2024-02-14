import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import { StaticImageData } from "next/image";

type Bullet = {
  title: string;
  desc: string;
  icon: JSX.Element;
};

type Benefit = {
  title: string;
  desc: string;
  image: StaticImageData;
  bullets: Bullet[];
};

const benefitOne: Benefit = {
  title: "Why choose us?",
  desc: "Discover and compare top products tailored to your needs, access exclusive low APR rates and financial offers, and receive expert guidance for all your financial needs on Bonokey.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Find & compare",
      desc: "Easily find and compare the best product that fits your needs and learn its benefits and features.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Best rates",
      desc: "Lowest APR rate and financial products offers that are exclusive only on Bonokey and match your profile.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Financial advisor",
      desc: "You need to speak to expert to help you understand and help you in your financial needs? We get you covered.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

export { benefitOne };
