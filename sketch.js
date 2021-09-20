let xAxisMovement = 0,
    yAxisMovement = 0

//Variable to reset the xAxis position everytime watch completes moving through one row
let xAxisResetSubtract = 0

//To generate random value for setting color for each movement
let randomColor = 0

//To render the final watches entire screen with red color
let xAxisIncrement = 0,
    yAxisIncrement = 0

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    setInterval(changeXAxisMovement, 100) //Re-run draw method with new values obtained from changeXAxisMovement function
}

function draw() {
    background(255, 255, 255);
    push();

    if (yAxisMovement < 600) { //yAxisMovement will be greater than 600 once watch completes entire screen movement
        fill(randomColor, randomColor, 0) //Provide random color
        rectMode(CENTER);
        stroke(0);

        //Watch dial - center keeps shifting 25 points and yAxisMovement keeps shifting every 50 points
        rect(xAxisMovement + 25 - xAxisResetSubtract, yAxisMovement + 25, 14, 14, 2);

        //Watch bands
        stroke(0);
        quad(xAxisMovement + 19 - xAxisResetSubtract, yAxisMovement + 14, xAxisMovement + 20 - xAxisResetSubtract, yAxisMovement + 2, xAxisMovement + 30 - xAxisResetSubtract, yAxisMovement + 2, xAxisMovement + 31 - xAxisResetSubtract, yAxisMovement + 14);
        quad(xAxisMovement + 19 - xAxisResetSubtract, yAxisMovement + 36, xAxisMovement + 20 - xAxisResetSubtract, yAxisMovement + 48, xAxisMovement + 30 - xAxisResetSubtract, yAxisMovement + 48, xAxisMovement + 31 - xAxisResetSubtract, yAxisMovement + 36);
    } else {
        //This will execute once watch completes all movements (entire screen)

        for (xAxisIncrement = 0; xAxisIncrement < 575; xAxisIncrement = xAxisIncrement + 25) {
            for (yAxisIncrement = 0; yAxisIncrement < 575; yAxisIncrement = yAxisIncrement + 50) {
                //Draw watch dial and band throughtout the screen
                fill(256, 0, 0)
                rectMode(CENTER);
                stroke(0);
                rect(xAxisIncrement + 25, yAxisIncrement + 25, 14, 14, 2);
                stroke(0);
                quad(xAxisIncrement + 19, yAxisIncrement + 14, xAxisIncrement + 20, yAxisIncrement + 2, xAxisIncrement + 30, yAxisIncrement + 2, xAxisIncrement + 31, yAxisIncrement + 14);
                quad(xAxisIncrement + 19, yAxisIncrement + 36, xAxisIncrement + 20, yAxisIncrement + 48, xAxisIncrement + 30, yAxisIncrement + 48, xAxisIncrement + 31, yAxisIncrement + 36);
            }
        }
    }
    pop()
}

function changeXAxisMovement() {
    xAxisMovement = xAxisMovement + 25; //Move xAxis 25 points
    if (Number.isInteger(xAxisMovement / 600)) {
        yAxisMovement = (int(xAxisMovement / 600) * 50); //Once xAxis reaches multiples of 600, increment yAxis by 50
        xAxisResetSubtract = (int(xAxisMovement / 600) * 600); //Reset the xAxis by subtracting the xAxisMovement value with multiples of 600
    }

    randomColor = random(255) //generate random value for color
}
