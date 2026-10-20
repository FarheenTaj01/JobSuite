import { Link } from 'react-router-dom'
import { initials } from '../utils/match.js'
import { useApp } from '../context/AppContext.jsx'

export default function CandidateRow({ c, job, m }) {
  const { shortlist, toggleShortlist } = useApp()
  return (
    <div className="card row" style={{ marginBottom: 10 }}>
      <div className="av">{initials(c.name)}</div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <b>{c.name}</b> <span className="badge b-i">{c.level}</span>
        <div className="mu sm">{c.city} · {c.college}</div>
        <div>{Object.entries(c.skills).map(([k, v]) => <span key={k} className="badge b-v">{k} {v}%</span>)}{!Object.keys(c.skills).length && <span className="mu sm">No verified skills yet</span>}</div>
        {m && <div className="sm">Matched {m.matched.length} of {job.requiredSkills.length} required verified skills</div>}
      </div>
      {m && <b style={{ fontSize: 22, color: 'var(--a)' }}>{m.pct}%</b>}
      <Link className="btn g sm" to={`/recruiter/candidate/${c.id}`}>View profile</Link>
      <button className="btn sm" onClick={() => toggleShortlist(c.id)}>{shortlist[c.id] ? 'Shortlisted ✔' : 'Shortlist'}</button>
    </div>
  )
}
