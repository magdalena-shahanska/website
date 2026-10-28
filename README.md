# Magdalena Shahanska - Static website

This directory is the complete static GitHub Pages version of your portfolio.
No Node.js installation, npm packages, build step, Worker, database or secret is required.

## Preview in Windows CMD

Install Python 3 if it is not already installed, then open CMD in this extracted directory:

```cmd
py -3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. Stop with Ctrl+C.
You can also double-click start-local.cmd.
If the Windows Python launcher is unavailable, use `python -m http.server 8000 --bind 127.0.0.1`.

## Publish on GitHub Pages

1. Create an empty GitHub repository for this site. On GitHub Free, use a public repository.
2. Put this directory's CONTENTS at the repository root. index.html must be at that root, not one directory below it.
3. In repository Settings > Pages, choose Deploy from a branch, main, /(root), then Save.
4. Use the published address shown in Pages settings. Project repositories work because all asset paths are relative.

Optional Windows CMD commands, after installing Git and creating an empty repository:

```cmd
git init
git add .
git commit -m "Add static portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace YOUR-USERNAME and YOUR-REPOSITORY. These commands are for this new extracted directory, not the existing Sites repository.

## Contact form

GitHub Pages cannot run the previous /api/contact Worker or store enquiries.
By default the static site shows a working LinkedIn contact link, and the unconfigured form is hidden.
To enable the form, create a hosted form endpoint that supports browser POST requests (such as Formspree), then paste its HTTPS endpoint into assets/js/config.js as contactFormEndpoint.
After configuring the provider's delivery settings and verifying your recipient address, test a real enquiry before sharing the site.
Never put API secrets in config.js. It is public.
Existing enquiries on the original hosted site are not included or migrated.

## Edit the website

- index.html: text, sections and embedded Nike logo
- assets/css/styles.css: design, colors and responsive layout
- assets/js/site.js: workflow panels, checklist filters and optional contact form
- assets/js/config.js: optional public contact endpoint
- assets/: profile photo and remaining brand logos

Images are included locally. The Poppins font loads from Google Fonts when online; local Arial is the fallback. Serif headings use Georgia.
The original hosted Sites version has not been changed by this export.

Official publishing instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
