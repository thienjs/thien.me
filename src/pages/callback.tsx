import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { supabase } from '~/lib/supabase';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, sessionState) => {
        if (sessionState?.user) {
          router.push('/dashboard');
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return null;
};

export default Callback;