import "./_style.scss";
import { songArray } from "./data/songs";
import { songInfo } from "./data/songTypes";


const startNewGameButton =
  document.querySelector<HTMLButtonElement>(".newGameButton");
const playAudioButton =
  document.querySelector<HTMLButtonElement>(".playButton");
const submitGuessButton =
  document.querySelector<HTMLButtonElement>(".submitGuessButton");
const audioStopButton =
  document.querySelector<HTMLButtonElement>(".audioPauseButton");

const guessInput = document.querySelector<HTMLInputElement>("#guess");
const imageDisplay =
  document.querySelector<HTMLInputElement>(".image-container");  
const inGameAudioAndFeedbackContainer = document.querySelector<HTMLDivElement>(
  ".inGameAudioAndFeedback-container");
const feedbackDisplay =
  document.querySelector<HTMLDivElement>(".feedbackDisplay");
const controlButtonsDisplay =
  document.querySelector<HTMLDivElement>(".controlButtons");
const guessInputDisplay = document.querySelector<HTMLDivElement>(
  ".guessInput-Container");
const gameAim = document.querySelector<HTMLElement>(".gameAimIntro");
const winner = document.querySelector<HTMLElement>(".gameOutcomeWinner");
const loser = document.querySelector<HTMLElement>(".gameOutcomeLoser");
const gameOverButton =
  document.querySelector<HTMLButtonElement>(".restartButton");

if (
  !startNewGameButton ||
  !playAudioButton ||
  !audioStopButton ||
  !controlButtonsDisplay ||
  !gameOverButton
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


let thisSong: songInfo | undefined;
let thisAttempt: number = 0;
const audioElement = document.createElement("audio");
audioElement.className = "audio";

const handleNewGame = (): void => {
  window.location.reload();
  }

const stopAudio = (): void => {
  audioElement.pause(); 
  audioElement.src = ""; };

const startNewGame = (): void => {
  thisAttempt = 0;
  const randomID: number = Math.floor(Math.random() * songArray.length);
  thisSong = songArray.find((songInfo) => songInfo.id === randomID);
  console.log("this Song:", thisSong);
  inGameAudioAndFeedbackContainer.style.display = "flex";
  feedbackDisplay.textContent = "Hit play to get started"; 
  startNewGameButton.style.display = "none";


    const handlethisGame = (): void => {
      if (thisSong) {
        audioElement.src = thisSong.audio[thisAttempt];
        audioElement.play();
        console.log("i'm playing a song!" + thisSong.audio[thisAttempt]);
        } else {
          throw new Error("no song selected");;
        }
      guessInputDisplay.style.display = "flex";
      feedbackDisplay.textContent = "Hear again? Hit Play";
      feedbackDisplay.style.fontSize = "1.2em";
    };

    const handleThisGuess = (): void => {
      if (thisSong) {
        const correctAnswer = thisSong.artist;
        const thisGuess = guessInput.value.trim().toLowerCase();
        thisAttempt += 1;
        console.log("this is guess" + thisAttempt)

        if (thisGuess !== correctAnswer && thisAttempt < 4) {

          audioElement.src = "./public/audio/soundEffects/fail.mp3";
          audioElement.play();
          audioElement.onended = () => {
            if (thisSong && thisSong.audio.length < 4) {
              audioElement.src = thisSong.audio[thisAttempt]; 
              audioElement.play(); 
            }
          };
          feedbackDisplay.textContent = "Nope! Hit play to hear some more";
          controlButtonsDisplay.style.display = "flex";
          feedbackDisplay.style.fontSize = "1.2em";
          guessInputDisplay.style.display = "none";
          guessInput.value = "";
          guessInput.placeholder = "Guess again!";

          } else if (thisGuess === correctAnswer?.toLowerCase()) {

              audioElement.src = "./public/audio/soundEffects/certifiedBadass.mp3";
              audioElement.play();
              audioElement.onended = () => {
                if (thisSong && thisSong.audio.length > 4) {
                  audioElement.src = thisSong.audio[4]; 
                  audioElement.play();
                }
              };
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
              guessInputDisplay.style.display = "none";
              inGameAudioAndFeedbackContainer.style.display = "none";
              thisAttempt = 0;


            } else if (thisGuess !== correctAnswer && (thisAttempt = 4)) {
                audioElement.src = "./public/audio/soundEffects/youSuck.mp3";
                audioElement.play();
                audioElement.onended = () => {
                  if (thisSong && thisSong.audio.length > 4) {
                    audioElement.src = thisSong.audio[4];
                    audioElement.play();
                  }
                };
                loser.style.display = "flex";
                imageDisplay.innerHTML = `<div style="font-size: 1.5em">
                        <p style="margin: 0;">You were listening to ${thisSong.songTitle}</p>
                        <p style="margin: 0;">by ${thisSong.artist}</p>
                        <p style="margin: 0;">from the Album ${thisSong.albumName}</P>
                        <p style="margin: 0;">released in ${thisSong.releaseDate}</p>
                        </div>`;
                imageDisplay.classList.remove("image-container");
                imageDisplay.classList.add("image-container-winner");
                gameAim.style.display = "none";
                inGameAudioAndFeedbackContainer.style.display = "none";
                guessInputDisplay.style.display = "none";
                thisAttempt = 0;
                } else {
                  throw new Error ("problem handling multiple guesses");
                }
      } else {
        throw new Error ("no song for playback");
        }
    };



    playAudioButton.addEventListener("click", handlethisGame);
    submitGuessButton.addEventListener("click", handleThisGuess);
    audioStopButton.addEventListener("click", stopAudio);
    gameOverButton.addEventListener("click", handleNewGame);

  };





startNewGameButton.addEventListener("click", startNewGame);


//const handleReset = (): void => {
//  stopAudio();
 // audioElement.src = "";
//  winner.style.display = "none";
//  loser.style.display = "none";
//  gameAim.style.display = "flex";
//  imageDisplay.classList.remove("image-container-winner");
//  imageDisplay.classList.remove("image-container-loser");
//  imageDisplay.classList.add("image-container");
//  imageDisplay.innerHTML = ``;
//  startNewGameButton.style.display = "flex";
//  guessInputDisplay.style.display = "none";
//  inGameAudioAndFeedbackContainer.style.display = "none";
//};







