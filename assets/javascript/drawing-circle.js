class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    // contextReal.arc(); x, y, radius, start angle, end angle, false(anticlockwise) true (clockwise)

    onMouseDown(coord, event) {
        // Style Settings: strokestyle, fillstyle, linewidth, lineJoin, lineCap
        // All on draft

        this.contextReal.fillStyle = canvasSettings.colorFill;
        this.contextReal.strokeStyle = canvasSettings.colorStroke;
        this.contextDraft.lineWidth = canvasSettings.brushSize;
        this.contextReal.lineWidth = canvasSettings.brushSize;


        this.contextReal.beginPath();
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.fillStyle = canvasSettings.colorFill;
        this.contextDraft.strokeStyle = canvasSettings.colorStroke;
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, Math.sqrt((coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2), 0, 2 * Math.PI);
        this.contextDraft.fill()
        this.contextDraft.stroke();
    }

    onMouseMove() { }
    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX, this.origY, Math.sqrt((coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2), 0, 2 * Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
        startDraw();

    }
    onMouseLeave() { }
    onMouseEnter() { }
}