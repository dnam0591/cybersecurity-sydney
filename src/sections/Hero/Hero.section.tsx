import { Navbar } from "../../shared-components/navbar/Navbar";
import HeroText from "./components/HeroText/HeroText.component";

export function HeroSection() {
  return (
    <main className="w-full h-dvh bg-[hsl(0,0%,3%)] flex flex-col">
      <Navbar />
      <div className="w-full h-full flex justify-center items-center">
        <HeroText />
      </div>
    </main>
  );
}
