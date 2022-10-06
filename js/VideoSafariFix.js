
const videos = document.querySelectorAll("video");
let triggered = false;

const playVideo = async () => {
    if (triggered) return;
    try {
        // ждём пока все видео запустятся
        // (можно заменить на video.play() если видео одно)
        await Promise.all([...videos].map((video) => video.play()));

        // удаляем картинку (первый кадр видео)
        // которая перекрывает видео с position: absolute
        document.querySelectorAll(".videoThumbnail").forEach((img) => img.remove());
    } catch (e) {
        // do nothing
    }
};

// если возможно запускаем сразу
playVideo();

// если сафари лоупавер - делаем это при экшне юзера
document.addEventListener("click", playVideo);
document.addEventListener("touchstart", playVideo);