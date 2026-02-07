let noBtn = document.getElementById('noBtn');
let yesBtn = document.getElementById('yesBtn');
let hug = document.getElementById('hug');
let message = document.getElementById('message');

let fontSize = 22;

noBtn.addEventListener('click', () => {
    fontSize -= 2;
    message.style.fontSize = fontSize + 'px';

    if(fontSize <= 12){
        alert("Drashtuu, please forgive me 😢");
    }
});

yesBtn.addEventListener('click', () => {
    hug.classList.remove('hidden');
    hug.style.fontSize = '28px';
    hug.style.color = '#ff1493';
});
