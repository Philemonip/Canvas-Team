class DrawingFanlike extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineCap = "round";
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasReal.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }

  onMouseMove() { }
  onMouseUp(coord, event) {
    this.contextReal.lineJoin = "round";
    this.contextReal.lineCap = "round";
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
    this.contextReal.lineWidth = canvasSettings.brushSize;
    this.contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
