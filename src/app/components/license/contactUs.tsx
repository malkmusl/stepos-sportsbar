"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Separator } from "../separator";

export function License() {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    // Fetch the Markdown file from the public folder
    const fetchMarkdown = async () => {
      const res = await fetch("/license.md"); // Adjust the path if needed
      const text = await res.text();
      setMarkdownContent(text);
    };

    fetchMarkdown();
  }, []);

  return (
    <div className="py-4 bg-gray-800 bg-opacity-50 mt-8 border border-gray-600 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">License</h1>
      <Separator />

      <div className="relative w-full max-w-2xl mx-auto mb-6">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="text-lg text-center px-4 leading-tight"
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
