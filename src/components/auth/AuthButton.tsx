import { useSession, signIn, signOut } from 'next-auth/react'

export default function AuthButton() {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <>
          <div className="flex flex-row items-center px-2">
            <h1>{session.user?.name}</h1>
            {session.user?.image ? (
              <img
                className="w-8 h-8 rounded-full"
                src={session.user.image}
                alt=""
              />
            ) : (
              ''
            )}
          </div>
          <button className="" onClick={() => signOut()}>
            Signout
          </button>
        </>
      ) : (
        <>
          <button className="" onClick={() => signIn()}>
            Signin
          </button>
        </>
      )}
    </>
  )
}
