import React from "react";

export default function TrackList({ tracks = [] }) {
  const handleDownload = (link) => {
    const password = prompt("Please enter the password to download:");
    if (password === "carmelite6743") {
      window.open(link, "_blank");
    } else {
      alert("Incorrect password. Download not allowed. Please DM Pete for the download password.");
    }
  };

  return (
    <div className="track-list">
      {tracks.map((track, index) => {
        const isSigned = track.signed === "yes";

        return (
          <div key={index} className="track-card">
            <iframe className="soundcloud-player" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={track.soundcloudEmbed}></iframe>

            <button className="download-button" onClick={() => handleDownload(track.dropboxLink)}>
              Download {track.title}
            </button>

            <div className="info-container">
              <div className="genre-container">
                <span className="label">Genre:</span> <span className="genre-label">{track.genre}</span>
              </div>
              <div className="status-container">
                <span className="label">Signed?</span> <span className={isSigned ? "status-tick" : "status-cross"}>{isSigned ? "✔" : "✘"}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
