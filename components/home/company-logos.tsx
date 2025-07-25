import Image from "next/image";
import { Marquee } from "../magicui/marquee";

const companies = [
  "forbes2",
  "allure2",
  "new-york-times2",
  "cosmopolitan2",
  "bazaar2",
  "vogue2",
  "maria2",
];

export function CompanyLogos() {
  return (
    <section id="companies">
      <div className="pt-6 pb-12">
        <div className="mx-auto ">
          <h3 className="text-center uppercase text-xs font-semibold tracking-widest text-[#51514a]">
            Our partners
          </h3>
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:50s]">
              {companies.map((logo, idx) => (
                <Image
                  key={idx}
                  src={`/partners/${logo}.svg`}
                  className="h-10 w-36 dark:brightness-0 dark:invert mx-6"
                  alt={logo}
                  width={300}
                  height={300}
                />
              ))}
            </Marquee>
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/6 bg-gradient-to-r from-white dark:from-black"></div> */}
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/6 bg-gradient-to-l from-white dark:from-black"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
