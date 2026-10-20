// Fictional sample candidates. Recruiter-visible data only: no project repositories or source code here.
const raw = [
  ['Aaraav Mehta', 'Bengaluru', 'B.Tech CSE', 'Fresher', { Python: 88, SQL: 81, JavaScript: 76 }, ['Bengaluru', 'Pune'], 1, 1],
  ['Sneha Reddy', 'Hyderabad', 'B.Sc Computer Science', 'Fresher', { JavaScript: 92, React: 85, 'HTML/CSS': 90 }, ['Bengaluru', 'Hyderabad'], 1, 0],
  ['Rohan Das', 'Chennai', 'BCA', 'Fresher', { Python: 74, SQL: 79 }, ['Chennai'], 0, 1],
  ['Priya Nair', 'Bengaluru', 'B.Tech IT', 'Junior', { Python: 90, SQL: 86, 'Data Analysis': 83, 'API Fundamentals': 78 }, ['Bengaluru'], 0, 1],
  ['Aditya Singh', 'Pune', 'B.E. Electronics', 'Fresher', { Java: 72 }, ['Pune', 'Mumbai', 'Bengaluru'], 1, 0],
  ['Kavya Menon', 'Bengaluru', 'B.Tech CSE', 'Fresher', { React: 88, JavaScript: 84, 'HTML/CSS': 93 }, ['Bengaluru', 'Chennai'], 1, 1],
  ['Arjun Patel', 'Mumbai', 'BCA', 'Junior', { SQL: 77, 'Data Analysis': 80, Python: 71 }, ['Mumbai', 'Pune'], 0, 1],
  ['Neha Sharma', 'Chennai', 'B.Sc Mathematics', 'Fresher', { Python: 85, 'Data Analysis': 89, SQL: 82 }, ['Chennai', 'Bengaluru'], 1, 1],
  ['Vikram Rao', 'Hyderabad', 'B.Tech CSE', 'Fresher', {}, ['Hyderabad'], 0, 0],
  ['Ananya Iyer', 'Bengaluru', 'BCA', 'Fresher', { JavaScript: 79, 'HTML/CSS': 83 }, ['Bengaluru', 'Remote'], 1, 1],
  ['Imran Khan', 'Pune', 'B.Tech IT', 'Junior', { Python: 80, 'API Fundamentals': 84, SQL: 75, Java: 70 }, ['Pune', 'Bengaluru'], 1, 0],
  ['Meera Joshi', 'Mumbai', 'B.Sc IT', 'Fresher', {}, ['Mumbai'], 0, 1],
  ['Tarun Kumar', 'Chennai', 'B.E. CSE', 'Fresher', { Python: 73, 'API Fundamentals': 76 }, ['Chennai', 'Hyderabad'], 1, 0],
  ['Divya Pillai', 'Bengaluru', 'B.Tech CSE', 'Fresher', { Python: 91, SQL: 88, 'Data Analysis': 87 }, ['Bengaluru'], 0, 1],
]
export const CANDIDATES = raw.map((c, i) => ({
  id: i, name: c[0], city: c[1], college: c[2], level: c[3], skills: c[4],
  preferredLocations: c[5], willingToRelocate: !!c[6], remotePreference: !!c[7], gradYear: 2025 + (i % 2),
}))
