let intervalId;

function startScare() {
    const playArea = document.getElementById("playArea");
    const imgDiv = document.getElementById("theimg");
    const audio = document.getElementById("audio");

    playArea.style.display = "none";
    imgDiv.style.display = "block";

    // Fullscreen cho mobile + desktop
    const fs = document.documentElement;
    if (fs.requestFullscreen) fs.requestFullscreen();
    else if (fs.webkitRequestFullscreen) fs.webkitRequestFullscreen();
    else if (fs.mozRequestFullScreen) fs.mozRequestFullScreen();
    else document.body.requestFullscreen?.();

    // Audio fix cho mobile
    audio.loop = true;
    audio.play().catch(() => {
        console.log("Mobile chặn audio, thử lại lần 2");
        setTimeout(() => audio.play().catch(()=>{}), 300);
    });

    // Flicker nhẹ để khỏi lag
    let isWhite = false;
    intervalId = setInterval(() => {
        document.body.style.background = isWhite ? "black" : "white";
        isWhite = !isWhite;
    }, 150);

    // hiện chữ haha
    setTimeout(() => {
        document.getElementById("refresh").style.display = "block";
    }, 2000);
}
