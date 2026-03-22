import type { RitualStep as RitualStepType } from "@/lib/types";

interface RitualStepProps {
  step: RitualStepType;
  delayIndex: number;
}

/** Icônes SVG pour chaque étape du rituel */
function RitualIcon({ type }: { type: RitualStepType["iconType"] }) {
  switch (type) {
    case "purify":
      return (
        <svg viewBox="0 0 48 48">
          <circle cx="24" cy="20" r="10" />
          <path d="M24 30 C14 30, 8 38, 8 44 L40 44 C40 38, 34 30, 24 30Z" />
        </svg>
      );
    case "infuse":
      return (
        <svg viewBox="0 0 48 48">
          <path d="M24 4 L24 44" />
          <path d="M12 16 L24 4 L36 16" />
          <circle cx="24" cy="34" r="8" />
        </svg>
      );
    case "seal":
      return (
        <svg viewBox="0 0 48 48">
          <ellipse cx="24" cy="24" rx="18" ry="10" />
          <path d="M24 14 Q30 24, 24 34 Q18 24, 24 14Z" />
        </svg>
      );
  }
}

/**
 * Étape individuelle du rituel — numéro romain, icône SVG, nom, description.
 * La classe reveal + delay est appliquée directement sur le .ritual-step
 * pour ne pas casser le grid parent.
 */
export function RitualStepComponent({ step, delayIndex }: RitualStepProps) {
  return (
    <div className={`ritual-step reveal reveal-delay-${delayIndex}`}>
      <div className="ritual-step-num">{step.numeral}</div>
      <div className="ritual-step-icon">
        <RitualIcon type={step.iconType} />
      </div>
      <h4 className="ritual-step-name">{step.name}</h4>
      <p className="ritual-step-desc">{step.description}</p>
    </div>
  );
}
