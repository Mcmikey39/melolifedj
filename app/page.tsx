import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className=" h-auto mx-auto">
        <div className="flex justify-center max-w-screen-2xl  mx-auto">
          <Image
            src="/images/Main.jpg"
            alt="Logo"
            width={200}
            height={200}
            className="object-cover w-full h-auto"
          />
        </div>
      </header>

      {/* Music */}
      <div className="h-[35rem] bg-gray-400">
        <div>
          <h2 className="text-2xl font-bold text-center ">Music</h2>
        </div>
      </div>

      {/* About */}
      <div className="h-[35rem] bg-gray-200">
        <div>
          <h2 className="text-2xl font-bold text-center">About</h2>
        </div>
      </div>

      {/* Footer */}
    </>
  );
}
