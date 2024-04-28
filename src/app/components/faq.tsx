import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { PiPlant } from "react-icons/pi";
import Text from "./reusable/Text";
import { motion } from "framer-motion";
const faqs = [
  {
    id: 1,
    title: "What types of plants do you offer ?",
    description:
      "We offer a wide variety of plants including annuals, perennials, shrubs, trees, indoor plants, succulents, and more.",
  },
  {
    id: 2,
    title: "Do you sell seeds, seedlings, or fully grown plants?",
    description:
      "We sell a range of products, including seeds, seedlings, and fully grown plants to cater to different gardening needs and preferences.",
  },
  {
    id: 3,
    title: "Do you offer delivery services?",
    description:
      "Yes, we offer delivery services within Iraq. Delivery fees may apply depending on the distance and order size.",
  },
  {
    id: 4,
    title: "What payment methods do you accept?",
    description: "We accept cash, credit/debit cards.",
  },
  {
    id: 5,
    title: "How do I care for the plants I purchase from your nursery?",
    description:
      "We provide care instructions for each plant on our website and can offer personalized advice in-store or over the phone. Additionally, feel free to check out our Plant Care Guides section for more detailed information.",
  },
  {
    id: 6,
    title: "Can I visit your nursery to browse your selection in person?",
    description:
      "Absolutely! We welcome visitors to explore our nursery and discover our diverse range of plants firsthand. Our knowledgeable staff will be happy to assist you with any questions you may have.",
  },
];
export default function FAQ() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const OpenItem = (id: any) => {
    setIsOpen(OpenItem === id ? null : id);
  };

  return (
    <div className="grid gap-4 lg:gap-10" id="faq">
      <Text title="Our FAQs" subtitle="Learn more about " isIcon isCenter />
      <div className="grid gap-4">
        {faqs.map((item, index) => {
          return (
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
              key={item.id}
            >
              <Popover className="rounded border lg:border-b border-gray-500 transition-all duration-300 grid gap-3 py-2 lg:py-4 px-2">
                <Popover.Button
                  onClick={() => OpenItem(item.id)}
                  className="focus:outline-none"
                >
                  <div className="flex justify-between pr-2 items-start">
                    <p className="text-slate-300 lg:text-paragraph text-sm text-left">
                      {item.title}
                    </p>
                    <span>
                      <PiPlant />
                    </span>
                  </div>
                </Popover.Button>
                {item.id === isOpen && (
                  <Transition
                    as={Fragment}
                    enter="transition ease-in duration-300"
                    enterFrom="transform opacity-0 translate-y-1"
                    enterTo="transform opacity-100 translate-y-0"
                    leave="transition ease-in duration-300"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="text-sm text-gray-400 lg:py-4 py-2">
                      {item.description}
                    </Popover.Panel>
                  </Transition>
                )}
              </Popover>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
