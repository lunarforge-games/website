import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/coming-soon.svg"
          alt="Coming Soon"
          width={800}
          height={800}
          priority
        />
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Copyright © 2025 - BizNova
      </footer>
    </div>
  );
}
