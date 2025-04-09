let btn=document.querySelector('#btn')
let content=document.querySelector('#content')
let voice=document.querySelector('#voice')
function speak(text){let text_speak=new SpeechSynthesisUtterance(text)
text_speak.rate=1
text_speak.pitch=1
text_speak.volume=1
text_speak.lang="hi-GB"
window.speechSynthesis.speak(text_speak)}
function wishMe(){let day=new Date()
let hours=day.getHours()
if(hours>=0&&hours<12){speak("Good Morning Mam")}else if(hours>=12&&hours<16){speak("good Afternoon Mam")}else{speak("Good Evening Mam")}}
window.addEventListener('load',()=>{wishMe()})
let speechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{let currentIndex=event.resultIndex
let transcript=event.results[currentIndex][0].transcript
content.innerText=transcript
takeCommand(transcript.toLowerCase())}
btn.addEventListener("click",()=>{recognition.start()
btn.style.display="null"
voice.style.display="block"})
function takeCommand(message){btn.style.display="flex"
voice.style.display="none"
if(message.includes("hello")||message.includes("hey")){speak("hello mam,what can i help you")}else if(message.includes("who are you")){speak("i am virtual assistant, created by Deshna jain")}else if(message.includes("open youtube")){speak("OPening Youtube")
window.open("https://www.youtube.com/","_blank")}else if(message.includes("open google")){speak("OPening Google")
window.open("https://mail.google.com/mail/u/0/#inbox","_blank")}else if(message.includes("open Gmail")){speak("OPening gmail")
window.open("https://www.google.com/","_blank")}else if(message.includes("open facebook")){speak("OPening Facebook")
window.open("https://www.facebook.com/","_blank")}else if(message.includes("open instagram")){speak("OPening instagram")
window.open("https://www.instagram.com/","_blank")}else if(message.includes("open smash cart")){speak("OPening smash kart")
window.open("https://smashkarts.io/","_blank")}else if(message.includes("open calculator")){speak("OPening calculator")
window.open("calculator://","_blank")}else if(message.includes("time")){let date=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
speak(Date)}else if(message.includes("date")){let time=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
speak(time)}else{let finalText="this is what i found on internetabout"+message.replace("shipra","")||message.replace("shifra","")
speak(finalText)
window.open(`https://www.google.com/search?q= ${message.replace("shipra","")}`,"_blank")}} 