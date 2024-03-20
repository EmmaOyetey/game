(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function p(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=p(i);fetch(i.href,o)}})();const h=[{id:0,songForToday:!0,albumName:"Survivor",songTitle:"Survivor",artist:"destiny's child",releaseDate:"2001",genre:["French Indie","Rock","R&B","pop"],playlist:["waiheke","oyetey","today"],audio:["./src/audio/destinysChild/destinyC-clip1.mp3","./public/audio/destinysChild/destinyC-clip2.mp3","./public/audio/destinysChild/destinyC-clip3.mp3","./pubic/audio/destinysChild/destinyC-clip4.mp3","./public/audio/destinysChild/destinyC-fullsong.mp3"]},{id:1,songForToday:!0,albumName:"Daydream",songTitle:"Fantasy",artist:"mariah carey",releaseDate:"1995",genre:["pop","R&B"],playlist:["waiheke","oyetey","today"],audio:["./src/audio/mariahCarey/mariah-clip1.mp3","./public/audio/mariahCarey/mariah-clip2.mp3","./public/audio/mariahCarey/mariah-clip3.mp3","./public/audio/mariahCarey/mariah-clip4.mp3","./public/audio/mariahCarey/mariah-fullsong.mp3"]},{id:2,songForToday:!0,albumName:"The Fat of The Land",songTitle:"Firestarter",artist:"the prodigy",releaseDate:"1996",genre:["dance","electronic"],playlist:["waiheke","oyetey","today"],audio:["./src/audio/prodigy/prodigy-clip1.mp3","./public/audio/prodigy/prodigy-clip2.mp3","./public/audio/prodigy/prodigy-clip3.mp3","./public/audio/prodigy/prodigy-clip4.mp3","./public/audio/prodigy/prodigy-fullsong.mp3"]},{id:3,songForToday:!0,albumName:"Like a Prayer",songTitle:"Like a Prayer",artist:"madonna",releaseDate:"1989",genre:["pop"],playlist:["waiheke","oyetey","today"],audio:["./src/audio/madonna/madonna-clip1.mp3","./public/audio/madonna/madonna-clip1.mp3","./public/audio/madonna/madonna-clip2.mp3","./public/audio/madonna/madonna-clip3.mp3","./public/audio/madonna/madonna-fullsong.mp3"]}],g=document.querySelector(".newGameButton"),b=document.querySelector(".playButton"),w=document.querySelector(".submitGuessButton"),S=document.querySelector(".audioPauseButton"),u=document.querySelector("#guess"),s=document.querySelector(".image-container"),c=document.querySelector(".inGameAudioAndFeedback-container"),r=document.querySelector(".feedbackDisplay"),C=document.querySelector(".controlButtons"),d=document.querySelector(".guessInput-Container"),y=document.querySelector(".gameAimIntro"),L=document.querySelector(".gameOutcomeWinner"),v=document.querySelector(".gameOutcomeLoser"),E=document.querySelector(".restartButton");if(!g||!b||!S||!C||!E)throw new Error("issue with buttons");if(!c)throw new Error("issue with feedback and audio div");if(!r||!s||!y||!L||!v)throw new Error("issue with feedback or image display");if(!d||!w||!u)throw new Error("issue with guess display or input");let e,n=0;const t=document.createElement("audio");t.className="audio";const k=()=>{window.location.reload()},q=()=>{t.pause(),t.src=""},B=()=>{n=0;const f=Math.floor(Math.random()*h.length);e=h.find(a=>a.id===f),console.log("this Song:",e),c.style.display="flex",r.textContent="Hit play to get started",g.style.display="none";const l=()=>{if(e)t.src=e.audio[n],t.play(),console.log("i'm playing a song!"+e.audio[n]);else throw new Error("no song selected");d.style.display="flex",r.textContent="Hear again? Hit Play",r.style.fontSize="1.2em"},p=()=>{if(e){const a=e.artist,i=u.value.trim().toLowerCase();if(n+=1,console.log("this is guess"+n),i!==a&&n<4)t.src="./public/audio/soundEffects/fail.mp3",t.play(),t.onended=()=>{e&&e.audio.length<4&&(t.src=e.audio[n],t.play())},r.textContent="Nope! Hit play to hear some more",C.style.display="flex",r.style.fontSize="1.2em",d.style.display="none",u.value="",u.placeholder="Guess again!";else if(i===(a==null?void 0:a.toLowerCase()))t.src="./public/audio/soundEffects/certifiedBadass.mp3",t.play(),t.onended=()=>{e&&e.audio.length>4&&(t.src=e.audio[4],t.play())},s.classList.remove("image-container"),s.classList.add("image-container-winner"),L.style.display="flex",s.innerHTML=`<div style="font-size: 1.5em">
                      <p style="margin: 0;">You were listening to ${e.songTitle}</p>
                      <p style="margin: 0;">by ${e.artist}</p>
                      <p style="margin: 0;">from the Album ${e.albumName}</P>
                      <p style="margin: 0;">released in ${e.releaseDate}</p>
                    </div>`,y.style.display="none",d.style.display="none",c.style.display="none",n=0;else if(i!==a&&(n=4))t.src="./public/audio/soundEffects/youSuck.mp3",t.play(),t.onended=()=>{e&&e.audio.length>4&&(t.src=e.audio[4],t.play())},v.style.display="flex",s.innerHTML=`<div style="font-size: 1.5em">
                        <p style="margin: 0;">You were listening to ${e.songTitle}</p>
                        <p style="margin: 0;">by ${e.artist}</p>
                        <p style="margin: 0;">from the Album ${e.albumName}</P>
                        <p style="margin: 0;">released in ${e.releaseDate}</p>
                        </div>`,s.classList.remove("image-container"),s.classList.add("image-container-winner"),y.style.display="none",c.style.display="none",d.style.display="none",n=0;else throw new Error("problem handling multiple guesses")}else throw new Error("no song for playback")};b.addEventListener("click",l),w.addEventListener("click",p),S.addEventListener("click",q),E.addEventListener("click",k)};g.addEventListener("click",B);
