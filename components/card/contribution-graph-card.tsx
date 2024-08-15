'use client'

import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

import { YearButton } from '@/components/button/year-button'
import { EmptyCard } from '@/components/card/empty-card'
import { getGitHubYears } from '@/lib/utils'

export const ContributionGraphCard: React.FC = () => {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  )
  const { theme, systemTheme } = useTheme()
  const [serverTheme, setServerTheme] = useState<'light' | 'dark' | undefined>(
    undefined
  )

  const scheme =
    theme === 'light' ? 'light' : theme === 'dark' ? 'dark' : systemTheme

  useEffect(() => {
    setServerTheme(scheme as 'light' | 'dark' | undefined)
  }, [scheme])

  const today = new Date().getFullYear()
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR)
  const years = getGitHubYears(joinYear)

  if (!username || !joinYear) {
    return (
      <EmptyCard
        icon={<GitHubLogoIcon className="size-16" />}
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    )
  }

  return (
    <div className="flex flex-col space-y-4 xl:flex-row xl:space-x-14 xl:space-y-0">
      <div className="max-h-fit max-w-xs overflow-x-auto rounded-lg border border-border bg-card p-8 md:max-w-[60rem] xl:max-w-fit">
        <GitHubCalendar
          username={username}
          colorScheme={serverTheme}
          blockSize={14}
          year={calendarYear}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-4 xl:flex-col">
        {years.slice(0, 5).map(year => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? undefined : year)
            }
          />
        ))}
      </div>
    </div>
  )
}
