const catchAsync = require("../utils/catchAsync")
const { getOrFetchMonkeypoxData } = require("../utils/scraper");

/**
 * Monkeypox Ranking of most cases
 * @route   GET /api/diseases/monkeypox/ranking
 * @access  Public
 */
exports.monkeypoxRanking = catchAsync(async (req, res, next) => {
    const data = await getOrFetchMonkeypoxData();
    const statistics = [];

    Object.keys(data).forEach((key) => {
        statistics.push({ 
            country: key, 
            total_cases: data[key][data[key].length - 1]?.total_cases || 0,
            total_deaths: data[key][data[key].length - 1]?.total_deaths || 0,
        })
    })

    return res.json({
        ok: true,
        statistics
    })
});

/**
 * Monkeypox Statistics
 * @route   GET /api/diseases/monkeypox?countries=World
 * @access  Public
 */
exports.monkeypox = catchAsync(async (req, res, next) => {
    const { countries } = req.query;
    const includedCountries = (!countries || typeof countries !== "string") ? ["World"] : countries.split(",");

    const data = await getOrFetchMonkeypoxData();
    const statistics = {};

    Object.keys(data).forEach((key) => {
        if (includedCountries.includes(key))
            statistics[key] = data[key]
    })

    return res.json({
        ok: true,
        statistics
    })
});
