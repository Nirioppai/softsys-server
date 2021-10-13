import slowDown from 'express-slow-down';

// app.enable("trust proxy"); only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

export const speedLimiter = slowDown({
    windowMs: 30 * 1000, // 30 seconds
    delayAfter: 3, // allow 3 requests to go at full-speed, then...
    delayMs: 2000, // 4th request has a 2000ms delay, 5th has a 4000ms delay, etc.
    maxDelayMs: 10000
});
