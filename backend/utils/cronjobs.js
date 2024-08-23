const cron = require("node-cron");
const { fetchMonkeypoxData } = require("./scraper");

// Crawl monkeypox data, every 15 minutes
cron.schedule("*/15 * * * *", () => {
	fetchMonkeypoxData();
});