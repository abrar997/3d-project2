import Link from "next/link";
const links = [{ id: 1, name: "Home", path: "" }];
export default function Header() {
  return (
    <div className="flex justify-between font-header lg:p-12 p-4 lg:py-4 text-main items-center inset-x-0">
      <Link
        href="/"
        className="text-3xl hover:opacity-80 transition-all duration-300"
      >
        A
      </Link>
      <div className="capitalize text-lg flex gap-3 lg:p-6">
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className="hover:opacity-90 transition-all duration-300 border border-secondary rounded p-2 border-dashed"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
