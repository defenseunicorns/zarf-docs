// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { SocialsBox } = require("./static-components/SocialsBox/SocialsBox");

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
  themes: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), { hashed: true }],
  ],
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
          src: "img/zarf-logo-light.svg",
          srcDark: "img/zarf-logo-dark.svg",
          href: "https://zarf.dev/",
          target: "_self",
        },
        items: [
          {
            type: "search",
            position: "right",
          },
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
            type: "html",
            position: "right",
            className: "navbar__item--socials-box",
            value: SocialsBox({
              linkClass: "menu__link",
            }),
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Zarf",
          src: "img/zarf-logo-light.svg",
          srcDark: "img/zarf-logo-dark.svg",
          href: "https://zarf.dev/",
        },
        copyright: `<p class="p-copy">Copyright © ${new Date().getFullYear()} Zarf Project, All rights reserved.</p>`,
        links: [
          {
            html: SocialsBox(),
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
