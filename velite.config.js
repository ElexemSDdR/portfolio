import { defineCollection, defineConfig, s } from 'velite'

// `s` extends Zod with some custom schemas

const about = defineCollection({
  name: 'About', // collection type name
  pattern: 'about-me/**/*.md', // content files glob pattern
  schema: s
    .object({
      slug: s.path(), // validate format, unique in posts collection
      name: s.string().max(20),
      surname: s.string().max(60),
      socialMedia: s.object({
        github: s.string().url(),
        linkedin: s.string().url(),
      }),
      mail: s.object({
        gmail: s.string().email(),
        protonmail: s.string().email(),
      }),
      position: s.string(),
      phoneNumber: s.string(),
      content: s.markdown(), // transform markdown to html
    })
    // more additional fields (computed fields)
    .transform((data) => ({ ...data, permalink: `/about/${data.slug}` })),
})

export default defineConfig({
  collections: { about },
})
