import heroImg from "@/assets/hero.png";
import facialImg from "@/assets/limpezadepele.png";
import massageImg from "@/assets/massagem.png";
import nailsImg from "@/assets/manicurepedicure.png";
import laserImg from "@/assets/depilacao.png";
import { Nav } from "./nav";
import { Hero } from "./hero";
import { About } from "./about";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Sparkles, Flower2, Heart, Star } from "lucide-react";

const services = [
  { title: "Limpeza de Pele", desc: "Tratamento profundo com extração e hidratação para uma pele renovada.", img: facialImg, icon: Sparkles },
  { title: "Massagem Relaxante", desc: "Alívio do estresse com técnicas terapêuticas e aromaterapia.", img: massageImg, icon: Heart },
  { title: "Manicure & Pedicure", desc: "Cuidado completo para suas mãos e pés com acabamento impecável.", img: nailsImg, icon: Flower2 },
  { title: "Depilação a Laser", desc: "Tecnologia de última geração para resultados duradouros.", img: laserImg, icon: Star },
];

const testimonials = [
  { name: "Mariana S.", text: "Lugar maravilhoso! Atendimento impecável e resultados incríveis. Saí me sentindo renovada." },
  { name: "Camila R.", text: "Profissionais super atenciosas. Virei cliente fiel. Recomendo de olhos fechados!" },
  { name: "Juliana P.", text: "Ambiente acolhedor, limpo e elegante. As massagens são divinas." },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Nav />
      <Hero />

      <About />
      <Services services={services} />

      <Testimonials testimonials={testimonials} />

      <Contact services={services} />

      <Footer />
    </div>
  );
}