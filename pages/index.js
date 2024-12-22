import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        <Image src="/logo.png" alt="Logo" width={200} height={200} className="logo" />
        <br></br>
        <a href="https://soundcloud.com/socarmelite" target="_blank" rel="noopener noreferrer" className="soundcloud-button">
          <button>Visit My SoundCloud</button>
        </a>
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
        .soundcloud-button button {
          padding: 10px 20px;
          background-color: #ff5500;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .soundcloud-button button:hover {
          background-color: #e64a00;
        }
      `}</style>
    </div>
  );
}
