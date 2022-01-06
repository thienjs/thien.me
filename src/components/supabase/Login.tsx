import { useState } from 'react';
import { supabase } from '~/lib/supabase';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({
        provider: 'github',
      });
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mx-auto grid place-content-center min-h-screen'>
      <p className='mb-4'>Sign in via magic link with your email below</p>
      <input
        className='mb-4 border-2 border-gray-500 rounded-xl p-4 w-full'
        type='email'
        placeholder='Your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(email);
        }}
        disabled={loading}
        className='w-full mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'
      >
        <span>{loading ? 'Sending the link' : 'Send magic link'}</span>
      </button>
      <p className='mt-4 text-center'>or</p>
      <button
        className='mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'
        onClick={() => handleGitHubLogin()}
        disabled={loading}
      >
        {loading ? 'Logging in' : 'Login with GitHub'}
      </button>
    </div>
  );
}