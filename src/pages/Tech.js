import React, { useEffect, useState } from "react";
import "./Tech.css";

export default function Tech() {
  const [articles, setArticles] = useState([]);
  const techAPI = process.env.REACT_APP_TECH_NEWS_KEY;

  useEffect(() => {
    const fetchData = async () => {
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
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };
    fetchData();
  }, [techAPI]);

  return (
    <div>
      <h1 className="NewsHeader">Technology</h1>
      <ul className="newsCardContainer">
        {articles.map((article, index) => (
          <li key={index} className="newsCard">
            <img src={article.urlToImage} />
            <p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
