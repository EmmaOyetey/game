import './style.scss';
import { songArray } from "./data/songs";
import { songInfo } from './data/songTypes';

//import {generateRandomSongById, handlePass, handleThisGuess, handleLoser,  } from "./call-back-functions";


const startNewGameButton = document.querySelector<HTMLButtonElement>(".newGameButton");
const playAudioButton = document.querySelector<HTMLButtonElement>(".playButton");
//const passButton = document.querySelector<HTMLButtonElement>(".passButton");
//const submitGuessButton = document.querySelector<HTMLButtonElement>(".submitGuessButton");

//const audio =document.querySelector<HTMLAudioElement>(".audio")

const resultDisplay = document.getElementById("resultDisplay");
const albumDisplay = document.getElementById("albumInfoDisplay");

let thisSong : songInfo | undefined;



  if (
    !startNewGameButton ||
    !playAudioButton 
 //   !passButton ||
 //   !submitGuessButton
  ){
    throw new Error ("issue with buttons");
  };

  if(
    !resultDisplay ||
    !albumDisplay
  ){
    throw new Error ("issue with digit button")
  };
   
  //if(
  //  !audio
  //){ 
  // throw new Error ("issue with audio")
  //};
 


const handleThisGame = () : void => {

      const randomID: number = Math.floor(Math.random()* songArray.length);
      const thisSong = songArray.find(songInfo => songInfo.id === randomID);
      console.log("this Song:", thisSong);
      
   };    

    const handleAttempt1 = (): void => {
      if (thisSong) {
        const audioElement = document.createElement('audio');
        audioElement.className = 'audio__one';
        audioElement.src = thisSong.audio[0];
        } else {console.log("no song selected for playback");
            } 
          //  { Audio.innerHTML = `<div class = "audioOne">
          //   <audio class="audio__one" src=${thisSong.audio[0]}></audio>
           //  </div>`;
                        
     };

playAudioButton.addEventListener("click", handleAttempt1);   
startNewGameButton.addEventListener("click", handleThisGame);

//passButton.addEventListener("click", handlePass);
//submitGuessButton.addEventListener("click", handleGuess);






