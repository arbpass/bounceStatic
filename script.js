let dropBtn = document.getElementById("drop-phone");

dropBtn.addEventListener('click', function () {
    var x = document.getElementById("drop-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
})