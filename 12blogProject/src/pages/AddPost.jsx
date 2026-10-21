import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className="py-12">
      <Container>
        <h1 className="mb-8 font-serif text-4xl font-bold text-slate-900">Write a new post</h1>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost
