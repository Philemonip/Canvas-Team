// mobile     -  760
// tablet 761 - 1007
// normal 1008 -

//Canvas builder, resizer and conditions for responsivity
$(document).ready(function(){
  const viewportHeight = $(window).height();
  const viewportWidth = $(window).width();
  if (viewportWidth < 761) {
    $("#divider").replaceWith(
      `<div id='divider' style=" height: 100vh; width: 100vw; display:flex; flex-direction: column;">
      <div style=" height: 38vh; width: 100vw; display:flex">
        <div style=" width: 40%; display:flex; flex-direction: column;">
          <div style=" width: 100%; ">
            <h1 style="font-size: 30px">Paper Canvas</h1>
          </div>
          <div style=" width: 100%; height: 100%; display:flex; flex-direction: row;">
            <div id="sizeMenu" style=" display: flex; flex-direction: column; text-align: center; align-items: center; justify-content: space-around;">
              <p>Size</p>
              <div class="showSize"><div class="sizeImage"></div></div>
              <div class="sizeSlider"><input type="range" min="1" max="51" value="5" step="2" class="slider" id="brushSize"></div>
            </div>
            <div id="colorPalette" style=" height:100%; display: flex; flex-direction: column; justify-content: space-evenly;">
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div>
                  <p>Stroke</p>
                </div>
                <div>
                <input type="button" class="jscolor colorButton" value="#000000" onchange="canvasSettings.changeStroke(this.jscolor)" id="colorStroke"></input>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center;">
                <div>
                  <p>Fill</p>
                </div>
                <div>
                  <input type="button" class="jscolor colorButton" value="#ffffff" onchange="canvasSettings.changeFill(this.jscolor)" id="colorFill"></input>
                </div>  
              </div>
            </div>
          </div>
        </div>
        <div style=" display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%;">
          <div style="">
            <button type="button" class="btn btn-secondary function-btn" id="drawing-line" title="Pen (Free Draw)">
              <img class="icon-img" src="./assets/images/pen.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-rectangle" title="Rectangle">
              <img class="icon-img" src="./assets/images/rectangle.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-square" title="Square">
              <img class="icon-img" src="./assets/images/square.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-straightline" title="Straight Line">
              <img class="icon-img" src="./assets/images/line.svg"/>
            </button>
          </div>
          <div style="">
            <button type="button" class="btn btn-secondary function-btn" id="drawing-curve" title="Curve">
              <img class="icon-img" src="./assets/images/curve.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-furline" title="Jointed Line">
              <img class="icon-img" src="./assets/images/jointed-line.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-ellipse" title="Oval">
              <img class="icon-img" src="./assets/images/oval.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-circle" title="Circle">
              <img class="icon-img" src="./assets/images/circle.svg"/>
            </button>
          </div>
          <div style="">
            <button type="button" class="btn btn-secondary function-btn" id="drawing-bubbles" title="Bubbles">
              <img class="icon-img" src="./assets/images/bubbles.svg"/>
            </button> 
            <button type="button" class="btn btn-secondary function-btn" id="drawing-polygon" title="Polygon">
              <img class="icon-img" src="./assets/images/polygon.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-shadowline" title="Spray Paint">
              <img class="icon-img" src="./assets/images/spray.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-textbox" title="Text">
              <img class="icon-img" src="./assets/images/text.svg"/>
            </button>
          </div>
          <div style="">
            <button type="button" class="btn btn-dark function-btn" id="drawing-eraser" title="Eraser">
              <img class="icon-img" src="./assets/images/rubber.svg"/>
            </button>
            <button type="button" class="btn btn-dark function-btn" id="save-image" title="Save">
              <img class="icon-img" src="./assets/images/save.svg"/>
            </button>
            <button type="button" id="redo" class="btn btn-dark function-btn" title="Redo">
              <img class="icon-img" src="./assets/images/redo.svg"/>
            </button>
            <button type="button" id="undo" class="btn btn-warning function-btn" title="Undo">
              <img class="icon-img" src="./assets/images/undo.svg"/>
            </button>
          </div>
          <div style="">
            <button type="button" class="btn btn-danger function-btn" id="drawing-clear" title="Clear All">
              <img class="icon-img" src="./assets/images/trash.svg"/>
            </button>
          </div>
      </div>
      
      </div>
      <div style="margin: 0 !important; height: 62vh; width: 100vw;">
        <div class="col-12" id="canvas-container">
          <canvas
            id="canvas-real"
            class="canvas"
            height="50px"
            width="50px"
          ></canvas>
          <canvas
            id="canvas-draft"
            class="canvas"
            height="50px"
            width="50px"
          ></canvas>
        </div>
      </div>
    </div>`
    );
  }
  else if (viewportWidth > 760 && viewportWidth < 1008) {
    $("#divider").replaceWith(
        `<div id='divider' style=" height: 100vh; width: 100vw; display:flex; flex-direction: column;">
        <div style=" height: 20vh; width: 100vw; display:flex">
          <div style=" width: 50%; display:flex; flex-direction: column;">
            <div style=" width: 100%; ">
              <h1 style="font-size: 30px">Paper Canvas</h1>
            </div>
            <div style=" width: 100%; height: 100%; display:flex; flex-direction: row;">
              <div id="sizeMenu" style=" padding: 10px; display: flex; flex-direction: row;  align-items: baseline; justify-content: space-around;">
                <p style="margin-right: 5px; align-self: center;">Size</p>
                <div class="showSize"><div class="sizeImage"></div></div>
                <div style="margin-left: 5px; align-self: center;" class="sizeSlider"><input type="range" min="1" max="51" value="5" step="2" class="slider" id="brushSize"></div>
              </div>
              <div id="colorPalette" style=" height:100%; display: flex; flex-direction: row; justify-content: space-evenly;">
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <div>
                    <p>Stroke</p>
                  </div>
                  <div>
                  <input type="button" class="jscolor colorButton" value="#000000" onchange="canvasSettings.changeStroke(this.jscolor)" id="colorStroke"></input>
                  </div>
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center;">
                  <div>
                    <p>Fill</p>
                  </div>
                  <div>
                    <input type="button" class="jscolor colorButton" value="#ffffff" onchange="canvasSettings.changeFill(this.jscolor)" id="colorFill"></input>
                  </div>  
                </div>
              </div>
            </div>
          </div>
          <div style=" display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%;">
            <div style="">
                <button type="button" class="btn btn-secondary function-btn" id="drawing-line" title="Pen (Free Draw)">
                    <img class="icon-img" src="./assets/images/pen.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-rectangle" title="Rectangle">
                    <img class="icon-img" src="./assets/images/rectangle.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-square" title="Square">
                    <img class="icon-img" src="./assets/images/square.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-straightline" title="Straight Line">
                    <img class="icon-img" src="./assets/images/line.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-curve" title="Curve">
                    <img class="icon-img" src="./assets/images/curve.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-furline" title="Jointed Line">
                    <img class="icon-img" src="./assets/images/jointed-line.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-ellipse" title="Oval">
                    <img class="icon-img" src="./assets/images/oval.svg"/>
                  </button>
                  <button type="button" id="redo" class="btn btn-dark function-btn" title="Redo">
                    <img class="icon-img" src="./assets/images/redo.svg"/>
                  </button>
                  <button type="button" id="undo" class="btn btn-warning function-btn" title="Undo">
                    <img class="icon-img" src="./assets/images/undo.svg"/>
                  </button>
                   
            </div>
            <div style="">
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-polygon" title="Polygon">
                    <img class="icon-img" src="./assets/images/polygon.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-shadowline" title="Spray Paint">
                    <img class="icon-img" src="./assets/images/spray.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-textbox" title="Text">
                    <img class="icon-img" src="./assets/images/text.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-circle" title="Circle">
                    <img class="icon-img" src="./assets/images/circle.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-bubbles" title="Bubbles">
                    <img class="icon-img" src="./assets/images/bubbles.svg"/>
                  </button>  
                  <button type="button" class="btn btn-dark function-btn" id="drawing-eraser" title="Eraser">
                    <img class="icon-img" src="./assets/images/rubber.svg"/>
                  </button>
                  <button type="button" class="btn btn-dark function-btn" id="save-image" title="Save">
                    <img class="icon-img" src="./assets/images/save.svg"/>
                  </button>
                     <button type="button" class="btn btn-danger function-btn" id="drawing-clear" title="Clear All">
                <img class="icon-img" src="./assets/images/trash.svg"/>
              </button>
            </div>
        </div>
        
        </div>
        <div style="margin: 0 !important; height: 80vh; width: 100vw;">
            <div class="col-12" id="canvas-container">
                <canvas
                  id="canvas-real"
                  class="canvas"
                  height="50px"
                  width="50px"
                ></canvas>
                <canvas
                  id="canvas-draft"
                  class="canvas"
                  height="50px"
                  width="50px"
                ></canvas>
              </div>
        </div>
      </div>`
    );
  }
});
$(window).on("resize", function(){
  const viewportHeight = $(window).height();
  const viewportWidth = $(window).width();
  if (viewportWidth < 761) {
    $("#divider").replaceWith(
      `<div id='divider' style=" height: 100vh; width: 100vw; display:flex; flex-direction: column;">
      <div style=" height: 38vh; width: 100vw; display:flex">
        <div style=" width: 40%; display:flex; flex-direction: column;">
          <div style=" width: 100%; ">
            <h1 style="font-size: 30px">Paper Canvas</h1>
          </div>
          <div style=" width: 100%; height: 100%; display:flex; flex-direction: row;">
            <div id="sizeMenu" style=" display: flex; flex-direction: column; text-align: center; align-items: center; justify-content: space-around;">
              <p>Size</p>
              <div class="showSize"><div class="sizeImage"></div></div>
              <div class="sizeSlider"><input type="range" min="1" max="51" value="5" step="2" class="slider" id="brushSize"></div>
            </div>
            <div id="colorPalette" style=" height:100%; display: flex; flex-direction: column; justify-content: space-evenly;">
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div>
                  <p>Stroke</p>
                </div>
                <div>
                <input type="button" class="jscolor colorButton" value="#000000" onchange="canvasSettings.changeStroke(this.jscolor)" id="colorStroke"></input>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center;">
                <div>
                  <p>Fill</p>
                </div>
                <div>
                  <input type="button" class="jscolor colorButton" value="#ffffff" onchange="canvasSettings.changeFill(this.jscolor)" id="colorFill"></input>
                </div>  
              </div>
            </div>
          </div>
        </div>
        <div style=" display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%;">
          <div style="">
            <button type="button" class="btn btn-secondary function-btn" id="drawing-line" title="Pen (Free Draw)">
              <img class="icon-img" src="./assets/images/pen.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-rectangle" title="Rectangle">
              <img class="icon-img" src="./assets/images/rectangle.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-square" title="Square">
              <img class="icon-img" src="./assets/images/square.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-straightline" title="Straight Line">
              <img class="icon-img" src="./assets/images/line.svg"/>
            </button>
          </div>
          <div style="">
            <button type="button" class="btn btn-secondary function-btn" id="drawing-curve" title="Curve">
              <img class="icon-img" src="./assets/images/curve.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-furline" title="Jointed Line">
              <img class="icon-img" src="./assets/images/jointed-line.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-ellipse" title="Oval">
              <img class="icon-img" src="./assets/images/oval.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-circle" title="Circle">
              <img class="icon-img" src="./assets/images/circle.svg"/>
            </button>
          </div>
          <div style="">
            <button type="button" class="btn btn-secondary function-btn" id="drawing-bubbles" title="Bubbles">
              <img class="icon-img" src="./assets/images/bubbles.svg"/>
            </button> 
            <button type="button" class="btn btn-secondary function-btn" id="drawing-polygon" title="Polygon">
              <img class="icon-img" src="./assets/images/polygon.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-shadowline" title="Spray Paint">
              <img class="icon-img" src="./assets/images/spray.svg"/>
            </button>
            <button type="button" class="btn btn-secondary function-btn" id="drawing-textbox" title="Text">
              <img class="icon-img" src="./assets/images/text.svg"/>
            </button>
          </div>
          <div style="">
            <button type="button" class="btn btn-dark function-btn" id="drawing-eraser" title="Eraser">
              <img class="icon-img" src="./assets/images/rubber.svg"/>
            </button>
            <button type="button" class="btn btn-dark function-btn" id="save-image" title="Save">
              <img class="icon-img" src="./assets/images/save.svg"/>
            </button>
            <button type="button" id="redo" class="btn btn-dark function-btn" title="Redo">
              <img class="icon-img" src="./assets/images/redo.svg"/>
            </button>
            <button type="button" id="undo" class="btn btn-warning function-btn" title="Undo">
              <img class="icon-img" src="./assets/images/undo.svg"/>
            </button>
          </div>
          <div style="">
            <button type="button" class="btn btn-danger function-btn" id="drawing-clear" title="Clear All">
              <img class="icon-img" src="./assets/images/trash.svg"/>
            </button>
          </div>
      </div>
      
      </div>
      <div style="margin: 0 !important; height: 62vh; width: 100vw;">
        <div class="col-12" id="canvas-container">
          <canvas
            id="canvas-real"
            class="canvas"
            height="50px"
            width="50px"
          ></canvas>
          <canvas
            id="canvas-draft"
            class="canvas"
            height="50px"
            width="50px"
          ></canvas>
        </div>
      </div>
    </div>`
    );
  }
  else if (viewportWidth > 760 && viewportWidth < 1008) {
    $("#divider").replaceWith(
        `<div id='divider' style=" height: 100vh; width: 100vw; display:flex; flex-direction: column;">
        <div style=" height: 20vh; width: 100vw; display:flex">
          <div style=" width: 50%; display:flex; flex-direction: column;">
            <div style=" width: 100%; ">
              <h1 style="font-size: 30px">Paper Canvas</h1>
            </div>
            <div style=" width: 100%; height: 100%; display:flex; flex-direction: row;">
              <div id="sizeMenu" style=" padding: 10px; display: flex; flex-direction: row;  align-items: baseline; justify-content: space-around;">
                <p style="margin-right: 5px; align-self: center;">Size</p>
                <div class="showSize"><div class="sizeImage"></div></div>
                <div style="margin-left: 5px; align-self: center;" class="sizeSlider"><input type="range" min="1" max="51" value="5" step="2" class="slider" id="brushSize"></div>
              </div>
              <div id="colorPalette" style=" height:100%; display: flex; flex-direction: row; justify-content: space-evenly;">
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <div>
                    <p>Stroke</p>
                  </div>
                  <div>
                  <input type="button" class="jscolor colorButton" value="#000000" onchange="canvasSettings.changeStroke(this.jscolor)" id="colorStroke"></input>
                  </div>
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center;">
                  <div>
                    <p>Fill</p>
                  </div>
                  <div>
                    <input type="button" class="jscolor colorButton" value="#ffffff" onchange="canvasSettings.changeFill(this.jscolor)" id="colorFill"></input>
                  </div>  
                </div>
              </div>
            </div>
          </div>
          <div style=" display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%;">
            <div style="">
                <button type="button" class="btn btn-secondary function-btn" id="drawing-line" title="Pen (Free Draw)">
                    <img class="icon-img" src="./assets/images/pen.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-rectangle" title="Rectangle">
                    <img class="icon-img" src="./assets/images/rectangle.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-square" title="Square">
                    <img class="icon-img" src="./assets/images/square.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-straightline" title="Straight Line">
                    <img class="icon-img" src="./assets/images/line.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-curve" title="Curve">
                    <img class="icon-img" src="./assets/images/curve.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-furline" title="Jointed Line">
                    <img class="icon-img" src="./assets/images/jointed-line.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-ellipse" title="Oval">
                    <img class="icon-img" src="./assets/images/oval.svg"/>
                  </button>
                  <button type="button" id="redo" class="btn btn-dark function-btn" title="Redo">
                    <img class="icon-img" src="./assets/images/redo.svg"/>
                  </button>
                  <button type="button" id="undo" class="btn btn-warning function-btn" title="Undo">
                    <img class="icon-img" src="./assets/images/undo.svg"/>
                  </button>
                   
            </div>
            <div style="">
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-polygon" title="Polygon">
                    <img class="icon-img" src="./assets/images/polygon.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-shadowline" title="Spray Paint">
                    <img class="icon-img" src="./assets/images/spray.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-textbox" title="Text">
                    <img class="icon-img" src="./assets/images/text.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-circle" title="Circle">
                    <img class="icon-img" src="./assets/images/circle.svg"/>
                  </button>
                  <button type="button" class="btn btn-secondary function-btn" id="drawing-bubbles" title="Bubbles">
                    <img class="icon-img" src="./assets/images/bubbles.svg"/>
                  </button>  
                  <button type="button" class="btn btn-dark function-btn" id="drawing-eraser" title="Eraser">
                    <img class="icon-img" src="./assets/images/rubber.svg"/>
                  </button>
                  <button type="button" class="btn btn-dark function-btn" id="save-image" title="Save">
                    <img class="icon-img" src="./assets/images/save.svg"/>
                  </button>
                     <button type="button" class="btn btn-danger function-btn" id="drawing-clear" title="Clear All">
                <img class="icon-img" src="./assets/images/trash.svg"/>
              </button>
            </div>
        </div>
        
        </div>
        <div style="margin: 0 !important; height: 80vh; width: 100vw;">
            <div class="col-12" id="canvas-container">
                <canvas
                  id="canvas-real"
                  class="canvas"
                  height="50px"
                  width="50px"
                ></canvas>
                <canvas
                  id="canvas-draft"
                  class="canvas"
                  height="50px"
                  width="50px"
                ></canvas>
              </div>
        </div>
      </div>`
    );
  }
  else {
    $("#divider").replaceWith(
        `<div class="col-12" id="divider">
        <div class="col-2">
          <div class="row">
            <div class="row" id="logo">
              <h1>Paper Canvas</h1>
            </div>
          </div>
          <div id="settings">
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
          <button type="button" class="btn btn-secondary function-btn" id="drawing-line" title="Pen (Free Draw)">
            <img class="icon-img" src="./assets/images/pen.svg"/>
          </button>
          <button type="button" class="btn btn-secondary function-btn" id="drawing-rectangle" title="Rectangle">
            <img class="icon-img" src="./assets/images/rectangle.svg"/>
          </button>
          <button type="button" class="btn btn-secondary function-btn" id="drawing-square" title="Square">
            <img class="icon-img" src="./assets/images/square.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-secondary function-btn" id="drawing-straightline" title="Straight Line">
            <img class="icon-img" src="./assets/images/line.svg"/>
          </button>
          <button type="button" class="btn btn-secondary function-btn" id="drawing-curve" title="Curve">
            <img class="icon-img" src="./assets/images/curve.svg"/>
          </button>
          <button type="button" class="btn btn-secondary function-btn" id="drawing-furline" title="Jointed Line">
            <img class="icon-img" src="./assets/images/jointed-line.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-secondary function-btn" id="drawing-ellipse" title="Oval">
            <img class="icon-img" src="./assets/images/oval.svg"/>
          </button>
          <button type="button" class="btn btn-secondary function-btn" id="drawing-circle" title="Circle">
            <img class="icon-img" src="./assets/images/circle.svg"/>
          </button>
          <button type="button" class="btn btn-secondary function-btn" id="drawing-bubbles" title="Bubbles">
            <img class="icon-img" src="./assets/images/bubbles.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-secondary function-btn" id="drawing-polygon" title="Polygon">
            <img class="icon-img" src="./assets/images/polygon.svg"/>
          </button>
          <button type="button" class="btn btn-secondary function-btn" id="drawing-shadowline" title="Spray Paint">
            <img class="icon-img" src="./assets/images/spray.svg"/>
          </button>
          <button type="button" class="btn btn-secondary function-btn" id="drawing-textbox" title="Text">
            <img class="icon-img" src="./assets/images/text.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-dark function-btn" id="drawing-eraser" title="Eraser">
            <img class="icon-img" src="./assets/images/rubber.svg"/>
          </button>
          <button type="button" id="redo" class="btn btn-dark function-btn" title="Redo">
            <img class="icon-img" src="./assets/images/redo.svg"/>
          </button>
          <button type="button" id="undo" class="btn btn-warning function-btn" title="Undo">
            <img class="icon-img" src="./assets/images/undo.svg"/>
          </button>
        </div>
        <div class="row" id="buttonrow">
          <button type="button" class="btn btn-success" id="drawing-emoji">
            <img class="icon-img" src="./assets/images/emoji.svg"/>
          </button>
          <button type="button" class="btn btn-dark function-btn" id="save-image" title="Save">
            <img class="icon-img" src="./assets/images/save.svg"/>
          </button>
          <button type="button" class="btn btn-danger function-btn" id="drawing-clear" title="Clear All">
            <img class="icon-img" src="./assets/images/trash.svg"/>
          </button>
        </div>
        <div class="row" id="emojirow">
          <button type="button" class="emoji-square-mini" id="emoji-square-mini-1"><img class= "emoji-image" id="pic1" src="./assets/images/emojis/1.png">
          </button>
          <button type="button" class="emoji-square-mini" id="emoji-square-mini-2"><img class= "emoji-image" id="pic2" src="./assets/images/emojis/2.png">
          </button>
          <button type="button" class="emoji-square-mini" id="emoji-square-mini-3"><img class= "emoji-image" id="pic3" src="./assets/images/emojis/3.png">
          </button>
        </div>
        <div class="row" id="emoji-inside-row">
          <button type="button" class="emoji-square-mini" id="emoji-square-mini-4"><img class= "emoji-image" id="pic4" src="./assets/images/emojis/4.png">
          </button>
          <button type="button" class="emoji-square-mini" id="emoji-square-mini-5"><img class= "emoji-image" id="pic5" src="./assets/images/emojis/5.png">
          </button>
          <button type="button" class="emoji-square-mini" id="emoji-square-mini-6"><img class= "emoji-image" id="pic6" src="./assets/images/emojis/6.png">
          </button>
        </div>
        <div class="row" id="emoji-inside-row">
          <button type="button" class="emoji-square-mini" id="emoji-square-mini-7"><img class= "emoji-image" id="pic7" src="./assets/images/emojis/7.png">
          </button>
          <button type="button" class="emoji-square-mini" id="emoji-square-mini-8"><img class= "emoji-image" id="pic8" src="./assets/images/emojis/8.png">
          </button>
          <button type="button" class="emoji-square-mini" id="emoji-square-mini-9"><img class= "emoji-image" id="pic9" src="./assets/images/emojis/9.png">
          </button>
        </div>
      </div>>
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
});
