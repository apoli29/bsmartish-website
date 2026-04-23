import puppeteer from 'puppeteer'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const URL = process.env.URL || 'http://localhost:3000/about'
const OUT_DIR = resolve(process.cwd(), 'scripts', 'screenshots')
mkdirSync(OUT_DIR, { recursive: true })

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 900, height: 1100 },
  { name: 'mobile', width: 390, height: 844 },
]

const sections = [
  { id: 'about-trajectory', name: '02-trajectory' },
  { id: 'about-mission-vision', name: '03-mission-vision' },
  { id: 'about-values', name: '04-values' },
  { id: 'about-distinction', name: '05-distinction' },
  { id: 'about-faq', name: '06-faq' },
]

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox'],
})

try {
  for (const vp of viewports) {
    const page = await browser.newPage()
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 })
    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })

    await page.waitForSelector('#about-faq', { timeout: 20000 })

    // Disable IntersectionObserver-based reveals so animations don't hide content in screenshots
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        if (el.style && el.style.opacity === '0') el.style.opacity = '1'
        if (el.style && el.style.transform && el.style.transform.includes('translate')) {
          el.style.transform = 'none'
        }
      })
      window.scrollTo(0, document.body.scrollHeight)
    })
    await new Promise((r) => setTimeout(r, 800))
    await page.evaluate(() => window.scrollTo(0, 0))
    await new Promise((r) => setTimeout(r, 400))

    // Full page
    await page.screenshot({
      path: `${OUT_DIR}/about-${vp.name}-full.png`,
      fullPage: true,
    })
    console.log(`✓ ${vp.name} full page`)

    // Per-section captures (desktop only — saves time)
    if (vp.name === 'desktop') {
      for (const sec of sections) {
        const el = await page.$(`#${sec.id}`)
        if (el) {
          await el.scrollIntoView()
          await new Promise((r) => setTimeout(r, 350))
          await el.screenshot({ path: `${OUT_DIR}/${sec.name}.png` })
          console.log(`✓ section ${sec.name}`)
        }
      }
    }

    await page.close()
  }
} finally {
  await browser.close()
}

console.log(`\nScreenshots saved to: ${OUT_DIR}`)
