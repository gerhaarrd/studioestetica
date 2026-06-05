import * as React from "react";
import { Star } from "lucide-react";

export function Testimonials({ testimonials }: { testimonials: { name: string; text: string }[] }) {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-secondary">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Depoimentos</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">Histórias que <span className="italic">nos inspiram</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: "var(--gold)" }} />
                ))}
              </div>
              <p className="text-muted-foreground italic leading-relaxed mb-6">"{t.text}"</p>
              <footer className="font-display text-lg text-primary">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
