/*
const paintWall = function (side, color) {
    console.log("The " + side + " wall has been painted " + color);
};

paintWall("north", "blue");

// Change order of arguments when calling function:

paintWall("blue", "north");

// Change order of arguments in function definition:

const paintWall = function (color, side) {
    console.log("The " + side + " wall has been painted " + color);
};

paintWall("north", "blue");

*/

// Change both:

const paintWall = function (color, side) {
    console.log("The " + side + " wall has been painted " + color);
};

paintWall("blue", "north");