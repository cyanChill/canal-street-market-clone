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

export const HomeEvents = [
  {
    id: "1",
    date: "10/22",
    description: "Small Business Retail Pop Up Weekend!",
  },
  {
    id: "2",
    date: "02/07",
    description:
      "New Balance x Paperboy Paris by Greenhouse @ Canal Street Market",
  },
  { id: "3", date: "12/11", description: "Hack City 12/11" },
];
