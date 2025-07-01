import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const FormattedOutput = ({ aiText , DarkMode}) => {
  return (
    <div className={`prose prose-lg max-w-none p-4 rounded-md leading-relaxed ${DarkMode ?  'bg-black text-white' : ' bg-white text-black'}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                showLineNumbers
                lineNumberStyle={{ color: "#888", fontSize: "0.85em" }}
                customStyle={{
                  padding: "16px",
                  fontSize: "14px",
                  borderRadius: "10px",
                  background: "#1e1e1e",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-200 px-1 py-0.5 rounded" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {aiText}
      </ReactMarkdown>
    </div>
  );
};

export default FormattedOutput;
