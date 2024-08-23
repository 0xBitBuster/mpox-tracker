const csvParser = require("csv-parser");

// Function to filter out specified fields
const includeFields = (row, fieldsToInclude) => {
  const filteredRow = {};

  for (const key in row) {
    if (fieldsToInclude.includes(key)) 
      filteredRow[key] = row[key];
  }

  return filteredRow;
};

// Function to convert specified fields to integers
const convertFieldsToInt = (row, fieldsToConvert) => {
  const updatedRow = { ...row };

  fieldsToConvert.forEach((field) => {
    if (updatedRow[field] !== undefined)
      updatedRow[field] = parseInt(updatedRow[field], 10) || 0; 
  });

  return updatedRow;
};

// Function to convert a date string ("YYYY-MM-DD") to a JavaScript Date object
const convertDateStringToDate = (row, dateField) => {
  const updatedRow = { ...row };

  if (updatedRow[dateField] !== undefined) 
    updatedRow[dateField] = new Date(updatedRow[dateField]).getTime();

  return updatedRow;
};

exports.monkeypoxCsvStreamToJson = (stream) => {
  return new Promise((resolve, reject) => {
    const countryNamesToReplace = {
      "Democratic Republic of Congo": "Congo"
    }
    const groupedData = {};

    stream
      .pipe(csvParser())
      .on("data", (row) => {
        // Exclude specific fields
        let filteredRow = includeFields(row, ["location", "date", "total_cases", "total_deaths", "new_cases", "new_deaths"]);

        // Convert specific fields to integers
        filteredRow = convertFieldsToInt(filteredRow, ["total_cases", "total_deaths", "new_cases", "new_deaths"])

        // Convert date field to JavaScript Date object
        filteredRow = convertDateStringToDate(filteredRow, "date");

        // Group data by location
        let location = filteredRow.location;
        if (countryNamesToReplace[location])
          location = countryNamesToReplace[location]
        if (!groupedData[location]) 
          groupedData[location] = [];

        delete filteredRow.location;

        groupedData[location].push(filteredRow);
      })
      .on("end", () => {
        resolve(groupedData);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};
