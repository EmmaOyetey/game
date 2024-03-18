import './_style.scss';
import { songArray } from "./data/songs";
import { songInfo } from './data/songTypes';

//import {generateRandomSongById, handlePass, handleThisGuess, handleLoser,  } from "./call-back-functions";


const startNewGameButton = document.querySelector<HTMLButtonElement>(".newGameButton");
const playAudioButton = document.querySelector<HTMLButtonElement>(".playButton");
//const passButton = document.querySelector<HTMLButtonElement>(".passButton");
const submitGuessButton = document.querySelector<HTMLButtonElement>(".submitGuessButton");
const guessInput = document.querySelector<HTMLInputElement>("#guess");
const imageDisplay =document.querySelector<HTMLInputElement>(".image-container");
const inGameAudioAndFeedback = document.querySelector<HTMLDivElement>(".inGameAudioAndFeedback-container");
const feedbackDisplay = document.querySelector<HTMLDivElement>(".feedbackDisplay");
const guessInputDisplay =document.querySelector<HTMLDivElement>(".guessInput-Container");


let thisSong : songInfo | undefined;
let thisAttempt: number = 0;


  if (
    !startNewGameButton || !playAudioButton 
 //   !passButton ||
 //   !submitGuessButton
  ){
    throw new Error ("issue with buttons");
  };

  if (!inGameAudioAndFeedback){
    throw new Error ("issue with feedback and audio div");
  };

  if(
  !feedbackDisplay || !imageDisplay
  ){
  throw new Error ("issue with feedback or image display");
  };
  if (
    !guessInputDisplay ||
    !submitGuessButton || 
    !guessInput
  ){
      throw new Error ("issue with guess display or input");
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
      startNewGameButton.style.display = "none";
      inGameAudioAndFeedback.style.display = "flex";
      feedbackDisplay.textContent = "Hit play to get started";

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
        guessInputDisplay.style.display = "flex";
       feedbackDisplay.innerHTML = 
       `<div>
       <p>Hear again? Hit Play </p>
       <p>Know it? Type & Submit </P>
       <p>Pass? Type Pass & Submit</p>
       </div>`;
     };

     const handleThisGuess = () : void => {
      if(thisSong){

        const correctAnswer = thisSong.artist;
        console.log( "the correct Answer is" + correctAnswer + "your guess is " + thisSong.artist)
        const thisGuess = guessInput.value.trim().toLowerCase();

        if (thisGuess === correctAnswer?.toLowerCase()) {
        console.log ("you are a winner. it is " + thisSong.artist );
        feedbackDisplay.textContent = "WINNER! WINNER CHICKEN DINNER it is " + thisSong.artist;
        imageDisplay.innerHTML = `<div>
          <p>You were listening to </p>
          <p>${thisSong.songTitle} </P>
          <p>by ${thisSong.artist}</p>
          <p>from the Album "${thisSong.albumName}"</P>
          <p>released in ${thisSong.releaseDate}</p>
        </div>`;
        imageDisplay.classList.remove('image-container');
        imageDisplay.classList.add('image-container-winner');
        playAudioButton.style.display = "none";
        thisAttempt = 0;
          
 


        } else if ((thisGuess !== correctAnswer) && (thisAttempt < 4)) { 
            console.log("Try again");
            feedbackDisplay.textContent = "Nope! Hit play to hear some more";
            guessInput.value = ""; 
            guessInput.placeholder = "Guess again!"; 
            thisAttempt++;



          } else if ((thisGuess !== correctAnswer) && (thisAttempt = 4 )) {
            feedbackDisplay.textContent = "LOSER! better luck next time"; 
            imageDisplay.innerHTML = `<div>
            <h2>Song: ${thisSong.songTitle}</h2>
            <p>Artist: ${thisSong.artist}</p>
            <p>Album: ${thisSong.albumName}</p>
            <p>Release Date: ${thisSong.releaseDate}</p>
            </div>`;
            imageDisplay.style.backgroundImage = "./images/testMImage.png";
            imageDisplay.classList.remove('image-container');
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






