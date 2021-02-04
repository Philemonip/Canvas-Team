class DrawingEraser extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = "#fff";
    this.contextReal.lineJoin = "round";
    this.contextReal.lineCap = "round";
    this.contextReal.lineWidth = canvasSettings.brushSize;
    this.contextReal.shadowBlur = 0;
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  } s
  onMouseMove() { }
  onMouseUp() {
    this.contextReal.closePath();
    this.contextReal.stroke();
  }
  onMouseLeave(coord, event) {
    this.contextReal.closePath();
    this.contextReal.stroke();
  }
  onMouseEnter(coord, event) {
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
  }
  draw(x, y) {
    this.contextReal.lineTo(x, y);
    this.contextReal.moveTo(x, y);
    this.contextReal.closePath();
    this.contextReal.stroke();
  }
}
