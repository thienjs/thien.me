import React from 'react'
import type { GetStaticProps, GetServerSideProps } from 'next'
import { useState } from 'react'

import { getStatus } from '~/lib/notion'
import axios from 'axios'
import { Title, Description } from '~/components/ui/typography'

const StatusPage = ({ statuses }) => {
  return (
    <p>
      <Title>Status</Title>
      <p className="">
        {statuses.map((status) => (
          <p className="flex p-1">
            <p className="flex-none text-xs mt-1.5 pr-4">{status.time}</p>
            <p className="flex">{status.title}</p>
          </p>
        ))}
      </p>
    </p>
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
