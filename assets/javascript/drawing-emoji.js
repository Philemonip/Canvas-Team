class DrawingEmoji extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord) {
    //syntax - context.drawImage(img,coord x, coord y, width, height);
    this.contextReal.drawImage(
      styleGuide.emojiSource,
      coord[0] - styleGuide.emojiLength / 2,
      coord[1] - styleGuide.emojiLength / 2,
      styleGuide.emojiLength,
      styleGuide.emojiLength
    );
    console.log(styleGuide.emojiSource);
  }

  onMouseMove(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.drawImage(
      styleGuide.emojiSource,
      coord[0] - styleGuide.emojiLength / 2,
      coord[1] - styleGuide.emojiLength / 2,
      styleGuide.emojiLength,
      styleGuide.emojiLength
    );
  }

  onDragging(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
  onMouseUp() {
    this.onFinish();
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
