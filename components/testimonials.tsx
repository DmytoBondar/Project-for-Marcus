import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

type TestimonialProps = {
  image: StaticImageData;
  name: string;
  title?: string;
};

const Testimonials: React.FC = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              I absolutely love the product! It exceeded my expectations and has made my life so much easier."
            </p>

            <Avatar image={userOneImg} name="Sarah Steiner" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              The customer service was exceptional. They were quick to respond and went above and beyond to help me with my issue.
            </p>

            <Avatar image={userTwoImg} name="Dylan Ambrose" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              This product is a game-changer! I have seen significant improvements since using it and would highly recommend it to others.
            </p>

            <Avatar image={userThreeImg} name="Gabrielle Winn" />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Avatar: React.FC<TestimonialProps> = (props) => {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width={40}
          height={40}
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

export default Testimonials;
