import React, { useState } from "react";
import Layout from "../components/ui/Layout";
import Router from "next/router";
import { basePath } from "~/utils/config";
import ButtonLink from '~/components/links/ButtonLink'

const Draft: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { title, content }
      await fetch(`/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/drafts')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <div className="flex flex-col">
        <form className="flex flex-col" onSubmit={submitData}>
          <h1 className="mb-2 font-semibold text-lg">New Draft</h1>
          <p className="text-sm text-gray-700 dark:text-gray-500 mb-4">
            please keep comments friendly. thank you.
          </p>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
            className="text-gray-600 dark:text-gray-100 dark:bg-zinc-400 mb-3"
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="comment"
            rows={8}
            value={content}
            className="text-gray-600 dark:text-gray-100 dark:bg-zinc-400"
          />
          <div className="flex justify-between mt-3">
            <ButtonLink className="" href="/guestbook">
              Cancel
            </ButtonLink>
            <input
              type="submit"
              value="Create"
              className="hover:text-cyan-500 px-6 py-2 border rounded-md bg-cyan-600 dark:bg-cyan-800"
            />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Draft;