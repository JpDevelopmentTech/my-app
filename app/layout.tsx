import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Revista Salesianos 1975 - Edición Cincuentenario",
  description: "Celebrando 50 años de historia, memoria y hermandad de la promoción 1975 del Colegio Salesiano Eloy Valenzuela de Bucaramanga. Una revista especial conmemorativa de nuestro cincuentenario.",
  keywords: ["Salesianos", "Bucaramanga", "1975", "Cincuentenario", "Colegio Salesiano", "Eloy Valenzuela"],
  openGraph: {
    title: "Revista Salesianos 1975 - Edición Cincuentenario",
    description: "50 años de historia, memoria y hermandad",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
