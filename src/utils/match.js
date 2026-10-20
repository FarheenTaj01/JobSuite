// Recruiter-facing transform: approved fields only (no repo URLs, no project data).
export const toPublicProfile = (c) => ({
  id: c.id, name: c.name, city: c.city, college: c.college, gradYear: c.gradYear, level: c.level,
  skills: c.skills, preferredLocations: c.preferredLocations,
  willingToRelocate: c.willingToRelocate, remotePreference: c.remotePreference,
})
// Match = verified required skills / required skills x 100. College is never used.
export const matchJob = (c, job) => {
  if (!job) return null
  const matched = job.requiredSkills.filter((r) => r in c.skills)
  return { pct: Math.round((matched.length / job.requiredSkills.length) * 100), matched, missing: job.requiredSkills.filter((r) => !(r in c.skills)) }
}
export const verifiedCount = (c) => Object.keys(c.skills).length
export const avgScore = (c) => { const v = Object.values(c.skills); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : 0 }
export const initials = (n) => n.split(' ').map((x) => x[0]).join('')
export const cityStats = (list) => {
  const m = {}
  list.forEach((c) => { const o = m[c.city] || (m[c.city] = { count: 0, verified: 0 }); o.count++; if (verifiedCount(c)) o.verified++ })
  return Object.entries(m).sort((a, b) => b[1].count - a[1].count)
}
