import { createContext, useContext, useState, useCallback } from 'react'
import { useLocal } from '../hooks/useLocal.js'
import { INITIAL_SKILLS, INITIAL_PROJECTS, INITIAL_ACTIVITY } from '../data/student.js'
import { CANDIDATES } from '../data/candidates.js'

const Ctx = createContext(null)
export const useApp = () => useContext(Ctx)
export const DEFAULT_FILTERS = { q: '', city: '', skill: '', level: '', job: '', work: '', sort: 'match' }
const today = () => '20 Oct 2026'

export function AppProvider({ children }) {
  const [skills, setSkills] = useLocal('js:skills', INITIAL_SKILLS)
  const [projects, setProjects] = useLocal('js:projects', INITIAL_PROJECTS)
  const [activity, setActivity] = useLocal('js:activity', INITIAL_ACTIVITY)
  const [shortlist, setShortlist] = useLocal('js:shortlist', {})
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [message, setMessage] = useState('')

  const toast = useCallback((m) => { setMessage(m); setTimeout(() => setMessage(''), 2400) }, [])
  const log = (a) => setActivity((x) => [a, ...x])

  const addProject = (title, category, skillNames) => {
    setProjects((p) => [{ title, date: today(), skillCount: skillNames.length }, ...p])
    setSkills((s) => [...s, ...skillNames.filter((n) => !s.find((k) => k.name === n)).map((name) => ({ name, category, status: 'Identified', project: title, score: null }))])
    log('Project submitted: ' + title)
  }
  const recordAssessment = (name, score, passed) => {
    setSkills((s) => s.map((k) => k.name !== name ? k : passed ? { ...k, status: 'Verified', score, date: today() } : k.status === 'Verified' ? k : { ...k, status: 'Not Passed' }))
    if (passed) { log('Skill verified: ' + name); log(`Assessment passed: ${name} (${score}%)`) } else log(`Assessment not passed: ${name} (${score}%)`)
  }
  const toggleShortlist = (id) => {
    const name = CANDIDATES[id].name
    setShortlist((s) => { const n = { ...s }; if (n[id]) { delete n[id]; toast(name + ' removed from shortlist') } else { n[id] = today(); toast(name + ' shortlisted') } return n })
  }
  const resetDemo = () => { setSkills(INITIAL_SKILLS); setProjects(INITIAL_PROJECTS); setActivity(INITIAL_ACTIVITY); setShortlist({}); toast('Demo data reset') }

  return <Ctx.Provider value={{ skills, projects, activity, shortlist, filters, setFilters, message, toast, addProject, recordAssessment, toggleShortlist, resetDemo }}>{children}</Ctx.Provider>
}
