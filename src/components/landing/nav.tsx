import * as React from "react";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl font-semibold tracking-wide text-primary">Belle <span className="italic text-accent-foreground">Aura</span></a>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </nav>
        <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"><a href="#contato">Agendar</a></Button>
      </div>
    </header>
  );
}
