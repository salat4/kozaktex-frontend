import React from "react";
import s from "./AboutUs.module.css";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "900"],
  subsets: ["latin"],
});
function AboutUs() {
  return (
    <section className={s.aboutus__container}>
      <h3 className={`${s.aboutus__title} ${poppins.className}`}>About us</h3>
      <ul className={s.aboutus__box}>
        <li className={`${s.aboutus__box__item} ${s.aboutus__top__left}`}>
          <span>
            <span
              className={`${roboto.className} ${s.aboutus__box__item__bold}`}
            >
              KozakTex
            </span>{" "}
            stands as a premier IT outsourcing company based in the vibrant city
            of Kyiv. With a wealth of experience, we have established ourselves
            as a trusted partner, delivering tailored solutions in the
            ever-evolving landscape of information technology.
          </span>
        </li>
        <li className={`${s.aboutus__box__item} ${s.aboutus__top__right}`}>
          <span>
            <span
              className={`${roboto.className} ${s.aboutus__box__item__bold}`}
            >
              Client-Centric Approach:
            </span>{" "}
            At KozakTex, we prioritize our clients satisfaction, adopting a
            client-centric approach that fosters collaboration and transparency.
            Our team of skilled professionals is dedicated to exceeding
            expectations, providing top-notch services that drive business
            growth.
          </span>
        </li>
        <li className={`${s.aboutus__box__item} ${s.aboutus__bottom__left}`}>
          <span>
            <span
              className={`${roboto.className} ${s.aboutus__box__item__bold}`}
            >
              Our Expertise:
            </span>{" "}
            Specializing in IT outsourcing, KozakTex brings a unique blend of
            innovation and reliability to every project. From cutting-edge
            technology integration to customized solutions, we cater to the
            diverse needs of our clients, ensuring their success in the digital
            era.
          </span>
        </li>
        <li className={`${s.aboutus__box__item} ${s.aboutus__bottom__right}`}>
          <span>
            <span
              className={`${roboto.className} ${s.aboutus__box__item__bold}`}
            >
              Future-Ready Solutions:
            </span>{" "}
            As technology evolves, so do we. KozakTex is committed to staying at
            the forefront of the IT landscape, offering future-ready solutions
            that empower businesses to thrive in an increasingly digital world.
            Partner with us for innovation, reliability, and success.
          </span>
        </li>
      </ul>
    </section>
  );
}

export default AboutUs;
