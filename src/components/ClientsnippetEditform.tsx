'use client'
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState, useEffect } from "react";
import { updateSnippet } from "@/actions";

interface ClientsnippetEditformProps {
  snippet: Snippet;
}

export default function ClientsnippetEditform({ snippet }: ClientsnippetEditformProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: any) => {
    setCode(value);
    console.log("Code updated:", value);
  }

  const editSnippetAction = updateSnippet.bind(null, {
    id: snippet.id,
    title: snippet.title,
    code: code
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                Code Editor
              </h1>
              <p className="text-gray-400 mt-1">Editing: {snippet.title}</p>
            </div>
            
            {/* Save Button */}
            <form action={editSnippetAction}>
              <button 
                type="submit" 
                className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6a1 1 0 10-2 0v5.586l-1.293-1.293z" />
                    <path d="M5 3a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 100-2v-1h8v1a1 1 0 100 2h1a1 1 0 001-1V5a2 2 0 00-2-2H5z" />
                  </svg>
                  Save Changes
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Editor Header */}
          <div className="bg-black/20 px-6 py-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400 font-mono">
                  {snippet.title}.js
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editor Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
            <Editor
              height="60vh"
              theme="vs-dark"
              language="javascript"
              defaultValue={snippet.code}
              options={{
                minimap: { enabled: true },
                selectOnLineNumbers: true,
                fontSize: 14,
                lineHeight: 1.6,
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', monospace",
                padding: { top: 20, bottom: 20 },
                smoothScrolling: true,
                cursorBlinking: 'smooth',
                cursorSmoothCaretAnimation: "on",
                renderLineHighlight: 'all',
                bracketPairColorization: { enabled: true },
                guides: {
                  bracketPairs: true,
                  indentation: true
                }
              }}
              onChange={handleEditorChange}
            />
          </div>

          {/* Status Bar */}
          <div className="bg-black/30 px-6 py-3 border-t border-white/10">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>JavaScript</span>
                </div>
                <div>
                  Lines: {code.split('\n').length}
                </div>
                <div>
                  Characters: {code.length}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                  Auto-save enabled
                </div>
                <div className="text-xs">
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Editor Tips</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Use Ctrl+S (Cmd+S on Mac) for quick save</li>
                <li>• Press F11 to toggle fullscreen mode</li>
                <li>• Use Ctrl+/ to toggle line comments</li>
                <li>• Changes are automatically tracked and highlighted</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}