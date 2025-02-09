import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// import Provider from "@components/Provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hash Creative Blog",
  description: "Hash creative blog: Beer and Run : On On",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="main">
          <div className="gradient"/>
        </div>

        <main className="app">
          <Nav/>
          {children}
         
        </main>



        
      </body>
    </html>
  );
}
