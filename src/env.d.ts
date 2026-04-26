export interface Project {
  previewImage: string
  title: string
  url: string
  description: string
  technologies: string[]
}

export const TechnologiesColors = {
  html: 'bg-[hsl(18,87%,55%)]/70 border-[hsl(18,87%,15%)]',
  css: 'bg-[hsl(270,50%,40%)]/70 border-[hsl(270,50%,05%)]',
  typescript: 'bg-[hsl(212,87%,58%)]/70 border-[hsl(212,87%,18%)]',
  ejs: 'bg-[hsl(60,52%,49%)]/70 text-gray-100 border-[hsl(60,52%,19%)]',
  mongodb: 'bg-[hsl(121,37%,45%)]/70 border-[hsl(121,37%,15%)]',
  git: 'bg-[hsl(14,91%,54%)]/70 border-[hsl(14,91%,14%)]',
  expressjs: 'bg-gray-900 border-gray-950',
  nodejs: 'bg-[hsl(122,39%,49%)]/70 border-[hsl(122,39%,19%)]',
  astrojs: 'bg-[hsl(324,75%,56%)]/70 border-[hsl(324,75%,16%)]',
} as const

export type Technology = keyof typeof TechnologiesColors

export type Icon = 'github' | 'linkedin'
