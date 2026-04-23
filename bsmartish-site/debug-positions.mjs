import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 2000));

const result = await page.evaluate(() => {
  const h1 = document.querySelector('h1');
  const p  = document.querySelector('h1 ~ *').querySelector('p') || document.querySelector('section p');
  return {
    h1: h1.getBoundingClientRect().toJSON(),
    p:  p.getBoundingClientRect().toJSON(),
  };
});
console.log(JSON.stringify(result, null, 2));
await browser.close();
