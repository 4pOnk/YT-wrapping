const puppeteer = require('puppeteer');
(async () => {
     const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
        args: [
            // '--proxy-server=170.83.60.124:55443'
        ],
    });
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'Proxy-Authorization': 'Basic ' + Buffer.from(':').toString('base64'),
    });
    
    console.log('Opening page ...');
    try {
        await page.goto('https://2ip.ru/', {timeout: 180000});
    } catch(err) {
        console.log(err);
    }
  
    console.log('Taking a screenshot ...');
    await page.screenshot({path: 'screenshot.png'});
    // await browser.close();
})();