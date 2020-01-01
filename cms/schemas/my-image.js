export default {
  name: 'myImage',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'myImage',
      title: 'Image',
      type: 'image',
      options: {
        metadata: ['exif', 'location'],
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96,
        source: 'caption',
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'imageTag' } }],
    },
  ],
}
