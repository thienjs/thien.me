import {useSession, signIn, signOut} from 'next-auth/react';
import Layout from '~/components/ui/Layout';
import ButtonLink from '~/components/links/ButtonLink';

export default function Home() {
  const {data: session} = useSession();

  if (session) {
    return (
      <Layout>
        Signed in as {session?.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </Layout>
    );
  }
  return (
    <Layout>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </Layout>
  );
}