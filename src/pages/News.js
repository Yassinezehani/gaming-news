import React, { useEffect, useState } from "react";

export default function News() {
  const [articles, setArticles] = useState([]);
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const formattedFirstDay = firstDayOfMonth.toISOString().substring(0, 10);
  const formattedLastDay = lastDayOfMonth.toISOString().substring(0, 10);
  const newGamesAPI = process.env.REACT_APP_NEW_GAMES_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${newGamesAPI}=${formattedFirstDay},${formattedLastDay}&platforms=18,1,7`
        );
        const data = await response.json();
        
        setArticles(data.results);
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="NewsHeader">New Games</h1>
      <ul className="newsCardContainer">
        {articles.map((article, index) => (
          <li
            key={index}
            className="newsCard"
            style={{ backgroundColor: article.dominant_color }}
          >
            {article.background_image ? (
              <img src={article.background_image} />
            ) : (
              <img src="https://openclipart.org/image/800px/321905" />
            )}
            <p>
              <a  href='/' target="_blank" rel="noopener noreferrer">
                {article.name}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
