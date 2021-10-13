import rateLimit from 'express-rate-limit';

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

export const triesLimiter = rateLimit({
    windowMs: 30 * 1000, // 30 seconds
    max: 5, // 5 hits in 30 seconds
    message: 'Too many login attempts from this IP, please try again after 30 seconds'
});
