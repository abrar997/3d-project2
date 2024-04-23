import {
  GiFlowerPot,
  GiPlantSeed,
  GiPlantWatering,
  GiStumpRegrowth,
  GiTreeGrowth,
} from "react-icons/gi";
import Text from "./reusable/Text";
const data = [
  { id: 1, text: "Variety of plants", icon: <GiPlantWatering /> },
  { id: 2, text: "Delivery and shipping", icon: <GiPlantSeed /> },
  { id: 3, text: "Garden supplies", icon: <GiFlowerPot /> },
  { id: 4, text: "Variety of plants", icon: <GiStumpRegrowth /> },
  { id: 5, text: "Care of plants", icon: <GiTreeGrowth /> },
];
export default function Features() {
  return (
    <div className="grid lg:px-12 gap-4 lg:gap-10 lg:text-center" id="features">
      <Text
        title="Featured Categories"
        subtitle="you can have"
        isIcon
        isCenter
      />
      <div className="lg:grid flex flex-wrap lg:grid-cols-5 lg:gap-6 gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex lg:flex-col gap-1 lg:gap-3 items-end w-full lg:items-center lg:justify-center border p-2 lg:p-4 rounded-lg border-secondary"
          >
            <div className="text-secondary text-3xl lg:text-5xl">
              {item.icon}
            </div>
            <p className="text-paragraph">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
