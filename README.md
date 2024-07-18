# Tune Teezer 
## How quickly can you guess the artist/band from a songs intro?

### Overview
Tune Teezr is a browser-based game built with TypeScript, Vite, and SCSS, where players guess the artist or band based on the song's intro. This project showcases efficient use of TypeScript programming techniques and DOM manipulation to create an interactive and engaging user experience.

### The game
This game gives users the opportunity to test thier musical knowledge by inviting them to guess the artist/band from the intro to one of thier songs.  

After each incorrect guess, the user is given a slightly longer audio clip from which to guess, up to a maximum of 4 guesses. Passing is possible by typing 'pass' into the input or by simply hitting the 'submit' button. Users' attempts to guess are matched regardless of the inclusion of capital letters or any whitespace. Users are able to hear the same clip multiple times before attempting a guess.

On the event the user guesses correctly, a celebratory screen is shared. On the event the user fails to guess after 4 guesses, a 'losing' screen is shared. In both instances, details about the song played are shared with the user. These include the song title, album, and release date.

The game uses simple reveals and animations (pulse) to guide users through the game, avoiding wordy instructions. It also makes use of audio to declare incorrect guesses and to communicate the event they have won or lost. Songs are selected randomly from the data in songs.ts. Types can be found in songTypes using the const songInfo. Players can exit the game/restart using the home icon, located top right. The build is mobile-first.

The build also includes other keys such as genre and playlist for ease of adding future functionality such as filtered lists.

##### Gifs by Elliot Oyetey.



### Features
*Random Song Selection:* Each game starts with a randomly selected song from a predefined list.
*Progressive Hints:* Players get up to four progressively longer audio clips to guess the artist.
*Immediate Feedback:* Visual and audio feedback guides the user through the game.
*Simple Controls:* Easy-to-use interface with clear instructions and interactive buttons.
*Mobile-First Design:* Responsive design ensures a smooth experience on mobile devices.

### Technologies Used
*TypeScript:* Ensures type safety and improved code quality.  
*Vite:* Fast and efficient build tool.  
*SCSS:* Modular and maintainable styles.  

### Project Structure
- *data/:* Contains song data and types.
  - *songs.ts:* Array of song objects with detailed information.
  - *songTypes.ts:* Type definitions for song objects.

- *styles/: SCSS* files for styling the application.
  - _cassetteStyles.scss: Styles specific to the cassette-like UI elements.
  - _initialGameStyles.scss: Styles specific to the initial game state.
  - style.scss: Global styles and variables. 
### Key Files and Their Roles
- main.ts: The entry point of the application, handles game logic and DOM manipulation.
- index.html: The HTML structure of the game.

### Good Practices
- *Modular Code:* Data and types are separated into different files (songs.ts and songTypes.ts), promoting reusability and clarity.
- *Error Handling:* Checks for necessary DOM elements to avoid runtime errors.
- *Responsive Design:* The game is built with a mobile-first approach, ensuring it works well on different screen sizes.
- *Animations and Transitions:* Uses CSS animations for a more engaging user experience.
- *Audio Feedback:* Different audio clips are used to enhance user feedback for actions.

### Code Highlights
#### TypeScript Usage
- *Type Safety:* Usage of custom types in songTypes.ts to ensure the consistency of song data.

            export type songInfo = {  
              id: number;  
              songForToday: boolean;  
              albumName: string;  
              songTitle: string;  
              artist: string;  
              releaseDate: string;  
              genre: string[]; 
              playlist: string[];  
              audio: string[];   
            };  
 

- *Modular Code:* Separation of concerns with data and types in distinct files for better maintainability.
#### SCSS Styling
- *Modular SCSS:* Usage of SCSS partials for modular and maintainable styles.
- *Responsive Design:* Ensures a seamless experience across different devices.
- *Animations:* Subtle animations like pulse and flash to enhance user experience.
  
            @keyframes pulse {   
                 0% {   
                   transform: scale(0.9);   
                 }   
                 100% {   
                   transform: scale(1.1);   
                 }   
               }   

#### DOM Manipulation
- *Efficient Element Selection:* Use of TypeScript to select and manipulate DOM elements efficiently.

  const startNewGameButton = document.querySelector<HTMLButtonElement>(".newGameButton");  
  const playAudioButton = document.querySelector<HTMLButtonElement>(".playButton");  
  // Other element selections...
  
- *Clear Game Logic:* Well-structured functions to handle game flow, including starting a new game, handling guesses, and providing feedback.

              const handleNewGame = (): void => {
                window.location.reload();
              }
              
              const stopAudio = (): void => {
                audioElement.pause(); 
                audioElement.src = ""; 
              };
              
              const startNewGame = (): void => {
                thisAttempt = 0;
                const randomID: number = Math.floor(Math.random() * songArray.length);
                thisSong = songArray.find((songInfo) => songInfo.id === randomID);
              
                inGameAudioAndFeedbackContainer.style.display = "flex";
                feedbackDisplay.textContent = "Hit play to get started"; 
                startNewGameButton.style.display = "none";
              
                // Other game logic...
              };
  
### How to Play - Summary
1.Start a New Game: Click the "Get a Tune!" button to begin. 
2.Listen and Guess: Click the "Play" button to hear a clip of the song's intro. Type your guess in the input field and click "Submit Guess".  
3.Hints: If your guess is incorrect, you can listen to a longer clip by clicking "Play" again. You have up to 4 attempts.    
4.Feedback: Receive immediate feedback on your guess. If correct, enjoy a celebratory screen. If incorrect after 4 attempts, see the losing screen with song details.    
5.Restart: Click the home icon to restart the game.  

### Future Enhancements
- Filtered Lists: Add functionality to filter songs by genre or playlist.  
- Leaderboard: Implement a leaderboard to track and display high scores.  
- Additional Clues: Provide additional clues like album art or release year.  

By following best practices in TypeScript and SCSS, this project ensures maintainability, scalability, and a great user experience. Enjoy playing Tune Teezr and challenge yourself to guess the artist by the song intro!



