import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import myImage from './my-image'
import imageTag from './image-tag'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([myImage, imageTag]),
})
