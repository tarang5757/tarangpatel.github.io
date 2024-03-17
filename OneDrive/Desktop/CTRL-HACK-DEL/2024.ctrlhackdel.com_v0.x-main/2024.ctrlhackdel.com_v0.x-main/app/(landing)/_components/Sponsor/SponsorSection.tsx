import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import styles from "./sponsor.module.css";
interface SponsorSectionProps { }

const SponsorSection = ({ }: SponsorSectionProps) => {
  return (
    <section className="mt-12 px-4 md:px-8" id="sponsors">
      <div className="h-20" />
      <div className="mx-auto h-3 w-32 bg-[#210000] text-center text-[#FFD5C8] md:w-44 md:bg-[#310000]">
        <span className="block -translate-y-2 max-md:text-sm md:-translate-y-2.5">
          sponsor our event
        </span>
      </div>
      <h1
        className={`${styles.title} text-balance py-8 text-center font-pixelate text-3xl font-bold leading-9 tracking-wide text-black [drop-shadow:0px_4px_orange] md:text-4xl lg:text-5xl`}
      >
        Shape the Next Big Thing
      </h1>

      <div className="mx-auto grid max-w-screen-lg items-center justify-center gap-8 max-md:flex-col md:grid-cols-2">
        <div className="rounded-xl border-4 border-black bg-gradient-to-r from-black to-black/60 md:mt-4">
          <div className="relative p-4 md:p-8">
            <Image
              src="/noise.svg"
              alt="idk"
              fill
              className="absolute inset-0 object-cover"
            />
            <p className="font-bold leading-none text-white lg:text-xl">
              Join us at the forefront of innovation by sponsoring
              CTRL+HACK+DEL, where we&apos;re redefining what hackathons can be.
              <br />
              <br />
              Beyond a mere coding competition, our event is a beacon for
              technological advancement and creative problem-solving. By
              partnering with us, you&apos;re not just supporting a hackathon;
              you&apos;re fostering a movement that aims to elevate the
              standards of collaborative innovation.
              <br />
              <br />
              Be part of this transformative event that promises not only to
              spotlight your brand among the brightest minds but also to
              contribute significantly to the future of technology and
              innovation.
            </p>
          </div>
        </div>
        <div className="w-full text-white">
          <h2 className="text-2xl font-bold drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] max-md:text-center">
            Interested in sponsoring?
          </h2>
          <p className="text-balance drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] max-md:text-center">
            Send us a quick message and we&apos;ll get back to you!
          </p>
          <form className="mt-4 space-y-2 md:mt-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full rounded-md border-2 border-black bg-zinc-900 px-3 py-1.5 outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-white"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="w-full rounded-md border-2 border-black bg-zinc-900 px-3 py-1.5 outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-white"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Not sponsoring you guys, you're from York."
              className="h-40 w-full resize-none rounded-xl border-2 border-black bg-zinc-900 px-3 py-1.5 outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-white lg:h-60"
            />
          </form>

          <div className="relative mx-auto">
            <span className="absolute inset-0 translate-x-1 translate-y-1 rounded-lg bg-black"></span>
            <Link
              href="http://forms.google.com"
              target="_blank"
              className="relative z-10 flex w-full rounded-lg border-[3px] border-black bg-gradient-to-r from-[#FF7A5C] to-[#F12711] px-4 py-1.5 font-pixelate text-lg font-bold tracking-wide text-zinc-950 transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-green-600 active:translate-x-1 active:translate-y-1 md:px-8 md:py-2.5 md:text-xl"
            >
              <span className="mx-auto pt-1">Send Message</span>
            </Link>
          </div>

          <p className="relative mt-2 text-center text-[#FFfBfB] ">or...</p>

          <div className="relative mx-auto mt-2">
            <span className="absolute inset-0 translate-x-1 translate-y-1 rounded-lg bg-black" />
            <Link
              href="http://forms.google.com"
              target="_blank"
              className="relative z-10 flex w-full rounded-lg border-[3px] border-black bg-zinc-900 px-4 py-1 font-pixelate text-lg font-bold tracking-wide text-white transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 md:px-8 md:py-2 md:text-xl"
            >
              <span className="mx-auto pt-1">Email Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SponsorSection;
