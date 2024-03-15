import {songInfo} from "./data/songTypes";
  
export const generateRandomSongById = (songArray: songInfo[]) : songInfo []=>{

    const randomID: number = Math.floor(Math.random()* songArray.length);
    const thisSong = songArray.filter(songinfo => {
        return  songinfo.id === randomID;
    });
    return thisSong ;
};

//export const handlethisAttempt => { 
//}








