import {
  GiFlowerPot,
  GiPlantSeed,
  GiPlantWatering,
  GiStumpRegrowth,
} from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { TbGrowth } from "react-icons/tb";
const data = [
  { id: 1, text: "Variety of plants", icon: <GiPlantWatering /> },
  { id: 2, text: "Delivery and shipping", icon: <GiPlantSeed /> },
  { id: 3, text: "Garden supplies", icon: <GiFlowerPot /> },
  { id: 4, text: "Variety of plants", icon: <GiStumpRegrowth /> },
  { id: 4, text: "Care of plants", icon: <TbGrowth /> },
];
export default function Features() {
  return (
    <div className="grid lg:px-16 gap-4 lg:gap-10 lg:text-center">
      <div className="grid gap-2 lg:items-center lg:justify-center">
        <h2 className="text-secondary text-sm">you can have</h2>
        <h1 className="lg:text-4xl text-3xl text-main font-header flex lg:text-center">
          Featured Categories <PiPlant className="text-sm" />
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-12 gap-3">
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
