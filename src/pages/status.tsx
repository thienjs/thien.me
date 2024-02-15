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
 

import { getStatus } from '~/lib/notion'
import axios from 'axios'
import { Title, Description } from '~/components/ui/typography'

const StatusPage = ({ statuses }) => {
  return (
    <div>
      <Title>Status</Title>
      <div className="">
        {statuses.map((status) => (
          <p className="flex p-1">
            <p className="flex-none text-xs mt-1.5 pr-4">{status.time}</p>
            <p className="flex">{status.title}</p>
          </p>
        ))}
      </div>
      <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
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
