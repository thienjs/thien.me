import React from 'react'
import { useRouter } from 'next/router'
import { useThemeContext } from '~/hooks/useTheme'

type Props = {}

const CDbutton = (props: Props) => {
  const router = useRouter()
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <button
      className="rounded-sm border px-2 py-1 font-mono "
      style={{
        color: systemTheme.background.primary,
        backgroundColor: systemTheme.text.accent2,
        borderColor: systemTheme.text.accent,
      }}
      onClick={() => router.back()}
    >
      cd ..
    </button>
  )
}

export default CDbutton
