/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { default: About } = require('./src/pages/about');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AIBolster',
  tagline: 'Building businesses better with AI-ML.',
  url: 'https://www.aibolster.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aibolster-admin', // Usually your GitHub org/user name.
  projectName: 'Website', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
    
        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'AIBolster Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: 'about', label: 'About', position: 'right'},
          {to: 'team', label: 'Team', position: 'right'},
          {
            type: 'doc',
            docId: 'portfolio',
            position: 'right',
            label: 'Portfolio',
            
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                to: 'about',
              },
              {
                label: 'Team',
                to: 'team',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Email Us',
                href: 'mailto:contact@aibolster.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/aibolster',
              },

              {
                label: 'Twitter',
                href: 'https://twitter.com/aibolster',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Jobs',
                href: 'https://www.linkedin.com/company/aibolster/jobs/',
              },
              {
                label: 'Posts',
                href: 'https://www.linkedin.com/company/aibolster/posts/?feedView=all',
              },

            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'http://localhost:3000/docs/privacy',
              },
              {
                label: 'Terms',
                href: 'http://localhost:3000/docs/terms',
              },
              {
                label: 'Data Policy',
                href: 'http://localhost:3000/docs/datap',
              },
              {
                label: 'Cookie Policy',
                href: 'http://localhost:3000/docs/cookiep',
              },
            ],
          },
        ],
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} AIBolster, Inc.`,
      },
    }),
};

module.exports = config;
