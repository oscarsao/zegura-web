import type { Metadata } from "next";
import { Jost, Manrope } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Zegura | Tu socio de confianza para ahorrar en servicios básicos",
  description: "Zegura te ayuda a optimizar tus gastos en luz, gas y telecomunicaciones con asesoramiento experto y soluciones a medida.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${jost.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
