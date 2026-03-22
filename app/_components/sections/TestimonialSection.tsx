import { testimonial } from "@/lib/data";

/**
 * Section Témoignage — guillemet géant, citation italique, auteur et rôle.
 */
export function TestimonialSection() {
  return (
    <section className="testimonial">
      <div className="testimonial-quote-mark reveal">&ldquo;</div>
      <p className="testimonial-text reveal reveal-delay-1">{testimonial.quote}</p>
      <p className="testimonial-author reveal reveal-delay-2">{testimonial.author}</p>
      <p className="testimonial-role reveal reveal-delay-2">{testimonial.role}</p>
    </section>
  );
}
