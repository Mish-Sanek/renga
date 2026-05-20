"use client";
import React, { useRef, useEffect } from "react";
import styles from "./style.module.css";

const HeroSlider = ({ items }) => {
  const sliderRef = useRef(null);

  // Дублируем массив картинок, чтобы создать иллюзию бесконечной ленты
  const quadrupleItems = [...items, ...items, ...items, ...items];

  const speedData = useRef({
    targetSpeed: 1.5,
    currentSpeed: 0,
    lerpFactor: 0.04,
    baseAutoSpeed: 1.5,
    maxMouseSpeed: 6,
  });

  useEffect(() => {
    let animationFrameId;

    const updateScroll = () => {
      const slider = sliderRef.current;
      if (!slider) return;

      const data = speedData.current;

      // Рассчитываем плавную скорость
      data.currentSpeed += (data.targetSpeed - data.currentSpeed) * data.lerpFactor;

      if (Math.abs(data.currentSpeed) < 0.01) {
        data.currentSpeed = 0;
      }

      if (data.currentSpeed !== 0) {
        slider.scrollLeft += data.currentSpeed;
      }

      // --- БЕСШОВНАЯ КРУТИЛКА ---
      // Вычисляем ширину оригинального набора картинок (ровно половина скролла)
      const halfWidth = slider.scrollWidth / 2;

      // Если прокрутили вправо дальше, чем длина первой копии — незаметно прыгаем назад
      if (slider.scrollLeft >= halfWidth) {
        slider.scrollLeft -= halfWidth;
      }

      // If скроллим влево и ушли за пределы нуля — прыгаем вперед на вторую копию
      if (slider.scrollLeft <= 0 && data.currentSpeed < 0) {
        slider.scrollLeft += halfWidth;
      }

      animationFrameId = requestAnimationFrame(updateScroll);
    };

    animationFrameId = requestAnimationFrame(updateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const width = rect.width;

    const relativeX = (mouseX / width) * 2 - 1;
    const deadZone = 0.2;

    if (Math.abs(relativeX) < deadZone) {
      speedData.current.targetSpeed = 0;
    } else {
      const speedSign = Math.sign(relativeX);
      const adjustedX = (Math.abs(relativeX) - deadZone) / (1 - deadZone);
      speedData.current.targetSpeed = adjustedX * speedData.current.maxMouseSpeed * speedSign;
    }
  };

  const handleMouseLeave = () => {
    speedData.current.targetSpeed = speedData.current.baseAutoSpeed;
  };

  return (
    <div
      ref={sliderRef}
      className={styles.slider}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {quadrupleItems.map((item, index) => (
        <img src={item} key={index} alt="" className={styles.sliderImg} />
      ))}
    </div>
  );
};

export default HeroSlider;

// import styles from './style.module.css'

// const HeroSlider = ({items}) => {
//   return (
//     <div className={styles.slider}>
//       {
//         items.map((item, index) => <img src={item} key={index} alt='' />)
//       }
//     </div>
//   )
// }

// export default HeroSlider
