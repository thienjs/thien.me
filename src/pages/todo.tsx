import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { Auth, Card, Space, Typography } from '@supabase/ui';
import TodoList from '../components/TodoList';

import { useAuth } from '~/lib/auth' 
import { SpinnerFullPage } from '~/components/Spinner'


export default function Home() {

    // the absolutely essential methods we'll need from AuthContext
    const {
      user, // The logged-in user object
      loading, // loading state
      signOut // and a method to let the logged-in user sign out
  } = useAuth()

  if(loading) {
      return <SpinnerFullPage/>
  }

  return (
    <div className="w-full min-h-screen bg-gray-300">
      {!user ? (
        <div className="max-w-sm mx-auto h-full p-4">

        </div>
      ) : (
        <>
          <div className="max-w-md mx-auto h-full p-4">

            <TodoList user={user} />

            <button
              className="bg-gray-900 text-white w-full rounded p-2 mt-8"
              onClick={signOut}
            >
              Logout
            </button>
          </div>

          <div className="max-w-max mx-auto p-4">
          </div>
        </>
      )}
    </div>
  );
}