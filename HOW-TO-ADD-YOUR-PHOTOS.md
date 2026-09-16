# 📸 Photo Setup — Abu Saleh

## Ekhon ki obostha (Current Status)

Site e ekhon **5 ta image slot** active ache. Sob slot e already image dekhabe —
kokhono broken image ashe na.

| Slot | File | Ekhon ja dekhachchhe |
|------|------|---------------------|
| **Hero** | `saleh-hero.jpg` | ✅ Notun AI-generated library portrait (marketing book, leather chair) |
| **About** | `saleh-about.jpg` | Analytics desk photo (temporary) |
| **Case 01** | `saleh-handshake.jpg` | E-commerce still life (temporary) |
| **Case 02** | `saleh-analytics.jpg` | SaaS dashboard photo (temporary) |
| **Case 03** | `saleh-local.jpg` | Restaurant photo (temporary) |

---

## 🎯 Apnar REAL photo boshate chan? (30 second)

Apnar 4 ta chobi `public/images/` folder e **exact ei nam** diye replace korun.
Ar kichu korar lagbe na — code touch lagbe na, rebuild o lagbe na (dev server e
automatic reload hobe).

| Apnar Chobi | Ke bolbe |
|---|---|
| Marketing book porte boshe achhen | `saleh-hero.jpg` **overwrite** korun |
| "500% Traffic Growth" presentation | `saleh-about.jpg` **overwrite** korun |
| Client er sathe handshake / contract | `saleh-handshake.jpg` **overwrite** korun |
| Google Analytics chart point kora | `saleh-analytics.jpg` **overwrite** korun |
| (Optional) Local business project | `saleh-local.jpg` **overwrite** korun |

> ⚠️ Filename **chhoto-hater** (lowercase) thakte hobe. `Saleh-Hero.JPG` kaj korbe na.

---

## 🔒 Fallback Chain (site kokhono bhenge jabe na)

Prothom image load e problem hole automatic 3-step backup:

```
1. saleh-*.jpg  (apnar real photo)
       ↓ na thakle
2. portrait.jpg / about.jpg / case-*.jpg  (existing artwork)
       ↓ setao na thakle
3. Branded placeholder  (lime tag — layout thik thake)
```

Eta `src/components/ui/SmartImage.tsx` e handle kora ache.

---

## 🌐 Social Share Image (Facebook / WhatsApp preview)

Best photo (Photo 1 recommended) ke **1200 × 630 px** e crop kore
`public/images/og.jpg` nam e save korun. Tarpor `index.html` ei line update:

```html
<meta property="og:image" content="/images/og.jpg" />
```

---

## 💡 Photo Tips

- **Hero** photo vertical (4:5) hole best dekhabe
- Background busy hole free tool e remove korun: [remove.bg](https://remove.bg)
- 1200px+ width er photo use korun (retina screen er jonno)
