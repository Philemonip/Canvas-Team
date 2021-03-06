/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/
var switcher = 0;
$(document).ready(function () {
  const viewportHeight = $(window).height();
  const viewportWidth = $(window).width();
  // if (viewportWidth < 761) {
  //   $('.canvas').each(function(){ 
  //     var oldHeight = $(this).attr("height"); // Get current height
  //     var newHeight = oldHeight.replace(oldHeight, `${viewportHeight * 0.6}`); // Create new height
  //     $(this).attr("height", newHeight); // Set height value
  //     var oldWidth = $(this).attr("width"); // Get current width
  //     var newWidth = oldWidth.replace(oldWidth, `${viewportWidth * 0.96}`); // Create new width
  //     $(this).attr("width", newWidth); // Set width value
  // });
  // }
  // else if (viewportWidth < 1008 && viewportWidth > 760) {
  //   $('.canvas').each(function(){ 
  //       var oldHeight = $(this).attr("height"); // Get current height
  //       var newHeight = oldHeight.replace(oldHeight, `${viewportHeight * 0.77}`); // Create new height
  //       $(this).attr("height", newHeight); // Set height value
  //       var oldWidth = $(this).attr("width"); // Get current width
  //       var newWidth = oldWidth.replace(oldWidth, `${viewportWidth * 0.98}`); // Create new width
  //       $(this).attr("width", newWidth); // Set width value
  //   });
  // }
  // else {
    $(".canvas").each(function () {
      var oldHeight = $(this).attr("height"); // Get current height
      var newHeight = oldHeight.replace(oldHeight, `${viewportHeight * 0.95}`); // Create new height
      $(this).attr("height", newHeight); // Set height value
      var oldWidth = $(this).attr("width"); // Get current width
      var newWidth = oldWidth.replace(oldWidth, `${viewportWidth * 0.75}`); // Create new width
      $(this).attr("width", newWidth); // Set width value
    });
  // }
});

$(window).on("resize", function () {
  const viewportHeight = $(window).height();
  const viewportWidth = $(window).width();
  // if (viewportWidth < 761) {
  //   $('.canvas').each(function(){ 
  //     var oldHeight = $(this).attr("height"); // Get current height
  //     var newHeight = oldHeight.replace(oldHeight, `${viewportHeight * 0.6}`); // Create new height
  //     $(this).attr("height", newHeight); // Set height value
  //     var oldWidth = $(this).attr("width"); // Get current width
  //     var newWidth = oldWidth.replace(oldWidth, `${viewportWidth * 0.98}`); // Create new width
  //     $(this).attr("width", newWidth); // Set width value
  // });
  // }
  // else if (viewportWidth < 1008 && viewportWidth > 760) {
  //   $('.canvas').each(function(){ 
  //       var oldHeight = $(this).attr("height"); // Get current height
  //       var newHeight = oldHeight.replace(oldHeight, `${viewportHeight * 0.7}`); // Create new height
  //       $(this).attr("height", newHeight); // Set height value
  //       var oldWidth = $(this).attr("width"); // Get current width
  //       var newWidth = oldWidth.replace(oldWidth, `${viewportWidth * 0.99}`); // Create new width
  //       $(this).attr("width", newWidth); // Set width value
  //   });
  // }
  // else {
    $(".canvas").each(function () {
      var oldHeight = $(this).attr("height"); // Get current height
      var newHeight = oldHeight.replace(oldHeight, `${viewportHeight * 0.95}`); // Create new height
      $(this).attr("height", newHeight); // Set height value
      var oldWidth = $(this).attr("width"); // Get current width
      var newWidth = oldWidth.replace(oldWidth, `${viewportWidth * 0.75}`); // Create new width
      $(this).attr("width", newWidth); // Set width value
    });
  // }
});

$("#canvas-real");

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;

// for saving image with white background
contextReal.fillStyle = "#fff)";
contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
  canvasSettings.undoObject.actionCount++;
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
  onFinish() {}
}




var canvasSettings = {
  //Default Settings
  colorStroke: $("#colorStroke").val(),
  colorFill: $("#colorFill").val(),
  brushSize: $("#brushSize").val(),
  //Setting Functions
  changeStroke: function (jscolor) {
    canvasSettings.colorStroke = "#" + jscolor;
  },
  changeFill: function (jscolor) {
    canvasSettings.colorFill = "#" + jscolor;
  },

  undoObject: {
    actionCount: 0,
    states: [],
    savePoint: 0,
    undoAction: function () {
      if (canvasSettings.undoObject.actionCount > 1) {
        canvasSettings.undoObject.actionCount--;
        canvasSettings.undoObject.savePoint =
          canvasSettings.undoObject.actionCount;
        contextReal.drawImage(
          canvasSettings.undoObject.states[
            canvasSettings.undoObject.actionCount - 1
          ],
          0,
          0
        );
      }
    },
    redoAction: function () {
      if (
        canvasSettings.undoObject.actionCount ==
          canvasSettings.undoObject.savePoint &&
        canvasSettings.undoObject.actionCount <
          canvasSettings.undoObject.states.length
      ) {
        canvasSettings.undoObject.actionCount++;
        canvasSettings.undoObject.savePoint++;
        contextReal.drawImage(
          canvasSettings.undoObject.states[
            canvasSettings.undoObject.actionCount - 1
          ],
          0,
          0
        );
      } else if (
        canvasSettings.undoObject.actionCount !=
        canvasSettings.undoObject.savePoint
      ) {
        canvasSettings.undoObject.states.splice(
          canvasSettings.undoObject.actionCount
        );
        canvasSettings.undoObject.savePoint =
          canvasSettings.undoObject.actionCount;
      }
    },
  },
};

//Change brush size
$("#brushSize")[0].oninput = function () {
  canvasSettings.brushSize = this.value;
  //Change visual
  $(".sizeImage").css("width", this.value);
  $(".sizeImage").css("height", this.value);
};

//Emoji Styleguide

let styleGuide = {
  emojiSource: "",
  emojiLength: 10 + 2.8 * (canvasSettings.brushSize - 1),
};

