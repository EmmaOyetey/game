type soundEffectInfo = {
    soundeffectName :string;
    audio: string;
};


export const soundEffectArray : soundEffectInfo[] = [

    {  soundeffectName: "wrongGuess",
       audio : "./audio/soundEffect/fail.mp3"
    },
    {   soundeffectName: "win",
        audio : "./audio/soundEffect/certifiedBadass.mp3"
    },
    {    soundeffectName: "win",
        audio : "./audio/soundEffect/youSuck.mp3"
    },
 ];