// class DrawingTextbox extends PaintFunction {
//   constructor(contextReal, contextDraft) {
//     super();
//     this.contextReal = contextReal;
//     this.contextDraft = contextDraft;
//     this.fontWeight = 600; //font weight
//     this.fontSize = 40; //font size
//     this.fontStyle = "Arial"; //font-family
//     this.fillStyle = "orange"; //font color
//     this.strokeStyle = "orange";
//     this.textX = [];
//     this.textY = [];
//   }

//   onMouseDown(coord, event) {
//     //Text Properties
//     this.contextReal.font = `${this.fontSize}px ${this.fontStyle}`;

//     // `${this.fontWeight} ${canvasSettings.textSize}px ${canvasSettings.textFont}`; //check Canvas Setttings to ensure syntax match
//     this.contextReal.fillStyle = this.fillStyle;
//     // this.contextReal.fillStyle = canvasSettings.colorStroke; //check Canvas Setttings to ensure syntax match

//     this.textX.push(coord[0]);
//     this.textY.push(coord[1]);

//     //Make the input box appear on the clicked area
//     this.fontStartY = this.textY[0] - this.fontSize;
//     $("#textInput").css({
//       display: "block",
//       transform:
//         "translateY(" + coord[1] + "px) translateX(" + coord[0] + "px)",
//       "font-size": this.fontSize + "px",
//       //   "font-size": canvasSettings.textSize + "px",
//       color: this.strokeStyle,
//       // color: canvasSettings.colorStroke,

//       //   "font-family": canvasSettings.textFont,
//       "font-weight": this.fontWeight,
//       padding: "0",
//     });
//     //If user click outside the input box, text will be printed on the Canvas
//     if (this.textX.length > 1 && event.target.id != $("#textInput")) {
//       this.outputText(this.contextReal);
//     }
//     $(document).keydown((e) => {
//       if (e.key == "Enter") {
//         this.outputText(this.contextReal);
//       }
//     });
//   }

//   //Print the text on the canvas
//   outputText(ctx) {
//     let inputText = $("#textInput").val();
//     this.contextReal.fillText(
//       inputText,
//       this.textX[0],
//       this.textY[0] + parseInt(this.fontSize)
//       //   this.textY[0] + parseInt(canvasSettings.textSize)
//     );
//     //contextReal.stroke();
//     $("#textInput").css({
//       display: "none",
//       transform: "translateY(0) translateX(0)",
//     });
//     $("#textInput").val("");
//     //$('body').find('input[type=text],input').val('');
//     this.textX = [];
//     this.textY = [];
//   }
// }




class DrawingTextbox extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }


  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];


    pixelStack = [[this.origX, this.origY]];

    while (pixelStack.length) {
      var newPos, x, y, pixelPos, reachLeft, reachRight;
      newPos = pixelStack.pop();
      x = newPos[0];
      y = newPos[1];

      pixelPos = (y * canvasWidth + x) * 4;
      while (y-- >= drawingBoundTop && matchStartColor(pixelPos)) {
        pixelPos -= canvasWidth * 4;
      }
      pixelPos += canvasWidth * 4;
      ++y;
      reachLeft = false;
      reachRight = false;
      while (y++ < canvasHeight - 1 && matchStartColor(pixelPos)) {
        colorPixel(pixelPos);

        if (x > 0) {
          if (matchStartColor(pixelPos - 4)) {
            if (!reachLeft) {
              pixelStack.push([x - 1, y]);
              reachLeft = true;
            }
          }
          else if (reachLeft) {
            reachLeft = false;
          }
        }

        if (x < canvasWidth - 1) {
          if (matchStartColor(pixelPos + 4)) {
            if (!reachRight) {
              pixelStack.push([x + 1, y]);
              reachRight = true;
            }
          }
          else if (reachRight) {
            reachRight = false;
          }
        }

        pixelPos += canvasWidth * 4;
      }
    }
    context.putImageData(colorLayer, 0, 0);

    function matchStartColor(pixelPos) {
      var r = colorLayer.data[pixelPos];
      var g = colorLayer.data[pixelPos + 1];
      var b = colorLayer.data[pixelPos + 2];

      return (r == startR && g == startG && b == startB);
    }

    function colorPixel(pixelPos) {
      colorLayer.data[pixelPos] = fillColorR;
      colorLayer.data[pixelPos + 1] = fillColorG;
      colorLayer.data[pixelPos + 2] = fillColorB;
      colorLayer.data[pixelPos + 3] = 255;
    }


  }

}

