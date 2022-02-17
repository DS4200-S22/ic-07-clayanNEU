# ic-07
ic-07 - Intro to D3

Link to GitHub Pages: `[insert your clickable hyperlink here]`

## Purpose

The purpose of this assignment is to start learning how to use D3.js to build custom visualizations.  

## Instructions

1. Background material to support this assignment is provided below in the Resources section.  

1. You can find a reference for what your final webpage should look like and how it should behanve in the "reference" folder. 

1. Create a GitHub Page for your repo and add the link to your GitHub Page above where you see `[insert your clickable hyperlink here]`. 

1. Clone this repo and work locally. Be sure to push the final version of your code (and any significant updates along the way) before submitting. 

1. A .css file (style.css) was included in your repo. Add this file to your index.html file as an an **external** stylesheet. All styling for your webpage should be achieved using this external stylesheet.  

1. Two JavaScript files (js/barchart.js and js/scatterplot.js) were included in your repo. Add these files to your index.html file as an **external** script files. All JavaScript code you write should be in one of these files or another .js file you create. 

1. The d3.v6 library (js/d3.v6.1.1/d3.min.js) was included in your repo. Add this file to your index.html file as an **external** script file. You will not edit the file, but you need to include it to have access to D3 functions.     

1. Begin your assignment by adding 3 div's to your index.html. Each div should be centered on the page, and have width equal to 80% of the page (this is set up in the provided css file). Please give the div's the following id's: "hard-coded-bar", "csv-bar", "csv-scatter", and the class "vis-holder".  

1. Open barchart.js. This file contains the code to build a barchart from hardcoded data inside of the "hard-coded-bar" div. The barchart includes tooltips which show the user a specific bar's values when mousedover. If you included barchart.js in your index.html file correctly, you can open index.html in your browser and see the barchart built by this provided code.

1. Notice that barchart.js includes minimal comments. Go through the code and add comments that describe what each step accomplishes. You can use D3 the references below and lecture material to help you understand the code.

1. After you have commented the provided code in barchart.js, add new code to the file. Similar to the provided code, the new code should build a barchart with tooltips inside of the "csv-bar" div. However, this code should use data from barchart.csv (provided with repo) instead of hardcoded data. Note, in order to do this you will need to start a python simple server from the directory in which your code is stored. Instructions for the simple server are provided in the section below.         

1. Next, open scatterplot.js. In this file, add code to build a scatterplot inside of the "csv-scatter" div. The scatterplot should plot the data in scatter.csv (provided with repo). When a user mousesover one of the points in the plot, a tooltip should appear that shows that points' values.    

## Python Simple Server

- In order to read data from csv files, you will need to use a python simple server. To do that follow these steps:
  - `CD` or open a terminal / command prompt window in the same folder that holds your website code.
  - Start a python simple server with one of these commands (depending on how you set python up on your machine): `python -m http.server`, `python3 -m http.server`, or `py -m http.server`. 
  - After running the command, wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`.
  - Open your web browser (Firefox or Chrome) and navigate to the URL: http://localhost:8000. This is where you will see your code rendered. 

## Resources 

**Note that there are different versions of D3 (we are using version 6), so make sure the tutorials you use are up-to-date (or you at least understand what is different about v6 versus older versions).**

* [Intro to D3 - Creative Coding for the Web](https://www.fluidencodings.com/teaching-materials/cc-for-the-web/v1/page.php?pid=svg)

* [D3 Data Joins - Creative Coding for the Web](https://www.fluidencodings.com/teaching-materials/cc-for-the-web/v1/page.php?pid=data-joins) 

* Intro to D3 in 10 basic examples: https://www.d3-graph-gallery.com/intro_d3js.html (highly recommend this resource)

* D3 Coursera by Enrico Bertini: https://www.coursera.org/learn/information-visualization-programming-d3js

* What is D3? https://d3js.org/

* Example D3 Charts: https://observablehq.com/@d3/gallery

* Interactive Data Visualization for the Web by Scott Murray: Available through Northeastern Library

* Tips and Tricks: https://leanpub.com/D3-Tips-and-Tricks/read (written for v3 but well written)


## Submission

* Be sure to push all changes to your repo and follow all instructions above. 
* For this portion of your assignment **submit a clickable URL to your GitHub repository** (not your GitHub Page).  