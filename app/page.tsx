import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left mb-4">
          Next.js Templates with SEO Optimized
        </h1>
        <p>
          Build lightning-fast web applications with our SEO-optimized Next.js template. Features include performance optimization, accessibility standards, and modern development practices.
        </p>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js Framework Logo"
          width={180}
          height={38}
          priority
          // Add more SEO-friendly image attributes
          sizes="(max-width: 768px) 100vw, 180px"
        />

        <div className="max-w-2xl text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Build Your Website Faster with Our Templates
          </h2>
          <p className="text-lg mb-6">
            Start your next project with our professionally crafted Next.js templates.
            Built with performance, SEO, and developer experience in mind.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel Platform Logo"
              width={20}
              height={20}
            />
            Browse Templates
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Documentation"
          >
            View Documentation
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Learn Next.js"
        >
          <Image
            src="/file.svg"
            alt="Documentation Icon"
            width={16}
            height={16}
          />
          Learn Next.js
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Template Examples"
        >
          <Image
            src="/window.svg"
            alt="Templates Icon"
            width={16}
            height={16}
          />
          Template Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Next.js Website"
        >
          <Image
            src="/globe.svg"
            alt="Website Icon"
            width={16}
            height={16}
          />
          Visit Next.js →
        </a>
      </footer>
    </div>
  );
}
