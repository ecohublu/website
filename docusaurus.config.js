// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import {brandName, contactEmail, footerDescription, siteDescription} from './src/data/siteContent.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: brandName,
  tagline: '生態監測資料平台與專案網站',
  favicon: 'img/favicon.ico',
  url: 'https://www.dataisland.tw',
  baseUrl: '/',
  future: {
    v4: true,
  },
  organizationName: 'ecohublu',
  projectName: 'website',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },
  presets: [
    [
      'classic',
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: brandName,
        logo: {
          alt: brandName,
          src: 'img/docusaurus.png',
        },
        items: [
          {href: '/#company-intro', label: '公司介紹', position: 'left'},
          {href: '/#products-services', label: '產品與服務', position: 'left'},
          {href: '/#contact-us', label: '聯絡我們', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '頁面',
            items: [
              {label: '公司介紹', href: '/#company-intro'},
              {label: '產品與服務', href: '/#products-services'},
              {label: '聯絡我們', href: '/#contact-us'},
            ],
          },
          {
            title: '聯絡',
            items: [{label: contactEmail, href: `mailto:${contactEmail}`}],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ${brandName}. ${footerDescription}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
