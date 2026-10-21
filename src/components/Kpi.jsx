export default function Kpi({ label, value }) {
  return <div className="card kpi"><span className="mu sm">{label}</span><b>{value}</b></div>
}
