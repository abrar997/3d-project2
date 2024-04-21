import { PiPlant } from "react-icons/pi";

type TextProps = {
  subtitle?: string;
  title?: string;
  paragraph?: string;
  isIcon?: boolean;
  isCenter?: boolean;
  isWelcome?: boolean;
};
export default function Text({
  title,
  subtitle,
  paragraph,
  isIcon,
  isCenter,
  isWelcome,
}: TextProps) {
  return (
    <div
      className={`flex flex-col lg:gap-3 gap-1 ${
        isCenter && "lg:items-center lg:justify-center text-center"
      }`}
    >
      <h2
        className={`${
          isWelcome ? "lg:text-2xl" : "text-sm"
        } text-secondary gap-2 flex items-center`}
      >
        {subtitle}
      </h2>
      {isIcon ? (
        <h1 className="lg:text-4xl text-2xl text-main font-header flex lg:text-center">
          {title} <PiPlant className="text-sm" />
        </h1>
      ) : (
        <h1 className="lg:text-7xl text-4xl capitalize font-bold whitespace-nowrap font-title">
          {title}
        </h1>
      )}
      {paragraph && (
        <p className="text-sm lg:text-paragraph text-text lg:leading-6">
          {paragraph}
        </p>
      )}
    </div>
  );
}
