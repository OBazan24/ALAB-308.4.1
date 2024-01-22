let data =
  "ID|,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// Variables created to hold cell data and placeholders
let placeholder = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

// Loop for each character
for (char of data) {
  // If-else statements to determine what to do with each char
  if (char === "") {
    if (!cell1) {
      cell1 = placeholder;
      placeholder = "";
    } else if (!cell2) {
      cell2 = placeholder;
      placeholder = "";
    } else {
      cell3 = placeholder;
      placeholder = "";
    }
  } else if (char === "\n") {
    cell4 = placeholder;
    placeholder = "";
    //console.log(cell1, cell2, cell3, cell4);
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    placeholder += data;
  }
}

console.log(data);

// Part 2: Expanding Functionality
const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split CSV into rows
const rows = csvData.split("\n");

// Extract headings
const headings = rows[0].split(",");
const numColumns = headings.length;

// Store data in a two-dimensional array
const parsedData = [];

// Populate the array with rows and columns
for (let i = 0; i < rows.length; i++) {
  const values = rows[i].split(",");
  const row = [];

  for (let j = 0; j < numColumns; j++) {
    row.push(values[j]);
  }

  parsedData.push(row);
}

const valueInSecondRowThirdColumn = parsedData[1][2];

console.log(parsedData);
