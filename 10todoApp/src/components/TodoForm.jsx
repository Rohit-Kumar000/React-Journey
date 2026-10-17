import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
    <form onSubmit={add} className="flex w-full items-center gap-3">
    <div className="relative flex-1">
        <input
        type="text"
        placeholder="What needs to be done?"
        className="w-full rounded-xl border border-slate-600/70 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
    </div>

    <button
        type="submit"
        className="shrink-0 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-all duration-300 hover:scale-105 hover:from-indigo-500 hover:to-violet-500 active:scale-95"
    >
        <span className="flex items-center gap-2">
        <span className="text-lg leading-none">+</span>
        Add Task
        </span>
    </button>
    </form>
  );
}

export default TodoForm;