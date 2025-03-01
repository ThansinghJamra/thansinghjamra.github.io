const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com'); // अपनी वेबसाइट का URL डालें
    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
})();
