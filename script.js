function checkCombination() {
    var combination = document.getElementById("combinationInput").value;
    if (combination === "YOUR_COMBINATION") {
        document.getElementById("videoContainer").style.display = "block";
    } else {
        alert("Incorrect combination. Try again!");
    }
}
