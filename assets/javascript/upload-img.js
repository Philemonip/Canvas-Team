$("#import-image").click(() => {
  let canvasReal = document.getElementById("canvas-real");
  let contextReal = canvasReal.getContext("2d");
  let canvasDraft = document.getElementById("canvas-draft");
  let contextDraft = canvasDraft.getContext("2d");

  // var filesToUpload = document.getElementById("import-image").files;
  // var file = filesToUpload[0];
  // var reader = new FileReader();
  // reader.onload = function (event) {
  var img = new Image();
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    contextDraft.drawImage(img, 0, 0);
    contextReal.drawImage(img, 0, 0);
  };

  img.src = URL.createObjectURL(this.files[0]);
});

// class OpenFile extends PaintFunction {
//   constructor(ctxReal, ctxDraft, img) {
//     super();
//     this.contextReal = contextReal;
//     this.contextDraft = contextDraft;
//     this.actionCount = 0;
//     this.image = img;
//     this.imageHalfWidth = img.width / 2;
//     this.imageHalfHeight = img.height / 2;
//   }
//   onMouseMove(coord) {
//     if (this.actionCount === 0) {
//       console.log("Image width " + this.image.width);
//       console.log("Image height " + this.image.height);
//       this.contextDraft.lineWidth = 5;
//       this.contextDraft.setLineDash([5, 5]);
//       this.contextDraft.strokeStyle = "rgb(0,192,255)";
//       this.contextDraft.strokeRect(
//         200,
//         100,
//         this.imageHalfWidth * 2,
//         this.imageHalfHeight * 2
//       );
//     }
//   }
//   onMouseDown(coord) {
//     this.actionCount = 1;
//     dragging = true;
//     this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
//     this.contextDraft.drawImage(
//       this.image,
//       coord[0] - this.imageHalfWidth,
//       coord[1] - this.imageHalfHeight
//     );
//   }
//   onDragging(coord) {
//     this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
//     this.contextDraft.drawImage(
//       this.image,
//       coord[0] - this.imageHalfWidth,
//       coord[1] - this.imageHalfHeight
//     );
//   }
//   onMouseUp(coord) {
//     this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
//     this.contextReal.drawImage(
//       this.image,
//       coord[0] - this.imageHalfWidth,
//       coord[1] - this.imageHalfHeight
//     );
//     $("#import").val("");
//   }
// }
