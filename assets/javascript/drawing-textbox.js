class DrawingText extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0;
    }

    onMouseUp(coord, event) {
        if (this.clickNum !== 1) {
            //Make the input box appear on the clicked area
            $("#textInput").css({
                display: "block",
                transform:
                    "translateY(" + coord[1] + ")translateX(" + coord[0] + ")",
                padding: "0",
            });





            this.origX = coord[0];
            this.origY = coord[1];

            this.contextDraft.font = "60px Arial";
            this.contextDraft.fillStyle = 'black';

            var textContent = textInput.value;
            textInput.style["z-index"] = 1;
            textInput.value = "";

            this.contextDraft.fillText(textContent, this.origX, this.origY);
            this.clickNum++;




            $(document).keyup((e) => {
                if (e.key == 'Enter') {
                    $("#textInput").css({
                        display: "none",
                        transform:
                            "translateY(" + coord[1] + "px)translateX(" + coord[0] + "px)",
                        padding: "0",
                    });

                    this.contextReal.font = "60px Arial";
                    this.contextReal.fillStyle = 'black';

                    var textContent = textInput.value;
                    textInput.style["z-index"] = 6;
                    textInput.value = "";

                    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
                    this.contextReal.fillText(
                        textContent,
                        this.origX,
                        this.origY);

                }

            });




        } else if (this.clickNum === 1) {
            $("#textInput").css({
                display: "none",
                transform:
                    "translateY(" + coord[1] + "px)translateX(" + coord[0] + "px)",
                padding: "0",
            });

            this.contextReal.font = "60px Arial";
            this.contextReal.fillStyle = 'black';

            var textContent = textInput.value;
            textInput.style["z-index"] = 6;
            textInput.value = "";

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.fillText(
                textContent,
                this.origX,
                this.origY
            );
            this.clickNum = 0;
        }
    }
    onMouseDown() { }
    onMouseMove() { }
    onMouseLeave() { }
    onMouseEnter() { }
}



