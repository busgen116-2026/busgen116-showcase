import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "public/previews");

const sites = [
  { url: "https://situational-unawareness.com", name: "team2" },
  { url: "https://constitution-builder-production.up.railway.app", name: "team6" },
  { url: "https://subtext-brown.vercel.app", name: "team7" },
  { url: "https://busgen116-final-project.vercel.app", name: "team8" },
  { url: "https://busgen116.vercel.app", name: "team10" },
  { url: "https://streamline-app-two.vercel.app", name: "team11" },
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 800 });

for (const { url, name } of sites) {
  const file = path.join(outDir, `${name}.jpg`);
  console.log(`→ ${url}`);
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 20000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: file, type: "jpeg", quality: 85, clip: { x: 0, y: 0, width: 1280, height: 800 } });
    console.log(`  ✓ saved ${name}.jpg`);
  } catch (e) {
    console.log(`  ✗ failed: ${e.message}`);
  }
}

await browser.close();
