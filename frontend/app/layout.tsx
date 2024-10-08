import type { Metadata } from "next";
import {GeistMono} from 'geist/font/mono';
import "./globals.css";
import React from "react";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";


export const metadata: Metadata = {
  title: "netnotes",
  description: "a simple online note-taking application",
};

export default function RootLayout({
  children,
  noteTitle,
  modal
}: Readonly<{
  children: React.ReactNode,
  noteTitle: React.ReactNode,
  modal: React.ReactNode,
}>) {
  return (
    <html lang="en">
    <body className={`${GeistMono.className} flex flex-col w-screen justify-center items-center overflow-hidden`}>
      <Header>{noteTitle}</Header>
      <main className="flex flex-col items-center justify-between w-full h-full flex-grow px-24 max-sm:px-8 py-12">
        {children}
      </main>
      <Footer />
      <div className={`absolute top-0 left-0`}>
        {modal}
      </div>
    </body>
    </html>
);
}
