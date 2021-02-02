clearCanvas = function () {
    contextReal.fillStyle = "white";
    contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
    canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount] = new Image();
    canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount].src = canvasReal.toDataURL();
    canvasSettings.undoObject.actionCount++;
}

// $('.clearButton').on("click", function () {
//     if (confirm('Are you sure you want to clear the canvas?')) {
//         clearCanvas();
//     } else {
//         return;
//     }
// })