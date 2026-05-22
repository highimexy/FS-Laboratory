"use client";

import {
  FileCode2,
  Braces,
  FileType2,
  Atom,
  Zap,
  Layout,
  Box,
  Cloud,
  Palette,
  Gamepad2, // Frontend
  Binary,
  TerminalSquare,
  Database,
  Share2,
  Activity,
  Server,
  HardDrive,
  Lock,
  TestTube, // Backend
  Terminal,
  GitBranch,
  Wrench,
  Container,
  Layers,
  GitMerge,
  ServerCrash,
  Globe,
  Shield,
  Activity as Metric, // Devops
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { useState } from "react";

type Lesson = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export const Frontend: Lesson[] = [
  {
    id: "f1",
    title: "Web Fundamentals",
    description: "Semantyczny HTML5, CSS3, Flexbox, Grid oraz działanie DOM.",
    icon: <FileCode2 className="w-6 h-6" />,
  },
  {
    id: "f2",
    title: "JavaScript Core",
    description:
      "Zmienne, funkcje, closures, asynchroniczność (Promises/Async-Await) i Event Loop.",
    icon: <Braces className="w-6 h-6" />,
  },
  {
    id: "f3",
    title: "TypeScript Basics",
    description:
      "Typowanie statyczne, interfejsy, unie, generics i konfiguracja tsconfig.",
    icon: <FileType2 className="w-6 h-6" />,
  },
  {
    id: "f4",
    title: "React Essentials",
    description:
      "Komponenty, cykl życia, przekazywanie propsów i renderowanie warunkowe.",
    icon: <Atom className="w-6 h-6" />,
  },
  {
    id: "f5",
    title: "React Hooks",
    description:
      "Zarządzanie stanem (useState, useReducer) i efekty uboczne (useEffect, useRef).",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: "f6",
    title: "Next.js Foundations",
    description:
      "App Router, różnice między renderowaniem po stronie serwera (SSR, RSC) a klienta (CSR).",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    id: "f7",
    title: "Styling & UI",
    description:
      "Tailwind CSS, clsx, twMerge oraz wdrażanie Headless UI (shadcn/ui, Radix).",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: "f8",
    title: "State Management",
    description:
      "Globalny stan aplikacji przy użyciu Zustand. Kiedy używać, a kiedy unikać.",
    icon: <Box className="w-6 h-6" />,
  },
  {
    id: "f9",
    title: "Data Fetching & Caching",
    description:
      "Obsługa API na froncie, mutacje i cache z wykorzystaniem React Query.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    id: "f10",
    title: "Advanced WebGL",
    description:
      "Tworzenie interaktywnych scen 3D z użyciem React Three Fiber oraz animacje z GSAP.",
    icon: <Gamepad2 className="w-6 h-6" />,
  },
];

export const Backend: Lesson[] = [
  {
    id: "b1",
    title: "Go Syntax & Types",
    description:
      "Zmienne, podstawowe typy danych, pętle (for) i instrukcje warunkowe (if/switch).",
    icon: <Binary className="w-6 h-6" />,
  },
  {
    id: "b2",
    title: "Data Structures",
    description:
      "Wycinki (slices), tablice (arrays) i mapy (maps). Alokacja pamięci (make vs new).",
    icon: <Database className="w-6 h-6" />,
  },
  {
    id: "b3",
    title: "Pointers & Structs",
    description:
      "Wskaźniki, przekazywanie przez wartość vs referencję. Definiowanie struktur i metod.",
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    id: "b4",
    title: "Interfaces",
    description:
      "Polimorfizm w Go. Tworzenie czystej architektury opartej na interfejsach.",
    icon: <TerminalSquare className="w-6 h-6" />,
  },
  {
    id: "b5",
    title: "Concurrency",
    description:
      "Zrównoleglanie kodu: Goroutines, Channels, Select, WaitGroup i Mutexy.",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    id: "b6",
    title: "HTTP & Routing",
    description:
      "Pakiet net/http. Tworzenie serwera REST API, obsługa requestów z użyciem Chi / Gin.",
    icon: <Server className="w-6 h-6" />,
  },
  {
    id: "b7",
    title: "PostgreSQL Fundamentals",
    description:
      "Relacyjne bazy danych, projektowanie tabel, relacje, indeksy i złożone zapytania SQL.",
    icon: <HardDrive className="w-6 h-6" />,
  },
  {
    id: "b8",
    title: "Database in Go",
    description:
      "Driver pgx, generowanie kodu z zapytań SQL przez sqlc i uruchamianie migracji.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    id: "b9",
    title: "Security & Middleware",
    description:
      "Autoryzacja (JWT), hashowanie haseł (bcrypt), CORS i rate limiting.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    id: "b10",
    title: "Integration Testing",
    description:
      "Testy jednostkowe (testify) i integracyjne z podnoszeniem bazy przez Testcontainers.",
    icon: <TestTube className="w-6 h-6" />,
  },
];

export const Devops: Lesson[] = [
  {
    id: "d1",
    title: "Linux Basics",
    description:
      "Poruszanie się po terminalu, uprawnienia (chmod/chown), zarządzanie procesami.",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    id: "d2",
    title: "Git & Version Control",
    description:
      "Branching, rebase vs merge, rozwiązywanie konfliktów, konwencje commitów.",
    icon: <GitBranch className="w-6 h-6" />,
  },
  {
    id: "d3",
    title: "Bash & Makefile",
    description:
      "Pisanie skryptów powłoki i automatyzacja uruchamiania środowisk deweloperskich.",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    id: "d4",
    title: "Docker Essentials",
    description:
      "Izolacja środowisk. Tworzenie własnych obrazów za pomocą Dockerfile (multi-stage builds).",
    icon: <Container className="w-6 h-6" />,
  },
  {
    id: "d5",
    title: "Docker Compose",
    description:
      "Orkiestracja wielu kontenerów (Go + Postgres + Redis) w lokalnym środowisku.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    id: "d6",
    title: "CI/CD Pipelines",
    description:
      "GitHub Actions: automatyczne lintowanie, uruchamianie testów i budowanie obrazów.",
    icon: <GitMerge className="w-6 h-6" />,
  },
  {
    id: "d7",
    title: "VPS Setup",
    description:
      "Konfiguracja serwera (np. na Hetzner), logowanie po kluczach SSH, firewall (UFW).",
    icon: <ServerCrash className="w-6 h-6" />,
  },
  {
    id: "d8",
    title: "Reverse Proxy",
    description:
      "Wystawianie aplikacji na zewnątrz z użyciem Caddy. Automatyczne certyfikaty SSL/TLS.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: "d9",
    title: "Security Best Practices",
    description:
      "Zarządzanie zmiennymi środowiskowymi (.env), zabezpieczanie portów, fail2ban.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    id: "d10",
    title: "Logging & Monitoring",
    description:
      "Ustrukturyzowane logi (JSON w Go), zbieranie metryk, podstawy monitorowania.",
    icon: <Metric className="w-6 h-6" />,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "devops">(
    "frontend",
  );

  const categories = {
    frontend: { title: "Frontend", data: Frontend },
    backend: { title: "Backend", data: Backend },
    devops: { title: "Devops", data: Devops },
  };

  const currentCategory = categories[activeTab];

  return (
    <div className="min-h-screen w-full bg-background p-8">
      <main className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-serif text-4xl mb-8 text-primary">FS-Laboratory</h1>

        {/* NAWIGACJA */}
        <div className="flex gap-4 mb-8 bg-muted p-1 rounded-lg border border-accent">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === "frontend"
                ? "bg-accent text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === "backend"
                ? "bg-accent text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab("devops")}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === "devops"
                ? "bg-accent text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Devops
          </button>
        </div>

        {/* --- WIDOK KART (Zależny od stanu) --- */}
        <div className="w-full border border-accent rounded-lg p-6 bg-card">
          <h2 className="font-serif text-2xl text-primary mb-6 border-b border-accent pb-2">
            {currentCategory.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCategory.data.map((lesson) => (
              <Link
                href={`/lessons/${lesson.id}`}
                key={lesson.id}
                className="group border border-accent rounded-md hover:-translate-y-1 hover:border-primary transition-all p-4 flex flex-col cursor-pointer bg-background"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-muted rounded-md group-hover:bg-primary/10 transition-colors">
                    {lesson.icon}
                  </div>
                  <h3 className="font-serif text-xl text-primary">
                    {lesson.title}
                  </h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  {lesson.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
