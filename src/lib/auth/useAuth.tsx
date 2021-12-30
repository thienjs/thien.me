import { useContext } from 'react'
import { AuthContext } from './AuthContext'

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
      throw new Error(
        'useAuth must be used within an AuthContext.Provider'
      )
    }

    return context
}