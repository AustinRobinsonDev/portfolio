const musicBtn = document.querySelector('#audioBtn');
const messageBtn = document.querySelector('#msgBtn');


// Div Tilt
$('document').ready(() => {

    VanillaTilt.init(document.querySelector(".aboutUs"), {
        max: 55,
        speed: 300,
        glare: true,
        startY: 90,
        "max-glare": .70,
        "glare-prerender": false,
        scale: 1.25,
        perspective: 2000,
        easing: "cubic-bezier(.03,.98,.52,.99)"
    });

});

//plays sound & changes background refresh to exit
musicBtn.onclick = function playMusic() {
    let mainDiv = document.querySelectorAll('.icon a:link');
    let newMusic = document.querySelector('#audioOne');
    let videoBackground = document.querySelector('#backgroundVideo');
    videoBackground.setAttribute('src', '../imgs/video1.mp4');
    //videoBackground.setAttribute('id', 'backgroundVideo');
    newMusic.currentTime=37.9;
    newMusic.volume = .2;
    $('#mHeading').css({"font-size": 75});
    newMusic.play();
    //assigns random color to the buttons when music is playing
    const randomColor = () => '#' + Math.random().toString(16).substr(-6);
    const changeColor = () => {
        messageBtn.style.backgroundColor = randomColor();
        musicBtn.style.backgroundColor = randomColor();
        mainDiv.style.backgroundColor = randomColor();
    }; 
    setInterval(() => {
        changeColor()
      }, 500)


};

//form control and errors
messageBtn.onclick = () => {
    const emailBox = document.querySelector('.emailInput');
    const messageBox = document.querySelector('.messageInput');
    const emailError = document.querySelector('#emailError');
    const messageError = document.querySelector('#messageError');
    if(emailBox.value.length > 4){
        let userEmail = emailBox.value;
    }else{
        $('#mHeading').css({"font-size": 75});
        messageError.classList.add('display');
        emailError.classList.add('display');
        messageBtn.classList.add('btn-warning');
    }

};







mapboxgl.accessToken = '<pk.eyJ1IjoiYXVzdGlucm9iaW5zb24yMDI0IiwiYSI6ImNrbXZkNXdmcDA0MjEycG8zamtsaG16OGUifQ.rRMD7VpyS6xl9oQqGLZ9JQ>';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/austinrobinson2024/ckmy12vbv1dxe17mfzzcjrt7v', // style URL
center: [-83.612372, 35.386355], // starting position [lng, lat]
zoom: 9 // starting zoom
});

var map = L.mapbox.map('map')
    .setView([-83.612372, 35.386355], 9)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/austinrobinson2024/ckmy12vbv1dxe17mfzzcjrt7v'));




