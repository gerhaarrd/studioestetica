import * as React from "react";
import { Sparkles, Flower2, Heart, Star } from "lucide-react";

type Service = { title: string; desc: string; img: string; icon: any };

export function Services({ services }: { services: Service[] }) {
  return (
    <section id="servicos" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Nossos serviços</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">Cuidados pensados <span className="italic">para você</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className="group bg-card rounded-2xl overflow-hidden border border-border transition-all hover:-translate-y-1" style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
