
function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-20 text-center text-white">
      <h2 className="text-4xl font-extrabold md:text-6xl">Learn Tailwind CSS</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
        Build modern interfaces by composing small utility classes directly in your JSX.
      </p>
      <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-indigo-600 shadow-lg transition hover:bg-indigo-50 active:scale-95">
        Get Started
      </button>
    </section>
  )
}

export default Hero