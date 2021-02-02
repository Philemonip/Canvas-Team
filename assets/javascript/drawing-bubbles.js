class DrawingBubbles extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
    this.track = [];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  onMouseDown(coord, event) {
    this.context.strokeStyle = canvasSettings.colorStroke;
    this.context.lineWidth = canvasSettings.brushSize;
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.track.push({
      x: coord[0],
      y: coord[1],
      radius: this.getRandomInt(
        this.context.lineWidth,
        this.context.lineWidth + 10
      ),
      opacity: Math.random() * 0.04, // manually added the 0.04 multiplier to reduce opacity
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
      opacity: Math.random() * 0.04,
    });
    for (var i = 0; i < this.track.length; i++) {
      this.context.beginPath();
      this.context.globalOpacity = this.track[i].opacity;
      this.context.arc(
        this.track[i].x,
        this.track[i].y,
        this.track[i].radius,
        0,
        Math.PI * 2
      );
      this.context.fill(); //this.context.stroke()for unfilled circles
    }
    //console.log(coord[0],coord[1]);
  }
  onMouseMove() {}
  onMouseUp() {
    this.track.length = 0;
    this.context.globalOpacity = 1;
    this.onFinish();
  }
  onMouseLeave() {}
  onMouseEnter() {}

  // onFinish(){
  //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount] = new Image();
  //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount].src = canvasReal.toDataURL();
  //     canvasSettings.undoObject.actionCount++;
  // }
}
