import { PiPlant } from "react-icons/pi";
import Text from "./reusable/Text";

const data = [
  {
    id: 1,
    title: "Introduction to Gardening",
    description:
      "A beginner-friendly workshop that covers the basics of gardening, including soil preparation, planting techniques, and general plant care tips.",
    price: "$100",
    state: "free",
  },
  {
    id: 2,
    title: "Organic Gardening Workshop",
    description:
      " Educate participants about organic gardening principles, including soil health, natural pest control methods, and organic fertilization techniques.",
    price: "$100",
    state: "free",
  },
  {
    id: 3,
    title: "Specialty Plant Workshops",
    description:
      "Offer workshops focused on specific plant types or themes, such as rose gardening, bonsai cultivation, native plant landscaping, or tropical plant care. ",
    price: "$100",
    state: "free",
  },
];

export default function WorkShops() {
  return (
    <div
      id="workshops"
      className="grid gap-4 lg:gap-10 bg-dark rounded lg:p-6 lg:py-10 p-2"
    >
      <Text title="Workshops" subtitle="start with our" isCenter isIcon />
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-4">
        {data.map((item, index) => {
          const isFirstColumn = index % 3 === 0;
          const isLastColumn = (index + 1) % 3 === 0;

          return (
            <div
              key={item.id}
              className={`flex flex-col h-full gap-y-2 border border-secondary
                ${
                  isLastColumn
                    ? "lg:border-l border-secondary lg:rounded-none lg:rounded-tr-xl lg:rounded-br-xl rounded border"
                    : ""
                }
                ${
                  isFirstColumn
                    ? "lg:border-r border-secondary rounded border lg:rounded-none lg:rounded-tl-xl lg:rounded-bl-xl"
                    : ""
                }
                ${index === 2 ? "lg:rounded-br-lg" : ""}       `}
            >
              <div className="lg:p-4 lg:py-6 p-2 grid gap-2 lg:gap-4 h-full">
                <div>
                  <p className="lg:text-2xl text-lg text-slate-200 font-header">
                    {item.title}
                  </p>
                  <p className="text-red-400 text-xl font-title">
                    price : {item.price}
                  </p>
                </div>
                <div>
                  {item.description && (
                    <p className="opacity-80 text-sm lg:text-paragraph">
                      {item.description}
                    </p>
                  )}
                </div>

                <button className="rounded lg:h-[50px] opacity-85 mt-2 bg-secondary w-full py-2 hover:bg-opacity-65 transition-all duration-300">
                  start now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
