import { Type } from "./types";

const planets = [
  "/placeholder/planets/plan1.png",
  "/placeholder/planets/plan2.png",
  "/placeholder/planets/plan3.png",
  "/placeholder/planets/plan4.png",
];
const characters = [
  "/placeholder/character/char1.png",
  "/placeholder/character/char2.png",
  "/placeholder/character/char3.png",
  "/placeholder/character/char4.png",
];
const vehicles = [
  "/placeholder/vechicle/vech1.png",
  "/placeholder/vechicle/vech2.png",
  "/placeholder/vechicle/vech3.png",
  "/placeholder/vechicle/vech4.png",
];

export const getPlaceholder = (type: Type) => {
  console.log(type);
  return type === "planets"
    ? planets[Math.floor(Math.random() * planets.length)]
    : type === "people"
    ? characters[Math.floor(Math.random() * characters.length)]
    : type === "vehicle"
    ? vehicles[Math.floor(Math.random() * vehicles.length)]
    : type === "film"
    ? vehicles[Math.floor(Math.random() * vehicles.length)]
    : type === "species"
    ? vehicles[Math.floor(Math.random() * vehicles.length)]
    : type === "starships"
    ? vehicles[Math.floor(Math.random() * vehicles.length)]
    : "";
};
