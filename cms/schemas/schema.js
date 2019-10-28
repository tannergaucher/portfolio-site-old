import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import myImage from './my-image'
import imageTag from './image-tag'
import imageLocation from './image-location'
import country from './country'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([myImage, imageTag, imageLocation, country]),
})
