
function Navbar() {
  const links = ['Home', 'Courses', 'About', 'Contact']

  return (
    <nav className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white">
      <h1 className="text-xl font-bold tracking-tight">MyApp</h1>

      <ul className="flex gap-6 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-slate-300 transition hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar