import {
  GiFlowerPot,
  GiPlantSeed,
  GiPlantWatering,
  GiStumpRegrowth,
} from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
const data = [
  { id: 1, text: "Variety of plants", icon: <GiPlantWatering /> },
  { id: 2, text: "Delivery and shipping", icon: <GiPlantSeed /> },
  { id: 3, text: "Garden supplies", icon: <GiFlowerPot /> },
  { id: 4, text: "Variety of plants", icon: <GiStumpRegrowth /> },
];
export default function Features() {
  return (
    <div className="grid lg:px-16 gap-6 lg:gap-10 lg:text-center">
      <div className="grid gap-2 lg:items-center lg:justify-center">
        <h2 className="text-secondary text-sm">you can have</h2>
        <h1 className="text-4xl text-main font-header flex text-center">
          Features <PiPlant className="text-sm" />
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 lg:items-center justify-center"
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
