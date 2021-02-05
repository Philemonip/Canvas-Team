class DrawingEllipse extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.escape = false;
  }

  // contextReal.arc(); x, y, radius, start angle, end angle, false(anticlockwise) true (clockwise)

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.shadowBlur = 0;
    this.contextReal.shadowBlur = 0;
    this.contextReal.beginPath();
    this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.contextReal.lineWidth = canvasSettings.brushSize;

    this.escape = false;

    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    $(document).keyup((e) => {
      if (e.key == "Escape") {
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        this.escape = true;
      }
    });

    if (this.escape == false) {
      this.contextDraft.fillStyle = canvasSettings.colorFill;
      this.contextDraft.strokeStyle = canvasSettings.colorStroke;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.ellipse(
        this.origX,
        this.origY,
        Math.abs(coord[0] - this.origX),
        Math.abs(coord[1] - this.origY),
        Math.PI / 180,
        0,
        2 * Math.PI
      );
      this.contextDraft.fill();
      this.contextDraft.stroke();
    }
  }

  onMouseMove() {}
  onMouseUp(coord) {
    if (this.escape == false) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.ellipse(
        this.origX,
        this.origY,
        Math.abs(coord[0] - this.origX),
        Math.abs(coord[1] - this.origY),
        Math.PI / 180,
        0,
        2 * Math.PI
      );
      this.contextReal.fill();
      this.contextReal.stroke();
      this.onFinish();
    }
  }
  onMouseLeave() {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
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
}
