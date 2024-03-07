'use client'
import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { createClient } from '@supabase/supabase-js'
import { supabase } from '~/lib/supabase'

export default function Guestbook2() {
  const { data: session } = useSession<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<any>('')
  const [userMsg, setUserMsg] = useState<any>([])

  const getGuestBookData = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('guestbook2024')
        .select()
        .order('createdAT', { ascending: false })

      setMessage(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGuestBookData()
  }, [])

  const handleInput = (e: any) => {
    setUserMsg(e.target.value)
  }

  const createMessage = async (e: any) => {
    e.preventDefault()
    try {
      const { data, error }: any = await supabase.from('guestbook').insert([
        {
          message: userMsg,
          username: session?.user?.name,
        },
      ])
      setUserMsg('')
      getGuestBookData()
      console.log(session)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=" container mx-auto mt-10 max-w-5xl">
      <h1 className=" text-lg">Guestbook Feature</h1>

      {session && (
        <>
          <div className="flex flex-col gap-5">
            <h4 className="text-lg">sign in as {session?.user?.name}</h4>
            <div>
              <form onSubmit={createMessage} className="flex flex-row gap-3">
                <input
                  type="text"
                  value={userMsg}
                  onChange={handleInput}
                  className="w-full rounded-md border-2 p-2"
                  placeholder="Enter Your Message"
                />
                <button
                  type="submit"
                  className=" w-[250px] rounded-md bg-black px-5 text-white"
                >
                  Submit
                </button>
              </form>
            </div>

            <button
              onClick={() => signOut()}
              className="flex w-[250px] flex-row items-center justify-center gap-3 rounded-md bg-black p-3 text-white"
            >
              Sign out
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            {loading && <h1>Loading ..</h1>}
            {message &&
              message.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-secondary mt-5 flex flex-row justify-between gap-5 rounded-xl p-5"
                >
                  <div className="left flex flex-row gap-5">
                    <p style={{ color: '#525252' }}>{item.username} : </p>
                    <p style={{ color: '#525252' }}>{item.message}</p>
                  </div>

                  <p style={{ color: '#525252' }}>{item.created_at}</p>
                </div>
              ))}
          </div>
        </>
      )}

      {!session && (
        <button
          onClick={() => signIn('github')}
          className=" flex flex-row justify-center gap-5 rounded-xl bg-gray-900 px-5 py-3 text-white"
        >
          Sign in with Github
        </button>
      )}
    </div>
  )
}
