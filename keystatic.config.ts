import { collection, config, fields, singleton } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';
import { STORAGE_CONFIGS, STORAGE_KINDS } from './src/utils/constants';

const KIND = import.meta.env.DEV ? STORAGE_KINDS.LOCAL : STORAGE_KINDS.GITHUB;

const PROJECT_CASE_STUDY_COMPONENTS = {
  challenge: wrapper({
    label: 'Challenge',
    description: 'Frame the customer, product, or technical problem.',
    schema: {
      title: fields.text({
        label: 'Section title',
        defaultValue: 'Challenge',
        validation: { isRequired: true },
      }),
    },
  }),
  solution: wrapper({
    label: 'Solution',
    description: 'Describe the implementation approach and trade-offs.',
    schema: {
      title: fields.text({
        label: 'Section title',
        defaultValue: 'Solution',
        validation: { isRequired: true },
      }),
    },
  }),
  result: wrapper({
    label: 'Result',
    description: 'Capture outcomes, metrics, and lessons learned.',
    schema: {
      title: fields.text({
        label: 'Section title',
        defaultValue: 'Result',
        validation: { isRequired: true },
      }),
    },
  }),
};

export default config({
  storage: STORAGE_CONFIGS[KIND],
  collections: {
    articles: collection({
      label: 'Articles',
      path: 'src/content/articles/*',
      entryLayout: 'content',
      format: {
        contentField: 'content',
      },
      columns: ['title', 'isDraft', 'pubDate'],
      slugField: 'title',
      schema: {
        description: fields.text({
          label: 'Article description',
          description: 'Meta description for previews and SEO. Keep it under 160 characters.',
          validation: {
            length: { max: 160 },
            isRequired: true,
          },
        }),
        isDraft: fields.checkbox({
          label: 'Is draft?',
          defaultValue: true,
        }),
        pubDate: fields.date({
          label: 'Publication date',
        }),
        tags: fields.array(fields.text({
          label: 'Tag',
          defaultValue: 'General',
          validation: { isRequired: true },
        }), {
          label: 'Tags',
          description: 'Add short topic labels for filtering and discovery.',
          itemLabel: (props) => props.value,
          validation: {
            length: { min: 1 },
          },
        }),
        title: fields.slug({
          name: {
            label: 'Article title',
            validation: { isRequired: true },
          },
          slug: {
            label: 'Article slug',
            description: 'Generated from the title when the article is created. Avoid changing it after publishing.',
            validation: {
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message: 'Use lowercase letters, numbers, and hyphens only.',
              },
            },
          },
        }),
        relatedProject: fields.text({
          label: 'Related project slug',
          description: 'Allows you to link a project directly to an article',
          validation: { isRequired: false },
        }),
        content: fields.markdoc({
          label: 'Article content',
          description: 'Write the article body with Markdoc.',
          extension: 'mdoc',
          options: {
            image: {
              directory: 'src/assets/articles',
              publicPath: '../../assets/articles/',
            },
          },
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      path: 'src/content/projects/*',
      entryLayout: 'content',
      format: {
        contentField: 'content',
      },
      columns: ['title', 'status', 'featured', 'publishDate'],
      slugField: 'title',
      schema: {
        description: fields.text({
          label: 'Project description',
          description: 'Short summary for cards and SEO. Keep it under 160 characters.',
          validation: {
            length: { max: 160 },
            isRequired: true,
          },
        }),
        publishDate: fields.date({
          label: 'Publish date',
        }),
        title: fields.slug({
          name: {
            label: 'Project title',
            validation: { isRequired: true },
          },
          slug: {
            label: 'Project slug',
            description: 'Generated from the title when the project is created. Avoid changing it after publishing.',
            validation: {
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message: 'Use lowercase letters, numbers, and hyphens only.',
              },
            },
          },
        }),
        featured: fields.checkbox({
          label: 'Featured?',
          defaultValue: false,
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'In Progress', value: 'in-progress' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
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
          validation: { isRequired: true },
        }),
        stack: fields.array(fields.text({
          label: 'Technology',
          validation: { isRequired: true },
        }), {
          label: 'Stack',
          itemLabel: (props) => props.value,
          validation: {
            length: { min: 1 },
          },
        }),
        coverAlt: fields.text({
          label: 'Cover image alt text',
          validation: { isRequired: true },
        }),
        coverImage: fields.image({
          label: 'Cover Image',
          description: 'Project thumbnail (min 1000px wide for high-density displays).',
          directory: 'src/assets/projects',
          publicPath: '../../assets/projects/',
          validation: { isRequired: true },
        }),
        content: fields.markdoc({
          label: 'Case study',
          description: 'Use the Challenge, Solution, and Result blocks to structure each project story.',
          extension: 'mdoc',
          components: PROJECT_CASE_STUDY_COMPONENTS,
          options: {
            image: {
              directory: 'src/assets/projects',
              publicPath: '../../assets/projects/',
            },
          },
        }),
      },
    }),
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
