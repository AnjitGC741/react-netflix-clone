import React, { useEffect, useState } from "react";
import "../assests/Css/MediaSeasonList.css";
export default function MediaSeasonList({
  mediaDetailData,
  fetchSeasonOneDataUrl,
}) {
  const [seasonEpisode, setSeasonEpisode] = useState([]);
  const [currentSeason, setCurrentSeason] = useState(1);
  const fetchNewSeason = async (modifiedUrl) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${modifiedUrl}`
      );
      const receivedData = await response.json();
      setSeasonEpisode(receivedData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log(fetchSeasonOneDataUrl);
    const pattern = /season\/\d+/;
    let replacementPattern = `season/${currentSeason}`;
    let modifiedUrl = fetchSeasonOneDataUrl.replace(
      pattern,
      replacementPattern
    );
    fetchNewSeason(modifiedUrl);
  }, [currentSeason]);
  return (
    <div className="media-season-main-div">
      <div className="episode-select-select-tag">
        <h2 className="episode-text">Episodes</h2>
        <div>
          <select
            style={{
              border: "3px solid #aaaaaa",
              background: "#2b2b2b",
              color: "white",
              fontSize: "1.6rem",
              padding: "10px 20px ",
              letterSpacing: "0.7px",
            }}
            onChange={(e) => setCurrentSeason(e.target.value)}
          >
            {mediaDetailData.seasons.map((value) => {
              if (value.season_number !== 0 && value.episode_count !== 0) {
                return (
                  <option key={value.id} value={value.season_number}>
                    SEASON {value.season_number}
                  </option>
                );
              }
            })}
          </select>
        </div>
      </div>
      <div className="episode-list-section">
       {seasonEpisode.episodes && seasonEpisode.episodes.map((value)=>{
           return  <div key={value.episode_number} className="episode-number-image-description">
             <p className="episode-number">{value && value.episode_number}</p>
             <div className="episode-image">
              {value && <img src={`https://image.tmdb.org/t/p/original/${value.still_path}`} alt="image" />}    
             </div>
             <div className="episode-description-title-time">
                 <div className="episode-title-time">
                    <p className="episode-title">{value && value.name}</p>
                    <p className="episode-title">{value && value.runtime}m</p>
                 </div>
                 <p className="episode-description">{value && value.overview}</p>
             </div>
        </div>
         })}
      </div>
    </div>
  );
}
