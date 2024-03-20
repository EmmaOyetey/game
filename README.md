# game
How quickly can you guess the artist/band from a songs intro? 

This game gives users the opportunity to test thier musical knowledge by inviting them to guess the artist/band from the intro to one of thier songs.


After each incorret guess the user is given a slightly longer audio clip from which to guess, up to a maximum of 4 guesses.

Passing is possible by typing 'pass' into the input or by simplyng hitting the 'submit' button.

Users attempts to guess are matched regardless of the inclusion of capital letters or ay white space.

Users are able to hear the same clip mutliple times before attempting a guess.

on the event the user guesses correctly a celebratory screen is shared.
on the event the user fails to guess after 4 guesses a 'losing' screen is shared. In both instances details about the song played are shared with the user. These include, the song title, album and release date.

The game uses simple reveals and animations (pulse) to guide users through the game, avoiding wordy instructions. It also makes use of audio to declare incorrect guessses and to communicate the event they have won or lost.

Songs are selected randomly from the data in songs.ts. 
Types can be found in songTypes using the const songInfo.
Build is mobile first.

The build also includes other keys such as genre and playlist for ease of adding future functionality such as filtered lists.

Gifs by Elliot Oyetey.

