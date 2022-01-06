import { useEffect, useState } from 'react';
import { supabase } from '~/lib/supabase';
import Login from '~/components/supabase/Login';
import Profile from '~/components/supabase/Profile';
import Layout from '~/components/ui/Layout'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return <Layout>{!session ? <Login /> : <Profile session={session} />}</Layout>
}