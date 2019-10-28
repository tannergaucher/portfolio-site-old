export default {
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Country Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
}
