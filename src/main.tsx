import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { env } from './env/client'

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <div>
        <li>3{import.meta.env.VERCEL_ENV}</li>
        <li>4{import.meta.env.VITE_VERCEL_ENV}</li>
        <li>8{env.VERCEL_ENV}</li>
        <li>9{env.VITE_VERCEL_ENV}</li>
      </div>
    </StrictMode>
  )
}
