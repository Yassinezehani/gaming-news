import React from "react";
import "./Home.css";
import Card from "../componet/card";
import "../componet/video.css";
import Video from "../Assets/Footage.mp4";
import big from "../Assets/big.avif";
import small1 from "../Assets/1.avif";
import small2 from "../Assets/2.avif";
import small3 from "../Assets/3.avif";
import small4 from "../Assets/4.avif";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <div className="content">
          <video src={Video} autoPlay loop muted />
        </div>

        <div className="Cards">
          <h1>Welcome to Gaming News See What's New!</h1>
          <div className="row">
            <div className="col">
              <Card
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
                title="Gaming News"
                description="You can find all the new games by clicking the button below."
                link="/news"
                buttonText="Check Here"
              />
            </div>
            <div className="col">
              <Card
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
                title="Technologie"
                description="You can find all the new Technologies by clicking the button below. "
                link="/tech"
                buttonText="Check Here"
              />
            </div>
            <div className="col">
              <Card
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
                title="about"
                description="You can find all about us by clicking the button below. "
                link="/about"
                buttonText="Check Here"
              />
            </div>
          </div>
        </div>

        <div className="image-gallery">
          <div className="gallery-container">
            <div className="big-image">
              <div className="image-wrapper">
                <img src={big} alt="" />
                <h3>Top 10 fun games 2024</h3>
                <p>PC</p>
              </div>
            </div>

            <div className="small-images">
              <div className="image-wrapper">
                <img src={small1} alt="" />
                <h3>This new game is crazy</h3>
                <p>PS4</p>
              </div>
              <div className="image-wrapper">
                <img src={small2} alt="" />
                <h3>Up coming game</h3>
                <p>PC</p>
              </div>
              <div className="image-wrapper">
                <img src={small3} alt="" />
                <h3>Top games</h3>
                <p>XBOX</p>
              </div>
              <div className="image-wrapper">
                <img src={small4} alt="" />
                <h3>Action Games</h3>
                <p>PC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
