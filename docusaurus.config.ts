import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = 'project-mars-tw';
const projectName = 'mars-dictionary';
const baseUrl = `/${projectName}`;
const githubUrl = `https://github.com/${organizationName}/${projectName}`

const config: Config = {
  title: '火星辭典',
  tagline: '火星辭典',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://project-mars-tw.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `${githubUrl}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '火星辭典',
      logo: {
        alt: '火星辭典 Logo',
        src: 'img/logo192.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '辭典',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: githubUrl,
          label: 'GitHub',
          position: 'right',
        },
        {
          href: '/contact',
          label: '聯絡我們',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '火星辭典',
          items: [
            {
              label: '首頁',
              to: '/',
            },
          ],
        },
        {
          title: '火星計畫',
          items: [
            {
              label: '官方網站',
              href: 'https://www.projectmars.info',
            },
            {
              label: '火星人試驗',
              href: 'https://www.projectmars.org',
            },
            {
              label: '火星會員',
              href: 'https://www.projectmars.club',
            },
            {
              label: '火星計畫商城',
              href: 'https://www.projectmars.shop',
            },
            {
              label: '火星推進器商城',
              href: 'https://www.projectmars.app',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: githubUrl,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project Mars Co., Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['zh', 'en'],
        // ```
      }),
    ],
  ],
};

export default config;
