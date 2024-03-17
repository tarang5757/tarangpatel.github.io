import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
interface FooterSectionProps { }

interface FooterProps { }

const Footer = ({ }: FooterProps) => {
  return (
    <footer >

      <div className="flex justify-center mb-4">
        {/* Email link */}
        <a
          href="mailto:admin@ctrlhackdel.com"
          className="pt-4 font-bold text-neutral-100 md:px-12 md:text-lg font-pixelate"
        >
          Email us @ admin@ctrlhackdel.com
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mt-4 mb-2 pt-4 ">
          {/* Social icons */}
          <div className="flex gap-5">
            <a href="#" className="text-white hover:text-gray-200 md:hover:scale-105">
              <Image
                src="gmail.svg"
                alt="gmail"
                width={36}
                height={36}
              />
            </a>
            <a href="#" className="text-white hover:text-gray-200 md:hover:scale-105">
              <Image
                src="Linkedin.svg"
                alt="LinkedIn"
                width={36}
                height={36}
              />
            </a>

            <a href="#" className="text-white hover:text-gray-200 md:hover:scale-105">
              <Image
                src="tiktok.svg"
                alt="Tiktok"
                width={30}
                height={30}
              />
            </a>

            <a href="#" className="text-white hover:text-gray-200 md:hover:scale-105">
              <Image
                src="instagram.svg"
                alt="Instagram"
                width={36}
                height={36}
              />
            </a>
            <a href="#" className="text-white hover:text-gray-200 md:hover:scale-105">
              <Image
                src="x.svg"
                alt="X"
                width={36}
                height={36}
              />
            </a>

            <a href="#" className="text-white md:hover:scale-105">

              <Image
                src="github.svg"
                alt="Github"
                width={36}
                height={36}
              />
            </a>

          </div>
        </div>



        <div className="flex justify-center pt-6">
          {
            <Image
              src="/mascot.svg"
              alt="idk"
              height={70}
              width={70}
            />
          }

        </div>

        <p className="text-center pt-5 font-bold text-neutral-100 md:px-12 md:text-2xl font-pixelate ">
          Made with 🍁 in Toronto, Ontario, Canada
        </p>

        <p className="text-center text-white text-xs pt-14">
          Copyright © CTRL+HACK+DEL All Rights Reserved.
        </p>

        <div className="pt-3">
          <Image
            src="/footer-trees.svg"
            alt="trees"
            height={3000}
            width={3000}
            className=" object-fit"
          />


        </div>

      </div>
    </footer>
  );
};

export default Footer;
