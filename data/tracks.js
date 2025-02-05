const tracks = [
  {
    title: "Aiwan Sake (1 of 52)",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1991839491&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    dropboxLink: "https://www.dropbox.com/scl/fi/go6240d1iwk362i2vdl73/Carmelite-Aiwan-Sake.mp3?rlkey=u6dstrtyfrks9y7735usec85w&dl=0",
    status: "released",
    genre: "House",
  },
  {
    title: "I'm Just (2 of 52)",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1996191651%3Fsecret_token%3Ds-oJ3e0Oy9Zom&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    dropboxLink: "https://www.dropbox.com/scl/fi/mnou8wy0m9amlzkmxvxbo/Carmelite-I-m-Just.mp3?rlkey=9p0ao9azub1hkcmf32mefzkwe&dl=0",
    status: "released",
    genre: "House",
  },
  {
    title: "Rain Drops (3 of 52)",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1996192067%3Fsecret_token%3Ds-RKkswhPbeDZ&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    dropboxLink: "https://www.dropbox.com/scl/fi/vll6hap9878a5i6rejzdv/Carmelite-Rain-Drops.mp3?rlkey=x1ky5cx3j12o4ub0nvwn7k2hm&dl=0",
    status: "signed",
    genre: "House",
  },
  {
    title: "Never Meant To (4 of 52)",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1996280119%3Fsecret_token%3Ds-9bTQKyqmocz&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    dropboxLink: "https://www.dropbox.com/scl/fi/7ptxp9a86x1p5rf26u2iz/Carmelite-Never-Meant-To.mp3?rlkey=4tvyud2t7yk2gc5fp156b253h&dl=0",
    status: "signed",
    genre: "Tech House",
  },
  {
    title: "Hit Me Up (5 of 52)",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2008248903%3Fsecret_token%3Ds-9LixMJFP8qY&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    dropboxLink: "https://www.dropbox.com/scl/fi/yqvxd7wpij2bb893or0yu/Carmelite-Hit-Me-Up.mp3?rlkey=kah17elt3wiwbjgufj7q746by&dl=0",
    status: "review",
    genre: "Nu Disco",
  },
  {
    title: "Nothing To Fear (6 of 52)",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2000345611%3Fsecret_token%3Ds-r1VizeB0Hu5&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    dropboxLink: "https://www.dropbox.com/scl/fi/4ou9wpvkx3fxuf8pxtm5u/Carmelite-Nothing-To-Fear.mp3?rlkey=r5qaah2f37c88hwgkys0pf9jz&dl=0",
    status: "signed",
    genre: "Tech House",
  },
  {
    title: "Tearing Through My Heart (7 of 52)",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2008250239%3Fsecret_token%3Ds-uJjvKLZmcxg&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    dropboxLink: "https://www.dropbox.com/scl/fi/s07hjy5offlwatxdr5o9v/Carmelite-Tearing-Through-My-Heart.mp3?rlkey=pudfgwszkauoj0ihvu4cfqips&dl=0",
    status: "review",
    genre: "Nu Disco",
  },
  {
    title: "I Just Want You (8 of 52)",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2010567227%3Fsecret_token%3Ds-nlvtlqQUVrf&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    dropboxLink: "https://www.dropbox.com/scl/fi/gndqbsuhu68j81gdckh2y/Carmelite-I-Just-Want-You.mp3?rlkey=g3hr9h9nrxrd1lj5tkvuts5g4&dl=0",
    status: "signed",
    genre: "Deep Tech",
  },
  {
    title: "Come On (9 of 52)",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2015715279%3Fsecret_token%3Ds-r5TFJvohUpU&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    dropboxLink: "https://www.dropbox.com/scl/fi/uksp19bwok555ohupyx94/Carmelite-Come-On.mp3?rlkey=6uu69jr9s5rit6kchv58z44gy&dl=0",
    status: "",
    genre: "House",
  },
  // {
  //   title: "Rythm is a Dancer (10 of 52)",
  //   soundcloudEmbed:
  //     "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2025834284%3Fsecret_token%3Ds-htD36SjJ4Pr&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  //   dropboxLink: "https://www.dropbox.com/scl/fi/dip6pn212n2d3ikztanw5/Carmelite-Rythm-is-a-Dancer.mp3?rlkey=dif5fiu18hsh1llbfqc6cxsmr&dl=0",
  //   status: "",
  //   genre: "Deep Tech",
  // },
];

export default tracks;
