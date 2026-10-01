# IVO ONE reference page

This package reproduces the published reference page as it appeared on 29 September 2026. The visible LEXIM ONE product branding and header logo have been changed to IVO ONE. The rest of the page is retained, including its images, video, wording, colors, behavior, legal company name, and contact email addresses.

## Put it in GitHub

1. Download and unzip this package on your computer.
2. Open the **GitHub repository connected to your Netlify site**. Save a backup by creating a branch or downloading the existing repository first.
3. Replace the existing site files with the contents of this folder. The files `index.html`, `support.js`, `package.json`, and `netlify.toml`, plus the `assets` and `scripts` folders, must be at the repository root. Remove the old application files if you want this to be the entire website.
4. Commit the changes. If using GitHub's web interface, choose **Add file → Upload files** and drag the unzipped contents, including folders, into the upload area. GitHub does not unpack a ZIP uploaded as a file.
5. In Netlify, check **Site configuration → Build & deploy**. The build command should be `npm run build` and the publish directory should be `dist/client`. The included `netlify.toml` sets these values for a normal Git-based deployment. Trigger a deploy if it does not start automatically.
6. Open the deployed URL and check the top, FAQ, card section, mobile view, and waitlist popup.

For a local preview, run `python3 -m http.server 8000` from this folder and open `http://localhost:8000/`. To check the Netlify output, run `npm run build`.

## Notes

- The waitlist in the reference page saves submissions only in the visitor's browser (`localStorage`). It does not send the details to your team. Connect a form service before using it for real signups.
- The visible footer still says `Lexim Trading (HK) Limited`, and contact links still use `@leximone.com`. They were left untouched because only the logo and product name were requested.
- The page loads React and Babel from unpkg, as the reference does. Its fonts load from Google Fonts.
- This is a static snapshot of the reference. It does not include the existing IVO site's separate About, Privacy, Terms, FAQ, or Apply pages.
