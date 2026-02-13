//Get Our Elements 
const masterPlay = document.querySelector('.player');
const video = masterPlay.querySelector('.viewer');
const toggle = masterPlay.querySelector('.toggle');
const progress = masterPlay.querySelector('.progress');
const progressBar = masterPlay.querySelector('.progress__filled');
const skipButtons = masterPlay.querySelectorAll('[data-skip]');
const range = masterPlay.querySelectorAll('.player__slider');
const fullScreenButton = masterPlay.querySelector('.fullscreen');

//video.play();
//Build out functions
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]()
    // if (video.paused){
    //     video.play();
    // }else{
    //     video.pause()
    // }

}
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;

}

function skip(){
   console.log(this.dataset.skip);
   video.currentTime += parseFloat(this.dataset.skip) //used parseFlot to convert string to no.
   
}
function updateRange(){
    console.log(this.name);
    console.log(this.value);
    video[this.name] = this.value
    

}
function updateBar(){
    let progressChange = parseInt((video.currentTime/ video.duration) * 100)
    progressBar.style.flexBasis = `${progressChange}%`;
}
function scrub(e){
    //console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth ) * video.duration
    video.currentTime = scrubTime;


}
// function toggleFullScreen(player){
//     if(!document.fullscreenElement){
//         player.requestFullscreen();
//     } else{
//         document.exitFullscreen();
//     }
// }
function toggleFullScreen() {
    if (!document.fullscreenElement) {
// If the document is not in full screen mode
    // make the video full screen
        if (masterPlay.requestFullscreen) {
            masterPlay.requestFullscreen();
        } 
        else if (masterPlay.webkitRequestFullscreen) { // Safari
            masterPlay.webkitRequestFullscreen();
        } 
        else if (masterPlay.msRequestFullscreen) { // Old Edge
            masterPlay.msRequestFullscreen();
        }

    } else {
        // Otherwise exit the full screen
        document.exitFullscreen();
    }
}

fullScreenButton.addEventListener('click', toggleFullScreen);

//Hook up the event listener
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip))

range.forEach(range=> range.addEventListener('change', updateRange))
// range.forEach(range=> range.addEventListener('mousemove', updateRange))


//Update seekbar
let mousedown = false; // flag 
video.addEventListener('timeupdate', updateBar);
//progress.addEventListener('mousedown', scrub) //worked when mousedown anywhere in the bar but can't drag it
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e)=> mousedown && scrub(e))
progress.addEventListener('mousedown', ()=> mousedown = true)
progress.addEventListener('mouseup', ()=> mousedown = false)
fullScreenButton.addEventListener('click', toggleFullScreen)


