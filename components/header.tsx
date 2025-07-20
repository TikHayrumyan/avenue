import Image from "next/image";
import Navigation from "./navigation/nav";
import LanguageDropdown from "./ui/language-dropdown";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 px-6 sm:px-6 md:px-6 lg:px-20 xl:px-10 2xl:px-20 h-16 md:h-18 lg:h-20 2xl:h-20 items-center justify-center flex bg-[#f2f2f2]">
      <section className="w-full flex items-center justify-between h-full">
        <Image
          alt="logo"
          src="/logos/logo.png"
          width={200}
          height={100}
          className="w-[90px] xl:w-[110px] h-full object-cover"
        />
        <Navigation /> {/* Desktop navigation */}
        <div className="flex items-center xl:gap-6">
          <LanguageDropdown />
          <Link
            className="relative font-cormorant group lg:text-sm xl:text-lg font-bold text-[#344e41] hover:text-[#a3b18a]  uppercase"
            href="/sign-in"
          >
            Sign In
            <span
              className={`absolute left-0 right-0 -bottom-1 h-[1px] rounded bg-[#344e41] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 `}/>
          </Link>
        </div>
      </section>
    </header>
  );
}
