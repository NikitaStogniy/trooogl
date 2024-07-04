import Header from "@/components/Header";
import Content from "@/components/Search/Content";
import SearchSection from "@/components/Search/SearchSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start  bg-black pb-4">
      <Header />
      <SearchSection />
      <Content />
    </main>
  );
}
