import Image from "next/image";
import Link from "next/link";
import shadows from "./hero.module.css";

interface HeroSectionProps { }

const HeroSection = ({ }: HeroSectionProps) => {
  return (
    <section id="#" className="relative flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent via-90% to-black sm:to-black" />
      <Image
        src="/landing-bg.svg"
        alt="hero background"
        loading="eager"
        fill
        className="pointer-events-none border-[8px] border-black bg-gradient-to-b object-cover md:border-[12px]"
      />
      <div className="flex flex-col items-center justify-center space-y-8 py-28 text-center xs:min-h-[100vh]">
        <h1
          className={`${shadows.title} relative hidden font-pixelate font-bold tracking-wide text-white sm:block sm:text-6xl lg:text-7xl xl:text-8xl`}
        >
          CTRL+HACK+DEL
        </h1>
        <h1
          className={`${shadows.title} relative font-pixelate text-7xl font-bold tracking-wider text-white xs:text-8xl sm:hidden`}
        >
          CTRL
          <br />
          HACK
          <br />
          DEL
        </h1>
        <h2
          className={`${shadows.date} relative font-pixelate text-3xl font-bold text-white sm:text-3xl lg:text-4xl`}
        >
          September 2024
        </h2>
        <div className="relative mx-auto w-fit">
          <span className="absolute inset-0 translate-x-1 translate-y-1 rounded-lg bg-black"></span>
          <Link
            href="http://forms.google.com"
            target="_blank"
            className="relative z-10 flex rounded-lg border-[3px] border-black bg-green-500 bg-gradient-to-r from-[#FF7A5C] to-[#F12711] px-4 py-1.5 font-pixelate text-lg font-bold tracking-wide text-zinc-950 transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-green-600 active:translate-x-1 active:translate-y-1 md:px-8 md:py-2.5 md:text-xl"
          >
            <span className="pt-1">PRE-REGISTER</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
