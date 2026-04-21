import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
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
  },
});