class DrawingEllipse extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;


    }

    // contextReal.arc(); x, y, radius, start angle, end angle, false(anticlockwise) true (clockwise)

    onMouseDown(coord, event) {
        this.contextReal.fillStyle = "#1319";
        this.contextReal.beginPath();
        this.contextDraft.setLineDash([]);
        this.contextReal.setLineDash([]);
        this.contextDraft.lineWidth = 5;
        this.contextReal.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1];

    }
    onDragging(coord, event) {

        this.contextDraft.fillStyle = "#1319";
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(this.origX, this.origY, Math.abs(coord[0] - this.origX), Math.abs(coord[1] - this.origY), 0 * Math.PI / 180, 0, 2 * Math.PI)
        this.contextDraft.fill()
        this.contextDraft.stroke();

    }

    onMouseMove() { }
    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();

        this.contextReal.ellipse(this.origX, this.origY, Math.abs(coord[0] - this.origX), Math.abs(coord[1] - this.origY), 0 * Math.PI / 180, 0, 2 * Math.PI)
        this.contextReal.fill();
        this.contextReal.stroke();
        startDraw();




    }
    onMouseLeave() {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
    onMouseEnter() { }
}