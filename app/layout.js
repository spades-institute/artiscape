import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/reuseable";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siblings Photography Studios",
  description: "Portfolio website powered by Spadeshub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
