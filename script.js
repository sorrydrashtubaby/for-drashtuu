let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let hug = document.getElementById("hug");

let size = 22;

// NO button runs away + shrinks
noBtn.onclick = function () {
    size -= 2;
    noBtn.style.fontSize = size + "px";

    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
};

// YES button magic
yesBtn.onclick = function () {
    hug.classList.remove("hidden");
    startHearts();

    setTimeout(function () {
        window.location.href = "love.html";
    }, 2000);
};

// Hearts animation
function startHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.className = "heart";
        heart.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }, 300);
}
