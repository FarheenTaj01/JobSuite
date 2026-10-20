import { useEffect, useState } from 'react'
// useState that persists to localStorage (safely).
export function useLocal(key, initial) {
  const [v, setV] = useState(() => { try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : initial } catch { return initial } })
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)) } catch { /* ignore */ } }, [key, v])
  return [v, setV]
}
