/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class DrawingShadowLine extends PaintFunction {
  // This class extends the PaintFunction class
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = canvasSettings.colorStroke;
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.context.lineWidth = canvasSettings.brushSize;
    this.context.shadowBlur = canvasSettings.brushSize;
    this.context.shadowColor = canvasSettings.colorStroke;
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {
    this.context.shadowBlur = 0;
    this.onFinish();
  }
  onMouseLeave() {}
  onMouseEnter() {}
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
