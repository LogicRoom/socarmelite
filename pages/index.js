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

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .page-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        h4 {
          margin-bottom: 15px;
        }
        p {
          margin-bottom: 20px;
        }
        .social-icons {
          display: flex;
          gap: 30px;
          margin: 20px 0;
          justify-content: center;
        }
        .icon {
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .icon:hover {
          transform: scale(1.1);
        }
        .contact-message {
          font-size: 16px;
          margin-top: 20px;
          color: #333;
        }
        .contact-message a {
          color: #0070f3;
          text-decoration: none;
        }
        .contact-message a:hover {
          text-decoration: underline;
        }
        .sub-heading {
          font-size: 20px;
          font-weight: bold;
          margin-top: 40px;
        }
      `}</style>
    </div>
  );
}
