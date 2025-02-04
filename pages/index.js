import Head from "next/head";
import Image from "next/image";
import TrackList from "./tracksList";
import tracks from "./tracks";

export default function Home() {
  const releasedTracks = tracks.filter((track) => track.status === "released");

  return (
    <div className="container">
      <Head>
        <title>Carmelite - Deep/Tech House Producer and DJ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        <h1 className="page-title">CARMELITE</h1>
        <h4 style={{ color: "#333" }}>Deep/Tech House Producer and DJ</h4>
        <p>
          I struggled with a crippling drug addiction for 20 years. Now my mission is to stay clean, stay healthy, and produce 52 deep/tech house club tracks in 52 weeks. You can follow my journey on
          Instagram where I upload daily videos with my progress.
        </p>

        <Image src="/logo.png" alt="Logo" width={200} height={200} className="logo" />
        <br />
        <div className="social-icons">
          <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/soundcloud-icon.png" alt="SoundCloud Icon" width={50} height={50} className="icon" />
          </a>
          <a href="https://www.instagram.com/itscarmelite/" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram-icon.png" alt="Instagram Icon" width={50} height={50} className="icon" />
          </a>
        </div>

        <p className="contact-message">
          Email me for questions, remix requests, or 121 coaching/tuition to learn my sound:
          <a href="mailto:socarmelite@gmail.com"> socarmelite@gmail.com</a>
        </p>

        {/* Display only released tracks */}
        <h2 className="sub-heading">Released Tracks</h2>
        <TrackList tracks={releasedTracks} />
      </main>
    </div>
  );
}
