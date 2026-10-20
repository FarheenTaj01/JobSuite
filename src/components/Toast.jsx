import { useApp } from '../context/AppContext.jsx'
export default function Toast() {
  const { message } = useApp()
  return <div className={'toast' + (message ? ' on' : '')} role="status" aria-live="polite">{message}</div>
}
