import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Schedule",
    path: "/schedule",
    newTab: false,
  },
  {
    id: 3,
    title: "Committees",
    newTab: false,
    submenu: [
      {
        id: 40,
        title: "High School Committees",
        path: "/committees-hs",
        newTab: false,
      },
      {
        id: 41,
        title: "University Committees",
        path: "/committees-uni",
        newTab: false,
      },
    ]
  },
  {
    id: 4,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "FAQ",
    path: "/info",
    newTab: false,
  },
];
export default menuData;
