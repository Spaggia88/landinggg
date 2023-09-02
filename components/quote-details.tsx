interface QuoteDetailsProps {
  projectLength: string
  startDate: string
  endDate: string
}

export default function QuoteDetails({
  projectLength,
  startDate,
  endDate,
}: QuoteDetailsProps) {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-5">Roadmap</h2>
      <ul className="grid gap-4 min-[480px]:grid-cols-3 text-sm">
        <li className="border-t-4 border-lime-500 px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
          <div className="text-slate-200 font-medium">September</div>
          <div className="text-slate-400"><a href="https://www.cookies.kleo.network" target="_blank">Kleo Cookies</a></div>
        </li>
        <li className="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
          <div className="text-slate-200 font-medium">October</div>
          <time className="text-slate-400"><a href="https://www.connect.kleo.network" target="_blank">Kleo Connect</a></time>
        </li>
        <li className="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
          <div className="text-slate-200 font-medium">November</div>
          <time className="text-slate-400">Kleo Mainnet</time>
        </li>
      </ul>
    </section>
  )
}
