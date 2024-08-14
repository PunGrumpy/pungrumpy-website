'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

import { SlideInView } from '@/components/animation/slide-in-view'
import { YearButton } from '@/components/button/year-button'
import { EmptyCard } from '@/components/card/empty-card'
import { getGitHubYears } from '@/lib/utils'

export const GitHubCalendarSection: React.FC = () => {
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
    setServerTheme(scheme)
  }, [scheme])

  const today = new Date().getFullYear()
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME!
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR!)
  const years = getGitHubYears(joinYear)

  return (
    <SlideInView className="flex w-full max-w-6xl flex-wrap items-center gap-14 rounded-3xl">
      {username || !joinYear ? (
        <>
          <div className="flex flex-1 flex-col rounded-lg border border-border bg-card p-9">
            <GitHubCalendar
              username={username}
              colorScheme={serverTheme}
              blockSize={13}
              year={calendarYear}
            />
          </div>
          <div className="flex flex-1 flex-col space-y-4">
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
        </>
      ) : (
        <EmptyCard
          title="Unable to load Contribution Graph"
          message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
        />
      )}
    </SlideInView>
  )
}
