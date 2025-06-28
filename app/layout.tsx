// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/component/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArticleHub",
  description: "Write and share your thoughts on tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          <main className="min-h-screen bg-gray-50 px-4">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
