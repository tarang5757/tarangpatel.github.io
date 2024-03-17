import localFont from "next/font/local";

export const sfPixelate = localFont({
  src: [
    {
      path: "../lib/fonts/sf-pixelate.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../lib/fonts/sf-pixelate-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pixelate",
});
