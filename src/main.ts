import "./_style.scss";
import { songArray } from "./data/songs";
import { songInfo } from "./data/songTypes";

//import {generateRandomSongById, handlePass, handleThisGuess, handleLoser,  } from "./call-back-functions";

const startNewGameButton =
  document.querySelector<HTMLButtonElement>(".newGameButton");
const playAudioButton =
  document.querySelector<HTMLButtonElement>(".playButton");
//const passButton = document.querySelector<HTMLButtonElement>(".passButton");
const submitGuessButton =
  document.querySelector<HTMLButtonElement>(".submitGuessButton");
const guessInput = document.querySelector<HTMLInputElement>("#guess");
const imageDisplay =
  document.querySelector<HTMLInputElement>(".image-container");

const inGameAudioAndFeedbackContainer = document.querySelector<HTMLDivElement>(
  ".inGameAudioAndFeedback-container"
);
const feedbackDisplay =
  document.querySelector<HTMLDivElement>(".feedbackDisplay");

const controlButtonsDisplay = document.querySelector<HTMLDivElement>(".controlButtons")

const guessInputDisplay = document.querySelector<HTMLDivElement>(
  ".guessInput-Container"
);
const gameAim = document.querySelector<HTMLElement>(".gameAimIntro");
const winner = document.querySelector<HTMLElement>(".gameOutcomeWinner");
const loser = document.querySelector<HTMLElement>(".gameOutcomeLoser");
const audioStopButton = document.querySelector<HTMLButtonElement>(".audioPauseButton");
const restartButton = document.querySelector<HTMLButtonElement>(".restartButton");

let thisSong: songInfo | undefined;
let thisAttempt: number = 0;

if (
  !startNewGameButton ||
  !playAudioButton ||
  !audioStopButton ||
  !controlButtonsDisplay ||
  !restartButton
  //   !passButton ||
  //   !submitGuessButton
) {
  throw new Error("issue with buttons");
}

if (!inGameAudioAndFeedbackContainer) {
  throw new Error("issue with feedback and audio div");
}

if (!feedbackDisplay || !imageDisplay || !gameAim || !winner || !loser) {
  throw new Error("issue with feedback or image display");
}
if (!guessInputDisplay || !submitGuessButton || !guessInput) {
  throw new Error("issue with guess display or input");
}

//if(
//  !audio
//){
// throw new Error ("issue with audio")
//};

const audioElement = document.createElement("audio");
audioElement.className = "audio";

const startNewGame = (): void => {
  const randomID: number = Math.floor(Math.random() * songArray.length);
  thisSong = songArray.find((songInfo) => songInfo.id === randomID);
  console.log("this Song:", thisSong);
  startNewGameButton.style.display = "none";
  inGameAudioAndFeedbackContainer.style.display = "flex";
  feedbackDisplay.textContent = "Hit play to get started";
  controlButtonsDisplay.style.display = "flex";
  
};

const handlethisGame= (): void => {
  if (thisSong) {
    
    audioElement.src = thisSong.audio[thisAttempt];
    audioElement.play();
    console.log("i'm playing a song!" + thisSong.artist);
  } else {
    console.log("no song selected for playback");
  }
  guessInputDisplay.style.display = "flex";
  controlButtonsDisplay.style.display = "flex";
  feedbackDisplay.innerHTML = `<div>
          <p>Hear again?</p>
          <p>Hit Play</p>
          </div>`;
  feedbackDisplay.style.fontSize = "1em";
  
  console.log ("this is attempt" + thisAttempt);

};

const handleThisGuess = (): void => {
  if (thisSong) {
    const correctAnswer = thisSong.artist;
    const thisGuess = guessInput.value.trim().toLowerCase();
    thisAttempt++;

      if (thisGuess !== correctAnswer && thisAttempt < 4) {
        console.log("Try again" + thisAttempt);

        feedbackDisplay.textContent = "Nope! Hit play to hear some more";
        controlButtonsDisplay.style.display = "flex";
        feedbackDisplay.style.fontSize = "1.2em";
        guessInputDisplay.style.display = "none";
        guessInput.value = "";
        guessInput.placeholder = "Guess again!";
        
        console.log ("this is" + thisAttempt)

        } else if (thisGuess === correctAnswer?.toLowerCase()) {

          console.log("you are a winner. it is " + thisSong.artist);
          audioElement.src = thisSong.audio[4];
          audioElement.play();

          imageDisplay.classList.remove("image-container");
          imageDisplay.classList.add("image-container-winner");
          winner.style.display = "flex";
          imageDisplay.innerHTML = `<div style="font-size: 1.5em">
              <p style="margin: 0;">You were listening to ${thisSong.songTitle}</p>
              <p style="margin: 0;">by ${thisSong.artist}</p>
              <p style="margin: 0;">from the Album ${thisSong.albumName}</P>
              <p style="margin: 0;">released in ${thisSong.releaseDate}</p>
            </div>`;

          gameAim.style.display = "none";
          playAudioButton.style.display = "none";
          guessInputDisplay.style.display = "none";
          inGameAudioAndFeedbackContainer.style.display = "none";
          thisAttempt = 0;

            } else if (thisGuess !== correctAnswer && (thisAttempt = 4)) {
              imageDisplay.innerHTML = `<div>
                    <h2>Song: ${thisSong.songTitle}</h2>
                    <p>Artist: ${thisSong.artist}</p>
                    <p>Album: ${thisSong.albumName}</p>
                    <p>Release Date: ${thisSong.releaseDate}</p>
                    </div>`;
              imageDisplay.classList.remove("image-container");
              imageDisplay.classList.add("image-container-winner");
              inGameAudioAndFeedbackContainer.style.display = "none";
              guessInputDisplay.style.display = "none";
              loser.style.display = "flex";
              thisAttempt = 0;

              } else {
                console.log("problem handling multiple guesses");
              }

    } else {
      console.log("no song for playback");
    }
};

playAudioButton.addEventListener("click", handlethisGame);
startNewGameButton.addEventListener("click", startNewGame);
submitGuessButton.addEventListener("click", handleThisGuess);
