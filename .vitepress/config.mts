import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ulock Origin Wiki",
  description: "Ulock Origin Wiki - A comprehensive resource for Ulock Origin users, providing guides, tips, and troubleshooting information to help you get the most out of your experience.",
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/assets/UBlock_Origin.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: "Intro",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Extension Compatibility", link: "/compatibility" },
        ],
      },
      {
        text: "Installation",
        collapsed: false,
        items: [
          { text: "Chrome", link: "/markdown-examples" },
          { text: "Firefox", link: "/markdown-examples" },
          { text: "Edge", link: "/markdown-examples" },
          { text: "Safari", link: "/markdown-examples" },
          { text: "Opera", link: "/markdown-examples" },
          { text: "Other Browsers", link: "/markdown-examples" },
          
        ],
      },
      {
        text: "Other",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/markdown-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }


  markdown: {
    container: {
      tipLabel: '',
      warningLabel: 'dd',
      dangerLabel: '',
      infoLabel: '',
      detailsLabel: ''
    }
  }

})