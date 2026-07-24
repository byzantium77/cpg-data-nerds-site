# CPG Data Nerds — website

Plain HTML/CSS/JS, no build step. Only Three pages: `index.html`, `about.html`, `resources.html`.

## Hosting on GitHub Pages (free)

1. Create a new GitHub repo, e.g. `cpg-data-nerds-site` (can be public or private — Pages works on both with a paid plan; public is free).
2. Push the contents of this `site/` folder to the repo root (not a subfolder) on the `main` branch:
   ```bash
   cd site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. GitHub will publish it at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Pointing cpgdatanerds.com at it

The `CNAME` file in this folder already contains `cpgdatanerds.com` — that tells GitHub Pages which custom domain to serve.

At your domain registrar (wherever cpgdatanerds.com is registered — check Squarespace Domains if you bought it through them):

- Add an **A record** for the root domain (`@`) pointing to GitHub Pages' IPs:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- Add a **CNAME record** for `www` pointing to `<your-username>.github.io`.

Then back in **Settings → Pages** on GitHub, enter `cpgdatanerds.com` as the custom domain and enable **Enforce HTTPS** once it's verified (can take up to 24 hours for DNS to propagate).

## Editing content later

- All copy lives directly in the three `.html` files — no CMS, just edit the text and push.
- Shared styling is in `assets/css/style.css`. Colors are set as CSS variables at the top of the file if you want to adjust the palette.
- Dashboard screenshots are in `assets/img/` — swap in new ones any time, same filenames or update the `<img src>` paths in `index.html`.
- The "Book a 20 min fit call" buttons currently link to a `mailto:` — swap in a real Calendly/scheduling link across all three pages (search for `mailto:thenerd@cpgdatanerds.com?subject=20`) once you have one.
- The Resources page cards are placeholders marked "Coming soon" — replace with real posts/links as you publish them.
