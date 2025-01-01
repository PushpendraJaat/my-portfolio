import Link from "next/link";
import { FaLink, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { GridPatternDashed } from "./ui/GridPatternDashed";

const socials = [
  {
    name: "Github",
    href: "https://github.com/pushpendrajaat/",
    displayText: "pushpendrajaat",
    icon: LuGithub,
  },
  {
    name: "Twitter",
    href: "https://x.com/thepushpendra/",
    displayText: "@thepushpendra",
    icon: FaXTwitter,
  },
  {
    name: "Buy Me a Coffee",
    href: "https://buymeacoffee.com/pushpendrajaat/",
    displayText: "pushpendrajaat",
    icon: SiBuymeacoffee,
  },
  {
    name: "Email",
    href: "mailto:pushpendrajaat48@gmail.com",
    displayText: "pushpendrajaat48@gmail.com",
    icon: MdOutlineEmail,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pushpendrajaat/",
    displayText: "Pushpendra Jaat",
    icon: FaLinkedinIn,
  },
];

const SocialLink = ({
  href,
  displayText,
  Icon,
  isEmail,
}: {
  href: string;
  displayText: string;
  Icon: React.ComponentType;
  isEmail: boolean;
}) => (
  <div className="flex items-center gap-2">
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-2 hover:text-white hover:underline"
    >
      <Icon className="size-5" />
      <div className={isEmail ? "break-all" : ""}>{displayText}</div>
    </Link>
  </div>
);

const Footer = () => {
  return (
    <GridPatternDashed>
      <div className="px-8 md:px-20 sm:px-10 py-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 justify-start mb-2.5 font-bold">
          <FaLink className="size-5" />
          <div className="text-xl xl:text-2xl">Connect with me</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-neutral-400 font-medium">
          {socials.map(({ name, href, displayText, icon: Icon }, index) => (
            <SocialLink
              key={index}
              href={href}
              displayText={displayText}
              Icon={Icon}
              isEmail={name === "Email"}
            />
          ))}
        </div>
      </div>
    </GridPatternDashed>
  );
};

export default Footer;
