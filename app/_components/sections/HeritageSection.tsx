import { timelineEvents } from "@/lib/data";
import { TimelineItem } from "./TimelineItem";

/**
 * Section Héritage — timeline alternée avec background radial.
 */
export function HeritageSection() {
  return (
    <section className="heritage" id="heritage">
      <div className="heritage-bg" />
      <div className="heritage-timeline">
        <div className="heritage-header">
          <p className="heritage-overline reveal">Notre Héritage</p>
          <h2 className="heritage-title reveal reveal-delay-1">
            Le Temps
            <br />
            de l&apos;Excellence
          </h2>
        </div>
        <div className="timeline-center-line" />
        {timelineEvents.map((event, index) => (
          <TimelineItem key={event.year} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
