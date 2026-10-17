import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10 sm:py-16">

        <div className="mx-auto w-full max-w-2xl">

          {/* Header */}
          <div className="mb-8 text-center">

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Manage Your Todos
            </h1>

            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Stay organized, stay productive.
            </p>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          </div>

          {/* Main Container */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">

            {/* Todo Form */}
            <div className="mb-7">
              <h2 className="mb-4 text-lg font-semibold text-white">
                Add a new task
              </h2>

              <TodoForm />
            </div>

            {/* Todo List Header */}
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-lg font-bold text-white">
                Your Tasks
              </h2>

              <span className="rounded-full border border-indigo-400/20 bg-indigo-500/15 px-3 py-1 text-sm font-medium text-indigo-300">
                {todos.length} {todos.length === 1 ? "Task" : "Tasks"}
              </span>
            </div>

            {/* Todo Items */}
            <div className="flex flex-col gap-3">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="w-full rounded-2xl border border-white/10 bg-slate-800/70 p-3 shadow-sm transition-all duration-300 hover:border-indigo-400/40 hover:bg-slate-800 sm:p-4"
                  >
                    <TodoItem todo={todo} />
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-700 px-4 py-10 text-center">
                  <div className="mb-3 text-4xl">✨</div>

                  <h3 className="text-lg font-semibold text-slate-200">
                    No tasks yet
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Add your first task above and get started!
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-6 border-t border-white/10 pt-4 text-center">
              <p className="text-xs text-slate-500">
                Small steps every day lead to big results. 🚀
              </p>
            </div>

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App