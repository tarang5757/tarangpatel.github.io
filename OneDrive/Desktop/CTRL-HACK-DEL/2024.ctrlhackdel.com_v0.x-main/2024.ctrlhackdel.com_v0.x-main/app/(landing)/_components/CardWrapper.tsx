import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CardWrapper = ({ children, className }: CardWrapperProps) => {
  return (
    <div
      className={cn(
        "relative border-[0.75rem] border-[#74472E] bg-gradient-to-br from-[#290800] to-[#670707] p-4 py-6 shadow-xl transition duration-300 hover:shadow-[0_0_50px_#252525] md:border-[1.25rem] md:px-8 md:py-12 md:hover:scale-105",
        className,
      )}
    >
      {/* Four corners */}
      <div className="absolute -left-4 -top-4 z-20 border-[7px] border-[#74472E] bg-[#CE6225] p-1.5 md:-left-7 md:-top-7 md:border-[10px] md:p-2.5" />
      <div className="absolute -right-4 -top-4 z-20 border-[7px] border-[#74472E] bg-[#CE6225] p-1.5 md:-right-7 md:-top-7 md:border-[10px] md:p-2.5" />
      <div className="absolute -bottom-4 -left-4 z-20 border-[7px] border-[#74472E] bg-[#CE6225] p-1.5 md:-bottom-7 md:-left-7 md:border-[10px] md:p-2.5" />
      <div className="absolute -bottom-4 -right-4 z-20 border-[7px] border-[#74472E] bg-[#CE6225] p-1.5 md:-bottom-7 md:-right-7 md:border-[10px] md:p-2.5" />

      <Image
        src="/noise.svg"
        alt="idk"
        fill
        className="absolute inset-0 object-cover"
      />
      {children}
    </div>
  );
};

export default CardWrapper;
