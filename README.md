# EMPORIO DEVELOPERS — Corporate Website

A responsive, multi-page corporate website concept for EMPORIO DEVELOPERS PRIVATE LIMITED. Built with plain HTML, CSS and JavaScript so it can be previewed locally and deployed to most static hosting services.

## Included

- Homepage and corporate profile
- Services overview and service-category pages
- Real estate development page
- Construction and civil engineering page
- Interiors and fit-outs page
- Projects page with a transparent project-information placeholder
- Our approach, gallery and company information pages
- Leadership, careers and news placeholders
- Contact page with validated inquiry form
- Privacy, terms, cookie and 404 pages
- Editable JSON data files under `data/`
- Branding SVG and illustrative image assets

## Preview locally

You can open `index.html` directly in a browser. For a local web-server preview, run:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Contact form behavior

The contact form validates required fields and opens a pre-addressed email draft to `contact@emporiogroupinc.com`. It does not store form submissions or send email from the website. To enable direct delivery, configure a secure server-side form endpoint and spam protection; never put email-provider secrets in browser JavaScript.

## Important company-data verification

The supplied project brief contains conflicting legal particulars. The earlier context and the uploaded brief disagree on the incorporation date, registered office, ROC and directors. For that reason, this website intentionally does **not** publish the disputed legal particulars or director names. Review `data/company.json`, especially `legalInformation`, and verify current details against official MCA master data before adding them to public pages.

The supplied business email `contact@emporiogroupinc.com` is included as the public inquiry address. Confirm that the company controls this mailbox before launch. No phone number is displayed because none was provided.

## Projects and services

The website brief says the company has ongoing projects, but no project names, locations, approved photographs or details were supplied. The public Projects page therefore uses a clear placeholder instead of inventing project records. Populate `data/projects.json` and update the Projects page only with approved facts.

Service categories reflect the website brief. Their operational availability and exact scope should be confirmed by the company before publication or contractual use.

## Images and branding

The included architecture and construction images are AI-generated illustrative visuals extracted from a generated website concept image. They are not photographs of EMPORIO DEVELOPERS projects. Replace them with licensed stock imagery or approved original project photography when available. The logo is a replaceable concept wordmark at `assets/images/logo.svg`.

## Editing

- Company and verification fields: `data/company.json`
- Service descriptions: `data/services.json`
- Project records: `data/projects.json`
- FAQs: `data/faqs.json`
- Navigation reference: `data/navigation.json`
- Gallery reference: `data/gallery.json`
- Site options: `data/website-settings.json`
- Visual design: `assets/css/styles.css`
- Shared navigation, footer and interactions: `assets/js/main.js`

The pages are static HTML for dependable deployment. After editing JSON data, update the corresponding page copy as described above; the JSON files are provided as the structured content source and editing reference.

## Deployment checklist

1. Verify legal company information with MCA records.
2. Confirm the business email address.
3. Replace illustrative images and logo if the company has approved assets.
4. Add real project information only after approval.
5. Review privacy, terms and cookie notices with a qualified advisor.
6. Replace `YOUR-DOMAIN.example` in `sitemap.xml` and `robots.txt` with the live domain.
7. Configure a production form endpoint if direct email delivery is required.
8. Serve the website over HTTPS.

## Technology

HTML5, CSS3 and vanilla JavaScript. No build step or package installation is required.
