import Link from "next/link";
import { PiPlant } from "react-icons/pi";
const links = [
  { id: 1, name: "Home", path: "" },
  { id: 2, name: "features", path: "" },
  { id: 3, name: "About", path: "" },
  { id: 4, name: "Events", path: "faq" },
  { id: 5, name: "Workshops", path: "" },
  { id: 6, name: "FAQ", path: "" },
  { id: 5, name: "Contact us", path: "" },
];
export default function Header() {
  return (
    <div className="flex bg-transparent justify-between lg:px-20 p-4 lg:py-4 text-main items-center inset-x-0">
      <Link
        href="/"
        className="text-3xl hover:opacity-80 transition-all duration-300 flex items-center"
      >
        A<PiPlant className="text-secondary text-sm" />
      </Link>
      <div className="capitalize text-paragraph lg:flex gap-5 lg:p-6 hidden">
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className="hover:opacity-80 transition-all duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
