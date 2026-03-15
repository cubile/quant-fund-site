import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CUBILE PROP FUND',
  description:
    'CUBILE PROP FUND is an institutional quantitative investment firm focused on systematic derivatives strategies, volatility-based portfolio frameworks, and disciplined risk management.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0b0b0b] text-white">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-20 pb-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

