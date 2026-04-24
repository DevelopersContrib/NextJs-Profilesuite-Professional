import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import { getData } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateMetadata() {
  const c = await getData();

  return {
    title: c.data.title === "" ? "Welcome to " + c.data.domainName : c.data.title,
    description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-bs-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
