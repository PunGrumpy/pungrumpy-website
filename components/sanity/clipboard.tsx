'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

interface ClipboardProps {
  content: string
}

export const Clipboard: React.FC<ClipboardProps> = ({ content }) => {
  const [isCopied, setIsCopied] = useState(false)
  const { toast } = useToast()

  function handleClipboard() {
    navigator.clipboard.writeText(content)
    setIsCopied(true)

    toast({
      description: 'Copied to clipboard!'
    })

    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClipboard}
      className="size-8"
    >
      {!isCopied ? (
        <Copy className="size-4" />
      ) : (
        <Check className="size-4 text-primary" />
      )}
      <span className="sr-only">Copy code</span>
    </Button>
  )
}
