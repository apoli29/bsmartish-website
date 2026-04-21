# Documento Spec Claude Code

# Project Specification: BSMARTISH Website

## 1. Project informations

- **Goal of the project:** To build a front-end website for a brand
- **Brand:** BSMARTISH urban renovations - Real estate company focused on urban renovations. Currently, the main activity is using developing urban renovastion project and placing them on the market through mid-term rentals or selling them.
- **Aesthetic:** Minimalist, High-end, Urban, Clean.
- **Website language:** English

## 2. List of all tools

| **Tool** | **Purpose for BSMARTISH** |
| --- | --- |
| **Claude Code** | The primary agent responsible for executing the code, managing the file structure, and implementing the logic based on this specification. |
| **Next.js** | Handles the site's logic, page routing, and high-performance image optimization for architectural photos. |
| **HTML** | Defines the core content, hierarchy, and structure of every page. |
| **Tailwind CSS** | A utility-first CSS framework used to apply the brand's premium visual identity directly within the code. |
| **Paper** | Acts as the real-time aesthetic interface to verify, adjust, and approve the UI before final code integration. |
| **Framer Motion** | A free library used for high-end micro-interactions and smooth scroll animations (fades/slides) to enhance the brand's premium feel. |
| **Vercel** | The hosting platform where the site will live, ensuring ultra-fast delivery and automatic updates. |

## 3. Workflow
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
    - Headings (H1): `Radnika Font`
    - Sub-headings & CTAs: `Garet`
    - Body Text: `Aileron`

## 3. Site Map & Sections

#### **Page: Home (The Showcase)**

- **Section 1 - Hero Intro:** High-impact brand statement with a title regarding urban renovation and explaining what the brand does. CTA’s linking to "About Us" and “Contact us” and “Portfolio”.
- Section 2  - Our mission
- **Section 3 - Impact Widget:** Data-driven section with an animated counter for "Projects Completed".
- **Section 4 - Featured Properties:** Two large, immersive cards for key apartments + "Explore all the properties" button (links to Portfolio).

#### **Page: About Us (Identity & Activity)**

- **Section 1 - Trajectory & Vision:** The BSMARTISH story from its origins to Porto + subtle CTA for Porto properties.
- **Section 2 - What We Do:** Integrated grid explaining business pillars (1- urban renovations, from the beginning to the end 2 - Mid-term Rentals)
- Section 3 - Mission and Vision
- **Section 4 - Values:** Visual display of the BSMARTISH DNA.

#### **Page: Portfolio (The Collection)**

- **Section 1 - Portfolio Grid:** A minimalist, high-end gallery displaying all available apartments.
- **Section 2 - Property Cards:** Individual components with clean imagery and a direct CTA to the unique apartment page.

#### **Page Template: Individual Apartment**

- **Section 1 - Identity Hero:** Apartment name, specific location, and the main hero photograph.
- **Section 2 - Essentials Info:** Clean layout showing m2, typology (rooms), and key amenities.
- **Section 3 - Visual Gallery:** High-resolution grid of the interior and exterior.
- **Section 4 - Media Tour:** Integrated video player for a virtual walkthrough.
- **Section 5 - Map Integration:** Interactive Google Maps view of the surrounding area.
- **Section 6 - "The Insider" Guide:** Curated lifestyle suggestions (Gyms, Cafés, Health) for the specific neighborhood.

- **In all pages - Fat Footer:** Comprehensive footer with branding, contacts, social media links, legal navigation, and AMI license.


## Always Do First - Before start building the website
## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.