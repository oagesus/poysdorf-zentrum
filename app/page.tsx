"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, MapPin, Ruler, TreePine, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const heroImages = [
  "/poysdorf_1.webp",
  "/poysdorf_2.webp",
  "/poysdorf_3.webp",
  "/poysdorf_4.webp",
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startInterval = () => {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }, 6000);
    };

    const handleVisibility = () => {
      clearInterval(interval);
      if (!document.hidden) {
        startInterval();
      }
    };

    startInterval();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-lora)]">
      <div className="fixed top-4 right-6 z-50">
        <a href="#kontakt">
          <Button variant="default" size="lg" className="text-base px-8">
            Kontakt aufnehmen
          </Button>
        </a>
      </div>

      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Haus Poysdorf Zentrum ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1500 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Charmantes Haus mit
            <br />
            Grundstück in Poysdorf
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Ein einzigartiges Anwesen im Herzen der Weinstadt – ideal für
            Familien oder als Investition.
          </p>
          <div className="mt-8 flex items-baseline gap-2">
            <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white sm:text-5xl">
              € 98.000
            </span>
            <span className="text-white/60">Kaufpreis</span>
          </div>

          <a
            href="#details"
            className="mt-10 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            Mehr erfahren
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-0 divide-x divide-border">
          {[
            { icon: Ruler, label: "Wohnfläche", value: "161,19 m²" },
            { icon: TreePine, label: "Grundstück", value: "814 m²" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 px-6 py-8 text-center"
            >
              <item.icon className="h-6 w-6 text-primary" />
              <span className="text-2xl font-semibold font-[family-name:var(--font-playfair)]">
                {item.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="details" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight">
                Grundstück & Bebauung
              </h2>

              <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Das Grundstück befindet sich im Bauland-Kerngebiet.
                </p>
                <p>
                  Der Bebauungsplan legt fest, dass der vordere Bereich der
                  Liegenschaft in geschlossener Form mit 90% bebaut werden darf.
                  Die Bauklasse I,II legt die Höhe fest, in diesem Fall ist die
                  Höhe bis zu 8 Meter zulässig.
                </p>
                <p>
                  Der hintere Bereich der Liegenschaft darf mit 60% bebaut
                  werden, die Bauklasse ist gleich mit I,II festgelegt, also
                  ebenso bis zu 8 Metern.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-border">
                <div className="relative aspect-[16/10]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src="/poysdorf_zentrum.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

            </div>

            <div className="space-y-6 lg:col-span-2">
              <Card className="overflow-hidden py-0 gap-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/poysdorf_property.webp"
                    alt="Bebauungsplan Poysdorf"
                    fill
                    className="object-contain bg-white"
                  />
                </div>
                <CardContent className="px-6 py-6 text-center text-sm text-muted-foreground">
                  Bebauungsplan & Grundstücksgrenzen
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">Kaufpreis</p>
                  <p className="mt-1 font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary">
                    € 98.000
                  </p>
                  <a href="#kontakt" className="mt-4 block">
                    <Button className="w-full">Anfrage senden</Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight">
            Lage & Umgebung
          </h2>

          <div className="mt-3 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Poysdorf, bekannt als die Weinstadt Österreichs, liegt im
                nördlichen Weinviertel in Niederösterreich. Die Stadt besticht
                durch ihren historischen Charme, die umliegenden Weinberge und
                eine hervorragende Lebensqualität.
              </p>
              <p>
                Die Immobilie befindet sich zentral gelegen mit kurzen Wegen zu
                Einkaufsmöglichkeiten, Schulen, Ärzten und Freizeitangeboten.
                Die Anbindung an Wien (ca. 60 km) ist über die Nordautobahn
                bequem erreichbar.
              </p>
              <div className="flex items-start gap-3 pt-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">
                    Liechtensteinstraße 3
                  </p>
                  <p>2170 Poysdorf, Niederösterreich</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.1993536117593!2d16.62572649257859!3d48.66907534003588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d2fbebba7dfd1%3A0xb596dc327b26e9fd!2sLiechtensteinstra%C3%9Fe%203%2C%202170%20Poysdorf!5e1!3m2!1sde!2sat!4v1770652406059!5m2!1sde!2sat"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Poysdorf"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="scroll-mt-20 border-t border-border py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight">
              Interesse geweckt?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Kontaktieren Sie uns für weitere Informationen oder um einen
              Besichtigungstermin zu vereinbaren.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:poysdorf-zentrum@gmail.com"
                className="group flex w-full items-center gap-3 rounded-xl border border-border px-6 py-5 transition-all hover:border-primary/40 hover:bg-primary/5 sm:w-auto"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">E-Mail</p>
                  <p className="text-sm font-medium">
                    poysdorf-zentrum@gmail.com
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Poysdorf Zentrum. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}