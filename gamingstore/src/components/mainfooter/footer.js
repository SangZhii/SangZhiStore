import image1 from "../../assets/icon-pay-01.png";
import image2 from "../../assets/icon-pay-02.png";
import image3 from "../../assets/icon-pay-03.png";
import image4 from "../../assets/icon-pay-04.png";
import image5 from "../../assets/icon-pay-05.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPatreon,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const FOOTER = [
  {
    main: "Useful Links",
    list: "PlayStation Studios",
    className: "pad-top",
  },
  {
    list: "PlayStation Games",
  },
  {
    list: "Xbox Consoles",
  },
  {
    list: "Xbox Games",
  },
  {
    list: "Xbox Accessories",
  },
  {
    list: "Cart",
  },
];

export const COMPANY = [
  {
    main2: "Our Company",
    list2: "Support",
    className: "pad-top",
  },
  {
    list2: "Privacy Policy",
  },
  {
    list2: "Sitemap",
  },
  {
    list2: "About Us",
  },
  {
    list2: "Legal",
  },
];

export const FOOTERIMAGE = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
];

export const SOCIAL = [
  {
    icon: <FontAwesomeIcon icon={faFacebookF} />,
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    icon: <FontAwesomeIcon icon={faPinterestP} />,
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    icon: <FontAwesomeIcon icon={faPatreon} />,
  },
];
