import { c } from "../utils";
import GithubIcon from "./svg/GithubIcon";
import LinkedinIcon from "./svg/LinkedinIcon";
import TwitterIcon from "./svg/TwitterIcon";

export default function ExternalLink({ href, text, iconName }) {
  function getIconComponent(icName) {
    switch (icName) {
      case "github":
        return <GithubIcon />;
      case "linkedin":
        return <LinkedinIcon />;
      case "twitter":
        return <TwitterIcon />;
      default:
        return <></>;
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={c(
        "hover:bg-gray-50",
        "text-black",
        "px-2",
        "py-2",
        "m-0",
        "rounded-md",
        "text-sm",
        "font-medium",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-offset-gray-50",
        "focus:ring-white",
        "flex",
        "items-center",
      )}
    >
      {getIconComponent(iconName)} {text}
    </a>
  );
}
