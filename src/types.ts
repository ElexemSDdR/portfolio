export type AnimateSide = 'animate-fade-in-right' | 'animate-fade-in-left'

export const TechnologiesColors = {
  html: 'bg-[hsl(18,87%,55%)]/10 text-[hsl(18,87%,70%)] ',
  css: 'bg-[hsl(270,50%,40%)]/10 text-[hsl(270,50%,70%)] ',
  typescript: 'bg-[hsl(212,87%,58%)]/10 text-[hsl(212,87%,70%)] ',
  ejs: 'bg-[hsl(60,52%,49%)]/10 text-[hsl(60,52%,70%)] ',
  mongodb: 'bg-[hsl(121,37%,45%)]/10 text-[hsl(121,37%,70%)] ',
  git: 'bg-[hsl(14,91%,54%)]/10 text-[hsl(14,91%,70%)] ',
  expressjs: 'bg-gray-900 text-gray-200 border-gray-950',
  nodejs: 'bg-[hsl(122,39%,49%)]/10 text-[hsl(122,39%,70%)] ',
  astrojs: 'bg-[hsl(324,75%,56%)]/10 text-[hsl(324,75%,70%)] ',
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
