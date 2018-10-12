// example code for accessing your credentils from .env file.
const ck = require('ckey');

// now you can access environment variables including what you set in .env file.
const loginUrl = ck.LOGIN_URL;
const email = ck.EMAIL;
const password = ck.PASSWORD;
