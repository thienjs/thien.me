import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { supabase } from '~/lib/supabase'
import { useSession, signIn, signOut } from 'next-auth/react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Guestbook2 = () => {
  const { data: session } = useSession()
  const [guestbookData, setGuestbookData] = React.useState(null)
  const [message, setmessage] = React.useState(null)
  const [emptyalert, setemptyalert] = React.useState(false)
  const messageInput = React.useRef()

  const fetchguestbook = async () => {
    const { data, error } = await supabase.from('guestbook2024').select()
    if (data) {
      setGuestbookData(data)
      console.log(data)
    }
  }
  const uploaddata = async (e) => {
    let { data } = await supabase.from('guestbook2024').insert([
      {
        message,
        username: session.user.name,
        email: session.user.email,
      },
    ])
    fetchguestbook()
  }
  const removedata = async (removeid) => {
    const { data } = await supabase
      .from('guestbook2024')
      .delete()
      .eq('id', removeid)
    fetchguestbook()
  }
  React.useEffect(() => {
    fetchguestbook()
  }, [])
  return (
    <main className="">
      <Head>
        <title>Guestbook demo - </title>
      </Head>
      <div className={`mt- mb-2 p-2 ${!session ? 'block' : 'hidden'}`}>
        <p className="text-xl font-bold">Sign in</p>
        <div className="flex">
          <button
            onClick={() => signIn('github')}
            className="mt-1 flex items-center rounded-md bg-zinc-600 px-2 py-1 text-lg text-white drop-shadow-sm duration-100 hover:bg-slate-700"
          >
            <BsGithub />
            &thinsp;Github
          </button>
          <button
            onClick={() => signIn('google')}
            className=" ml-2 mt-1 flex items-center rounded-md bg-blue-400 px-2 py-1 text-lg text-white drop-shadow-sm duration-100 hover:bg-blue-500"
          >
            <BsGoogle />
            &thinsp;Google
          </button>
        </div>
      </div>
      <div className={`mt-5 p-2 ${!session ? 'hidden' : 'block'}`}>
        <p className="mb-1">Sign in with&nbsp;{session && session.user.name}</p>
        <input
          ref={messageInput}
          onChange={(x) => {
            setmessage(x.target.value)
          }}
          onFocus={() => setemptyalert(false)}
          type="text"
          placeholder="Your message..."
          className="w-full rounded-md bg-neutral-100 py-1 px-2 text-lg ring-1 ring-blue-300 duration-75 focus:outline-none focus:ring-[3px]"
        />
        <p
          className={`text-md text-red-500 ${emptyalert ? 'block' : 'hidden'}`}
        >
          Message is empty
        </p>
        <div className="mt-2 flex">
          <button
            onClick={() => {
              messageInput.current.value = ''
              !message ? setemptyalert(true) : emptyalert && ''
              session && message && uploaddata()
              setmessage(null)
            }}
            className="mr-2 w-full rounded-md bg-blue-400 px-2 py-1 text-lg drop-shadow-sm duration-100 hover:bg-blue-500"
          >
            Send it
          </button>
          <button
            onClick={() => signOut()}
            className="w-[120px] rounded-md bg-zinc-300 px-2 py-1 text-lg drop-shadow-sm duration-100 hover:bg-zinc-400"
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="mb-5">
        <ul>
          {guestbookData ? (
            guestbookData
              .sort((a, b) => (a.id < b.id ? 1 : -1))
              .map((guestbookData) => (
                <li
                  key={guestbookData.id}
                  className="my-1 rounded-md px-3 py-2 duration-100 hover:bg-neutral-200 hover:drop-shadow-sm"
                >
                  <p className="text-md">{guestbookData.message}</p>
                  <div className="flex text-xs">
                    <p>{guestbookData.username}</p>&thinsp;<p>/</p>&thinsp;
                    <p>
                      {guestbookData.created_at.slice(0, 10)}&thinsp;at&thinsp;
                      {guestbookData.created_at.slice(11, 16)}
                    </p>
                    <div
                      className={`hidden ${
                        session && guestbookData.email === session.user.email
                          ? '!flex'
                          : '!hidden'
                      }`}
                    >
                      <p>&thinsp;/&thinsp;</p>
                      <button
                        onClick={() => removedata(guestbookData.id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))
          ) : (
            <Skeleton
              className="my-2"
              borderRadius={10}
              count={1}
              height={60}
              baseColor="#dfdfdf"
              highlightColor="#cfc9c9"
              duration={0.8}
            />
          )}
        </ul>
      </div>
    </main>
  )
}

export default Guestbook2
