import './_style.scss';
import { songArray } from "./data/songs";
import { songInfo } from './data/songTypes';

//import {generateRandomSongById, handlePass, handleThisGuess, handleLoser,  } from "./call-back-functions";


const startNewGameButton = document.querySelector<HTMLButtonElement>(".newGameButton");
const playAudioButton = document.querySelector<HTMLButtonElement>(".playButton");
//const passButton = document.querySelector<HTMLButtonElement>(".passButton");
const submitGuessButton = document.querySelector<HTMLButtonElement>(".submitGuessButton");
const guessOneInput = document.querySelector<HTMLInputElement>("#guess");
const albumDisplay =document.querySelector<HTMLInputElement>(".image-container");
const resultDisplay = document.getElementById("resultDisplay");


let thisSong : songInfo | undefined;
let thisAttempt: number = 0;


  if (
    !startNewGameButton || !playAudioButton 
 //   !passButton ||
 //   !submitGuessButton
  ){
    throw new Error ("issue with buttons");
  };

  if(
  !resultDisplay || !albumDisplay
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
        audioElement.className = 'audio';
        audioElement.src = thisSong.audio[thisAttempt];
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
        resultDisplay.textContent = "WINNER! WINNER CHICKEN DINNER it is " + thisSong.artist;
        albumDisplay.innerHTML = `<div>
          <h2>You were listening to ${thisSong.songTitle} by ${thisSong.artist}</h2>
          <p>Album: from ${thisSong.albumName} released on ${thisSong.releaseDate}</p>
        </div>`;
        albumDisplay.classList.add('img-container-winner');
        albumDisplay.classList.remove('image-container');
        albumDisplay.classList.add('image-container-winner');
        playAudioButton.style.display = "none";
        thisAttempt = 0;
          
 


        } else if ((thisGuess !== correctAnswer) && (thisAttempt < 4)) { 
            console.log("Try again");
            resultDisplay.textContent = "Nope! Hit play to hear some more";
            guessOneInput.value = ""; 
            guessOneInput.placeholder = "Guess again!"; 
            thisAttempt++;



          } else if ((thisGuess !== correctAnswer) && (thisAttempt = 4 )) {
            resultDisplay.textContent = "LOSER! better luck next time"; 
            albumDisplay.innerHTML = `<div>
            <h2>Song: ${thisSong.songTitle}</h2>
            <p>Artist: ${thisSong.artist}</p>
            <p>Album: ${thisSong.albumName}</p>
            <p>Release Date: ${thisSong.releaseDate}</p>
          </div>`;
          albumDisplay.classList.remove('image-container');
          albumDisplay.classList.add('image-container-winner');
          playAudioButton.style.display = "none";
          thisAttempt = 0;
            

            } else { console.log("problem handling multiple guesses");
               };


      } else {
        console.log("no song for playback")
      }
    };
  


playAudioButton.addEventListener("click", handleAttempt1);   
startNewGameButton.addEventListener("click", handleThisGame);

//passButton.addEventListener("click", handlePass);
submitGuessButton.addEventListener("click", handleThisGuess);






