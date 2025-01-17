import Text from "./reusable/Text";

export default function About() {
  return (
    <div
      className="grid lg:grid-cols-4 gap-4 lg:gap-12 lg:items-end"
      id="about"
    >
      <div className="col-span-2 flex flex-col lg:gap-2">
        <Text
          title="Let's tell you our story"
          subtitle="About Us"
          paragraph=" At FA we are passionate about
          bringing the beauty of nature into your life. With a commitment to
          quality and customer satisfaction, we offer a diverse selection of
          plants carefully curated to suit every taste and need. Whether you're
          an experienced gardener or just starting your green journey, our team
          of experts is here to provide guidance and support every step of the
          way."
          isIcon
        />
      </div>
      <div className="col-span-2">
        <img
          src="https://images.unsplash.com/photo-1524492514790-8310bf594ea4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="lg:h-[420px] rounded lg:rounded-tl-full lg:border border-2 border-secondary brightness-75 p-4 w-full"
          title=""
        />
      </div>
    </div>
  );
}
