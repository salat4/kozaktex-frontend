import React from "react";
import s from "./Hero.module.css";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const Hero = () => {
  return (
    <section className={s.hero__container}>
      <h1 className={`${poppins.className} ${s.hero__title}`}>
        Turning your Ideas into Realities
      </h1>
      <p className={`${roboto.className} ${s.hero__text}`}>
        Explore new horizons for your business with KozakTex - your reliable
        partner in the world of IT outsourcing. We offer cutting-edge solutions
        backed by experienced professionals to ensure your enterprise gains a
        competitive edge. Trust us to efficiently manage your IT needs, allowing
        you to focus on the core of your business.
      </p>
    </section>
  );
};

export default Hero;
