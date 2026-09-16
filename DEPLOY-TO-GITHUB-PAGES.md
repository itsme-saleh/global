# 🚀 GitHub Pages e Deploy — Abu Saleh Portfolio

Ei project ta GitHub Pages er jonno already ready kora ache:
- `vite.config.ts` e relative base (`base: "./"`) set kora — tai site root
  domain (`username.github.io`) othoba subfolder (`username.github.io/repo-name/`)
  — dutai jaigatei thik mото kaj korbe, kono extra config chara.
- Shob image path (`saleh-hero.jpg` ityadi) ekhon dynamically resolve hoy
  (`src/utils/asset.ts`), tai deploy korar por kono image 404 hobe na.
- `.github/workflows/deploy.yml` — GitHub e push korlei automatic build +
  deploy hoye jabe, kono manual step lagbe na.

## Steps

1. **GitHub e notun repo banan** (public or private, dutai chalbe).
2. Ei project folder ta push korun:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. Repo te jan → **Settings → Pages**.
4. **Build and deployment → Source** e select korun **"GitHub Actions"**
   (এটা zorui — "Deploy from a branch" na, "GitHub Actions" option ta lagbe).
5. Push korar por **Actions** tab e giye workflow run hote dekhben —
   1-2 minute er moddhei shesh hoye jabe.
6. Deploy hoye gele shei same **Settings → Pages** page e URL dekhaবে —
   shomvoboto:
   - `https://<username>.github.io/<repo-name>/` (project repo)
   - `https://<username>.github.io/` (jodi repo er naam exactly
     `<username>.github.io` hoy)

## Update korar por

Kono content/image change korle just:
```bash
git add .
git commit -m "Update content"
git push
```
— GitHub Actions nijei rebuild + redeploy kore dibe. Manually `npm run build`
kore kichu push korar দরকার nei — workflow ta nijei build kore.

## Ekta chotto note

`index.html` er `og:image` tag (social media share preview er jonno) ekhon
relative path e ache. Deploy howar por, jodi WhatsApp/Facebook e link share
korar somoy preview image thik moto na ashe, tahole `index.html` e giye
`og:image` ke full absolute URL diye replace korte hobe, jemon:
```
https://<username>.github.io/<repo-name>/images/saleh-hero.jpg
```
Eta domain fix howar age kora shomvob na, tai deploy korar POR eta check
kore nite hobe.
