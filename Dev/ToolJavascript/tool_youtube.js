// Cuộn để cày giờ xem
javascript: (function () {
    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        console.log(randomNumber);
        const btn = document.querySelector(
            '#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button',
        );
        switch (randomNumber) {
            case 1:
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
                btn_play(btn);
                break;
            case 2:
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                btn_play(btn);
                break;
            default:
                btn_play(btn);
                break;
        }
    }, 30000);

    function btn_play(btn) {
        if (btn.getAttribute('title') === 'Phát (k)') {
            btn.click();
        }
    }
})();
