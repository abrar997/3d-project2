import { PiPlant } from "react-icons/pi";
import { Link } from "react-scroll";

const links = [
  { id: 1, name: "Home", path: "home" },
  { id: 2, name: "features", path: "features" },
  { id: 3, name: "About", path: "about" },
  { id: 4, name: "Events", path: "events" },
  { id: 5, name: "Workshops", path: "workshops" },
  { id: 6, name: "FAQ", path: "faq" },
  { id: 7, name: "Contact us", path: "contact" },
];

export default function Header() {
  return (
    <div className="flex bg-transparent font-header justify-between lg:px-20 p-4 lg:py-4 text-main items-center inset-x-0">
      <Link
        to="/"
        duration={300}
        translate="yes"
        smooth={true}
        className="text-3xl hover:opacity-80 transition-all duration-300 flex items-center"
      >
        FA
        <PiPlant className="text-secondary text-sm" />
      </Link>
      <div className="capitalize text-paragraph lg:flex gap-6 lg:p-6 hidden">
        {links.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            smooth={true}
            duration={300}
            translate="yes"
            className="hover:opacity-80 transition-all duration-300 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
