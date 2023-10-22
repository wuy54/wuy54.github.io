document.addEventListener("DOMContentLoaded", function () {
    function updateClocks() {
        const localTime = new Date();
        const utcTime = new Date().toUTCString();

        document.getElementById("local-time").textContent = `Vandy Time: ${localTime.toLocaleTimeString()}`;
        document.getElementById("utc-time").textContent = `UTC Time: ${utcTime}`;
    }

    function updateCountdown() {
        const targetDate = new Date("2023-12-16T00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").textContent = `Time left to Winter Break: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateClocks();
    updateCountdown();

    setInterval(() => {
        updateClocks();
        updateCountdown();
    }, 1000);

    const basketballContainer = document.getElementById("basketballContainer");
    const basketballImage = document.createElement("img");
    basketballImage.src = "vandy1.png";
    basketballImage.classList.add("basketball");

    const button = document.getElementById("showBasketball");
    button.addEventListener("click", function () {
        if (basketballContainer.contains(basketballImage)) {
            basketballContainer.removeChild(basketballImage);
            button.textContent = "Welcome to KazooVandy!"; // Change text back"
        } else {
            basketballContainer.appendChild(basketballImage);
            button.textContent = "Anchor Down"; // Change text to "Anchor Down"
        }
    });

    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
        id: 15,
        cityid: '4644585',
        appid: '2e3c2e7ec51224865a1a0fe4b2f3c019',
        units: 'imperial', // Initial units set to 'imperial'
        containerid: 'openweathermap-widget-15',
    });

    (function () {
        var script = document.createElement('script');
        script.async = true;
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    })();


});
