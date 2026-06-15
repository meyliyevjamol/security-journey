/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
import { useRouter } from 'next/router';
import { GithubSponsors } from '@components/github-sponsors';
import dynamic from 'next/dynamic';
const Zoom = dynamic(() => import('react-medium-image-zoom'), {
  ssr: false,
})

const github = 'https://github.com/ismoilovdevml/security-journey';

const TITLE_WITH_TRANSLATIONS = {
  'en-UZ': 'Security Journey',
  'en': 'Security Journey',
  'ru': 'Security Journey',
} as const;

const EDIT_LINK_WITH_TRANSLATIONS = {
  'en-UZ': "GitHub-da o'zgartirish ->",
  'en': 'Edit this page on GitHub ->',
  'ru': 'Редактировать на GitHub ->',
} as const;

import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs';

const ShieldMark = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Security Journey"
  >
    <defs>
      <linearGradient
        id="sjShield"
        x1="9"
        y1="4"
        x2="55"
        y2="60"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#34D399" />
        <stop offset="1" stopColor="#0D9488" />
      </linearGradient>
    </defs>
    <path
      d="M32 4L55 12V33C55 46 45.5 55.5 32 60C18.5 55.5 9 46 9 33V12L32 4Z"
      fill="url(#sjShield)"
    />
    <path
      d="M40 24.5C40 20 36 17.5 31.5 17.5C27 17.5 23 20 23 24.5C23 28.5 26.5 30.5 31.5 31.8C36.5 33 40 35 40 39.5C40 44 36 46.5 31.5 46.5C27 46.5 23 44 23 39.5"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const Logo = ({ height = 18 }: { height?: number; width?: number }) => {
  return (
    <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
      <ShieldMark size={height} />
      <span
        className="logo-text"
        style={{ fontWeight: 'bold', fontSize: 18 }}
      >
        Security Journey
      </span>
    </div>
  );
};

const ArticleFooter = dynamic(() => import("@components/article-footer"), { ssr: false })

const config: DocsThemeConfig = {
  docsRepositoryBase: `${github}/blob/main`,
  chat: {
    link: 'https://discord.gg/rq9rUdnKpm',
  },
  toc: {
    float: true,
  },
  project: {
    link: github,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  primaryHue: {
    dark: 162,
    light: 212,
  },
  footer: {
    text() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { locale } = useRouter();
      const footerTexts: Record<string, string> = {
        'en-UZ': `GPL-3.0 Licensed | Hamma huquqlar himoyalangan ${new Date().getFullYear()} ©Uzbek Developers Consortium.`,
        'en': `GPL-3.0 Licensed | All rights reserved ${new Date().getFullYear()} ©Uzbek Developers Consortium.`,
        'ru': `GPL-3.0 Лицензия | Все права защищены ${new Date().getFullYear()} ©Uzbek Developers Consortium.`,
      };
      return <>{footerTexts[locale as string] || footerTexts['en-UZ']}</>;
    },
  },
  navbar: {
    extraContent: <GithubSponsors />,
  },
  logo() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
      <div className="flex items-center gap-2">
        <Logo width={18} height={18} />
      </div>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s - Security Journey`,
    };
  },
  head() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { theme } = useTheme();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale } = useRouter();
    const title = frontMatter?.title || 'Security Journey';
    const defaultDescriptions: Record<string, string> = {
      'en-UZ': "Kiberxavfsizlik va Data Analiz bo'yicha bepul ta'lim platformasi Security Journey-ga xush kelibsiz",
      'en': "Welcome to Security Journey - a free educational platform for cybersecurity and data analysis",
      'ru': "Добро пожаловать в Security Journey - бесплатная образовательная платформа по кибербезопасности и анализу данных",
    };
    const description =
      frontMatter?.description ||
      defaultDescriptions[locale as string] || defaultDescriptions['en-UZ'];
    const image = frontMatter?.type
      ? `https://security-journey.uz/api/og?title=${frontMatter?.ogImageText}&category=Security`
      : frontMatter?.image || '/banner.png';
    const folder = theme === 'light' ? '/light' : '/dark';

    const composedTitle = `${title} - Security Journey`;

    return (
      <>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${folder}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${folder}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${folder}/favicon-16x16.png`}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <link rel="manifest" href={`${folder}/site.webmanifest`} />
        <meta httpEquiv="Content-Language" content={locale || 'en'} />
        <meta name="title" content={composedTitle} />
        <meta name="description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />

        <meta property="og:description" content={description} />
        <meta property="og:title" content={composedTitle} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta
          name="apple-mobile-web-app-title"
          content="Security Journey"
        />
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) =>
      type === 'separator' ? (
        <div className="flex items-center gap-2">
          <ShieldMark size={12} />
          {title}
        </div>
      ) : (
        <>{title}</>
      ),
  },
  editLink: {
    text() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { locale } = useRouter();
      return (
        <>
          {
            EDIT_LINK_WITH_TRANSLATIONS[
            (locale as keyof typeof EDIT_LINK_WITH_TRANSLATIONS) ?? 'en-UZ'
            ]
          }
        </>
      );
    },
  },
  i18n: [
    { locale: 'en-UZ', text: "O'zbek" },
    { locale: 'en', text: 'English' },
    { locale: 'ru', text: 'Русский' },
  ],
  gitTimestamp: ({ timestamp }) => (
    <>Last updated on {timestamp.toLocaleDateString()}</>
  ),
  components: {
    img: props => <Zoom><img {...props} /></Zoom>
  },
  main({ children }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter: { showFooter } } = useConfig();

    return <>
      {children}
      {showFooter != false && <ArticleFooter />}
    </>
  }
};

export default config;