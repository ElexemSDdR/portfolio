export type AnimateSide = 'animate-fade-in-right' | 'animate-fade-in-left'

export const TechnologiesColors = {
  html: 'bg-html-bg text-html-fg font-extrabold ',
  css: 'bg-css-bg text-css-fg font-extrabold ',
  typescript: 'bg-typescript-bg text-typescript-fg font-extrabold ',
  ejs: 'bg-ejs-bg text-ejs-fg font-extrabold ',
  mongodb: 'bg-mongodb-bg text-mongodb-fg font-extrabold ',
  git: 'bg-git-bg text-git-fg font-extrabold ',
  expressjs: 'bg-expressjs-bg text-expressjs-fg border-expressjs-bg font-extrabold ',
  nodejs: 'bg-nodejs-bg text-nodejs-fg font-extrabold ',
  astrojs: 'bg-astrojs-bg text-astrojs-fg font-extrabold ',
} as const

export type Icon =
  | 'github'
  | 'linkedin'
  | 'cv'
  | 'translate'
  | 'options'
  | 'selector'
  | 'light'
  | 'dark'
  | 'system'
  | 'gmail'
  | 'whatsapp'

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

export type Language = 'en' | 'es'

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

type Option<T extends string> = Record<
  T,
  {
    name: string
    children?: string[]
  }
>

type Section<T extends string> = Record<
  T,
  {
    title: string
  }
>

export type OptionsHeader = Option<'translate' | 'cv' | 'theme'>

export type Sections = Section<'projects' | 'experience' | 'contact'>

export interface PageContent {
  slug: string
  header: {
    mainLinks: string[]
    options: OptionsHeader
  }
  sections: Sections
}

export interface TranslatedContent {
  about: AboutMeContent
  pageContent: PageContent
}
