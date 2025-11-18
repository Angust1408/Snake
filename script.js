const playBtn = document.getElementById("playBtn");
const scareImg = document.getElementById("scareImg");
const audio = document.getElementById("audio");
const refresh = document.getElementById("refresh");

let playCount = 0; // số lần đã play

playBtn.addEventListener("click", () => {
    if (playCount >= 2) return; // chỉ play 2 lần

    playCount++;
    
    // Ẩn nút play, hiện ảnh scare
    playBtn.style.display = "none";
    scareImg.style.display = "block";

    // Fullscreen
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => console.log("Fullscreen không được:", err));
    }

    // Play audio 1 lần
    audio.currentTime = 0;
    audio.play().catch(err => console.log("Audio không phát được:", err));

    // Nhấp nháy nền
    let isWhite = false;
    const flashInterval = setInterval(() => {
        document.body.style.background = isWhite ? "black" : "white";
        isWhite = !isWhite;
    }, 200);

    // Hiện chữ haha sau 2 giây
    setTimeout(() => refresh.style.display = "block", 2000);

    // Sau audio kết thúc, reset flash interval và hiển thị nút lại nếu muốn bấm lần 2
    audio.onended = () => {
        clearInterval(flashInterval);
        if (playCount < 2) {
            playBtn.style.display = "block"; // có thể bấm lần 2
            scareImg.style.display = "none";
            refresh.style.display = "none";
        }
    };
});
