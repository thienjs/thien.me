'use client'

import { analytics } from '~/utils/analytics'
import { BarChart, Card } from '@tremor/react'
import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react'
import ReactCountryFlag from 'react-country-flag'

interface AnalyticsDashboardProps {
  avgVisitorsPerDay: string
  amtVisitorsToday: number
  timeseriesPageviews: Awaited<ReturnType<typeof analytics.retrieveDays>>
  topCountries: [string, number][]
}

const Badge = ({ percentage }: { percentage: number }) => {
  const isPositive = percentage > 0
  const isNeutral = percentage === 0
  const isNegative = percentage < 0

  if (isNaN(percentage)) return null

  const positiveClassname = 'bg-green-900/25 text-green-400 ring-green-400/25'
  const neutralClassname = 'bg-zinc-900/25 text-zinc-400 ring-zinc-400/25'
  const negativeClassname = 'bg-red-900/25 text-red-400 ring-red-400/25'

  return (
    <span
      className={`inline-flex gap-1 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
        isPositive
          ? positiveClassname
          : isNeutral
          ? neutralClassname
          : negativeClassname
      }`}>
      {isPositive ? <ArrowUpRight className='h-3 w-3' /> : null}
      {isNeutral ? <ArrowRight className='h-3 w-3' /> : null}
      {isNegative ? <ArrowDownRight className='h-3 w-3' /> : null}
      {percentage.toFixed(0)}%
    </span>
  )
}

const AnalyticsDashboard = ({
  avgVisitorsPerDay,
  amtVisitorsToday,
  timeseriesPageviews,

}: AnalyticsDashboardProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6'>
        <Card className='w-full'>
          <p className='text-tremor-default text-dark-tremor-content'>
            Avg. visitors/day
          </p>
          <p className='text-3xl text-dark-tremor-content-strong font-semibold'>
            {avgVisitorsPerDay}
          </p>
        </Card>
        <Card className='w-full'>
          <p className='flex gap-2.5 items-center text-tremor-default text-dark-tremor-content'>
            Visitors today
            <Badge
              percentage={
                (amtVisitorsToday / Number(avgVisitorsPerDay) - 1) * 100
              }
            />
          </p>
          <p className='text-3xl text-dark-tremor-content-strong font-semibold'>
            {amtVisitorsToday}
          </p>
        </Card>
      </div>

      <Card className='flex flex-col sm:grid grid-cols-4 gap-6'>
        <h2 className='w-full text-dark-tremor-content-strong text-center sm:left-left font-semibold text-xl'>
          This weeks top visitors:
        </h2>
        <div className='col-span-3 flex items-center justify-between flex-wrap gap-8'>
        
        </div>
      </Card>

      <Card>
        {timeseriesPageviews ? (
          <BarChart
            allowDecimals={false}
            showAnimation
            data={timeseriesPageviews.map((day) => ({
              name: day.date,
              Visitors: day.events.reduce((acc, curr) => {
                return acc + Object.values(curr)[0]!
              }, 0),
            }))}
            categories={['Visitors']}
            index='name'
          />
        ) : null}
      </Card>
    </div>
  )
}

export default AnalyticsDashboard