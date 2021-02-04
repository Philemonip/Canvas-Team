class DrawingTextbox extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.fontWeight = 600;
    this.fontSize = 20;
    this.fontStyle = "Arial";
    this.fillStyle = canvasSettings.colorStroke;
    this.textX = [];
    this.textY = [];
  }

  onMouseDown(coord, event) {
    //Text Properties
    this.contextReal.font = `${this.fontSize}px ${this.fontStyle}`;
    this.contextReal.fillStyle = canvasSettings.colorStroke;

    this.textX.push(coord[0]);
    this.textY.push(coord[1]);

    //Make the input box appear on the clicked area

    $("#textInput").css({
      display: "block",
      transform:
        "translateY(" + coord[1] + "px) translateX(" + coord[0] + "px)",
      "font-size": this.fontSize + "px",
      color: canvasSettings.colorStroke,
      "font-weight": this.fontWeight,
      padding: "0",
    });
    //If user click outside the input box, text will be printed on the Canvas
    if (this.textX.length > 1 && event.target.id != $("#textInput")) {
      this.outputText(this.contextReal);
    }
    $(document).keydown((e) => {
      if (e.key == "Enter") {
        this.outputText(this.contextReal);
      }
    });
  }

  //Print the text on the canvas
  outputText() {
    this.contextReal.fillStyle = canvasSettings.colorStroke;
    let inputText = $("#textInput").val();
    this.contextReal.fillText(
      inputText,
      this.textX[0],
      this.textY[0] + parseInt(this.fontSize)
    );
    $("#textInput").css({
      display: "none",
      transform: "translateY(0) translateX(0)",
    });
    $("#textInput").val("");
    this.textX = [];
    this.textY = [];
    this.onFinish();
  }
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
