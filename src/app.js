const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(helmet());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Demasiados intentos de login, intenta más tarde"
});
app.use("/api/auth/login", loginLimiter);

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando');
});

module.exports = app;
