import { PiPlant } from "react-icons/pi";

export default function Contact() {
  return (
    <div className="grid gap-4 lg:gap-10">
      <div className="grid lg:gap-2 lg:items-center lg:justify-center lg:text-center">
        <h2 className="text-secondary text-sm">We will be happy if you </h2>
        <h1 className="lg:text-4xl text-2xl text-main font-header flex lg:text-center capitalize">
          Contact Us <PiPlant className="text-sm" />
        </h1>
      </div>
      <div>
        <div className="grid lg:grid-cols-4 items-start">
          <div className="grid gap-4 col-span-2">
            <p className="text-text lg:text-paragraph text-sm">
              We value your feedback and inquiries! Whether you have questions
              about our products, need gardening advice, or want to inquire
              about our services, our team at FA is here to assist you. Feel
              free to reach out to us through the contact form below, and we'll
              get back to you as soon as possible. Alternatively, you can visit
              our nursery in person during our operating hours to speak with our
              knowledgeable staff directly. We're passionate about helping you
              cultivate your green spaces and look forward to hearing from you
              soon!
            </p>
            <form className="grid gap-4 text-sm">
              <input
                type="text"
                className="w-full bg-transparent border rounded border-secondary outline-none p-4"
                placeholder="example@gmail.com"
              />
              <textarea
                className="w-full bg-transparent border rounded border-secondary outline-none p-4"
                placeholder="your message"
              />
              <button className="bg-secondary lg:w-24 hover:bg-opacity-70 transition-all duration-300 rounded py-2">
                send
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center w-full col-span-2 "></div>
        </div>
      </div>
    </div>
  );
}
