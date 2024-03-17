"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./loading.module.css";

interface InitialLoadingScreenProps {}

const InitialLoadingScreen = ({}: InitialLoadingScreenProps) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "unset";
    }, 3250);

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1750);

    return () => {
      clearTimeout(timeout);
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0, opacity: 1, borderRadius: 0 }}
          animate={{ y: 0, opacity: 1, borderRadius: 0 }}
          exit={{
            y: "-100%",
            opacity: 1,
            borderRadius: "300px",
            transition: { ease: "circIn", duration: 1 },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-2 overscroll-none border-4 border-black bg-[linear-gradient(120deg,#431407,#300907_25%,#450A0A_35%,#300907_95%,#7C2D12)] px-8 text-white sm:border-[6px] sm:px-12 md:border-[9px] lg:border-[12px]"
        >
          {/* Noise background */}
          <Image
            src="/noise.svg"
            alt="noise background"
            fill
            className="pointer-events-none -z-10 object-cover opacity-20"
          />
          <div className="overflow-hidden p-4">
            <AnimatePresence>
              {loading && (
                <motion.h2
                  animate={{
                    scaleY: [0.8, 1, 0.8],
                  }}
                  exit={{ scaleY: 0, transition: { repeat: 0 } }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className={`${styles.loadingOutline} font-pixelate text-3xl font-bold tracking-wider md:text-4xl lg:text-5xl`}
                >
                  Loading...
                </motion.h2>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence onExitComplete={() => setShowWelcome(true)}>
            {loading && (
              <motion.div
                exit={{
                  padding: 0,
                  scaleX: [0.5, 0],
                  scaleY: [0.5, 0],
                }}
                className={`${styles.loadingProgressBar} relative mx-auto h-8 w-full max-w-screen-md rounded-full p-1`}
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{
                    width: ["0%", "22%", "38%", "50%", "75%", "99%"],
                    transition: {
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                  }}
                  exit={{ scaleX: 1.01, scaleY: 1.1 }}
                  className="my-auto h-full rounded-full bg-black shadow-[0_0_8px_black]"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showWelcome && (
              <div className="text-center font-pixelate text-4xl font-bold leading-relaxed tracking-widest md:text-5xl lg:text-6xl">
                <div className="overflow-hidden px-4 sm:py-2">
                  <motion.p
                    initial={{ y: 75, skewX: -30 }}
                    animate={{ y: 0, skewX: -10 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className={`${styles.loadingOutline}`}
                  >
                    Let The
                  </motion.p>
                </div>
                <div className="overflow-hidden px-4 sm:py-2">
                  <motion.p
                    initial={{ y: 75, skewX: -30 }}
                    animate={{ y: 0, skewX: -10 }}
                    transition={{ duration: 0.5, ease: "backOut", delay: 0.1 }}
                    className={`${styles.loadingOutline}`}
                  >
                    Hacking <span className="max-sm:hidden">Begin</span>
                  </motion.p>
                </div>
                <div className="overflow-hidden px-4 sm:hidden sm:py-2">
                  <motion.p
                    initial={{ y: 75, skewX: -30 }}
                    animate={{ y: 0, skewX: -10 }}
                    transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
                    className={`${styles.loadingOutline}`}
                  >
                    Begin
                  </motion.p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoadingScreen;
