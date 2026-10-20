import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Welcome from './pages/Welcome.jsx'
import StudentOverview from './pages/student/Overview.jsx'
import SubmitProject from './pages/student/SubmitProject.jsx'
import Skills from './pages/student/Skills.jsx'
import Assessment from './pages/student/Assessment.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import RecruiterOverview from './pages/recruiter/Overview.jsx'
import Discovery from './pages/recruiter/Discovery.jsx'
import Locations from './pages/recruiter/Locations.jsx'
import Jobs from './pages/recruiter/Jobs.jsx'
import Shortlisted from './pages/recruiter/Shortlisted.jsx'
import CandidateProfile from './pages/recruiter/CandidateProfile.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/student" element={<Layout mode="student" />}>
        <Route index element={<StudentOverview />} />
        <Route path="submit" element={<SubmitProject />} />
        <Route path="skills" element={<Skills />} />
        <Route path="assess/:skill" element={<Assessment />} />
        <Route path="opportunities" element={<ComingSoon title="Opportunities" />} />
      </Route>
      <Route path="/recruiter" element={<Layout mode="recruiter" />}>
        <Route index element={<RecruiterOverview />} />
        <Route path="talent" element={<Discovery />} />
        <Route path="locations" element={<Locations />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="shortlisted" element={<Shortlisted />} />
        <Route path="candidate/:id" element={<CandidateProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
