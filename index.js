const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter text for your logo.  (3 character limit)'
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color for the text'
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for your logo',
        choices: ['circle, triangle, square']
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color for the shape'
    }
];