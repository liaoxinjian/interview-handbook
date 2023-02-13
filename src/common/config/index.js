export const envConfig = process.env.NODE_ENV === "development"? require('./config.env.js'): require('./config.prod.js');

