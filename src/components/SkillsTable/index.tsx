import useSWR from 'swr'
import React, { FC, useState } from 'react'
import DomainsNavigator from './DomainsNavigator'
import { NormalizedData, Domain } from './interfaces'
import DomainSkills from './DomainSkills'
import DomainContext from './DomainContext'
//github.com/alaazorkane
const fetcher = (url: string) => fetch(url).then((r) => r.json())

const SkillsTable: FC = () => {
  const [domain, setDomain] = useState('langs')
  const { data } = useSWR<NormalizedData<Domain>>('/api/skills', fetcher)
  // TODO: Some fancy loading skeleton
  if (!data) return <p>Loading...</p>
  const handleDomainChange = (newDomain: string) => {
    //mutate();
    setDomain(newDomain)
  }
  return (
    <DomainContext.Provider value={data}>
      <div className="flex flex-col tracking-wider bg-gray-100 ">
        <DomainsNavigator onChange={handleDomainChange} active={domain} />
        <DomainSkills selected={domain} />
      </div>
    </DomainContext.Provider>
  )
}

export default SkillsTable
