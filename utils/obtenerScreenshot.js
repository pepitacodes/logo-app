// Import puppeteer
const puppeteer = require('puppeteer');
const fs = require("fs");
const path = require("path")

module.exports = async () => {

    // Launch the browser
    const browser = await puppeteer.launch();

    // Create a page
    const page = await browser.newPage();

    // Go to your site
    await page.goto('http://localhost:3000');

    // get element of DOM
    let logo = await page.waitForSelector("#rectangulo-marron")

    // se guarda el screenshot de la imagen
    await logo.screenshot({
        path: path.join(__dirname, '../public/images/logo.png'),
    });

    // Close browser.
    await browser.close();

};



