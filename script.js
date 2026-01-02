const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

let isPlaying = false;
const audio = new Audio('Media/say-yes-loco-punch.mp3');

function replaceImage() {
    var img = document.getElementById('image');
    img.src = 'Media/sonic-freaky.gif';
}

function playMusic() {
    if(!isPlaying){
        audio.play();
        isPlaying = true;

        audio.onended = function() {
            isPlaying = false;
        };
    }
}

yesBtn.addEventListener('click', () => {
    replaceImage();
    playMusic();
    question.innerHTML = 'I knew you would say yes my pookie';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});