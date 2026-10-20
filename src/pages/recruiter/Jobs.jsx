import { useNavigate } from 'react-router-dom'
import { useApp, DEFAULT_FILTERS } from '../../context/AppContext.jsx'
import { CANDIDATES } from '../../data/candidates.js'
import { JOBS } from '../../data/jobs.js'
import { matchJob } from '../../utils/match.js'

export default function Jobs() {
  const { setFilters } = useApp()
  const nav = useNavigate()
  return (
    <><h1>Job listings</h1><p className="mu">Sample listings. Matches use verified skills only.</p><br />
      <div className="grid g2">{JOBS.map((j) => {
        const n = CANDIDATES.filter((c) => matchJob(c, j).pct >= 67).length
        return (
          <div key={j.id} className="card"><h2>{j.title}</h2><div className="mu sm">{j.company} · {j.location} · {j.mode}</div>
            <div style={{ margin: '8px 0' }}>{j.requiredSkills.map((r) => <span key={r} className="badge b-v">{r}</span>)}</div>
            <p className="sm">{n} candidates match at least 2 of 3 required skills</p>
            <button className="btn" onClick={() => { setFilters({ ...DEFAULT_FILTERS, job: String(j.id) }); nav('/recruiter/talent') }}>View matches</button></div>
        )
      })}</div></>
  )
}
