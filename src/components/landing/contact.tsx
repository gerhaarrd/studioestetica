import * as React from "react";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact({ services }: { services: { title: string }[] }) {
  return (
    <section id="contato" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] opacity-70 mb-4">Contato</p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">Venha viver <span className="italic">essa experiência</span></h2>
          <p className="opacity-80 mb-8 leading-relaxed">Agende sua avaliação gratuita e descubra o tratamento ideal para você.</p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Rua das Flores, 123 — São Paulo, SP</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> (11) 99999-0000</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> contato@email.com.br</li>
            <li className="flex items-center gap-3"><Clock className="h-4 w-4" /> Seg–Sáb · 9h às 20h</li>
            <li className="flex items-center gap-3"><Instagram className="h-4 w-4" /> @studiodeestetica</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
