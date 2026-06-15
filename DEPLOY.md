# 🚀 Deploy — Cloudflare Pages

Security Journey to'liq Next.js (SSR/Edge) ilovasi sifatida **Cloudflare Pages**'da
[`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages) orqali deploy qilinadi.
Bu yondashuv 3 tilni (`en-UZ`, `en`, `ru`) va dinamik routingni saqlab qoladi.

## Variant A — Cloudflare Dashboard (Git integratsiyasi, tavsiya)

1. Kodni GitHub'ga push qiling.
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. `security-journey` repozitoriyasini tanlang.
4. Build sozlamalari:
   - **Framework preset:** `Next.js`
   - **Build command:** `npx @cloudflare/next-on-pages@1`
   - **Build output directory:** `.vercel/output/static`
5. **Settings → Functions → Compatibility flags**'da `nodejs_compat` ni qo'shing
   (Production va Preview uchun).
6. Deploy. Har push avtomatik build bo'ladi.

## Variant B — CLI orqali (lokal)

```bash
pnpm install
pnpm run preview   # lokal Cloudflare muhitida ko'rish
pnpm run deploy    # wrangler orqali deploy (wrangler login kerak)
```

## Custom domen — security-journey.uz

1. Pages loyihasi → **Custom domains → Set up a custom domain**.
2. `security-journey.uz` (va `www`) ni qo'shing.
3. Domen allaqachon Cloudflare'da bo'lgani uchun DNS yozuvlari avtomatik qo'shiladi.
   SSL ham avtomatik (Universal SSL).

## ⚠️ Eslatma: like / view / dislike API

`pages/api/*.ts` `@vercel/postgres` ishlatadi — bu **Vercel'ga bog'liq** va Cloudflare
Edge'da ishlamaydi. Variantlar:

- **Hozircha:** API'siz ham sayt to'liq ishlaydi (faqat like/view hisoblagichi ko'rinmaydi).
- **Keyin migratsiya:** hisoblagichni **Cloudflare D1** (SQL) yoki **KV** ga ko'chirish,
  yoki `@vercel/postgres` o'rniga to'g'ridan-to'g'ri Postgres (Neon) + Edge driver.

> next-on-pages build paytida Node-runtime API route'lari haqida ogohlantirish berishi mumkin —
> bu sayt ishlashiga to'sqinlik qilmaydi.
