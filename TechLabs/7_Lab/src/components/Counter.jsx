import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto max-w-sm rounded-xl bg-white p-6 text-center shadow-md">
      <p className="text-sm text-slate-500">Button clicks</p>

      {/* The text colour depends on the state */}
      <p
        className={`my-2 text-5xl font-bold ${
          count >= 10 ? 'text-green-500' : 'text-slate-800'
        }`}
      >
        {count}
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          className="rounded-lg bg-slate-200 px-4 py-2 font-medium text-slate-700 hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          − 1
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 focus:outline-none"
        >
          + 1
        </button>
      </div>

      {count >= 10 && (
        <p className="mt-4 text-sm font-medium text-green-600">You reached 10!</p>
      )}
    </div>
  )
}

export default Counter