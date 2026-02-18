import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "Diseño moderno con Flexbox en Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>

      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          flex 
          flex-col 
          min-h-screen 
          bg-zinc-100 
          text-zinc-900
        `}
      >
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
          <h1 className="font-bold text-lg">Mi Proyecto</h1>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-500 transition">
              Inicio
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Servicios
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Contacto
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 justify-center items-center px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex justify-center items-center py-4 bg-white border-t text-sm text-gray-500">
          © 2026 Mi Proyecto - Todos los derechos reservados
        </footer>
      </body>
    </html>
  );
}