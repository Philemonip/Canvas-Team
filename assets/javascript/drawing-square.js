
class DrawingSquare extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.escape = false;
    }

    onMouseDown(coord, event) {
        // Style Settings: strokestyle, fillstyle, linewidth

        // this.contextDraft.setLineDash([]);
        // this.contextReal.setLineDash([]);

        this.contextDraft.lineCap = 'round';
        this.contextReal.lineCap = 'round';
        this.contextReal.lineJoin = 'round';
        this.contextDraft.lineJoin = 'round';
        this.contextReal.fillStyle = canvasSettings.colorFill;
        this.contextReal.strokeStyle = canvasSettings.colorStroke;
        this.contextDraft.strokeStyle = canvasSettings.colorStroke;
        this.contextDraft.lineWidth = canvasSettings.brushSize;
        this.contextReal.lineWidth = canvasSettings.brushSize;

        this.escape = false;
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


        $(document).keyup((e) => {
            if (e.key == 'Escape') {
                this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
                this.escape = true;
            }
        });


        var width = Math.abs(coord[0] - this.origX) * (coord[0] < this.origX ? -1 : 1);
        var height = Math.abs(width) * (coord[1] < this.origY ? -1 : 1);

        if (this.escape == false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.fillRect(this.origX, this.origY, width, height);
            this.contextDraft.strokeRect(this.origX, this.origY, width, height);

            this.contextDraft.fill();
            this.contextDraft.stroke();
            this.contextDraft.closePath();
        }
    }

    onMouseMove() { }
    onMouseUp(coord) {
        var width = Math.abs(coord[0] - this.origX) * (coord[0] < this.origX ? -1 : 1);
        var height = Math.abs(width) * (coord[1] < this.origY ? -1 : 1);

        if (this.escape == false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.beginPath();
            this.contextReal.fillRect(this.origX, this.origY, width, height);
            this.contextReal.strokeRect(this.origX, this.origY, width, height);

            this.contextReal.fill();
            this.contextReal.stroke();
            this.contextReal.closePath();
            startDraw()
        }
    }
    onMouseLeave() { }
    onMouseEnter() { }
}
