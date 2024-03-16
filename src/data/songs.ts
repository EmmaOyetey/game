import { songInfo } from "./songTypes";

export const songArray : songInfo[] = [

 {  id: 0,
    songForToday: true,
    albumName: "3 Feet High and Rising",
    songTitle: "Tread Water",
    artist : "De La Soul",
    releaseDate : "1989",
    genre: ["Hip Hop",],
    playlist: ["waiheke", "oyetey", "today"],
    audio: ["./src/audio/TS-clip1.mp3", "./src/audio/TS-fullsong.mp3"]
 },
 {  id: 1,
    songForToday: true,
    albumName: "Raw Like Sushi",
    songTitle: "Buffalo Stance",
    artist : "Neneh Cherry",
    releaseDate : "1988",
    genre: ["Electronic", "Hip Hop", "Funk", "Soul",],
    playlist: ["waiheke", "oyetey", "today"],
    audio: ["./src/audio/TS-clip1.mp3", "./src/audio/TS-fullsong.mp3"]
 },

];