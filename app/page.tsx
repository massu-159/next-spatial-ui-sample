import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-12 items-center justify-items-start min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/bg-3.jpg')] bg-cover bg-center">
      <div className='relative'>
        <main className='flex flex-col gap-8 items-center sm:items-start bg-gray-400 p-10 rounded-2xl bg-opacity-50 backdrop-blur-md skew-y-3'>
          <Image
            className='dark:invert'
            src='https://nextjs.org/icons/next.svg'
            alt='Next.js logo'
            width={180}
            height={38}
            priority
          />
          <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
            <li className='mb-2'>
              Get started by editing{" "}
              <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>app/page.tsx</code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className='flex gap-4 items-center flex-col sm:flex-row'>
            <a
              className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='dark:invert'
                src='https://nextjs.org/icons/vercel.svg'
                alt='Vercel logomark'
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
              href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read our docs
            </a>
          </div>
        </main>
        <div className='absolute top-[30rem] left-12 shadow-2xl h-6 w-80 rounded-[90%/100%] bg-gray-800 blur-sm opacity-30 skew-y-3'></div>
      </div>
      <div className='absolute right-40'>
        <ul className='grid grid-cols-4 gap-12 text-2xl font-bold -skew-y-3'>
          <li className='mx-6 bg-blue-600 p-10 rounded-full bg-opacity-50 backdrop-blur-md'></li>
          <li className='mx-6 bg-blue-600 p-10 rounded-full bg-opacity-50 backdrop-blur-md'></li>
          <li className='mx-6 bg-blue-600 p-10 rounded-full bg-opacity-50 backdrop-blur-md'></li>
          <li className='mx-6 bg-blue-600 p-10 rounded-full bg-opacity-50 backdrop-blur-md'></li>
          <li className='mx-6 bg-blue-600 p-10 rounded-full bg-opacity-50 backdrop-blur-md'></li>
          <li className='mx-6 bg-blue-600 p-10 rounded-full bg-opacity-50 backdrop-blur-md'></li>
          <li className='mx-6 bg-blue-600 p-10 rounded-full bg-opacity-50 backdrop-blur-md'></li>
          <li className='mx-6 bg-blue-600 p-10 rounded-full bg-opacity-50 backdrop-blur-md'></li>
        </ul>
        <div className='mt-12 mx-20 bg-yellow-500 p-6 rounded-2xl bg-opacity-50 backdrop-blur-md animate-pulse skew-y-3 text-4xl flex items-center justify-center'>Information</div>
      </div>
    </div>
  );
}
