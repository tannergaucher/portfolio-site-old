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
      name: 'slug',
      title: 'Image Slug',
      type: 'slug',
      options: {
        maxLength: 96,
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
