export default {
  name: 'myImage',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'myImage',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Image slug',
      type: 'slug',
      options: {
        source: 'caption',
        maxLength: 96,
      },
    },
    {
      name: 'datePosted',
      title: 'Date Posted',
      type: 'datetime',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'tag' }],
    },
  ],
}
