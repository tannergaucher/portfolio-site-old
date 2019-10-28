export default {
  name: 'imageLocation',
  title: 'Image Location',
  type: 'document',
  fields: [
    {
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: { type: 'country' },
    },
    {
      name: 'place',
      title: 'Place',
      type: 'string',
    },
  ],
}
