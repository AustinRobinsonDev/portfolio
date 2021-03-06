const musicBtn = document.querySelector('#audioBtn');
const messageBtn = document.querySelector('#msgBtn');

// Div Tilt
// $('document').ready(() => {

//     VanillaTilt.init(document.querySelector(".aboutUs"), {
//         max: 15,
//         reset: true,
//         speed: 200,
//         glare: true,
//         startY: 25,
//         "max-glare": .40,
//         "glare-prerender": false,
//         scale: 1.25,
//         perspective: 500,
//         easing: "cubic-bezier(.03,.98,.52,.99)"
//     });

// });

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
    }; 
    setInterval(() => {
        changeColor()
      }, 500)


};

//form control and errors
//Ask Steven about proper timeout on the errors
    messageBtn.onclick = () => {
        const emailBox = document.querySelector('.emailInput');
        const messageBox = document.querySelector('.messageInput');
        const emailError = document.querySelector('#emailError');
        const messageError = document.querySelector('#messageError');
        if(emailBox.value.length > 4){
            let userEmail = emailBox.value;
        }else {
            $('#mHeading').css({"font-size": 75});
            messageError.classList.add('display');
            emailError.classList.add('display');
            messageBtn.classList.add('btn-warning'); 
            setTimeout(() => {
                messageError.classList.remove('display');
                emailError.classList.remove('display');
                messageBtn.classList.remove('btn-warning'); 
            }, 5000)
        };
    };








