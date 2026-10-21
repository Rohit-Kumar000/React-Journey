import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../container/Container'

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <Container>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/"><Logo size={30} /></Link>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} VBlog. Built with React &amp; Appwrite.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
