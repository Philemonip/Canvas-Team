class DrawingStraightLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.firstLineIsDrawn = false;
    this.escape = false;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
    this.escape = false;
  }

  onDragging(coord, event) {
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineCap = "round";
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.shadowBlur = 0;
    this.contextReal.shadowBlur = 0;
    this.contextDraft.lineWidth = canvasSettings.brushSize;

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
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    }
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    this.contextReal.lineJoin = "round";
    this.contextReal.lineCap = "round";
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
    this.contextReal.lineWidth = canvasSettings.brushSize;

    if (this.escape == false) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.lineTo(coord[0], coord[1]);
      this.contextReal.stroke();
      this.onFinish();
    }
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
}
