
# Project Specification: BSMARTISH Website

## 1. Project informations

- **Goal of the project:** To build a front-end website for a brand
- **Brand:** BSMARTISH urban renovations - Real estate company focused on urban renovations. Currently, the main activity is using developing urban renovastion project and placing them on the market through mid-term rentals or selling them.
- **Aesthetic:** Minimalist, High-end, Urban, Clean.
- **Website language:** English

## 2. Workflow
- The workflow is simple and flexible: the process is focused section by section. Reference screenshots for each section will be provided at `C:\bsmartish\bsmartish-website-folder\bsmartish-site\public\inspo.templates`.  Your job is to first clone/replicate those screenshots as accurately as possible, and only after apply the necessary adjustments to align the aesthetics with the project identity (colours, fonts, and logo if needed), following the instructions provided. NOTE: Even though the focus is section by section, this does NOT mean 
we won't eventually go back to different sections to make improvements.
- Furthermore, you will use the screenshot workflow both when cloning the reference screenshots and when adjusting the sections to integrate the project identity.
- Puppeteer is installed at `C:\bsmartish\bsmartish-website-folder\bsmartish-site\node_modules\puppeteer`. Chrome cache is at `C:\Users\António Policarpo\.cache\puppeteer\chrome\win64-147.0.7727.57\chrome-win64\chrome.exe`.  
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `C:\bsmartish\bsmartish-website-folder\bsmartish-site\public\temp.screenshots` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` -> saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool – Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## 3. Visual Identity (Strict Rules)

- **Colors:**
    - Primary: `Slate Blue (#6b87a4)`
    
    - Secondary: `Canvas White (#F8F8F8)`
    - Accent/Call-to-Action: `Deep Urban (#202831)`
    - Text/Neutral: `Slate Gray (#75797c)`
- **Typography:**
    - Headings (H1): `Hanken Grotesk` — CSS variable `--font-hanken`
    - Sub-headings & CTAs: `Garet`
    - Body Text: `Aileron`

    > **Do not reintroduce Radnika.** It was removed in September 2026 for
    > licensing reasons: the freely circulated Radnika Medium is licensed for
    > personal use only, which does not cover a company website, and does not
    > cover self-hosting it as a webfont. Hanken Grotesk is by the same designer
    > (Alfredo Marco Pradil, Hanken Design Co.) and is published under the SIL
    > Open Font License 1.1, which permits commercial use and embedding. The
    > licence text ships at `public/fonts/HankenGrotesk-OFL.txt` and the
    > `@font-face` rules live at the top of `app/globals.css`.

## 4. Site Map & Sections

#### **Page: Home (The Showcase)**

#### **Page: About Us (Identity & Activity)**

#### **Page: Portfolio (The Collection)**

#### **Page Template: Individual Apartment**



## Editing Rules
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- Never read a file that is not explicitly mentioned in the prompt
- Read each file only once. Never re-read.
- Make all edits in parallel to save tokens
- On ambiguity: ask me one short question before starting, never mid-task. Never loop on ambiguity.
- Design in code, not in thinking

## Task Rules
- Do not explore the codebase before editing
- Make your best guess on structure and edit directly
- Never read config files unless explicitly asked in the prompt


