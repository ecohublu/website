# Website Deployment Notes

This document records the deployment steps used for the `ecohublu/website` site.

Current production target:

- Site URL: `https://www.dataisland.tw`
- GitHub repository: `https://github.com/ecohublu/website`
- Hosting: GitHub Pages
- DNS provider: Cloudflare
- Publish branch: `gh-pages`

## 1. Repo configuration

Before deployment, make sure the site config matches the production domain.

- [docusaurus.config.js](D:\website\docusaurus.config.js)
  - `url` should be `https://www.dataisland.tw`
- [static/CNAME](D:\website\static\CNAME)
  - file content should be `www.dataisland.tw`

## 2. Verify domain ownership in GitHub

GitHub requires domain verification before using a custom Pages domain.

Path:

- GitHub account `Settings > Pages > Verified domains`

Steps:

1. Click `Add a domain`
2. Enter `dataisland.tw`
3. GitHub will show a TXT verification record
4. Add that TXT record in Cloudflare
5. Return to GitHub and click `Verify`

Cloudflare TXT record format:

- Type: `TXT`
- Name: `_github-pages-challenge-ecohublu`
- Content: the verification code shown by GitHub
- TTL: `Auto`

## 3. Configure DNS in Cloudflare

Path:

- Cloudflare `dataisland.tw > DNS > Records`

Required records:

- `A` `@` -> `185.199.108.153`
- `A` `@` -> `185.199.109.153`
- `A` `@` -> `185.199.110.153`
- `A` `@` -> `185.199.111.153`
- `CNAME` `www` -> `ecohublu.github.io`

Recommended settings:

- Proxy status: `DNS only`
- TTL: `Auto`

## 4. Publish the site to `gh-pages`

GitHub Pages is configured to publish from the `gh-pages` branch.

Default validation/build command:

```powershell
npm run build
```

If Docusaurus deploy works in your environment:

```powershell
$env:GIT_USER='ecohublu'
$env:USE_SSH='false'
npm run deploy
```

In this repo, `docusaurus deploy` originally failed because:

- the repo remote was named `ecohublu` instead of `origin`
- the remote `gh-pages` branch did not exist yet

For the initial deployment, the `gh-pages` branch was created manually from `build/`.

## 5. Enable GitHub Pages

Path:

- Repo `Settings > Pages`

Settings:

1. `Source`: `Deploy from a branch`
2. `Branch`: `gh-pages`
3. Folder: `/ (root)`
4. Click `Save`

After this is enabled, GitHub Pages starts serving the published site from `gh-pages`.

## 6. Set the custom domain

Still in:

- Repo `Settings > Pages`

After Pages is enabled, set:

- `Custom domain`: `www.dataisland.tw`

When DNS is correct, GitHub should show:

- `DNS check successful`

## 7. Enable HTTPS

After GitHub finishes issuing the certificate, enable:

- `Enforce HTTPS`

If the checkbox is unavailable at first, wait and check again later.

## 8. Final checks

Confirm all of the following:

- `dataisland.tw` is verified in GitHub account Pages settings
- Cloudflare records are present and set to `DNS only`
- repo Pages source is `gh-pages / (root)`
- custom domain is `www.dataisland.tw`
- HTTPS is enabled
- the site opens at:
  - `https://www.dataisland.tw`

## 9. Practical notes from this deployment

- The domain name was initially confused with `dataislans.tw`; production should use `dataisland.tw`
- GitHub Pages custom domain fields only appear after Pages is enabled
- First-time deployment may require manually creating `gh-pages`
- Keep repo config and Pages custom domain aligned to avoid mismatched builds
