import { ritualSteps } from "@/lib/data";
import { RitualStepComponent } from "./RitualStep";

/**
 * Section Rituel — 3 gestes en grille avec header.
 * Les classes reveal sont directement sur les éléments pour ne pas casser la grille CSS.
 */
export function RitualSection() {
  return (
    <section className="ritual" id="ritual">
      <div className="ritual-header">
        <p className="ritual-overline reveal">Le Rituel</p>
        <h2 className="ritual-title reveal reveal-delay-1">
          Trois Gestes,
          <br />
          Chaque Soir
        </h2>
      </div>
      <div className="ritual-steps">
        {ritualSteps.map((step, index) => (
          <RitualStepComponent
            key={step.iconType}
            step={step}
            delayIndex={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
