import Image from "next/image";
import Navigation from "./navigation/nav";

export default function Header() {
  return (
    <header className="sticky top-0 px-6 sm:px-6 md:px-6 lg:px-20 xl:px-10 2xl:px-20 h-16 md:h-18 lg:h-20 2xl:h-20 items-center justify-center flex bg-[#f2f2f2]">
      <section className="w-full flex items-center justify-between h-full">
        <Image
          alt="logo"
          src="/logos/test-logo-black.png"
          width={150}
          height={100}
          className="w-[150px] h-auto object-cover"
        />
        <Navigation /> {/* Desktop navigation */}
        <div>login</div>
      </section>
    </header>
  );
}
