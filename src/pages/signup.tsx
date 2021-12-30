import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '~/lib/supabase';
import Layout from '~/components/ui/Layout';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push('/signin');
    }
  };

  return (
    <Layout>

    <div className="h-screen flex items-center justify-center bg-transparent">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-black dark:text-white ">
          Create new account
        </h1>

        <form className="mt-2 flex flex-col p-6" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-black dark:text-white">
            Email
          </label>
          <input
            className="py-2 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-200 dark:bg-zinc-600"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="mt-6 text-black dark:text-white ">
            Password
          </label>
          <input
            className="py-2 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-200 dark:bg-zinc-600"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="mt-10 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default SignUp;