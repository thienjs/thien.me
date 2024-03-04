import React from 'react'
import type { GetStaticProps, GetServerSideProps } from 'next'
import { useState } from 'react'
import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import { useThemeContext } from '~/hooks/useTheme'

import { getStatus } from '~/lib/notion'
import axios from 'axios'
import { Title, Description } from '~/components/ui/typography'

const StatusPage = ({ statuses }) => {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <>
      <Title>Status</Title>
      <Carousel
        className=" flex h-60 w-full items-center justify-center rounded-md"
        style={{
          backgroundColor: systemTheme.background.secondary,
          borderColor: systemTheme.text.accent2,
        }}
      >
        <CarouselContent>
          {statuses.map((status) => (
            <CarouselItem className="mx-auto my-auto max-w-7xl px-8 text-center">
              <p className="">{status.title}</p>
              <p className="p-6">{status.time}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const statusdata = await getStatus(process.env.NOTION_STATUS_ID)

  const statuses = statusdata.map((status: any) => ({
    id: status.id,
    title: status.properties.Title.title[0].plain_text,
    time: status.properties.Time.created_time.slice(5, 10),
  }))

  return {
    props: {
      statuses,
    },
  }
}
export default StatusPage
