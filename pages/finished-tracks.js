import Head from "next/head";
import TrackList from "../components/tracksList"; // Ensure correct path

export default function FinishedTracks({ filteredTracks }) {
  return (
    <div className="container">
      <Head>
        <title>Finished Tracks</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="main-content">
        <h1 className="page-title">Finished Tracks</h1>
        <p>
          Here are all the tracks I have available for record labels. You can see if they have been signed or not with the green tick. DM me on Insta or email socarmelite@gmail.com for the download
          link. Please DO NOT share this page it's private.
        </p>
        <TrackList tracks={filteredTracks} />
      </main>
    </div>
  );
}

// ✅ Ensures `tracks` is defined at build time
import tracks from "../data/tracks";
export function getStaticProps() {
  const filteredTracks = tracks.filter((track) => track.status === "review" || track.status === "released");
  return { props: { filteredTracks } };
}
