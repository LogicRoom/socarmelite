import Head from "next/head";
import TrackList from "./tracksList";
import tracks from "./tracks";

export default function SecretTracks() {
  const filteredTracks = tracks.filter((track) => track.status === "review" || track.status === "released");

  return (
    <div className="container">
      <Head>
        <title>Secret Tracks - Carmelite</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="main-content">
        <h1 className="page-title">Secret Tracks</h1>
        <p>These are tracks available for review or released.</p>
        <TrackList tracks={filteredTracks} />
      </main>
    </div>
  );
}
