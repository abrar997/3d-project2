import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
const social = [
  { id: 1, icon: <TfiEmail />, link: "" },
  { id: 2, icon: <FaGithub />, link: "" },
  { id: 3, icon: <FaLinkedin />, link: "" },
  { id: 4, icon: <TfiEmail />, link: "" },
];
export default function Footer() {
  return (
    <div className="lg:py-12 lg:mt-28 lg:px-20 p-4 bg-dark grid gap-4 lg:grid-cols-2">
      <div className="grid lg:gap-6 gap-4">
        <div className="grid lg:gap-3">
          <Link href="/" className="flex text-3xl lg:text-4xl font-header">
            FA <PiPlant className="text-lg text-secondary" />
          </Link>
        </div>
        <p className="hidden lg:flex font-header text-sm text-text gap-1">
          All rights reserved
          <a
            href="mailto:abraralrawi997@gmail.com"
            className="flex text-secondary"
          >
            @AbrarMuthana
            <PiPlant />
          </a>
          2024
        </p>
      </div>
      <div className="font-header grid lg:gap-6 gap-2 lg:ml-auto text-text">
        <p className="lg:text-xl text-main font-header gap-3 flex text-left lg:text-center">
          Welcome to <span className="text-secondary">FA</span> Nursery Plant
        </p>
        <div className="flex lg:gap-5 gap-3">
          {social.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="border-secondary border p-2 hover:bg-green-700"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <p className="lg:hidden flex font-header text-sm text-slate-400 mt-2 lg:text-text gap-2">
        All rights reserved
        <a
          href="mailto:abraralrawi997@gmail.com"
          className="flex text-secondary"
        >
          @AbrarMuthana
          <PiPlant />
        </a>
        2024
      </p>
    </div>
  );
}
