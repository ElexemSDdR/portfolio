export type AnimateSide = 'animate-fade-in-right' | 'animate-fade-in-left'

export const TechnologiesColors = {
  html: 'bg-html-bg text-html-fg font-semibold ',
  css: 'bg-css-bg text-css-fg font-semibold ',
  typescript: 'bg-typescript-bg text-typescript-fg font-semibold ',
  ejs: 'bg-ejs-bg text-ejs-fg font-semibold ',
  mongodb: 'bg-mongodb-bg text-mongodb-fg font-semibold ',
  git: 'bg-git-bg text-git-fg font-semibold ',
  expressjs: 'bg-gray-900 text-gray-200 border-gray-950 font-semibold ',
  nodejs: 'bg-nodejs-bg text-nodejs-fg font-semibold ',
  astrojs: 'bg-astrojs-bg text-astrojs-fg font-semibold ',
} as const

export type Icon =
  | 'github'
  | 'linkedin'
  | 'print-cv'
  | 'translate'
  | 'options'
  | 'selector'
  | 'sun'
  | 'moon'
  | 'sistem-config-theme'

export type Technology = keyof typeof TechnologiesColors

export interface Project {
  id: string
  previewImage: string
  title: string
  url: string
  description: string
  technologies: string[]
  github?: string
}

export interface Experience {
  id: string
  jobName: string
  date: string
  jobPosition: string
}

export type Schema = 'project' | 'experience'

export type Languages = 'en' | 'es'

export type Theme = 'dark' | 'light' | 'system'

export type SocialNetwork = 'github' | 'linkedin'

export type Mail = 'gmail' | 'protonmail'
export interface AboutMeContent {
  slug: string
  name: string
  surname: string
  socialMedia: Record<SocialNetwork, string>
  mail: Record<Mail, string>
  position: string
  phoneNumber: string
  content: string
}
