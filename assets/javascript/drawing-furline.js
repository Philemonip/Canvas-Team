class DrawingFurLine extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
    this.track = [];
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = "#000000";
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.context.lineWidth = 1;
    // this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    // this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.track.push({
      x: coord[0],
      y: coord[1],
    });
  }

  onDragging(coord, event) {
    this.track.push({
      x: coord[0],
      y: coord[1],
    });
    this.context.beginPath();
    this.context.moveTo(
      this.track[this.track.length - 2].x,
      this.track[this.track.length - 2].y
    );
    this.context.lineTo(
      this.track[this.track.length - 1].x,
      this.track[this.track.length - 1].y
    );
    this.context.stroke();

    var lastPoint = this.track[this.track.length - 1];

    for (var i = 0; i < this.track.length; i++) {
      var dx = this.track[i].x - lastPoint.x;
      var dy = this.track[i].y - lastPoint.y;
      var d = dx * dx + dy * dy;

      while (d < 2000 && Math.random() > d / 2000) {
        this.context.beginPath();
        this.context.strokeStyle = "#000000";
        this.context.moveTo(lastPoint.x + dx * 0.5, lastPoint.y + dy * 0.5);
        this.context.lineTo(lastPoint.x - dx * 0.5, lastPoint.y - dy * 0.5);
        this.context.stroke();
      }
    }
  }

  onMouseMove() {}
  onMouseUp() {
    this.track.length = 0;
  }

  onMouseLeave() {}
  onMouseEnter() {}

  // onFinish(){
  //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount] = new Image();
  //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount].src = canvasReal.toDataURL();
  //     canvasSettings.undoObject.actionCount++;
  // }
}
