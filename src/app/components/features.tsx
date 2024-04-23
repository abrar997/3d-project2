import {
  GiFlowerPot,
  GiPlantSeed,
  GiPlantWatering,
  GiStumpRegrowth,
} from "react-icons/gi";
import { TbGrowth } from "react-icons/tb";
import Text from "./reusable/Text";
const data = [
  { id: 1, text: "Variety of plants", icon: <GiPlantWatering /> },
  { id: 2, text: "Delivery and shipping", icon: <GiPlantSeed /> },
  { id: 3, text: "Garden supplies", icon: <GiFlowerPot /> },
  { id: 4, text: "Variety of plants", icon: <GiStumpRegrowth /> },
  { id: 5, text: "Care of plants", icon: <TbGrowth /> },
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
      <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-6 gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 lg:items-center justify-center border p-4 rounded-lg border-secondary"
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
