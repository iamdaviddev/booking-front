import type { Metadata } from "next";
import { Libre_Franklin } from 'next/font/google'
import "./globals.css";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})

export const metadata: Metadata = {
  title: "Home",
  description: "Férias dos sonhos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable}>
        <NextAuthSessionProvider>
          {children}
          <ToastContainer />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
