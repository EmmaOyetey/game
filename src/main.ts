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

      const playButton = document.querySelector<HTMLButtonElement>(".playButton");
      const passButton = document.querySelector<HTMLButtonElement>(".passButton");
      const submitButton = document.querySelector<HTMLButtonElement>(".submitGuessButton");

