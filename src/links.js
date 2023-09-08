import GithubIcon from "./components/svg/GithubIcon";
import LinkedinIcon from "./components/svg/LinkedinIcon";
import TwitterIcon from "./components/svg/TwitterIcon";

export const links = {
  linkedin: {
    id: "linkedin",
    url: "https://www.linkedin.com/in/achristmascarl/",
    name: "LinkedIn",
    redirectActive: true,
    menuLink: true,
    iconComponent: <LinkedinIcon />,
  },
  twitter: {
    id: "twitter",
    url: "https://twitter.com/achristmascarl",
    name: "Twitter",
    redirectActive: true,
    menuLink: false,
    iconComponent: <TwitterIcon />,
  },
  github: {
    id: "github",
    url: "https://github.com/achristmascarl",
    name: "GitHub",
    redirectActive: true,
    menuLink: true,
    iconComponent: <GithubIcon />,
  },
};
