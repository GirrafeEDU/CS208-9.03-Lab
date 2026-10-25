function myLineUp(event) {
    event.preventDefault();

    let concatStr = "";

    let selectedStatus = document.querySelector(
        'input[name="status"]:checked'
    );

    concatStr += "Status: " + selectedStatus.value;

    let selectedDate = document.querySelector(
        'select[name="gameDate"]'
    );

    concatStr += "\nDate: " + selectedDate.value;

    let selectedPlayers = document.querySelectorAll(
        'input[name="player"]:checked'
    );

    let playerNames = [];

    for (let player of selectedPlayers) {
        playerNames.push(player.value);
    }

    concatStr += "\nPlayers selected: " + playerNames.join(", ");

    console.log(concatStr);

    document.getElementById("lineup").textContent = concatStr;
}

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(
        'input[type="submit"]'
    );

    submitButton.addEventListener("click", myLineUp);
});