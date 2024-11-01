'use client'

import * as React from 'react'

import { type EducationItemProps } from '@/types/about'

export const EducationItem: React.FC<EducationItemProps> = ({
  school,
  degree,
  period,
  description
}) => (
  <div className="border-t border-border py-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto]">
      <div>
        <h3 className="mb-1 text-xl font-bold">{school}</h3>
        <h4 className="mb-4 text-lg">{degree}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-right text-muted-foreground">{period}</div>
    </div>
  </div>
)
