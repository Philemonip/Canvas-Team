let canvas = $('#canvas-real');
let undolist = [];
let redolist = [];


function startDraw() {
    var lastMove = canvas[0].toDataURL();

    undolist.push(lastMove);
    redolist = [];
}

$('#undo').click(function undo(e) {

    if (undolist.length === 0) {
        return;

    } else if (undolist.length === 1) {
        contextReal.fillStyle = "#ffffff";
        contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
    } else if (undolist.length > 1) {
        var lastStep = new Image();
        lastStep.src = undolist[undolist.length - 2];
        lastStep.onload = function () {
            contextReal.drawImage(lastStep, 0, 0);
        };
    }
    redolist.push(undolist.pop());
})

$('#redo').click(function redo() {
    if (redolist.length > 0) {
        var nextStep = new Image();
        nextStep.src = redolist[redolist.length - 1];
        nextStep.onload = function () {
            contextReal.drawImage(nextStep, 0, 0);
        };
        undolist.push(redolist.pop());
    }

}
)
