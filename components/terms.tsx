import Accordion from '@/components/ui/accordion'

export default function Terms() {

  const terms = [
    {
      title: 'What do you guys do in layman terms?',
      text: 'We enable you to share the computational results of your data with websites without compromising your privacy.',
      active: false,
    },
    {
      title: 'Why should I care about KLEO?',
      text: 'KLEO is on a mission to give ownership of your data back to you. Please check out Kleo Connect and Kleo Cookies to explore the possibilities with sovereign data.',
      active: false,
    }
  ]

  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-5">What is this?</h2>
      <div className="space-y-3">
        {terms.map((term, index) => (
          <Accordion key={index} title={term.title} id={`terms-${index}`} active={term.active}>
            {term.text}
          </Accordion>
        ))}
    </div>
  </section>
  )
}
