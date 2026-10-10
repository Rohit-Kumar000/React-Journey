
import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`'

    let pass = ''

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)
    setCopied(false)
  }, [length, numberAllowed, charAllowed])

  
  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  const copyPasswordToClipboard = async () => {
    if (!password) return

    try {
      await navigator.clipboard.writeText(password)
      passwordRef.current?.select()
      setCopied(true)
    } catch (error) {
      console.error('Failed to copy password:', error)
      setCopied(false)
    }
  }

  return (
    <main className="password-page">
      <div className="password-card">
        <div className="brand-icon">✳</div>

        <p className="eyebrow">YOUR PERSONAL SECURITY TOOL</p>
        <h1>Password <span>Generator</span></h1>
        <p className="subtitle">
          Create a strong password in seconds.
          Simple, quick, and customizable.
        </p>

        <label className="field-label" htmlFor="password">
          Generated password
        </label>

        <div className="password-output">
          <input
            id="password"
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            aria-label="Generated password"
            spellCheck="false"
          />

          <button
            type="button"
            className={`copy-button ${copied ? 'copied' : ''}`}
            onClick={copyPasswordToClipboard}
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>

        <div className="strength-row">
          <span>Password length</span>
          <span className="length-value">{length} characters</span>
        </div>

        <input
          className="length-slider"
          type="range"
          min="6"
          max="50"
          value={length}
          aria-label="Password length"
          onChange={(e) => setLength(Number(e.target.value))}
        />

        <div className="range-labels">
          <span>6 characters</span>
          <span>50 characters</span>
        </div>

        <div className="options-heading">Customize password</div>

        <label className="option-row" htmlFor="numberInput">
          <div>
            <span className="option-title">Include numbers</span>
            <span className="option-description">0123456789</span>
          </div>
          <input
            id="numberInput"
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
          />
        </label>

        <label className="option-row" htmlFor="characterInput">
          <div>
            <span className="option-title">Special characters</span>
            <span className="option-description">! @ # $ % &amp; *</span>
          </div>
          <input
            id="characterInput"
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
          />
        </label>

        <button
          type="button"
          className="generate-button"
          onClick={passwordGenerator}
        >
          <span>↻</span> Generate new password
        </button>

        <p className="security-note">
          <span>◆</span> Your password is generated locally in your browser.
        </p>
      </div>

      <footer className="page-footer">
        Built for better digital security.
      </footer>
    </main>
  )
}

export default App
