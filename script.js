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

    let playTimes = 0;

    function playAudioTwice() {
        if (playTimes >= 2) return;
        playTimes++;

        audio.currentTime = 0;
        audio.play().catch(err => console.log("Audio không phát được:", err));

        audio.onended = () => {
            if (playTimes < 2) {
                playAudioTwice(); // play lần 2
            }
        };
    }

    playAudioTwice(); // bắt đầu play 2 lần liên tiếp

    // Nhấp nháy nền
    let isWhite = false;
    const flashInterval = setInterval(() => {
        document.body.style.background = isWhite ? "black" : "white";
        isWhite = !isWhite;
    }, 200);

    // Hiện chữ haha sau 2 giây
    setTimeout(() => refresh.style.display = "block", 2000);

    // Dừng nhấp nháy sau khi play xong 2 lần
    audio.onended = () => {
        if (playTimes >= 2) clearInterval(flashInterval);
    };
});
