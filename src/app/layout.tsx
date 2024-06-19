import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
// const recursive = Recursive({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "BepperBox",
//   description: "Custom phone cases",
// };

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex flex-col min-h-[calc(100vh-3.5rem)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>
              {children}
            </Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
