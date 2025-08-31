import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {snippet.title}
          </h3>
          <span className="text-sm text-gray-500">
            #{snippet.id}
          </span>
        </div>
        
        <div className="bg-gray-50 rounded-md p-4 mb-4">
          <pre className="text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap">
            <code>{snippet.code}</code>
          </pre>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Code Snippet
          </div>
          <Link 
            href={`/snippets/${snippet.id}`} 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Details
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Code Snippets
            </h1>
            <p className="text-gray-600">
              Manage and browse your code snippets
            </p>
          </div>
          
          <Link 
            href="/snippets/new" 
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Snippet
          </Link>
        </div>

        {/* Snippets List */}
        <div className="space-y-4">
          {snippets.length > 0 ? (
            renderedSnippets
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No snippets yet
                </h3>
                <p className="text-gray-600 mb-4">
                  Get started by creating your first code snippet
                </p>
                <Link 
                  href="/snippets/new" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Create Snippet
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}