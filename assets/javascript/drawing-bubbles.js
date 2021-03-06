class DrawingBubbles extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
    this.track = [];
    this.context.fillStyle = canvasSettings.colorStroke;
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    if (canvasSettings.brushSize > 20) {
      this.context.lineWidth = 20;
    } else {
      this.context.lineWidth = canvasSettings.brushSize;
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  onMouseDown(coord, event) {
    this.context.fillStyle = canvasSettings.colorStroke;
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    if (canvasSettings.brushSize > 20) {
      this.context.lineWidth = 20;
    } else {
      this.context.lineWidth = canvasSettings.brushSize;
    }
    this.track.push({
      x: coord[0],
      y: coord[1],
      radius: this.getRandomInt(
        this.context.lineWidth,
        this.context.lineWidth + 10
      ), //Set max and min of radius
      opacity: Math.random() * 0.04, // further reduce opacity wuth a mulitplier
    });
  }

  onDragging(coord, event) {
    this.track.push({
      x: coord[0],
      y: coord[1],
      radius: this.getRandomInt(
        this.context.lineWidth,
        this.context.lineWidth + 10
      ),
      opacity: Math.random() * 0.015,
    });
    for (var i = 0; i < this.track.length; i++) {
      this.context.beginPath();
      this.context.globalAlpha = this.track[i].opacity;
      this.context.arc(
        this.track[i].x,
        this.track[i].y,
        this.track[i].radius,
        0,
        Math.PI * 2
      );
      this.context.fill();
    }
  }
  onMouseMove() {}
  onMouseUp() {
    this.track.length = 0;
    this.context.globalAlpha = 1;
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
}
