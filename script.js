const playBtn = document.getElementById("playBtn");
const scareImg = document.getElementById("scareImg");
const audio = document.getElementById("audio");
const refresh = document.getElementById("refresh");

playBtn.addEventListener("click", () => {
    playBtn.style.display = "none";
    scareImg.style.display = "block";

    // Fullscreen
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => console.log(err));
    }

    // Play 1 lần (file đã nối 2 lần)
    audio.src = "scream2x.mp3";
    audio.play().catch(err => console.log("Audio không phát được:", err));

    // Nhấp nháy nền
    let isWhite = false;
    const flashInterval = setInterval(() => {
        document.body.style.background = isWhite ? "black" : "white";
        isWhite = !isWhite;
    }, 200);

    // Hiện chữ haha sau 2 giây
    setTimeout(() => refresh.style.display = "block", 2000);

    // Dừng nhấp nháy khi audio kết thúc
    audio.onended = () => clearInterval(flashInterval);
});
