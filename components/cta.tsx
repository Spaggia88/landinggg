import Link from 'next/link'

export default function Cta() {
  return (
    <div className="fixed bottom-0 z-30 w-full lg:w-1/2 bg-white dark:bg-slate-950 !bg-opacity-80 backdrop-blur-sm">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        <div className="flex py-4 md:py-6 space-x-4">
          <Link className="btn w-full text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900 border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow shadow-black/5" href="https://www.cookies.kleo.network" target='_blank'>$KLEO Cookies</Link>
        </div>
      </div>
    </div>
  )
}
