let ourCanvas = $('#canvas-real');
let dataCount = -1;
let dataStack = [];

function startDraw() {
    var lastMove = ourCanvas.toDataURL();
    dataCount++;
    if (dataCount < dataStack.length) {
        dataStack.length = dataCount
    };
    dataStack.push(lastMove);
}

function undo() {

    if (dataCount >= 0) {
        dataCount--;




    }
}

function redo() {
    if (redoDataStack.length > 0) {
        var nextStep = new Image();
        nextStep.src = redoDataStack[redoDataStack.length - 1];
        nextStep.onload = function () {
            contextReal.drawImage(nextStep, 0, 0);
        };
        undoDataStack.push(redoDataStack.pop());
    }


}
