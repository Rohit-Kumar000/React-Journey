
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col sm:flex-row gap-3 w-full"
    >
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 min-w-0 bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
      />

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m-7-7h14"
          />
        </svg>
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
