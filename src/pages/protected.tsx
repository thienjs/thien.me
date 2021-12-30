import { basePath } from '../utils/config'

export async function getServerSideProps() {
  // We need to implement `/api/getUser` by creating
  // an endpoint in `pages/api` but for now let's just call it
  const response = await fetch(`${basePath}/api/get-user`).then((response) =>
    response.json()
  )

  const { user } = response

  // If the `getUser` endpoint doesn't have a user in its response
  // then we will redirect to the login page
  // which means this page will only be viewable when `getUser` returns a user.

  if (!user) {
    return {
      redirect: { destination: '/signin', permanent: false },
    }
  }
  // We'll pass the returned `user` to the page's React Component as a prop
  return { props: { user } }
}
export default function Protected({ user }) {
  return (
    <p>
      // Let's greet the user by their e-mail address Welcome {user.email}!{' '}
      <span role="img" aria-label="waving hand">
        👋🏾
      </span>
    </p>
  )
}
