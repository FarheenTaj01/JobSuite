# JobSuite (frontend prototype)

Skill-first hiring demo. All data is mock; AI analysis and assessments are simulated in the browser.

```bash
npm install
npm run dev     # http://localhost:5173
npm run build
```

Structure: `src/components` (shared UI), `src/context` (app state, persisted to localStorage),
`src/data` (mock data), `src/pages/student`, `src/pages/recruiter`, `src/utils` (match/analytics).
Recruiter pages only use `toPublicProfile()` output, so private project data never reaches them.
