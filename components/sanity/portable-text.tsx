import { PortableTextComponents } from '@portabletext/react'
import { ExternalLink, Quote } from 'lucide-react'

import { CodeBlock } from '@/components/sanity/codeblock'
import { HashScroll } from '@/components/sanity/hash-scroll'
import { PortableImage } from '@/components/sanity/portable-image'
import { Quiz } from '@/components/sanity/quiz'
import { RefLinkSection } from '@/components/section/reflink-section'
import { Card, CardContent } from '@/components/ui/card'
import { QuizValueInterface, TableInterface } from '@/types'

export const CustomPortableText: PortableTextComponents = {
  types: {
    image: PortableImage,
    code: CodeBlock,
    quiz: ({ value }: { value: QuizValueInterface }) => <Quiz value={value} />
  },

  block: {
    normal: ({ children }) => (
      <p className="mb-6 mt-2 text-base leading-7">{children}</p>
    ),
    h2: ({ children }) => (
      <h2
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, '-')
          .replaceAll(/--+/g, '-')
          .replace(/^-|-$/g, '')}
        className="group relative my-8 text-3xl font-bold tracking-tight text-foreground lg:text-4xl"
      >
        <span className="absolute -left-4 hidden text-muted-foreground group-hover:sm:inline-block lg:-left-5">
          #
        </span>
        <HashScroll text={children} />
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, '-')
          .replaceAll(/--+/g, '-')
          .replace(/^-|-$/g, '')}
        className="group relative my-6 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl lg:font-bold"
      >
        <span className="absolute -left-4 hidden text-muted-foreground group-hover:sm:inline-block lg:-left-5">
          #
        </span>
        <HashScroll text={children} />
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, '-')
          .replaceAll(/--+/g, '-')
          .replace(/^-|-$/g, '')}
        className="group relative mb-2 mt-4 inline-block text-xl font-semibold tracking-tight text-foreground"
      >
        <span className="absolute -left-4 hidden text-muted-foreground group-hover:sm:inline-block lg:-left-6">
          #
        </span>
        <HashScroll text={children} />
      </h4>
    ),
    blockquote: ({ children }) => (
      <Card className="my-8">
        <CardContent className="relative overflow-hidden p-4 pr-12 text-lg tracking-tight lg:py-6 lg:pl-6">
          <Quote className="absolute -right-2 -top-2 size-12 text-muted-foreground" />
          {children}
        </CardContent>
      </Card>
    )
  },
  marks: {
    em: ({ children }) => <em className="font-medium italic">{children}</em>,
    strong: ({ children }) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    link: ({ children, value }) => {
      return (
        <RefLinkSection href={value?.href}>
          {children}{' '}
          <ExternalLink className="inline size-4" aria-hidden="true" />
        </RefLinkSection>
      )
    },
    code: ({ children }) => (
      <code className="rounded-sm bg-muted px-1 py-[0.15rem] font-medium text-primary">
        {children}
      </code>
    )
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-5 mt-5 list-disc space-y-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-5 mt-5 list-decimal space-y-4">{children}</ol>
    )
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>
  }
}
