/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your bar charts in this file

// Set dimensions and margins for plots
const width = 900;
const height = 450;
const margin = { left: 50, right: 50, bottom: 50, top: 50 };
const yTooltipOffset = 15;

// selects hard-coded-bar div and adds new d3 svg
const svg1 = d3
  .select("#hard-coded-bar")
  .append("svg")
  .attr("width", width - margin.left - margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

// Hardcoded barchart data
const data1 = [
  { name: "A", score: 92 },
  { name: "B", score: 15 },
  { name: "C", score: 67 },
  { name: "D", score: 89 },
  { name: "E", score: 53 },
  { name: "F", score: 91 },
  { name: "G", score: 18 },
];

let data2 = d3.csv("/data/barchart.csv");

/*

  Axes

*/

// finds the max score from the data
let maxY1 = d3.max(data2, function (d) {
  return d.score;
});

// creates scale, Sets the Y-axes from 0 to the max score, data to pixel value
let yScale1 = d3
  .scaleLinear()
  .domain([0, maxY1])
  .range([height - margin.bottom, margin.top]); //corresponding value i want in pixel

// creates scale, Sets the X-axes to range of points, different categories
let xScale1 = d3
  .scaleBand()
  .domain(d3.range(data1.length))
  .range([margin.left, width - margin.right])
  .padding(0.1);

// adds y axis to svg
svg1
  .append("g") // generic svg
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(yScale1))
  .attr("font-size", "20px");

// adds x axis to svg
svg1
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(xScale1).tickFormat((i) => data2[i].name))
  .attr("font-size", "20px");

/* 

  Tooltip Set-up  

*/

// selecting a div and appending new div
const tooltip1 = d3
  .select("#hard-coded-bar")
  .append("div")
  .attr("id", "tooltip1")
  .style("opacity", 0)
  .attr("class", "tooltip");

// takes tooltip and sets the innnerhtml to be what we are hovering over
const mouseover1 = function (event, d) {
  tooltip1
    .html("Name: " + d.name + "<br> Score: " + d.score + "<br>")
    .style("opacity", 1);
};

// tooltip next to mouse
const mousemove1 = function (event, d) {
  tooltip1
    .style("left", event.x + "px")
    .style("top", event.y + yTooltipOffset + "px");
};

// when mouse leaves make it disappear
const mouseleave1 = function (event, d) {
  tooltip1.style("opacity", 0);
};

/* 

  Bars 

*/

// select anything with class bar(empty selection), finds data,
svg1
  .selectAll(".bar")
  .data(data2)
  .enter() // placeholder
  .append("rect") // apprends for each row in data1
  .attr("class", "bar") // add attribute class bar
  .attr("x", (d, i) => xScale1(i)) //setting x pos for rectangles
  .attr("y", (d) => yScale1(d.score)) // setting y pos for rect, mapping score val to pixel val
  .attr("height", (d) => height - margin.bottom - yScale1(d.score)) // set height and width
  .attr("width", xScale1.bandwidth()) // do math for thickness of bars
  .on("mouseover", mouseover1) // add event lis to bar and link it to
  .on("mousemove", mousemove1)
  .on("mouseleave", mouseleave1);
