import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
    <div
    className={`group flex w-full items-center gap-3 rounded-2xl border p-3 shadow-sm transition-all duration-300 sm:gap-4 sm:p-4 ${
        todo.completed
        ? "border-emerald-500/20 bg-emerald-500/10"
        : "border-white/10 bg-slate-800/80 hover:border-indigo-400/40 hover:bg-slate-800"
    }`}
    >
    {/* Complete Checkbox */}
    <input
        type="checkbox"
        className="h-5 w-5 shrink-0 cursor-pointer accent-emerald-500"
        checked={todo.completed}
        onChange={toggleCompleted}
    />

    {/* Todo Text */}
    <input
        type="text"
        className={`min-w-0 flex-1 rounded-lg border bg-transparent px-2 py-2 text-sm outline-none transition-all duration-200 sm:text-base ${
        isTodoEditable
            ? "border-indigo-400/50 bg-slate-900/70 text-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
            : "border-transparent text-slate-200"
        } ${
        todo.completed
            ? "text-emerald-400 line-through opacity-70"
            : ""
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
    />

    {/* Edit / Save Button */}
    <button
        type="button"
        title={isTodoEditable ? "Save task" : "Edit task"}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-sm transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-30 ${
        isTodoEditable
            ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
            : "border-indigo-400/20 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/25"
        }`}
        onClick={() => {
        if (todo.completed) return;

        if (isTodoEditable) {
            editTodo();
        } else {
            setIsTodoEditable((prev) => !prev);
        }
        }}
        disabled={todo.completed}
    >
        {isTodoEditable ? "✓" : "✎"}
    </button>

    {/* Delete Button */}
    <button
        type="button"
        title="Delete task"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/20 active:scale-95"
        onClick={() => deleteTodo(todo.id)}
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="m19 6-1 14H6L5 6" />
        <path d="M10 11v5" />
        <path d="M14 11v5" />
        </svg>
    </button>
    </div>
  );
}

export default TodoItem;