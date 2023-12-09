const inquirer = require("inquirer");
const fs = require('fs');
const {Circle, Triangle, Square} = require("./library/shapes.js");

class Svg{
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
    };

    render(){
        return  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    };

    setTextElement(text,color){
        this.textElement = `<text x="150" y="120" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`
    };

    setShapeElement(shape){
        this.shapeElement = shape.render()
    };
};

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter text for your logo. (up to 3 characters)'
    },

    {
        type: 'input',
        name: 'text-color',
        message: 'Please enter a color for the text. (keyword or hexadecimal)'
    },

    {
        type: 'list',
        name: 'shape-type',
        message: 'Please select a shape for your logo',
        choices: ['circle', 'triangle', 'square']
    },

    {
        type: 'input',
        name: 'shape-color',
        message: 'Please enter a color for the shape. (keyword or hexadecimal)'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Generated logo.svg!");
    });
};

async function init() {
	var svgString = "";
	var svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);

    //users response to "Please enter text for your logo"
	var user_text = "";
    // if, else statement to check that user inputs at least 1 character and no more than 3, when prompted for text
	if (answers.text.length > 0 && answers.text.length < 4) {
		user_text = answers.text;
	} else {
		console.log("Error! Text must be between 1 and 3 characters, Please try again.");
        return;
	}

    // users responses to "Please enter a color for the text. Please select a shape for your logo. Please enter a color for the shape."
	user_text_color = answers["text-color"];
	user_shape_color = answers["shape-color"];
	user_shape_type = answers["shape-type"];
	let user_shape;
	if (user_shape_type === "Square" || user_shape_type === "square") {
		user_shape = new Square();

	} else if (user_shape_type === "Circle" || user_shape_type === "circle") {
		user_shape = new Circle();

	} else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
		user_shape = new Triangle();

	} else {
		console.log("Invalid shape!");
	}

	// once shape is selected and initialized this applies selected color.
    user_shape.setColor(user_shape_color);

	var svg = new Svg();
	svg.setTextElement(user_text, user_text_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();
	
	writeToFile(svg_file, svgString); 
};

init()