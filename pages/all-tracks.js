import Head from "next/head";
import TrackList from "../components/tracksList"; // Ensure correct path

export default function AllTracks({ allTracks }) {
  return (
    <div className="container">
      <Head>
        <title>All My Tracks</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="main-content">
        <h1 className="page-title">All My Tracks</h1>
        <p>Here are all the tracks I have produced or are in development. DM me on Insta or email socarmelite@gmail.com for the download link. Please DO NOT share this page it's private.</p>
        <TrackList tracks={allTracks} />
      </main>
    </div>
  );
}

// ✅ Ensures `tracks` is defined at build time
import tracks from "../data/tracks";
export function getStaticProps() {
  return { props: { allTracks: tracks } };
}
