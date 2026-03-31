import type { SchemaTypeDefinition } from 'sanity'

import { localeString, localeText } from './localeHelper'
import { brandType } from './brand'
import { pressReleaseType } from './pressRelease'
import { brandAssetType } from './brandAsset'
import { galleryType } from './gallery'
import { contactType } from './contact'
import { radioType } from './radio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,
    brandType,
    galleryType,
    pressReleaseType,
    brandAssetType,
    contactType,
    radioType,
  ],
}
