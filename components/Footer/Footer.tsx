import Image from "next/image";
import React from "react";
import s from "./Footer.module.css";
import headerLogo from "../../public/svg/logokozak.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className={`${poppins.className}`}>
      <ul className={`${s.footer__container} ${s.footer__list}`}>
        <li className={`${s.footer__list__item} ${s.footer__list__left}`}>
          <ul className={`${s.footer__list__left__list} `}>
            <li className={s.footer__list__left__list__item}>
              <Image src={headerLogo} alt="logo" />
            </li>
            <li
              className={`${s.footer__list__left__list__item} ${s.footer__list__item__title}`}
            >
              <a>kozaktex@gmail.com</a>
            </li>
            <li
              className={`${s.footer__list__left__list__item} ${s.footer__list__item__text}`}
            >
              <p>Privacy Policy</p>
            </li>
            <li
              className={`${s.footer__list__left__list__item} ${s.footer__list__item__text}`}
            >
              <p>Cookies Notice</p>
            </li>
          </ul>
        </li>
        <li className={`${s.footer__list__item} ${s.footer__list__center}`}>
          <p className={s.footer__list__item__title}>Services</p>
          <ul className={s.footer__list__center__list}>
            <li
              className={`${s.footer__list__center__list__item} ${s.footer__list__item__text}`}
            >
              QA outsourcing
            </li>
            <li
              className={`${s.footer__list__center__list__item} ${s.footer__list__item__text}`}
            >
              App Developing
            </li>
            <li
              className={`${s.footer__list__center__list__item} ${s.footer__list__item__text}`}
            >
              DevOps Testing
            </li>
            <li
              className={`${s.footer__list__center__list__item} ${s.footer__list__item__text}`}
            >
              Web design
            </li>
            <li
              className={`${s.footer__list__center__list__item} ${s.footer__list__item__text}`}
            >
              Outsourcing customer support
            </li>
            <li
              className={`${s.footer__list__center__list__item} ${s.footer__list__item__text}`}
            >
              Project Managment
            </li>
          </ul>
        </li>
        <li className={`${s.footer__list__item} ${s.footer__list__right}`}>
          <p className={s.footer__list__item__title}>Other</p>
          <ul className={s.footer__list__right__list}>
            <li
              className={`${s.footer__list__right__list__item} ${s.footer__list__item__text}`}
            >
              Hiring
            </li>
            <li
              className={`${s.footer__list__right__list__item} ${s.footer__list__item__text}`}
            >
              About us
            </li>
            <li
              className={`${s.footer__list__right__list__item} ${s.footer__list__item__text}`}
            >
              Contact us
            </li>
          </ul>
        </li>
      </ul>
      <div className={s.footer__copyright}>
        <p>© Copyright KozakTex 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
