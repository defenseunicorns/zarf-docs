// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zarf Documentation",
  tagline: "Airgap is hard. Docs are too.",
  url: "https://zarf.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "Defense Unicorns", // Usually your GitHub org/user name.
  projectName: "Zarf", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/defenseunicorns/zarf-docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
      },
      navbar: {
        title: "Zarf Docs",
        logo: {
          alt: "Zarf",
          src: "img/favicon.svg",
          href: "https://zarf.dev/",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "zarf-overview",
            position: "left",
            label: "Docs",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/defenseunicorns/zarf",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: 'Slack',
                href: 'https://kubernetes.slack.com/archives/C03B6BJAUJ3',
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/defenseunicorns/zarf',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
