import Image from "next/image";

export default function Header() {
  return (
    <header className="h-auto mx-auto bg-black">
      <div className="flex justify-center max-w-screen-2xl mx-auto">
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
  );
}
