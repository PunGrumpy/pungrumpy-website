import { Icons } from '@/components/icons'
import { Card, CardContent } from '@/components/ui/card'

interface EmptyCardProps {
  value?: string
  icon?: React.ReactNode
  title?: string
  message?: string
}

export const EmptyCard: React.FC<EmptyCardProps> = ({
  value = '',
  icon = <Icons.logo className="size-16" />,
  title,
  message
}) => {
  const defaultTitle = `No ${value} Found`
  const defaultMessage = `There are no ${value.toLowerCase()} available at this time. Check back again.`

  return (
    <Card className="w-full border-dashed">
      <CardContent className="flex flex-col items-center py-8 text-center">
        <div className="text-4xl">{icon}</div>
        <h2 className="mb-3">{title ?? defaultTitle}</h2>
        <p className="mb-1 max-w-sm text-muted-foreground">
          {message ?? defaultMessage}
        </p>
      </CardContent>
    </Card>
  )
}
