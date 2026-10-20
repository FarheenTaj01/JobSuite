import { useEffect } from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import Toast from './Toast.jsx'
import { useApp } from '../context/AppContext.jsx'

const NAV = {
  student: [['/student', 'Overview'], ['/student/submit', 'Submit project'], ['/student/skills', 'Skills & verification'], ['/student/opportunities', 'Opportunities']],
  recruiter: [['/recruiter', 'Overview'], ['/recruiter/talent', 'Talent discovery'], ['/recruiter/locations', 'Location analytics'], ['/recruiter/jobs', 'Job listings'], ['/recruiter/shortlisted', 'Shortlisted']],
}
export default function Layout({ mode }) {
  const { shortlist, resetDemo } = useApp()
  const nav = useNavigate()
  useEffect(() => { document.body.className = mode === 'recruiter' ? 'rec' : ''; return () => { document.body.className = '' } }, [mode])
  const other = mode === 'student' ? 'recruiter' : 'student'
  return (
    <div className="shell">
      <nav className="side" aria-label="Main">
        <div className="logo">JobSuite</div>
        {NAV[mode].map(([to, label]) => (
          <NavLink key={to} to={to} end>{label}{label === 'Shortlisted' ? ` (${Object.keys(shortlist).length})` : ''}</NavLink>
        ))}
        <button onClick={() => nav('/' + other)} style={{ marginTop: 14, border: '1px dashed var(--bd)' }}>Switch to {other} demo</button>
        <Link to="/"><button>Welcome screen</button></Link>
        <button onClick={resetDemo}>Reset demo data</button>
      </nav>
      <main><Outlet /></main>
      <Toast />
    </div>
  )
}
