
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="mt-8">
      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">
          Your Todos
        </h2>

        <span className="text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
          {todos.length} {todos.length === 1 ? 'Task' : 'Tasks'}
        </span>
      </div>

      {/* Todo List */}
      {todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-12 px-4 bg-slate-800/40 border border-dashed border-slate-700 rounded-2xl">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          <h3 className="text-white font-semibold text-lg">
            No todos yet
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Add your first task and get things done!
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="group flex items-center justify-between gap-3 bg-slate-800/80 border border-slate-700/80 px-4 py-3 rounded-xl transition-all duration-200 hover:border-indigo-500/50 hover:bg-slate-800 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-2 h-2 shrink-0 rounded-full bg-indigo-400" />

                <span className="text-slate-100 text-sm sm:text-base break-words [overflow-wrap:anywhere]">
                  {todo.text}
                </span>
              </div>

              <button
                type="button"
                onClick={() => dispatch(removeTodo(todo.id))}
                aria-label={`Delete ${todo.text}`}
                title="Delete todo"
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 active:scale-90 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todos
