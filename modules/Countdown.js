const appConfig = require('../config/appConfig');

class Countdown {
    // Set the date we're counting down to

    #countDownDate = null;

    constructor() {
        this.countDownDate = new Date(appConfig.departureDate).getTime();
    }

    // Update the count down every 1 second

    updateCountdown() {
        setInterval(() => {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = this.countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("demo").innerHTML = days + "D " + hours + "H "
                + minutes + "M " + seconds + "S ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    getDistance() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = this.countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let showDate = "เหลือเวลาอีก " + days + "วัน " + hours + "ชั่วโมง  " + minutes + "นาที " + seconds + "วินาที จ้า";

        // If the count down is finished, write some text
        if (distance < 0) {
            showDate = "EXPIRED";
        }
        return showDate;
    }
}

module.exports = Countdown;