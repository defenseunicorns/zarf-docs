// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const svgToString = require("./utils/svg-to-string");
const SlackIconString = svgToString("static/img/SlackIcon.svg");
const GithubIconString = svgToString("static/img/GithubIcon.svg");
const GITHUB_URL = "https://github.com/defenseunicorns/zarf";
const SLACK_URL = "https://zarf.dev/slack";

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
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: "Zarf",
          src: "img/zarf-logo-small.svg",
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
          {
            position: "left",
            label: "Product",
            to: "https://zarf.dev",
            target: "_self",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            position: "right",
            class: "navbar__item navbar__link svg-link",
            href: SLACK_URL,
            html: SlackIconString,
          },
          {
            class: "navbar__item navbar__link svg-link",
            href: GITHUB_URL,
            html: GithubIconString,
            position: "right",
          },
          {
            type: "html",
            value: `
            <div class="socials-box">
              <a class="menu__link svg-menu-link svg-link" href="${SLACK_URL}">${SlackIconString}</a>
              <a class="menu__link svg-menu-link svg-link" href="${GITHUB_URL}">${GithubIconString}</a>
            <div>
             `,
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
                label: "Slack",
                href: "https://kubernetes.slack.com/archives/C03B6BJAUJ3",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/defenseunicorns/zarf",
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
