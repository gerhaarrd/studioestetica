import * as React from "react";

export function About() {
  return (
    <section id="sobre" className="py-24 px-6" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Sobre nós</p>
        <h2 className="font-display text-4xl md:text-5xl font-light mb-8">Um refúgio dedicado<br /><span className="italic">ao seu bem-estar.</span></h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">Há mais de 10 anos, o Studio de Estética combina técnica, sensibilidade e tecnologia para entregar resultados naturais e duradouros. Nossa equipe de especialistas cuida de cada detalhe para que você se sinta única.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[{ n: "10+", l: "Anos de experiência" }, { n: "5k+", l: "Clientes felizes" }, { n: "20+", l: "Tratamentos" }, { n: "100%", l: "Dedicação" }].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl text-primary mb-2">{s.n}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
