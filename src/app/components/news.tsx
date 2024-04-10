import { PiPlant } from "react-icons/pi";

export default function News() {
  return (
    <div className="grid lg:grid-cols-4 gap-4 lg:gap-12 lg:items-end">
      <div className="col-span-2">
        <img
          src="https://images.unsplash.com/photo-1607296393394-6e25d0fc15cc?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="lg:h-[420px] rounded lg:rounded-tr-full lg:rounded-br-xl border-2 lg:border border-secondary brightness-75 p-4"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-secondary">Events and News</h2>
          <h1 className="lg:text-4xl text-3xl font-header capitalize flex gap-1">
            Let's tell you our story <PiPlant className="text-sm" />
          </h1>
        </div>
        <p className="lg:text-paragraph text-sm text-text lg:leading-6">
          At <span className="text-secondary">FA,</span> we are passionate about
          bringing the beauty of nature into your life. With a commitment to
          quality and customer satisfaction, we offer a diverse selection of
          plants carefully curated to suit every taste and need. Whether you're
          an experienced gardener or just starting your green journey, our team
          of experts is here to provide guidance and support every step of the
          way. From vibrant indoor plants to lush outdoor landscapes, we strive
          to inspire and empower our customers to create thriving green spaces
          that enhance their homes and lives. With a focus on sustainability and
          environmental stewardship, we aim to foster a deeper connection to the
          natural world and promote a greener, healthier planet for generations
          to come. Welcome to <span className="text-secondary">FA</span>, where
          your love for plants meets our passion for excellence.
        </p>
      </div>
    </div>
  );
}
