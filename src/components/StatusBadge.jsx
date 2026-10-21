const CLS = { Verified: 'b-v', 'Assessment Pending': 'b-p', Identified: 'b-i', 'Not Passed': 'b-n' }
export default function StatusBadge({ status }) {
  return <span className={'badge ' + CLS[status]}>{status === 'Verified' ? '✔ ' : ''}{status}</span>
}
