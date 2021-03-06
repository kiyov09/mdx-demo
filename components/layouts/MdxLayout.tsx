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

const GithubIcon = () => {
  return (
    <svg role="img" className="h-6 w-6" viewBox="0 0 24 24">
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
};

const components = {
  a: Link,
  pre: Pre,
};

const MdxLayout = ({ children }: { children: ReactNode[] | ReactNode }) => {
  return (
    <MDXProvider components={components}>
      <header className="w-full px-8 py-4 relative">
        <a
          className="h-6 w-6 absolute right-8 cursor-pointer shadow-md rounded-full"
          href="https://github.com/kiyov09/mdx-demo"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </header>
      <div className="prose lg:prose-md px-8 w-full md:w-3/4 min-h-screen m-auto py-8 pb-16">
        {children}
      </div>
    </MDXProvider>
  );
};

export default MdxLayout;
