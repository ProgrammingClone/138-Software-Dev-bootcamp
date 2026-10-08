import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Counter from './components/Counter'

const features = [
  {
    tag: 'Utility-first',
    title: 'Style in your markup',
    description: 'Compose small classes like p-4 and text-lg instead of writing custom CSS.',
  },
  {
    tag: 'Responsive',
    title: 'Mobile-first breakpoints',
    description: 'Prefix any class with sm:, md: or lg: to change styles on bigger screens.',
  },
  {
    tag: 'States',
    title: 'Hover, focus and more',
    description: 'Use hover:, focus: and disabled: variants without extra selectors.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">Why Tailwind?</h2>

        {/* 1 column on mobile, 2 on small screens, 3 on medium+ */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} {...f} />
          ))}
        </div>

        <h2 className="mt-14 mb-6 text-2xl font-bold text-slate-800">
          Tailwind + React state
        </h2>
        <Counter />
      </main>

      <footer className="bg-slate-900 py-6 text-center text-sm text-slate-400">
        Built with React, Vite and Tailwind CSS
      </footer>
    </div>
  )
}

export default App