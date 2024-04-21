import { PiPlant } from "react-icons/pi";
import Text from "./reusable/Text";

export default function Events() {
  return (
    <div
      className="grid lg:grid-cols-4 gap-4 lg:gap-12 lg:items-end"
      id="events"
    >
      <div className="col-span-2">
        <img
          src="https://images.unsplash.com/photo-1599564576463-d038c6945bb5?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="lg:h-[420px] rounded lg:rounded-tr-full lg:rounded-br-xl border-2 lg:border border-secondary brightness-75 p-4"
          title=""
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <Text
          subtitle="Events"
          title="Sustainability Initiatives"
          paragraph="Many plant nurseries are embracing sustainable practices, such as
          using organic fertilizers, reducing water consumption, and
          implementing renewable energy sources. News about innovative
          sustainability initiatives within the industry can inspire other
          nurseries to adopt similar practices."
          isIcon
        />
      </div>
    </div>
  );
}
