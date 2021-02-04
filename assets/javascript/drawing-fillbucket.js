class DrawingFillbucket extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
    }

    onMouseDown(coord, e) {

        console.log(this.contextReal.getImageData(coord[0], coord[1], 1, 1).data)
        console.log([coord[0], coord[1]])

        function matchColorStart(pos, startR, startG, startB, imgData) {
            let red = imgData.data[0]
            let green = imgData.data[1]
            let blue = imgData.data[2]

        }



        var clickColor = ''
        for (let i = 0; i < 3; i++) {
            clickColor += this.contextReal.getImageData(coord[0], coord[1], 1, 1).data[i]
        }
        console.log(clickColor)


        function matchColor(coord, colorStr) {

        }






        function checkColor() {
            let x = coord[0];
            let y = coord[1];

            console.log(x, y)

            let colorStack = []



            while (colorStack.length) {
                newPos = colorStack.pop()




            }

            // while (y > 0 &&) {



            // }


        }

        checkColor()


        let currfill = canvasSettings.colorFill
        console.log(currfill)
    }

}



