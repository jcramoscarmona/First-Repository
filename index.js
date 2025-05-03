let homeScore = 0;
let guestScore = 0;

function increaseHome1() {
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore;
}

function increaseHome2() {
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;
}

function increaseHome3() {
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;
}

function increaseGuest1() {
    guestScore += 1;
    document.getElementById("guest-score").textContent = guestScore;
}

function increaseGuest2() {
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore;
}

function increaseGuest3() {
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore;
}