const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Luke Embrey',
  tagline: 'My personal blog',
  url: 'https://lukeembrey.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  themeConfig: {
    announcementBar: {
      id: 'announcementBar-1', // Increment on change
      content:
        'Automatic database, file and server backups and management: <a target="_blank" rel="noopener" href="https://bakup.io">Bakup.io</a>',
    },
    navbar: {
      title: 'Luke Embrey',
      logo: {
        alt: 'Floppy disk logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: '/',
          label: 'About me',
          position: 'left'
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://twitter.com/luke_embrey',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/embluk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['php'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: 'blog',
          showReadingTime: true,
          routeBasePath: '/blog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
