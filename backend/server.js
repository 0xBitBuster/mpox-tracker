const cookieParser = require("cookie-parser");
const compression = require("compression");
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const xss = require("xss-clean");
const morgan = require("morgan")
const cors = require("cors");
const hpp = require("hpp");

const AppError = require('./utils/AppError');
const globalErrorHandler = require('./utils/globalErrorHandler');
const terminate = require("./utils/terminate")
const diseasesRoutes = require("./routes/diseasesRoutes");

const app = express();

// Configure App
dotenv.config();
app.use(cors({
    credentials: true,
    origin: ["http://127.0.0.1:3000", "http://frontend:3000", process.env.WEBSITE_URL]
}));
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use(xss());
app.use(hpp());
app.use(compression());
if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
}

app.use("/api/diseases", diseasesRoutes);
app.all("*", (req, res, next) => {
    next(new AppError("This route does not exist.", 404));
});

app.use(globalErrorHandler);

// Start the server
const PORT = process.env.PORT || 4000;
let server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

// Run cron jobs
require("./utils/cronjobs")

// Listen for unexpected Errors
const exitHandler = terminate(server, {
    coredump: false,
    timeout: 500
})

process.on('uncaughtException', exitHandler(1, 'Unexpected Error'))
process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'))
process.on('SIGTERM', exitHandler(0, 'SIGTERM'))
process.on('SIGINT', exitHandler(0, 'SIGINT'))