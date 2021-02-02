cleanCanvas = function () {

    if (confirm('Are you sure you want to clear the drawings?')) {
        contextReal.fillStyle = "#fff";
        contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
    } else {
        return
    }

}
