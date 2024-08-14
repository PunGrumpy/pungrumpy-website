import { Icons } from '@/components/icons'
import { Card, CardContent } from '@/components/ui/card'

interface EmptyCardProps {
  value?: string
  icon?: React.ReactNode
  title?: string
  message?: string
}

export const EmptyCard: React.FC<EmptyCardProps> = ({
  value,
  icon,
  title,
  message
}) => {
  return (
    <Card className="w-full border-dashed">
      <CardContent className="flex flex-col items-center py-8 text-center">
        <div className="text-4xl">
          {icon || <Icons.logo className="size-16" />}
        </div>
        <h2 className="mb-3">{title ?? `No ${value} Found`}</h2>
        <p className="mb-1 max-w-sm text-muted-foreground">
          {message ??
            `There are no ${
              value && value.toLowerCase()
            } available at this time. Check back
          again.`}
        </p>
      </CardContent>
    </Card>
  )
}
