import Header from "./components/Header";
import { Intro, Music, About } from "./sections";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Intro */}
      <Intro />

      {/* Music */}
      <Music />

      {/* About */}
      <About />
    </>
  );
}
