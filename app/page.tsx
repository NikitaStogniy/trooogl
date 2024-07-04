import Header from "@/components/Header";
import Content from "@/components/Search/Content";
import SearchSection from "@/components/Search/SearchSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex flex-col items-center justify-start  bg-black pb-4">
        <Header />
        <SearchSection />
        <Content />
      </main>
    </Suspense>
  );
}
