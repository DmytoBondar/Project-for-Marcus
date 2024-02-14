import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type FaqItem = {
  question: string;
  answer: string;
};
type Repo = {
  Faqs: FaqItem[],
}

export const getStaticProps = (async () => {
  const res = await fetch(`http://localhost:3000/api/getFaqs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const repo = await res.json()
  return { props: { repo } }
}) 

export default function Home({repo,
}: InferGetStaticPropsType<typeof getStaticProps>){
  return (
    <>
      <Head>
        <title>Bonokey</title>
        <meta
          name="description"
          content=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Bonokey Benefits"
        title="Why should use bonokey">
      </SectionTitle>
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to help you">
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq Faqs={repo} />
      <Footer />
      <PopupWidget />
    </>
  );
}
