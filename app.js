// -----------New Window-----------------------

Array.from(document.getElementsByClassName('music-items-list')).forEach((element) => {
    element.addEventListener('click',(e) => {
        console.log(e.target)
        var locate = window.location.href = "home.html";
        e.target.locate;   
    })
})

// -----------------------Close New Window---------------------
// ------------------------Create Object----------------------
let songIndex = 0;
let songs = [
    {songName: "Tu Junooniyat", filePath: "Music/music0.mp3"},
    {songName: "Kya Tujhe Ab Yeh Dil Bataye", filePath: "Music/music1.mp3"},
    {songName: "Lo Safar", filePath: "Music/music2.mp3"},
    {songName: "Khamoshi OST", filePath: "Music/music3.mp3"},
    {songName: "Main Woh Chaand", filePath: "Music/music4.mp3"},
    {songName: "Mere Humsafar", filePath: "Music/music5.mp3"},
    {songName: "Arziyaan", filePath: "Music/music6.mp3"},
    {songName: "Pachtaoge", filePath: "Music/music7.mp3"},
    {songName: "Dil Sambhal Ja Zara Phir Mohabbat", filePath: "Music/music8.mp3"},
    {songName: "Bewafa Tera Masoom Chehra", filePath: "Music/music9.mp3"},
   
]


// -------------Declare Variables--------------------------
let audioElement = new Audio('Music/music0.mp3');
// let audioElement = new Audio(`Music/music${songIndex}.mp3`);
// music = `music${songIndex}`
// console.log(music)

let master = document.getElementById('master');
let progressBar = document.getElementById('progressBar');
let previous = document.getElementById('previous');
let next = document.getElementById('next')
let MusicNameHome = document.getElementById('MusicNameHome')



// ------------------Change Music Name--------------------

Array.from(document.getElementsByClassName('music-item')).forEach((element,i) => {
    
    // console.log(element.innerHTML)
    // console.log(songs[i].songName)
    //  console.log(element.innerHTML = songs[0].songName)
     element.innerHTML = songs[i].songName;
})

// ------------------All Functions--------------------------

master.addEventListener('click',() => {
    if(audioElement.paused || audioElement.currentTime <=0){
       
        audioElement.play();
        master.classList.remove('fa-play');
        master.classList.add('fa-pause');
    }else {
        audioElement.pause();
        master.classList.remove('fa-pause');
        master.classList.add('fa-play');
       
    }
})

// -----------------Time Update Event On audioElement-----------------------

audioElement.addEventListener('timeupdate',() => {
     let progress = parseInt((audioElement.currentTime/ audioElement.duration) * 100);
    progressBar.value = progress;
    // console.log(  parseInt (audioElement.currentTime))
    // console.log( parseInt (audioElement.duration))
    // console.log(progressBar.value = 0)
    
   if(audioElement.currentTime === audioElement.duration){
    // audioElement.play();
    audioElement.pause();
    master.classList.remove('fa-pause');
        master.classList.add('fa-play');
   }
    
})


// -----------------Time Change Event On ProgressBar-----------------------

progressBar.addEventListener('change',() => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

//----------------------------


// -----------------Next Icon----------------------------

next.addEventListener('click',() => {
    // audioElement.currentTime =0;
    console.log(songIndex)
    if(songIndex >= 9 ){
         songIndex = 0;
       }
    else{
        songIndex +=1;       
    }
    audioElement.currentTime = 0;
    audioElement.src = `Music/music${songIndex}.mp3`;
    MusicNameHome.innerText = songs[songIndex].songName;
    audioElement.play();
    master.classList.remove('fa-play');
    master.classList.add('fa-pause');
})


// -----------------Previous Icon----------------------------

previous.addEventListener('click',() => {
//    console.log(songIndex)
   if(songIndex <= 0 ){
      songIndex = 0;
   }
   else{
    songIndex -=1;
   }
   // audioElement.src = `songs/$[songIndex].songName`
   // audioElement.play();
//    console.log('songs/$[songIndex].songName[0]')
   
    audioElement.currentTime =0;
    audioElement.src = `Music/music${songIndex}.mp3`;
    MusicNameHome.innerText = songs[songIndex].songName;
    audioElement.play();
    master.classList.remove('fa-play');
    master.classList.add('fa-pause');
   
})