console.log('test');
//Canvas builder, resizer and conditions for responsivity
$(document).ready(function(){
  const viewportHeight = $(window).height();
  const viewportWidth = $(window).width();
  if (viewportWidth < 1008) {
    $('.canvas').each(function(){ 
        var oldHeight = $(this).attr("height"); // Get current height
        var newHeight = oldHeight.replace("500px", `${viewportHeight * 0.7}`); // Create new height
        $(this).attr("height", newHeight); // Set height value
        var oldWidth = $(this).attr("width"); // Get current width
        var newWidth = oldWidth.replace("800px", `${viewportWidth * 0.99}`); // Create new width
        $(this).attr("width", newWidth); // Set width value
    });
  }
  else if (viewportWidth > 1007) {
    $("#divider").replaceWith(
      `<div class="col-12" id='divider'>
      <div class="col-2">
        <div class="row">
          <div class="row" id="logo">
            <h1 style="font-size: 2.5rem;">Paper Canvas</h1>
          </div>
        </div>
        <div id="settings" class="row">
          <div classid="sizeMenu">
            <p style="font-weight: bold;">Size</p>
            <div class="showSize">
              <div class="sizeImage"></div>
            </div>
            <div class="sizeSlider"><input type="range" min="1" max="51" value="5" step="2" class="slider" id="brushSize">
            </div>
          </div>
          <div id="colorPalette">
            <table class="colorPicker">
              <tr>
                <th>
                  <p>Stroke</p>
                </th>
                <th>
                  <input type="button" class="jscolor colorButton" alpha="1" value="#000000" onchange="canvasSettings.changeStroke(this.jscolor)" id="colorStroke"></input>
                </th>
              </tr>
              <tr>
                <th>
                  <p>Fill</p>
                </th>
                <th>
                  <input type="button" class="jscolor colorButton" alpha="1" value="#ffffff" onchange="canvasSettings.changeFill(this.jscolor)" id="colorFill"></input>
                </th>
              </tr>
          </table>
          </div>
        </div>
      <div id="buttons">
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-secondary" id="drawing-line" title="Pen (Free Draw)">
            <img class="icon-img" src="./assets/images/pen.svg"/>
          </button>
          <button type="button" class="btn btn-secondary" id="drawing-rectangle" title="Rectangle">
            <img class="icon-img" src="./assets/images/rectangle.svg"/>
          </button>
          <button type="button" class="btn btn-secondary" id="drawing-square" title="Square">
            <img class="icon-img" src="./assets/images/square.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-secondary" id="drawing-straightline" title="Straight Line">
            <img class="icon-img" src="./assets/images/line.svg"/>
          </button>
          <button type="button" class="btn btn-secondary" id="drawing-curve" title="Curve">
            <img class="icon-img" src="./assets/images/curve.svg"/>
          </button>
          <button type="button" class="btn btn-secondary" id="drawing-furline" title="Jointed Line">
            <img class="icon-img" src="./assets/images/jointed-line.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-secondary" id="drawing-ellipse" title="Oval">
            <img class="icon-img" src="./assets/images/oval.svg"/>
          </button>
          <button type="button" class="btn btn-secondary" id="drawing-circle" title="Circle">
            <img class="icon-img" src="./assets/images/circle.svg"/>
          </button>
          <button type="button" class="btn btn-secondary" id="drawing-bubbles" title="Bubbles">
            <img class="icon-img" src="./assets/images/bubbles.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-secondary" id="drawing-polygon" title="Polygon">
            <img class="icon-img" src="./assets/images/polygon.svg"/>
          </button>
          <button type="button" class="btn btn-secondary" id="drawing-shadowline" title="Spray Paint">
            <img class="icon-img" src="./assets/images/spray.svg"/>
          </button>
          <button type="button" class="btn btn-secondary" id="drawing-textbox" title="Text">
            <img class="icon-img" src="./assets/images/text.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-dark" id="drawing-eraser" title="Eraser">
            <img class="icon-img" src="./assets/images/rubber.svg"/>
          </button>
          <button type="button" class="btn btn-dark" id="save-image" title="Save & Download">
            <img class="icon-img" src="./assets/images/save.svg"/>
          </button>
          <button type="button" class="btn btn-danger" id="drawing-clear" title="Clear All">
            <img class="icon-img" src="./assets/images/trash.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-success">
            B
          </button>
          <button type="button" id="redo" class="btn btn-dark" title="Redo">
            <img class="icon-img" src="./assets/images/redo.svg"/>
          </button>
          <button type="button" id="undo" class="btn btn-warning" title="Undo">
            <img class="icon-img" src="./assets/images/undo.svg"/>
          </button>
        </div>
      </div>
    </div>
    <div class="col-10" id="canvas-container">
        <canvas
          id="canvas-real"
          class="canvas"
          height="500px"
          width="800px"
        ></canvas>
        <canvas
          id="canvas-draft"
          class="canvas"
          height="500px"
          width="800px"
        ></canvas>
        <input id="textInput" name="inputField" value=""></input>
      </div>
    </div>`
    );
    $('.canvas').each(function(){ 
        var oldHeight = $(this).attr("height"); // Get current height
        var newHeight = oldHeight.replace("500px", `${viewportHeight * 0.95}`); // Create new height
        $(this).attr("height", newHeight); // Set height value
        var oldWidth = $(this).attr("width"); // Get current width
        var newWidth = oldWidth.replace("800px", `${viewportWidth * 0.78}`); // Create new width
        $(this).attr("width", newWidth); // Set width value
    });
  }
});
$(window).on("resize", function(){
  const viewportHeight = $(window).height();
  const viewportWidth = $(window).width();
  if (viewportWidth < 1008) {
        $('.canvas').each(function(){ 
            var oldHeight = $(this).attr("height"); // Get current height
            var newHeight = oldHeight.replace("500px", `${viewportHeight * 0.7}`); // Create new height
            $(this).attr("height", newHeight); // Set height value
            var oldWidth = $(this).attr("width"); // Get current width
            var newWidth = oldWidth.replace("800px", `${viewportWidth * 0.99}`); // Create new width
            $(this).attr("width", newWidth); // Set width value
        });
  }
  else if (viewportWidth > 1007) {
    $("#divider").replaceWith(
        `<div class="col-12" id='divider'>
        <div class="col-2">
          <div class="row">
            <div class="row" id="logo">
              <h1 style="font-size: 2.5rem;">Paper Canvas</h1>
            </div>
          </div>
          <div id="settings" class="row">
            <div classid="sizeMenu">
              <p style="font-weight: bold;">Size</p>
              <div class="showSize">
                <div class="sizeImage"></div>
              </div>
              <div class="sizeSlider"><input type="range" min="1" max="51" value="5" step="2" class="slider" id="brushSize">
              </div>
            </div>
            <div id="colorPalette">
              <table class="colorPicker">
                <tr>
                  <th>
                    <p>Stroke</p>
                  </th>
                  <th>
                    <input type="button" class="jscolor colorButton" alpha="1" value="#000000" onchange="canvasSettings.changeStroke(this.jscolor)" id="colorStroke"></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p>Fill</p>
                  </th>
                  <th>
                    <input type="button" class="jscolor colorButton" alpha="1" value="#ffffff" onchange="canvasSettings.changeFill(this.jscolor)" id="colorFill"></input>
                  </th>
                </tr>
            </table>
            </div>
          </div>
        <div id="buttons">
          <div class="row" id="buttonrow">
            <button type="button" class="btn btn-secondary" id="drawing-line" title="Pen (Free Draw)">
              <img class="icon-img" src="./assets/images/pen.svg"/>
            </button>
            <button type="button" class="btn btn-secondary" id="drawing-rectangle" title="Rectangle">
              <img class="icon-img" src="./assets/images/rectangle.svg"/>
            </button>
            <button type="button" class="btn btn-secondary" id="drawing-square" title="Square">
              <img class="icon-img" src="./assets/images/square.svg"/>
            </button>
          </div>
          <div class="row" id="buttonrow">
            <button type="button" class="btn btn-secondary" id="drawing-straightline" title="Straight Line">
              <img class="icon-img" src="./assets/images/line.svg"/>
            </button>
            <button type="button" class="btn btn-secondary" id="drawing-curve" title="Curve">
              <img class="icon-img" src="./assets/images/curve.svg"/>
            </button>
            <button type="button" class="btn btn-secondary" id="drawing-furline" title="Jointed Line">
              <img class="icon-img" src="./assets/images/jointed-line.svg"/>
            </button>
          </div>
          <div class="row" id="buttonrow">
            <button type="button" class="btn btn-secondary" id="drawing-ellipse" title="Oval">
              <img class="icon-img" src="./assets/images/oval.svg"/>
            </button>
            <button type="button" class="btn btn-secondary" id="drawing-circle" title="Circle">
              <img class="icon-img" src="./assets/images/circle.svg"/>
            </button>
            <button type="button" class="btn btn-secondary" id="drawing-bubbles" title="Bubbles">
              <img class="icon-img" src="./assets/images/bubbles.svg"/>
            </button>
          </div>
          <div class="row" id="buttonrow">
            <button type="button" class="btn btn-secondary" id="drawing-polygon" title="Polygon">
              <img class="icon-img" src="./assets/images/polygon.svg"/>
            </button>
            <button type="button" class="btn btn-secondary" id="drawing-shadowline" title="Spray Paint">
              <img class="icon-img" src="./assets/images/spray.svg"/>
            </button>
            <button type="button" class="btn btn-secondary" id="drawing-textbox" title="Text">
              <img class="icon-img" src="./assets/images/text.svg"/>
            </button>
          </div>
          <div class="row" id="buttonrow">
            <button type="button" class="btn btn-dark" id="drawing-eraser" title="Eraser">
              <img class="icon-img" src="./assets/images/rubber.svg"/>
            </button>
            <button type="button" class="btn btn-dark" id="save-image" title="Save & Download">
              <img class="icon-img" src="./assets/images/save.svg"/>
            </button>
            <button type="button" class="btn btn-danger" id="drawing-clear" title="Clear All">
              <img class="icon-img" src="./assets/images/trash.svg"/>
            </button>
          </div>
          <div class="row" id="buttonrow">
            <button type="button" class="btn btn-success">
              B
            </button>
            <button type="button" id="redo" class="btn btn-dark" title="Redo">
              <img class="icon-img" src="./assets/images/redo.svg"/>
            </button>
            <button type="button" id="undo" class="btn btn-warning" title="Undo">
              <img class="icon-img" src="./assets/images/undo.svg"/>
            </button>
          </div>
        </div>
      </div>
      <div class="col-10" id="canvas-container">
          <canvas
            id="canvas-real"
            class="canvas"
            height="500px"
            width="800px"
          ></canvas>
          <canvas
            id="canvas-draft"
            class="canvas"
            height="500px"
            width="800px"
          ></canvas>
          <input id="textInput" name="inputField" value=""></input>
        </div>
      </div>`
    );
  }
  $('.canvas').each(function(){ 
      var oldHeight = $(this).attr("height"); // Get current height
      var newHeight = oldHeight.replace(oldHeight, `${viewportHeight * 0.95}`); // Create new height
      $(this).attr("height", newHeight); // Set height value
      var oldWidth = $(this).attr("width"); // Get current width
      var newWidth = oldWidth.replace(oldWidth, `${viewportWidth * 0.78}`); // Create new width
      $(this).attr("width", newWidth); // Set width value
  });
});
