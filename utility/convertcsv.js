const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './src/data/csv/LoanStats3a_half2.csv');

// Read CSV
let f = fs.readFileSync(filePath, { encoding: 'utf-8' }, (err) => {
  console.log(err);
});

// Split on row
f = f.split('\n');

// Get first row for column headers
const headers = f.shift().split(',');

const json = [];
f.forEach((d) => {
  // Loop through each row
  const tmp = {};
  const row = d.split(',');
  for (let i = 0; i < headers.length; i++) {
    tmp[headers[i]] = row[i];
  }
  // Add object to collection
  json.push(tmp);

  // return JSON.stringify(json);
});

const outPath = path.join(__dirname, './src/data/data_half2.json');
// Convert object to string, write json to file
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', (err) => {
  console.log(err);
});
