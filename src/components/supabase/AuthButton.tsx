import { useAuth } from '~/lib/auth'
import { supabase } from '~/lib/supabase'

export default function AuthButton() {
  const user = supabase.auth.user()
  return (
    <div>
      {!user && <>no user</>}
      {user && <>user</>}
    </div>
  )
}
