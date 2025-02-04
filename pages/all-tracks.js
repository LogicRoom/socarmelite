import Head from "next/head";
import TrackList from "./TrackList";
import tracks from "./tracks";

export default function AllTracks() {
  return (
    <div className="container">
      <Head>
        <title>All Tracks - Carmelite</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="main-content">
        <h1 className="page-title">All Tracks</h1>
        <p>Browse all tracks at any stage.</p>
        <TrackList tracks={tracks} />
      </main>
    </div>
  );
}
