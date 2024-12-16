import Image from "next/image";
import Footer from "./_components/footer";
import Header from "./_components/header";
import LanguageSupport from "./_components/language-support";
import { GoogleSearch } from "./_components/google-search";

export default function Home() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
          <Image
            src="/logo.png"
            alt="Search logo"
            width={272}
            height={92}
            priority
          />
        </main>
        <GoogleSearch />
        <LanguageSupport />
      </div>
      <Footer />
    </div>
  );
}
