import React, { useState } from "react";
import Layout from "../components/ui/Layout";
import Router from "next/router";
import { basePath } from "~/utils/config";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch(`${basePath}/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <form className="flex flex-col" onSubmit={submitData}>
          <h1 className="mb-2 font-semibold text-lg">New Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
            className='text-gray-600 dark:text-gray-100 dark:bg-zinc-400 mb-3'
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
            className='text-gray-600 dark:text-gray-100 dark:bg-zinc-400'
          />
          <div className="flex justify-between mt-3">
          <input type="submit" value="Create" className="hover:text-cyan-500 px-6 py-2 border rounded-md bg-cyan-600 dark:bg-cyan-800"/>
          <a className="" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>

          </div>
        </form>
      </div>
     
    </Layout>
  );
};

export default Draft;