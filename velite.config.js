import { defineCollection, defineConfig, s } from 'velite'

// `s` extends Zod with some custom schemas

const translateAbout = defineCollection({
  name: 'Translate', // collection type name
  pattern: 'translate/**/*.md', // content files glob pattern
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
    .transform((data) => ({ ...data, permalink: `/translate/${data.slug}` })),
})

const translatePageContent = defineCollection({
  name: 'Translate', // collection type name
  pattern: 'translate/**/*.json', // content files glob pattern
  schema: s
    .object({
      slug: s.path(), // validate format, unique in posts collection
      header: s.object({
        mainLinks: s.array(s.string()),
        options: s.object({
          translate: s.object({
            name: s.string(),
            children: s.array(s.string()),
          }),
          cv: s.object({
            name: s.string(),
          }),
          theme: s.object({
            name: s.string(),
            children: s.array(s.string()),
          }),
        }),
      }),
      sections: s.object({
        projects: s.object({
          title: s.string(),
        }),
        experience: s.object({
          title: s.string(),
        }),
        contact: s.object({
          title: s.string(),
        }),
      }),
    })
    // more additional fields (computed fields)
    .transform((data) => ({ ...data, permalink: `/translate/${data.slug}` })),
})

export default defineConfig({
  collections: { translateAbout, translatePageContent },
})
