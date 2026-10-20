import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const nav = useNavigate()
  return (
    <div className="hero"><div style={{ maxWidth: 980 }}>
      <div className="logo" style={{ fontSize: 28, margin: '0 0 20px' }}>JobSuite</div>
      <h1>Real Skills. Equal Opportunities.</h1>
      <p className="mu" style={{ fontSize: 18, maxWidth: 640, margin: '14px auto 28px' }}>An AI-powered hiring platform that helps fresh talent get recognised for what they can actually do — not just where they studied.</p>
      <div className="grid g2" style={{ marginBottom: 24 }}>
        <button className="card role s" onClick={() => nav('/student')}>
          <h2 style={{ color: '#00D9FF' }}>I’m a Student</h2><p className="mu">Showcase your projects, prove your skills, and unlock opportunities.</p>
          <span className="btn" style={{ background: '#2583FF' }}>Enter Student Portal</span>
        </button>
        <button className="card role r" onClick={() => nav('/recruiter')}>
          <h2 style={{ color: '#20E69A' }}>I’m a Recruiter</h2><p className="mu">Discover verified talent, explore skill matches, and hire with confidence.</p>
          <span className="btn" style={{ background: '#20E69A' }}>Explore Talent</span>
        </button>
      </div>
      <p className="mu">Build — submit your projects. Verify — prove your skills. Get discovered — connect with opportunities.</p>
      <p className="mu sm">Prototype: all data is simulated in your browser. No real AI, GitHub access or authentication.</p>
    </div></div>
  )
}
