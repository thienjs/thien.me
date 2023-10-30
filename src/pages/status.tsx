import React from 'react'
import type { GetStaticProps } from 'next'
import { useState } from 'react'

import { getStatus } from '~/lib/notion'
import axios from 'axios'
import { Title, Description } from '~/components/ui/typography'

const StatusPage = ({ statuses }) => {

  return (
    <>
      <Title>Status</Title>



      <pre>{statuses.map((status) => <p>{status.title}</p>)}</pre>


    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const statusdata = await getStatus(process.env.NOTION_STATUS_ID)

  const statuses = statusdata.map((status: any) => ({
    id: status.id,
    title: status.properties.Title.title[0].plain_text,
  }))


  return {
    props: {
      statuses,
    },
  }
}
export default StatusPage
