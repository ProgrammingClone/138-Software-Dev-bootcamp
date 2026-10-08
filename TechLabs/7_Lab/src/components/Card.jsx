
// Utilities used: rounded-xl, border, shadow-md, hover:shadow-xl, p-6
function Card({ title, description, tag }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
        {tag}
      </span>
      <h3 className="mt-3 text-lg font-bold text-slate-800">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  )
}

export default Card