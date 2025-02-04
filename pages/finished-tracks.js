import Head from "next/head";
import TrackList from "./tracksList";
import tracks from "./tracks";

export default function SecretTracks() {
  const filteredTracks = tracks.filter((track) => track.status === "review" || track.status === "released");

  return (
    <div className="container">
      <Head>
        <title>Finished Tracks - Carmelite</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="main-content">
        <h1 className="page-title">Finished Tracks</h1>
        <p>
          Here are all the tracks I have available for record labels. You can see if they have been signed or not with the green tick. DM me on insta or email socarmelite@gmail.com for the download
          link. Please DO NOT share this page it's private.
        </p>
        <TrackList tracks={filteredTracks} />
      </main>
    </div>
  );
}
