import Head from "next/head";
import tracks from "./tracks"; // Adjust the path based on your folder structure

export default function SecretTracks() {
  const handleDownload = (link) => {
    const password = prompt("Please enter the password to download:");
    if (password === "carmelite6743") {
      window.open(link, "_blank");
    } else {
      alert("Incorrect password. Download not allowed. Please DM Pete for the download password.");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Secret Tracks - Carmelite</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        <h1 className="page-title">Secret Tracks</h1>
        <p>Thank you for supporting my work. Below are my private tracks for your listening and download pleasure if you are in my Instagram group. Please DO NOT share this page.</p>
        {tracks.map((track, index) => (
          <div key={index} className="track-card">
            <iframe className="soundcloud-player" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={track.soundcloudEmbed}></iframe>
            <button className="download-button" onClick={() => handleDownload(track.dropboxLink)}>
              Download {track.title}
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
