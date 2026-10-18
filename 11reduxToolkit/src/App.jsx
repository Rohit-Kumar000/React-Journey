
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 sm:py-16">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Stay Productive
          </p>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Todo List
          </h1>

          <p className="text-slate-400 mt-3">
            Organize your day, one task at a time.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/20">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </div>
  )
}

export default App
