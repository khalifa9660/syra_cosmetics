import type { TimelineEvent } from "@/lib/types";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

/**
 * Élément individuel de la timeline Héritage.
 * Alterne gauche/droite via CSS :nth-child(odd/even).
 * Le dot s'illumine quand l'élément entre dans le viewport (via ScrollObserver).
 */
export function TimelineItem({ event, index }: TimelineItemProps) {
  const isEven = index % 2 === 1;

  return (
    <div className="timeline-item reveal">
      {isEven ? (
        <>
          <div className="timeline-spacer" />
          <div className="timeline-year-col">
            <div className="timeline-dot" />
          </div>
          <div className="timeline-content">
            <div className="timeline-year">{event.year}</div>
            <p className="timeline-text">{event.description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="timeline-content">
            <div className="timeline-year">{event.year}</div>
            <p className="timeline-text">{event.description}</p>
          </div>
          <div className="timeline-year-col">
            <div className="timeline-dot" />
          </div>
          <div className="timeline-spacer" />
        </>
      )}
    </div>
  );
}
