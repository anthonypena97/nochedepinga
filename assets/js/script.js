var video = document.getElementById("myVideo");

function myFunction() {
    if (video.paused) {
        video.play();
    }
}

function fadeIn() {
    $(document).ready(function () {
        $("#logo-container").fadeIn(4000);
        $("#countdown").fadeIn(4000);
    });
};

setTimeout(fadeIn, 1000);


$(document).ready(function () {
    // Set the date we're counting down to
    // Set to Eastern Standard Time
    var countDownDate = new Date("2021-07-08T16:00:00.1-04:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "TICKET LINK";
        }
    }, 1000);
});
