import { MouseEventHandler } from 'react'

import { Button } from '@/components/ui/button'

interface YearButtonProps {
  year: number
  currentYear: number | undefined
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const YearButton: React.FC<YearButtonProps> = ({
  year,
  currentYear,
  onClick
}) => {
  return (
    <Button
      onClick={onClick}
      variant={year === currentYear ? 'secondary' : 'outline'}
      className="text-sm"
      title={`View Graph for the year ${year}`}
    >
      {year}
    </Button>
  )
}
