import { useAuth } from '~/lib/auth'
import { supabase } from '~/lib/supabase'
import TodoList from '../components/todo/TodoList'
import NewTodoForm from '../components/todo/NewTodoForm'

export default function Home() {
  const session = supabase.auth.session()
  const { loading, signIn, signUp, signOut, signInWithProvider } = useAuth()
  return (
    <>
      {!session && (
        <>
          サインインしてください。 <br />
          <button
            onClick={(evt) => {
              evt.preventDefault()
              signInWithProvider('github')
            }}
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          サインイン完了。 email: {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
          <NewTodoForm />
          <TodoList />
        </>
      )}
    </>
  )
}
