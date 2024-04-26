import { Menu, Transition } from "@headlessui/react";
import { GiMonsteraLeaf } from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { Link } from "react-scroll";

const links = [
  { id: 1, name: "Home", path: "home" },
  { id: 2, name: "Features", path: "features" },
  { id: 3, name: "About", path: "about" },
  { id: 4, name: "Events", path: "events" },
  { id: 5, name: "Workshops", path: "workshops" },
  { id: 6, name: "FAQ", path: "faq" },
  { id: 7, name: "Contact us", path: "contact" },
];

export default function Header() {
  return (
    <div className="flex items-center bg-transparent font-header justify-between lg:px-20 p-4 lg:py-4 text-main inset-x-0">
      <Link
        to="/"
        duration={300}
        translate="yes"
        smooth={true}
        className="lg:text-3xl text-2xl hover:opacity-80 transition-all duration-300 flex items-center"
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
      <Menu className="relative lg:hidden text-right w-full h-full" as="div">
        <Menu.Button className="rotate-45 text-2xl">
          <GiMonsteraLeaf />
        </Menu.Button>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute rounded right-3 origin-top-right grid bg-dark items-start w-60 h-56 text-left p-2 mt-2 divide-y divide-gray-600">
            {links.map((item) => (
              <Menu.Item key={item.id}>
                <a
                  href={`#${item.path}`}
                  className="hover:opacity-80 flex gap-2 group items-center px-1 transition-all py-0.5 hover:bg-green-100 hover:text-black duration-300 cursor-pointer"
                >
                  <PiPlant className="text-sm group-hover:text-secondary " />
                  {item.name}
                </a>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
