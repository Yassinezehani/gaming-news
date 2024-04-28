import React, { useEffect, useState } from "react";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const formattedFirstDay = firstDayOfMonth.toISOString().substring(0, 10);
  const formattedLastDay = lastDayOfMonth.toISOString().substring(0, 10);
  const newGamesAPI = process.env.REACT_APP_NEW_GAMES_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${newGamesAPI}=${formattedFirstDay},${formattedLastDay}&platforms=18,1,7`
        );
        const data = await response.json();
        console.log(data.results);
        setArticles(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };
    fetchData();
  }, [formattedFirstDay, formattedLastDay, newGamesAPI]);
  console.log(setArticles[2]?.dominant_color);
  return (
    <div className="NewsContainer">
      <h1 className="NewsHeader">New Games</h1>
      <p className="timing">
        From: {formattedFirstDay}, To: {formattedLastDay}
      </p>
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
                    article?.background_image
                      ? article.background_image
                      : "https://openclipart.org/image/800px/321905"
                  }
                  alt=""
                />
              </div>
              <h3 className="cardTitle">
                <a
                  href={`https://rawg.io/games/${article.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.name}
                </a>
              </h3>
              <div className="cardDetails">
                <hr />
                <p className="cardDetail">
                  Genres:
                  <div className={article?.genres?.length > 2 && "textWrapper"}>
                    <p className="textWrapperLayer">
                      {article?.genres.map((item) => (
                        <span>{item?.name}, </span>
                      ))}
                    </p>
                  </div>
                </p>
                <hr />
                <p className="cardDetail">
                  Platforms:
                  <div
                    className={article?.platforms?.length > 2 && "textWrapper"}
                  >
                    <p className="textWrapperLayer">
                      {article?.platforms.map((item) => (
                        <span>{item?.platform?.name}, </span>
                      ))}
                    </p>
                  </div>
                </p>
                <hr />
                <p className="cardDetail">
                  Release date:
                  <div>
                    <p>{article.released}</p>
                  </div>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
