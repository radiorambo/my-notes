import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Notes",
  description: "My Tech Notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Notes', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Blog', link: 'https://zero-0000.substack.com/' }
    ],

    sidebar: [
      {
        text: 'IaC',
        items: [
          { text: 'Terraform', link: '/IaC/Terraform' },
          { text: 'Pulumi', link: '/IaC/Pulumi' }
        ],
        collapsed: false
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
