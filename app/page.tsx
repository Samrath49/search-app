import Image from "next/image";
import Footer from "./_components/footer";
import Header from "./_components/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            src="/logo.png"
            alt="Search logo"
            width={272}
            height={92}
            priority
          />
        </main>
      </div>
      <div className="flex gap-4 w-full justify-center">
        <Button variant="secondary">Google Search</Button>
        <a
          className={`btn btn-secondary`}
          target="_blank"
          href="https://doodles.google/"
        >
          <Button variant="secondary">{`I'm Feeling Lucky`}</Button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
