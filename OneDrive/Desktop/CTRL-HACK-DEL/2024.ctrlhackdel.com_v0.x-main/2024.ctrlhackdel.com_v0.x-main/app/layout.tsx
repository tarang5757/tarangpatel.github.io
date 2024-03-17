import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { sfPixelate } from "./fonts";
import ClientWrapper from "@/components/ClientWrapper";
import InitialLoadingScreen from "@/components/InitialLoadingScreen";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CTRL+HACK+DEL v0.x",
  description: "Prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-[100dvh] break-words",
          inconsolata.className,
          sfPixelate.variable,
        )}
      >
        <Toaster
          richColors
          position="bottom-center"
          theme="dark"
          duration={2000}
        />
        <ClientWrapper>
          <InitialLoadingScreen />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
