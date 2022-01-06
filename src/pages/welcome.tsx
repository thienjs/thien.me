import { useEffect, useState } from 'react';
import { supabase } from '~/lib/supabase';
import Login from '~/components/supabase/Login';
import Profile from '~/components/supabase/Profile';

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <main>{!session ? <Login /> : <Profile session={session} />}</main>;
}