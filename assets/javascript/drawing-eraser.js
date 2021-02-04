class DrawingEraser extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = "white";
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.context.shadowBlur = 0;
    this.context.lineWidth = canvasSettings.brushSize;

    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }
  onMouseMove() { }
  onMouseUp() {
    this.onFinish();
  }
  onMouseLeave(coord, event) { }
  onMouseEnter(coord, event) { }
  onFinish() {
    canvasSettings.undoObject.states[
      canvasSettings.undoObject.actionCount
    ] = new Image();
    canvasSettings.undoObject.states[
      canvasSettings.undoObject.actionCount
    ].src = canvasReal.toDataURL();
    canvasSettings.undoObject.actionCount++;
  }

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
