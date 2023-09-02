import Brief from '@/components/brief'
import QuoteDetails from '@/components/quote-details'
import CostsList from '@/components/costs-list'
import Terms from '@/components/terms'
import Cta from '@/components/cta'
import Link from 'next/link'
export const metadata = {
  title: 'Kleo Network - Data Sovreignity',
  description: 'Kleo Network is an extension which gives back power of your own data back to you. ',
}

export default function Home() {

  const costs = [
    {
      title: 'Competitive Analysis',
      description: 'The client is looking to review the information.',
      price: 7800,
    },
    {
      title: 'UX Research Reports',
      description: 'The client is looking to review the information.',
      price: 2560,
    },
    {
      title: 'Sitemap and Information Architecture',
      description: 'The client is looking to review the information.',
      price: 1420,
    },
    {
      title: 'UX Wireframes and User Flows',
      description: 'The client is looking to review the information.',
      price: 3978,
    },
    {
      title: 'Visual Design',
      description: 'The client is looking to review the information.',
      price: 4476,
    },
    {
      title: 'Interactive Prototypes + Assets Exports',
      description: 'The client is looking to review the information.',
      price: 4326,
    },
  ]

  return (
    <>
      <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20">

        <article className="divide-y divide-slate-100 dark:divide-slate-800 -mt-8 mb-4">
          <Brief>
          We enable you to share the computational results of your data with websites without compromising your privacy. You can even earn real yield from your data, all you have to do install an extension. 
          </Brief>
          <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        <div className="flex py-5 md:py-7 space-x-5">
          <Link className="btn w-full text-lg text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900 border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow shadow-black/5" href="https://www.cookies.kleo.network" target='_blank'>Download Extension - It's free!</Link>
        </div>
      </div>
          <QuoteDetails projectLength="Kleo Cookies" startDate="27 Jun, 2024" endDate="27 Aug, 2024" />
          {/* <CostsList costs={costs} /> */}
          <Terms />
        </article>

      </div>
      <Cta />    
    </>
  )
}
