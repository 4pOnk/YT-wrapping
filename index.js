const puppeteer = require('puppeteer');

async function run(proxy) {
  const browser = await puppeteer.launch({
    headless: false,
    args: [ "--no-sandbox", '--proxy-server=' + proxy ],
    executablePath: "C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome.exe" // <-- chrome path here
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);

  const pageUrl = 'https://youtu.be/PW08Ehik22U';

  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  await page.goto(pageUrl, {
    waitUntil: 'load',
    // Remove the timeout
    timeout: 0
});
try{
  await page.click('#movie_player > div.ytp-cued-thumbnail-overlay > button');
}catch (e) {}
}

run('115.74.254.226:8080');
// run('66.70.198.229:999');
run('174.142.28.235:3128');

// run('64.235.204.107:3128');
// run('64.124.38.125:8080');
// run('64.124.38.142:8080');
// run('135.148.27.27:8080');
// run('144.126.134.140:8118');
// run('64.124.38.140:8080');
// run('64.124.38.141:8080');
// run('96.95.164.41:3128');
// run('54.38.63.143:3128');

