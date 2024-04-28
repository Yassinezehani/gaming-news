import React, { useEffect, useState } from "react";
import "./Tech.css";

export default function Tech() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const techAPI = process.env.REACT_APP_TECH_NEWS_KEY;
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${techAPI}`
        );
        const data = await response.json();
        setArticles(
          data.articles.filter((item) => {
            return item.content !== "[Removed]";
          })
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };
    fetchData();
  }, [techAPI]);

  return (
    <div className="TechContainer">
      <h1 className="NewsHeader">Technology</h1>
      <p className="timing">For today {date}</p>
      {isLoading ? (
        <img
          src="https://roamr.biz/cdn/shop/t/15/assets/loading.gif?v=24440874582008125881674212632"
          alt=""
          className="loadingGif"
        />
      ) : (
        <ul className="newsCardContainer">
          {articles.map((article, index) => (
            <li key={index} className="newsCard">
              <div className="imgWrapper">
                <img
                  src={
                    article.urlToImage
                      ? article.urlToImage
                      : "https://images.vexels.com/media/users/3/130457/isolated/preview/089b7a0e56b2310538f82694adb27942-folded-newspaper-icon.png"
                  }
                  alt=""
                />
              </div>
              <p className="cardTitle">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
