import * as React from "react";

export function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-sm text-muted-foreground bg-background border-t border-border">
      © {new Date().getFullYear()} Studio de Estética. Todos os direitos reservados.
    </footer>
  );
}
