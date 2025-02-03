import Head from "next/head";

export default function SecretTracks() {
  const tracks = [
    {
      title: "Aiwan Sake (1 of 52)",
      soundcloudEmbed:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1991839491&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      dropboxLink: "https://www.dropbox.com/scl/fi/go6240d1iwk362i2vdl73/Carmelite-Aiwan-Sake.mp3?rlkey=u6dstrtyfrks9y7735usec85w&dl=0",
    },
    {
      title: "I'm Just (2 of 52)",
      soundcloudEmbed:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1996191651%3Fsecret_token%3Ds-oJ3e0Oy9Zom&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      dropboxLink: "https://www.dropbox.com/scl/fi/mnou8wy0m9amlzkmxvxbo/Carmelite-I-m-Just.mp3?rlkey=9p0ao9azub1hkcmf32mefzkwe&dl=0",
    },
    {
      title: "Rain Drops (3 of 52)",
      soundcloudEmbed:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1996192067%3Fsecret_token%3Ds-RKkswhPbeDZ&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      dropboxLink: "https://www.dropbox.com/scl/fi/vll6hap9878a5i6rejzdv/Carmelite-Rain-Drops.mp3?rlkey=x1ky5cx3j12o4ub0nvwn7k2hm&dl=0",
    },
    {
      title: "Never Meant To (4 of 52)",
      soundcloudEmbed:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1996280119%3Fsecret_token%3Ds-9bTQKyqmocz&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      dropboxLink: "https://www.dropbox.com/scl/fi/7ptxp9a86x1p5rf26u2iz/Carmelite-Never-Meant-To.mp3?rlkey=4tvyud2t7yk2gc5fp156b253h&dl=0",
    },
    {
      title: "Hit Me Up (5 of 52)",
      soundcloudEmbed:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2008248903%3Fsecret_token%3Ds-9LixMJFP8qY&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      dropboxLink: "https://www.dropbox.com/scl/fi/yqvxd7wpij2bb893or0yu/Carmelite-Hit-Me-Up.mp3?rlkey=kah17elt3wiwbjgufj7q746by&dl=0",
    },
    {
      title: "Nothing To Fear (6 of 52)",
      soundcloudEmbed:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2000345611%3Fsecret_token%3Ds-r1VizeB0Hu5&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      dropboxLink: "https://www.dropbox.com/scl/fi/4ou9wpvkx3fxuf8pxtm5u/Carmelite-Nothing-To-Fear.mp3?rlkey=r5qaah2f37c88hwgkys0pf9jz&dl=0",
    },
    {
      title: "Tearing Through My Heart (7 of 52)",
      soundcloudEmbed:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2008250239%3Fsecret_token%3Ds-uJjvKLZmcxg&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      dropboxLink: "https://www.dropbox.com/scl/fi/s07hjy5offlwatxdr5o9v/Carmelite-Tearing-Through-My-Heart.mp3?rlkey=pudfgwszkauoj0ihvu4cfqips&dl=0",
    },
  ];

  // Function to handle download with password protection
  const handleDownload = (link) => {
    const password = prompt("Please enter the password to download:");
    if (password === "carmelite6743") {
      window.open(link, "_blank");
    } else {
      alert("Incorrect password. Download not allowed. Please DM Pete for the download password.");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Secret Tracks - Carmelite</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        <h1 className="page-title">Secret Tracks</h1>
        <p>
          Thank you for supporting my work. Below are my private tracks for your listening and download pleasure if you are in my instagram group. Please DO NOT share this page, it's a secret page for
          my closest reviewers :)
        </p>

        {tracks.map((track, index) => (
          <div key={index} className="track-card">
            <iframe className="soundcloud-player" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={track.soundcloudEmbed}></iframe>
            <button className="download-button" onClick={() => handleDownload(track.dropboxLink)}>
              Download {track.title}
            </button>
          </div>
        ))}
      </main>

      <style jsx>{`
        body,
        html {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .main-content {
          text-align: center;
          margin-top: 1000px;
        }

        .page-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .track-card {
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
          width: 100%;
          box-sizing: border-box;
        }

        .track-card iframe {
          display: block;
          margin: 0 auto;
        }

        .download-button {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }

        .download-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
