class DrawingFurLine extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
    this.track = [];
  }

  onMouseDown(coord, event) {
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.context.strokeStyle = canvasSettings.colorStroke;
    this.context.lineWidth = canvasSettings.brushSize;
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

      if (d < 1000) {
        this.context.beginPath();
        this.context.strokeStyle = canvasSettings.colorStroke;
        this.context.moveTo(lastPoint.x + dx * 0.2, lastPoint.y + dy * 0.2);
        this.context.lineTo(
          this.track[i].x - dx * 0.2,
          this.track[i].y - dy * 0.2
        );
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
