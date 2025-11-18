const playBtn = document.getElementById("playBtn");
const scareImg = document.getElementById("scareImg");
const audio = document.getElementById("audio");
const refresh = document.getElementById("refresh");

playBtn.addEventListener("click", () => {
    // Ẩn nút play, hiện ảnh scare
    playBtn.style.display = "none";
    scareImg.style.display = "block";

    // Fullscreen
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }

    // Audio
    audio.loop = true;
    audio.play();

    // Nhấp nháy nền
    let isWhite = false;
    setInterval(() => {
        document.body.style.background = isWhite ? "black" : "white";
        isWhite = !isWhite;
    }, 200); // 200ms dịu mắt hơn

    // Hiện chữ haha sau 2 giây
    setTimeout(() => {
        refresh.style.display = "block";
    }, 2000);
});
