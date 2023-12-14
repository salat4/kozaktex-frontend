import React, { useState, useEffect, useRef } from "react";
import s from "./Header.module.css";
import headerLogo from "../../public/svg/logokozak.svg";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Header: React.FC = () => {
  const [list, setList] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      listRef.current &&
      event.target instanceof Node &&
      !listRef.current.contains(event.target)
    ) {
      setList(false);
    }
  };
  const handleClick = () => {
    setList(!list);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={s.header__container}>
      <Image src={headerLogo} alt="logo" width="253" height="81" />
      <ul className={s.header__list} ref={listRef}>
        <li
          className={` ${poppins.className} ${
            list
              ? `${s.headaer__list__item__hidden__activate}`
              : `${s.header__list__item} `
          }
        `}
          onClick={() => handleClick()}
        >
          <span>Services</span>
          {list && (
            <ul
              className={`${s.headaer__list__item__hidden} ${poppins.className}`}
            >
              <li
                className={`${s.headaer__list__item__hidden__item} ${poppins.className}`}
              >
                QA outsourcing
              </li>
              <li
                className={`${s.headaer__list__item__hidden__item} ${poppins.className}`}
              >
                App Developing
              </li>
              <li
                className={`${s.headaer__list__item__hidden__item} ${poppins.className}`}
              >
                DevOps Testing
              </li>
              <li
                className={`${s.headaer__list__item__hidden__item} ${poppins.className}`}
              >
                Web design
              </li>
              <li
                className={`${s.headaer__list__item__hidden__item} ${poppins.className}`}
              >
                Outsourcing customer support
              </li>
              <li
                className={`${s.headaer__list__item__hidden__item} ${poppins.className}`}
              >
                Project Managment
              </li>
            </ul>
          )}
        </li>
        <li className={`${s.header__list__item} ${poppins.className}`}>
          About us
        </li>
        <li className={`${s.header__list__item} ${poppins.className}`}>
          Hiring
        </li>
        <li className={`${s.header__list__item} ${poppins.className}`}>
          Project
        </li>
        <li className={`${s.header__list__item__button}`}>
          <span className={` ${s.header__list__button} ${roboto.className}`}>
            Contact us
          </span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
