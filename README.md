<h1 align="center">🛡️ Security Journey</h1>

<h4 align="center">Kiberxavfsizlik va Big Data bo'yicha ochiq manbali ta'lim platformasi.</h4>

**Security Journey** — kiberxavfsizlik (cybersecurity) va katta ma'lumotlar (Big Data) bo'yicha
bepul, ochiq manbali ta'lim platformasi. Maqsad — o'zbek, ingliz va rus tillarida amaliy,
real-world qo'llanmalar va maqolalar to'plamini yaratish.

## 📚 Yo'nalishlar

### 🛡️ Xavfsizlik
- **Web Security** — OWASP Top 10, XSS, SQLi, CSRF, auth/JWT
- **Network Security** — firewall, VPN, IDS/IPS, Zero Trust
- **Cloud Security** — AWS/Azure/GCP, IAM, secrets
- **DevSecOps** — SAST/DAST, Trivy, supply-chain, SBOM
- **Penetration Testing** — recon, exploitation, Burp, Metasploit
- **Cryptography** — TLS, PKI, hashing, encryption
- **Compliance & Audit** — ISO 27001, GDPR, SOC

### 📊 Big Data
- **Data Engineering** — ETL/ELT, pipeline, Airflow
- **Big Data Tools** — Hadoop, Spark, Kafka, Flink
- **Data Warehouse** — Snowflake, BigQuery, ClickHouse
- **Data Lake** — MinIO, Delta Lake, Iceberg
- **Real-time Streaming** — Kafka Streams, real-time

## 🛠️ Texnologiya

- [Next.js 13](https://nextjs.org/) + [Nextra 2](https://nextra.site/) (docs theme)
- MDX kontent, 3 til: `en-UZ` (default), `en`, `ru`
- Tailwind CSS
- Deploy: **Cloudflare Pages** (qarang [DEPLOY.md](DEPLOY.md))

## 🚀 Lokal ishga tushirish

```bash
git clone https://github.com/ismoilovdevml/security-journey.git
cd security-journey

pnpm install
pnpm dev          # http://localhost:3000
```

## ✍️ Yangi maqola qo'shish

1. Tegishli kategoriya papkasini oching, masalan `pages/guides/web-security/`.
2. 3 ta fayl yarating: `mavzu.en-UZ.mdx`, `mavzu.en.mdx`, `mavzu.ru.mdx`.
3. Shu papkadagi `_meta.<lang>.json` ga yangi yozuv qo'shing (tartib va sarlavha).
4. Frontmatter va format uchun mavjud `kirish.*.mdx` ni namuna qiling.

## 🤝 Hissa qo'shish

PR'lar ochiq! Maqola, tahrir yoki yangi mavzu — barchasi xush kelibsiz.
Batafsil: [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 Litsenziya

GPL-3.0
