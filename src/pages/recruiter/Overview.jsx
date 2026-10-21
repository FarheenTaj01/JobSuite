import { useNavigate } from 'react-router-dom'
import { useApp, DEFAULT_FILTERS } from '../../context/AppContext.jsx'
import { CANDIDATES } from '../../data/candidates.js'
import { JOBS } from '../../data/jobs.js'
import { cityStats, verifiedCount } from '../../utils/match.js'
import Kpi from '../../components/Kpi.jsx'

export default function Overview() {
  const { shortlist, setFilters } = useApp()
  const nav = useNavigate()
  const cs = cityStats(CANDIDATES), T = CANDIDATES.length
  const cnt = {}; CANDIDATES.forEach((c) => Object.keys(c.skills).forEach((k) => { cnt[k] = (cnt[k] || 0) + 1 }))
  const top = Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 6)
  const pick = (city) => { setFilters({ ...DEFAULT_FILTERS, city }); nav('/recruiter/talent') }
  return (
    <>
      <h1>Welcome back, Alex.</h1><p className="mu">Discover verified talent. Hire beyond traditional boundaries.</p><br />
      <div className="grid g4"><Kpi label="Total candidates" value={T} /><Kpi label="With verified skills" value={CANDIDATES.filter(verifiedCount).length} /><Kpi label="Active job listings" value={JOBS.length} /><Kpi label="Shortlisted" value={Object.keys(shortlist).length} /></div><br />
      <div className="card"><h2>Talent by location</h2><p className="mu sm">Illustrative demo data, calculated from the {T} sample candidates. Select a city to filter.</p>
        {cs.map(([c, o]) => <button key={c} className="city" onClick={() => pick(c)}><span>{c}</span><div className="bar"><i style={{ width: `${(o.count / cs[0][1].count) * 100}%` }} /></div><span className="sm">{o.count} · {Math.round((o.count / T) * 100)}%</span></button>)}</div><br />
      <div className="grid g2">
        <div className="card"><h2>Verified talent by city</h2>{cs.map(([c, o]) => <div key={c} className="sm" style={{ padding: '3px 0' }}>{c}: <b>{o.verified}</b> of {o.count} with verified skills</div>)}</div>
        <div className="card"><h2>Most common verified skills</h2>{top.map(([k, n]) => <div key={k} className="row sm"><span style={{ width: 110 }}>{k}</span><div className="bar sp"><i style={{ width: `${(n / top[0][1]) * 100}%` }} /></div><b>{n}</b></div>)}</div>
      </div>
    </>
  )
}
