# Challenge-10-SVG-Logo-Maker
Object-Oriented Programming Challenge

## Description

This logo maker uses Node.js to give the user a series of prompts that, once filled out, will generate their logo in the form of an SVG file.  
The file can then be opened in a live server window to be viewed, copied, saved, used, etc.  There is also a test script that tests each shape
class for a render() method that returns a string for a corresponding SVG file with a given shape color.  Inlcuded are two videos: one showing 
functionality of the logo maker and another showing Jest being used to test.

## User Story

AS a freelance web developer

I WANT to generate a simple logo for my projects

SO THAT I don't have to pay a graphic designer


## Acceptance Criteria

GIVEN a command-line application that accepts user input

WHEN I am prompted for text

THEN I can enter up to three characters

WHEN I am prompted for the text color

THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I am prompted for a shape

THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color

THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts

THEN an SVG file is created named `logo.svg`

AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser

THEN I am shown a 300x200 pixel image that matches the criteria I entered


## Instructions

  - run an npm install for any necessary dependencies
  - run node index.js to start the app.
  - answer the prompts to generate your svg logo.
  - right click that file and select "open in live server" to see the render.
  - run npm test to run the Jest test.

## Demo Vid

  Vid of SVG logo being generated and viewed in browser.

https://github.com/BenPalac1/GogoGadget-Logo/assets/139652929/c8d3f9fd-7cea-415a-9226-68c63fc8c785

  Vid of Jest test 

https://github.com/BenPalac1/GogoGadget-Logo/assets/139652929/d0489770-da91-4f3f-b15a-0bf1088449df

## Screenshots

  Image of prompts being submitted and confirmation of an SVG file being generated.

![svg logo generated](https://github.com/BenPalac1/GogoGadget-Logo/assets/139652929/7971a1e4-ef94-4fae-b7b8-9f81e1485205)

  Image of test script passing for all shape classes.

![jesttest pass](https://github.com/BenPalac1/GogoGadget-Logo/assets/139652929/396f08df-9dac-46cd-8fbd-65df012d1483)

  Image of a generated SVG logo opened in a browser.

![rendered logo](https://github.com/BenPalac1/GogoGadget-Logo/assets/139652929/23a897ea-65df-491b-b001-6e031d941ebe)


## Other Resources

  - mdn webdocs
  - google
  - chatGPT
  - Module 10 activities

