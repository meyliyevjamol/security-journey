import Giscus from '@giscus/react';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react';
import { useConfig, useTheme } from 'nextra-theme-docs';
import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from 'react-share';

const SHARE_BUTTONS = [
  { Button: FacebookShareButton, Icon: IconBrandFacebook },
  { Button: TwitterShareButton, Icon: IconBrandX },
  { Button: TelegramShareButton, Icon: IconBrandTelegram },
  { Button: LinkedinShareButton, Icon: IconBrandLinkedin },
  { Button: EmailShareButton, Icon: IconMail },
] as const;

// NOTE: like/view/dislike counters were removed because they relied on
// @vercel/postgres (Node runtime) which is not supported on Cloudflare Pages.
// They can be reintroduced later using Cloudflare D1/KV with the Edge runtime.

const ArticleFooter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useTheme();
  const { title } = useConfig();

  return (
    <>
      <div className="flex gap-2 mb-2 items-start">
        {SHARE_BUTTONS.map(({ Button, Icon }, i) => (
          <Button
            key={i}
            url={window.location.href}
            className={[
              'w-9 h-9 flex items-center justify-center border-2 border-black/40 dark:border-white/20 p-1 rounded transition-all',
              'hover:border-green-500 hover:dark:border-green-500 hover:text-green-500',
            ].join(' ')}
            resetButtonStyle={false}
            title={title}
          >
            <Icon stroke={2} />
          </Button>
        ))}
      </div>
      {/* TODO: Giscus izohlarni yoqish uchun https://giscus.app dan security-journey
          repo'si uchun repoId va categoryId oling, so'ng quyidagi blokni oching. */}
      {false && (
        <Giscus
          key={theme}
          id="comments"
          repo="meyliyevjamol/security-journey"
          repoId="REPLACE_ME"
          category="General"
          categoryId="REPLACE_ME"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={
            (theme as any) == 'light' ? 'light_high_contrast' : 'noborder_dark'
          }
          lang="uz"
          loading="lazy"
        />
      )}
    </>
  );
};

export default ArticleFooter;
