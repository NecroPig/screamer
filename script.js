document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById('ti');

    img.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(function(error) {
                alert("Ошибка: " + error.message);
            });

            var gifImg = new Image();
            gifImg.src = 'assets/screamer.gif';
            gifImg.style.position = 'fixed';
            gifImg.style.top = '0';
            gifImg.style.left = '0';
            gifImg.style.width = '100vw';
            gifImg.style.height = '100vh';
            gifImg.style.zIndex = '9999';
            document.body.appendChild(gifImg);

            var sound = new Audio('assets/sound.mp3');
            sound.loop = true;
            sound.play();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });
    var text = document.getElementById('Text');

    text.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(function(error) {
                alert("Ошибка: " + error.message);
            });

            var gifImg = new Image();
            gifImg.src = 'assets/screamer.gif';
            gifImg.style.position = 'fixed';
            gifImg.style.top = '0';
            gifImg.style.left = '0';
            gifImg.style.width = '100vw';
            gifImg.style.height = '100vh';
            gifImg.style.zIndex = '9999';
            document.body.appendChild(gifImg);

            var sound = new Audio('assets/sound.mp3');
            sound.loop = true;
            sound.play();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });
});