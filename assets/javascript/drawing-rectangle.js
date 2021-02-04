class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.escape = false;
  }

  onMouseDown(coord, event) {
    // Style Settings: strokestyle, fillstyle, linewidth
    this.contextDraft.lineCap = "round";
    this.contextReal.lineCap = "round";
    this.contextReal.lineJoin = "round";
    this.contextDraft.lineJoin = "round";

    this.escape = false;

    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.contextReal.lineWidth = canvasSettings.brushSize;
    this.contextDraft.shadowBlur = 0;
    this.contextReal.shadowBlur = 0;

    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    // Style Settings: strokestyle, fillstyle, linewidth

    this.contextDraft.fillStyle = canvasSettings.colorFill;
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.contextReal.lineWidth = canvasSettings.brushSize;

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
      this.contextDraft.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
      this.contextDraft.strokeRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );

      this.contextDraft.fill();
      this.contextDraft.stroke();
      this.contextDraft.closePath();
    }
  }

  onMouseMove() {}
  onMouseUp(coord) {
    if (this.escape == false) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
      this.contextReal.strokeRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );

      this.contextReal.fill();
      this.contextReal.stroke();
      this.contextReal.closePath();

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
