import { useSession } from 'next-auth/react'

import { EntryInput } from './EntryInput'
import { LoginButtons } from './LoginButtons'
export default function Entry() {
  const { data: session, status } = useSession()
  return (
    <div>{status === 'authenticated' ? <EntryInput /> : <LoginButtons />}</div>
  )
}
