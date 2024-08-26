const { default: axios } = require("axios");
const { monkeypoxCsvStreamToJson } = require("../helpers/stream")
const fs = require('fs');
const path = require('path');

const getOrFetchMonkeypoxData = async() => {
  const filePath = path.join(__dirname, '..', 'temp', 'monkeypox.json');

  try {
    // Check if the file exists
    await fs.promises.access(filePath, fs.constants.F_OK);
    
    // File exists, read and parse the JSON data
    const jsonData = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    // File does not exist or other error occurred, fetch the data
    await fetchMonkeypoxData();
    
    // After fetching, try to read the file again
    const jsonData = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(jsonData);
  }
}

const fetchMonkeypoxData = async () => {
	try {
		const response = await axios.get("https://catalog.ourworldindata.org/explorers/who/latest/monkeypox/monkeypox.csv", {
				responseType: 'stream'
		})
	
		// Stream CSV & convert to JSON
		const data = await monkeypoxCsvStreamToJson(response.data);
		const jsonData = JSON.stringify(data);
	
		// Save in temp directory
		const tempDir = path.join(__dirname, '..', 'temp');
		const filePath = path.join(tempDir, 'monkeypox.json');
	
		await fs.promises.mkdir(tempDir, { recursive: true });
		await fs.promises.writeFile(filePath, jsonData);
	} catch (err) {
    console.error("Something went wrong while trying to fetch the latest monkeypox data: ", err)
  }
};

module.exports = {
	getOrFetchMonkeypoxData,
	fetchMonkeypoxData,
}
