import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black">
          Tailwind done
        </h1>
      </main>
    </div>
  );
}
