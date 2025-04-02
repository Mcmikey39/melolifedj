import Image from "next/image";

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
      <div className="h-[35rem] bg-blue-400">
        <div>
          <h2 className="text-2xl font-bold text-center ">Intro</h2>
        </div>
      </div>

      {/* Music */}
      <div className="h-[35rem] bg-gray-400">
        <div>
          <h2 className="text-2xl font-bold text-center ">Music</h2>
        </div>
      </div>

      {/* About */}
      <div>
        <div className="bg-[url('/images/aboutBg.png')] bg-cover bg-center w-full px-8">
          <div className="py-16 gap-5 flex flex-col-reverse justify-center text-neutral-100 max-w-screen-2xl mx-auto | md:flex-row">
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
                  (with Dr. Donkz), “Voices” and “Fight For You” (with Valido).
                  With over 1 million total streams (and counting), Melolife
                  remains the element of surprise along his tracks.
                </p>
                <br />
                <p>
                  In 2023 he made his debut at Peacock in Concert The Mad
                  Masquerade showing the Frenchcore scene a glimpse of whatever
                  the future holds. Marking his sound with his track “A New
                  Beginning” Melolife is here to bring you the next step in the
                  evolution of Frenchcore.
                </p>
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-auto bg-black text-neutral-100">
        <div className="flex justify-center py-4">
          © 2024 Melolife Music. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
