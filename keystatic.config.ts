import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    articles: {
      label: 'Articles',
      slugField: 'title',
      schema: {
        description: fields.text({
          label: 'Article description',
        }),
        isDraft: fields.checkbox({
          label: 'Is draft?',
          defaultValue: true,
        }),
        pubDate: fields.date({
          label: 'Publication date',
        }),
        tags: fields.array(fields.text({
          label: 'Tags',
          defaultValue: 'General',
        })),
        title: fields.text({
          label: 'Article title',
        }),
        relatedProject: fields.text({
          label: 'Related project slug',
          description: 'Allows you to link a project directly to an article',
          validation: { isRequired: false },
        }),
      },
    },
    projects: {
      label: 'Projects',
      slugField: 'title',
      schema: {
        description: fields.text({
          label: 'Project description',
        }),
        publishDate: fields.date({
          label: 'Publish date',
        }),
        title: fields.text({
          label: 'Project title',
        }),
        featured: fields.checkbox({
          label: 'Featured?',
          defaultValue: false,
        }),
        status: fields.multiselect({
          label: 'Status',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'In Progress', value: 'in-progress' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: ['draft'],
        }),
        githubUrl: fields.url({
          label: 'GitHub URL',
          validation: { isRequired: false },
        }),
        liveUrl: fields.url({
          label: 'Live URL',
          validation: { isRequired: false },
        }),
        role: fields.text({
          label: 'Role',
        }),
        stack: fields.array(fields.text({
          label: 'Stack',
        })),
        coverAlt: fields.text({
          label: 'Cover image alt text',
        }),
        coverImage: fields.image({
          label: 'Cover image',
        }),
      },
    },
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage/',
      schema: {
        hero: fields.object({
          description: fields.text({
            label: 'Hero description',
          }),
          title: fields.text({
            label: 'Hero title',
          }),
        }),
      },
    }),
    settings: singleton({
      label: 'Settings',
      path: 'src/content/settings/',
      schema: {
        description: fields.text({
          label: 'Site description',
        }),
        title: fields.text({
          label: 'Site title',
        }),
      },
    }),
  },
});
