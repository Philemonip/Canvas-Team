class DrawingPolygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextDraft = contextDraft;
    this.contextReal = contextReal;
    this.clickNum = 0;
    this.escape = false;
    this.coorArr = [];
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.contextReal.lineWidth = canvasSettings.brushSize;
    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextDraft.shadowBlur = 0;
    this.contextReal.shadowBlur = 0;

    this.escape = false;

    if (this.clickNum === 0) {
      this.origX = coord[0];
      this.origY = coord[1];
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.coorArr.push([this.origX, this.origY]);
      console.log(this.coorArr);
    }
    dragging = true;
  }

  onMouseUp(coord, event) {
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

    if (this.clickNum === 0 && this.escape == false) {
      this.destX = coord[0];
      this.destY = coord[1];
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.drawPatternReal(this.destX, this.destY, coord[0], coord[1]);
      this.coorArr.push([this.destX, this.destY]);
      console.log(this.coorArr);

      this.clickNum = 1;
    } else if (this.clickNum === 1) {
      if (
        Math.pow(this.origX - coord[0], 2) < 700 &&
        Math.pow(this.origY - coord[1], 2) < 2000
      ) {
        dragging = false;
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        this.contextReal.lineTo(this.origX, this.origY);
        this.coorArr.push([this.origX, this.origY]);
        this.contextReal.stroke();
        console.log(this.coorArr);

        this.contextReal.beginPath();
        this.contextReal.moveTo(this.coorArr[0][0], this.coorArr[0][1]);
        for (let i = 1; i < this.coorArr.length; i++) {
          this.contextReal.lineTo(this.coorArr[i][0], this.coorArr[i][1]);
        }
        this.contextReal.fill();
        this.contextReal.stroke();

        this.coorArr = [];
        this.clickNum = 0;
        startDraw();
      } else {
        this.destX = coord[0];
        this.destY = coord[1];
        dragging = true;
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        this.drawPatternReal(this.destX, this.destY, coord[0], coord[1]);
        this.coorArr.push([this.destX, this.destY]);
      }
    }
  }

  onDragging(coord, event) {
    if (this.clickNum === 0 && this.escape == false) {
      this.drawPatternDraft(this.origX, this.origY, coord[0], coord[1]);
    } else if (this.clickNum === 1 && this.escape == false) {
      this.drawPatternDraft(this.destX, this.destY, coord[0], coord[1]);
    }
  }

  drawPatternDraft(xStart, yStart, xEnd, yEnd) {
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineCap = "round";

    this.contextDraft.closePath();
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(xStart, yStart);
    this.contextDraft.lineTo(xEnd, yEnd);
    this.contextDraft.stroke();
  }

  drawPatternReal(xStart, yStart, xEnd, yEnd) {
    this.contextReal.lineJoin = "round";
    this.contextReal.lineCap = "round";

    this.contextReal.lineTo(xStart, yStart);
    this.contextReal.stroke();
    this.contextReal.closePath();
    this.contextReal.beginPath();
    this.contextReal.moveTo(xEnd, yEnd);
  }

  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
