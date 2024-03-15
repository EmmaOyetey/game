import './style.scss';
import {songArray} from "./data/songs";
import {generateRandomSongById} from "./call-back-functions";


      const startNewGameButton = document.querySelector<HTMLButtonElement>(".NewGameButton");
      const playAudioButton = document.querySelector<HTMLButtonElement>(".playButton");
      const passButton = document.querySelector<HTMLButtonElement>(".passButton");
      const submitGuessButton = document.querySelector<HTMLButtonElement>(".submitGuessButton");

      const resultDisplay = document.getElementById("resultDisplay");
      const albumDisplay = document.getElementById("albumInfoDisplay");

      if (
        !startNewGameButton ||
        !playAudioButton ||
        !passButton ||
        !submitGuessButton
      ){
        throw new Error ("issue with buttons");
      }

      if(
        !resultDisplay ||
        !albumDisplay
      ){
        throw new Error ("issue with digit button")
      }

//const startNewGame =  (thisSong)
 generateRandomSongById;

  
const handleThisGame = (): void => {
 
  playAudioButton.addEventListener("click", handleAudio);

  const handleAudio = () =>

      const handlethisAttempt = () => {
          let thisAttempt:number =1;
          let isCorrect:boolean = false;

          passButton.addEventListener("click", handlePass);
          submitGuessButton.addEventListener("click", handleGuess);

          const handlePass = (): void => {
            if (thisAttempt <4) { 
              thisAttempt = thisAttempt+1;
              handleTryAgain
            } else if (thisAttempt =4) {
              handleLoser
            }
          }

          const handleGuess = () : void => {
            const inputElement =document.getElementById<HTMLInputElement>("guess");
            const thisGuess = inputElement?.ariaValueMax?.toLowerCase();
            const isCorrect = thisSong.artist === thisGuess;
            if (isCorrect) {
              handleWinner;
            } else if (!isCorrect && (thisAttempt<4)) {
              thisAttempt = thisAttempt+1;
              handleTryAgain
                }else { 
                  handleLoser
                }
            }
            }
          }

          const handleTryAgain = resultDisplay.textContent = "Tune you in you need another go"; 
          const handleLoser = resultDisplay.textContent = "Not this time. play a new game to hone your note ninja skills";
          const handleWinner = resultDisplay.textContent = "WINNER! WINNER CHICKEN DINNER";
      }
}


startNewGameButton.addEventListener("click", handleThisGame);


//const startThisGame = (thisSong)
//play
  //    const handlePlayAudio =(): void => {
 //    get the audion click from the data set and 
 //    play length dependant on the number of guesses made
 //    pass the numberOfGuesses as a parameter into the function.
//     need to set types declare key name and type
         };
    

//      playAudioButton.addEventListener("click", handlePlayAudio);
//
//      
//      const getThisGuess: string = (guess:string)  => {
  //type AudioClip = HTMLAudioElement;

  // Declare a variable of type AudioClip
  //let myAudio: AudioClip;
  
  // Assign an audio element to the variable
  //myAudio = new Audio('path/to/audio/file.mp3');
  
  // Play the audio
  //myAudio.play();
//     };


