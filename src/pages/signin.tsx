import React, { MouseEventHandler, useState } from 'react';

import { useRouter } from 'next/router';

import { supabase } from '~/lib/supabase';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push('/dashboard');
    }
  };

  const handleSignInWithGitHub: MouseEventHandler = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn(
      {
        provider: 'github',
      },
      {
        redirectTo: 'https://thien.me/callback/',
      }
    );

    if (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-white">
          Sign in to your account
        </h1>

        <div className="flex flex-col p-6">
          <button
            className="text-lg text-white font-semibold bg-blue-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
            onClick={handleSignInWithGitHub}
          >
            Sign In with GitHub
          </button>

          <hr className="bg-gray-600 border-0 h-px my-8" />

          <form className="flex flex-col" onSubmit={handleSignIn}>
            <label htmlFor="email" className="text-gray-200">
              Email
            </label>
            <input
              className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="mt-6 text-gray-200">
              Password
            </label>
            <input
              className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="mt-10 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
              type="submit"
            >
              Sign in with Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;