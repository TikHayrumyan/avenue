import Link from "next/link";
import { FlowersCarousel } from "./flowers-carousel";

const collections = [
  { name: "All Bouquets", href: "#" },
  { name: "Summer Flowers", href: "#" },
  { name: "Best Sellers", href: "#" },
  { name: "Roses", href: "#" },
  { name: "Peonies", href: "#" },
  { name: "Signature Bouquets", href: "#" },
  { name: "Centerpieces", href: "#" },
  { name: "Orchids", href: "#" },
  { name: "Small Attentions", href: "#" },
  { name: "Big Moments", href: "#" },
  { name: "Single Variety", href: "#" },
  { name: "Plants", href: "#" },
];

const occasions = [
  { name: "Birthday", href: "#" },
  { name: "Anniversary", href: "#" },
  { name: "Congratulations", href: "#" },
  { name: "Thank You", href: "#" },
  { name: "New Baby", href: "#" },
  { name: "Get Well", href: "#" },
  { name: "Sympathy", href: "#" },
  { name: "Weddings", href: "#" },
  { name: "All Occasions", href: "#" },
];

const colors = [
  { name: "Red", href: "#" },
  { name: "Pink", href: "#" },
  { name: "White", href: "#" },
  { name: "Purple", href: "#" },
  { name: "Orange", href: "#" },
];

export default function FlowerDropdown() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
      {/* Left side: 3 columns (approx 70%) */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900">Collection</h3>
          <ul className="space-y-2">
            {collections.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900">Occasion</h3>
          <ul className="space-y-2">
            {occasions.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900">Color</h3>
          <ul className="space-y-2">
            {colors.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right side: Promotional images (approx 30%) */}
      <div className="md:col-span-4 grid grid-cols-1 gap-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900">Highlights</h3>
        <FlowersCarousel />
      </div>
    </div>
  );
}
