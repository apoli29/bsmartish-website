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

- **Structure & Visual Alignment:**
    1. **Initial Build:** Claude Code builds the initial technical structure and layout (the "skeleton") of the site.
    2. **Visual Verification (Paper):** Paper is used as the visual bridge to verify the structure's aesthetics, ensuring colors, spacing, and typography meet BSMARTISH's premium standards.
    3. **Aesthetic Refinement:** Any necessary visual adjustments are made within Paper to achieve design perfection.
    4. **Final Sync:** Claude Code subsequently updates the source code structure to reflect the validated visual changes from Paper, ensuring the final product matches the approved design.

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

### **List, in order, of the tasks

 #  │                 Tarefa                  │  Tipo  │ Página / Componente │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 01  │ Header                                  │ Visual │ Global              │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 02  │ Hero Intro                              │ Visual │ Home                │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 03  │ Our Mission                             │ Visual │ Home                │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 04  │ Impact Widget                           │ Visual │ Home                │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 05  │ Featured Properties                     │ Visual │ Home                │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 06  │ Trajectory & Vision                     │ Visual │ About Us            │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 07  │ What We Do                              │ Visual │ About Us            │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 08  │ Mission & Vision                        │ Visual │ About Us            │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 09  │ Values                                  │ Visual │ About Us            │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 10  │ Portfolio Grid + Property Cards         │ Visual │ Portfolio           │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 11  │ Identity Hero                           │ Visual │ Individual Property │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 12  │ Essentials Info                         │ Visual │ Individual Property │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 13  │ Visual Gallery                          │ Visual │ Individual Property │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 14  │ Media Tour                              │ Visual │ Individual Property │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 15  │ Map Integration                         │ Visual │ Individual Property │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 16  │ The Insider Guide                       │ Visual │ Individual Property │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 17  │ Footer                                  │ Visual │ Global              │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ —   │ —                                       │ —      │ —                   │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 18  │ Setup Next.js + config base             │ Dev    │ Projeto             │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 19  │ Header                                  │ Dev    │ Global              │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 20  │ Hero Intro                              │ Dev    │ Home                │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 21  │ Our Mission                             │ Dev    │ Home                │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 22  │ Impact Widget                           │ Dev    │ Home                │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 23  │ Featured Properties                     │ Dev    │ Home                │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 24  │ Trajectory & Vision                     │ Dev    │ About Us            │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 25  │ What We Do                              │ Dev    │ About Us            │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 26  │ Mission & Vision                        │ Dev    │ About Us            │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 27  │ Values                                  │ Dev    │ About Us            │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 28  │ Portfolio Grid + Property Cards         │ Dev    │ Portfolio           │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 29  │ Individual Property (template completo) │ Dev    │ Individual Property │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 30  │ Footer                                  │ Dev    │ Global              │
  ├─────┼─────────────────────────────────────────┼────────┼─────────────────────┤
  │ 31  │ Deploy para Vercel                      │ Dev    │ Projeto             │
  └─────┴─────────────────────────────────────────┴────────┴─────────────────────┘