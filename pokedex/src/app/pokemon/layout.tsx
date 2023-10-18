import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function PokemonLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
     <section>
        <nav>
            This is pokemon NavBar!
        </nav>
          {children}
       </section>
    );
  }