const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware de seguridad y CORS
app.use(helmet());
app.use(cors({
    origin: "http://localhost:3000" // cambia por tu frontend si lo tienes
}));

// Middleware para parsear JSON
app.use(express.json());

// Rate limiter para login
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // máximo 5 intentos
    message: "Demasiados intentos de login, intenta más tarde"
});
app.use("/api/auth/login", loginLimiter);

// Rutas
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API funcionando');
});

module.exports = app;
