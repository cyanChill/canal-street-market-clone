export const SiteTabs = [
  {
    color: "var(--white)",
    route: "",
    name: { english: "about", chinese: "大约" },
    first: true,
    delay: { desktop: "1500ms", mobile: "200ms" },
    rotation: "315deg",
    scaleOrigin: "top left",
  },
  {
    color: "var(--blue)",
    route: "food",
    name: { english: "food", chinese: "餐饮" },
    first: false,
    delay: { desktop: "1250ms", mobile: "300ms" },
    rotation: "45deg",
    scaleOrigin: "top right",
  },
  {
    color: "var(--red)",
    route: "retail",
    name: { english: "retail", chinese: "購物" },
    first: false,
    delay: { desktop: "1000ms", mobile: "400ms" },
    rotation: "45deg",
    scaleOrigin: "bottom left",
  },
  {
    color: "var(--orange)",
    route: "community",
    name: { english: "community", chinese: "文化" },
    first: false,
    delay: { desktop: "750ms", mobile: "500ms" },
    rotation: "315deg",
    scaleOrigin: "bottom right",
  },
];

export const HomePageCards = [
  {
    id: "1",
    image: "/assets/home_page_1.jpg",
    description:
      "Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.",
  },
  {
    id: "2",
    image: "/assets/home_page_2.jpg",
    description: "Retail Market Hours:<br />Fri - Sun: 11:00AM - 7:00PM",
  },
  {
    id: "3",
    image: "/assets/home_page_3.jpg",
    description:
      "Food Hall Hours:<br />Mon - Thurs: 11:00AM - 6:00PM<br />Fri - Sun: 11:00AM - 7:00PM",
  },
];

export const HomeEvents = [
  { date: "10/22", description: "Small Business Retail Pop Up Weekend!" },
  {
    date: "02/07",
    description:
      "New Balance x Paperboy Paris by Greenhouse @ Canal Street Market",
  },
  { date: "12/11", description: "Hack City 12/11" },
];
