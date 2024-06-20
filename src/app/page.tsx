'use client'
import Image from "next/image";
import Header from "../app/Header";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center p-24">
            <Header />
          <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-center">
                  Welcome to the Next JS Project
              </h1>
          </div>
      </main>
  );
}
