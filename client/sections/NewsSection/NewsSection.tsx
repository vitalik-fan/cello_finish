import styles from "./NewsSection.module.sass";
import React, { useEffect, useState } from "react";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import newsImg from "../../public/assets/news/newsImg.jpg";
import { backUrl, moreButton, readMore } from "../../vars";
import useTypedSelector from "../../hooks/useTypedSelector";
import Image from "next/image";
import fetchQuery from "../../services/ssr";

interface INews {
  day: string;
  month: string;
  year: string;
  Title: string;
  Content: string;
  Image: string;
  longText: string;
  Link: string;
}

interface NewsSection {
  NewsSection: any;
}

const NewsSection = () => {
  const lang = useTypedSelector((state) => state.app.language);
  const [pagination, setCurrentPagination] = useState<number>(5);
  const [isMoreVisible, setMobVisible] = useState<boolean>(true);
  const [newsAmount, setNewsAmount] = useState<number>(3);

  const clickMoreAction = () => {
    if (pagination + 3 > newsAmount) {
      setCurrentPagination(newsAmount);
      setMobVisible(false);
    } else {
      setCurrentPagination(pagination + 3);
    }
  };

  const [sectionData, setSectionData] = useState<INews[]>([] as INews[]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchQuery(
        `api/news?locale=${lang.toLowerCase()}&populate=*`
      );
      setSectionData(
        response.data.map((newsing: any) => ({
          ...newsing.attributes,
          day: newsing.attributes.Date.split("-")[2],
          month: newsing.attributes.Date.split("-")[1],
          year: newsing.attributes.Date.split("-")[0],
          Image: backUrl + newsing.attributes.Image.data.attributes.url,
        }))
      );
      setNewsAmount(response.data.length);
    }
    fetchData();
  }, [lang]);

  return (
    <div className={styles.newsSection}>
      <div className="container">
        <div className={styles.newsWrapper}>
          {sectionData
            .slice(0, pagination)
            .map((newsing: any, index: number) => (
              <div key={"newselement" + index} className={styles.newsElem}>
                <div className={styles.leftSide}>
                  <span className={styles.day}>{newsing.day}</span>
                  <span className={styles.dayMonth}>
                    {newsing.month} / {newsing.year}
                  </span>
                </div>
                <div className={styles.centerSide}>
                  <div className={styles.content}>
                    <span className={styles.title}>{newsing.Title}</span>
                  </div>

                  <div
                    className={
                      index % 2 != 0
                        ? styles.imgSide
                        : styles.imgSide + " rightImg"
                    }
                  >
                    <Image
                      width={210}
                      height={120}
                      objectFit={"contain"}
                      src={newsing.Image}
                      alt="image"
                    />
                  </div>
                </div>

                <div className={styles.rightSide}>
                  <a href={newsing.Link} target="_blank">
                    <span>{readMore[lang]}</span>
                    <ArrowRight />
                  </a>
                </div>
              </div>
            ))}
        </div>

        {isMoreVisible && (
          <div onClick={clickMoreAction} className="moreWrap">
            <MoreArrow />
            <span>{moreButton[lang]}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
