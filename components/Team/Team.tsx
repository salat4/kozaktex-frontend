import React from "react";
import s from "./Team.module.css";
import { Poppins } from "next/font/google";
import Slider from "react-slick";
import Image from "next/image";
import Jay from "../../public/image/team/Jay.png";
import Ihor from "../../public/image/team/Ihor.png";
import Malik from "../../public/image/team/Malik.png";
import Anastasiia from "../../public/image/team/Anastasiia.png";
import Maryna from "../../public/image/team/Maryna.png";
import Dmytro from "../../public/image/team/Dmytro.png";
import Oleksandr from "../../public/image/team/Oleksandr.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const PrevArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={`${s.team__arrow__left} ${className}`}
    style={{ ...style }}
    onClick={onClick}
  ></div>
);

const NextArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={`${s.team__arrow__right} ${className}`}
    style={{ ...style }}
    onClick={onClick}
  ></div>
);
const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className={s.team__container}>
      <h3 className={`${s.team__title} ${poppins.className}`}>Our team</h3>
      <div>
        <Slider {...settings}>
          <div className={s.js}>
            <Image src={Jay} alt="Jay" className={s.team__image} />
          </div>
          <div className={s.js}>
            <Image src={Ihor} alt="Ihor" className={s.team__image} />
          </div>
          <div className={s.js}>
            <Image src={Malik} alt="Malik" className={s.team__image} />
          </div>
          <div className={s.js}>
            <Image
              src={Anastasiia}
              alt="Anastasiia"
              className={s.team__image}
            />
          </div>
          <div className={s.js}>
            <Image src={Maryna} alt="Maryna" className={s.team__image} />
          </div>
          <div className={s.js}>
            <Image src={Dmytro} alt="Dmytro" className={s.team__image} />
          </div>
          <div className={s.js}>
            <Image src={Oleksandr} alt="Oleksandr" className={s.team__image} />
          </div>
          {/* Додайте подібні теги Image для інших фото */}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
