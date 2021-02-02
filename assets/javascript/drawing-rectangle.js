class DrawingRectangle extends PaintFunction {
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



    this.escape = false;

    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
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
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.contextReal.lineWidth = canvasSettings.brushSize;


    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
    this.contextDraft.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);

    this.contextDraft.fill();
    this.contextDraft.stroke();
    this.contextDraft.closePath();


    $(document).keyup((e) => {
      if (e.key == 'Escape') {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.escape = true;
      }
    });
  }

  onMouseMove() { }
  onMouseUp(coord) {

    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
    this.contextReal.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);

    this.contextReal.fill();
    this.contextReal.stroke();
    this.contextReal.closePath();

    startDraw()

  }
  onMouseLeave() {
  }
  onMouseEnter() { }
}
