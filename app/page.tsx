import Image from "next/image";

import About from "./sections/About";
import Intro from "./sections/Intro";
import Music from "./sections/Music";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className=" h-auto mx-auto bg-black">
        <div className="flex justify-center max-w-screen-2xl mx-auto ">
          <Image
            src="/images/Main.jpg"
            alt="Logo"
            width={1920}
            height={1080}
            style={{ objectFit: "cover" }}
            className="max-h-[70rem] w-auto"
          />
        </div>
      </header>

      {/* Intro */}
      <Intro />

      {/* Music */}
      <Music />

      {/* About */}
      <About />
    </>
  );
}
