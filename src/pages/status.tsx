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
          <p className="flex py-2">
            <p className="mr-6 pt-1 text-xs">{status.date}</p>
            <p className="">{status.title}</p>
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
    date: status.properties.Date.date.start,
  }))

  return {
    props: {
      statuses,
    },
  }
}
export default StatusPage
