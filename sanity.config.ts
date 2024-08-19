'use client'

import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { cloudinaryAssetSourcePlugin } from 'sanity-plugin-cloudinary'

import { Icons } from '@/components/icons'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schema'

export default defineConfig({
  name: 'PunGrumpy',
  title: 'PunGrumpy Studio',
  basePath: '/studio',
  icon: Icons.LogoPunGrumpy,
  projectId,
  dataset,
  schema,
  plugins: [
    codeInput(),
    structureTool(),
    cloudinaryAssetSourcePlugin(),
    visionTool({ defaultApiVersion: apiVersion })
  ]
})
