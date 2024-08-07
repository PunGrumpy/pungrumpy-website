'use client'

import * as Sentry from '@sentry/nextjs'
import { Metadata } from 'next'
import NextError from 'next/error'
import { useEffect } from 'react'

export const metadata: Metadata = {
  title: 'Error',
  description: 'An error occurred!'
}

interface ErrorWithDigest extends Error {
  digest?: string
}

export default function GlobalError({ error }: { error: ErrorWithDigest }) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  )
}
