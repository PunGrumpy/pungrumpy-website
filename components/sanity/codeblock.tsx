import { Refractor, registerLanguage } from 'react-refractor'
import bash from 'refractor/lang/bash'
import css from 'refractor/lang/css'
import graphql from 'refractor/lang/graphql'
import java from 'refractor/lang/java'
import js from 'refractor/lang/javascript'
import json from 'refractor/lang/json'
import jsx from 'refractor/lang/jsx'
import markdown from 'refractor/lang/markdown'
import html from 'refractor/lang/markup'
import python from 'refractor/lang/python'
import scss from 'refractor/lang/scss'
import sql from 'refractor/lang/sql'
import tsx from 'refractor/lang/tsx'
import ts from 'refractor/lang/typescript'
import yaml from 'refractor/lang/yaml'

import { Clipboard } from '@/components/sanity/clipboard'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

registerLanguage(js)
registerLanguage(ts)
registerLanguage(jsx)
registerLanguage(tsx)
registerLanguage(sql)
registerLanguage(bash)
registerLanguage(markdown)
registerLanguage(css)
registerLanguage(scss)
registerLanguage(python)
registerLanguage(html)
registerLanguage(yaml)
registerLanguage(graphql)
registerLanguage(json)
registerLanguage(java)

interface CodeBlockProps {
  value: {
    code: string
    language: string
    filename?: string | null
  }
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ value }) => {
  return (
    <Card className="my-6">
      <CardHeader className="flex flex-row items-center justify-between px-4 py-2">
        {value.filename && (
          <p className="text-sm text-muted-foreground">{value.filename}</p>
        )}
        <Clipboard content={value.code} />
      </CardHeader>
      <CardContent className="p-0">
        <Refractor
          language={value.language ?? 'jsx'}
          value={value.code}
          className="text-sm tracking-normal"
        />
      </CardContent>
    </Card>
  )
}
