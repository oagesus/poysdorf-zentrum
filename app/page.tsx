"use client";

import Image from "next/image";
import { Mail, MapPin, Ruler, TreePine, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-lora)]">
      {/* Floating Contact Button */}
      <div className="fixed top-4 right-6 z-50">
        <a href="#kontakt">
          <Button variant="default" size="lg" className="text-base px-8">
            Kontakt aufnehmen
          </Button>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop"
            alt="Haus Poysdorf Zentrum"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
          <Badge className="mb-4 bg-primary/90 text-primary-foreground">
            Zu Verkaufen
          </Badge>
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
              € 50.000
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

      {/* Key Facts */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-0 divide-x divide-border">
          {[
            { icon: Ruler, label: "Wohnfläche", value: "120 m²" },
            { icon: TreePine, label: "Grundstück", value: "450 m²" },
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

      {/* Details Section */}
      <section id="details" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Left Column - Description */}
            <div className="lg:col-span-3">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight">
                Über die Immobilie
              </h2>

              <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dieses charmante Haus befindet sich in einer der besten Lagen
                  von Poysdorf – direkt im Stadtzentrum, umgeben von lokalen
                  Geschäften, Restaurants und öffentlichen Einrichtungen. Die
                  ruhige Nachbarschaft bietet eine perfekte Balance zwischen
                  urbanem Komfort und ländlicher Idylle.
                </p>
                <p>
                  Das weitläufige Grundstück von 450 m² bietet viel Platz für
                  einen Garten, eine Terrasse oder individuelle
                  Gestaltungsmöglichkeiten. Ob als Familienheim, Ferienhaus oder
                  Investitionsobjekt – dieses Anwesen bietet vielseitige
                  Nutzungsmöglichkeiten.
                </p>
              </div>

            </div>

            {/* Right Column - Image Gallery & Info */}
            <div className="space-y-6 lg:col-span-2">
              <Card className="overflow-hidden py-0 gap-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
                    alt="Haus Garten"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="px-6 py-6 text-center text-sm text-muted-foreground">
                  Großzügiges Grundstück mit Gartenbereich
                </CardContent>
              </Card>

              {/* Price Card */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">Kaufpreis</p>
                  <p className="mt-1 font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary">
                    € 50.000
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

      {/* Location Section */}
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
                    Hauptstraße 12
                  </p>
                  <p>2170 Poysdorf, Niederösterreich</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10472.847036842!2d16.625!3d48.6667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d1e1a6b9a1b1d%3A0x400f7d1c69579a0!2sPoysdorf!5e0!3m2!1sde!2sat!4v1700000000000!5m2!1sde!2sat"
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

      {/* Contact Section */}
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

              <a
                href="tel:+4312345678"
                className="group flex w-full items-center gap-3 rounded-xl border border-border px-6 py-5 transition-all hover:border-primary/40 hover:bg-primary/5 sm:w-auto"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Telefon</p>
                  <p className="text-sm font-medium">+43 123 456 78</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Poysdorf Zentrum. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}