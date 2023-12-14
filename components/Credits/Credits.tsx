import React from "react";
import s from "./Credits.module.css";
import { Poppins, Unbounded } from "next/font/google";
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
const unbounded = Unbounded({
  weight: "700",
  subsets: ["latin"],
});
const Credits = () => {
  return (
    <section className={s.credits__container}>
      <h3 className={`${s.credits__title} ${poppins.className}`}>Credits</h3>
      <ul className={s.credits__list}>
        <li className={`${s.credits__list__item} ${s.credits__autologix}`}></li>
        <li
          className={`${s.credits__list__item} ${s.credits__clubbersport}`}
        ></li>
        <li
          className={`${s.credits__list__item} ${s.credits__golubimiru} ${unbounded.className}`}
        >
          <p className={s.credits__golubimiru__text}>Голуби миру</p>
        </li>
        <li className={`${s.credits__list__item} ${s.credits__pikni}`}></li>
        <li className={`${s.credits__list__item} ${s.credits__webcraft}`}></li>
      </ul>
    </section>
  );
};

export default Credits;
