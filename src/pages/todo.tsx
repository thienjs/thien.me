import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { Auth, Card, Space, Typography } from '@supabase/ui';
import TodoList from '../components/TodoList';
import { supabase } from '~/lib/supabase';

type AuthView = 'sign_in' | 'forgotten_password' | undefined;

const fetcher = (url: string, token: string) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json());

export default function Home() {
  const [authView, setAuthView] = useState<AuthView>('sign_in');

  const { user, session } = Auth.useUser();
  const { data, error } = useSWR(
    session ? ['/api/user', session.access_token] : null,
    fetcher
  );

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Error logging out:', error.message);
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'PASSWORD_RECOVERY') setAuthView('forgotten_password');
        if (event === 'USER_UPDATED')
          setTimeout(() => setAuthView('sign_in'), 1000);
        // Send session to /api/auth route to set the auth cookie.
        // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
        fetch('/api/auth', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-300">
      {!user ? (
        <div className="max-w-sm mx-auto h-full p-4">
          <Auth
            supabaseClient={supabase}
            providers={['google', 'github']}
            view={authView}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
          />
        </div>
      ) : (
        <>
          <div className="max-w-md mx-auto h-full p-4">
            {authView === 'forgotten_password' && (
              <Auth.UpdatePassword supabaseClient={supabase} />
            )}

            <TodoList user={user} />

            <button
              className="bg-gray-900 text-white w-full rounded p-2 mt-8"
              onClick={logout}
            >
              Logout
            </button>
          </div>

          <div className="max-w-max mx-auto p-4">
            {error && (
              <Card>
                <Typography.Text type="danger">
                  Failed to fetch user!
                </Typography.Text>
              </Card>
            )}

            {data && !error ? (
              <Card>
                <Space direction="vertical" size={6}>
                  <Typography.Text type="success">
                    User data retrieved server-side (in API route):
                  </Typography.Text>

                  <Typography.Text>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                  </Typography.Text>

                  <Typography.Text>
                    <Link href="/profile">
                      <a className="underline">
                        SSR example with getServerSideProps
                      </a>
                    </Link>
                  </Typography.Text>
                </Space>
              </Card>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}