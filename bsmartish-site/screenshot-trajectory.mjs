import puppeteer from 'puppeteer';
import { existsSync, readdirSync } from 'fs';
import { join } from 'path';

const SCREENSHOTS_DIR = 'C:/bsmartish/bsmartish-website-folder/bsmartish-site/public/temp.screenshots';

const url = process.argv[2];
const label = process.argv[3] || 'trajectory';

const existing = existsSync(SCREENSHOTS_DIR)
  ? readdirSync(SCREENSHOTS_DIR).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
  : [];

const numbers = existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)?.[1] ?? '0')).filter(Boolean);
const next = numbers.length > 0 ? Math.max(...numbers) + 1 : 1;

const filename = `screenshot-${next}-${label}.png`;
const outputPath = join(SCREENSHOTS_DIR, filename);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 1500));
await page.evaluate(() => {
  const el = document.querySelector('#about-trajectory');
  if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
});
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: outputPath, fullPage: false });
await browser.close();

console.log(`Saved: ${outputPath}`);
