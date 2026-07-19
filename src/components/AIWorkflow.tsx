import { Reveal } from './Reveal'

const stages = ['Data', 'Preprocessing', 'Model Development', 'Evaluation', 'Explainability', 'Software Integration', 'Application']

export function AIWorkflow() {
  return (
    <div className="workflow" aria-label="End-to-end AI workflow">
      <div className="workflow-heading"><span>End-to-end practice</span><strong>From raw signal to usable system</strong></div>
      <ol>
        {stages.map((stage, index) => (
          <Reveal key={stage} delay={index * .09}>
            <li><span>{String(index + 1).padStart(2, '0')}</span><b>{stage}</b></li>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
