'use client'

import { useActionState, startTransition } from "react";


import { useFormState } from "react-dom";
import * as actions from "@/actions";
///user around our app;

export default function SnippetCreatePage() {
 const [formState,action] = useFormState(actions.createSnippet,{message:"hello world"}); 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl p-8 bg-slate-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create New Snippet</h2>

        <form action={action} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g., Simple React Button Component"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="code" className="block text-gray-700 font-semibold mb-2">Code</label>
            <textarea
              id="code"
              name="code"
              rows={10}
              placeholder="Paste your code snippet here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
<div>{formState.message}</div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Snippet
          </button>
        </form>
      </div>
    </div>
  );
}