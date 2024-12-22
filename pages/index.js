import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Carmelite - Deep/Tech House Producer and DJ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        <h1 className="">Carmelite</h1>
        <h4>Deep/Tech House Producer and DJ</h4>
        <Image src="/logo.png" alt="Logo" width={200} height={200} className="logo" />
        <br></br>
        <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer" className="soundcloud-button">
          <button>Visit My SoundCloud</button>
        </a>
        <p className="contact-message">
          Email me for questions, remix requests, or 121 coaching/tuition to learn my sound:
          <a href="mailto:socarmelite@gmail.com"> socarmelite@gmail.com</a>
        </p>
      </main>

      <style jsx>{`
        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        .page-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .soundcloud-button button {
          padding: 10px 20px;
          background-color: #ff5500;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .soundcloud-button button:hover {
          background-color: #e64a00;
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
      `}</style>
    </div>
  );
}
