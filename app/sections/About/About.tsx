"use client";

import Image from "next/image";
/*import { Button } from "@heroui/react";*/
import AnimatedSection from "@/app/components/AnimatedSection";

export default function About() {
  return (
    <section className="bg-[url('/images/aboutBg.png')] bg-cover bg-center w-full px-8">
      <AnimatedSection
        id="About"
        className="py-16 gap-5 text-neutral-100 flex flex-col-reverse md:flex-row"
      >
        <div className="text-center mx-auto | md:text-left md:w-[40rem]">
          <h1 className="text-xl pb-8 font-bold | lg:text-2xl">
            About Melolife
          </h1>
          <div className="lg:text-lg">
            <p>
              Melolife is an uplifting and energetic Frenchcore DJ/Producer
              based in The Netherlands. In 2020 he made an astonishing debut
              with his track “The Sound Of Discovery” released on Euphoric
              Frenchcore Records and played by Dr. Peacock himself. Quickly
              after that, he made several smashing tunes like “Our Moment”
              (with Dr. Donkz), “Voices” and “Fight For You” (with Valido). With
              over 1 million total streams (and counting), Melolife remains the
              element of surprise along his tracks.
            </p>
            <br />
            <p>
              In 2023 he made his debut at Peacock in Concert The Mad Masquerade
              showing the Frenchcore scene a glimpse of whatever the future
              holds. Marking his sound with his track “A New Beginning” Melolife
              is here to bring you the next step in the evolution of Frenchcore.
            </p>
            <br />
            {/*<Button size="lg">More About</Button>*/}
          </div>
        </div>
        <div className="flex justify-center md:w-[40rem]">
          <Image
            src="/images/melolife1.png"
            alt="Logo"
            width={1920}
            height={1080}
            style={{ objectFit: "cover" }}
            className="w-auto px-4"
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
