import './_style.scss';
import { songArray } from "./data/songs";
import { songInfo } from './data/songTypes';

//import {generateRandomSongById, handlePass, handleThisGuess, handleLoser,  } from "./call-back-functions";


const startNewGameButton = document.querySelector<HTMLButtonElement>(".newGameButton");
const playAudioButton = document.querySelector<HTMLButtonElement>(".playButton");
//const passButton = document.querySelector<HTMLButtonElement>(".passButton");
const submitGuessButton = document.querySelector<HTMLButtonElement>(".submitGuessButton");
const guessOneInput = document.querySelector<HTMLInputElement>("#guess");

const resultDisplay = document.getElementById("resultDisplay");
//const albumDisplay = document.getElementById("albumInfoDisplay");

let thisSong : songInfo | undefined;



  if (
    !startNewGameButton || !playAudioButton 
 //   !passButton ||
 //   !submitGuessButton
  ){
    throw new Error ("issue with buttons");
  };

  if(
  !resultDisplay 
  ){
  throw new Error ("issue with display")
  };
  if (
    !submitGuessButton || 
    !guessOneInput
  ){
      throw new Error ("issue with guess input")
  };
  
   
  //if(
  //  !audio
  //){ 
  // throw new Error ("issue with audio")
  //};
 


const handleThisGame = () : void => {

      const randomID: number = Math.floor(Math.random()* songArray.length);
      thisSong = songArray.find(songInfo => songInfo.id === randomID);
      console.log("this Song:", thisSong);
      
   };    

    const handleAttempt1 = (): void => {
        if (thisSong) {
          const audioElement = document.createElement('audio');
        audioElement.className = 'audio__one';
        audioElement.src = thisSong.audio[0];
        audioElement.play();
        console.log("i'm playing a song!" + thisSong.artist)
        } else {
          console.log("no song selected for playback")
        }                
     };

     const handleThisGuess = () : void => {
      if(thisSong){
        const correctAnswer = thisSong.artist;
        console.log( "the correct Answer is" + correctAnswer + "your guess is " + thisSong.artist)
        const thisGuess = guessOneInput.value.trim().toLowerCase();
        if (thisGuess === correctAnswer?.toLowerCase()) {
        console.log ("you are a winner. it is " + thisSong.artist );
        resultDisplay.textContent = "WINNER! WINNER CHICKEN DINNER";
        } else  { 
          console.log (" you loser it is ");
          resultDisplay.textContent = "Not this time. play a new game to hone your note ninja skills";
        };
      } else {
        console.log("no song for playback")
      }

    };
  


playAudioButton.addEventListener("click", handleAttempt1);   
startNewGameButton.addEventListener("click", handleThisGame);

//passButton.addEventListener("click", handlePass);
submitGuessButton.addEventListener("click", handleThisGuess);






