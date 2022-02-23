import styles from "./NewsSection.module.sass";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import newsImg from "../../public/assets/news/newsImg.jpg";

interface INews {
  day: string;
  month: string;
  year: string;
  title: string;
  littleImg: string;
  longText: string;
}

const NewsSection = () => {
  const news: INews[] = [
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
  ];

  const [pagination, setCurrentPagination] = useState<number>(5);
  const [isMoreVisible, setMobVisible] = useState<boolean>(true);

  const newsAmount = news.length;

  const clickMoreAction = () => {
    if (pagination + 3 > newsAmount) {
      setCurrentPagination(newsAmount);
      setMobVisible(false);
    } else {
      setCurrentPagination(pagination + 3);
    }
  };

  return (
    <div className={styles.newsSection}>
      <div className="container">
        <div className={styles.newsWrapper}>
          {news.slice(0, pagination).map((newsing, index) => (
            <div key={uuidv4() + index} className={styles.newsElem}>
              <div className={styles.leftSide}>
                <span className={styles.day}>{newsing.day}</span>
                <span className={styles.dayMonth}>
                  {newsing.month} / {newsing.year}
                </span>
              </div>
              <div className={styles.centerSide}>
                <div className={styles.content}>
                  <span className={styles.title}>{newsing.title}</span>
                </div>

                <div
                  className={
                    index % 2 != 0
                      ? styles.imgSide
                      : styles.imgSide + " rightImg"
                  }
                >
                  <img src={newsing.littleImg} alt="image" />
                </div>
              </div>

              <div className={styles.rightSide}>
                <span>Читать далее</span>
                <ArrowRight />
              </div>
            </div>
          ))}
        </div>

        {isMoreVisible && (
          <div onClick={clickMoreAction} className="moreWrap">
            <MoreArrow />
            <span>Показать еще</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSection;