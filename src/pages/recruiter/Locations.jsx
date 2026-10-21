import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp, DEFAULT_FILTERS } from '../../context/AppContext.jsx'
import { CANDIDATES } from '../../data/candidates.js'
import { cityStats, verifiedCount } from '../../utils/match.js'
import Kpi from '../../components/Kpi.jsx'

export default function Locations() {
  const { setFilters } = useApp()
  const nav = useNavigate()
  const cs = cityStats(CANDIDATES)
  const [sel, setSel] = useState(cs[0][0])
  const o = cs.find((x) => x[0] === sel)[1]
  const pc = CANDIDATES.filter((c) => c.city === sel)
  const cm = {}; pc.forEach((c) => Object.keys(c.skills).forEach((k) => { cm[k] = (cm[k] || 0) + 1 }))
  const toB = CANDIDATES.filter((c) => c.city !== 'Bengaluru' && c.willingToRelocate && c.preferredLocations.includes('Bengaluru')).length
  const view = () => { setFilters({ ...DEFAULT_FILTERS, city: sel }); nav('/recruiter/talent') }
  return (
    <>
      <h1>Location analytics</h1><p className="mu">Demo data, calculated from the sample candidate set.</p><br />
      <div className="grid g4"><Kpi label="Candidates" value={CANDIDATES.length} /><Kpi label="With verified skills" value={CANDIDATES.filter(verifiedCount).length} /><Kpi label="Cities" value={cs.length} /><Kpi label="Largest pool" value={cs[0][0]} /></div><br />
      <div className="grid g2">
        <div className="card"><h2>Cities</h2>{cs.map(([c, s]) => <button key={c} className="city" style={c === sel ? { background: 'rgba(255,255,255,.07)' } : null} onClick={() => setSel(c)}><span>{c}</span><div className="bar"><i style={{ width: `${(s.count / cs[0][1].count) * 100}%` }} /></div><span className="sm">{s.verified}/{s.count} verified</span></button>)}</div>
        <div className="card"><h2>{sel}</h2><p>{o.count} candidates · {o.verified} with verified skills</p>
          <p className="sm">Common verified skills: {Object.entries(cm).sort((a, b) => b[1] - a[1]).slice(0, 4).map((x) => `${x[0]} (${x[1]})`).join(', ') || 'none yet'}</p>
          <p className="sm">Experience levels: {[...new Set(pc.map((c) => c.level))].join(', ')}</p><button className="btn" onClick={view}>View candidates</button></div>
      </div><br />
      <div className="card"><h2>Location vs work preference</h2>
        <p className="sm">Currently in Bengaluru: <b>{CANDIDATES.filter((c) => c.city === 'Bengaluru').length}</b> · Elsewhere but willing to relocate to Bengaluru: <b>{toB}</b> · Open to remote work: <b>{CANDIDATES.filter((c) => c.remotePreference).length}</b></p>
        <p className="mu sm">Current city, relocation and remote preference are separate fields.</p></div>
    </>
  )
}
