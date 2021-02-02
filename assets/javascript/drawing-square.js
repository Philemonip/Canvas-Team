
class DrawingSquare extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;

    }

    onMouseDown(coord, event) {
        // Style Settings: strokestyle, fillstyle, linewidth

        // this.contextDraft.setLineDash([]);
        // this.contextReal.setLineDash([]);


        this.contextReal.fillStyle = canvasSettings.colorFill;
        this.contextReal.strokeStyle = canvasSettings.colorStroke;
        this.contextDraft.strokeStyle = canvasSettings.colorStroke;
        this.contextDraft.lineWidth = canvasSettings.brushSize;
        this.contextReal.lineWidth = canvasSettings.brushSize;


        this.origX = coord[0];
        this.origY = coord[1];

    }
    onDragging(coord, event) {
        // Style Settings: strokestyle, fillstyle, linewidth
        // All on draft
        // this.contextDraft.setLineDash([]);
        // this.contextReal.setLineDash([]);


        this.contextDraft.fillStyle = canvasSettings.colorFill;
        this.contextDraft.lineWidth = canvasSettings.brushSize;
        this.contextReal.lineWidth = canvasSettings.brushSize;


        var width = Math.abs(coord[0] - this.origX) * (coord[0] < this.origX ? -1 : 1);
        var height = Math.abs(width) * (coord[1] < this.origY ? -1 : 1);

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.fillRect(this.origX, this.origY, width, height);
        this.contextDraft.strokeRect(this.origX, this.origY, width, height);

        this.contextDraft.fill();
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    onMouseMove() { }
    onMouseUp(coord) {
        var width = Math.abs(coord[0] - this.origX) * (coord[0] < this.origX ? -1 : 1);
        var height = Math.abs(width) * (coord[1] < this.origY ? -1 : 1);


        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.fillRect(this.origX, this.origY, width, height);
        this.contextReal.strokeRect(this.origX, this.origY, width, height);

        this.contextReal.fill();
        this.contextReal.stroke();
        this.contextReal.closePath();
        startDraw()

    }
    onMouseLeave() { }
    onMouseEnter() { }
}
