import type { Links, Site, SiteConfig, Socials } from "./types"


export const SITE: Site = {
    TITLE: {
        uk: 'DevOpSick',
        en: 'DevOpSick',
        ru: 'Blog',
        de: 'Blog',
        es: 'Blog',
        fr: 'Blog',
        pl: 'Blog'
    },
    DESCRIPTION: {
        uk: 'Dream Project Product',
        en: 'Dream Project Product',
        ru: 'Blog',
        de: 'Blog',
        es: 'Blog',
        fr: 'Blog',
        pl: 'Blog'
    },
    AUTHOR: "Hrihorii ilin <devopsick@pm.me>"
}

export const siteConfig: SiteConfig = {
      author: 'Hrihorii Ilin', // Site author
      title: 'Astro Theme OpenBlog', // Site title.
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
      shareMessage: 'Share this post', // Message to share a post on social media
      paginationSize: 6,
      url: 'https://devopsick-web.pages.dev',
      lang: "",
      ogLocale: ""
  }

  export const LINKS: Links = [
	{
		TEXT: {
			uk: 'Home',
			en: 'Home',
			ru: 'Home',
			de: 'Home',
			es: 'Home',
			fr: 'Home',
			pl: 'Home'
		},
		HREF: '/'
	},
	{
		TEXT: {
			uk: 'Work',
			en: 'Work',
			ru: 'Work',
			de: 'Work',
			es: 'Work',
			fr: 'Work',
			pl: 'Work'
		},
		HREF: '/work'
	},
	{
		TEXT: {
			uk: 'Blog',
			en: 'Blog',
			ru: 'Blog',
			de: 'Blog',
			es: 'Blog',
			fr: 'Blog',
			pl: 'Blog'
		},
		HREF: '/blog'
	},
	{
		TEXT: {
			uk: 'Projects',
			en: 'Projects',
			ru: 'Projects',
			de: 'Projects',
			es: 'Projects',
			fr: 'Projects',
			pl: 'Projects'
		},
		HREF: '/projects'
	}
]

// Socials
export const SOCIALS: Socials = [
	{
		NAME: 'Email',
		ICON: 'email',
		TEXT: 'devopsick@pm.me',
		HREF: 'mailto:devopsick@pm.me'
	},
	{
		NAME: 'Github',
		ICON: 'github',
		TEXT: 'DevOpSick',
		HREF: 'https://github.com/Frikadellios'
	},
	{
		NAME: 'Linkedin',
		ICON: 'linkedin',
		TEXT: 'DevOpSick',
		HREF: 'https://linkedin.com/Frikadellios'
	},
	{
		NAME: 'LinkedIn',
		ICON: 'linkedin',
		TEXT: 'markhorn-dev',
		HREF: 'https://www.linkedin.com/in/markhorn-dev/'
	},
	{
		NAME: 'Twitter',
		ICON: 'twitter-x',
		TEXT: 'DevOpSick',
		HREF: 'https://twitter.com/devopsick'
	}
]
