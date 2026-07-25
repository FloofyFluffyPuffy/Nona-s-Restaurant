import React from 'react'
export const navs = [
  {
    id: 1,
    name: "Home",
    target: "hero",
    active: true,
  },
  {
    id: 2,
    name: "Menu",
    target: "menu",
    active: false,
  },
  {
    id: 3,
    name: "About",
    target: "about",
    active: false,
  },
  {
    id: 4,
    name: "Others",
    target: "others",
    active: false,
    dropdown: [
      { id: 40, name: "Booking", path: "#reservation", page: "/"},
      { id: 41, name: "Catering", path: "#events", page: "/" },
      { id: 42, name: "Chefs", path: "#chefs", page: "/about" },
      { id: 43, name: "Gallery", path: "#gallery", page: "/" },
      { id: 44, name: "Location", path: "#location", page: "/" },
    ],
  },
];
const Navigation = () => {
  return (
    <div>Navigation</div>
  )
}

export default Navigation