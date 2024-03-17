import Image from "next/image";
import Footer from "./_components/Footer/Footer";
import Navbar from "./_components/Navbar/navbar";

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <div
      className="relative h-full w-full"
      style={{
        background:
          "linear-gradient(#000, #000 30%, #892B25 55%, #892B25 70%, #CE6225 95%, #000)",
      }}
    >
      <Navbar />
      <div className="absolute right-0 top-0 z-50 max-sm:hidden">
        <div className="relative aspect-square w-32 md:w-40 lg:w-52">
          <Image src="mlh-banner.svg" alt="" fill />
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
