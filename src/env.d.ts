export interface Project {
  previewImage: string
  title: string
  url: string
  description: string
  technologies: string[]
}

export const TechnologiesColors = {
  html: 'bg-[#F06529]/70 border-[#F06529]',
  css: 'bg-[#663399]/70 border-[#663399]',
  typescript: 'bg-[#358ef1]/70 border-[#358ef1]',
  ejs: 'bg-[#c0c03c]/70 text-gray-100 border-[#c0c03c]',
  mongodb: 'bg-[#499D4A]/70 border-[#499D4A]',
  git: 'bg-[#F4511E]/70 border-[#F4511E]',
  expressjs: 'bg-gray-900 border-gray-950',
  nodejs: 'bg-[#4CAF50]/70 border-[#4CAF50]',
  astrojs: 'bg-[#e3399f]/70 border-[#e3399f]',
} as const

export type Technology = keyof typeof TechnologiesColors
