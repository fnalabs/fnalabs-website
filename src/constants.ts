import type { IBrandLink, INavLink } from '../@mf-types/fnalabs_assets/Navbar'
import type { ISocialLink } from '../@mf-types/fnalabs_assets/SocialBrand'

export const BRAND_LINK: IBrandLink = { href: '/', label: 'FnA Labs', brandIcon: 'FnALabsInverted' }

export const ABOUT_LINK: INavLink = { href: '/about', label: 'About' }
export const PROJECTS_LINK: INavLink = { href: '/projects', label: 'Projects' }
export const SUPPORT_LINK: INavLink = { href: '/support', label: 'Support' }

export const COOKIE_LINK: INavLink = { href: '/cookie', label: 'Cookie' }
export const PRIVACY_LINK: INavLink = { href: '/privacy', label: 'Privacy' }

export const GITHUB_LINK: ISocialLink = { href: 'https://github.com/fnalabs', label: 'Github projects', style: 'brands', name: 'github' }
export const NPM_LINK: ISocialLink = { href: 'https://www.npmjs.com/org/fnalabs', label: 'NPM projects', style: 'brands', name: 'npm' }
export const EMAIL_LINK: ISocialLink = { href: 'mailto:contact@fnalabs.com', label: 'Email our team', style: 'regular', name: 'envelope' }

export const BRAND_LINK_LIST = [BRAND_LINK]
export const NAV_LINK_LIST = [
  PROJECTS_LINK,
  ABOUT_LINK,
  SUPPORT_LINK,
]
export const POLICY_LINK_LIST = [
  COOKIE_LINK,
  PRIVACY_LINK,
]
export const SOCIAL_LINK_LIST = [
  GITHUB_LINK,
  NPM_LINK,
  EMAIL_LINK,
]
