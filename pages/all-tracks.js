import Head from "next/head";
import TrackList from "./tracksList";
import tracks from "./tracks";

export default function AllTracks() {
  return (
    <div className="container">
      <Head>
        <title>All My Tracks</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="main-content">
        <h1 className="page-title">All My Tracks</h1>
        <p>Here are all the tracks I have produced or are in development. DM me on insta or email socarmelite@gmail.com for the download link. Please DO NOT share this page it's private.</p>
        <TrackList tracks={tracks} />
      </main>
    </div>
  );
}
