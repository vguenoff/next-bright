'use client'
import { useState } from 'react'

export default function RevealContent({ children }) {
  const [isSnippetShown, setIsSnippetShown] = useState(false)

  return (
    <>
      {isSnippetShown ? (
        <>{children}</>
      ) : (
        <div className="reveal">
          <button onClick={() => setIsSnippetShown(true)}>
            Reveal Content
          </button>
        </div>
      )}
    </>
  )
}
