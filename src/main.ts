import './style.scss'

//add a play button 
//input button
//image  - boombox?!
//header - quiz name
//p tags info on how to ??? - optional
//data set artistInfo type 
//    artist string
//    audio string?? audio file - will package cut this or will i need a 
//    could add album : string & release date :string
//    optional counter or barn to run as music plays
//    optional display album cover when correct or revealed
//

//Melody Maestro
//Rhythm Riddle
//Beat Detective
//Tune Teaser
//Sound Sleuth
//Song Sorcerer
//Note Ninja
//Groove Guru
//Harmony Hunter
//Lyric Legend


//might be easier to have multiple inputs guess 1, ,2 ,3, 4, 5

///---------------------------------------------------------
//guess counter = 1//
//Player initiates Game by 
//hitting play button
// if guess = 1 play 5 seconds of Audio
// if guess = 2 play 5+5 seconds of audio
// if guess = 3 play 5+5+5+5 seconds of audion
// if guess = 4 play 5+5+5+5+5+5 seconds of audio

//player invited to guess artist or Pass

//if guess 
    //
 // check if is correct? 
      //let iscorrect=false
      //let counter =guess 1

      //get thisGuess (typed user input)
      //covert case to lower
      // check if thisguess = answer 
          
          //if thisguess matches answer - hooray you win! option to play the whole Song fireworks
          //reset guess counter =0
      
          //else if thisguess is not correct) 
            //if counter <5 
              //let user know this guess isincorrect. clear thisguess ? or show 2nd guess input - might be easier?!
              //invite them to hear more and guess again
              //set guess counter = 1+1=2
            //else let user know they didnt win this time bteer luck next show. 

// if pass 
        // skip checkiscorrect follow steps for not correct.

      const playAudioButton = document.querySelector<HTMLButtonElement>(".playButton");
      const passButton = document.querySelector<HTMLButtonElement>(".passButton");
      const submitButton = document.querySelector<HTMLButtonElement>(".submitGuessButton");

      const resultDisplay = document.getElementById("resultDisplay");
      const albumDisplay = document.getElementById("albumInfoDisplay");

      if (
        !playAudioButton ||
        !passButton ||
        !submitButton
      ){
        throw new Error ("issue with buttons");
      }

      if(
        !resultDisplay ||
        !albumDisplay
      ){
        throw new Error ("issue with digit button")
      }


      const handlePlayAudio =(): void => {
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


