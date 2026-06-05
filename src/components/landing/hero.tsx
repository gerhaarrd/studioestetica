import * as React from "react";
import heroImg from "@/assets/hero.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <img src={heroImg} alt="Studio de estética" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-primary-foreground">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-80">Studio de Estética</p>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-6">
          Sua beleza,<br />
          <span className="italic">nossa arte.</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg opacity-90 mb-10">
          Tratamentos personalizados em um ambiente acolhedor, criados para realçar o que há de mais belo em você.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8">
            <a href="#contato">Agendar avaliação</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8">
            <a href="#servicos">Ver serviços</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
