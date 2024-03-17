import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto max-w-screen-2xl max-lg:px-4">
      <ul className="mx-auto mt-4 flex h-fit w-full max-w-lg flex-1 justify-around rounded-md bg-zinc-900 text-center max-xl:mr-56 max-md:hidden lg:mt-6 lg:max-w-screen-md xl:mt-8">
        <li className={styles.navItem}>
          <Link href="#about">
            <p className={styles.navText}>About Us</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#sponsors">
            <p className={styles.navText}>Sponsors</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#faq">
            <p className={styles.navText}>FAQs</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/auth/login">
            <p className={styles.navText}>Log In</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
