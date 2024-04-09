import Link from "next/link";
import { PiPlant } from "react-icons/pi";
const links = [
  { id: 1, name: "Home", path: "" },
  { id: 2, name: "About", path: "" },
];
export default function Header() {
  return (
    <div className="flex bg-transparent justify-between font-header lg:px-12 p-4 lg:py-4 text-main items-center inset-x-0">
      <Link
        href="/"
        className="text-3xl hover:opacity-80 transition-all duration-300 flex items-center"
      >
        A<PiPlant className="text-secondary text-sm" />
      </Link>
      <div className="capitalize text-lg flex gap-5 lg:p-6">
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
