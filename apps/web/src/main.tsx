import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { env } from './env/client'

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <div>
        <li>{import.meta.env.VERCEL_ENV}</li>
        <li>{import.meta.env.VITE_VERCEL_ENV}</li>
        <li>{env.VITE_VERCEL_ENV}</li>
      </div>
    </StrictMode>
  )
}
