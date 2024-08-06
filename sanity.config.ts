'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { Icons } from '@/components/icons'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schema'

export default defineConfig({
  name: 'PunGrumpy',
  title: 'PunGrumpy Studio',
  basePath: '/studio',
  icon: Icons.logo,
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })]
})
