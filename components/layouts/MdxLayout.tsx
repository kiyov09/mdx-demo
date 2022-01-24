import { MDXProvider } from "@mdx-js/react";
import { ReactNode, useEffect, useRef, useState } from "react";

const Link = (props: any) => (
  <a className="text-blue-500 font-semibold" {...props} />
);

const Pre = (props: any) => {
  const preRef = useRef<HTMLPreElement | null>(null);

  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    if (preRef.current !== null) {
      navigator.clipboard.writeText(preRef.current.innerText);
    }
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <span
          className={`bg-gray-100 py-1 px-2 rounded text-xs font-semibold ${
            !copied && "hidden"
          } cursor-default`}
        >
          Copied!
        </span>
        <button
          className={`mt-0.5 text-gray-500 cursor-pointer ${
            copied && "hidden"
          }`}
          onClick={onCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
      <pre {...props} ref={preRef} />
    </div>
  );
};

const components = {
  a: Link,
  pre: Pre,
};

const MdxLayout = ({ children }: { children: ReactNode[] | ReactNode }) => {
  return (
    <MDXProvider components={components}>
      <div className="prose lg:prose-md px-8 w-full md:w-3/4 min-h-screen m-auto py-8">
        {children}
      </div>
    </MDXProvider>
  );
};

export default MdxLayout;
